import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render, settled, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { extractCSSVars } from '@upfluence/oss-components/components/o-s-s/illustration';

module('Integration | Component | o-s-s/illustration', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<OSS::Illustration @src="/@upfluence/oss-components/assets/images/no-records.svg" />`);
    assert.dom('object').hasAttribute('data', '/@upfluence/oss-components/assets/images/no-records.svg');
  });

  test('the style is inserted', async function(assert) {
    await render(hbs`<OSS::Illustration @src="/@upfluence/oss-components/assets/images/no-records.svg" />`);
    await waitUntil(() => {
      return (<HTMLObjectElement>find('object')).contentDocument?.querySelector('svg');
    });
    await settled();
    assert.equal(
      (<HTMLObjectElement>find('object')).contentDocument!.querySelector('svg style')?.textContent,
      `:root { ${extractCSSVars().join(';')} }`
    );
  });
});
