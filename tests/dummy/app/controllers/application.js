import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service toast;

  @tracked loading = false;
  @tracked phonePrefix = '+33';
  @tracked phoneNumber = '782828282';
  @tracked showModal: boolean = false;

  code4CodeBlock = testScript;

  @action openModal(e) {
    e.stopPropagation();
    this.showModal = true;
  }

  @action closeModal() {
    this.showModal = false;
  }

  @action
  onPhoneNumberChange(prefix, phoneNumber) {
    console.log('onPhoneNumberChange', prefix, phoneNumber);
    this.phonePrefix = prefix;
    this.phoneNumber = phoneNumber;
  }

  @action
  triggerToast(type) {
    this.toast[type]('message', 'title');
  }

  @action
  toggleLoading() {
    this.loading = !this.loading;
  }

  @action
  destructiveAction(model, defer) {
    console.log('Destructive action triggered');
    console.log('model');
    defer.resolve();
  }

  @action
  loadingAction(_, defer) {
    setTimeout(() => {
      defer.resolve();
    }, 1000);
  }

  @action
  countDownAction() {
    console.log('countDownAction');
  }
}

const testScript = `import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/code-block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});`;
