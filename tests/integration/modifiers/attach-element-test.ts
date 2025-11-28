import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifiers | modifiers/attach-element', function (hooks) {
  setupRenderingTest(hooks);

  test('the attached element has no floating-related style when not using the modifier', async function (assert) {
    await render(hbs`
      <div class="reference-element">
        I am the reference!
      </div>

      <div class="attached-element">
        I am floaaaaaating !
      </div>
    `);

    const expectedEmptyAttributes = ['max-width', 'min-width', 'width', 'left', 'top', 'visibility'];

    const attachedElement = find('.attached-element') as HTMLElement;
    expectedEmptyAttributes.forEach((attr) => {
      assert.equal(attachedElement.style.getPropertyValue(attr), '');
    });
  });

  test('attached element is properly rendered w/ the right floating-ui positioning style', async function (assert) {
    await render(hbs`
      <div class="reference-element">
        I am the reference!
      </div>

      <div class="attached-element" {{attach-element to=".reference-element"}}>
        I am floaaaaaating !
      </div>
    `);

    const expectedFilledAttributes = ['max-width', 'min-width', 'width', 'left', 'top', 'visibility'];

    const attachedElement = find('.attached-element') as HTMLElement;
    expectedFilledAttributes.forEach((attr) => {
      assert.notEqual(attachedElement.style.getPropertyValue(attr), '');
    });
  });
});
