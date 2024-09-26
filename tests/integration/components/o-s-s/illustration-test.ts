import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { extractCSSVars } from '@upfluence/oss-components/components/o-s-s/illustration';

module('Integration | Component | o-s-s/illustration', function (hooks) {
  setupRenderingTest(hooks);

  test('the style is inserted in the fetched svg', async function (assert) {
    this.extractedCSSVars = extractCSSVars().join(';');

    await render(hbs`<OSS::Illustration @src="/@upfluence/oss-components/assets/images/no-records.svg" />`);
    await waitUntil(() => {
      return find('svg');
    });

    assert.deepEqual(find('svg style')!.textContent!.trim(), `:root { ${this.extractedCSSVars} }`.trim());
  });
});
