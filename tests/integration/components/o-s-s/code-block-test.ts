import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/code-block', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.codeBlock = `// Import example
    import { action } from '@ember/object';
    import { inject as service } from '@ember/service';`;
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::CodeBlock />`);

    assert.dom('.code-block').exists();
  });

  test('The code content is displayed properly', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} />`);

    const codeLines = findAll('.code-block code');
    assert.equal(codeLines.length, 3);
    assert.dom(codeLines[0]).hasText('// Import example');
    assert.dom(codeLines[1]).hasText(`import { action } from '@ember/object';`);
    assert.dom(codeLines[2]).hasText(`import { inject as service } from '@ember/service';`);
  });

  test('If copyable parameter is set, the copy button is visible', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} />`);

    assert.dom('.code-block .floating-copy-btn').exists();
  });

  test('Clicking on the copy button copies the code into the users clipboard', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} />`);

    const stubClipboard = sinon.stub(navigator.clipboard, 'writeText');
    await click('.code-block .floating-copy-btn');

    assert.ok(stubClipboard.calledOnceWithExactly(this.codeBlock));
  });

  test('if onCopyMessage is set, it shows a toast message when the code is copied', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} @onCopyMessage={{'Copied!'}} />`);
    const stubToast = sinon.stub(this.owner.lookup('service:toast'), 'success');
    await click('.code-block .floating-copy-btn');
    assert.ok(stubToast.calledOnceWithExactly('Copied!', ''));
  });

  test('If scrollable parameter is set, the component is scrollable', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @scrollable={{true}} />`);
    assert.dom('.code-container.scrollable').exists();
  });

  test('If scrollable parameter is unset, the component shows the bottom shadow', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} />`);
    assert.dom('.code-container.scroll-shadow').exists();
  });

  test('If collapseHeight is set, the height of the component is equal to the param size', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />`);
    assert.dom('.code-container').hasStyle({ height: '100px' });
  });

  test('If collapseHeight is set, the uncollapse button is visible', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />`);
    assert.dom('.floating-collapse-btn').exists();
    assert.dom('.floating-collapse-btn').hasText('Uncollapse');
  });

  test('Clicking on the uncollapse button doubles the components height', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />`);
    await click('.floating-collapse-btn');
    assert.dom('.code-container').hasStyle({ height: '200px' });
  });

  test('Clicking on the collapse button resets the height to the original collapseHeight parameter height', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{102}} />`);
    await click('.floating-collapse-btn');
    assert.dom('.code-container').hasStyle({ height: '204px' });
    await click('.floating-collapse-btn');
    assert.dom('.code-container').hasStyle({ height: '102px' });
  });

  test('Clicking on the uncollapse button show the collapse button', async function (assert) {
    await render(hbs`<OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />`);
    await click('.floating-collapse-btn');
    assert.dom('.floating-collapse-btn').hasText('Collapse');
  });
});
