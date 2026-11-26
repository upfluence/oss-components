import { associateDestroyableChild, destroy } from '@ember/destroyable';
import { action } from '@ember/object';
import { setOwner } from '@ember/owner';
import type Owner from '@ember/owner';
import type RouterService from '@ember/routing/router-service';
import { click, settled } from '@ember/test-helpers';

import type { IntlService } from 'ember-intl';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';
import type { SinonStub } from 'sinon';

import { confirm, confirmable, type ConfirmableOptions } from '@upfluence/oss-components/patterns/confirmation';

const DIALOG = '[data-control-name="confirmable-dialog"]';
const CONFIRM = '[data-control-name="dialog-primary-action-button"]';
const CANCEL = '[data-control-name="dialog-secondary-action-button"]';

const TEXTS = {
  title: 'Remove Batman?',
  subtitle: 'They will lose access.',
  confirmLabel: 'Remove',
  cancelLabel: 'Cancel'
};

type Subject = { name: string; gated: boolean; removeStub: SinonStub; remove(list: string): Promise<void> };

function buildSubject(owner: Owner, options: ConfirmableOptions<Subject, [string]>): Subject {
  class TestSubject {
    name = 'Batman';
    gated = true;
    removeStub = sinon.stub();

    @confirmable<Subject, [string]>(options)
    remove(list: string): Promise<void> {
      return this.removeStub(list);
    }
  }

  const subject = new TestSubject();
  setOwner(subject, owner);
  associateDestroyableChild(owner, subject);

  return subject;
}

module('Integration | Pattern | confirmation', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us', {
    confirmation: {
      remove: { title: 'Remove this member?', subtitle: 'They will lose access.', confirm: 'Remove', cancel: 'Keep' },
      partial: { title: 'Partial title', confirm: 'Yes', cancel: 'No' },
      html_title: 'Remove <strong>this member</strong>?'
    }
  });

  module('Texts', () => {
    test('It renders the given texts', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);

      subject.remove('team');
      await settled();

      assert.dom(`${DIALOG} .font-weight-semibold`).hasText('Remove Batman?');
      assert.dom(`${DIALOG} .font-size-sm`).hasText('They will lose access.');
      assert.dom(CONFIRM).hasText('Remove');
      assert.dom(CANCEL).hasText('Cancel');

      await click(CANCEL);
    });

    test('Function texts receive the instance and the method arguments', async function (assert) {
      const subject = buildSubject(this.owner, {
        ...TEXTS,
        title: (self, list) => `Remove ${self.name} from ${list}?`
      });

      subject.remove('team');
      await settled();

      assert.dom(`${DIALOG} .font-weight-semibold`).hasText('Remove Batman from team?');

      await click(CANCEL);
    });

    test('A text can be an htmlSafe translation', async function (assert) {
      const intl = this.owner.lookup('service:intl') as IntlService;
      const subject = buildSubject(this.owner, {
        ...TEXTS,
        title: () => intl.t('confirmation.html_title', { htmlSafe: true })
      });

      subject.remove('team');
      await settled();

      assert.dom(`${DIALOG} .font-weight-semibold strong`).hasText('this member');

      await click(CANCEL);
    });

    test('A baseTranslationKey reads the title, subtitle, confirm and cancel keys', async function (assert) {
      const subject = buildSubject(this.owner, { baseTranslationKey: 'confirmation.remove' });

      subject.remove('team');
      await settled();

      assert.dom(`${DIALOG} .font-weight-semibold`).hasText('Remove this member?');
      assert.dom(`${DIALOG} .font-size-sm`).hasText('They will lose access.');
      assert.dom(CONFIRM).hasText('Remove');
      assert.dom(CANCEL).hasText('Keep');

      await click(CANCEL);
    });

    test('An explicit text overrides its translation key', async function (assert) {
      const subject = buildSubject(this.owner, {
        baseTranslationKey: 'confirmation.partial',
        subtitle: 'Explicit subtitle'
      });

      subject.remove('team');
      await settled();

      assert.dom(`${DIALOG} .font-weight-semibold`).hasText('Partial title');
      assert.dom(`${DIALOG} .font-size-sm`).hasText('Explicit subtitle');

      await click(CANCEL);
    });

    test('A missing translation key fails', function (assert) {
      const subject = buildSubject(this.owner, { baseTranslationKey: 'confirmation.partial' });

      assert.throws(() => subject.remove('team'), /Missing translation "confirmation\.partial\.subtitle"/);
    });

    test('Without a baseTranslationKey, the title and both labels are mandatory', function (assert) {
      const subject = buildSubject(this.owner, { title: 'Remove Batman?' });

      assert.throws(() => subject.remove('team'), /A title, a confirmLabel and a cancelLabel are mandatory/);
    });
  });

  module('Flow', () => {
    test('When `when` returns false, the method runs without a dialog', async function (assert) {
      const subject = buildSubject(this.owner, { ...TEXTS, when: (self) => self.gated });
      subject.gated = false;

      await subject.remove('team');

      assert.dom(DIALOG).doesNotExist();
      assert.true(subject.removeStub.calledOnceWithExactly('team'));
    });

    test('Cancel closes the dialog without calling the method', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);

      const result = subject.remove('team');
      await settled();
      assert.dom(DIALOG).exists();

      await click(CANCEL);
      await result;

      assert.dom(DIALOG).doesNotExist();
      assert.true(subject.removeStub.notCalled);
    });

    test('Confirm calls the method with its arguments and closes the dialog', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);

      const result = subject.remove('team');
      await settled();
      await click(CONFIRM);
      await result;

      assert.dom(DIALOG).doesNotExist();
      assert.true(subject.removeStub.calledOnceWithExactly('team'));
    });

    test('A returned promise keeps the dialog open and loading until it settles', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);
      let resolveRemoval!: () => void;
      subject.removeStub.returns(new Promise<void>((resolve) => (resolveRemoval = resolve)));

      const result = subject.remove('team');
      await settled();
      await click(CONFIRM);

      assert.dom(`${CONFIRM} .fa-circle-notch`).exists();

      await click(CANCEL);
      assert.dom(DIALOG).exists();

      resolveRemoval();
      await result;
      await settled();

      assert.dom(DIALOG).doesNotExist();
    });

    test('A rejection closes the dialog and rejects the call', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);
      subject.removeStub.rejects(new Error('Removal failed'));

      const result = subject.remove('team');
      const rejection = assert.rejects(result, /Removal failed/);
      await settled();
      await click(CONFIRM);
      await rejection;
      await settled();

      assert.dom(DIALOG).doesNotExist();
    });

    test('Clicks on the dialog buttons do not propagate', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);
      const listener = sinon.spy();
      document.addEventListener('click', listener);

      subject.remove('team');
      await settled();
      await click(CANCEL);
      subject.remove('team');
      await settled();
      await click(CONFIRM);

      document.removeEventListener('click', listener);
      assert.true(listener.notCalled);
    });

    test('Calling the method again while its dialog is open reuses it', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);

      const first = subject.remove('team');
      const second = subject.remove('team');
      await settled();

      assert.dom(DIALOG).exists({ count: 1 });

      await click(CONFIRM);
      await Promise.all([first, second]);

      assert.true(subject.removeStub.calledOnce);
    });

    test('A new confirmation while one is loading resolves false', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);
      let resolveRemoval!: () => void;
      subject.removeStub.returns(new Promise<void>((resolve) => (resolveRemoval = resolve)));

      const result = subject.remove('team');
      await settled();
      await click(CONFIRM);

      const other = {};
      setOwner(other, this.owner);

      assert.false(await confirm(other, TEXTS));
      assert.dom(DIALOG).exists({ count: 1 });
      assert.dom(`${CONFIRM} .fa-circle-notch`).exists();

      resolveRemoval();
      await result;
    });
  });

  module('Dismissal', () => {
    test('Destroying the context closes the dialog', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);

      const result = subject.remove('team');
      await settled();
      destroy(subject);
      await settled();
      await result;

      assert.dom(DIALOG).doesNotExist();
      assert.true(subject.removeStub.notCalled);
    });

    test('A route change closes the dialog', async function (assert) {
      const subject = buildSubject(this.owner, TEXTS);

      const result = subject.remove('team');
      await settled();
      (this.owner.lookup('service:router') as RouterService).trigger('routeWillChange');
      await settled();
      await result;

      assert.dom(DIALOG).doesNotExist();
      assert.true(subject.removeStub.notCalled);
    });
  });

  test('It asserts when placed above @action', function (assert) {
    assert.throws(() => {
      class Broken {
        @confirmable(TEXTS)
        @action
        remove(): void {}
      }

      return Broken;
    }, /put `@action` above `@confirmable`/);
  });
});
