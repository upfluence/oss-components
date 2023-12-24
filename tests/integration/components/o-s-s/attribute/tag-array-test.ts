import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import findAll from '@ember/test-helpers/dom/find-all';

module('Integration | Component | o-s-s/attribute/tag-array', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Attribute::TagArray @label="Fruits" />`);

    assert.dom('[data-control-name="attribute-tag-array"]').exists();
  });

  test('it displays the @label parameter', async function (assert) {
    await render(hbs`<OSS::Attribute::TagArray @label="Fruits" />`);

    assert.dom('.oss-attribute__label').hasText('Fruits');
  });

  test('If @tags are passed to the component, they are displayed', async function (assert) {
    this.tags = ['watermelon', 'vodkamelon', 'whiskeymelon', 'tequilamelon'];
    await render(hbs`<OSS::Attribute::TagArray @label="Fruits" @tags={{this.tags}} />`);

    assert.dom('.oss-attribute__value .fx-row.fx-wrap').exists();
    const allUpfTags = findAll('.upf-tag');
    assert.equal(allUpfTags.length, this.tags.length);
  });

  test('If @tags are not passed to the component, a dash is displayed', async function (assert) {
    await render(hbs`<OSS::Attribute::TagArray @label="Fruits" />`);

    assert.dom('.oss-attribute__value').hasText('-');
  });
});
