import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/carousel', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.buttonIcon = undefined;
    this.animationStyle = 'shift';
    this.showIndicators = undefined;
    this.showControls = undefined;
    this.autoPlay = undefined;
    this.onPageChange = sinon.spy();
  });

  async function renderCarousel() {
    await render(hbs`
      <OSS::Carousel @showIndicators={{this.showIndicators}} @showControls={{this.showControls}}
                     @animationStyle={{this.animationStyle}} @buttonIcon={{this.buttonIcon}}
                     @autoPlay={{this.autoPlay}} @onPageChange={{this.onPageChange}}>
        <:pages>
          <div class="page">Page 1</div>
          <div class="page">Page 2</div>
          <div class="page">Page 3</div>
        </:pages>
      </OSS::Carousel>
    `);
  }

  test('it renders', async function (assert) {
    await renderCarousel();
    assert.dom('.oss-carousel').exists();
  });

  test('If no pages are yielded to the component, it throws an error', async function (assert) {
    setupOnerror((error: Error) => {
      assert.equal(error.message, '[component][OSS::Carousel] No pages found in the carousel');
    });

    await render(hbs`<OSS::Carousel />`);
  });

  test('it renders the pages', async function (assert) {
    await renderCarousel();
    assert.dom('.oss-carousel .page').exists({ count: 3 });
  });

  module('Indicators', () => {
    test('By default, it renders the indicators', async function (assert) {
      await renderCarousel();
      assert.dom('.oss-carousel .page-btn').exists({ count: 3 });
    });

    test('When specified, it does not render the indicators if showIndicators is set to false', async function (assert) {
      this.showIndicators = false;
      await renderCarousel();
      assert.dom('.oss-carousel .page-btn').doesNotExist();
    });
  });

  module('Controls (chevrons)', () => {
    test('By default, it does not render the controls', async function (assert) {
      await renderCarousel();
      assert.dom('.oss-carousel .carousel-control').doesNotExist();
      assert.dom('.oss-carousel .carousel-control--left').doesNotExist();
      assert.dom('.oss-carousel .carousel-control--right').doesNotExist();
    });

    test('When specified, it renders the controls if showControls is set to true', async function (assert) {
      this.showControls = true;
      await renderCarousel();
      assert.dom('.oss-carousel .carousel-control').exists();
      assert.dom('.oss-carousel .carousel-control--left').exists();
      assert.dom('.oss-carousel .carousel-control--right').exists();
    });

    test('When specified, it renders the controls outside the carousel if showControls is set to outside', async function (assert) {
      this.showControls = 'outside';
      await renderCarousel();
      assert.dom('.oss-carousel .carousel-control').exists();
      assert.dom('.oss-carousel .carousel-control--left').exists();
      assert.dom('.oss-carousel .carousel-control--right').exists();
      assert.dom('.page-container--side-padding').exists();
    });
  });

  module('Indicator button icon', () => {
    test('By default, it renders the default button icon', async function (assert) {
      await renderCarousel();
      assert.dom('.oss-carousel .fas.fa-circle').exists({ count: 3 });
    });

    test('When specified, it renders the custom button icon', async function (assert) {
      this.buttonIcon = 'fas fa-robot';
      await renderCarousel();
      assert.dom('.oss-carousel .fas.fa-robot').exists({ count: 3 });
    });
  });

  module('Animation style', () => {
    test('By default, it uses the shift animation style', async function (assert) {
      await renderCarousel();
      await click('.oss-carousel .page-btn:nth-child(2)');
      assert.dom('.animate--shift-from-left').exists();
    });

    test('When specified, it uses the slide animation style', async function (assert) {
      this.animationStyle = 'slide';
      await renderCarousel();
      await click('.oss-carousel .page-btn:nth-child(2)');
      assert.dom('.animate--slide-from-left').exists();
    });
  });

  module('Auto play', () => {
    test('When specified, it automatically switches to the next page', async function (assert) {
      this.autoPlay = 100;
      await renderCarousel();
      await new Promise((resolve) => setTimeout(resolve, 101));
      assert.dom('.oss-carousel .page--active').hasText('Page 2');
    });
  });

  test('@onPageChange is called when changing the page when the parameter is defined', async function (assert) {
    await renderCarousel();
    await click('.oss-carousel .page-btn:nth-child(2)');
    assert.true(this.onPageChange.calledOnceWithExactly());
  });
});
