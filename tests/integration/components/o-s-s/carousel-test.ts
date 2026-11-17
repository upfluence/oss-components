import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { set } from '@ember/object';
import { click, render, settled, setupOnerror, triggerEvent } from '@ember/test-helpers';
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
    this.loop = undefined;
    this.onPageChange = sinon.spy();
    this.swipeable = undefined;
    this.onSwipe = sinon.spy();
  });

  async function renderCarousel() {
    await render(hbs`
      <OSS::Carousel @showIndicators={{this.showIndicators}} @showControls={{this.showControls}}
                     @animationStyle={{this.animationStyle}} @buttonIcon={{this.buttonIcon}}
                     @autoPlay={{this.autoPlay}} @onPageChange={{this.onPageChange}}
                     @indicatorsPosition={{this.indicatorsPosition}} @loop={{this.loop}}
                     @swipeable={{this.swipeable}} @onSwipe={{this.onSwipe}}>
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
    assert.expect(1);
    setupOnerror((error: Error) => {
      assert.strictEqual(error.message, '[component][OSS::Carousel] No pages found in the carousel');
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

    test('When specified, it renders the indicators at the bottom if indicatorsPosition is set to bottom', async function (assert) {
      this.indicatorsPosition = 'bottom';
      await renderCarousel();
      assert.dom('.oss-carousel').hasClass('oss-carousel__reverse');
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
      assert.dom('.oss-carousel .carousel-control--left-outside').exists();
      assert.dom('.oss-carousel .carousel-control--right-outside').exists();
    });

    module('for @loop argument', (hooks) => {
      hooks.beforeEach(function () {
        this.showControls = true;
      });

      [undefined, true].forEach((value) => {
        module(`When loop is ${value}`, (hooks) => {
          hooks.beforeEach(function () {
            this.loop = value;
          });

          test('The previous control is shown on the first page', async function (assert) {
            await renderCarousel();
            assert.dom('.oss-carousel .carousel-control').exists();
            assert.dom('.oss-carousel .carousel-control--left').exists();
            assert.dom('.oss-carousel .carousel-control--right').exists();
          });

          test('The previous and next controls are shown on the center page', async function (assert) {
            await renderCarousel();
            await click('.oss-carousel .page-btn:nth-child(2)');
            assert.dom('.oss-carousel .carousel-control').exists();
            assert.dom('.oss-carousel .carousel-control--left').exists();
            assert.dom('.oss-carousel .carousel-control--right').exists();
          });

          test('The next control is shown on the last page', async function (assert) {
            await renderCarousel();
            await click('.oss-carousel .page-btn:nth-child(3)');
            assert.dom('.oss-carousel .carousel-control').exists();
            assert.dom('.oss-carousel .carousel-control--left').exists();
            assert.dom('.oss-carousel .carousel-control--right').exists();
          });
        });
      });

      module('When loop is false', (hooks) => {
        hooks.beforeEach(function () {
          this.showControls = true;
          this.loop = false;
        });

        test('The previous control is not shown on the first page', async function (assert) {
          await renderCarousel();
          assert.dom('.oss-carousel .carousel-control').exists();
          assert.dom('.oss-carousel .carousel-control--left').doesNotExist();
          assert.dom('.oss-carousel .carousel-control--right').exists();
        });

        test('The previous and next controls are shown on the center page', async function (assert) {
          await renderCarousel();
          await click('.oss-carousel .page-btn:nth-child(2)');
          assert.dom('.oss-carousel .carousel-control').exists();
          assert.dom('.oss-carousel .carousel-control--left').exists();
          assert.dom('.oss-carousel .carousel-control--right').exists();
        });

        test('The next control is not shown on the last page', async function (assert) {
          await renderCarousel();
          await click('.oss-carousel .page-btn:nth-child(3)');
          assert.dom('.oss-carousel .carousel-control').exists();
          assert.dom('.oss-carousel .carousel-control--left').exists();
          assert.dom('.oss-carousel .carousel-control--right').doesNotExist();
        });
      });
    });
  });

  module('data-control-name', (hooks) => {
    hooks.beforeEach(function () {
      this.showControls = true;
    });

    test('By default, it prefixes the controls with the default control name', async function (assert) {
      await renderCarousel();
      assert
        .dom('.oss-carousel .carousel-control--left')
        .hasAttribute('data-control-name', 'oss-carousel-control-left');
      assert
        .dom('.oss-carousel .carousel-control--right')
        .hasAttribute('data-control-name', 'oss-carousel-control-right');
    });

    test('When a data-control-name is passed, the controls are prefixed with it', async function (assert) {
      await render(hbs`
        <OSS::Carousel @showControls={{true}} data-control-name="custom-carousel">
          <:pages>
            <div class="page">Page 1</div>
            <div class="page">Page 2</div>
            <div class="page">Page 3</div>
          </:pages>
        </OSS::Carousel>
      `);

      assert.dom('.oss-carousel').hasAttribute('data-control-name', 'custom-carousel');
      assert
        .dom('.oss-carousel .carousel-control--left')
        .hasAttribute('data-control-name', 'custom-carousel-control-left');
      assert
        .dom('.oss-carousel .carousel-control--right')
        .hasAttribute('data-control-name', 'custom-carousel-control-right');
    });

    test('When an empty data-control-name is passed, the controls fall back on the default prefix', async function (assert) {
      await render(hbs`
        <OSS::Carousel @showControls={{true}} data-control-name="">
          <:pages>
            <div class="page">Page 1</div>
            <div class="page">Page 2</div>
            <div class="page">Page 3</div>
          </:pages>
        </OSS::Carousel>
      `);

      assert.dom('.oss-carousel').hasAttribute('data-control-name', '');
      assert
        .dom('.oss-carousel .carousel-control--left')
        .hasAttribute('data-control-name', 'oss-carousel-control-left');
      assert
        .dom('.oss-carousel .carousel-control--right')
        .hasAttribute('data-control-name', 'oss-carousel-control-right');
    });
  });

  module('Indicator button icon', () => {
    test('By default, it renders the default button icon', async function (assert) {
      await renderCarousel();
      assert.dom('.oss-carousel .fas.fa-circle').exists({ count: 3 });
    });

    test('When specified, it renders the custom button icon', async function (assert) {
      this.buttonIcon = 'fa-robot';
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

  module('Auto play', (hooks) => {
    let clock: sinon.SinonFakeTimers;

    hooks.beforeEach(function () {
      clock = sinon.useFakeTimers({ toFake: ['setInterval', 'clearInterval'] });
    });

    hooks.afterEach(function () {
      clock.restore();
    });

    test('When specified, it automatically switches to the next page', async function (assert) {
      this.autoPlay = 100;
      await renderCarousel();
      clock.tick(101);
      assert.dom('.oss-carousel .page--active').hasText('Page 2');
    });

    test('When autoPlay is updated, the new interval is applied', async function (assert) {
      this.autoPlay = 10000;
      await renderCarousel();

      set(this, 'autoPlay', 50);
      await settled();
      clock.tick(51);

      assert.dom('.oss-carousel .page--active').hasText('Page 2');
    });

    test('When autoPlay is updated, the previous interval is cleared', async function (assert) {
      this.autoPlay = 50;
      await renderCarousel();

      set(this, 'autoPlay', 10000);
      await settled();
      clock.tick(120);

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
    });

    test('When autoPlay is set to undefined, the auto play stops', async function (assert) {
      this.autoPlay = 50;
      await renderCarousel();

      set(this, 'autoPlay', undefined);
      await settled();
      clock.tick(120);

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
    });

    test('When autoPlay goes from undefined to a value, the auto play starts', async function (assert) {
      await renderCarousel();

      set(this, 'autoPlay', 50);
      await settled();
      clock.tick(51);

      assert.dom('.oss-carousel .page--active').hasText('Page 2');
    });
  });

  module('Swipe', (hooks) => {
    async function swipe(startX: number, endX: number, startY = 0, endY = 0) {
      await triggerEvent('.oss-carousel .page-container', 'touchstart', {
        changedTouches: [{ clientX: startX, clientY: startY }]
      });
      await triggerEvent('.oss-carousel .page-container', 'touchend', {
        changedTouches: [{ clientX: endX, clientY: endY }]
      });
    }

    hooks.beforeEach(function () {
      this.swipeable = true;
    });

    test('By default, swiping does nothing', async function (assert) {
      this.swipeable = undefined;
      await renderCarousel();
      await swipe(200, 100);

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
      assert.true(this.onSwipe.notCalled);
    });

    test('When swipeable is false, swiping does nothing', async function (assert) {
      this.swipeable = false;
      await renderCarousel();
      await swipe(200, 100);

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
      assert.true(this.onSwipe.notCalled);
    });

    test('Swiping left goes to the next page and calls @onSwipe with "left"', async function (assert) {
      await renderCarousel();
      await swipe(200, 100);

      assert.dom('.oss-carousel .page--active').hasText('Page 2');
      assert.true(this.onSwipe.calledOnceWithExactly('left'));
    });

    test('Swiping right goes to the previous page and calls @onSwipe with "right"', async function (assert) {
      await renderCarousel();
      await click('.oss-carousel .page-btn:nth-child(2)');
      await swipe(100, 200);

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
      assert.true(this.onSwipe.calledOnceWithExactly('right'));
    });

    test('Swiping right on the first page loops to the last page when loop is enabled', async function (assert) {
      await renderCarousel();
      await swipe(100, 200);

      assert.dom('.oss-carousel .page--active').hasText('Page 3');
    });

    test('A swipe shorter than the threshold is ignored', async function (assert) {
      await renderCarousel();
      await swipe(100, 70);

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
      assert.true(this.onSwipe.notCalled);
    });

    test('A mostly vertical swipe is ignored', async function (assert) {
      await renderCarousel();
      await swipe(200, 140, 0, 300);

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
      assert.true(this.onSwipe.notCalled);
    });

    test('A touchend without a touchstart is ignored', async function (assert) {
      await renderCarousel();
      await triggerEvent('.oss-carousel .page-container', 'touchend', {
        changedTouches: [{ clientX: 0, clientY: 0 }]
      });

      assert.dom('.oss-carousel .page--active').hasText('Page 1');
      assert.true(this.onSwipe.notCalled);
    });

    module('When loop is false', (hooks) => {
      hooks.beforeEach(function () {
        this.loop = false;
      });

      test('Swiping right on the first page does not change the page but still calls @onSwipe', async function (assert) {
        await renderCarousel();
        await swipe(100, 200);

        assert.dom('.oss-carousel .page--active').hasText('Page 1');
        assert.true(this.onSwipe.calledOnceWithExactly('right'));
      });

      test('Swiping left on the last page does not change the page but still calls @onSwipe', async function (assert) {
        await renderCarousel();
        await click('.oss-carousel .page-btn:nth-child(3)');
        await swipe(200, 100);

        assert.dom('.oss-carousel .page--active').hasText('Page 3');
        assert.true(this.onSwipe.calledOnceWithExactly('left'));
      });
    });
  });

  test('@onPageChange is called when changing the page when the parameter is defined', async function (assert) {
    await renderCarousel();
    await click('.oss-carousel .page-btn:nth-child(2)');
    assert.true(this.onPageChange.calledOnceWithExactly(1));
  });
});
