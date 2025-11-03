import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { CSSVariableToRGB, hexToRGB } from 'dummy/tests/integration/utils';

module('Tests | Utils', function (hooks) {
  setupRenderingTest(hooks);
  test('CSSVariableToRGB converts CSS variable to RGB', function (assert) {
    const root = document.documentElement;
    root.style.setProperty('--test-hex-color', '#ff5733');
    root.style.setProperty('--test-rgb-color', 'rgb(34, 139, 34)');
    root.style.setProperty('--test-rgba-color', 'rgba(139, 65, 9, 1)');

    const hexColor = CSSVariableToRGB('--test-hex-color');
    const rgbColor = CSSVariableToRGB('--test-rgb-color');
    const rgbaColor = CSSVariableToRGB('--test-rgba-color');

    assert.equal(hexColor, 'rgb(255, 87, 51)', 'Hex color converted to RGB correctly');
    assert.equal(rgbaColor, 'rgb(139, 65, 9)', 'RGBA color converted to RGB correctly');
    assert.equal(rgbColor, 'rgb(34, 139, 34)', 'RGB color converted to RGB correctly');
  });

  test('hexToRGB converts hex color to RGB', function (assert) {
    const shortHex = '#0f0';
    const longHex = '#00ff00';

    const shortHexRGB = hexToRGB(shortHex);
    const longHexRGB = hexToRGB(longHex);

    assert.equal(shortHexRGB, 'rgb(0, 255, 0)', 'Short hex color converted to RGB correctly');
    assert.equal(longHexRGB, 'rgb(0, 255, 0)', 'Long hex color converted to RGB correctly');
  });
});
