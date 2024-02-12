import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { render } from '@ember/test-helpers';
import triggerEvent from '@ember/test-helpers/dom/trigger-event';

module('Integration | Component | o-s-s/attribute/base', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('It renders', async function (assert) {
    await render(hbs`<OSS::Attribute::Base />`);

    assert.dom('.oss-attribute').exists();
  });

  test('The splattributes argument is set on the component', async function (assert) {
    await render(hbs`<OSS::Attribute::Base data-control-name="testing-splattributes" />`);

    assert.dom('[data-control-name="testing-splattributes"]').exists();
  });

  test('It displays the label named-block when passed', async function (assert) {
    await render(hbs`<OSS::Attribute::Base @value="bananas">
                      <:label><span>this is the label named-block</span></:label>
                     </OSS::Attribute::Base>`);

    assert.dom('.oss-attribute .oss-attribute__label').hasText('this is the label named-block');
  });

  module('Value handling', () => {
    test('It displays the value when passed', async function (assert) {
      await render(hbs`<OSS::Attribute::Base @value="bananas" />`);

      assert.dom('.oss-attribute .oss-attribute__value').hasText('bananas');
    });

    test('It displays the value named-block when passed', async function (assert) {
      await render(hbs`<OSS::Attribute::Base @value="bananas">
                       <:value>
                         <div class="fx-row fx-xalign-center fx-gap-px-6">
                           {{@value}}
                           <OSS::Icon @icon="fa-lock" />
                         </div>
                       </:value>
                     </OSS::Attribute::Base>`);

      assert.dom('.oss-attribute .oss-attribute__value .fa-lock').exists();
    });
  });

  module('Copy button behaviour', () => {
    test('The text is copyable by default if a value is passed', async function (assert) {
      await render(hbs`<OSS::Attribute::Base @label="label" @value="value" />`);

      await triggerEvent('.oss-attribute', 'mouseenter');
      assert.dom('.oss-attribute__copy').exists();
    });

    test('The text is not copyable if the value is blank', async function (assert) {
      await render(hbs`<OSS::Attribute::Base @label="label" @value="   " />`);

      await triggerEvent('.oss-attribute', 'mouseenter');
      assert.dom('.oss-attribute__copy').doesNotExist();
    });

    test('The text is not copyable if the value is undefined', async function (assert) {
      await render(hbs`<OSS::Attribute::Base @label="label" />`);

      await triggerEvent('.oss-attribute', 'mouseenter');
      assert.dom('.oss-attribute__copy').doesNotExist();
    });

    test('The text is not copyable if the @copyable parameter is set to false', async function (assert) {
      await render(hbs`<OSS::Attribute::Base @label="label" @value="value" @copyable={{false}} />`);

      await triggerEvent('.oss-attribute', 'mouseenter');
      assert.dom('.oss-attribute__copy').doesNotExist();
    });
  });
});
