'use strict';

define("dummy/tests/integration/components/modifiers/enable-input-autofocus-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | modifiers/enable-input-autofocus', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {});
    (0, _qunit.module)('When adding the modifier to a parent element,', function () {
      (0, _qunit.test)('it focuses the child input ', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
              <div class="test-container" {{enable-input-autofocus }}>
                   <input class="input" type="text" />
              </div>
            
        */
        {
          "id": "vtcc+nFJ",
          "block": "[[[1,\"\\n      \"],[11,0],[24,0,\"test-container\"],[4,[38,0],null,null],[12],[1,\"\\n           \"],[10,\"input\"],[14,0,\"input\"],[14,4,\"text\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"enable-input-autofocus\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/enable-input-autofocus-test.ts",
          "isStrictMode": false
        }));
        const inputElement = document.querySelector('.input');
        await assert.equal(document.activeElement, inputElement);
      });
      (0, _qunit.test)('it focuses the first enabled input ', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
              <div class="test-container" {{enable-input-autofocus }}>
                   <input class="input" type="text" disabled/>
                   <input class="input" type="text" disabled/>
                   <input class="input" type="text" disabled/>
                   <input class="input" type="text" />
              </div>
            
        */
        {
          "id": "XsYqiqLR",
          "block": "[[[1,\"\\n      \"],[11,0],[24,0,\"test-container\"],[4,[38,0],null,null],[12],[1,\"\\n           \"],[10,\"input\"],[14,0,\"input\"],[14,\"disabled\",\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n           \"],[10,\"input\"],[14,0,\"input\"],[14,\"disabled\",\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n           \"],[10,\"input\"],[14,0,\"input\"],[14,\"disabled\",\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n           \"],[10,\"input\"],[14,0,\"input\"],[14,4,\"text\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"enable-input-autofocus\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/enable-input-autofocus-test.ts",
          "isStrictMode": false
        }));
        const inputElements = document.querySelectorAll('.input');
        await assert.equal(document.activeElement, inputElements[3]);
      });
    });
    (0, _qunit.test)('When adding the modifier to an input it focuses the selected input ', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <div class="test-container">
                 <input class="input" type="text" {{enable-input-autofocus }}/>
            </div>
          
      */
      {
        "id": "XRL9B6j2",
        "block": "[[[1,\"\\n      \"],[10,0],[14,0,\"test-container\"],[12],[1,\"\\n           \"],[11,\"input\"],[24,0,\"input\"],[24,4,\"text\"],[4,[38,0],null,null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"enable-input-autofocus\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/enable-input-autofocus-test.ts",
        "isStrictMode": false
      }));
      const inputElement = document.querySelector('.input');
      await assert.equal(document.activeElement, inputElement);
    });
    (0, _qunit.test)('When adding the modifier to a disabled element, it does nothing', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <div class="test-container" >
                 <input class="input" type="text" disabled {{enable-input-autofocus }}/>
            </div>
          
      */
      {
        "id": "/kP5VjHi",
        "block": "[[[1,\"\\n      \"],[10,0],[14,0,\"test-container\"],[12],[1,\"\\n           \"],[11,\"input\"],[24,0,\"input\"],[24,\"disabled\",\"\"],[24,4,\"text\"],[4,[38,0],null,null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"enable-input-autofocus\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/enable-input-autofocus-test.ts",
        "isStrictMode": false
      }));
      const selectedInput = document.querySelector('.input');
      await assert.notEqual(document.activeElement, selectedInput);
    });
  });
});
define("dummy/tests/integration/components/modifiers/enable-tooltip-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  const PLACEMENTS = [undefined, 'top', 'bottom', 'left', 'right'];
  (0, _qunit.module)('Integration | Component | modifiers/enable-tooltip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.title = 'Title';
    });
    async function renderTooltip() {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <div class="test-container" style="height: 20px; width: 40px"
                 {{enable-tooltip title=this.title subtitle=this.subtitle placement=this.placement icon=this.icon trigger=this.trigger html=this.html}}>
            </div>
          
      */
      {
        "id": "xI8ZYDmx",
        "block": "[[[1,\"\\n      \"],[11,0],[24,0,\"test-container\"],[24,5,\"height: 20px; width: 40px\"],[4,[38,0],null,[[\"title\",\"subtitle\",\"placement\",\"icon\",\"trigger\",\"html\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"placement\"]],[30,0,[\"icon\"]],[30,0,[\"trigger\"]],[30,0,[\"html\"]]]]],[12],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"enable-tooltip\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/enable-tooltip-test.ts",
        "isStrictMode": false
      }));
    }
    (0, _qunit.test)("it doesn't render when the title is empty", async function (assert) {
      this.title = '';
      await renderTooltip();
      await assert.tooltip('.test-container').doesNotExist();
    });
    (0, _qunit.test)('it renders the correct title', async function (assert) {
      await renderTooltip();
      await assert.tooltip('.test-container').hasTitle(this.title);
    });
    (0, _qunit.module)('icon attribute', () => {
      (0, _qunit.test)('it renders the correct icon', async function (assert) {
        this.icon = 'far fa-wine-glass-alt';
        await renderTooltip();
        await assert.tooltip('.test-container').hasIcon(this.icon);
      });
      (0, _qunit.test)("it doesn't render the icon", async function (assert) {
        await renderTooltip();
        await assert.tooltip('.test-container').doesNotHaveIcon();
      });
    });
    (0, _qunit.module)('subtitle attribute', () => {
      (0, _qunit.test)('it renders the correct subtitle', async function (assert) {
        this.subtitle = 'subtitle';
        await renderTooltip();
        await assert.tooltip('.test-container').hasSubtitle(this.subtitle);
      });
      (0, _qunit.test)("it doesn't render the subtitle", async function (assert) {
        await renderTooltip();
        await assert.tooltip('.test-container').doesNotHaveSubtitle();
      });
    });
    (0, _qunit.module)('placement attribute', () => {
      PLACEMENTS.forEach(placement => {
        (0, _qunit.test)(`it renders the correct placement ${placement}`, async function (assert) {
          this.placement = placement;
          await renderTooltip();
          await assert.tooltip('.test-container').hasPlacement(placement || 'bottom');
        });
      });
    });
    (0, _qunit.module)('trigger attribute', () => {
      (0, _qunit.test)('it renders when hovering and focusing the element with undefined trigger', async function (assert) {
        await renderTooltip();
        await assert.tooltip('.test-container').exists();
        await assert.tooltip('.test-container').exists('focusin');
      });
      (0, _qunit.test)('it renders when hovering the element', async function (assert) {
        this.trigger = 'hover';
        await renderTooltip();
        await assert.tooltip('.test-container').exists();
      });
      (0, _qunit.test)('it renders when focusing the element', async function (assert) {
        this.trigger = 'focus';
        await renderTooltip();
        await assert.tooltip('.test-container').exists('focusin');
      });
    });
    (0, _qunit.module)('html attribute', () => {
      (0, _qunit.test)("it doesn't render the html safe by default", async function (assert) {
        await renderTooltip();
        await assert.tooltip('.test-container').isNotHtmlSafe();
      });
      (0, _qunit.test)('it renders the html safe when the value is true', async function (assert) {
        this.html = true;
        await renderTooltip();
        await assert.tooltip('.test-container').isHtmlSafe();
      });
      (0, _qunit.test)("it doesn't render the html safe when the value is false", async function (assert) {
        this.html = false;
        await renderTooltip();
        await assert.tooltip('.test-container').isNotHtmlSafe();
      });
    });
  });
});
define("dummy/tests/integration/components/modifiers/on-bottom-reached-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | modifiers/on-bottom-reached', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it triggers the callback when the bottom of the div is reached', async function (assert) {
      this.bottomReached = () => {
        assert.ok(true, 'Entered the bottom reached callback');
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
                 {{on-bottom-reached this.bottomReached}}>
              <div style="height: 250px">hello</div>
            </div>
          
      */
      {
        "id": "4QGZlHIh",
        "block": "[[[1,\"\\n      \"],[11,0],[24,0,\"scrollable\"],[24,5,\"background: red; height: 100px; overflow: scroll\"],[4,[38,0],[[30,0,[\"bottomReached\"]]],null],[12],[1,\"\\n        \"],[10,0],[14,5,\"height: 250px\"],[12],[1,\"hello\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"on-bottom-reached\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/on-bottom-reached-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.scrollTo)('.scrollable', 0, document.querySelector('.scrollable').scrollHeight - document.querySelector('.scrollable').clientHeight);
    });
  });
});
define("dummy/tests/integration/components/modifiers/scroll-shadow-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | modifiers/scroll-shadow', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const itemNumbers = new Array(6).fill(null).map((_, i) => i);
    class ResizeObserverMock {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    (0, _qunit.module)('when container has scrollbar', function (hooks) {
      hooks.beforeEach(function () {
        this.itemNumbers = itemNumbers;
      });
      (0, _qunit.test)('it should have scroll shadow class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <div style="position: relative">
                  <div class="items-container" style="max-height: 80px;overflow: auto;" {{scroll-shadow}}>
                    {{#each this.itemNumbers as |itemNumber|}}
                      <div>Item {{itemNumber}}</div>
                    {{/each}}
                  </div>
                </div>
              
        */
        {
          "id": "1mPW+p15",
          "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n          \"],[11,0],[24,0,\"items-container\"],[24,5,\"max-height: 80px;overflow: auto;\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"              \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/scroll-shadow-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.waitFor)('.scroll-shadow', {
          timeout: 2000
        });
        assert.dom('.items-container').hasClass('scroll-shadow');
      });
      (0, _qunit.module)('when using color', function () {
        (0, _qunit.test)('with default color', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <div style="position: relative">
                      <div class="items-container" style="max-height: 80px;overflow: auto;" {{scroll-shadow}}>
                        {{#each this.itemNumbers as |itemNumber|}}
                          <div>Item {{itemNumber}}</div>
                        {{/each}}
                      </div>
                    </div>
                  
          */
          {
            "id": "z6aOY32n",
            "block": "[[[1,\"\\n          \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n            \"],[11,0],[24,0,\"items-container\"],[24,5,\"max-height: 80px;overflow: auto;\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"                \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/scroll-shadow-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.waitFor)('.scroll-shadow--default', {
            timeout: 2000
          });
          assert.dom('.items-container').hasClass('scroll-shadow--default');
        });
        (0, _qunit.test)('with field color', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <div style="position: relative">
                      <div class="items-container" style="max-height: 80px;overflow: auto;" {{scroll-shadow color="field"}}>
                        {{#each this.itemNumbers as |itemNumber|}}
                          <div>Item {{itemNumber}}</div>
                        {{/each}}
                      </div>
                    </div>
                  
          */
          {
            "id": "RDW93VLM",
            "block": "[[[1,\"\\n          \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n            \"],[11,0],[24,0,\"items-container\"],[24,5,\"max-height: 80px;overflow: auto;\"],[4,[38,0],null,[[\"color\"],[\"field\"]]],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"                \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/scroll-shadow-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.waitFor)('.scroll-shadow--field', {
            timeout: 2000
          });
          assert.dom('.items-container').hasClass('scroll-shadow--field');
        });
      });
    });
    (0, _qunit.module)('when container has not scrollbar', function (hooks) {
      hooks.beforeEach(function () {
        this.itemNumbers = itemNumbers;
      });
      (0, _qunit.test)('it should not have scroll shadow classes', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <div style="position: relative">
                  <div class="items-container" {{scroll-shadow}}>
                    {{#each this.itemNumbers as |itemNumber|}}
                      <div>Item {{itemNumber}}</div>
                    {{/each}}
                  </div>
                </div>
              
        */
        {
          "id": "YKSrPTka",
          "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n          \"],[11,0],[24,0,\"items-container\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"              \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/scroll-shadow-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.items-container').doesNotHaveClass('scroll-shadow');
        assert.dom('.items-container').doesNotHaveClass('scroll-shadow--white');
      });
    });
    (0, _qunit.module)('when container change scrollbar dynamically', function (hooks) {
      hooks.beforeEach(function () {
        this.itemNumbers = itemNumbers;
      });
      (0, _qunit.test)('it should call ResizeObserver', async function (assert) {
        const resizeObserverStub = _sinon.default.stub(ResizeObserverMock.prototype, 'observe');
        window.ResizeObserver = ResizeObserverMock;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <div style="position: relative">
                  <div class="items-container" {{scroll-shadow}}>
                    {{#each this.itemNumbers as |itemNumber|}}
                      <div>Item {{itemNumber}}</div>
                    {{/each}}
                  </div>
                </div>
              
        */
        {
          "id": "YKSrPTka",
          "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n          \"],[11,0],[24,0,\"items-container\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"              \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/modifiers/scroll-shadow-test.ts",
          "isStrictMode": false
        }));
        let container = document.querySelector('.items-container');
        container.style.maxHeight = '80px';
        container.style.overflow = 'auto';
        assert.ok(resizeObserverStub.calledOnce);
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/access-panel-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/object", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _object, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon",0,"@ember/object"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/access-panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.records = [{
        label: 'foo'
      }, {
        label: 'bar'
      }];
      this.loading = false;
      this.initialLoad = false;
      this.loadMore = _sinon.default.stub();
      this.onSearch = _sinon.default.stub();
      this.onClose = _sinon.default.stub();
    });
    async function renderComponent() {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AccessPanel
                @records={{this.records}} @loading={{this.loading}} @initialLoad={{this.initialLoad}}
                @onBottomReached={{this.loadMore}} @onSearch={{this.onSearch}} @onClose={{this.onClose}}>
                  <:header>Header</:header>
                  <:columns>Columns</:columns>
                  <:row as |record|>row display: {{record.label}}</:row>
                  <:empty-state><div class="empty-state">empty state</div></:empty-state>
                  <:no-results><div class="no-results">no search results</div></:no-results>
                </OSS::AccessPanel>
            
      */
      {
        "id": "p+Z3gD81",
        "block": "[[[8,[39,0],null,[[\"@records\",\"@loading\",\"@initialLoad\",\"@onBottomReached\",\"@onSearch\",\"@onClose\"],[[30,0,[\"records\"]],[30,0,[\"loading\"]],[30,0,[\"initialLoad\"]],[30,0,[\"loadMore\"]],[30,0,[\"onSearch\"]],[30,0,[\"onClose\"]]]],[[\"header\",\"columns\",\"row\",\"empty-state\",\"no-results\"],[[[[1,\"Header\"]],[]],[[[1,\"Columns\"]],[]],[[[1,\"row display: \"],[1,[30,1,[\"label\"]]]],[1]],[[[10,0],[14,0,\"empty-state\"],[12],[1,\"empty state\"],[13]],[]],[[[10,0],[14,0,\"no-results\"],[12],[1,\"no search results\"],[13]],[]]]]],[1,\"\\n      \"]],[\"record\"],false,[\"o-s-s/access-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/access-panel-test.ts",
        "isStrictMode": false
      }));
    }
    (0, _qunit.test)('it renders the right empty state when no records are found and there is no ongoing search', async function (assert) {
      this.records = [];
      await renderComponent();
      assert.dom('.empty-state').exists();
      assert.dom('.empty-state').hasText('empty state');
    });
    (0, _qunit.test)('the initial loading state is correctly displayed', async function (assert) {
      this.loading = true;
      this.initialLoad = true;
      await renderComponent();
      assert.dom('.oss-access-panel-container__row').exists({
        count: 12
      });
      assert.dom('.oss-access-panel-container__row .upf-skeleton-effect').exists({
        count: 24
      });
    });
    (0, _qunit.test)('the initial loading state is correctly displayed', async function (assert) {
      this.loading = true;
      this.initialLoad = false;
      await renderComponent();
      assert.dom('.oss-access-panel-container__row').exists({
        count: 5
      });
      assert.dom('.oss-access-panel-container__row .upf-skeleton-effect').exists({
        count: 6
      });
    });
    (0, _qunit.test)('The header named block is correctly filled', async function (assert) {
      await renderComponent();
      assert.dom('.oss-access-panel-container__header').exists();
      assert.dom('.oss-access-panel-container__header').hasText('Header');
    });
    (0, _qunit.test)('The columns named block is correctly filled', async function (assert) {
      await renderComponent();
      assert.dom('.oss-access-panel-container__rows-header').exists();
      assert.dom('.oss-access-panel-container__rows-header').hasText('Columns');
    });
    (0, _qunit.test)('The records are correctly displayed using the row named block', async function (assert) {
      await renderComponent();
      assert.dom('.oss-access-panel-container__row').exists({
        count: 2
      });
      assert.dom('.oss-access-panel-container__row:first-child').hasText('row display: foo');
      assert.dom('.oss-access-panel-container__row:last-child').hasText('row display: bar');
    });
    (0, _qunit.module)('Search', function () {
      (0, _qunit.test)('it calls the onSearch arg when a keyword is typed', async function (assert) {
        await renderComponent();
        await (0, _testHelpers.fillIn)('.oss-input-container input', 'fo');
        await (0, _testHelpers.typeIn)('.oss-input-container input', 'o', {
          delay: 0
        });
        assert.ok(this.onSearch.calledOnceWithExactly('foo'));
      });
      (0, _qunit.test)('it is autofocus', async function (assert) {
        await renderComponent();
        assert.dom('.oss-input-container input').isFocused();
      });
      (0, _qunit.test)('it renders the right empty state when no records are found and there is an ongoing search', async function (assert) {
        this.onSearch = _sinon.default.stub().callsFake(() => {
          (0, _object.set)(this, 'records', []);
        });
        await renderComponent();
        await (0, _testHelpers.fillIn)('.oss-input-container input', 'fo');
        await (0, _testHelpers.typeIn)('.oss-input-container input', 'o', {
          delay: 0
        });
        assert.dom('.no-results').exists();
        assert.dom('.no-results').hasText('no search results');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/alert-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  const ALERT_SKINS = ['success', 'error', 'info', 'warning'];
  const ICONS = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-triangle',
    info: 'fa-info-circle',
    warning: 'fa-exclamation-circle'
  };
  (0, _qunit.module)('Integration | Component | o-s-s/alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Alert @skin="success" />
      */
      {
        "id": "W+/hkDVR",
        "block": "[[[8,[39,0],null,[[\"@skin\"],[\"success\"]],null]],[],false,[\"o-s-s/alert\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-alert').exists({
        count: 1
      });
    });
    (0, _qunit.test)('it sets info as default if no skin is specified', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Alert />
      */
      {
        "id": "5PmDt1XJ",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/alert\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-alert').hasClass('upf-alert--info');
    });
    ALERT_SKINS.forEach(skin => {
      (0, _qunit.test)(`it renders ${skin} skin correctly`, async function (assert) {
        this.skin = skin;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Alert @skin={{this.skin}} @title={{concat "Title " this.skin}} @subtitle={{concat "Subitle " this.skin}} />
        */
        {
          "id": "aqkzmJ0E",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@title\",\"@subtitle\"],[[30,0,[\"skin\"]],[28,[37,1],[\"Title \",[30,0,[\"skin\"]]],null],[28,[37,1],[\"Subitle \",[30,0,[\"skin\"]]],null]]],null]],[],false,[\"o-s-s/alert\",\"concat\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-alert .icon i').hasClass('far');
        assert.dom('.upf-alert .icon i').hasClass(`${ICONS[skin]}`);
        assert.dom('.upf-alert .title').hasText(`Title ${skin}`);
        assert.dom('.upf-alert .subtitle').hasText(`Subitle ${skin}`);
      });
    });
    (0, _qunit.module)('@plain parameter', function () {
      (0, _qunit.test)('if true, the background-color is grey', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Alert @plain={{true}} />
        */
        {
          "id": "9PBBh83r",
          "block": "[[[8,[39,0],null,[[\"@plain\"],[true]],null]],[],false,[\"o-s-s/alert\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-alert .main-container').hasClass('main-container--plain');
      });
      (0, _qunit.test)('if false, the background-color is white', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Alert @plain={{false}} />
        */
        {
          "id": "m6er04rU",
          "block": "[[[8,[39,0],null,[[\"@plain\"],[false]],null]],[],false,[\"o-s-s/alert\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-alert .main-container').hasNoClass('main-container--plain');
      });
      (0, _qunit.test)('if undefined, the background-color is grey', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Alert />
        */
        {
          "id": "5PmDt1XJ",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/alert\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-alert .main-container').hasClass('main-container--plain');
      });
    });
    (0, _qunit.module)('@closable parameter', function () {
      (0, _qunit.test)('if true, display the cross icon which delete alert when you click on it', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div><OSS::Alert @closable={{true}} /></div>
        */
        {
          "id": "4WvcGbf/",
          "block": "[[[10,0],[12],[8,[39,0],null,[[\"@closable\"],[true]],null],[13]],[],false,[\"o-s-s/alert\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-alert').exists();
        assert.dom('.upf-alert .main-container .fx-col i').exists();
        assert.dom('.upf-alert .main-container .fx-col i').hasClass('fa-times');
        await (0, _testHelpers.click)('.upf-alert .main-container .fx-col i');
        assert.dom('.upf-alert').doesNotExist();
      });
      (0, _qunit.test)('if false, the cross icon is not displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Alert @closable={{false}} />
        */
        {
          "id": "S79GzUFn",
          "block": "[[[8,[39,0],null,[[\"@closable\"],[false]],null]],[],false,[\"o-s-s/alert\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-alert').exists();
        assert.dom('.upf-alert .main-container .fx-col i').doesNotExist();
      });
      (0, _qunit.test)('if undefined, the cross icon is not displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Alert />
        */
        {
          "id": "5PmDt1XJ",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/alert\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-alert').exists();
        assert.dom('.upf-alert .main-container .fx-col i').doesNotExist();
      });
      (0, _qunit.test)('clicking the cross icon also calls the onClose argument provided', async function (assert) {
        this.onClose = _sinon.default.stub();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div><OSS::Alert @closable={{true}} @onClose={{this.onClose}} /></div>
        */
        {
          "id": "I/qKJ2E+",
          "block": "[[[10,0],[12],[8,[39,0],null,[[\"@closable\",\"@onClose\"],[true,[30,0,[\"onClose\"]]]],null],[13]],[],false,[\"o-s-s/alert\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-alert .main-container .fx-col i');
        assert.ok(this.onClose.calledOnce);
        assert.dom('.upf-alert').doesNotExist();
      });
    });
    (0, _qunit.test)('it renders the extra-content named block', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Alert><:extra-content><div>Hello</div></:extra-content></OSS::Alert>
      */
      {
        "id": "r0V+ir5q",
        "block": "[[[8,[39,0],null,null,[[\"extra-content\"],[[[[10,0],[12],[1,\"Hello\"],[13]],[]]]]]],[],false,[\"o-s-s/alert\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/alert-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-alert .text-container div').hasText('Hello');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/anchor-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/anchor', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.router = this.owner.lookup('service:router');
      this.transitionToStub = _sinon.default.stub(this.router, 'transitionTo');
    });
    (0, _qunit.test)('When link is registered in router it render as a anchor element', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Anchor @link="http://www.google.fr" target="_blank" >test</OSS::Anchor>
      */
      {
        "id": "P55/lmUh",
        "block": "[[[8,[39,0],[[24,\"target\",\"_blank\"]],[[\"@link\"],[\"http://www.google.fr\"]],[[\"default\"],[[[[1,\"test\"]],[]]]]]],[],false,[\"o-s-s/anchor\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/anchor-test.ts",
        "isStrictMode": false
      }));
      assert.dom('a').hasNoClass('ember-view');
    });
    (0, _qunit.test)('When link is registered in router it render as a linkTo helper', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Anchor @link="index" >test</OSS::Anchor>
      */
      {
        "id": "uh5pV7IZ",
        "block": "[[[8,[39,0],null,[[\"@link\"],[\"index\"]],[[\"default\"],[[[[1,\"test\"]],[]]]]]],[],false,[\"o-s-s/anchor\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/anchor-test.ts",
        "isStrictMode": false
      }));
      assert.dom('a').hasClass('ember-view');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/array-input-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | OSS::ArrayInput', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    const onChange = _sinon.default.stub();
    const validator = _sinon.default.stub();
    async function fillInputAndValidate(keyword = 'keyword') {
      await (0, _testHelpers.fillIn)('.array-input-container input', keyword);
      let input = (0, _testHelpers.find)('.array-input-container input');
      await (0, _testHelpers.triggerKeyEvent)(input, 'keydown', 'Enter', {
        code: 'Enter'
      });
    }
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ArrayInput />
      */
      {
        "id": "CxaNGDCL",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/array-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
        "isStrictMode": false
      }));
      assert.dom('.array-input-container').exists();
    });
    (0, _qunit.module)('@values parameter', hooks => {
      hooks.beforeEach(function () {
        this.loadedValues = ['value1', 'value2'];
      });
      (0, _qunit.test)('Passing @values parameter displays the items', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @values={{this.loadedValues}} />
        */
        {
          "id": "dsPv8fje",
          "block": "[[[8,[39,0],null,[[\"@values\"],[[30,0,[\"loadedValues\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        const domTags = await (0, _testHelpers.findAll)('.upf-chip');
        assert.dom(domTags[0]).hasText('value1');
        assert.dom(domTags[1]).hasText('value2');
      });
    });
    (0, _qunit.module)('WHEN @onChange function is set', hooks => {
      hooks.beforeEach(function () {
        this.onChange = onChange;
      });
      (0, _qunit.test)('it is triggered on keyword addition', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @onChange={{this.onChange}} />
        */
        {
          "id": "MASD4RKb",
          "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await fillInputAndValidate();
        assert.ok(onChange.calledWith(['keyword']));
      });
      (0, _qunit.test)('it is triggered on keyword deletion', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @onChange={{this.onChange}} />
        */
        {
          "id": "MASD4RKb",
          "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await fillInputAndValidate();
        assert.ok(onChange.calledWith(['keyword']));
        await (0, _testHelpers.click)('.upf-chip i');
        assert.dom('.upf-chip').doesNotExist();
        assert.ok(onChange.calledWith([]));
      });
      (0, _qunit.test)('it is triggered on keyword edition', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @onChange={{this.onChange}} />
        */
        {
          "id": "MASD4RKb",
          "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await fillInputAndValidate();
        assert.ok(onChange.calledWith(['keyword']));
        await (0, _testHelpers.triggerKeyEvent)('.array-input-container input', 'keydown', 'Backspace', {
          code: 'Backspace'
        });
        assert.dom('.upf-chip').doesNotExist();
        assert.ok(onChange.calledWith([]));
      });
    });
    (0, _qunit.module)('WHEN @onValidator function is set', hooks => {
      hooks.beforeEach(function () {
        this.validator = validator;
      });
      (0, _qunit.test)('it is triggered on keyword addition', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @validator={{this.validator}} />
        */
        {
          "id": "AsVvcXA8",
          "block": "[[[8,[39,0],null,[[\"@validator\"],[[30,0,[\"validator\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await fillInputAndValidate('hashtag');
        assert.ok(validator.calledWith('hashtag'));
      });
      (0, _qunit.test)('WHEN the validator is truthy, the value is added as a tag', async function (assert) {
        validator.returns(true);
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @validator={{this.validator}} />
        */
        {
          "id": "AsVvcXA8",
          "block": "[[[8,[39,0],null,[[\"@validator\"],[[30,0,[\"validator\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await fillInputAndValidate('hashtag');
        assert.ok(validator.calledWith('hashtag'));
        assert.ok(validator.returned(true));
        assert.dom('.upf-chip').exists();
        assert.dom('.upf-chip').hasText('hashtag');
      });
      (0, _qunit.test)('WHEN the validator is falsy, the value is not added', async function (assert) {
        validator.returns(false);
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @validator={{this.validator}} />
        */
        {
          "id": "AsVvcXA8",
          "block": "[[[8,[39,0],null,[[\"@validator\"],[[30,0,[\"validator\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await fillInputAndValidate('hashtag');
        assert.ok(validator.calledWith('hashtag'));
        assert.ok(validator.returned(false));
        assert.dom('.upf-chip').doesNotExist();
      });
    });
    (0, _qunit.module)('WHEN the user presses on the Backspace key', () => {
      (0, _qunit.test)('If there are no tags, nothing happens', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput />
        */
        {
          "id": "CxaNGDCL",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerKeyEvent)('.array-input-container input', 'keydown', 'Backspace', {
          code: 'Backspace'
        });
        assert.dom('.upf-chip').doesNotExist();
        assert.dom('.array-input-container').exists();
        assert.dom('.array-input-container input').exists();
      });
      (0, _qunit.test)('If there are tags, the last one is removed and is passed to edit mode', async function (assert) {
        this.loadedValues = ['value1', 'value2'];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @values={{this.loadedValues}} />
        */
        {
          "id": "dsPv8fje",
          "block": "[[[8,[39,0],null,[[\"@values\"],[[30,0,[\"loadedValues\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        let domTags = (0, _testHelpers.findAll)('.upf-chip');
        assert.equal(domTags.length, 2);
        assert.dom(domTags[1]).hasText('value2');
        await (0, _testHelpers.triggerKeyEvent)('.array-input-container input', 'keydown', 'Backspace', {
          code: 'Backspace'
        });
        domTags = (0, _testHelpers.findAll)('.upf-chip');
        assert.equal(domTags.length, 1);
        assert.dom('.array-input-container input').hasValue('value2');
      });
    });
    (0, _qunit.module)('Keyboard validation', function () {
      (0, _qunit.test)('entries are validated when one of the extra keyboard trigger is hit', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ArrayInput @keyboardTriggers={{array " "}} />
        */
        {
          "id": "EGjb/L2A",
          "block": "[[[8,[39,0],null,[[\"@keyboardTriggers\"],[[28,[37,1],[\" \"],null]]],null]],[],false,[\"o-s-s/array-input\",\"array\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.fillIn)('.array-input-container input', 'foobar');
        let input = (0, _testHelpers.find)('.array-input-container input');
        await (0, _testHelpers.triggerKeyEvent)(input, 'keydown', ' ');
        assert.dom('.upf-chip').exists();
        assert.dom('.upf-chip').hasText('foobar');
      });
    });
    (0, _qunit.test)('Clicking on the remove icon suppresses the target entry', async function (assert) {
      this.loadedValues = ['value1', 'value2'];
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ArrayInput @values={{this.loadedValues}} />
      */
      {
        "id": "dsPv8fje",
        "block": "[[[8,[39,0],null,[[\"@values\"],[[30,0,[\"loadedValues\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/array-input-test.js",
        "isStrictMode": false
      }));
      let domTagsRemove = (0, _testHelpers.findAll)('.upf-chip');
      assert.equal(domTagsRemove.length, 2);
      await (0, _testHelpers.click)('.upf-chip i');
      domTagsRemove = (0, _testHelpers.findAll)('.upf-chip');
      assert.equal(domTagsRemove.length, 1);
      assert.dom('.upf-chip').hasText('value2');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/base-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "@ember/test-helpers/dom/trigger-event", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _triggerEvent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"@ember/test-helpers/dom/trigger-event"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/base', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _qunit.test)('It renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Base />
      */
      {
        "id": "CAoaAayy",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/attribute/base\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute').exists();
    });
    (0, _qunit.test)('The splattributes argument is set on the component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Base data-control-name="testing-splattributes" />
      */
      {
        "id": "4NtPBt2K",
        "block": "[[[8,[39,0],[[24,\"data-control-name\",\"testing-splattributes\"]],null,null]],[],false,[\"o-s-s/attribute/base\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="testing-splattributes"]').exists();
    });
    (0, _qunit.test)('It displays the label named-block when passed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Base @value="bananas">
                            <:label><span>this is the label named-block</span></:label>
                           </OSS::Attribute::Base>
      */
      {
        "id": "AQnXeN/4",
        "block": "[[[8,[39,0],null,[[\"@value\"],[\"bananas\"]],[[\"label\"],[[[[10,1],[12],[1,\"this is the label named-block\"],[13]],[]]]]]],[],false,[\"o-s-s/attribute/base\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute .oss-attribute__label').hasText('this is the label named-block');
    });
    (0, _qunit.module)('Value handling', () => {
      (0, _qunit.test)('It displays the value when passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Base @value="bananas" />
        */
        {
          "id": "n7h4vSQj",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"bananas\"]],null]],[],false,[\"o-s-s/attribute/base\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-attribute .oss-attribute__value').hasText('bananas');
      });
      (0, _qunit.test)('It displays the value named-block when passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Base @value="bananas">
                               <:value>
                                 <div class="fx-row fx-xalign-center fx-gap-px-6">
                                   {{@value}}
                                   <OSS::Icon @icon="fa-lock" />
                                 </div>
                               </:value>
                             </OSS::Attribute::Base>
        */
        {
          "id": "G8ubc084",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"bananas\"]],[[\"value\"],[[[[1,\"\\n                         \"],[10,0],[14,0,\"fx-row fx-xalign-center fx-gap-px-6\"],[12],[1,\"\\n                           \"],[1,[30,1]],[1,\"\\n                           \"],[8,[39,1],null,[[\"@icon\"],[\"fa-lock\"]],null],[1,\"\\n                         \"],[13],[1,\"\\n                       \"]],[]]]]]],[\"@value\"],false,[\"o-s-s/attribute/base\",\"o-s-s/icon\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-attribute .oss-attribute__value .fa-lock').exists();
      });
    });
    (0, _qunit.module)('Copy button behaviour', () => {
      (0, _qunit.test)('The text is copyable by default if a value is passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Base @label="label" @value="value" />
        */
        {
          "id": "us+3n6EO",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@value\"],[\"label\",\"value\"]],null]],[],false,[\"o-s-s/attribute/base\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
          "isStrictMode": false
        }));
        await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute__copy').exists();
      });
      (0, _qunit.test)('The text is not copyable if the value is blank', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Base @label="label" @value="   " />
        */
        {
          "id": "jzS+sHZv",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@value\"],[\"label\",\"   \"]],null]],[],false,[\"o-s-s/attribute/base\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
          "isStrictMode": false
        }));
        await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute__copy').doesNotExist();
      });
      (0, _qunit.test)('The text is not copyable if the value is undefined', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Base @label="label" />
        */
        {
          "id": "HizsNBSh",
          "block": "[[[8,[39,0],null,[[\"@label\"],[\"label\"]],null]],[],false,[\"o-s-s/attribute/base\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
          "isStrictMode": false
        }));
        await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute__copy').doesNotExist();
      });
      (0, _qunit.test)('The text is not copyable if the @copyable parameter is set to false', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Base @label="label" @value="value" @copyable={{false}} />
        */
        {
          "id": "TQxiGV/t",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@copyable\"],[\"label\",\"value\",false]],null]],[],false,[\"o-s-s/attribute/base\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/base-test.ts",
          "isStrictMode": false
        }));
        await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
        assert.dom('.oss-attribute__copy').doesNotExist();
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/country-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/country', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Country />
      */
      {
        "id": "vMoCjn9n",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/attribute/country\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/country-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="attribute-country"]').exists();
    });
    (0, _qunit.module)('If the @countryCode matches a dictionnary entry', () => {
      (0, _qunit.test)('The flag icon is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Country @countryCode="US" />
        */
        {
          "id": "2K1DJgfP",
          "block": "[[[8,[39,0],null,[[\"@countryCode\"],[\"US\"]],null]],[],false,[\"o-s-s/attribute/country\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/country-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-attribute__label .fflag-US').exists();
      });
      (0, _qunit.test)('The country name is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Country @countryCode="US" />
        */
        {
          "id": "2K1DJgfP",
          "block": "[[[8,[39,0],null,[[\"@countryCode\"],[\"US\"]],null]],[],false,[\"o-s-s/attribute/country\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/country-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-attribute__value').hasText('United States');
      });
    });
    (0, _qunit.module)('If the @countryCode does not match a dictionnary entry', () => {
      (0, _qunit.test)('The flag icon is not displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Country @countryCode="" />
        */
        {
          "id": "DLHyc+OR",
          "block": "[[[8,[39,0],null,[[\"@countryCode\"],[\"\"]],null]],[],false,[\"o-s-s/attribute/country\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/country-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-attribute__label .fflag').doesNotExist();
      });
      (0, _qunit.test)('The empty state is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::Country />
        */
        {
          "id": "vMoCjn9n",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/attribute/country\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/country-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-attribute__value').hasText('-');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/phone-number-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/phone-number', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::PhoneNumber />
      */
      {
        "id": "D0M88YgY",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/attribute/phone-number\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/phone-number-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="attribute-phone-number"]').exists();
    });
    (0, _qunit.test)('If the number is passed, it is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::PhoneNumber @number="+1 212 666 666" />
      */
      {
        "id": "mztAMyEy",
        "block": "[[[8,[39,0],null,[[\"@number\"],[\"+1 212 666 666\"]],null]],[],false,[\"o-s-s/attribute/phone-number\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/phone-number-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('+1 212 666 666');
    });
    (0, _qunit.test)('If the number is undefined, a dash is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::PhoneNumber @prefix="+44" @number="" />
      */
      {
        "id": "UaUzlGYb",
        "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\"],[\"+44\",\"\"]],null]],[],false,[\"o-s-s/attribute/phone-number\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/phone-number-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('-');
    });
    (0, _qunit.test)('If the prefix is passed with a number, they are both displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::PhoneNumber @prefix="+44" @number="123 123" />
      */
      {
        "id": "L5RaK6OB",
        "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\"],[\"+44\",\"123 123\"]],null]],[],false,[\"o-s-s/attribute/phone-number\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/phone-number-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('+44 123 123');
    });
    (0, _qunit.test)('If the countryCode matches one in the dictionary, a flag is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::PhoneNumber @countryCode="US" @prefix="+1" @number="123 123" />
      */
      {
        "id": "0Mr3HGKa",
        "block": "[[[8,[39,0],null,[[\"@countryCode\",\"@prefix\",\"@number\"],[\"US\",\"+1\",\"123 123\"]],null]],[],false,[\"o-s-s/attribute/phone-number\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/phone-number-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('+1 123 123');
      assert.dom('.fflag-US').exists();
    });
    (0, _qunit.test)("If the countryCode doesn't match one in the dictionary, no flag is displayed", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::PhoneNumber @countryCode="random" @prefix="+1" @number="123 123" />
      */
      {
        "id": "uiFeGZf9",
        "block": "[[[8,[39,0],null,[[\"@countryCode\",\"@prefix\",\"@number\"],[\"random\",\"+1\",\"123 123\"]],null]],[],false,[\"o-s-s/attribute/phone-number\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/phone-number-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('+1 123 123');
      assert.dom('.fflag-US').doesNotExist();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/rating-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/rating', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.testRating = 3;
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Rating @label="Hello" @rating={{this.testRating}}/>
      */
      {
        "id": "HZshRC2p",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@rating\"],[\"Hello\",[30,0,[\"testRating\"]]]],null]],[],false,[\"o-s-s/attribute/rating\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/rating-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="attribute-rating"]').exists();
    });
    (0, _qunit.test)('it displays a dash when no @rating is provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Rating @label="Hello" />
      */
      {
        "id": "UvCCpkpj",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"Hello\"]],null]],[],false,[\"o-s-s/attribute/rating\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/rating-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('-');
    });
    (0, _qunit.test)('it displays the proper number of stars when @rating is provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Rating @label="Hello" @rating={{this.testRating}}/>
      */
      {
        "id": "HZshRC2p",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@rating\"],[\"Hello\",[30,0,[\"testRating\"]]]],null]],[],false,[\"o-s-s/attribute/rating\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/rating-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.fas.fa-star.color-yellow').exists({
        count: this.testRating
      });
    });
    (0, _qunit.test)('it displays a label when @label is provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::Rating @label="Hello" @rating={{this.testRating}}/>
      */
      {
        "id": "HZshRC2p",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@rating\"],[\"Hello\",[30,0,[\"testRating\"]]]],null]],[],false,[\"o-s-s/attribute/rating\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/rating-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__label').hasText('Hello');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/removable-text-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/removable-text', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.onRemove = _sinon.default.stub().resolves();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RemovableText @label="label" @onRemove={{this.onRemove}} />
      */
      {
        "id": "Nn+C5V7P",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[\"label\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="attribute-removable-text"]').exists();
    });
    (0, _qunit.test)('It displays the @label', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} />
      */
      {
        "id": "iCsaRzEO",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[\"city\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__label').hasText('city');
    });
    (0, _qunit.test)('If the value is provided, it is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RemovableText @label="city" @value="Lyon" @onRemove={{this.onRemove}} />
      */
      {
        "id": "hf+5dm3v",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@onRemove\"],[\"city\",\"Lyon\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('Lyon');
    });
    (0, _qunit.test)('If the value is not provided, it displays a dash', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} />
      */
      {
        "id": "iCsaRzEO",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[\"city\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('-');
    });
    (0, _qunit.module)('Remove tooltip', () => {
      (0, _qunit.test)('If the @removeTooltip paramater is passed, the string contents are used as tooltip for the lock icon', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} @removeTooltip="Click to remove" />
        */
        {
          "id": "wyvhWa3t",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\",\"@removeTooltip\"],[\"city\",[30,0,[\"onRemove\"]],\"Click to remove\"]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
        await assert.tooltip('.fa-trash').hasTitle('Click to remove');
      });
      (0, _qunit.test)('If the @removeTooltip paramater is not passed, the default text is used', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::RemovableText @label="city" @onRemove={{this.onRemove}} />
        */
        {
          "id": "iCsaRzEO",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[\"city\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
        await assert.tooltip('.fa-trash').hasTitle('Remove');
      });
    });
    (0, _qunit.test)('Clicking on the trash icon calls the @onRemove method', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RemovableText @label="city" @value="Lyon" @onRemove={{this.onRemove}} />
      */
      {
        "id": "hf+5dm3v",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@onRemove\"],[\"city\",\"Lyon\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
      await (0, _testHelpers.click)('.fa-trash');
      assert.true(this.onRemove.calledOnce);
    });
    (0, _qunit.test)('Clicking on the trash icon displays a loader', async function (assert) {
      this.onRemove.returns(new Promise(() => {}));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RemovableText @label="city" @value="Lyon" @onRemove={{this.onRemove}} />
      */
      {
        "id": "hf+5dm3v",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@onRemove\"],[\"city\",\"Lyon\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/attribute/removable-text\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/removable-text-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
      await (0, _testHelpers.click)('.fa-trash');
      assert.dom('.fa-circle-notch.fa-spin').exists();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/revealable-email-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/revealable-email', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.onRevealStub = _sinon.default.stub().resolves();
    });
    (0, _qunit.test)('It renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />
      */
      {
        "id": "hnSbwDfu",
        "block": "[[[8,[39,0],null,[[\"@onRevealEmail\"],[[30,0,[\"onRevealStub\"]]]],null]],[],false,[\"o-s-s/attribute/revealable-email\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/revealable-email-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="attribute-revealable-email"]').exists();
    });
    (0, _qunit.module)('Label tooltip', () => {
      (0, _qunit.test)('If the @tooltip paramater is passed, the info icon is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::RevealableEmail @tooltip="this is a tooltip" @onRevealEmail={{this.onRevealStub}} />
        */
        {
          "id": "tjhVFVCu",
          "block": "[[[8,[39,0],null,[[\"@tooltip\",\"@onRevealEmail\"],[\"this is a tooltip\",[30,0,[\"onRevealStub\"]]]],null]],[],false,[\"o-s-s/attribute/revealable-email\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/revealable-email-test.ts",
          "isStrictMode": false
        }));
        await assert.tooltip('.oss-attribute__info').hasTitle('this is a tooltip');
      });
      (0, _qunit.test)('If the @tooltip paramater is not passed, the info icon is not visible', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />
        */
        {
          "id": "hnSbwDfu",
          "block": "[[[8,[39,0],null,[[\"@onRevealEmail\"],[[30,0,[\"onRevealStub\"]]]],null]],[],false,[\"o-s-s/attribute/revealable-email\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/revealable-email-test.ts",
          "isStrictMode": false
        }));
        await assert.dom('.oss-attribute__info').doesNotExist();
      });
    });
    (0, _qunit.module)('Lock tooltip', () => {
      (0, _qunit.test)('If the @lockTooltip paramater is passed, the string contents are used as tooltip for the lock icon', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::RevealableEmail @lockTooltip="locked" @onRevealEmail={{this.onRevealStub}} />
        */
        {
          "id": "I2XiVNK+",
          "block": "[[[8,[39,0],null,[[\"@lockTooltip\",\"@onRevealEmail\"],[\"locked\",[30,0,[\"onRevealStub\"]]]],null]],[],false,[\"o-s-s/attribute/revealable-email\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/revealable-email-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
        await assert.tooltip('.fa-lock').hasTitle('locked');
      });
      (0, _qunit.test)('If the @lockTooltip paramater is not passed, the default text is used', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />
        */
        {
          "id": "hnSbwDfu",
          "block": "[[[8,[39,0],null,[[\"@onRevealEmail\"],[[30,0,[\"onRevealStub\"]]]],null]],[],false,[\"o-s-s/attribute/revealable-email\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/revealable-email-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
        await assert.tooltip('.fa-lock').hasTitle('Reveal email');
      });
    });
    (0, _qunit.test)('Clicking on the lock icon calls the @onRevealEmail method', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />
      */
      {
        "id": "hnSbwDfu",
        "block": "[[[8,[39,0],null,[[\"@onRevealEmail\"],[[30,0,[\"onRevealStub\"]]]],null]],[],false,[\"o-s-s/attribute/revealable-email\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/revealable-email-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
      await (0, _testHelpers.click)('.fa-lock');
      assert.true(this.onRevealStub.calledOnce);
    });
    (0, _qunit.test)('Clicking on the lock icon displays a loader', async function (assert) {
      this.onRevealStub.returns(new Promise(() => {}));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::RevealableEmail @onRevealEmail={{this.onRevealStub}} />
      */
      {
        "id": "hnSbwDfu",
        "block": "[[[8,[39,0],null,[[\"@onRevealEmail\"],[[30,0,[\"onRevealStub\"]]]],null]],[],false,[\"o-s-s/attribute/revealable-email\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/revealable-email-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerEvent)('.oss-attribute', 'mouseenter');
      await (0, _testHelpers.click)('.fa-lock');
      assert.dom('.fa-circle-notch.fa-spin').exists();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/tag-array-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/test-helpers/dom/find-all", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _findAll, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/test-helpers/dom/find-all"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/tag-array', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::TagArray @label="Fruits" />
      */
      {
        "id": "VXJfXshU",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"Fruits\"]],null]],[],false,[\"o-s-s/attribute/tag-array\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/tag-array-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="attribute-tag-array"]').exists();
    });
    (0, _qunit.test)('it displays the @label parameter', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::TagArray @label="Fruits" />
      */
      {
        "id": "VXJfXshU",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"Fruits\"]],null]],[],false,[\"o-s-s/attribute/tag-array\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/tag-array-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__label').hasText('Fruits');
    });
    (0, _qunit.test)('If @tags are passed to the component, they are displayed', async function (assert) {
      this.tags = ['watermelon', 'vodkamelon', 'whiskeymelon', 'tequilamelon'];
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::TagArray @label="Fruits" @tags={{this.tags}} />
      */
      {
        "id": "QeE2Gr8M",
        "block": "[[[8,[39,0],null,[[\"@label\",\"@tags\"],[\"Fruits\",[30,0,[\"tags\"]]]],null]],[],false,[\"o-s-s/attribute/tag-array\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/tag-array-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value .fx-row.fx-wrap').exists();
      const allUpfTags = (0, _findAll.default)('.upf-tag');
      assert.equal(allUpfTags.length, this.tags.length);
    });
    (0, _qunit.test)('If @tags are not passed to the component, a dash is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Attribute::TagArray @label="Fruits" />
      */
      {
        "id": "VXJfXshU",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"Fruits\"]],null]],[],false,[\"o-s-s/attribute/tag-array\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/tag-array-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-attribute__value').hasText('-');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attribute/text-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "@ember/test-helpers/dom/trigger-event", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _triggerEvent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"@ember/test-helpers/dom/trigger-event"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attribute/text', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _qunit.module)('Default behavior', function () {
      (0, _qunit.module)('Render conditions', function () {
        (0, _qunit.test)('It renders', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @value="World" />
          */
          {
            "id": "jbYaMYLo",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\"],[\"Hello\",\"World\"]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-attribute').exists();
          assert.dom('.oss-attribute__label').hasText('Hello');
          assert.dom('.oss-attribute__value').hasText('World');
        });
        (0, _qunit.test)('It renders when the @value is undefined', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" />
          */
          {
            "id": "fYV8vuDT",
            "block": "[[[8,[39,0],null,[[\"@label\"],[\"Hello\"]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-attribute').exists();
          assert.dom('.oss-attribute__value').hasText('-');
        });
        (0, _qunit.test)('It renders with a tooltip when specified', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @tooltip="Tooltip" />
          */
          {
            "id": "QFsfb6Nk",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@tooltip\"],[\"Hello\",\"Tooltip\"]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-attribute__info').exists();
          await assert.tooltip('.oss-attribute__info').hasTitle('Tooltip');
        });
        (0, _qunit.test)('It renders a dash as value when no value is specified', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" />
          */
          {
            "id": "fYV8vuDT",
            "block": "[[[8,[39,0],null,[[\"@label\"],[\"Hello\"]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-attribute').exists();
          assert.dom('.oss-attribute__value').hasText('-');
        });
        (0, _qunit.test)('it renders a dash as value when @value is empty', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @value=""/>
          */
          {
            "id": "1Q7cI0X5",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\"],[\"Hello\",\"\"]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-attribute').exists();
          assert.dom('.oss-attribute__value').hasText('-');
        });
      });
      (0, _qunit.module)('Copy action', function (hooks) {
        hooks.beforeEach(function () {
          this.textForCopy = 'copied value';
        });
        (0, _qunit.test)('The copy icon is not visible before hovering', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} />
          */
          {
            "id": "2T3yBN8t",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\"],[\"Hello\",[30,0,[\"textForCopy\"]]]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-attribute__copy--visible').doesNotExist();
        });
        (0, _qunit.test)('The text is copyable by default', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} />
          */
          {
            "id": "2T3yBN8t",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\"],[\"Hello\",[30,0,[\"textForCopy\"]]]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
          assert.dom('.oss-attribute__copy').exists();
        });
        (0, _qunit.test)('The text is copyable if the @copyable argument is truthy', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} @copyable={{true}} />
          */
          {
            "id": "c9BtrJk6",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@copyable\"],[\"Hello\",[30,0,[\"textForCopy\"]],true]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
          assert.dom('.oss-attribute__copy--visible').exists();
        });
        (0, _qunit.test)('The text is not copyable (no copy button) if the argument is falsy', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @value={{this.textForCopy}} @copyable={{false}} />
          */
          {
            "id": "Qqn8vNwU",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@copyable\"],[\"Hello\",[30,0,[\"textForCopy\"]],false]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
          assert.dom('.oss-attribute__copy').doesNotExist();
        });
        (0, _qunit.test)("The text is not copyable if text value isn't specified", async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @copyable={{true}} />
          */
          {
            "id": "xAcEVVaC",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@copyable\"],[\"Hello\",true]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
          assert.dom('.oss-copy--inline').doesNotExist();
        });
        (0, _qunit.test)('The text is not copyable if text value is specified but the value is empty', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Attribute::Text @label="Hello" @value="" @copyable={{true}} />
          */
          {
            "id": "190dSsar",
            "block": "[[[8,[39,0],null,[[\"@label\",\"@value\",\"@copyable\"],[\"Hello\",\"\",true]],null]],[],false,[\"o-s-s/attribute/text\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attribute/text-test.ts",
            "isStrictMode": false
          }));
          await (0, _triggerEvent.default)('.oss-attribute', 'mouseenter');
          assert.dom('.oss-copy--inline').doesNotExist();
        });
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/attributes-panel-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/attributes-panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.icon = 'fa-laptop-code';
      this.title = 'Title';
      this.isSaveDisabled = undefined;
      this.onSave = _sinon.default.stub();
      this.onCancel = _sinon.default.stub();
      this.onEdit = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} />
      */
      {
        "id": "4wCy307r",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@title\",\"@onSave\"],[[30,0,[\"icon\"]],[30,0,[\"title\"]],[30,0,[\"onSave\"]]]],null]],[],false,[\"o-s-s/attributes-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.attributes-panel').exists();
    });
    (0, _qunit.test)('it renders the icon', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} />
      */
      {
        "id": "4wCy307r",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@title\",\"@onSave\"],[[30,0,[\"icon\"]],[30,0,[\"title\"]],[30,0,[\"onSave\"]]]],null]],[],false,[\"o-s-s/attributes-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.attributes-panel .fa-laptop-code').exists();
    });
    (0, _qunit.test)('it renders the title', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} />
      */
      {
        "id": "4wCy307r",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@title\",\"@onSave\"],[[30,0,[\"icon\"]],[30,0,[\"title\"]],[30,0,[\"onSave\"]]]],null]],[],false,[\"o-s-s/attributes-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.attributes-panel span').hasText('Title');
    });
    (0, _qunit.test)('it renders the contextual-action named block', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}}>
              <:contextual-action>
                <OSS::Button @icon="fa-plus" @square={{true}} />
              </:contextual-action>
            </OSS::AttributesPanel>
          
      */
      {
        "id": "NRjMUL7c",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@title\",\"@onSave\"],[[30,0,[\"icon\"]],[30,0,[\"title\"]],[30,0,[\"onSave\"]]]],[[\"contextual-action\"],[[[[1,\"\\n          \"],[8,[39,1],null,[[\"@icon\",\"@square\"],[\"fa-plus\",true]],null],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/attributes-panel\",\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.attributes-panel .fa-plus').exists();
    });
    (0, _qunit.module)('for view mode', () => {
      (0, _qunit.test)('it renders the view-mode named block', async function (assert) {
        await renderComponent();
        assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
        assert.dom('.custom-view-mode').hasText('View mode');
      });
      (0, _qunit.test)('it renders edition button', async function (assert) {
        await renderComponent();
        assert.dom('[data-control-name="attributes-panel-mode-switch-button"]').exists();
      });
      (0, _qunit.module)('when clicking on edit button', () => {
        (0, _qunit.test)('it changes to edition mode container', async function (assert) {
          await renderComponent();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-mode-switch-button"]');
          assert.dom('.attributes-panel__container.attributes-panel__container--view').doesNotExist();
          assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
        });
        (0, _qunit.test)('it calls the @onEdit', async function (assert) {
          await renderComponent();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-mode-switch-button"]');
          assert.true(this.onEdit.calledOnceWithExactly());
        });
      });
      async function renderComponent() {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} @onEdit={{this.onEdit}}>
                  <:view-mode>
                    <div class="custom-view-mode">View mode</div>
                  </:view-mode>
                </OSS::AttributesPanel>
              
        */
        {
          "id": "BGzwyM2A",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@icon\",\"@title\",\"@onSave\",\"@onEdit\"],[[30,0,[\"icon\"]],[30,0,[\"title\"]],[30,0,[\"onSave\"]],[30,0,[\"onEdit\"]]]],[[\"view-mode\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"custom-view-mode\"],[12],[1,\"View mode\"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n      \"]],[],false,[\"o-s-s/attributes-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
          "isStrictMode": false
        }));
      }
    });
    (0, _qunit.module)('for edition mode', () => {
      (0, _qunit.test)('it renders the view-mode named block', async function (assert) {
        await renderComponentAndClickOnEdit();
        assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
        assert.dom('.custom-edition-mode').hasText('Edition mode');
      });
      (0, _qunit.test)("it doesn't renders edition button", async function (assert) {
        await renderComponentAndClickOnEdit();
        assert.dom('[data-control-name="attributes-panel-mode-switch-button"]').doesNotExist();
      });
      (0, _qunit.test)("it doesn't renders contextual-action named block", async function (assert) {
        await renderComponentAndClickOnEdit();
        assert.dom('.custom-contextual-action').doesNotExist();
      });
      (0, _qunit.test)('it renders the save and cancel button', async function (assert) {
        await renderComponentAndClickOnEdit();
        assert.dom('[data-control-name="attributes-panel-cancel-button"]').exists();
        assert.dom('[data-control-name="attributes-panel-save-button"]').exists();
      });
      (0, _qunit.module)('when clicking on cancel button', () => {
        (0, _qunit.test)('it switches to view mode', async function (assert) {
          await renderComponentAndClickOnEdit();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-cancel-button"]');
          assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
          assert.dom('.attributes-panel__container.attributes-panel__container--edition').doesNotExist();
        });
        (0, _qunit.test)('it calls the @onCancel', async function (assert) {
          await renderComponentAndClickOnEdit();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-cancel-button"]');
          assert.true(this.onCancel.calledOnceWithExactly());
        });
      });
      (0, _qunit.module)('when clicking on save button', () => {
        (0, _qunit.test)('it switches to view mode', async function (assert) {
          this.onSave.resolves();
          await renderComponentAndClickOnEdit();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-save-button"]');
          assert.dom('.attributes-panel__container.attributes-panel__container--view').exists();
          assert.dom('.attributes-panel__container.attributes-panel__container--edition').doesNotExist();
        });
        (0, _qunit.test)("it doesn't switch to the view mode", async function (assert) {
          this.onSave.rejects();
          await renderComponentAndClickOnEdit();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-save-button"]');
          assert.dom('.attributes-panel__container.attributes-panel__container--view').doesNotExist();
          assert.dom('.attributes-panel__container.attributes-panel__container--edition').exists();
        });
        (0, _qunit.test)('it render a loading state', async function (assert) {
          this.onSave.returns(new Promise(() => {}));
          await renderComponentAndClickOnEdit();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-save-button"]');
          assert.dom('[data-control-name="attributes-panel-save-button"] .fa-circle-notch').exists();
        });
        (0, _qunit.test)('it calls the @onSave', async function (assert) {
          this.onSave.resolves();
          await renderComponentAndClickOnEdit();
          await (0, _testHelpers.click)('[data-control-name="attributes-panel-save-button"]');
          assert.true(this.onSave.calledOnceWithExactly());
        });
      });
      (0, _qunit.module)('when @isSaveDisabled', () => {
        (0, _qunit.test)('is undefined, the save button is not disabled', async function (assert) {
          await renderComponentAndClickOnEdit();
          assert.dom('[data-control-name="attributes-panel-save-button"]').isNotDisabled();
        });
        (0, _qunit.test)('is true, the save button is disabled', async function (assert) {
          this.isSaveDisabled = true;
          await renderComponentAndClickOnEdit();
          assert.dom('[data-control-name="attributes-panel-save-button"]').isDisabled();
        });
        (0, _qunit.test)('is false, the save button is not disabled', async function (assert) {
          this.isSaveDisabled = false;
          await renderComponentAndClickOnEdit();
          assert.dom('[data-control-name="attributes-panel-save-button"]').isNotDisabled();
        });
      });
      async function renderComponentAndClickOnEdit() {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::AttributesPanel @icon={{this.icon}} @title={{this.title}} @onSave={{this.onSave}} @onEdit={{this.onEdit}}
                                      @onCancel={{this.onCancel}} @isSaveDisabled={{this.isSaveDisabled}}>
                  <:contextual-action><div class="custom-contextual-action"></div></:contextual-action>
                  <:edition-mode>
                    <div class="custom-edition-mode">Edition mode</div>
                  </:edition-mode>
                </OSS::AttributesPanel>
              
        */
        {
          "id": "WSFBjpbd",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@icon\",\"@title\",\"@onSave\",\"@onEdit\",\"@onCancel\",\"@isSaveDisabled\"],[[30,0,[\"icon\"]],[30,0,[\"title\"]],[30,0,[\"onSave\"]],[30,0,[\"onEdit\"]],[30,0,[\"onCancel\"]],[30,0,[\"isSaveDisabled\"]]]],[[\"contextual-action\",\"edition-mode\"],[[[[10,0],[14,0,\"custom-contextual-action\"],[12],[13]],[]],[[[1,\"\\n            \"],[10,0],[14,0,\"custom-edition-mode\"],[12],[1,\"Edition mode\"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n      \"]],[],false,[\"o-s-s/attributes-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="attributes-panel-mode-switch-button"]');
      }
    });
    (0, _qunit.test)('it throws an error if @title is missing', async function (assert) {
      (0, _testHelpers.setupOnerror)(error => {
        assert.equal(error.message, 'Assertion Failed: [component][OSS::AttributesPanel] The @title parameter is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AttributesPanel @onSave={{this.onSave}} />
      */
      {
        "id": "Fi4aZ8Q4",
        "block": "[[[8,[39,0],null,[[\"@onSave\"],[[30,0,[\"onSave\"]]]],null]],[],false,[\"o-s-s/attributes-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
        "isStrictMode": false
      }));
    });
    (0, _qunit.test)('it throws an error if @onSave is missing', async function (assert) {
      (0, _testHelpers.setupOnerror)(error => {
        assert.equal(error.message, 'Assertion Failed: [component][OSS::AttributesPanel] The @onSave parameter is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AttributesPanel @title={{this.title}} />
      */
      {
        "id": "A5wA4MDH",
        "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],null]],[],false,[\"o-s-s/attributes-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/attributes-panel-test.ts",
        "isStrictMode": false
      }));
    });
  });
});
define("dummy/tests/integration/components/o-s-s/avatar-group-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/avatar-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.avatars = [{
        image: 'http://foo.co/bar.png',
        initials: 'TS'
      }, {
        image: 'http://foo.co/baz.png',
        initials: 'OM'
      }];
    });
    (0, _qunit.test)('it displays the right number of avatars', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AvatarGroup @avatars={{this.avatars}} />
      */
      {
        "id": "a+CAYjrH",
        "block": "[[[8,[39,0],null,[[\"@avatars\"],[[30,0,[\"avatars\"]]]],null]],[],false,[\"o-s-s/avatar-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-avatar').exists({
        count: 2
      });
      assert.dom('.upf-avatar:first-child img').hasAttribute('src', 'http://foo.co/bar.png');
      assert.dom('.upf-avatar:last-child img').hasAttribute('src', 'http://foo.co/baz.png');
    });
    (0, _qunit.test)('if no @size arg is provided, it should default to "md"', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AvatarGroup @avatars={{this.avatars}} />
      */
      {
        "id": "a+CAYjrH",
        "block": "[[[8,[39,0],null,[[\"@avatars\"],[[30,0,[\"avatars\"]]]],null]],[],false,[\"o-s-s/avatar-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--md');
      assert.dom('.upf-avatar:last-child').hasClass('upf-avatar--md');
    });
    (0, _qunit.test)('if a @size arg is provided, it should be used for all displayed avatars', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AvatarGroup @avatars={{this.avatars}} @size="sm" />
      */
      {
        "id": "ptpU+df5",
        "block": "[[[8,[39,0],null,[[\"@avatars\",\"@size\"],[[30,0,[\"avatars\"]],\"sm\"]],null]],[],false,[\"o-s-s/avatar-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--sm');
      assert.dom('.upf-avatar:last-child').hasClass('upf-avatar--sm');
    });
    (0, _qunit.test)('if a @max arg is provided, we should display maximum that number of avatars and display remaining ones using a placeholder', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AvatarGroup @avatars={{this.avatars}} @max={{1}} />
      */
      {
        "id": "G1YRutbz",
        "block": "[[[8,[39,0],null,[[\"@avatars\",\"@max\"],[[30,0,[\"avatars\"]],1]],null]],[],false,[\"o-s-s/avatar-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-avatar').exists({
        count: 2
      });
      assert.dom('.upf-avatar:first-child img').hasAttribute('src', 'http://foo.co/bar.png');
      assert.dom('.upf-avatar:last-child img').doesNotExist();
      assert.dom('.upf-avatar:last-child').hasText('+1');
    });
    (0, _qunit.test)('if a @loading arg is provided w/ no @loadingCount arg, we should display 3 avatars in loading state', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AvatarGroup @avatars={{this.avatars}} @loading={{true}} />
      */
      {
        "id": "QwNRDMKI",
        "block": "[[[8,[39,0],null,[[\"@avatars\",\"@loading\"],[[30,0,[\"avatars\"]],true]],null]],[],false,[\"o-s-s/avatar-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-avatar').exists({
        count: 3
      });
      assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--loading');
      assert.dom('.upf-avatar:nth-child(2)').hasClass('upf-avatar--loading');
      assert.dom('.upf-avatar:nth-child(3)').hasClass('upf-avatar--loading');
    });
    (0, _qunit.test)('if a @loading arg is provided w/ @loadingCount arg, we should display {{@loadingCount}} avatars in loading state', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::AvatarGroup @avatars={{this.avatars}} @loading={{true}} @loadingCount={{1}} />
      */
      {
        "id": "1xLgdv1/",
        "block": "[[[8,[39,0],null,[[\"@avatars\",\"@loading\",\"@loadingCount\"],[[30,0,[\"avatars\"]],true,1]],null]],[],false,[\"o-s-s/avatar-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-avatar').exists({
        count: 1
      });
      assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--loading');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/avatar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/avatar", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _avatar, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@upfluence/oss-components/components/o-s-s/avatar"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/avatar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('Default behavior', function () {
      (0, _qunit.test)('it displays the image when it is provided', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar @image="http://foo.co/bar.png" />
        */
        {
          "id": "Yt5dkUAE",
          "block": "[[[8,[39,0],null,[[\"@image\"],[\"http://foo.co/bar.png\"]],null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar img').exists();
        assert.dom('.upf-avatar img').hasAttribute('src', 'http://foo.co/bar.png');
      });
      (0, _qunit.test)('it displays the initials when they are provided', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar @initials="TS" />
        */
        {
          "id": "nN8UM++J",
          "block": "[[[8,[39,0],null,[[\"@initials\"],[\"TS\"]],null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar span').exists();
        assert.dom('.upf-avatar span').hasText('TS');
      });
      (0, _qunit.test)('it displays the default image when initials and image are not provided', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar />
        */
        {
          "id": "OJr8BjyG",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar img').exists();
        assert.dom('.upf-avatar img').hasAttribute('src', _avatar.DEFAULT_IMAGE_URL);
      });
      (0, _qunit.test)('it displays the image when image and initials are provided', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar @image="http://foo.co/bar.png" @initials="TS" />
        */
        {
          "id": "/YIUuYWT",
          "block": "[[[8,[39,0],null,[[\"@image\",\"@initials\"],[\"http://foo.co/bar.png\",\"TS\"]],null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar img').exists();
        assert.dom('.upf-avatar img').hasAttribute('src', 'http://foo.co/bar.png');
      });
      (0, _qunit.test)('it updates the image when a new @image is provided', async function (assert) {
        this.updatedImage = null;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar @image={{this.updatedImage}} @initials="TS" />
        */
        {
          "id": "Z1eYc/rS",
          "block": "[[[8,[39,0],null,[[\"@image\",\"@initials\"],[[30,0,[\"updatedImage\"]],\"TS\"]],null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.updatedImage === null);
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar img').doesNotExist();
        assert.dom('.upf-avatar span').hasText('TS');
        this.set('updatedImage', 'https://via.placeholder.com/150');
        assert.dom('.upf-avatar span').doesNotExist();
        assert.dom('.upf-avatar img').hasAttribute('src', 'https://via.placeholder.com/150');
      });
    });
    (0, _qunit.module)('Sizes', function () {
      (0, _qunit.test)('it sets the right default class when size is not provided', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar />
        */
        {
          "id": "OJr8BjyG",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar').hasClass(`upf-avatar--md`);
      });
      Object.keys(_avatar.SizeDefinition).forEach(size => {
        (0, _qunit.test)(`it sets the right class when using a supported size: ${size}`, async function (assert) {
          this.size = size;
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Avatar @size={{this.size}} />
          */
          {
            "id": "9G9nkPDf",
            "block": "[[[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null]],[],false,[\"o-s-s/avatar\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.upf-avatar').exists();
          assert.dom('.upf-avatar').hasClass(`upf-avatar--${size}`);
        });
      });
    });
    (0, _qunit.test)('When @loading is thruthy, the right class is applied on the component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Avatar @loading={{true}} />
      */
      {
        "id": "i4QhetRV",
        "block": "[[[8,[39,0],null,[[\"@loading\"],[true]],null]],[],false,[\"o-s-s/avatar\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-avatar').hasClass('upf-avatar--loading');
    });
    (0, _qunit.module)('Error behavior', function () {
      (0, _qunit.test)('it throws an error if the wrong size argument is passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, `Assertion Failed: [component][OSS::Avatar] Unknown size. Available sizes are: ${Object.keys(_avatar.SizeDefinition).join(', ')}`);
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar @size="test" />
        */
        {
          "id": "ru2UzlWn",
          "block": "[[[8,[39,0],null,[[\"@size\"],[\"test\"]],null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it displays the initials when both initials and image are provided and the image fails to load', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar @image="/foo.co/bar.p" @initials="TS" />
        */
        {
          "id": "sem6/l/R",
          "block": "[[[8,[39,0],null,[[\"@image\",\"@initials\"],[\"/foo.co/bar.p\",\"TS\"]],null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.waitFor)('.upf-avatar span');
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar span').exists();
        assert.dom('.upf-avatar span').hasText('TS');
      });
      (0, _qunit.test)('it displays the placeholder image when the image provided in parameters fails to load', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Avatar @image="/foo.co/bar.p" />
        */
        {
          "id": "oQjKxQbP",
          "block": "[[[8,[39,0],null,[[\"@image\"],[\"/foo.co/bar.p\"]],null]],[],false,[\"o-s-s/avatar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/avatar-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.waitUntil)(function () {
          return (0, _testHelpers.find)('.upf-avatar img')?.getAttribute('src') === _avatar.DEFAULT_IMAGE_URL;
        });
        assert.dom('.upf-avatar').exists();
        assert.dom('.upf-avatar img').exists();
        assert.dom('.upf-avatar img').hasAttribute('src', _avatar.DEFAULT_IMAGE_URL);
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/badge-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/badge", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _badge, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"@upfluence/oss-components/components/o-s-s/badge"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/badge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _qunit.module)('sizes', function () {
      (0, _qunit.test)('it sets the right class when usng a supported size', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @size="lg" @text="2x" />
        */
        {
          "id": "b6XyF5Ob",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@text\"],[\"lg\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge').exists();
        assert.dom('.upf-badge').hasClass('upf-badge--size-lg');
      });
      (0, _qunit.test)('it defaults to md size if none is passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @text="2x" />
        */
        {
          "id": "5gLsLZl1",
          "block": "[[[8,[39,0],null,[[\"@text\"],[\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge').exists();
        assert.dom('.upf-badge').hasClass('upf-badge--size-md');
      });
    });
    (0, _qunit.module)('skins', function () {
      Object.keys(_badge.SkinDefinition).forEach(skin => {
        (0, _qunit.test)(`it sets the right class when using a supported skin: ${skin}`, async function (assert) {
          this.skin = skin;
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Badge @skin={{this.skin}} @text="2x" />
          */
          {
            "id": "q/K/s9ht",
            "block": "[[[8,[39,0],null,[[\"@skin\",\"@text\"],[[30,0,[\"skin\"]],\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.upf-badge').exists();
          assert.dom('.upf-badge').hasClass(`upf-badge--${skin.startsWith('xtd') ? skin.replace('xtd', 'extended') : skin}`);
        });
      });
      (0, _qunit.test)('it adds the plain class when passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @skin="primary" @plain={{true}} @text="2x" />
        */
        {
          "id": "6lQDtFKV",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@plain\",\"@text\"],[\"primary\",true,\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge').hasClass('upf-badge--plain');
      });
    });
    (0, _qunit.module)('content args', function () {
      (0, _qunit.test)('it displays the right icon when using the @icon arg', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @icon="fas fa-users" />
        */
        {
          "id": "qsTu79TE",
          "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fas fa-users\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge').exists();
        assert.dom('.upf-badge i').hasAttribute('class', 'fas fa-users');
      });
      (0, _qunit.test)('it displays the right text when using the @text arg', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @text="2x" />
        */
        {
          "id": "5gLsLZl1",
          "block": "[[[8,[39,0],null,[[\"@text\"],[\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge').exists();
        assert.dom('.upf-badge .upf-badge__text').exists();
        assert.dom('.upf-badge .upf-badge__text').hasText('2x');
      });
      (0, _qunit.test)('it displays the right image when using the @image arg', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @image="http://foo.co/bar.png" />
        */
        {
          "id": "UWdrqJ+z",
          "block": "[[[8,[39,0],null,[[\"@image\"],[\"http://foo.co/bar.png\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge').exists();
        assert.dom('.upf-badge img').exists();
        assert.dom('.upf-badge img').hasAttribute('src', 'http://foo.co/bar.png');
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error when an unsupported skin is passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] Unknown skin. Available skins are: primary, success, alert, error, xtd-cyan, xtd-orange, xtd-yellow, xtd-lime, xtd-blue, xtd-violet, xtd-smart');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @skin="foo" @text="2x" />
        */
        {
          "id": "4FkVrniC",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@text\"],[\"foo\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error when an unsupported size is passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] Unknown size. Available sizes are: sm, md, lg');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @size="foo" @text="2x" />
        */
        {
          "id": "xKeMBBXf",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@text\"],[\"foo\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if no argument is passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] One of @icon, @image or @text arguments is mandatory. You passed 0 arguments');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge />
        */
        {
          "id": "G//EBVIG",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if more than one content argument is passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] One of @icon, @image or @text arguments is mandatory. You passed 2 arguments');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Badge @icon="fas fa-users" @text="2x" />
        */
        {
          "id": "auEPCPfs",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@text\"],[\"fas fa-users\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/badge-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/banner-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Banner />
      */
      {
        "id": "z7u4nn5D",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-banner').exists();
    });
    (0, _qunit.test)('passing a font-awesome icon in the @icon parameter displays the icon in a rounded badge', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Banner @icon="fas fa-check" />
      */
      {
        "id": "Vzo0zBGh",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fas fa-check\"]],null]],[],false,[\"o-s-s/banner\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-banner .fa-check').exists();
    });
    (0, _qunit.test)('passing an image url in the @image parameter displays the image in a rounded badge', async function (assert) {
      this.url = 'https://thepressfree.com/wp-content/uploads/2021/11/Voici-pourquoi-Bruce-Banner-netait-plus-Smart-Hulk-dans-la-800x445.jpg';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Banner @image={{this.url}} />
      */
      {
        "id": "AW0/FsGq",
        "block": "[[[8,[39,0],null,[[\"@image\"],[[30,0,[\"url\"]]]],null]],[],false,[\"o-s-s/banner\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-banner img').exists();
      assert.dom('img').hasAttribute('src', this.url);
    });
    (0, _qunit.test)('passing a title in the @title parameter displays the title in the component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Banner @title="Test Title" />
      */
      {
        "id": "8mlx0GWO",
        "block": "[[[8,[39,0],null,[[\"@title\"],[\"Test Title\"]],null]],[],false,[\"o-s-s/banner\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-banner .font-weight-semibold').hasText('Test Title');
    });
    (0, _qunit.test)('passing a title-suffix named block uses it in a addition to the @title arg ', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Banner @title="Test Title"><:title-suffix><div class="title-named-block">foo</div></:title-suffix></OSS::Banner>
      */
      {
        "id": "iZENL0AQ",
        "block": "[[[8,[39,0],null,[[\"@title\"],[\"Test Title\"]],[[\"title-suffix\"],[[[[10,0],[14,0,\"title-named-block\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/banner\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-banner .font-weight-semibold').hasText('Test Title');
      assert.dom('.upf-banner .title-named-block').exists();
      assert.dom('.upf-banner .title-named-block').hasText('foo');
    });
    (0, _qunit.test)('passing a title-suffix named block without a @title arg does not display it at all', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Banner><:title-suffix><div class="title-named-block">foo</div></:title-suffix></OSS::Banner>
      */
      {
        "id": "pYRLk2ow",
        "block": "[[[8,[39,0],null,null,[[\"title-suffix\"],[[[[10,0],[14,0,\"title-named-block\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/banner\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-banner .font-weight-semibold').doesNotExist();
      assert.dom('.upf-banner .title-named-block').doesNotExist();
    });
    (0, _qunit.test)('passing a subtitle in the @subtitle parameter displays the title in the component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Banner @subtitle="Test subtitle" />
      */
      {
        "id": "TGg6y4A2",
        "block": "[[[8,[39,0],null,[[\"@subtitle\"],[\"Test subtitle\"]],null]],[],false,[\"o-s-s/banner\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-banner .font-color-gray-500.text-size-4').hasText('Test subtitle');
    });
    (0, _qunit.module)('@plain parameter', function () {
      (0, _qunit.test)('when the value is truthy, it sets gray-50 background', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @plain={{true}} />
        */
        {
          "id": "rfdZhWf+",
          "block": "[[[8,[39,0],null,[[\"@plain\"],[true]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.background-color-gray-50').exists();
      });
      (0, _qunit.test)('when the value is falsy, it sets white background', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @plain={{false}} />
        */
        {
          "id": "Ni9josHS",
          "block": "[[[8,[39,0],null,[[\"@plain\"],[false]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.background-color-white').exists();
      });
      (0, _qunit.test)('when the value is undefined, it sets white background', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner />
        */
        {
          "id": "z7u4nn5D",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.background-color-white').exists();
      });
    });
    (0, _qunit.module)('@selected parameter', function () {
      (0, _qunit.test)('when the value is truthy, it adds upf-banner--selected class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @selected={{true}} />
        */
        {
          "id": "sLo53Q7p",
          "block": "[[[8,[39,0],null,[[\"@selected\"],[true]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--selected').exists();
      });
      (0, _qunit.test)("when the value is falsy, it doesn't add upf-banner--selected class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @selected={{false}} />
        */
        {
          "id": "1Wq5/fhT",
          "block": "[[[8,[39,0],null,[[\"@selected\"],[false]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--selected').doesNotExist();
      });
      (0, _qunit.test)("when the value is undefined, it doesn't add upf-banner--selected class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner />
        */
        {
          "id": "z7u4nn5D",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--selected').doesNotExist();
      });
    });
    (0, _qunit.module)('@disabled parameter', function () {
      (0, _qunit.test)('when the value is truthy, it adds upf-banner--disabled class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @disabled={{true}} />
        */
        {
          "id": "w16y/MWL",
          "block": "[[[8,[39,0],null,[[\"@disabled\"],[true]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--disabled').exists();
      });
      (0, _qunit.test)("when the value is falsy, it doesn't add upf-banner--disabled class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @disabled={{false}} />
        */
        {
          "id": "pV+NTyQi",
          "block": "[[[8,[39,0],null,[[\"@disabled\"],[false]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--disabled').doesNotExist();
      });
      (0, _qunit.test)("when the value is undefined, it doesn't add upf-banner--disabled class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner />
        */
        {
          "id": "z7u4nn5D",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--disabled').doesNotExist();
      });
    });
    (0, _qunit.test)('passing a custom-icon named block renders inside the component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Banner @subtitle="Test subtitle">
              <:custom-icon>
                <OSS::Badge @text="2x" />
              </:custom-icon>
            </OSS::Banner>
          
      */
      {
        "id": "tWNReJ1P",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@subtitle\"],[\"Test subtitle\"]],[[\"custom-icon\"],[[[[1,\"\\n          \"],[8,[39,1],null,[[\"@text\"],[\"2x\"]],null],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/banner\",\"o-s-s/badge\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-badge').exists();
    });
    (0, _qunit.test)('passing an actions named block renders inside the component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Banner @subtitle="Test subtitle">
              <:actions>
                <OSS::Button @skin="primary" @label="browse" @icon="fas fa-box-open" @size="md" />
              </:actions>
            </OSS::Banner>
          
      */
      {
        "id": "EKvRW8fC",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@subtitle\"],[\"Test subtitle\"]],[[\"actions\"],[[[[1,\"\\n          \"],[8,[39,1],null,[[\"@skin\",\"@label\",\"@icon\",\"@size\"],[\"primary\",\"browse\",\"fas fa-box-open\",\"md\"]],null],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/banner\",\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn').exists();
    });
    (0, _qunit.module)('@size parameter', function () {
      (0, _qunit.test)("when the value is 'sm', it adds the upf-banner--size-sm class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @size="sm" />
        */
        {
          "id": "p8dQ1mqj",
          "block": "[[[8,[39,0],null,[[\"@size\"],[\"sm\"]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--size-sm').exists();
      });
      (0, _qunit.test)("when the value is 'lg', it adds the upf-banner--size-lg class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @size="lg" />
        */
        {
          "id": "0a89oisE",
          "block": "[[[8,[39,0],null,[[\"@size\"],[\"lg\"]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--size-lg').exists();
      });
      (0, _qunit.test)("when the value is anything but 'sm', it doesn't add size class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner @size="md" />
        */
        {
          "id": "7yLUhDDn",
          "block": "[[[8,[39,0],null,[[\"@size\"],[\"md\"]],null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--size-sm').doesNotExist();
        assert.dom('.upf-banner.upf-banner--size-lg').doesNotExist();
      });
      (0, _qunit.test)("when the value is undefined, it doesn't add the size class", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Banner />
        */
        {
          "id": "z7u4nn5D",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/banner-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-banner.upf-banner--size-sm').doesNotExist();
        assert.dom('.upf-banner.upf-banner--size-lg').doesNotExist();
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/button-dropdown-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/button-dropdown', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('the icon is not displayed if not provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ButtonDropdown @label="label"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
      */
      {
        "id": "IXyYrSwr",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"label\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').doesNotExist();
    });
    (0, _qunit.test)('the label is not displayed if not provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ButtonDropdown @icon="far fa-users"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
      */
      {
        "id": "u653LmMw",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-users\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').doesNotExist();
    });
    (0, _qunit.test)('the button is displayed as square when @square is provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ButtonDropdown @icon="far fa-users" @square={{true}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
      */
      {
        "id": "0kP8W6El",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@square\"],[\"far fa-users\",true]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-button-dropdown__trigger-square').exists();
    });
    (0, _qunit.test)('the arrow is hidden when @hideArrow is provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ButtonDropdown @icon="far fa-users" @square={{true}} @hideArrow={{true}}>
                  <:items><div class="oss-button-dropdown__item">foo</div></:items>
                </OSS::ButtonDropdown>
      */
      {
        "id": "jxDQyf2+",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@square\",\"@hideArrow\"],[\"far fa-users\",true,true]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.fa-caret-down').doesNotExist();
    });
    (0, _qunit.test)('the icon and label are displayed correctly when provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ButtonDropdown @icon="far fa-users" @label="label"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
      */
      {
        "id": "sg35jHlS",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"far fa-users\",\"label\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').exists();
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').hasClass('far');
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').hasClass('fa-users');
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').exists();
      assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').hasText('label');
    });
    (0, _qunit.module)('If @mainAction is undefined', function () {
      (0, _qunit.test)('Clicking on the button opens the dropdown', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label">
                      <:items>
                        <div class="oss-button-dropdown__item">foo</div>
                      </:items>
                    </OSS::ButtonDropdown>
        */
        {
          "id": "31Ou+p4u",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"far fa-users\",\"label\"]],[[\"items\"],[[[[1,\"\\n                \"],[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-button-dropdown__items').doesNotExist();
        assert.dom('.oss-button-dropdown__trigger').hasAttribute('role', 'button');
        await (0, _testHelpers.click)('.oss-button-dropdown__trigger');
        assert.dom('.oss-button-dropdown__items').exists();
        assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists({
          count: 1
        });
        assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').hasText('foo');
      });
      (0, _qunit.test)("Hasn't inner border separator", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
                      <:items>
                        <div class="oss-button-dropdown__item">foo</div>
                      </:items>
                    </OSS::ButtonDropdown>
        */
        {
          "id": "2YfvgGUS",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[1,\"\\n                \"],[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-button-dropdown__trigger .fx-row:last-child').doesNotHaveStyle({
          'border-left': '1px solid rgb(229, 231, 235)'
        });
      });
    });
    (0, _qunit.module)('If @mainAction is defined', function (hooks) {
      hooks.beforeEach(function () {
        this.mainAction = _sinon.default.stub();
      });
      (0, _qunit.test)('Clicking on the button should not open the dropdown', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
        */
        {
          "id": "dOvhz4cr",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-button-dropdown__items').doesNotExist();
        assert.dom('.oss-button-dropdown__trigger').hasNoAttribute('role', 'button');
        await (0, _testHelpers.click)('.oss-button-dropdown__trigger');
        assert.dom('.oss-button-dropdown__items').doesNotExist();
      });
      (0, _qunit.test)('Clicking on the left part should trigger mainAction', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
        */
        {
          "id": "dOvhz4cr",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.mainAction.notCalled);
        assert.dom('.oss-button-dropdown__trigger .fx-row:first-child').hasAttribute('role', 'button');
        await (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:first-child');
        assert.ok(this.mainAction.calledOnce);
      });
      (0, _qunit.test)('Clicking on the caret container part opens the dropdown', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
        */
        {
          "id": "dOvhz4cr",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-button-dropdown__items').doesNotExist();
        assert.dom('.oss-button-dropdown__trigger .fx-row:last-child').hasAttribute('role', 'button');
        await (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:last-child');
        assert.dom('.oss-button-dropdown__items').exists();
        assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists({
          count: 1
        });
        assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').hasText('foo');
      });
      (0, _qunit.test)('Has inner border separator', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
        */
        {
          "id": "dOvhz4cr",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-button-dropdown__trigger .fx-row:last-child').hasStyle({
          'border-left': '1px solid rgb(229, 231, 235)'
        });
      });
    });
    (0, _qunit.module)('When the dropdown is opened', function (hooks) {
      hooks.beforeEach(function () {
        this.mainAction = _sinon.default.stub();
      });
      (0, _qunit.test)('Clicking on an item should close the dropdown', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
                      <:items>
                        <div class="oss-button-dropdown__item">foo</div>
                      </:items>
                    </OSS::ButtonDropdown>
        */
        {
          "id": "2YfvgGUS",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[1,\"\\n                \"],[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:last-child');
        await (0, _testHelpers.click)('.oss-button-dropdown__items .oss-button-dropdown__item');
        assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').doesNotExist();
      });
      (0, _qunit.test)('Clicking on an item with stopPropagation should keep the dropdown opened', async function (assert) {
        this.stopPropagation = function (e) {
          e.stopImmediatePropagation();
        };
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
                      <:items>
                        <div class="oss-button-dropdown__item" {{on "click" this.stopPropagation}}>bar</div>
                      </:items>
                    </OSS::ButtonDropdown>
        */
        {
          "id": "INHbzpW3",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[1,\"\\n                \"],[11,0],[24,0,\"oss-button-dropdown__item\"],[4,[38,1],[\"click\",[30,0,[\"stopPropagation\"]]],null],[12],[1,\"bar\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\",\"on\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:last-child');
        await (0, _testHelpers.click)('.oss-button-dropdown__items .oss-button-dropdown__item');
        assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists();
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if no icon or label args is provided', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ButtonDropdown] You must pass either a @label or an @icon argument.');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
        */
        {
          "id": "mAEPLX2N",
          "block": "[[[8,[39,0],null,null,[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if mainAction exists and is not a function', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ButtonDropdown] The parameter @mainAction should be a function.');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ButtonDropdown  @label="test" @mainAction="foo" ><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
        */
        {
          "id": "xnuLBTNw",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@mainAction\"],[\"test\",\"foo\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-dropdown-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/button-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the icon when present', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Button @icon="fab fa-facebook" />
      */
      {
        "id": "Tjh+MdvK",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fab fa-facebook\"]],null]],[],false,[\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn i').hasClass('fa-facebook');
    });
    (0, _qunit.test)('it renders the iconUrl when present', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Button @iconUrl="/@upfluence/oss-components/assets/heart.svg" />
      */
      {
        "id": "/bMzZ80a",
        "block": "[[[8,[39,0],null,[[\"@iconUrl\"],[\"/@upfluence/oss-components/assets/heart.svg\"]],null]],[],false,[\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn img').hasAttribute('src', '/@upfluence/oss-components/assets/heart.svg');
    });
    (0, _qunit.test)('it renders the icon and label when present', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Button @icon="fab fa-facebook" @label="Label" />
      */
      {
        "id": "CvRRCRAJ",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fab fa-facebook\",\"Label\"]],null]],[],false,[\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn i').hasClass('fa-facebook');
      assert.dom('.upf-btn span').hasClass('margin-left-px-6');
      assert.dom('.upf-btn span').hasText('Label');
    });
    (0, _qunit.test)('it renders the iconUrl and label when present', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Button @iconUrl="/@upfluence/oss-components/assets/heart.svg" @label="Label" />
      */
      {
        "id": "uGQkkwXa",
        "block": "[[[8,[39,0],null,[[\"@iconUrl\",\"@label\"],[\"/@upfluence/oss-components/assets/heart.svg\",\"Label\"]],null]],[],false,[\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn img').hasAttribute('src', '/@upfluence/oss-components/assets/heart.svg');
      assert.dom('.upf-btn span').hasClass('margin-left-px-6');
      assert.dom('.upf-btn span').hasText('Label');
    });
    (0, _qunit.test)('when icon and iconUrl are present, it only renders the icon', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Button @icon="fab fa-facebook" @iconUrl="/@upfluence/oss-components/assets/heart.svg" />
      */
      {
        "id": "beJiBNm5",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@iconUrl\"],[\"fab fa-facebook\",\"/@upfluence/oss-components/assets/heart.svg\"]],null]],[],false,[\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn i').hasClass('fa-facebook');
      assert.dom('.upf-btn img').doesNotExist();
    });
    (0, _qunit.test)('it renders the default button', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Button @label="Test" />
      */
      {
        "id": "Rj8O15iI",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn').exists({
        count: 1
      });
      assert.dom('.upf-btn').hasClass('upf-btn--default');
      assert.dom('.upf-btn').hasText('Test');
    });
    (0, _qunit.module)('it render with the correct skin', function () {
      (0, _qunit.test)('when using an unknown skin, it is set to default', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="unknown" @label="Test" />
        */
        {
          "id": "nikoRBnL",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"unknown\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--default');
      });
      (0, _qunit.test)('when using primary skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="primary" @label="Test" />
        */
        {
          "id": "c6mrTVR8",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"primary\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--primary');
      });
      (0, _qunit.test)('when using secondary skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="secondary" @label="Test" />
        */
        {
          "id": "pi2fJUqS",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"secondary\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--secondary');
      });
      (0, _qunit.test)('when using destructive skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="destructive" @label="Test" />
        */
        {
          "id": "y1tJhPQ+",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"destructive\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--destructive');
      });
      (0, _qunit.test)('when using alert skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="alert" @label="Test" />
        */
        {
          "id": "RnMRGRU3",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"alert\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--alert');
      });
      (0, _qunit.test)('when using success skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="success" @label="Test" />
        */
        {
          "id": "bUgRlhPA",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"success\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--success');
      });
      (0, _qunit.test)('when using social-instagram skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="instagram" @label="Test" />
        */
        {
          "id": "UZ8JmKFp",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"instagram\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--social-instagram');
      });
      (0, _qunit.test)('when using social-facebook skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="facebook" @label="Test" />
        */
        {
          "id": "fnp9YBUg",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"facebook\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--social-facebook');
      });
      (0, _qunit.test)('when using social-youtube skin', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @skin="youtube" @label="Test" />
        */
        {
          "id": "STbIk0WF",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"youtube\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--social-youtube');
      });
    });
    (0, _qunit.module)('it render with the right size', function () {
      (0, _qunit.test)('when using xs', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @size="xs" @label="Test" />
        */
        {
          "id": "/yP/ma3C",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"xs\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--xs');
      });
      (0, _qunit.test)('when using sm', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @size="sm" @label="Test" />
        */
        {
          "id": "gg/iqhcx",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"sm\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--sm');
      });
      (0, _qunit.test)('when using md', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @size="md" @label="Test" />
        */
        {
          "id": "3Zxc+F64",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"md\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--md');
      });
      (0, _qunit.test)('when using lg', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @size="lg" @label="Test" />
        */
        {
          "id": "lrXkiQIt",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"lg\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--lg');
      });
    });
    (0, _qunit.module)('it renders with loading state', function () {
      (0, _qunit.test)('when using default loading', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @size="sm" @loading={{true}} @label="Test" />
        */
        {
          "id": "PXx2pGBu",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@loading\",\"@label\"],[\"sm\",true,\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn i.fas').exists();
        assert.dom('.upf-btn i.fas').hasClass('fa-circle-notch');
        assert.dom('.upf-btn i.fas').hasClass('fa-spin');
        assert.dom('.upf-btn span.margin-left-px-6').doesNotExist();
      });
      (0, _qunit.test)('when loading and the showLabel loading option is truthy, the label is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @size="sm" @loading={{true}} @label="Test" @loadingOptions={{hash showLabel=true}} />
        */
        {
          "id": "4uoz6IhT",
          "block": "[[[8,[39,0],null,[[\"@size\",\"@loading\",\"@label\",\"@loadingOptions\"],[\"sm\",true,\"Test\",[28,[37,1],null,[[\"showLabel\"],[true]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn i.fas').exists();
        assert.dom('.upf-btn i.fas').hasClass('fa-circle-notch');
        assert.dom('.upf-btn i.fas').hasClass('fa-spin');
        assert.dom('.upf-btn span.margin-left-px-6').exists();
        assert.dom('.upf-btn span.margin-left-px-6').hasText('Test');
      });
    });
    (0, _qunit.module)('it renders a square button', function () {
      (0, _qunit.test)('when setting the square parameter to true', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @square="true" @label="Test" />
        */
        {
          "id": "vuTeZI+Q",
          "block": "[[[8,[39,0],null,[[\"@square\",\"@label\"],[\"true\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-square-btn').exists();
      });
    });
    (0, _qunit.module)('it renders with the right theme', function () {
      (0, _qunit.test)('it adds the right class for usage on dark theme', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @label="Test" @theme="dark" />
        */
        {
          "id": "WrPX8A5G",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@theme\"],[\"Test\",\"dark\"]],null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn').hasClass('upf-btn--dark-bg');
      });
    });
    (0, _qunit.module)('it renders countDown', function (hooks) {
      hooks.beforeEach(function () {
        this.intlService = this.owner.lookup('service:intl');
      });
      (0, _qunit.test)('when clicking, it trigger the countdown', async function (assert) {
        this.callback = () => {};
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @label="Test" @countDown={{hash callback=this.callback}} />
        */
        {
          "id": "1zNUu7sZ",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"callback\"],[[30,0,[\"callback\"]]]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-btn--default');
        assert.dom('.upf-btn--default').hasText(this.intlService.t('oss-components.button.cancel_message', {
          time: 5
        }));
      });
      (0, _qunit.test)('when clicking, it executes callback at the end of the countdown', async function (assert) {
        this.callback = _sinon.default.stub().callsFake(() => {});
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @label="Test" @countDown={{hash callback=this.callback time=50 step=10}} />
        */
        {
          "id": "oggMjJEO",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"callback\",\"time\",\"step\"],[[30,0,[\"callback\"]],50,10]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-btn--default');
        await (0, _testHelpers.waitUntil)(function () {
          return document.querySelector('.upf-btn--default')?.textContent?.includes('Test');
        }, {
          timeout: 1000
        });
        assert.true(this.callback.calledOnce);
      });
      (0, _qunit.test)('when clicking again, it cancels the countdown', async function (assert) {
        this.callback = () => {};
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @label="Test" @countDown={{hash callback=this.callback}} />
        */
        {
          "id": "1zNUu7sZ",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"callback\"],[[30,0,[\"callback\"]]]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-btn--default');
        await (0, _testHelpers.click)('.upf-btn--default');
        assert.dom('.upf-btn--default').hasText('Test');
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it fails if @label, @icon and @iconUrl are missing', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Button] You must pass either a @label, an @icon or an @iconUrl argument.');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button />
        */
        {
          "id": "U2cXYPeo",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it fails if callback missing for @countDown argument', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, "Assertion Failed: [component][OSS::Button] You must pass either a hash with 'callback' value to @countDown argument.");
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Button @label="Test" @countDown={{hash time=1000}} />
        */
        {
          "id": "TYuDfGEx",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"time\"],[1000]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/button-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/carousel-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/carousel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.buttonIcon = undefined;
      this.animationStyle = 'shift';
      this.showIndicators = undefined;
      this.showControls = undefined;
      this.autoPlay = undefined;
      this.onPageChange = _sinon.default.spy();
    });
    async function renderCarousel() {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Carousel @showIndicators={{this.showIndicators}} @showControls={{this.showControls}}
                           @animationStyle={{this.animationStyle}} @buttonIcon={{this.buttonIcon}}
                           @autoPlay={{this.autoPlay}} @onPageChange={{this.onPageChange}}>
              <:pages>
                <div class="page">Page 1</div>
                <div class="page">Page 2</div>
                <div class="page">Page 3</div>
              </:pages>
            </OSS::Carousel>
          
      */
      {
        "id": "kP8NrZiP",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@showIndicators\",\"@showControls\",\"@animationStyle\",\"@buttonIcon\",\"@autoPlay\",\"@onPageChange\"],[[30,0,[\"showIndicators\"]],[30,0,[\"showControls\"]],[30,0,[\"animationStyle\"]],[30,0,[\"buttonIcon\"]],[30,0,[\"autoPlay\"]],[30,0,[\"onPageChange\"]]]],[[\"pages\"],[[[[1,\"\\n          \"],[10,0],[14,0,\"page\"],[12],[1,\"Page 1\"],[13],[1,\"\\n          \"],[10,0],[14,0,\"page\"],[12],[1,\"Page 2\"],[13],[1,\"\\n          \"],[10,0],[14,0,\"page\"],[12],[1,\"Page 3\"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/carousel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/carousel-test.ts",
        "isStrictMode": false
      }));
    }
    (0, _qunit.test)('it renders', async function (assert) {
      await renderCarousel();
      assert.dom('.oss-carousel').exists();
    });
    (0, _qunit.test)('If no pages are yielded to the component, it throws an error', async function (assert) {
      (0, _testHelpers.setupOnerror)(error => {
        assert.equal(error.message, '[component][OSS::Carousel] No pages found in the carousel');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Carousel />
      */
      {
        "id": "lziuRAWB",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/carousel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/carousel-test.ts",
        "isStrictMode": false
      }));
    });
    (0, _qunit.test)('it renders the pages', async function (assert) {
      await renderCarousel();
      assert.dom('.oss-carousel .page').exists({
        count: 3
      });
    });
    (0, _qunit.module)('Indicators', () => {
      (0, _qunit.test)('By default, it renders the indicators', async function (assert) {
        await renderCarousel();
        assert.dom('.oss-carousel .page-btn').exists({
          count: 3
        });
      });
      (0, _qunit.test)('When specified, it does not render the indicators if showIndicators is set to false', async function (assert) {
        this.showIndicators = false;
        await renderCarousel();
        assert.dom('.oss-carousel .page-btn').doesNotExist();
      });
    });
    (0, _qunit.module)('Controls (chevrons)', () => {
      (0, _qunit.test)('By default, it does not render the controls', async function (assert) {
        await renderCarousel();
        assert.dom('.oss-carousel .carousel-control').doesNotExist();
        assert.dom('.oss-carousel .carousel-control--left').doesNotExist();
        assert.dom('.oss-carousel .carousel-control--right').doesNotExist();
      });
      (0, _qunit.test)('When specified, it renders the controls if showControls is set to true', async function (assert) {
        this.showControls = true;
        await renderCarousel();
        assert.dom('.oss-carousel .carousel-control').exists();
        assert.dom('.oss-carousel .carousel-control--left').exists();
        assert.dom('.oss-carousel .carousel-control--right').exists();
      });
      (0, _qunit.test)('When specified, it renders the controls outside the carousel if showControls is set to outside', async function (assert) {
        this.showControls = 'outside';
        await renderCarousel();
        assert.dom('.oss-carousel .carousel-control').exists();
        assert.dom('.oss-carousel .carousel-control--left').exists();
        assert.dom('.oss-carousel .carousel-control--right').exists();
        assert.dom('.page-container--side-padding').exists();
      });
    });
    (0, _qunit.module)('Indicator button icon', () => {
      (0, _qunit.test)('By default, it renders the default button icon', async function (assert) {
        await renderCarousel();
        assert.dom('.oss-carousel .fas.fa-circle').exists({
          count: 3
        });
      });
      (0, _qunit.test)('When specified, it renders the custom button icon', async function (assert) {
        this.buttonIcon = 'fas fa-robot';
        await renderCarousel();
        assert.dom('.oss-carousel .fas.fa-robot').exists({
          count: 3
        });
      });
    });
    (0, _qunit.module)('Animation style', () => {
      (0, _qunit.test)('By default, it uses the shift animation style', async function (assert) {
        await renderCarousel();
        await (0, _testHelpers.click)('.oss-carousel .page-btn:nth-child(2)');
        assert.dom('.animate--shift-from-left').exists();
      });
      (0, _qunit.test)('When specified, it uses the slide animation style', async function (assert) {
        this.animationStyle = 'slide';
        await renderCarousel();
        await (0, _testHelpers.click)('.oss-carousel .page-btn:nth-child(2)');
        assert.dom('.animate--slide-from-left').exists();
      });
    });
    (0, _qunit.module)('Auto play', () => {
      (0, _qunit.test)('When specified, it automatically switches to the next page', async function (assert) {
        this.autoPlay = 100;
        await renderCarousel();
        await new Promise(resolve => setTimeout(resolve, 101));
        assert.dom('.oss-carousel .page--active').hasText('Page 2');
      });
    });
    (0, _qunit.test)('@onPageChange is called when changing the page when the parameter is defined', async function (assert) {
      await renderCarousel();
      await (0, _testHelpers.click)('.oss-carousel .page-btn:nth-child(2)');
      assert.true(this.onPageChange.calledOnceWithExactly());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/checkbox-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onChange = () => {};
    });
    (0, _qunit.test)('it renders correctly', async function (assert) {
      this.checked = false;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />
      */
      {
        "id": "XtGXvu5u",
        "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-checkbox input').isNotChecked();
    });
    (0, _qunit.test)('the size arg is handled correctly', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Checkbox @checked={{true}} @onChange={{this.onChange}} @size="sm" />
      */
      {
        "id": "J9RHNeV5",
        "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\",\"@size\"],[true,[30,0,[\"onChange\"]],\"sm\"]],null]],[],false,[\"o-s-s/checkbox\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-checkbox').hasClass('upf-checkbox--sm');
    });
    (0, _qunit.test)('it is correctly updated when the checked argument changes', async function (assert) {
      this.checked = false;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />
      */
      {
        "id": "XtGXvu5u",
        "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
        "isStrictMode": false
      }));
      this.set('checked', true);
      assert.dom('.upf-checkbox input').isChecked();
    });
    (0, _qunit.test)('disabled state is handled correctly', async function (assert) {
      const onChangeSpy = _sinon.default.spy(this.onChange);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Checkbox @checked={{false}} @onChange={{this.onChange}} @disabled={{true}} />
      */
      {
        "id": "T/569P+5",
        "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\",\"@disabled\"],[false,[30,0,[\"onChange\"]],true]],null]],[],false,[\"o-s-s/checkbox\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-checkbox input').hasAttribute('disabled');
      await (0, _testHelpers.click)('.upf-checkbox');
      assert.ok(onChangeSpy.neverCalledWith());
    });
    (0, _qunit.test)('the onChange hooks is called with the new value', async function (assert) {
      this.checked = false;
      this.onChange = value => {
        assert.equal(value, true);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />
      */
      {
        "id": "XtGXvu5u",
        "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.upf-checkbox');
      assert.expect(1);
    });
    (0, _qunit.module)('@partial argument', () => {
      (0, _qunit.test)('it is correctly updated when the partial argument changes', async function (assert) {
        this.checked = true;
        this.partial = false;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />
        */
        {
          "id": "HeH8xwFs",
          "block": "[[[8,[39,0],null,[[\"@checked\",\"@partial\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"partial\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-checkbox__fake-checkbox').hasNoClass('upf-checkbox__fake-checkbox--partial');
        assert.dom('.upf-checkbox input').isChecked();
        this.set('partial', true);
        assert.dom('.upf-checkbox__fake-checkbox').hasClass('upf-checkbox__fake-checkbox--partial');
      });
      (0, _qunit.test)('if checked is truthy and partial is truthy, the checkbox is partially checked', async function (assert) {
        this.checked = true;
        this.partial = true;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />
        */
        {
          "id": "HeH8xwFs",
          "block": "[[[8,[39,0],null,[[\"@checked\",\"@partial\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"partial\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-checkbox__fake-checkbox').hasClass('upf-checkbox__fake-checkbox--partial');
      });
      (0, _qunit.test)('if checked is truthy and partial is falsy, the checkbox is totally checked', async function (assert) {
        this.checked = true;
        this.partial = false;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />
        */
        {
          "id": "HeH8xwFs",
          "block": "[[[8,[39,0],null,[[\"@checked\",\"@partial\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"partial\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-checkbox__fake-checkbox').hasNoClass('upf-checkbox__fake-checkbox--partial');
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if checked argument is missing', async function (assert) {
        (0, _testHelpers.setupOnerror)(error => {
          assert.equal(error.message, 'Assertion Failed: [component][OSS::Checkbox] Boolean @checked argument is mandatory.');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Checkbox />
        */
        {
          "id": "c1XCXnf0",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/checkbox\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if checked argument is missing', async function (assert) {
        (0, _testHelpers.setupOnerror)(error => {
          assert.equal(error.message, 'Assertion Failed: [component][OSS::Checkbox] @onChange argument is mandatory.');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Checkbox @checked={{true}} />
        */
        {
          "id": "iB6ARZUy",
          "block": "[[[8,[39,0],null,[[\"@checked\"],[true]],null]],[],false,[\"o-s-s/checkbox\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/checkbox-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/chip-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/chip", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _chip, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@upfluence/oss-components/components/o-s-s/chip",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/chip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onRemove = () => {};
      this.label = 'Test';
    });
    (0, _qunit.module)('Default behavior', () => {
      (0, _qunit.test)('basic render', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />
        */
        {
          "id": "AXdx8Bp0",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-chip').exists();
        assert.dom('.upf-chip span').exists();
        assert.dom('.upf-chip i').exists();
        assert.dom('.upf-chip').hasClass('upf-chip--default');
        assert.dom('.upf-chip span').hasText(this.label);
      });
      (0, _qunit.test)('it renders the proper label when @label is passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />
        */
        {
          "id": "AXdx8Bp0",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-chip').exists({
          count: 1
        });
        assert.dom('.upf-chip').hasText('Test');
      });
      (0, _qunit.test)('The component is disabled if the @disabled parameter is truthy', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{true}} />
        */
        {
          "id": "BiZC+eR8",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\",\"@disabled\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]],true]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-chip').exists({
          count: 1
        });
        assert.dom('.upf-chip').hasClass('upf-chip--disabled');
      });
    });
    (0, _qunit.module)('@maxDisplayWidth', () => {
      (0, _qunit.test)('The component adds an ellispsis if the label is wider than @maxDisplayWidth', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label="Test with a huge label sentence" @onRemove={{this.onRemove}} @maxDisplayWidth={{100}} />
        */
        {
          "id": "cIgMw8bW",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\",\"@maxDisplayWidth\"],[\"Test with a huge label sentence\",[30,0,[\"onRemove\"]],100]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-chip').exists({
          count: 1
        });
        assert.dom('.upf-chip span').hasStyle({
          maxWidth: '100px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        });
      });
      (0, _qunit.test)('When the param is not set', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label="Test with a huge label sentence" @onRemove={{this.onRemove}} />
        */
        {
          "id": "IhJqhzF2",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[\"Test with a huge label sentence\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-chip').exists({
          count: 1
        });
        assert.dom('.upf-chip span').doesNotHaveAttribute('style');
        assert.dom('.upf-chip').hasText('Test with a huge label sentence');
      });
    });
    (0, _qunit.module)('On cross click event', hooks => {
      hooks.beforeEach(function () {
        this.onRemove = _sinon.default.stub();
      });
      (0, _qunit.test)('When clicking on the close icon, the component triggers the @onRemove method', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />
        */
        {
          "id": "AXdx8Bp0",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-chip i');
        assert.true(this.onRemove.calledOnce);
      });
      (0, _qunit.test)('When @disabled is true and clicking on the close icon, the component no triggers the @onRemove method', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{true}} />
        */
        {
          "id": "BiZC+eR8",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\",\"@disabled\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]],true]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-chip i');
        assert.true(this.onRemove.notCalled);
      });
    });
    Object.keys(_chip.SkinDefinition).forEach(skin => {
      (0, _qunit.test)(`it sets the right class when using a supported skin: ${skin}`, async function (assert) {
        this.skin = skin;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @skin={{this.skin}} @label={{this.label}} @onRemove={{this.onRemove}} />
        */
        {
          "id": "camz9uEl",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\",\"@onRemove\"],[[30,0,[\"skin\"]],[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-chip').exists();
        assert.dom('.upf-chip').hasClass(`upf-chip--${_chip.SkinDefinition[this.skin]}`);
      });
    });
    (0, _qunit.module)('prefix named-block', () => {
      (0, _qunit.test)('When the prefix named-block is passed, it renders the block', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @skin={{this.skin}} @label={{this.label}} @onRemove={{this.onRemove}}><:prefix><OSS::Icon @icon="fa-users" /></:prefix></OSS::Chip>
        */
        {
          "id": "qiZQiw/b",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\",\"@onRemove\"],[[30,0,[\"skin\"]],[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],[[\"prefix\"],[[[[8,[39,1],null,[[\"@icon\"],[\"fa-users\"]],null]],[]]]]]],[],false,[\"o-s-s/chip\",\"o-s-s/icon\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-chip').exists();
        assert.dom('.upf-chip i.far.fa-users').exists();
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('It throws an error if @onRemove is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Chip] The parameter @onRemove of type function is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @label={{this.label}} />
        */
        {
          "id": "m50//67v",
          "block": "[[[8,[39,0],null,[[\"@label\"],[[30,0,[\"label\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('It throws an error if @label is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Chip] The @label parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Chip @onRemove={{this.onRemove}} />
        */
        {
          "id": "BPwQ9qLV",
          "block": "[[[8,[39,0],null,[[\"@onRemove\"],[[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/chip-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/code-block-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@upfluence/oss-components/test-support", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _testSupport2, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon",0,"@upfluence/oss-components/test-support"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/code-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _testSupport2.setupToast)(hooks);
    hooks.beforeEach(function () {
      this.codeBlock = codeExample;
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock />
      */
      {
        "id": "3J1Y7bfr",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.code-block').exists();
    });
    (0, _qunit.test)('The code content is displayed properly', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} />
      */
      {
        "id": "G6aqzxPU",
        "block": "[[[8,[39,0],null,[[\"@content\"],[[30,0,[\"codeBlock\"]]]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      const codeLines = (0, _testHelpers.findAll)('.code-block code');
      assert.equal(codeLines.length, 60);
      assert.dom(codeLines[0]).hasText("import Component from '@glimmer/component';");
      assert.dom(codeLines[1]).hasText(`import { action } from '@ember/object';`);
      assert.dom(codeLines[2]).hasText(`import { inject as service } from '@ember/service';`);
    });
    (0, _qunit.test)('If copyable parameter is set, the copy button is visible', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} />
      */
      {
        "id": "icQwOObz",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@copyable\"],[[30,0,[\"codeBlock\"]],true]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.code-block .floating-copy-btn').exists();
    });
    (0, _qunit.test)('Clicking on the copy button copies the code into the users clipboard', async function (assert) {
      const stubClipboard = _sinon.default.stub(navigator.clipboard, 'writeText');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} />
      */
      {
        "id": "icQwOObz",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@copyable\"],[[30,0,[\"codeBlock\"]],true]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.code-block .floating-copy-btn .upf-btn');
      assert.ok(stubClipboard.calledOnceWithExactly(this.codeBlock));
      _sinon.default.restore();
    });
    (0, _qunit.test)('if onCopyMessage is set, it shows a toast message when the code is copied', async function (assert) {
      _sinon.default.stub(navigator.clipboard, 'writeText');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} @onCopyMessage={{'Copied!'}} />
      */
      {
        "id": "GOQ0bKn6",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@copyable\",\"@onCopyMessage\"],[[30,0,[\"codeBlock\"]],true,\"Copied!\"]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.code-block .floating-copy-btn .upf-btn');
      assert.ok(this.toastSuccessStub.calledOnceWithExactly('Copied!', ''));
      _sinon.default.restore();
    });
    (0, _qunit.test)('If scrollable parameter is set, the component is scrollable', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @scrollable={{true}} />
      */
      {
        "id": "kZEM9csl",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@scrollable\"],[[30,0,[\"codeBlock\"]],true]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.code-container.scrollable').exists();
    });
    (0, _qunit.test)('If scrollable parameter is unset, the component shows the bottom shadow', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} />
      */
      {
        "id": "G6aqzxPU",
        "block": "[[[8,[39,0],null,[[\"@content\"],[[30,0,[\"codeBlock\"]]]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.code-container.scroll-shadow').exists();
    });
    (0, _qunit.test)('If collapseHeight is set, the height of the component is equal to the param size', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
      */
      {
        "id": "xUb8OMrJ",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.code-container').hasStyle({
        height: '100px'
      });
    });
    (0, _qunit.test)('If collapseHeight is set, the uncollapse button is visible', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
      */
      {
        "id": "xUb8OMrJ",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.floating-collapse-btn').exists();
      assert.dom('.floating-collapse-btn').hasText('Uncollapse');
    });
    (0, _qunit.test)('Clicking on the uncollapse button doubles the components height', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
      */
      {
        "id": "xUb8OMrJ",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.floating-collapse-btn');
      assert.dom('.code-container').hasStyle({
        height: '200px'
      });
    });
    (0, _qunit.test)('Clicking on the collapse button resets the height to the original collapseHeight parameter height', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{102}} />
      */
      {
        "id": "Ynxn/g0l",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],102]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.floating-collapse-btn');
      assert.dom('.code-container').hasStyle({
        height: '204px'
      });
      await (0, _testHelpers.click)('.floating-collapse-btn');
      assert.dom('.code-container').hasStyle({
        height: '102px'
      });
    });
    (0, _qunit.test)('Clicking on the uncollapse button show the collapse button', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
      */
      {
        "id": "xUb8OMrJ",
        "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/code-block-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.floating-collapse-btn');
      assert.dom('.floating-collapse-btn').hasText('Collapse');
    });
  });
  const codeExample = `import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ToastService from '@upfluence/oss-components/services/toast';

interface OSSCodeBlockArgs {
  content: string;
  copyable?: boolean;
  scrollable?: boolean;
  collapseHeight?: number;
  onCopyMessage?: string;
}

export default class OSSCodeBlock extends Component<OSSCodeBlockArgs> {
  @tracked collapsable: boolean = false;
  @tracked collapsed: boolean = true;
  @tracked componentHeight: number = 0;
  @service declare toast: ToastService;

  constructor(owner: unknown, args: OSSCodeBlockArgs) {
    super(owner, args);
    if (this.args.collapseHeight) {
      this.componentHeight = this.args.collapseHeight;
      this.collapsable = true;
    }
  }

  get heightStyle(): string | null {
    if (this.args.collapseHeight) {
      return \`height: \${this.componentHeight}px;\`;
    }
    return null;
  }

  get codeLineArray(): string[] {
    return (this.args.content || '').split(/\r?\n/);
  }

  @action
  copyToClipboard(): void {
    navigator.clipboard.writeText(this.args.content);
    if (this.args.onCopyMessage) {
      this.toast.success(this.args.onCopyMessage, '');
    }
  }

  @action
  collapse(): void {
    this.collapsed = true;
    this.componentHeight = this.componentHeight / 2;
  }

  @action
  uncollapse(): void {
    this.collapsed = false;
    this.componentHeight = this.componentHeight * 2;
  }
}`;
});
define("dummy/tests/integration/components/o-s-s/content-panel-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/content-panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ContentPanel/>
      */
      {
        "id": "Z2Ma9FQD",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/content-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/content-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-content-panel').exists();
    });
    (0, _qunit.test)('The content named-block is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::ContentPanel>
              <p>This is the content</p>
            </OSS::ContentPanel>
      */
      {
        "id": "kQVSHSlY",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n      \"]],[]]]]]],[],false,[\"o-s-s/content-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/content-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-content-panel').hasText('This is the content');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/copy-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@upfluence/oss-components/test-support", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _testSupport2, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon",0,"@upfluence/oss-components/test-support"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/copy', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _testSupport2.setupClipboard)(hooks);
    (0, _testSupport2.setupToast)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Copy />
      */
      {
        "id": "ViKCo+F5",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/copy\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-btn--default').exists();
    });
    (0, _qunit.test)('it renders when inline value is specified', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Copy @inline={{true}} />
      */
      {
        "id": "740FTTH6",
        "block": "[[[8,[39,0],null,[[\"@inline\"],[true]],null]],[],false,[\"o-s-s/copy\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-copy--inline').exists();
    });
    (0, _qunit.module)('for @icon', () => {
      (0, _qunit.test)('when value is undefined, it renders the default icon', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy />
        */
        {
          "id": "ViKCo+F5",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        assert.dom('i.fa-copy').exists();
      });
      (0, _qunit.test)('when value is defined, it renders the specified icon', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy @icon="far fa-jedi" />
        */
        {
          "id": "Ifovw0KX",
          "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-jedi\"]],null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        assert.dom('i.fa-jedi').exists();
      });
    });
    (0, _qunit.module)('for @tooltip', () => {
      (0, _qunit.test)('when value is undefined, it renders the default', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy />
        */
        {
          "id": "ViKCo+F5",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        await assert.tooltip('.upf-btn--default').hasTitle('Copy');
      });
      (0, _qunit.test)('when value is defined, it renders the specified tooltip', async function (assert) {
        this.tooltip = 'Custom tooltip';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy @tooltip={{this.tooltip}} />
        */
        {
          "id": "sgAGgsRX",
          "block": "[[[8,[39,0],null,[[\"@tooltip\"],[[30,0,[\"tooltip\"]]]],null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        await assert.tooltip('.upf-btn--default').hasTitle(this.tooltip);
      });
    });
    (0, _qunit.module)('on non-Chrome browsers the button is always displayed', function (hooks) {
      hooks.beforeEach(function () {
        window.chrome = null;
      });
      (0, _qunit.test)('nothing is rendered', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy />
        */
        {
          "id": "ViKCo+F5",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-btn--default').exists();
      });
    });
    (0, _qunit.module)('the clipboard-write permission is not granted', function (hooks) {
      hooks.beforeEach(function () {
        this.permissionQueryStub.restore();
        this.permissionQueryStub = _sinon.default.stub(navigator.permissions, 'query').resolves({
          name: 'clipboard-write',
          state: 'denied'
        });
      });
      (0, _qunit.test)('nothing is rendered', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy />
        */
        {
          "id": "ViKCo+F5",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.permissionQueryStub.calledOnceWithExactly({
          name: 'clipboard-write'
        }));
        assert.dom('.oss-copy--inline').doesNotExist();
        assert.dom('.upf-btn--default').doesNotExist();
      });
    });
    (0, _qunit.module)('when clicking', function (hooks) {
      hooks.afterEach(function () {
        _sinon.default.restore();
      });
      (0, _qunit.test)('the info toast is rendered', async function (assert) {
        _sinon.default.stub(navigator.clipboard, 'writeText').resolves();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy @value="test" />
        */
        {
          "id": "ZkAdrg36",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"test\"]],null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-btn--default');
        assert.true(this.toastInfoStub.calledOnceWithExactly('Successfully copied to your clipboard.', 'Copied to clipboard'));
      });
      (0, _qunit.test)('the error toast is rendered', async function (assert) {
        _sinon.default.stub(navigator.clipboard, 'writeText').rejects();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy @value="test" />
        */
        {
          "id": "ZkAdrg36",
          "block": "[[[8,[39,0],null,[[\"@value\"],[\"test\"]],null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-btn--default');
        assert.true(this.toastErrorStub.calledOnceWithExactly('Failed to copy to your clipboard. Please try again.', 'Error'));
      });
      (0, _qunit.test)('the clipboard writeText method is called', async function (assert) {
        const writeTextStub = _sinon.default.stub(navigator.clipboard, 'writeText').resolves();
        this.toastInfoStub.resolves();
        this.textForCopy = 'test';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Copy @value={{this.textForCopy}} />
        */
        {
          "id": "z82s9nt3",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"textForCopy\"]]]],null]],[],false,[\"o-s-s/copy\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/copy-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-btn--default');
        assert.true(writeTextStub.calledOnceWithExactly(this.textForCopy));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/country-selector-test", ["@ember/test-helpers/setup-onerror", "@ember/test-helpers/settled", "sinon", "qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "@upfluence/oss-components/utils/country-codes", "@ember/object", "@ember/test-helpers/dom/trigger-key-event", "@ember/template-factory"], function (_setupOnerror, _settled, _sinon, _qunit, _emberQunit, _testSupport, _testHelpers, _countryCodes, _object, _triggerKeyEvent, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/test-helpers/setup-onerror",0,"@ember/test-helpers/settled",0,"sinon",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"@upfluence/oss-components/utils/country-codes",0,"@ember/object",0,"@ember/test-helpers/dom/trigger-key-event"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/country-selector', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.value = '';
      this.onchange = value => {
        (0, _object.set)(this, 'value', value.alpha2);
      };
      this.countries = _countryCodes.countries;
      this.provinces = [{
        name: 'Alabama',
        code: 'AL'
      }, {
        name: 'Alaska',
        code: 'AK'
      }, {
        name: 'American Samoa',
        code: 'AS'
      }];
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
      */
      {
        "id": "qYzSGkKr",
        "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
        "isStrictMode": false
      }));
      assert.ok(true);
    });
    (0, _qunit.test)('When clicking on the input, the dropdown menu opens', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
      */
      {
        "id": "qYzSGkKr",
        "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
      assert.dom('.upf-infinite-select').exists();
    });
    (0, _qunit.module)('If @value is passed', function () {
      (0, _qunit.test)('If the value matches an entry from the sourceList, then the input is set to the value', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} @value="FR" />
        */
        {
          "id": "oPXm/aww",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\",\"@value\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]],\"FR\"]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="country-selector-input"]').hasText('France');
      });
      (0, _qunit.test)('If the component is in country mode, an alpha2 code will be matched in the @sourceList', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} @value="US" />
        */
        {
          "id": "sPGcvthV",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\",\"@value\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]],\"US\"]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="country-selector-input"]').hasText('United States');
      });
      (0, _qunit.test)('If the component is in province mode, a code as @value will be matched in the @sourceList', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} @value="AL" />
        */
        {
          "id": "VKJ+1lq/",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\",\"@value\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]],\"AL\"]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="country-selector-input"]').hasText('Alabama');
      });
      (0, _qunit.test)('If the component is in province mode, a province name as @value will be matched in the @sourceList', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} @value="Alaska" />
        */
        {
          "id": "UvbmJdNl",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\",\"@value\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]],\"Alaska\"]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="country-selector-input"]').hasText('Alaska');
      });
      (0, _qunit.test)('If the value matches an entry from the sourceList, the @onChange function is triggered', async function (assert) {
        this.onchange = _sinon.default.spy();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} @value="FR" />
        */
        {
          "id": "oPXm/aww",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\",\"@value\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]],\"FR\"]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.onchange.calledOnceWith({
          id: 'FR',
          alpha2: 'FR',
          alpha3: 'FRA',
          countryCallingCodes: ['33'],
          currencies: ['EUR'],
          name: 'France',
          showOnTop: true
        }));
      });
    });
    (0, _qunit.module)('Dropdown menu', () => {
      (0, _qunit.test)('It displays all items from the @sourceList parameter', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
        */
        {
          "id": "qYzSGkKr",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        const rows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
        assert.equal(rows.length, this.countries.length);
      });
      (0, _qunit.test)('if @sourceList contain ids, then country icons are displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
        */
        {
          "id": "qYzSGkKr",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        assert.dom('.upf-infinite-select__item' + ' .fflag.fflag-US').exists();
      });
    });
    (0, _qunit.test)('If @sourceList contains ids, then the country placeholder is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
      */
      {
        "id": "qYzSGkKr",
        "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="country-selector-input"]').hasText('Select your country');
    });
    (0, _qunit.test)('if sourceList does not contain ids, then the placeholder is for provinces', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />
      */
      {
        "id": "llUkzqCi",
        "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="country-selector-input"]').hasText('Select your province/state');
    });
    (0, _qunit.module)('When clicking on an item', () => {
      (0, _qunit.test)('When selecting an item, the dropdown is closed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />
        */
        {
          "id": "llUkzqCi",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');
        assert.dom('.upf-infinite-select').doesNotExist();
      });
      (0, _qunit.test)('When clicking outside of the dropdown, the dropdown is closed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />
        */
        {
          "id": "llUkzqCi",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        assert.dom('.upf-infinite-select').doesNotExist();
      });
      (0, _qunit.test)('the input is updated with the value', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @value={{this.value}} @onChange={{this.onchange}} @sourceList={{this.countries}} />
        */
        {
          "id": "SXF5Cm6S",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"value\"]],[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');
        assert.dom('[data-control-name="country-selector-input"]').hasText('United States');
      });
      (0, _qunit.test)('the @onChange method is triggered with the selected value', async function (assert) {
        this.onchange = _sinon.default.spy();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
        */
        {
          "id": "qYzSGkKr",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(2)');
        assert.ok(this.onchange.calledWith({
          id: 'FR',
          alpha2: 'FR',
          alpha3: 'FRA',
          countryCallingCodes: ['33'],
          currencies: ['EUR'],
          name: 'France',
          showOnTop: true
        }));
      });
      (0, _qunit.test)('If the component is using Countries as @sourceList, the flag icon is visible in the input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @value={{this.value}} @onChange={{this.onchange}} @sourceList={{this.countries}} />
        */
        {
          "id": "SXF5Cm6S",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"value\"]],[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');
        assert.dom('[data-control-name="country-selector-input"]').hasText('United States');
        assert.dom('[data-control-name="country-selector-input"] .fflag.fflag-US').exists();
      });
      (0, _qunit.test)('If the component is using Provinces as @sourceList, the flag icon is not visible in the input', async function (assert) {
        this.province = '';
        this.onProvinceChange = value => {
          (0, _object.set)(this, 'province', value.name);
        };
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @value={{this.province}} @onChange={{this.onProvinceChange}} @sourceList={{this.provinces}} />
        */
        {
          "id": "GkOUyWts",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"province\"]],[30,0,[\"onProvinceChange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="country-selector-input"]');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');
        assert.dom('[data-control-name="country-selector-input"]').hasText('Alabama');
        assert.dom('[data-control-name="country-selector-input"] .fflag.fflag-US').doesNotExist();
      });
    });
    (0, _qunit.module)('Keyboard control management', () => {
      (0, _qunit.test)('on keydown Enter should open the dropdown', async function (assert) {
        this.onProvinceChange = value => {
          (0, _object.set)(this, 'province', value.name);
        };
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @value={{this.province}} @onChange={{this.onProvinceChange}} @sourceList={{this.provinces}} />
        */
        {
          "id": "GkOUyWts",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"province\"]],[30,0,[\"onProvinceChange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-infinite-select').doesNotExist();
        await (0, _triggerKeyEvent.default)('[data-control-name="country-selector-input"]', 'keydown', 'Enter');
        assert.dom('.upf-infinite-select').exists();
      });
    });
    (0, _qunit.module)('error management', () => {
      (0, _qunit.test)('it throws an error if @sourceList is not provided', async function (assert) {
        (0, _setupOnerror.default)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::CountrySelector] The parameter @sourceList of type object is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @onChange={{this.onchange}} />
        */
        {
          "id": "F2YRvdwW",
          "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onchange\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
      (0, _qunit.test)('it throws an error if @onChange is not provided', async function (assert) {
        (0, _setupOnerror.default)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::CountrySelector] The @onChange parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CountrySelector @sourceList={{this.countries}} />
        */
        {
          "id": "K4nllJwy",
          "block": "[[[8,[39,0],null,[[\"@sourceList\"],[[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/country-selector-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/currency-input-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/currency-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.onChange = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CurrencyInput @onChange={{this.onChange}} />
      */
      {
        "id": "VZbpOfOA",
        "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.currency-input-container').exists();
    });
    (0, _qunit.test)('The passed @value parameter is properly displayed in the input', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CurrencyInput @value="12341234" @onChange={{this.onChange}} />
      */
      {
        "id": "xl5NdRY/",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[\"12341234\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('input').hasValue('12341234');
    });
    (0, _qunit.test)('It properly loads the correct currency when the @currency parameter is defined', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CurrencyInput @currency="EUR" @onChange={{this.onChange}} />
      */
      {
        "id": "pJyF1WLs",
        "block": "[[[8,[39,0],null,[[\"@currency\",\"@onChange\"],[\"EUR\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.currency-selector').hasText('€');
    });
    (0, _qunit.test)('It displays an error message below the component if @errorMessage is passed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CurrencyInput @onChange={{this.onChange}} @errorMessage="This is an error message" />
      */
      {
        "id": "UXTL+lKn",
        "block": "[[[8,[39,0],null,[[\"@onChange\",\"@errorMessage\"],[[30,0,[\"onChange\"]],\"This is an error message\"]],null]],[],false,[\"o-s-s/currency-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.currency-input-container').containsText('This is an error message');
    });
    (0, _qunit.test)('It displays an red border around the component if @errorMessage exists', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CurrencyInput @onChange={{this.onChange}} @errorMessage="This is an error message" />
      */
      {
        "id": "UXTL+lKn",
        "block": "[[[8,[39,0],null,[[\"@onChange\",\"@errorMessage\"],[[30,0,[\"onChange\"]],\"This is an error message\"]],null]],[],false,[\"o-s-s/currency-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.currency-input-container').hasStyle({
        borderColor: 'rgb(27, 30, 33)'
      });
    });
    (0, _qunit.module)('Currency selector', () => {
      (0, _qunit.test)('Clicking on the currency symbol button opens the currency selector', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "1ORNPtBd",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.currency-selector');
        assert.dom('.upf-infinite-select').exists();
      });
      (0, _qunit.test)('Selecting a new currency in the Currency selector triggers the onChange method', async function (assert) {
        this.currency = '';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "/kK9ZJSa",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.currency-selector');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(5)');
        assert.true(this.onChange.calledOnceWithExactly('AUD', 0));
      });
      (0, _qunit.test)('Selecting a new currency in the selector triggers the onChange method', async function (assert) {
        this.currency = '';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @onlyCurrency={{true}} @currency={{this.currency}} @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "XIpYtBRL",
          "block": "[[[8,[39,0],null,[[\"@onlyCurrency\",\"@currency\",\"@value\",\"@onChange\"],[true,[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.currency-selector');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(5)');
        assert.true(this.onChange.calledOnceWithExactly('AUD', 0));
      });
      (0, _qunit.test)('Typing in the search input filters the results', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "1ORNPtBd",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.currency-selector');
        assert.dom('.upf-infinite-select').exists();
        await (0, _testHelpers.typeIn)('.upf-infinite-select input', 'usd');
        const clickableRows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
        assert.equal(clickableRows.length, 1);
        assert.dom(clickableRows[0]).hasText('$ USD');
      });
      (0, _qunit.test)('Searching by currency symbol works', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "1ORNPtBd",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.currency-selector');
        assert.dom('.upf-infinite-select').exists();
        await (0, _testHelpers.typeIn)('.upf-infinite-select input', '€');
        const clickableRows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
        assert.equal(clickableRows.length, 1);
        assert.dom(clickableRows[0]).hasText('€ EUR');
      });
      (0, _qunit.test)('The passed @currency parameter changes are properly tracked in the input', async function (assert) {
        this.currency = 'USD';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "/kK9ZJSa",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.currency-selector').hasText('$');
        this.set('currency', 'EUR');
        assert.dom('.currency-selector').hasText('€');
      });
      (0, _qunit.test)('The currency selection is disabled if @allowCurrencyUpdate is falsy', async function (assert) {
        this.currency = 'USD';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} @allowCurrencyUpdate={{false}} />
        */
        {
          "id": "IigriBic",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\",\"@allowCurrencyUpdate\"],[[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]],false]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.currency-selector .far.fa-chevron-down').doesNotExist();
        await (0, _testHelpers.click)('.currency-selector');
        assert.dom('.upf-infinite-select').doesNotExist();
      });
      (0, _qunit.test)('Passing the @allowedCurrencies parameter overwrites the selectable options', async function (assert) {
        this.allowedCurrencies = [{
          code: 'USD',
          symbol: '$'
        }, {
          code: 'EUR',
          symbol: '€'
        }];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}}
                                                 @allowedCurrencies={{this.allowedCurrencies}} />
        */
        {
          "id": "hMCsbO+a",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\",\"@allowedCurrencies\"],[[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]],[30,0,[\"allowedCurrencies\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.currency-selector');
        const clickableRows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
        assert.equal(clickableRows.length, 2);
      });
    });
    (0, _qunit.module)('Currency Input', () => {
      (0, _qunit.test)('Typing numbers in the currency input triggers the onChange method', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "1ORNPtBd",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.typeIn)('input', '8');
        assert.ok(this.onChange.calledOnce);
        assert.dom('input').hasValue('08');
      });
      (0, _qunit.test)('Typing non-numeric characters does not apply changes', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
        */
        {
          "id": "1ORNPtBd",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.typeIn)('input', '8');
        assert.ok(this.onChange.calledOnce);
        // @ts-ignore
        await (0, _testHelpers.triggerKeyEvent)('input', 'keydown', 'A', {
          code: 'a'
        });
        assert.dom('input').hasValue('08');
      });
      (0, _qunit.test)('Placeholder is correctly displayed when provided', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @currency="" @value="" @placeholder="foobar" @onChange={{this.onChange}} />
        */
        {
          "id": "3E4V7PcD",
          "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@placeholder\",\"@onChange\"],[\"\",\"\",\"foobar\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('input').hasAttribute('placeholder', 'foobar');
      });
    });
    (0, _qunit.test)('When @onlyCurrency is truthy, only the currency is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CurrencyInput @currency="USD" @onlyCurrency={{true}} @onChange={{this.onChange}} />
      */
      {
        "id": "Ps647H3Z",
        "block": "[[[8,[39,0],null,[[\"@currency\",\"@onlyCurrency\",\"@onChange\"],[\"USD\",true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.currency-input-container').exists();
      assert.dom('.currency-selector').hasText('$ USD');
      assert.dom('.currency-input input').doesNotExist();
    });
    (0, _qunit.module)('For @disabled argument', () => {
      (0, _qunit.test)("The disabled class isn't here for undefined value", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @onChange={{this.onChange}} />
        */
        {
          "id": "VZbpOfOA",
          "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.currency-input-container--disabled').doesNotExist();
        assert.dom('.currency-input input').isNotDisabled();
      });
      (0, _qunit.test)("The disabled class isn't here for false value", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @onChange={{this.onChange}} @disabled={{false}} />
        */
        {
          "id": "cnv46fEg",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@disabled\"],[[30,0,[\"onChange\"]],false]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.currency-input-container--disabled').doesNotExist();
        assert.dom('.currency-input input').isNotDisabled();
      });
      (0, _qunit.test)('The disabled class is here for true value', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @onChange={{this.onChange}} @disabled={{true}} />
        */
        {
          "id": "6egcLOp0",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@disabled\"],[[30,0,[\"onChange\"]],true]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.currency-input-container--disabled').exists();
        assert.dom('.currency-input input').isDisabled();
      });
    });
    (0, _qunit.module)('When the paste event is received', function (hooks) {
      hooks.beforeEach(function () {
        this.value = '1234567890';
      });
      (0, _qunit.test)('The value stored in the clipboard is inserted in the input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @onChange={{this.onChange}} @value={{this.value}} />
        */
        {
          "id": "sMw0Bgtw",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('input').hasValue('1234567890');
        await (0, _testHelpers.triggerEvent)('input', 'paste', {
          clipboardData: {
            getData: _sinon.default.stub().returns('123')
          }
        });
        assert.dom('input').hasValue('1234567890123');
      });
      (0, _qunit.test)('The non-numeric characters are escaped', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @onChange={{this.onChange}} @value={{this.value}} />
        */
        {
          "id": "sMw0Bgtw",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('input').hasValue('1234567890');
        await (0, _testHelpers.triggerEvent)('input', 'paste', {
          clipboardData: {
            getData: _sinon.default.stub().returns('1withletter0')
          }
        });
        assert.dom('input').hasValue('123456789010');
      });
      (0, _qunit.test)('When selection is applied, it replaces the selection', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::CurrencyInput @onChange={{this.onChange}} @value={{this.value}} />
        */
        {
          "id": "sMw0Bgtw",
          "block": "[[[8,[39,0],null,[[\"@onChange\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('input').hasValue('1234567890');
        let input = document.querySelector('input.ember-text-field');
        input.setSelectionRange(4, 6);
        await (0, _testHelpers.triggerEvent)('input', 'paste', {
          clipboardData: {
            getData: _sinon.default.stub().returns('0')
          }
        });
        assert.dom('input').hasValue('123407890');
      });
    });
    (0, _qunit.test)('It throws an error if @onChange is not passed', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::CurrencyInput] The parameter @onChange of type function is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::CurrencyInput />
      */
      {
        "id": "j4YPOnps",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/currency-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/currency-input-test.ts",
        "isStrictMode": false
      }));
    });
  });
});
define("dummy/tests/integration/components/o-s-s/dialog-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/dialog', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.title = 'Dialog title';
      this.mainAction = {
        label: 'Main action',
        action: _sinon.default.stub()
      };
      this.secondaryAction = {
        label: 'Secondary action',
        action: _sinon.default.stub()
      };
    });
    (0, _qunit.test)('It renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-dialog').exists();
    });
    (0, _qunit.test)('The dialog title is correctly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-dialog__header').hasText(this.title);
    });
    (0, _qunit.test)('If a @subtitle is passed, it is displayed', async function (assert) {
      this.subtitle = 'This is a subtitle';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @subtitle={{this.subtitle}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "A93D8lfA",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.font-color-gray-900.font-size-sm').hasText(`${this.subtitle}`);
    });
    (0, _qunit.module)('For @skin', () => {
      (0, _qunit.test)('When the value is undefined, the default skin is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "ETnwaB00",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-dialog__footer .upf-btn--alert').exists();
        assert.dom('.oss-dialog__header .upf-badge--alert').exists();
      });
      (0, _qunit.test)('When the value is "alert", the corresponding skin is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @skin="alert" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "PEpwtywO",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@skin\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],\"alert\",[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-dialog__footer .upf-btn--alert').exists();
        assert.dom('.oss-dialog__header .upf-badge--alert').exists();
      });
      (0, _qunit.test)('When the value is "error", the corresponding skin is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @skin="error" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "KbM05kGV",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@skin\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],\"error\",[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-dialog__footer .upf-btn--destructive').exists();
        assert.dom('.oss-dialog__header .upf-badge--error').exists();
      });
      (0, _qunit.test)('When the value is "primary", the corresponding skin is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @skin="primary" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "TsMIfc1l",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@skin\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],\"primary\",[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-dialog__footer .upf-btn--primary').exists();
        assert.dom('.oss-dialog__header .upf-badge--primary').exists();
      });
    });
    (0, _qunit.module)('For @icon', () => {
      (0, _qunit.test)('When the value is undefined, the default icon is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "ETnwaB00",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-dialog__header .upf-badge--alert .fa-warning').exists();
      });
      (0, _qunit.test)('When the value is defined, the corresponding icon is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @icon="fa-otter" @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "ze4LQemx",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@icon\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],\"fa-otter\",[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-dialog__header .upf-badge--alert .fa-otter').exists();
      });
    });
    (0, _qunit.test)('The main action button label is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-dialog__footer .upf-btn--alert').hasText(this.mainAction.label);
    });
    (0, _qunit.test)('When the main action button has the loading property set to true, the button shows a spinner', async function (assert) {
      this.mainAction.loading = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="dialog-primary-action-button"] .fa-circle-notch').exists();
    });
    (0, _qunit.test)('When the main action button has the icon property provided, the button shows it', async function (assert) {
      this.mainAction.icon = 'far fa-robot';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="dialog-primary-action-button"] .fa-robot').exists();
    });
    (0, _qunit.test)('The secondary action button label is displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-dialog__footer .upf-btn--default').hasText(this.secondaryAction.label);
    });
    (0, _qunit.test)('When the secondary action button has the icon property provided, the button shows it', async function (assert) {
      this.secondaryAction.icon = 'far fa-robot';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="dialog-secondary-action-button"] .fa-robot').exists();
    });
    (0, _qunit.test)('When clicking on the main action button, the main action is called', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.oss-dialog__footer .upf-btn--alert');
      assert.true(this.mainAction.action.calledOnce);
    });
    (0, _qunit.test)('When clicking on the secondary action button, the secondary action is called', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
      */
      {
        "id": "ETnwaB00",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.oss-dialog__footer .upf-btn--default');
      assert.true(this.secondaryAction.action.calledOnce);
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('The component throws an error if the @title parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Dialog] The title parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @mainAction={{this.mainAction}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "4RdYwP4h",
          "block": "[[[8,[39,0],null,[[\"@mainAction\",\"@secondaryAction\"],[[30,0,[\"mainAction\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('The component throws an error if the @mainAction parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Dialog] The mainAction parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @secondaryAction={{this.secondaryAction}} />
        */
        {
          "id": "fUAVB+Cs",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@secondaryAction\"],[[30,0,[\"title\"]],[30,0,[\"secondaryAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('The component throws an error if the @secondaryAction parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Dialog] The secondaryAction parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Dialog @title={{this.title}} @mainAction={{this.mainAction}} />
        */
        {
          "id": "GX9kESRJ",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@mainAction\"],[[30,0,[\"title\"]],[30,0,[\"mainAction\"]]]],null]],[],false,[\"o-s-s/dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/dialog-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/email-input-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/email-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmailInput @value="" />
      */
      {
        "id": "//gZPh9T",
        "block": "[[[8,[39,0],null,[[\"@value\"],[\"\"]],null]],[],false,[\"o-s-s/email-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-container').exists();
    });
    (0, _qunit.test)('it renders the @placeholder', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmailInput @value="" @placeholder="test" />
      */
      {
        "id": "H9f6UQMi",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@placeholder\"],[\"\",\"test\"]],null]],[],false,[\"o-s-s/email-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-container input').hasProperty('placeholder', 'test');
    });
    (0, _qunit.test)('it displays the error message when the @errorMessage is non-empty', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmailInput @value="" @errorMessage="This is the error message" />
      */
      {
        "id": "hEB/kSfp",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@errorMessage\"],[\"\",\"This is the error message\"]],null]],[],false,[\"o-s-s/email-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
      assert.dom('.text-color-error').hasText('This is the error message');
    });
    (0, _qunit.test)('If the email regex isnt matched, then the error message is displayed', async function (assert) {
      this.value = '';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmailInput @value={{this.value}} />
      */
      {
        "id": "xjO7Ay2m",
        "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)('input', 'foo@f');
      assert.dom('.text-color-error').hasText('Please enter a valid email address.');
    });
    (0, _qunit.test)('If the email regex is matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
      this.value = 'john.doe@example.com';
      this.validates = x => {
        assert.equal(x, true);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmailInput @value={{this.value}} @validates={{this.validates}} />
      */
      {
        "id": "XVa2HKZh",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)('input', 'a');
    });
    (0, _qunit.test)('If the email regex isnt matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
      this.value = 'foo@f';
      this.validates = x => {
        assert.equal(x, false);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmailInput @value={{this.value}} @validates={{this.validates}} />
      */
      {
        "id": "XVa2HKZh",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)('input', 'a');
    });
    (0, _qunit.test)('it throws an error when the @value parameter is missing', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::EmailInput] The @value parameter is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmailInput />
      */
      {
        "id": "N1/+IAX1",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/email-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
        "isStrictMode": false
      }));
    });
    (0, _qunit.module)('for the @onChange method', hooks => {
      hooks.beforeEach(function () {
        this.value = '';
        this.onChange = _sinon.default.stub();
      });
      (0, _qunit.test)('it is called when a new character is typed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmailInput @value={{this.value}} @onChange={{this.onChange}} />
        */
        {
          "id": "TAPo0MXs",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.typeIn)('input', 'a');
        assert.true(this.onChange.calledOnceWithExactly('a'));
      });
      (0, _qunit.test)('it returns null value', async function (assert) {
        this.value = null;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmailInput @value={{this.value}} @onChange={{this.onChange}} />
        */
        {
          "id": "TAPo0MXs",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerKeyEvent)('input', 'keyup', 'Backspace');
        assert.true(this.onChange.calledOnceWithExactly(null));
      });
      (0, _qunit.test)('if defined, it transforms the result to lowercase', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmailInput @value={{this.value}} @onChange={{this.onChange}} />
        */
        {
          "id": "TAPo0MXs",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/email-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.typeIn)('input', 'A');
        assert.true(this.onChange.calledOnceWithExactly('a'));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/empty-state-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/empty-state', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders with default properties', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmptyState @title="No Data" @subtitle="Try again later" />
      */
      {
        "id": "soLGenqS",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\"],[\"No Data\",\"Try again later\"]],null]],[],false,[\"o-s-s/empty-state\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
        "isStrictMode": false
      }));
      assert.dom('div.font-color-gray-900').hasText('No Data');
      assert.dom('div.font-color-gray-500').hasText('Try again later');
    });
    (0, _qunit.test)('it renders with a badge icon', async function (assert) {
      this.set('image', 'fa-thumbs-up');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::EmptyState @title="No Data" @subtitle="Try again later" @badgeIcon={{this.image}} />
      */
      {
        "id": "I3irsZi8",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@badgeIcon\"],[\"No Data\",\"Try again later\",[30,0,[\"image\"]]]],null]],[],false,[\"o-s-s/empty-state\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
        "isStrictMode": false
      }));
      assert.dom('div.font-color-gray-900').hasText('No Data');
      assert.dom('div.font-color-gray-500').hasText('Try again later');
      assert.dom('.upf-badge').exists();
    });
    (0, _qunit.test)('it supports named-block usage for image', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::EmptyState @title="No Data" @subtitle="Try again later">
              <:image>
                <img src="/test-image.png" alt="Test Image" />
              </:image>
            </OSS::EmptyState>
          
      */
      {
        "id": "8MQ4GaKE",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\"],[\"No Data\",\"Try again later\"]],[[\"image\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"/test-image.png\"],[14,\"alt\",\"Test Image\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/empty-state\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
        "isStrictMode": false
      }));
      assert.dom('div.font-color-gray-900').hasText('No Data');
      assert.dom('div.font-color-gray-500').hasText('Try again later');
      assert.dom('img').exists();
    });
    (0, _qunit.test)('it supports named-block usage for actions', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::EmptyState @title="No Data" @subtitle="Try again later">
              <:actions>
                <button type="button">Retry</button>
              </:actions>
            </OSS::EmptyState>
          
      */
      {
        "id": "O/13dJ1S",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\"],[\"No Data\",\"Try again later\"]],[[\"actions\"],[[[[1,\"\\n          \"],[10,\"button\"],[14,4,\"button\"],[12],[1,\"Retry\"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/empty-state\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
        "isStrictMode": false
      }));
      assert.dom('div.font-color-gray-900').hasText('No Data');
      assert.dom('div.font-color-gray-500').hasText('Try again later');
      assert.dom('button').hasText('Retry');
    });
    (0, _qunit.module)('component size', function (hooks) {
      (0, _qunit.test)('it applies md sizes by default', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmptyState @title="No Data" @subtitle="Try again later" />
        */
        {
          "id": "soLGenqS",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\"],[\"No Data\",\"Try again later\"]],null]],[],false,[\"o-s-s/empty-state\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
          "isStrictMode": false
        }));
        assert.dom('div.font-color-gray-900').hasClass('font-size-lg');
        assert.dom('div.font-color-gray-500').hasClass('font-size-md');
      });
      (0, _qunit.test)('it applies md sizes when given a wrong size', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmptyState @title="No Data" @subtitle="Try again later" @size="wrong" />
        */
        {
          "id": "CWE5do1M",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@size\"],[\"No Data\",\"Try again later\",\"wrong\"]],null]],[],false,[\"o-s-s/empty-state\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
          "isStrictMode": false
        }));
        assert.dom('div.font-color-gray-900').hasClass('font-size-lg');
        assert.dom('div.font-color-gray-500').hasClass('font-size-md');
      });
      (0, _qunit.test)('it applies md sizes when specified', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmptyState @title="No Data" @subtitle="Try again later" @size="md" />
        */
        {
          "id": "DVuLjSvg",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@size\"],[\"No Data\",\"Try again later\",\"md\"]],null]],[],false,[\"o-s-s/empty-state\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
          "isStrictMode": false
        }));
        assert.dom('div.font-color-gray-900').hasClass('font-size-lg');
        assert.dom('div.font-color-gray-500').hasClass('font-size-md');
      });
      (0, _qunit.test)('it applies sm sizes when specified', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmptyState @title="No Data" @subtitle="Try again later" @size="sm" />
        */
        {
          "id": "SkRZddIN",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@size\"],[\"No Data\",\"Try again later\",\"sm\"]],null]],[],false,[\"o-s-s/empty-state\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
          "isStrictMode": false
        }));
        assert.dom('div.font-color-gray-900').hasClass('font-size-md');
        assert.dom('div.font-color-gray-500').hasClass('font-size-sm');
      });
    });
    (0, _qunit.module)('error management', function (hooks) {
      (0, _qunit.test)('it throws an error if the @title parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::EmptyState] The title parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmptyState @subtitle="Try again later" />
        */
        {
          "id": "GYFDFoxg",
          "block": "[[[8,[39,0],null,[[\"@subtitle\"],[\"Try again later\"]],null]],[],false,[\"o-s-s/empty-state\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if the @subtitle parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::EmptyState] The subtitle parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::EmptyState @title="No Data" />
        */
        {
          "id": "x+wVKAJr",
          "block": "[[[8,[39,0],null,[[\"@title\"],[\"No Data\"]],null]],[],false,[\"o-s-s/empty-state\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/empty-state-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/icon-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  const STYLE_CLASSES = {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    duotone: 'fad',
    brand: 'fab'
  };
  (0, _qunit.module)('Integration | Component | o-s-s/icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Icon @icon="fa-laptop-code" />
      */
      {
        "id": "mbrPgxAs",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fa-laptop-code\"]],null]],[],false,[\"o-s-s/icon\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/icon-test.ts",
        "isStrictMode": false
      }));
      assert.dom('i').exists();
    });
    (0, _qunit.test)('it renders the correct icon class', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Icon @icon="fa-code-merge" />
      */
      {
        "id": "o59bPqQc",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fa-code-merge\"]],null]],[],false,[\"o-s-s/icon\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/icon-test.ts",
        "isStrictMode": false
      }));
      assert.dom('i').hasClass('fa-code-merge');
    });
    (0, _qunit.test)(`it renders the correct default style class`, async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Icon @icon="fa-code-merge" />
      */
      {
        "id": "o59bPqQc",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fa-code-merge\"]],null]],[],false,[\"o-s-s/icon\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/icon-test.ts",
        "isStrictMode": false
      }));
      assert.dom('i').hasClass('far');
    });
    for (const [key, value] of Object.entries(STYLE_CLASSES)) {
      (0, _qunit.test)(`it renders the correct style ${key} class`, async function (assert) {
        this.style = key;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Icon @icon="fa-code-merge" @style={{this.style}} />
        */
        {
          "id": "nl/oHDkr",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@style\"],[\"fa-code-merge\",[30,0,[\"style\"]]]],null]],[],false,[\"o-s-s/icon\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/icon-test.ts",
          "isStrictMode": false
        }));
        assert.dom('i').hasClass(value);
      });
    }
    (0, _qunit.test)('it throws an error if icon argument is missing', async function (assert) {
      (0, _testHelpers.setupOnerror)(error => {
        assert.equal(error.message, 'Assertion Failed: [component][OSS::Icon] The @icon parameter is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Icon />
      */
      {
        "id": "HX993/w2",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/icon\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/icon-test.ts",
        "isStrictMode": false
      }));
    });
  });
});
define("dummy/tests/integration/components/o-s-s/illustration-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/illustration", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _illustration, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"@upfluence/oss-components/components/o-s-s/illustration"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/illustration', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('the style is inserted in the fetched svg', async function (assert) {
      this.extractedCSSVars = (0, _illustration.extractCSSVars)().join(';');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Illustration @src="/@upfluence/oss-components/assets/images/no-records.svg" />
      */
      {
        "id": "VzXz5vu3",
        "block": "[[[8,[39,0],null,[[\"@src\"],[\"/@upfluence/oss-components/assets/images/no-records.svg\"]],null]],[],false,[\"o-s-s/illustration\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/illustration-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.waitUntil)(() => {
        return (0, _testHelpers.find)('svg');
      });
      assert.deepEqual((0, _testHelpers.find)('svg style').textContent.trim(), `:root { ${this.extractedCSSVars} }`.trim());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/infinite-select-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  function _isFocused(element) {
    return element === document.activeElement;
  }
  const FAKE_DATA = [{
    name: 'Batman',
    characters: 'Bruce Wayne'
  }, {
    name: 'Superman',
    characters: 'Kal-El'
  }, {
    name: 'Green Arrow',
    characters: 'Oliver Queen'
  }, {
    name: 'Wonder Woman',
    characters: 'Princess Diana'
  }, {
    name: 'Martian Manhunter',
    characters: 'Martian Manhunter'
  }, {
    name: 'Robin/Nightwing',
    characters: 'Dick Grayson'
  }, {
    name: 'Spider Man',
    characters: 'Peter Parker'
  }, {
    name: 'Iron Man',
    characters: 'Tony Stark'
  }, {
    name: 'Thor',
    characters: 'Thor Odinson'
  }, {
    name: 'Hulk',
    characters: 'Bruce Banner'
  }, {
    name: 'Wolverine',
    characters: 'James Howlett'
  }];
  (0, _qunit.module)('Integration | Component | o-s-s/infinite-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _qunit.module)('search is enabled', function () {
      (0, _qunit.module)('with onSearch hook', function () {
        (0, _qunit.test)('it calls the onSearch hook with the typed keyword', async function (assert) {
          this.onSearch = keyword => {
            assert.equal(keyword, 'b', 'Enters the onSearch hook');
          };
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect
                          @items={{this.items}} @searchEnabled={{true}} @onSearch={{this.onSearch}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "VNX3UGGQ",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSearch\",\"@onSelect\"],[[30,0,[\"items\"]],true,[30,0,[\"onSearch\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select input.upf-input').exists();
          await (0, _testHelpers.typeIn)('.upf-infinite-select input.upf-input', 'b');
        });
        (0, _qunit.test)('it uses the passed placeholder when present', async function (assert) {
          this.onSearch = () => {};
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <OSS::InfiniteSelect
                        @items={{this.items}} @searchEnabled={{true}} @onSearch={{this.onSearch}} @searchPlaceholder="Foobar"
                        @onSelect={{this.onSelect}}/>
                    
          */
          {
            "id": "zmidhmJv",
            "block": "[[[1,\"\\n            \"],[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSearch\",\"@searchPlaceholder\",\"@onSelect\"],[[30,0,[\"items\"]],true,[30,0,[\"onSearch\"]],\"Foobar\",[30,0,[\"onSelect\"]]]],null],[1,\"\\n          \"]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select input.upf-input').exists();
          assert.dom('.upf-infinite-select input.upf-input').hasAttribute('placeholder', 'Foobar');
        });
      });
    });
    (0, _qunit.module)('item selection', function () {
      (0, _qunit.module)('onSelect is passed', function () {
        (0, _qunit.test)('it calls the onSelect hook with the clicked item', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = item => {
            assert.equal(item.name, 'Batman');
          };
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "YU8eRyjM",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          await (0, _testHelpers.click)('.upf-infinite-select__items-container .upf-infinite-select__item:first-child');
        });
      });
    });
    (0, _qunit.module)('loading states', function () {
      (0, _qunit.module)('full content loading', function () {
        (0, _qunit.test)('should display rows of skeleton loading in place of the content', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @loading={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "PV95TKPs",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@loading\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],true,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').doesNotExist();
          assert.dom('.upf-infinite-select__items-container .upf-skeleton-effect').exists({
            count: 5
          });
        });
      });
      (0, _qunit.module)('additional content loading', function () {
        (0, _qunit.test)('should display rows of skeleton loading after the existing content', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @loadingMore={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "2QRiNZ1/",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@loadingMore\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],true,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').exists({
            count: FAKE_DATA.length
          });
          assert.dom('.upf-infinite-select__items-container .upf-skeleton-effect').exists({
            count: 3
          });
        });
      });
    });
    (0, _qunit.module)('it renders', function () {
      (0, _qunit.module)('with itemLabel', function () {
        (0, _qunit.test)('it uses the passed itemLabel argument as display key', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @itemLabel="characters" @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "DGWqF5sk",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@itemLabel\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],\"characters\",false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').exists({
            count: FAKE_DATA.length
          });
          let displayedNames = [];
          document.querySelectorAll('.upf-infinite-select__items-container .upf-infinite-select__item').forEach(x => {
            displayedNames.push(x.textContent.trim());
          });
          assert.deepEqual(displayedNames, FAKE_DATA.map(x => x.characters));
        });
      });
      (0, _qunit.module)('with option block', function () {
        (0, _qunit.test)('it uses the passed block to display options', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}>
                        <:option as |opt|>
                          Comics - {{opt.name}}
                        </:option>
                      </OSS::InfiniteSelect>
                    
          */
          {
            "id": "U9wMQPOn",
            "block": "[[[1,\"\\n            \"],[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],[[\"option\"],[[[[1,\"\\n                Comics - \"],[1,[30,1,[\"name\"]]],[1,\"\\n              \"]],[1]]]]],[1,\"\\n          \"]],[\"opt\"],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').exists({
            count: FAKE_DATA.length
          });
          let displayedNames = [];
          document.querySelectorAll('.upf-infinite-select__items-container .upf-infinite-select__item').forEach(x => {
            displayedNames.push(x.textContent.trim());
          });
          assert.deepEqual(displayedNames, FAKE_DATA.map(x => `Comics - ${x.name}`));
        });
      });
      (0, _qunit.module)('with empty items', function () {
        (0, _qunit.test)('it should render the empty state', async function (assert) {
          this.items = [];
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "YU8eRyjM",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select__items-container').hasClass('upf-infinite-select__items-container--empty');
          assert.dom('.upf-infinite-select__items-container [data-control-name="infinite-select-empty-state-illustration"]');
        });
      });
      (0, _qunit.module)('with inline', function () {
        (0, _qunit.test)('it should render with undefined arg', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "YU8eRyjM",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select.upf-infinite-select--absolute').exists({
            count: 1
          });
        });
        (0, _qunit.test)('it should render with falsy arg', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "pX8GiE7G",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select.upf-infinite-select--absolute').exists({
            count: 1
          });
        });
        (0, _qunit.test)('it should render with truthy arg', async function (assert) {
          this.items = FAKE_DATA;
          this.onSelect = () => {};
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
          */
          {
            "id": "PAyUYGP4",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],true,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.dom('.upf-infinite-select').exists({
            count: 1
          });
          assert.dom('.upf-infinite-select--absolute').doesNotExist();
        });
      });
    });
    (0, _qunit.module)('with onBottomReached', function () {
      (0, _qunit.test)('it should trigger onBottomReach function', async function (assert) {
        this.items = FAKE_DATA;
        this.onSelect = () => {};
        this.loadingMore = false;
        this.onBottomReached = _sinon.default.stub().callsFake(() => {
          this.set('loadingMore', true);
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                       @loadingMore={{this.loadingMore}} @onBottomReached={{this.onBottomReached}} />
                
        */
        {
          "id": "Rl7Cugrc",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\",\"@loadingMore\",\"@onBottomReached\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]],[30,0,[\"loadingMore\"]],[30,0,[\"onBottomReached\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/infinite-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
          "isStrictMode": false
        }));
        await (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);
        this.set('loadingMore', false);
        await (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);
        assert.ok(this.onBottomReached.calledTwice);
      });
    });
    (0, _qunit.module)('Keyboard control management', function (hooks) {
      hooks.beforeEach(function () {
        this.items = FAKE_DATA;
        this.onSelect = () => {};
        this.onSearch = () => {};
      });
      (0, _qunit.module)('If keyboard is disabled', function () {
        (0, _qunit.test)('The first element should not be focused on load', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}} />
          */
          {
            "id": "pX8GiE7G",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        });
        (0, _qunit.test)('The keyboard controls are disabled', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}} />
          */
          {
            "id": "pX8GiE7G",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
          await (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'ArrowDown');
          assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
          assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));
        });
      });
      (0, _qunit.module)('If keyboard is enabled', function (hooks) {
        hooks.beforeEach(function () {
          this.enableKeyboard = true;
        });
        (0, _qunit.module)('If Search is enabled', function () {
          (0, _qunit.test)('Search input should be focused', async function (assert) {
            await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
            /*
              <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                 @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>
            */
            {
              "id": "6CC6Hesg",
              "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
              "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
              "isStrictMode": false
            }));
            assert.ok(_isFocused(document.querySelector('.upf-input')));
            assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
          });
          (0, _qunit.test)('On keydown Enter it should focus the first element', async function (assert) {
            await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
            /*
              <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                 @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>
            */
            {
              "id": "6CC6Hesg",
              "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
              "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
              "isStrictMode": false
            }));
            assert.ok(_isFocused(document.querySelector('.upf-input')));
            await (0, _testHelpers.triggerKeyEvent)('.upf-input', 'keydown', 'Enter');
            assert.notOk(_isFocused(document.querySelector('.upf-input')));
            assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
          });
          (0, _qunit.test)('On keydown ArrowDown it should focus the first element', async function (assert) {
            await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
            /*
              <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                 @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>
            */
            {
              "id": "6CC6Hesg",
              "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
              "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
              "isStrictMode": false
            }));
            assert.ok(_isFocused(document.querySelector('.upf-input')));
            await (0, _testHelpers.triggerKeyEvent)('.upf-input', 'keydown', 'ArrowDown');
            assert.notOk(_isFocused(document.querySelector('.upf-input')));
            assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
          });
          (0, _qunit.test)('On keydown Enter it should call the onClose action', async function (assert) {
            this.onClose = _sinon.default.stub();
            await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
            /*
              <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                 @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}} @onClose={{this.onClose}}/>
            */
            {
              "id": "4pHpxGHY",
              "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\",\"@onClose\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]],[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
              "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
              "isStrictMode": false
            }));
            assert.ok(_isFocused(document.querySelector('.upf-input')));
            assert.ok(this.onClose.notCalled);
            await (0, _testHelpers.triggerKeyEvent)('.upf-input', 'keydown', 'Escape');
            assert.ok(this.onClose.calledOnce);
          });
        });
        (0, _qunit.test)('The first element should be focuses on load', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                             @enableKeyboard={{this.enableKeyboard}}/>
          */
          {
            "id": "dDi5PIb8",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        });
        (0, _qunit.test)('On keydown ArrowUp & ArrowDown it should control the focused element', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                             @enableKeyboard={{this.enableKeyboard}}/>
          */
          {
            "id": "dDi5PIb8",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
          await (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'ArrowDown');
          assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
          assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));
          await (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'ArrowUp');
          assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));
          assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
        });
        (0, _qunit.test)('On keydown Enter it should select the focused element', async function (assert) {
          this.onSelect = _sinon.default.stub();
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                             @enableKeyboard={{this.enableKeyboard}}/>
          */
          {
            "id": "dDi5PIb8",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          const el = document.querySelectorAll('.upf-infinite-select__item')[0];
          assert.ok(_isFocused(el));
          assert.ok(this.onSelect.notCalled);
          await (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'Enter');
          assert.ok(this.onSelect.calledOnceWith(FAKE_DATA[0]));
        });
        (0, _qunit.test)('On keydown Tab/Escape it should call the onClose action', async function (assert) {
          this.onClose = _sinon.default.stub();
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                             @enableKeyboard={{this.enableKeyboard}} @onClose={{this.onClose}}/>
          */
          {
            "id": "7mvfvN+3",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onClose\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
          assert.ok(this.onClose.notCalled);
          await (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'Tab');
          assert.ok(this.onClose.calledOnce);
          await (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'Escape');
          assert.ok(this.onClose.calledTwice);
        });
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.module)('On item selection, if onSelect is not passed', function () {
        (0, _qunit.test)('it should throw an error', async function (assert) {
          (0, _testHelpers.setupOnerror)(err => {
            assert.equal(err.message, 'Assertion Failed: [component][OSS::InfiniteSelect] `onSelect` action is mandatory');
          });
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} />
          */
          {
            "id": "MQHnGCey",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\"],[[30,0,[\"items\"]],false]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
        });
      });
      (0, _qunit.module)('When the search is enabled, if no onSearch hook has been passed', function () {
        (0, _qunit.test)('should throw an error', async function (assert) {
          (0, _testHelpers.setupOnerror)(err => {
            assert.equal(err.message, 'Assertion Failed: [component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed');
          });
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{true}} />
          */
          {
            "id": "RhR382Cb",
            "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\"],[[30,0,[\"items\"]],true]],null]],[],false,[\"o-s-s/infinite-select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/infinite-select-test.js",
            "isStrictMode": false
          }));
        });
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/information-section-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-intl/test-support", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _testSupport, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"ember-intl/test-support"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/information-section', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.title = 'Information Section Title';
      this.subtitle = 'Information Section subtitle';
      this.namedBlockContent = 'Information Section Custom Content';
      this.icon = 'fa-pen';
      this.imageUrl = '/assets/images/upfluence-white-logo.svg';
      this.actionButton = {
        label: 'Test Button',
        icon: 'fa-pen'
      };
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InformationSection @title={{this.title}}/>
      */
      {
        "id": "T/k3PMfP",
        "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],null]],[],false,[\"o-s-s/information-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom("[data-control-name='information-section']").exists();
    });
    (0, _qunit.test)('it renders the @title arg', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InformationSection @title={{this.title}}/>
      */
      {
        "id": "T/k3PMfP",
        "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],null]],[],false,[\"o-s-s/information-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.font-color-gray-900.font-size-md.font-weight-semibold').hasText(this.title);
    });
    (0, _qunit.test)('it renders the @subtitle arg', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InformationSection @title={{this.title}} @subtitle={{this.subtitle}}/>
      */
      {
        "id": "gm5TlNo7",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]]]],null]],[],false,[\"o-s-s/information-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.font-color-gray-500').hasText(this.subtitle);
    });
    (0, _qunit.module)('plain arg', function () {
      (0, _qunit.test)('it renders the header with a grey background when @plain is false', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @title={{this.title}} @plain={{false}}/>
        */
        {
          "id": "J5F/N78N",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@plain\"],[[30,0,[\"title\"]],false]],null]],[],false,[\"o-s-s/information-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom("[data-control-name='information-section-header']").hasClass('background-color-gray-50');
      });
      (0, _qunit.test)('it renders the header with a white background when @plain is true', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @title={{this.title}} @plain={{true}}/>
        */
        {
          "id": "LaQxwb/s",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@plain\"],[[30,0,[\"title\"]],true]],null]],[],false,[\"o-s-s/information-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom("[data-control-name='information-section-header']").hasClass('background-color-white');
      });
      (0, _qunit.test)('it renders the header with a white background when @plain is unspecified', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @title={{this.title}} />
        */
        {
          "id": "T/k3PMfP",
          "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],null]],[],false,[\"o-s-s/information-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom("[data-control-name='information-section-header']").hasClass('background-color-white');
      });
    });
    (0, _qunit.module)('badge icons', function () {
      (0, _qunit.test)('it renders the icon with @badgeIcon arg', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @badgeIcon={{this.icon}} @title={{this.title}}/>
        */
        {
          "id": "TKar9rkq",
          "block": "[[[8,[39,0],null,[[\"@badgeIcon\",\"@title\"],[[30,0,[\"icon\"]],[30,0,[\"title\"]]]],null]],[],false,[\"o-s-s/information-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge i').hasClass(this.icon);
      });
      (0, _qunit.test)('it renders the icon with an svg icon as @badgeIcon arg', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @imageUrl={{this.imageUrl}} @title={{this.title}}/>
        */
        {
          "id": "ItGKDY3d",
          "block": "[[[8,[39,0],null,[[\"@imageUrl\",\"@title\"],[[30,0,[\"imageUrl\"]],[30,0,[\"title\"]]]],null]],[],false,[\"o-s-s/information-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-badge img').hasAttribute('src', this.imageUrl);
      });
      (0, _qunit.test)('it renders the badge with badge named block', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @title={{this.title}}>
                                  <:badge>
                                    <OSS::Badge
                                      data-control-name="test-badge"
                                      @icon={{this.icon}}
                                    />
                                  </:badge>
                                </OSS::InformationSection>
        */
        {
          "id": "uWL32ex8",
          "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],[[\"badge\"],[[[[1,\"\\n                            \"],[8,[39,1],[[24,\"data-control-name\",\"test-badge\"]],[[\"@icon\"],[[30,0,[\"icon\"]]]],null],[1,\"\\n                          \"]],[]]]]]],[],false,[\"o-s-s/information-section\",\"o-s-s/badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom("[data-control-name='test-badge']").exists();
      });
    });
    (0, _qunit.module)('actions named block', function () {
      (0, _qunit.test)('it renders', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @title={{this.title}}>
                                  <:action>
                                    <div data-control-name="actions-named-block">
                                      <OSS::Button
                                        data-control-name="test-button"
                                        @label={{this.actionButton.label}}
                                        @icon={{this.actionButton.icon}}
                                      />
                                    </div>
                                  </:action>
                                </OSS::InformationSection>
        */
        {
          "id": "H+K6/RIK",
          "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],[[\"action\"],[[[[1,\"\\n                            \"],[10,0],[14,\"data-control-name\",\"actions-named-block\"],[12],[1,\"\\n                              \"],[8,[39,1],[[24,\"data-control-name\",\"test-button\"]],[[\"@label\",\"@icon\"],[[30,0,[\"actionButton\",\"label\"]],[30,0,[\"actionButton\",\"icon\"]]]],null],[1,\"\\n                            \"],[13],[1,\"\\n                          \"]],[]]]]]],[],false,[\"o-s-s/information-section\",\"o-s-s/button\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom("[data-control-name='actions-named-block']").exists();
      });
    });
    (0, _qunit.module)('content named block', function () {
      (0, _qunit.test)('it renders', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InformationSection @title={{this.title}}>
                                  <:content>
                                    <p data-control-name='content-named-block'>{{this.namedBlockContent}}</p>
                                  </:content>
                                </OSS::InformationSection>
        */
        {
          "id": "L5eGXb8j",
          "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],[[\"content\"],[[[[1,\"\\n                            \"],[10,2],[14,\"data-control-name\",\"content-named-block\"],[12],[1,[30,0,[\"namedBlockContent\"]]],[13],[1,\"\\n                          \"]],[]]]]]],[],false,[\"o-s-s/information-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/information-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom("[data-control-name='content-named-block']").hasText(this.namedBlockContent);
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/input-container-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/input-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputContainer />
      */
      {
        "id": "/S7gOB9A",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/input-container\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
        "isStrictMode": false
      }));
      assert.dom('.upf-input').exists();
    });
    (0, _qunit.module)('Input Blocks', () => {
      async function renderComponentWithPrefixSuffix() {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
              <OSS::InputContainer>
                <:prefix>
                  <OSS::Icon @style="solid" @icon="fa-user" />
                </:prefix>
                <:input>
                  <Input id="custom-input"/>
                </:input>
                <:suffix>
                  <OSS::Icon @style="solid" @icon="fa-times" />
                </:suffix>
              </OSS::InputContainer>
        */
        {
          "id": "g69wZ47T",
          "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"prefix\",\"input\",\"suffix\"],[[[[1,\"\\n          \"],[8,[39,1],null,[[\"@style\",\"@icon\"],[\"solid\",\"fa-user\"]],null],[1,\"\\n        \"]],[]],[[[1,\"\\n          \"],[8,[39,2],[[24,1,\"custom-input\"]],null,null],[1,\"\\n        \"]],[]],[[[1,\"\\n          \"],[8,[39,1],null,[[\"@style\",\"@icon\"],[\"solid\",\"fa-times\"]],null],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/input-container\",\"o-s-s/icon\",\"input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
      }
      (0, _qunit.test)('Passing a :prefix named-block renders the block properly', async function (assert) {
        await renderComponentWithPrefixSuffix();
        assert.dom('.fa-user').exists();
      });
      (0, _qunit.test)('Passing a :suffix named-block renders the block properly', async function (assert) {
        await renderComponentWithPrefixSuffix();
        assert.dom('.fa-times').exists();
      });
      (0, _qunit.test)('Passing an :input named-block overloads the default input', async function (assert) {
        await renderComponentWithPrefixSuffix();
        assert.dom('#custom-input').exists();
      });
    });
    (0, _qunit.module)('Component Parameters', hooks => {
      let onValueChange;
      hooks.beforeEach(function () {
        onValueChange = _sinon.default.fake.returns(true);
        this.set('value', 'testValue');
        this.set('placeholder', 'Type your text');
        this.set('onValueChange', onValueChange);
      });
      async function renderComponentWithParameters() {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::InputContainer @value={{this.value}}
                                     @onChange={{this.onValueChange}}
                                     @placeholder={{this.placeholder}} />
        */
        {
          "id": "As0hJu+6",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@value\",\"@onChange\",\"@placeholder\"],[[30,0,[\"value\"]],[30,0,[\"onValueChange\"]],[30,0,[\"placeholder\"]]]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
      }
      (0, _qunit.test)('Passing a @value parameter works', async function (assert) {
        await renderComponentWithParameters();
        assert.dom('.upf-input').hasValue('testValue');
      });
      (0, _qunit.test)('Passing a @placeholder parameter works', async function (assert) {
        await renderComponentWithParameters();
        let inputElement = (0, _testHelpers.find)('.upf-input');
        assert.equal(inputElement.getAttribute('placeholder'), 'Type your text');
      });
      (0, _qunit.test)('Passing an @onChange method works and is triggered on input changes', async function (assert) {
        await renderComponentWithParameters();
        let inputElement = (0, _testHelpers.find)('.upf-input');
        await (0, _testHelpers.typeIn)(inputElement, 'a');
        assert.ok(onValueChange.called);
      });
      (0, _qunit.test)('Passing an @onChange method works and is triggered on copy event', async function (assert) {
        this.onChange = _sinon.default.stub();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer data-control-name="firstname-input" @onChange={{this.onChange}} />
        */
        {
          "id": "T23nYTSA",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"firstname-input\"]],[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.ok(this.onChange.notCalled);
        await (0, _testHelpers.triggerEvent)('.oss-input-container input', 'paste', {
          clipboardData: {
            getData: format => `clipboardFormat/${format}`
          }
        });
        assert.ok(this.onChange.calledOnceWith('clipboardFormat/Text'));
      });
    });
    (0, _qunit.module)('feedback messages', () => {
      (0, _qunit.test)('Passing success as @feedbackMessage.type displays the success message and sets the border to green', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @feedbackMessage={{hash type="success" value="This is a success message"}} />
        */
        {
          "id": "uLNYThG4",
          "block": "[[[8,[39,0],null,[[\"@feedbackMessage\"],[[28,[37,1],null,[[\"type\",\"value\"],[\"success\",\"This is a success message\"]]]]],null]],[],false,[\"o-s-s/input-container\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').hasClass('oss-input-container--success');
        assert.dom('i.far').hasClass('fa-check-circle');
        assert.dom('.font-color-success-500').hasText('This is a success message');
      });
      (0, _qunit.test)('Passing warning as @feedbackMessage.type displays the warning message and sets the border to yellow', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @feedbackMessage={{hash type="warning" value="This is a warning message"}} />
        */
        {
          "id": "XZd22ntW",
          "block": "[[[8,[39,0],null,[[\"@feedbackMessage\"],[[28,[37,1],null,[[\"type\",\"value\"],[\"warning\",\"This is a warning message\"]]]]],null]],[],false,[\"o-s-s/input-container\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').hasClass('oss-input-container--warning');
        assert.dom('i.far').hasClass('fa-exclamation-circle');
        assert.dom('.font-color-warning-500').hasText('This is a warning message');
      });
      (0, _qunit.test)('Passing error as @feedbackMessage.type displays the error message and sets the border to red', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @feedbackMessage={{hash type="error" value="This is an error message"}} />
        */
        {
          "id": "SdspPatn",
          "block": "[[[8,[39,0],null,[[\"@feedbackMessage\"],[[28,[37,1],null,[[\"type\",\"value\"],[\"error\",\"This is an error message\"]]]]],null]],[],false,[\"o-s-s/input-container\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').hasClass('oss-input-container--error');
        assert.dom('.font-color-error-500').hasText('This is an error message');
      });
      (0, _qunit.test)("Passing an invalid feedbackMessage type doesn't display any message", async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @feedbackMessage={{hash type="invalid" value="This is an invalid message"}} />
        */
        {
          "id": "Iz4Fl5KU",
          "block": "[[[8,[39,0],null,[[\"@feedbackMessage\"],[[28,[37,1],null,[[\"type\",\"value\"],[\"invalid\",\"This is an invalid message\"]]]]],null]],[],false,[\"o-s-s/input-container\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.upf-input').exists();
        assert.dom('.font-color-success-500').doesNotExist();
        assert.dom('.font-color-warning-500').doesNotExist();
        assert.dom('.font-color-error-500').doesNotExist();
        assert.dom('.oss-input-container').doesNotHaveTextContaining('This is an invalid message');
      });
    });
    (0, _qunit.module)('Error States', () => {
      (0, _qunit.test)('Passing an @errorMessage parameter displays an error message and sets the input border to red', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @errorMessage="This is an error message" />
        */
        {
          "id": "rhUmu+UH",
          "block": "[[[8,[39,0],null,[[\"@errorMessage\"],[\"This is an error message\"]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
        assert.dom('.text-color-error').hasText('This is an error message');
      });
      (0, _qunit.test)('Setting @errorMessage parameter to an empty string does not display an error message', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @errorMessage="" />
        */
        {
          "id": "8B1zdt7L",
          "block": "[[[8,[39,0],null,[[\"@errorMessage\"],[\"\"]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').doesNotHaveClass('oss-input-container--errored');
        assert.dom('.text-color-error').doesNotExist();
      });
      (0, _qunit.test)('Passing a @hasError parameter displays a red border around the input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @hasError={{true}} />
        */
        {
          "id": "dyHL4R8o",
          "block": "[[[8,[39,0],null,[[\"@hasError\"],[true]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
      });
      (0, _qunit.test)('Setting @hasError parameter to false does not display a red border around the input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @hasError={{false}} />
        */
        {
          "id": "3T/0079a",
          "block": "[[[8,[39,0],null,[[\"@hasError\"],[false]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').doesNotHaveClass('oss-input-container--errored');
      });
      (0, _qunit.test)('Setting @hasError parameter to undefined does not display a red border around the input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @hasError={{undefined}} />
        */
        {
          "id": "OEJuKlrB",
          "block": "[[[8,[39,0],null,[[\"@hasError\"],[[27]]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').doesNotHaveClass('oss-input-container--errored');
      });
      (0, _qunit.test)('Having both @errorMessage and @hasError parameters set to true displays the error message', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer @errorMessage="This is an error message" @hasError={{true}} />
        */
        {
          "id": "fVwEVyNr",
          "block": "[[[8,[39,0],null,[[\"@errorMessage\",\"@hasError\"],[\"This is an error message\",true]],null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
        assert.dom('.text-color-error').hasText('This is an error message');
      });
    });
    (0, _qunit.module)('Extra attributes', () => {
      (0, _qunit.test)('passing an extra class is applied to the component', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer class="my-extra-class" />
        */
        {
          "id": "HMD2z53l",
          "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        assert.dom('.my-extra-class').exists();
      });
      (0, _qunit.test)('passing data-control-name works', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::InputContainer data-control-name="firstname-input" />
        */
        {
          "id": "0R+dVRfx",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"firstname-input\"]],null,null]],[],false,[\"o-s-s/input-container\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-container-test.js",
          "isStrictMode": false
        }));
        let inputWrapper = (0, _testHelpers.find)('.oss-input-container');
        assert.equal(inputWrapper.getAttribute('data-control-name'), 'firstname-input');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/input-group-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/input-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputGroup @prefix="username" />
      */
      {
        "id": "dRO52ngX",
        "block": "[[[8,[39,0],null,[[\"@prefix\"],[\"username\"]],null]],[],false,[\"o-s-s/input-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-group').exists();
    });
    (0, _qunit.test)('Passing the @prefix parameter displays the input prefix', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputGroup @prefix="username" />
      */
      {
        "id": "dRO52ngX",
        "block": "[[[8,[39,0],null,[[\"@prefix\"],[\"username\"]],null]],[],false,[\"o-s-s/input-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-group-row-prefix').hasText('username');
    });
    (0, _qunit.test)('Passing the @suffix parameter displays the input suffix', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputGroup @suffix="@domain.com" />
      */
      {
        "id": "m+9zhpeW",
        "block": "[[[8,[39,0],null,[[\"@suffix\"],[\"@domain.com\"]],null]],[],false,[\"o-s-s/input-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-group-row-suffix').hasText('@domain.com');
    });
    (0, _qunit.test)('Passing the @suffix parameter displays the input suffix', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputGroup @prefix="email" @suffix="@domain.com" />
      */
      {
        "id": "Kyro+fY3",
        "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\"],[\"email\",\"@domain.com\"]],null]],[],false,[\"o-s-s/input-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-group-row-prefix').hasText('email');
      assert.dom('.oss-input-group-row-suffix').hasText('@domain.com');
    });
    (0, _qunit.test)('Passing the @errorMessage parameter displays the error message', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputGroup @suffix="@domain.com" @errorMessage="This is an error." />
      */
      {
        "id": "vAmzUX8C",
        "block": "[[[8,[39,0],null,[[\"@suffix\",\"@errorMessage\"],[\"@domain.com\",\"This is an error.\"]],null]],[],false,[\"o-s-s/input-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-group-row--error').exists();
      assert.dom('.oss-input-group span').hasText('This is an error.');
    });
    (0, _qunit.test)('Passing the @errorMessage sets an error border on the whole compoenent', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputGroup @prefix="random" @suffix="@domain.com" @errorMessage="This is an error." />
      */
      {
        "id": "3HHUug6Z",
        "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@errorMessage\"],[\"random\",\"@domain.com\",\"This is an error.\"]],null]],[],false,[\"o-s-s/input-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-group-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-group-row--error').exists();
      assert.dom('.oss-input-group-row--error').hasStyle({
        borderColor: 'rgb(239, 68, 68)'
      });
    });
    (0, _qunit.test)('it fails if no prefix or suffix parameters are passed', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::InputGroup] No @prefix or @suffix parameter were passed. If you are not going to use any, you should use an OSS::InputContainer.');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::InputGroup />
      */
      {
        "id": "lHvxrJhV",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/input-group\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/input-group-test.ts",
        "isStrictMode": false
      }));
    });
  });
});
define("dummy/tests/integration/components/o-s-s/layout/navbar/nav-item-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/layout/navbar/navitem', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Layout::Navbar::NavItem
              @icon="fa-users"
              @label="Label"
            />
          
      */
      {
        "id": "P9NcPyr3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-users\",\"Label\"]],null],[1,\"\\n    \"]],[],false,[\"o-s-s/layout/navbar/nav-item\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/navbar/nav-item-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-navbar-item').exists();
    });
    (0, _qunit.test)('it renders the icon', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Layout::Navbar::NavItem
              @icon="fa-users"
              @label="Label"
            />
          
      */
      {
        "id": "P9NcPyr3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-users\",\"Label\"]],null],[1,\"\\n    \"]],[],false,[\"o-s-s/layout/navbar/nav-item\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/navbar/nav-item-test.ts",
        "isStrictMode": false
      }));
      assert.dom('i').exists().hasClass('fa-users');
    });
    (0, _qunit.test)('it renders the label', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Layout::Navbar::NavItem
              @icon="fa-users"
              @label="Label"
            />
          
      */
      {
        "id": "P9NcPyr3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-users\",\"Label\"]],null],[1,\"\\n    \"]],[],false,[\"o-s-s/layout/navbar/nav-item\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/navbar/nav-item-test.ts",
        "isStrictMode": false
      }));
      assert.dom('span').exists().hasText('Label');
    });
    (0, _qunit.test)('it renders the extra content block content', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Layout::Navbar::NavItem
              @icon="fa-users"
              @label="Label"
            >
              <:extra>
                <div id="extra-content">
                  Extra content
                </div>
              </:extra>
            </OSS::Layout::Navbar::NavItem>
          
      */
      {
        "id": "3sjXDOO0",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-users\",\"Label\"]],[[\"extra\"],[[[[1,\"\\n          \"],[10,0],[14,1,\"extra-content\"],[12],[1,\"\\n            Extra content\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/layout/navbar/nav-item\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/navbar/nav-item-test.ts",
        "isStrictMode": false
      }));
      assert.dom('#extra-content').exists().hasText('Extra content');
    });
    (0, _qunit.test)('it has the extra right classes when @active is provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Layout::Navbar::NavItem
              @icon="fa-users"
              @label="Label"
              @active={{true}}
            />
          
      */
      {
        "id": "6TAkIxyr",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@label\",\"@active\"],[\"fa-users\",\"Label\",true]],null],[1,\"\\n    \"]],[],false,[\"o-s-s/layout/navbar/nav-item\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/navbar/nav-item-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-navbar-item--active').exists();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/layout/sidebar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/layout/sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Layout::Sidebar />
      */
      {
        "id": "MWVxgMJN",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/layout/sidebar\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-sidebar--containers').exists();
    });
    (0, _qunit.test)('it renders the logo when present', async function (assert) {
      this.logo = '/toto.png';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Layout::Sidebar @logo={{this.logo}}/>
      */
      {
        "id": "Kw1Gwufu",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@logo\"],[[30,0,[\"logo\"]]]],null]],[],false,[\"o-s-s/layout/sidebar\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar-test.ts",
        "isStrictMode": false
      }));
      assert.equal(document.querySelector('.oss-sidebar--containers .logo-container img')?.getAttribute('src'), '/toto.png');
    });
    (0, _qunit.module)('Named block', () => {
      (0, _qunit.test)('The content named-block is properly displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::Layout::Sidebar>
                  <:content>
                    <p>This is the content</p>
                  </:content>
                </OSS::Layout::Sidebar>
        */
        {
          "id": "/6HnVkNv",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,null,[[\"content\"],[[[[1,\"\\n            \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n          \"]],[]]]]]],[],false,[\"o-s-s/layout/sidebar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-sidebar--content').hasText('This is the content');
      });
      (0, _qunit.test)('The footer named-block is properly displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::Layout::Sidebar>
                  <:footer>
                    footer content
                  </:footer>
                </OSS::Layout::Sidebar>
        */
        {
          "id": "GbMJ54vD",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,null,[[\"footer\"],[[[[1,\"\\n            footer content\\n          \"]],[]]]]]],[],false,[\"o-s-s/layout/sidebar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-sidebar--footer').hasText('footer content');
      });
    });
    (0, _qunit.module)('Extra attributes', () => {
      (0, _qunit.test)('passing an extra class is applied to the component', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar class="my-extra-class" />
        */
        {
          "id": "51hfcHPM",
          "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/layout/sidebar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.my-extra-class').exists();
      });
      (0, _qunit.test)('passing data-control-name works', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar data-control-name="layout-sidebar" />
        */
        {
          "id": "rcSpR1SB",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"layout-sidebar\"]],null,null]],[],false,[\"o-s-s/layout/sidebar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar-test.ts",
          "isStrictMode": false
        }));
        let inputWrapper = (0, _testHelpers.find)('.oss-sidebar--containers');
        assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/layout/sidebar/item-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | oss/layout/sidebar/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Layout::Sidebar::Item @icon="far fa-search" />
      */
      {
        "id": "zRXo9p88",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-sidebar-item').exists();
    });
    (0, _qunit.test)('it renders the icon when present', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Layout::Sidebar::Item @icon="fal fa-search" />
      */
      {
        "id": "olgroMY7",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fal fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-sidebar-item .oss-sidebar-item--icon i').hasClass('fa-search');
    });
    (0, _qunit.module)('Arguments', () => {
      (0, _qunit.test)('Default value for locked is false', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search"/>
        */
        {
          "id": "zRXo9p88",
          "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-sidebar-item--locked').doesNotExist();
      });
      (0, _qunit.test)('When locked is true', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}}/>
        */
        {
          "id": "56tac0XL",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@locked\"],[\"far fa-search\",true]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-sidebar-item--locked').exists();
      });
      (0, _qunit.test)('Default value for hasNotification is false', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search"/>
        */
        {
          "id": "zRXo9p88",
          "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-sidebar-item--notification').doesNotExist();
      });
      (0, _qunit.test)('When hasNotification is true', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search" @hasNotifications={{true}}/>
        */
        {
          "id": "/V43CXzT",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@hasNotifications\"],[\"far fa-search\",true]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-sidebar-item--notification').exists();
      });
    });
    (0, _qunit.module)('Actions', function (hooks) {
      hooks.beforeEach(function () {
        this.defaultAction = _sinon.default.spy();
        this.lockedAction = _sinon.default.spy();
      });
      (0, _qunit.test)('OnClick it redirect to the @link attribute', async function (assert) {
        const router = this.owner.lookup('service:router');
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search" @link="index" @lockedAction={{this.lockedAction}}/>
        */
        {
          "id": "IUtR/p3O",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@link\",\"@lockedAction\"],[\"far fa-search\",\"index\",[30,0,[\"lockedAction\"]]]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        assert.equal(router.currentRouteName, null);
        await (0, _testHelpers.click)('.oss-sidebar-item');
        assert.equal(router.currentRouteName, 'index');
      });
      (0, _qunit.test)('When locked is true lockedAction is triggered', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}} @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}}/>
        */
        {
          "id": "hO9alJPM",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@locked\",\"@defaultAction\",\"@lockedAction\"],[\"far fa-search\",true,[30,0,[\"defaultAction\"]],[30,0,[\"lockedAction\"]]]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-sidebar-item');
        assert.ok(this.defaultAction.notCalled);
        assert.ok(this.lockedAction.calledOnce);
      });
    });
    (0, _qunit.module)('Extra attributes', () => {
      (0, _qunit.test)('passing an extra class is applied to the component', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search" class="my-extra-class" />
        */
        {
          "id": "rLwL9Iqk",
          "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.my-extra-class').exists();
      });
      (0, _qunit.test)('passing data-control-name works', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Layout::Sidebar::Item @icon="far fa-search" data-control-name="layout-sidebar" />
        */
        {
          "id": "MwyCNW+P",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"layout-sidebar\"]],[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/layout/sidebar/item-test.ts",
          "isStrictMode": false
        }));
        let inputWrapper = (0, _testHelpers.find)('.oss-sidebar-item');
        assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/link-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders with icon only', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Link @icon="fab fa-facebook" />
      */
      {
        "id": "ClGlh4mg",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fab fa-facebook\"]],null]],[],false,[\"o-s-s/link\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/link-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-link i').hasClass('fa-facebook');
    });
    (0, _qunit.test)('it renders with label only', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Link @label="Super Label" />
      */
      {
        "id": "q5Y2BgZ+",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"Super Label\"]],null]],[],false,[\"o-s-s/link\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/link-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-link span').hasText('Super Label');
    });
    (0, _qunit.test)('it renders with both label and icon', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Link @icon="fab fa-facebook" @label="Facebook" />
      */
      {
        "id": "nkeYQk9b",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fab fa-facebook\",\"Facebook\"]],null]],[],false,[\"o-s-s/link\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/link-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-link i').hasClass('fa-facebook');
      assert.dom('.upf-link span').hasClass('margin-left-xxx-sm');
      assert.dom('.upf-link span').hasText('Facebook');
    });
    (0, _qunit.test)('it opens link with href and target', async function (assert) {
      let windowOpenStub = _sinon.default.stub(window, 'open');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Link @icon="fab fa-facebook" @label="Facebook"
                       @link={{hash href="https://www.google.fr" target="_blank"}} />
          
      */
      {
        "id": "HzJM2WT9",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@label\",\"@link\"],[\"fab fa-facebook\",\"Facebook\",[28,[37,1],null,[[\"href\",\"target\"],[\"https://www.google.fr\",\"_blank\"]]]]],null],[1,\"\\n    \"]],[],false,[\"o-s-s/link\",\"hash\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/link-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.upf-link');
      assert.true(windowOpenStub.calledOnceWithExactly('https://www.google.fr', '_blank'));
      _sinon.default.restore();
    });
    (0, _qunit.test)('it transits to the route', async function (assert) {
      const router = this.owner.lookup('service:router');
      let transitionToStub = _sinon.default.stub(router, 'transitionTo');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Link @icon="fab fa-facebook" @label="Facebook" @transitionTo="workflow.create" />
      */
      {
        "id": "1EZf0NcA",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@transitionTo\"],[\"fab fa-facebook\",\"Facebook\",\"workflow.create\"]],null]],[],false,[\"o-s-s/link\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/link-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.upf-link');
      assert.true(transitionToStub.calledOnceWithExactly('workflow.create'));
    });
    (0, _qunit.test)('it fails if no label nor icon argument are present', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::Link] You must pass either a @label or an @icon argument.');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Link />
      */
      {
        "id": "TANcyMu3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/link\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/link-test.ts",
        "isStrictMode": false
      }));
    });
  });
});
define("dummy/tests/integration/components/o-s-s/modal-dialog-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/test-helpers/dom/click", "@ember/object", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _click, _object, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon",0,"@ember/test-helpers/dom/click",0,"@ember/object"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/modal-dialog', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.closeModal = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
      */
      {
        "id": "yWeYC1Ar",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog').exists();
    });
    (0, _qunit.test)('On escape button the modal is closed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
      */
      {
        "id": "yWeYC1Ar",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerKeyEvent)('.oss-modal-dialog', 'keyup', 27);
      assert.ok(this.closeModal.calledOnce);
    });
    (0, _qunit.test)('The cross button at the top right of the modal closes the modal', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
      */
      {
        "id": "yWeYC1Ar",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      await (0, _click.default)('.fa-times');
      assert.ok(this.closeModal.calledOnce);
    });
    (0, _qunit.test)('The title parameter is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
      */
      {
        "id": "yWeYC1Ar",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog .title').hasText('Example modal');
    });
    (0, _qunit.test)('The subtitle parameter is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModalDialog @title="Example modal" @subtitle="Subtitle" @close={{this.closeModal}} @size="md" />
      */
      {
        "id": "Endn/uRu",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"Subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog .subtitle').hasText('Subtitle');
    });
    (0, _qunit.test)('The icon parameter is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModalDialog @title="Example modal" @icon="fab fa-instagram" @close={{this.closeModal}} @size="md" />
      */
      {
        "id": "28wqeaKi",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@icon\",\"@close\",\"@size\"],[\"Example modal\",\"fab fa-instagram\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog header i.fab').hasClass('fa-instagram');
    });
    (0, _qunit.test)('The illustration named-block is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
              <:illustration>
                <p class="illustration-container">Illustration</p>
              </:illustration>
            </OSS::ModalDialog>
      */
      {
        "id": "FQjl8+SN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],[[\"illustration\"],[[[[1,\"\\n          \"],[10,2],[14,0,\"illustration-container\"],[12],[1,\"Illustration\"],[13],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.illustration-container').exists();
    });
    (0, _qunit.test)('The content named-block is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
              <:content>
                <p>This is the content</p>
              </:content>
            </OSS::ModalDialog>
      */
      {
        "id": "4+9s74CT",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],[[\"content\"],[[[[1,\"\\n          \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog--content').hasText('This is the content');
    });
    (0, _qunit.test)('The footer named-block is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
              <:footer>
                footer content
              </:footer>
            </OSS::ModalDialog>
      */
      {
        "id": "BwXPuI1J",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],[[\"footer\"],[[[[1,\"\\n          footer content\\n        \"]],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog footer').hasText('footer content');
    });
    (0, _qunit.module)('Queue management - if the @enqueue param is truthy', () => {
      (0, _qunit.module)('When rendering two modals', () => {
        (0, _qunit.test)('The second modal is not displayed', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                        data-control-name="modal-a" />
                        <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                        data-control-name="modal-b" />
          */
          {
            "id": "S67JVV37",
            "block": "[[[8,[39,0],[[24,\"data-control-name\",\"modal-a\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL A\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null],[1,\"\\n              \"],[8,[39,0],[[24,\"data-control-name\",\"modal-b\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL B\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
            "isStrictMode": false
          }));
          assert.dom('[data-control-name="modal-a"]').exists();
          assert.dom('[data-control-name="modal-b"]').doesNotExist();
        });
        (0, _qunit.test)('When Modal A is closed, Modal B is displayed', async function (assert) {
          this.helper = _object.default.create({
            displayModalA: true
          });
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    {{#if this.helper.displayModalA}}
                      <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                        data-control-name="modal-a" />
                    {{/if}}
                    <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                      data-control-name="modal-b" />
          */
          {
            "id": "HQRNnknE",
            "block": "[[[1,\"\\n\"],[41,[30,0,[\"helper\",\"displayModalA\"]],[[[1,\"            \"],[8,[39,1],[[24,\"data-control-name\",\"modal-a\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL A\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null],[1,\"\\n\"]],[]],null],[1,\"          \"],[8,[39,1],[[24,\"data-control-name\",\"modal-b\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL B\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null]],[],false,[\"if\",\"o-s-s/modal-dialog\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
            "isStrictMode": false
          }));
          assert.dom('[data-control-name="modal-a"]').exists();
          assert.dom('[data-control-name="modal-b"]').doesNotExist();
          await (0, _click.default)('.fa-times');
          assert.ok(this.closeModal.calledOnce);
          this.helper.set('displayModalA', false);
          await (0, _testHelpers.waitFor)('[data-control-name="modal-b"]', {
            timeout: 1000
          });
          assert.dom('[data-control-name="modal-a"]').doesNotExist();
          assert.dom('[data-control-name="modal-b"]').exists();
        });
      });
      (0, _qunit.module)('When rendering multiple modals', () => {
        (0, _qunit.test)('Only the first modal is displayed', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::ModalDialog @title="MODAL C" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                        data-control-name="modal-c" />
                        <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                          data-control-name="modal-b" />
                        <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                          data-control-name="modal-a" />
          */
          {
            "id": "2f5J6a7m",
            "block": "[[[8,[39,0],[[24,\"data-control-name\",\"modal-c\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL C\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null],[1,\"\\n              \"],[8,[39,0],[[24,\"data-control-name\",\"modal-b\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL B\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null],[1,\"\\n              \"],[8,[39,0],[[24,\"data-control-name\",\"modal-a\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL A\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
            "isStrictMode": false
          }));
          assert.dom('[data-control-name="modal-c"]').exists();
          assert.dom('[data-control-name="modal-a"]').doesNotExist();
          assert.dom('[data-control-name="modal-b"]').doesNotExist();
        });
        (0, _qunit.test)('Open & close modal flow check', async function (assert) {
          this.helper = _object.default.create({
            displayModalA: true,
            displayModalB: true,
            displayModalC: true
          });
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                      {{#if this.helper.displayModalA}}
                        <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                          data-control-name="modal-a" />
                      {{/if}}
                      {{#if this.helper.displayModalB}}
                        <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                          data-control-name="modal-b" />
                      {{/if}}
                      {{#if this.helper.displayModalC}}
                        <OSS::ModalDialog @title="MODAL C" @subtitle="subtitle" @close={{this.closeModal}} @enqueue={{true}}
                                          data-control-name="modal-c" />
                      {{/if}}
                    
          */
          {
            "id": "ii96NSvM",
            "block": "[[[1,\"\\n\"],[41,[30,0,[\"helper\",\"displayModalA\"]],[[[1,\"              \"],[8,[39,1],[[24,\"data-control-name\",\"modal-a\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL A\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null],[1,\"\\n\"]],[]],null],[41,[30,0,[\"helper\",\"displayModalB\"]],[[[1,\"              \"],[8,[39,1],[[24,\"data-control-name\",\"modal-b\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL B\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null],[1,\"\\n\"]],[]],null],[41,[30,0,[\"helper\",\"displayModalC\"]],[[[1,\"              \"],[8,[39,1],[[24,\"data-control-name\",\"modal-c\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@enqueue\"],[\"MODAL C\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null],[1,\"\\n\"]],[]],null],[1,\"          \"]],[],false,[\"if\",\"o-s-s/modal-dialog\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
            "isStrictMode": false
          }));
          assert.dom('[data-control-name="modal-a"]').exists();
          assert.dom('[data-control-name="modal-b"]').doesNotExist();
          assert.dom('[data-control-name="modal-c"]').doesNotExist();
          await (0, _click.default)('.fa-times');
          assert.ok(this.closeModal.calledOnce);
          this.helper.set('displayModalA', false);
          assert.false(this.helper.displayModalA);
          await (0, _testHelpers.waitFor)('[data-control-name="modal-b"]', {
            timeout: 1000
          });
          assert.dom('[data-control-name="modal-a"]').doesNotExist();
          assert.dom('[data-control-name="modal-b"]').exists();
          assert.dom('[data-control-name="modal-c"]').doesNotExist();
          await (0, _click.default)('.fa-times');
          assert.ok(this.closeModal.calledTwice);
          this.helper.set('displayModalB', false);
          assert.false(this.helper.displayModalB);
          await (0, _testHelpers.waitFor)('[data-control-name="modal-c"]', {
            timeout: 1000
          });
          assert.dom('[data-control-name="modal-a"]').doesNotExist();
          assert.dom('[data-control-name="modal-b"]').doesNotExist();
          assert.dom('[data-control-name="modal-c"]').exists();
        });
      });
    });
    (0, _qunit.test)('If the enqueue parameter is falsy, rendering multiple modals opens all of them', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}}
                                  data-control-name="modal-a" />
                <OSS::ModalDialog @title="MODAL B" @subtitle="subtitle" @close={{this.closeModal}}
                                  data-control-name="modal-b" />
      */
      {
        "id": "+XYw15WR",
        "block": "[[[8,[39,0],[[24,\"data-control-name\",\"modal-a\"]],[[\"@title\",\"@subtitle\",\"@close\"],[\"MODAL A\",\"subtitle\",[30,0,[\"closeModal\"]]]],null],[1,\"\\n          \"],[8,[39,0],[[24,\"data-control-name\",\"modal-b\"]],[[\"@title\",\"@subtitle\",\"@close\"],[\"MODAL B\",\"subtitle\",[30,0,[\"closeModal\"]]]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="modal-a"]').exists();
      assert.dom('[data-control-name="modal-b"]').exists();
    });
    (0, _qunit.module)('Clicking outside', function () {
      (0, _qunit.test)('It triggers the close action', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}}
                                      data-control-name="modal-a" />
        */
        {
          "id": "h+YrkwMS",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"modal-a\"]],[[\"@title\",\"@subtitle\",\"@close\"],[\"MODAL A\",\"subtitle\",[30,0,[\"closeModal\"]]]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.closeModal.notCalled);
        await (0, _click.default)('.oss-modal-dialog-backdrop');
        assert.ok(this.closeModal.calledOnce);
      });
      (0, _qunit.test)('If the disableClickOutside parameter is truthy, it does not trigger the close action', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ModalDialog @title="MODAL A" @subtitle="subtitle" @close={{this.closeModal}}
                                      data-control-name="modal-a" @disableClickOutside={{true}}/>
        */
        {
          "id": "hWzwkqmN",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"modal-a\"]],[[\"@title\",\"@subtitle\",\"@close\",\"@disableClickOutside\"],[\"MODAL A\",\"subtitle\",[30,0,[\"closeModal\"]],true]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.closeModal.notCalled);
        await (0, _click.default)('.oss-modal-dialog-backdrop');
        assert.ok(this.closeModal.notCalled);
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('The component throws an error if the title parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ModalDialog] The title parameter is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ModalDialog @close={{this.closeModal}}></OSS::ModalDialog>
        */
        {
          "id": "+kHGYvpC",
          "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('The component throws an error if the close parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ModalDialog] The close function is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ModalDialog @title="Test"></OSS::ModalDialog>
        */
        {
          "id": "x+17RDCd",
          "block": "[[[8,[39,0],null,[[\"@title\"],[\"Test\"]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-dialog-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/modal-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Modal @title="Test Modal">
              <div class="modal-body">
                Foo
              </div>
      
              <div class="modal-footer">
                Bar
              </div>
            </OSS::Modal>
          
      */
      {
        "id": "8f2bU0RA",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\"],[\"Test Modal\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n          Foo\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n          Bar\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/modal\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-test.js",
        "isStrictMode": false
      }));
      assert.equal(this.element.querySelector('.modal-title').textContent.trim(), 'Test Modal');
    });
    (0, _qunit.module)('available options', function () {
      (0, _qunit.module)('centered', function () {
        (0, _qunit.test)('it should set the centered class on the modal dialog', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Modal @title="Test Modal" @options={{hash centered=true}}>
                      <div class="modal-body">
                        Foo
                      </div>
          
                      <div class="modal-footer">
                        Bar
                      </div>
                    </OSS::Modal>
                  
          */
          {
            "id": "e3wKRg/G",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@options\"],[\"Test Modal\",[28,[37,1],null,[[\"centered\"],[true]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-test.js",
            "isStrictMode": false
          }));
          assert.dom('.modal-dialog').hasClass('modal-dialog--centered');
        });
      });
      (0, _qunit.module)('additional classes on the modal-dialog', function () {
        (0, _qunit.test)('it should add the passed class on the modal dialog', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Modal @title="Test Modal" @options={{hash modalClass="foobar"}}>
                      <div class="modal-body">
                        Foo
                      </div>
          
                      <div class="modal-footer">
                        Bar
                      </div>
                    </OSS::Modal>
                  
          */
          {
            "id": "sqayhZfm",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@options\"],[\"Test Modal\",[28,[37,1],null,[[\"modalClass\"],[\"foobar\"]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-test.js",
            "isStrictMode": false
          }));
          assert.dom('.modal-dialog').hasClass('foobar');
        });
      });
      (0, _qunit.module)('borderless header', function () {
        (0, _qunit.test)('it should add the good class on the modal dialog', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Modal @title="Test Modal" @options={{hash borderlessHeader=true}}>
                      <div class="modal-body">
                        Foo
                      </div>
          
                      <div class="modal-footer">
                        Bar
                      </div>
                    </OSS::Modal>
                  
          */
          {
            "id": "rZjtqtCd",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@options\"],[\"Test Modal\",[28,[37,1],null,[[\"borderlessHeader\"],[true]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-test.js",
            "isStrictMode": false
          }));
          assert.dom('.modal-dialog .modal-header').hasClass('modal-header__borderless');
        });
      });
      (0, _qunit.module)('no header', function () {
        (0, _qunit.test)('no header container is present', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Modal @options={{hash header=false}}>
                      <div class="modal-body">
                        Foo
                      </div>
          
                      <div class="modal-footer">
                        Bar
                      </div>
                    </OSS::Modal>
                  
          */
          {
            "id": "IoyZxzJw",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],null,[[\"header\"],[false]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-test.js",
            "isStrictMode": false
          }));
          assert.dom('.modal-dialog .modal-header').doesNotExist();
        });
      });
    });
    (0, _qunit.module)('keyboard shortcut', function () {
      (0, _qunit.test)('it closes the modal on Escape key', async function (assert) {
        this.display = true;
        this.onClose = () => {
          this.set('display', false);
        };
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                {{#if this.display}}
                  <OSS::Modal @onClose={{this.onClose}}>
                    <div class="modal-body">
                      Foo
                    </div>
        
                    <div class="modal-footer">
                      Bar
                    </div>
                  </OSS::Modal>
                {{/if}}
              
        */
        {
          "id": "bxEOfxdY",
          "block": "[[[1,\"\\n\"],[41,[30,0,[\"display\"]],[[[1,\"          \"],[8,[39,1],null,[[\"@onClose\"],[[30,0,[\"onClose\"]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"      \"]],[],false,[\"if\",\"o-s-s/modal\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/modal-test.js",
          "isStrictMode": false
        }));
        assert.dom('.modal-dialog').exists();
        await (0, _testHelpers.triggerKeyEvent)('.modal', 'keydown', 'Escape');
        assert.dom('.modal-dialog').doesNotExist();
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/mode-switch-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/mode-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onSelect = _sinon.default.stub();
      this.options = [{
        key: 'option1',
        label: 'Option one'
      }, {
        key: 'option2',
        label: 'Option two'
      }];
    });
    (0, _qunit.test)('it renders with the correct wording', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />
      */
      {
        "id": "cLuO5PwN",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@onSelect\"],[[30,0,[\"options\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="option1-input"]').exists();
      assert.dom('[data-control-name="option2-input"]').exists();
      assert.dom('[data-control-name="option1-label"]').hasText('Option one');
      assert.dom('[data-control-name="option2-label"]').hasText('Option two');
    });
    (0, _qunit.test)('it renders with the first option selected by default', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />
      */
      {
        "id": "cLuO5PwN",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@onSelect\"],[[30,0,[\"options\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="option1-input"]').isChecked();
      assert.dom('[data-control-name="option2-input"]').isNotChecked();
    });
    (0, _qunit.module)('selected option parameter', function (hooks) {
      (0, _qunit.test)('it renders with option 1 as selected parameter', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ModeSwitch @options={{this.options}} @selected='option1' @onSelect={{this.onSelect}} />
        */
        {
          "id": "56LN709K",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@selected\",\"@onSelect\"],[[30,0,[\"options\"]],\"option1\",[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="option1-input"]').isChecked();
        assert.dom('[data-control-name="option2-input"]').isNotChecked();
      });
      (0, _qunit.test)('it renders with option 2 as selected parameter', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ModeSwitch @options={{this.options}} @selected='option2' @onSelect={{this.onSelect}} />
        */
        {
          "id": "WkceTvOt",
          "block": "[[[8,[39,0],null,[[\"@options\",\"@selected\",\"@onSelect\"],[[30,0,[\"options\"]],\"option2\",[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="option1-input"]').isNotChecked();
        assert.dom('[data-control-name="option2-input"]').isChecked();
      });
    });
    (0, _qunit.test)('it renders with a tag', async function (assert) {
      this.options = [{
        key: 'option1',
        label: 'Option one'
      }, {
        key: 'option2',
        label: 'Option two',
        tag: {
          label: 'Tag'
        }
      }];
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />
      */
      {
        "id": "cLuO5PwN",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@onSelect\"],[[30,0,[\"options\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="option1-input"]').exists();
      assert.dom('[data-control-name="option2-input"]').exists();
      assert.dom('[data-control-name="option1-label"] .upf-tag').doesNotExist();
      assert.dom('[data-control-name="option2-label"] .upf-tag').exists();
      assert.dom('[data-control-name="option2-label"] .upf-tag').hasText('Tag');
    });
    (0, _qunit.test)('it renders with an icon', async function (assert) {
      this.options = [{
        key: 'option1',
        label: 'Option one'
      }, {
        key: 'option2',
        label: 'Option two',
        icon: 'fa-exclamation-circle'
      }];
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />
      */
      {
        "id": "cLuO5PwN",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@onSelect\"],[[30,0,[\"options\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="option1-input"]').exists();
      assert.dom('[data-control-name="option2-input"]').exists();
      assert.dom('[data-control-name="option1-label"] i').doesNotExist();
      assert.dom('[data-control-name="option2-label"] i').exists();
      assert.dom('[data-control-name="option2-label"] i').hasClass('fa-exclamation-circle');
    });
    (0, _qunit.test)('clicking a radio button changes the selection option and calls the onselect function', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />
      */
      {
        "id": "cLuO5PwN",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@onSelect\"],[[30,0,[\"options\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('[data-control-name="option2-label"]');
      assert.ok(this.onSelect.calledWith('option2'));
      assert.dom('[data-control-name="option1-input"]').isNotChecked();
      assert.dom('[data-control-name="option2-input"]').isChecked();
      await (0, _testHelpers.click)('[data-control-name="option1-label"]');
      assert.ok(this.onSelect.calledWith('option1'));
      assert.dom('[data-control-name="option1-input"]').isChecked();
      assert.dom('[data-control-name="option1-input"]').isChecked();
      assert.dom('[data-control-name="option2-input"]').isNotChecked();
    });
    (0, _qunit.test)('keyboard interaction on label triggers click on input', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ModeSwitch @options={{this.options}} @onSelect={{this.onSelect}} />
      */
      {
        "id": "cLuO5PwN",
        "block": "[[[8,[39,0],null,[[\"@options\",\"@onSelect\"],[[30,0,[\"options\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/mode-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/mode-switch-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerEvent)('[data-control-name="option2-label"]', 'keydown', {
        key: 'Enter'
      });
      assert.ok(this.onSelect.calledWith('option2'));
      assert.dom('[data-control-name="option1-input"]').isNotChecked();
      assert.dom('[data-control-name="option2-input"]').isChecked();
      await (0, _testHelpers.triggerEvent)('[data-control-name="option1-label"]', 'keydown', {
        key: ' '
      });
      assert.ok(this.onSelect.calledWith('option1'));
      assert.dom('[data-control-name="option1-input"]').isChecked();
      assert.dom('[data-control-name="option2-input"]').isNotChecked();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/nav-tab-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/nav-tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onSelection = () => {};
      this.tabArray = [];
    });
    (0, _qunit.module)('Default behavior', () => {
      (0, _qunit.test)('basic render', async function (assert) {
        this.tabArray.push({
          label: 'Tab'
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
        */
        {
          "id": "JcLT9YB4",
          "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.tab-container').exists();
        assert.dom('.tab-container .tab').exists();
        assert.dom('.tab-content span').exists();
        assert.dom('.tab-content span').hasText('Tab');
      });
      (0, _qunit.test)('Tab Icon displays properly', async function (assert) {
        this.tabArray.push({
          label: 'Tab',
          icon: 'far fa-thumbs-up'
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
        */
        {
          "id": "JcLT9YB4",
          "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.tab-container').exists();
        assert.dom('.tab-container .tab').exists();
        assert.dom('.tab-content span').exists();
        assert.dom('.tab-content i').exists();
        assert.dom('.tab-content i').hasClass('fa-thumbs-up');
        assert.dom('.tab-content span').hasText('Tab');
      });
      (0, _qunit.test)('Tab info-circle displays properly', async function (assert) {
        this.tabArray.push({
          label: 'Tab',
          infoCircle: true
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
        */
        {
          "id": "JcLT9YB4",
          "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.tab-container').exists();
        assert.dom('.tab-container .tab').exists();
        assert.dom('.tab-content span').exists();
        assert.dom('.tab-content i').exists();
        assert.dom('.tab-content i').hasClass('fa-info-circle');
        assert.dom('.tab-content span').hasText('Tab');
      });
      (0, _qunit.test)('Tab notification dot displays properly', async function (assert) {
        this.tabArray.push({
          label: 'Tab',
          notificationDot: true
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
        */
        {
          "id": "JcLT9YB4",
          "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.tab-container').exists();
        assert.dom('.tab-container .tab').exists();
        assert.dom('.tab-content .fas.fa-circle').exists();
      });
      (0, _qunit.test)('Tab displays selected state properly', async function (assert) {
        this.tabArray.push({
          label: 'Tab',
          selected: true
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
        */
        {
          "id": "JcLT9YB4",
          "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.tab-container').exists();
        assert.dom('.tab-container .tab').exists();
        assert.dom('.tab-content span').exists();
        assert.dom('.tab-container .tab').hasClass('tab--selected');
        assert.dom('.tab-content span').hasText('Tab');
      });
      (0, _qunit.test)('Tab displays disabled state properly', async function (assert) {
        this.tabArray.push({
          label: 'Tab',
          disabled: true
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
        */
        {
          "id": "JcLT9YB4",
          "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.tab-container').exists();
        assert.dom('.tab-container .tab').exists();
        assert.dom('.tab-content span').exists();
        assert.dom('.tab-container .tab').hasClass('tab--disabled');
        assert.dom('.tab-content span').hasText('Tab');
      });
    });
    (0, _qunit.test)('When clicking on Tab element, the component triggers the @onSelection method', async function (assert) {
      this.onSelection = _sinon.default.stub();
      this.tabArray.push({
        label: 'Tab'
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
      */
      {
        "id": "JcLT9YB4",
        "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.tab');
      assert.true(this.onSelection.calledOnce);
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('It throws an error if @onSelection is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The parameter @onSelection of type function is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @tabArray={{this.tabArray}} />
        */
        {
          "id": "u/S4m1CG",
          "block": "[[[8,[39,0],null,[[\"@tabArray\"],[[30,0,[\"tabArray\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('It throws an error if @tabArray is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The parameter @tabArray is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @onSelection={{this.onSelection}} />
        */
        {
          "id": "9It0XAgn",
          "block": "[[[8,[39,0],null,[[\"@onSelection\"],[[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The parameter @tabArray is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @onSelection={{this.onSelection}} @tabArray=[] />
        */
        {
          "id": "A3v6jiC6",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@tabArray\"],[[30,0,[\"onSelection\"]],\"[]\"]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('It throws an error if @label and @icon is missing for any element in @tabArray', async function (assert) {
        this.tabArray.push({
          label: '',
          icon: ''
        });
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The @label or @icon parameter is mandatory for each element in @tabArray');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NavTab @onSelection={{this.onSelection}} @tabArray={{this.tabArray}} />
        */
        {
          "id": "UNwFm2CU",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@tabArray\"],[[30,0,[\"onSelection\"]],[30,0,[\"tabArray\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/nav-tab-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/number-input-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/test-helpers/dom/click", "@ember/test-helpers/dom/trigger-key-event", "@ember/test-helpers/dom/type-in", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _click, _triggerKeyEvent, _typeIn, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/test-helpers/dom/click",0,"@ember/test-helpers/dom/trigger-key-event",0,"@ember/test-helpers/dom/type-in",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/number-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::NumberInput />
      */
      {
        "id": "LqMwfiIX",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.number-input').exists();
    });
    (0, _qunit.module)('@value parameter', () => {
      (0, _qunit.test)('If none present, the default value is 0', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
      });
      (0, _qunit.test)('If the value is passed, it is set in the input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @value={{42}} />
        */
        {
          "id": "lobXt6pJ",
          "block": "[[[8,[39,0],null,[[\"@value\"],[42]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('42');
      });
    });
    (0, _qunit.module)('@step parameter', () => {
      (0, _qunit.test)('If none present, the default step is 1', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        await (0, _click.default)('.upf-square-btn:nth-of-type(2)');
        assert.dom('.number-input input').hasValue('1');
      });
      (0, _qunit.test)('If the step is passed, it is used when increasing the value', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @step={{5}} />
        */
        {
          "id": "wiVZhxd0",
          "block": "[[[8,[39,0],null,[[\"@step\"],[5]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        await (0, _click.default)('.upf-square-btn:nth-of-type(2)');
        assert.dom('.number-input input').hasValue('5');
      });
      (0, _qunit.test)('If the step is passed, it is used when decreasing the value', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @step={{5}} />
        */
        {
          "id": "wiVZhxd0",
          "block": "[[[8,[39,0],null,[[\"@step\"],[5]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        await (0, _click.default)('.upf-square-btn:nth-of-type(1)');
        assert.dom('.number-input input').hasValue('-5');
      });
    });
    (0, _qunit.module)('Value increase', () => {
      (0, _qunit.test)('+ button increases the value by the step', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        await (0, _click.default)('.upf-square-btn:nth-of-type(2)');
        assert.dom('.number-input input').hasValue('1');
      });
      (0, _qunit.test)('Up arrow increases the value by the step', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        // @ts-ignore
        await (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowUp', {
          code: 'ArrowUp'
        });
        assert.dom('.number-input input').hasValue('1');
      });
      (0, _qunit.test)('Right arrow increases the value by the step', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        // @ts-ignore
        await (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowRight', {
          code: 'ArrowRight'
        });
        assert.dom('.number-input input').hasValue('1');
      });
      (0, _qunit.test)('If @max parameter is set, increasing the value sets the max value', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @value={{5}} @max={{5}} />
        */
        {
          "id": "pbkeJGHg",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@max\"],[5,5]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('5');
        assert.dom('.upf-square-btn:nth-of-type(2)').isDisabled();
      });
      (0, _qunit.test)('If @max & @maxReachedTooltip parameter are set, it renders the tooltip', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @value={{5}} @max={{5}} @maxReachedTooltip="max" />
        */
        {
          "id": "zhyJBPwX",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@max\",\"@maxReachedTooltip\"],[5,5,\"max\"]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        document.querySelector('.upf-square-btn:nth-of-type(2)')?.dispatchEvent(new Event('mouseover'));
        await (0, _testHelpers.waitFor)('.upf-tooltip');
        assert.dom('.upf-tooltip .title').hasText('max');
      });
    });
    (0, _qunit.module)('Value decrease', () => {
      (0, _qunit.test)('- button increases the value by the step', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        await (0, _click.default)('.upf-square-btn:nth-of-type(1)');
        assert.dom('.number-input input').hasValue('-1');
      });
      (0, _qunit.test)('Down arrow increases the value by the step', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        // @ts-ignore
        await (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowDown', {
          code: 'ArrowDown'
        });
        assert.dom('.number-input input').hasValue('-1');
      });
      (0, _qunit.test)('Left arrow increases the value by the step', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput />
        */
        {
          "id": "LqMwfiIX",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('0');
        // @ts-ignore
        await (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowLeft', {
          code: 'ArrowLeft'
        });
        assert.dom('.number-input input').hasValue('-1');
      });
      (0, _qunit.test)('If @min parameter is set, decreasing the value sets the min value', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @value={{5}} @min={{5}} />
        */
        {
          "id": "voRN8ePN",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@min\"],[5,5]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.number-input input').hasValue('5');
        assert.dom('.upf-square-btn:nth-of-type(1)').isDisabled();
      });
      (0, _qunit.test)('If @min & @minReachedTooltip parameter are set, it renders the tooltip', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @value={{5}} @min={{5}} @minReachedTooltip="min" />
        */
        {
          "id": "485uZpW2",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@min\",\"@minReachedTooltip\"],[5,5,\"min\"]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        document.querySelector('.upf-square-btn:nth-of-type(1)')?.dispatchEvent(new Event('mouseover'));
        await (0, _testHelpers.waitFor)('.upf-tooltip');
        assert.dom('.upf-tooltip .title').hasText('min');
      });
    });
    (0, _qunit.module)('On user input', () => {
      (0, _qunit.test)('if the inputed value is above the max value, the max value is set', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @max={{42}} />
        */
        {
          "id": "0WrHcEDy",
          "block": "[[[8,[39,0],null,[[\"@max\"],[42]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _typeIn.default)('.number-input input', '455');
        assert.dom('.number-input input').hasValue('42');
      });
      (0, _qunit.test)('if the inputed value is below the min value, the min value is set', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::NumberInput @value={{0}} @min={{42}} />
        */
        {
          "id": "d7pwWiHq",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@min\"],[0,42]],null]],[],false,[\"o-s-s/number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _typeIn.default)('.number-input input', '3');
        assert.dom('.number-input input').hasValue('42');
      });
    });
    (0, _qunit.test)('The @onChange method receives the updated value', async function (assert) {
      this.onChange = _sinon.default.stub();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::NumberInput @value={{0}} @onChange={{this.onChange}} />
      */
      {
        "id": "ks8zD9xl",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[0,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/number-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
        "isStrictMode": false
      }));
      await (0, _click.default)('.upf-square-btn:nth-of-type(2)');
      assert.true(this.onChange.calledOnceWithExactly(1));
    });
    (0, _qunit.test)('The buttons and the input are disabled when the @disabled parameter is truthy', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::NumberInput @disabled={{true}} />
      */
      {
        "id": "uT0hQEeF",
        "block": "[[[8,[39,0],null,[[\"@disabled\"],[true]],null]],[],false,[\"o-s-s/number-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/number-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.number-input input').isDisabled();
      assert.dom('.upf-square-btn:nth-of-type(1)').isDisabled();
      assert.dom('.upf-square-btn:nth-of-type(2)').isDisabled();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/panel-row-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/panel-row', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'l}} />
      */
      {
        "id": "N8hDBEkY",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-cog\",\"Your Label\"]],null]],[],false,[\"o-s-s/panel/row\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-row-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel-content--row').exists();
    });
    (0, _qunit.test)('It renders the @icon properly', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'l}} />
      */
      {
        "id": "N8hDBEkY",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-cog\",\"Your Label\"]],null]],[],false,[\"o-s-s/panel/row\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-row-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.far').exists();
    });
    (0, _qunit.test)('it renders the @label properly', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'l}} />
      */
      {
        "id": "N8hDBEkY",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-cog\",\"Your Label\"]],null]],[],false,[\"o-s-s/panel/row\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-row-test.ts",
        "isStrictMode": false
      }));
      assert.dom('span').hasText('Your Label');
    });
    (0, _qunit.test)('it renders as disabled when @disabled is provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'}} @disabled={{true}}/>
      */
      {
        "id": "A2L1Z3xo",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@disabled\"],[\"fa-cog\",\"Your Label\",true]],null]],[],false,[\"o-s-s/panel/row\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-row-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel-content--row-disabled').exists();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/panel-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:content>Content</:content>
            </OSS::Panel>
          
      */
      {
        "id": "/9E8NLw2",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"content\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel').exists();
      assert.dom('.oss-panel--content').hasText('Content', 'Content should be visible');
    });
    (0, _qunit.test)('it should render the content separator if the header exists', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:header>Header</:header>
              <:content>Content</:content>
            </OSS::Panel>
          
      */
      {
        "id": "6/wcJf0/",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"header\",\"content\"],[[[[1,\"Header\"]],[]],[[[1,\"Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel--content .oss-panel--separator').exists('Content separator should be visible when header is visible');
    });
    (0, _qunit.test)('it should render the footer separator if the content exists', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:header>Header</:header>
              <:content>Content</:content>
              <:footer>Footer</:footer>
            </OSS::Panel>
          
      */
      {
        "id": "c0Cii6CZ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"header\",\"content\",\"footer\"],[[[[1,\"Header\"]],[]],[[[1,\"Content\"]],[]],[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel--footer .oss-panel--separator').exists('Footer separator should be visible when the content is visible');
    });
    (0, _qunit.test)('it should not render the content separator if the header does not exist', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:content>Content</:content>
              <:footer>Footer</:footer>
            </OSS::Panel>
          
      */
      {
        "id": "+RxZwqvY",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"content\",\"footer\"],[[[[1,\"Content\"]],[]],[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel--content .oss-panel--separator').doesNotExist('Content separator should not be visible when header is not visible');
    });
    (0, _qunit.test)('it should not render the footer separator if the content does not exist', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:footer>Footer</:footer>
            </OSS::Panel>
          
      */
      {
        "id": "xS0ZwEro",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"footer\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel--footer .oss-panel--separator').doesNotExist('Footer separator should not be visible when the content is not visible');
    });
    (0, _qunit.test)('If the header named-block is defined, it is properly rendered', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:header>Header</:header>
            </OSS::Panel>
          
      */
      {
        "id": "8h6MGAq0",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"header\"],[[[[1,\"Header\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel--header').exists('The header named block should be visible');
    });
    (0, _qunit.test)('If the content named-block is defined, it is properly rendered', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:content>Content</:content>
            </OSS::Panel>
          
      */
      {
        "id": "/9E8NLw2",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"content\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel--content').exists('The content named block should be visible');
    });
    (0, _qunit.test)('If the footer named-block is defined, it is properly rendered', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::Panel>
              <:footer>Footer</:footer>
            </OSS::Panel>
          
      */
      {
        "id": "xS0ZwEro",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"footer\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-panel--footer').exists('The footer named block should be visible');
    });
  });
});
define("dummy/tests/integration/components/o-s-s/password-input-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "ember-intl/test-support", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _testSupport, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon",0,"ember-intl/test-support"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/password-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.validates = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value="" />
      */
      {
        "id": "QAN48+2e",
        "block": "[[[8,[39,0],null,[[\"@value\"],[\"\"]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-container').exists();
    });
    (0, _qunit.test)('it renders the @placeholder', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value="" @placeholder="test" />
      */
      {
        "id": "5VlhUZWj",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@placeholder\"],[\"\",\"test\"]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-container input').hasProperty('placeholder', 'test');
    });
    (0, _qunit.test)('it displays the error message when the @errorMessage is non-empty', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value="" @errorMessage="This is the error message" />
      */
      {
        "id": "MTPHuqZx",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@errorMessage\"],[\"\",\"This is the error message\"]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
      assert.dom('.text-color-error').hasText('This is the error message');
    });
    (0, _qunit.test)('The input is set to password, thus hiding characters, by default', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value="azeaze" />
      */
      {
        "id": "OZheD0Ue",
        "block": "[[[8,[39,0],null,[[\"@value\"],[\"azeaze\"]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('input').hasAttribute('type', 'password');
    });
    (0, _qunit.test)('Clicking on the eye icon sets the input type to text, thus making the text readable', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value="azeaze" />
      */
      {
        "id": "OZheD0Ue",
        "block": "[[[8,[39,0],null,[[\"@value\"],[\"azeaze\"]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('input').hasAttribute('type', 'password');
      await (0, _testHelpers.click)('.fa-eye');
      assert.dom('input').hasAttribute('type', 'text');
    });
    (0, _qunit.test)('Clicking on the eye-slash icon sets the input type to password, thus hiding the text', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value="azeaze" />
      */
      {
        "id": "OZheD0Ue",
        "block": "[[[8,[39,0],null,[[\"@value\"],[\"azeaze\"]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('input').hasAttribute('type', 'password');
      await (0, _testHelpers.click)('.fa-eye');
      assert.dom('input').hasAttribute('type', 'text');
      await (0, _testHelpers.click)('.fa-eye-slash');
      assert.dom('input').hasAttribute('type', 'password');
    });
    (0, _qunit.test)('If the password regex is matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
      this.value = '1Aaaaaa';
      this.validates = x => {
        assert.equal(x, true);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
      */
      {
        "id": "Xir3ppLh",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)('input', 'a');
    });
    (0, _qunit.test)('If the password regex isnt matched, and the @validates method is passed, then the status of the validation is returned', async function (assert) {
      this.value = '1A';
      this.validates = x => {
        assert.equal(x, false);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
      */
      {
        "id": "Xir3ppLh",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)('input', 'a');
    });
    (0, _qunit.test)('The password validation is not enabled if the @validates method is not passed', async function (assert) {
      this.value = '';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value={{this.value}} />
      */
      {
        "id": "02Ho804Q",
        "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)('input', 'az');
      assert.dom('.text-color-error').doesNotExist();
      assert.dom('[data-control-name="password-input-validators"]').doesNotExist();
    });
    (0, _qunit.test)('If the @validates method is passed, the validators states are visible', async function (assert) {
      this.value = '';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
      */
      {
        "id": "Xir3ppLh",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[data-control-name="password-input-validators"]').exists();
    });
    (0, _qunit.module)('Validators', () => {
      (0, _qunit.test)('Uppercase - if no uppercase character is inputed, a validator error is shown', async function (assert) {
        this.value = 'aze';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
        */
        {
          "id": "Xir3ppLh",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-uppercase"] i.visible').hasClass('font-color-error-500');
      });
      (0, _qunit.test)('Uppercase - if an uppercase character is inputed, a validator success is shown', async function (assert) {
        this.value = 'AZE';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
        */
        {
          "id": "Xir3ppLh",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-uppercase"] i.visible').hasClass('font-color-success-500');
      });
      (0, _qunit.test)('Number - if no number is inputed, a validator error is shown', async function (assert) {
        this.value = 'aze';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
        */
        {
          "id": "Xir3ppLh",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-number"] i.visible').hasClass('font-color-error-500');
      });
      (0, _qunit.test)('Uppercase - if a number is inputed, a validator success is shown', async function (assert) {
        this.value = '123';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
        */
        {
          "id": "Xir3ppLh",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-number"] i.visible').hasClass('font-color-success-500');
      });
      (0, _qunit.test)('Length - if the password is not at least 8 characters long, a validator error is shown', async function (assert) {
        this.value = '123';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
        */
        {
          "id": "Xir3ppLh",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-length"] i.visible').hasClass('font-color-error-500');
      });
      (0, _qunit.test)('Length - if the password has 8 characters, a validator success is shown', async function (assert) {
        this.value = '12345678';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
        */
        {
          "id": "Xir3ppLh",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-length"] i.visible').hasClass('font-color-success-500');
      });
      (0, _qunit.test)('When all validators are matched, the @validates method sends a truthy argument', async function (assert) {
        this.value = '123azeAZE';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
        */
        {
          "id": "Xir3ppLh",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.typeIn)('input', 'a');
        assert.true(this.validates.calledOnceWith(true));
      });
    });
    (0, _qunit.module)('Passing a @validorSet sets uses the custom validators', hooks => {
      hooks.beforeEach(function () {
        this.validatorSet = {
          lowercase: {
            labelKey: 'oss-components.password-input.validators.lowercase',
            regex: /(?=.*[a-z]).*/
          }
        };
      });
      (0, _qunit.test)('The custom validator is visible', async function (assert) {
        this.value = '';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                                   @validatorSet={{this.validatorSet}} />
        */
        {
          "id": "wk6Au2cq",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\",\"@validatorSet\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]],[30,0,[\"validatorSet\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-lowercase"]').exists();
      });
      (0, _qunit.test)('Lowercase - if no lowercase character is inputed, a validator error is shown', async function (assert) {
        this.value = 'AZE';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                                   @validatorSet={{this.validatorSet}} />
        */
        {
          "id": "wk6Au2cq",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\",\"@validatorSet\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]],[30,0,[\"validatorSet\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-lowercase"] i.visible').hasClass('font-color-error-500');
      });
      (0, _qunit.test)('Lowercase - if an lowercase character is inputed, a validator success is shown', async function (assert) {
        this.value = 'aze';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                                   @validatorSet={{this.validatorSet}} />
        */
        {
          "id": "wk6Au2cq",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\",\"@validatorSet\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]],[30,0,[\"validatorSet\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="password-input-validator-lowercase"] i.visible').hasClass('font-color-success-500');
      });
      (0, _qunit.test)('When all validators are matched, the @validates method sends a truthy argument', async function (assert) {
        this.value = '123azeAZE';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}}
                                                   @validatorSet={{this.validatorSet}} />
        */
        {
          "id": "wk6Au2cq",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\",\"@validatorSet\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]],[30,0,[\"validatorSet\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.typeIn)('input', 'a');
        assert.true(this.validates.calledOnceWith(true));
      });
    });
    (0, _qunit.test)('it throws an error when the @value parameter is missing', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::PasswordInput] The @value parameter is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PasswordInput />
      */
      {
        "id": "sca+bpCo",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/password-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/password-input-test.ts",
        "isStrictMode": false
      }));
    });
  });
});
define("dummy/tests/integration/components/o-s-s/phone-number-input-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/test-helpers/dom/click", "sinon", "@ember/test-helpers/dom/find-all", "@ember/test-helpers/dom/type-in", "@ember/test-helpers/settled", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _click, _sinon, _findAll, _typeIn, _settled, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/test-helpers/dom/click",0,"sinon",0,"@ember/test-helpers/dom/find-all",0,"@ember/test-helpers/dom/type-in",0,"@ember/test-helpers/settled"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/phone-number-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onChange = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
      */
      {
        "id": "v6OgIA+r",
        "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.phone-number-container').exists();
    });
    (0, _qunit.test)('The passed @number parameter is properly displayed in the input', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PhoneNumberInput @prefix="" @number="12341234" @onChange={{this.onChange}} />
      */
      {
        "id": "SThCQyvp",
        "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"12341234\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('input').hasValue('12341234');
    });
    (0, _qunit.test)('It properly loads the correct country when the @prefix parameter is defined', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PhoneNumberInput @prefix="+33" @number="" @onChange={{this.onChange}} />
      */
      {
        "id": "NbndV2yb",
        "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"+33\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.country-selector .fflag.fflag-FR').exists();
    });
    (0, _qunit.module)('Country selector', () => {
      (0, _qunit.test)('Clicking on the Flag button opens the country selector', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
        */
        {
          "id": "v6OgIA+r",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _click.default)('.country-selector');
        assert.dom('.upf-infinite-select').exists();
      });
      (0, _qunit.test)('Selecting a new country in the Country selector triggers the onChange method', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
        */
        {
          "id": "v6OgIA+r",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _click.default)('.country-selector');
        await (0, _click.default)('.upf-infinite-select__item:nth-child(5)');
        assert.ok(this.onChange.calledOnce);
        assert.dom('.country-selector .fflag.fflag-CH').exists();
      });
      (0, _qunit.test)('Typing in the search input filters the results', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
        */
        {
          "id": "v6OgIA+r",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _click.default)('.country-selector');
        assert.dom('.upf-infinite-select').exists();
        await (0, _typeIn.default)('.upf-infinite-select input', 'fran');
        const clickableRows = (0, _findAll.default)('.upf-infinite-select__item');
        assert.equal(clickableRows.length, 1);
        assert.dom(clickableRows[0]).hasText('France (+33)');
      });
      (0, _qunit.test)('Searching by Country Code Prefix works', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
        */
        {
          "id": "v6OgIA+r",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _click.default)('.country-selector');
        assert.dom('.upf-infinite-select').exists();
        await (0, _typeIn.default)('.upf-infinite-select input', '33');
        const clickableRows = (0, _findAll.default)('.upf-infinite-select__item');
        assert.equal(clickableRows.length, 2);
        assert.dom(clickableRows[0]).hasText('France (+33)');
      });
    });
    (0, _qunit.module)('Phone Number Input', hooks => {
      hooks.beforeEach(function () {
        this.onValidation = _sinon.default.stub();
      });
      (0, _qunit.test)('Typing numbers in the Phone input triggers the onChange method', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} @validates={{this.onValidation}} />
        */
        {
          "id": "Fcs6hF5o",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[\"\",\"\",[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _typeIn.default)('input', '8');
        assert.ok(this.onChange.calledOnce);
        assert.ok(this.onValidation.calledWithExactly(true));
        assert.dom('input').hasValue('8');
      });
      (0, _qunit.test)('Typing non-numeric characters does not apply changes', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} @validates={{this.onValidation}} />
        */
        {
          "id": "Fcs6hF5o",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[\"\",\"\",[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _typeIn.default)('input', '8');
        assert.ok(this.onChange.calledOnce);
        // @ts-ignore
        await (0, _testHelpers.triggerKeyEvent)('input', 'keydown', 'A', {
          code: 'a'
        });
        assert.ok(this.onValidation.calledWithExactly(true));
        assert.dom('input').hasValue('8');
      });
      (0, _qunit.test)('it displays an error if the number contains a + symbol', async function (assert) {
        this.prefix = '+1';
        this.number = '';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix={{this.prefix}} @number={{this.number}} @onChange={{this.onChange}} @validates={{this.onValidation}} />
        */
        {
          "id": "HDeBRW7f",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[[30,0,[\"prefix\"]],[30,0,[\"number\"]],[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _typeIn.default)('input', '+1');
        await (0, _settled.default)();
        assert.ok(this.onValidation.calledWithExactly(false));
        assert.dom('.font-color-error-500').exists();
      });
    });
    (0, _qunit.module)('When the paste event is received', function (hooks) {
      hooks.beforeEach(function () {
        this.onChange = () => {};
        this.onValidation = _sinon.default.spy();
        this.number = '1234567890';
      });
      (0, _qunit.test)('The value stored in the clipboard is inserted in the input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number={{this.number}} @onChange={{this.onChange}} @validates={{this.onValidation}} />
        */
        {
          "id": "6FmO4T8L",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[\"\",[30,0,[\"number\"]],[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('input').hasValue('1234567890');
        await (0, _testHelpers.triggerEvent)('input', 'paste', {
          clipboardData: {
            getData: _sinon.default.stub().returns('123')
          }
        });
        assert.dom('input').hasValue('1234567890123');
      });
      (0, _qunit.test)('The non-numeric characters are escaped', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number={{this.number}} @onChange={{this.onChange}} @validates={{this.onValidation}} />
        */
        {
          "id": "6FmO4T8L",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[\"\",[30,0,[\"number\"]],[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('input').hasValue('1234567890');
        await (0, _testHelpers.triggerEvent)('input', 'paste', {
          clipboardData: {
            getData: _sinon.default.stub().returns('1withletter0')
          }
        });
        assert.dom('input').hasValue('123456789010');
      });
      (0, _qunit.test)('When selection is applied, it replaces the selection', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number={{this.number}} @onChange={{this.onChange}} @validates={{this.onValidation}} />
        */
        {
          "id": "6FmO4T8L",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[\"\",[30,0,[\"number\"]],[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('input').hasValue('1234567890');
        let input = document.querySelector('input.ember-text-field');
        input.setSelectionRange(4, 6);
        await (0, _testHelpers.triggerEvent)('input', 'paste', {
          clipboardData: {
            getData: _sinon.default.stub().returns('0')
          }
        });
        assert.dom('input').hasValue('123407890');
      });
    });
    (0, _qunit.module)('@hasError parameter', () => {
      (0, _qunit.test)('A red border is displayed if the parameter is true', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @hasError={{true}}
                                                      @onChange={{this.onChange}} />
        */
        {
          "id": "+JxfRGmX",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@hasError\",\"@onChange\"],[\"\",\"\",true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.phone-number-input').hasClass('phone-number-input--error');
      });
      (0, _qunit.test)('No border is displayed if the parameter is not passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
        */
        {
          "id": "v6OgIA+r",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.phone-number-input').doesNotHaveClass('phone-number-input--error');
      });
    });
    (0, _qunit.module)('@errorMessage parameter', () => {
      (0, _qunit.test)('It displays the error message if the parameter is passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @errorMessage="This is an error"
                                                      @onChange={{this.onChange}} />
        */
        {
          "id": "vfh758l0",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@errorMessage\",\"@onChange\"],[\"\",\"\",\"This is an error\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.font-color-error-500').hasText('This is an error');
      });
      (0, _qunit.test)('A red border is displayed if the parameter is true', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @errorMessage="This is an error"
                                                      @onChange={{this.onChange}} />
        */
        {
          "id": "vfh758l0",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@errorMessage\",\"@onChange\"],[\"\",\"\",\"This is an error\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.phone-number-input').hasClass('phone-number-input--error');
      });
      (0, _qunit.test)('It does not display the error message if the parameter is not passed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
        */
        {
          "id": "v6OgIA+r",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.font-color-error-500').doesNotExist();
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('It throws an error if @prefix is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @prefix of type string is mandatory');
        });
        this.onChange = () => {};
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @number="" @onChange={{this.onChange}} />
        */
        {
          "id": "qWQBf+EO",
          "block": "[[[8,[39,0],null,[[\"@number\",\"@onChange\"],[\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
      (0, _qunit.test)('It throws an error if @number is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @number of type string is mandatory');
        });
        this.onChange = () => {};
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @prefix="" @onChange={{this.onChange}} />
        */
        {
          "id": "aWkXs7hc",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@onChange\"],[\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
      (0, _qunit.test)('It throws an error if @onChange is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @onChange of type function is mandatory');
        });
        this.onChange = () => {};
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PhoneNumberInput @number="" @prefix="" />
        */
        {
          "id": "wWzyHpIn",
          "block": "[[[8,[39,0],null,[[\"@number\",\"@prefix\"],[\"\",\"\"]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/phone-number-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/popover-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s-/popover', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders with basic arguments', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Popover @title='Title test' @arrowplacement='top' />
      */
      {
        "id": "GKmHuvfW",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@arrowplacement\"],[\"Title test\",\"top\"]],null]],[],false,[\"o-s-s/popover\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/popover-test.ts",
        "isStrictMode": false
      }));
      assert.dom(document.querySelector('.oss-popover')).hasClass('oss-popover--sm');
      assert.dom(document.querySelector('.oss-popover__title')).hasText('Title test');
    });
    (0, _qunit.test)('The @subtitle param is properly rendered', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Popover @title='Title test' @arrowplacement='top' @subtitle='This is a subtitle test' />
      */
      {
        "id": "wQHK53st",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@arrowplacement\",\"@subtitle\"],[\"Title test\",\"top\",\"This is a subtitle test\"]],null]],[],false,[\"o-s-s/popover\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/popover-test.ts",
        "isStrictMode": false
      }));
      assert.dom(document.querySelector('.oss-popover__subtitle')).hasText('This is a subtitle test');
    });
    (0, _qunit.module)('size validation', () => {
      (0, _qunit.test)('When the @size param is "SM", it renders a small component', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Popover @title='Title test' @arrowplacement='top' @size='sm' />
        */
        {
          "id": "U7gHVeAX",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@arrowplacement\",\"@size\"],[\"Title test\",\"top\",\"sm\"]],null]],[],false,[\"o-s-s/popover\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/popover-test.ts",
          "isStrictMode": false
        }));
        assert.dom(document.querySelector('.oss-popover')).hasClass('oss-popover--sm');
      });
      (0, _qunit.test)('When the @size param is "MD", it renders a medium component', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Popover @title='Title test' @arrowplacement='top' @size='md' />
        */
        {
          "id": "BIc1yUxi",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@arrowplacement\",\"@size\"],[\"Title test\",\"top\",\"md\"]],null]],[],false,[\"o-s-s/popover\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/popover-test.ts",
          "isStrictMode": false
        }));
        assert.dom(document.querySelector('.oss-popover')).hasClass('oss-popover--md');
      });
    });
    (0, _qunit.module)('named-block content validation', () => {
      (0, _qunit.test)('Illustration named-block content renders', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Popover @title='Title test' @arrowplacement='top'>
                <:illustration>TEST1</:illustration>
              </OSS::Popover>
        */
        {
          "id": "t7s4gwCQ",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@arrowplacement\"],[\"Title test\",\"top\"]],[[\"illustration\"],[[[[1,\"TEST1\"]],[]]]]]],[],false,[\"o-s-s/popover\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/popover-test.ts",
          "isStrictMode": false
        }));
        assert.dom(document.querySelector('.oss-popover__illustration')).hasText('TEST1');
      });
      (0, _qunit.test)('Contextual actions named-block content renders', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Popover @title='Title test' @arrowplacement='top'>
                <:contextual-actions>TEST2</:contextual-actions>
              </OSS::Popover>
        */
        {
          "id": "jhyx5TQa",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@arrowplacement\"],[\"Title test\",\"top\"]],[[\"contextual-actions\"],[[[[1,\"TEST2\"]],[]]]]]],[],false,[\"o-s-s/popover\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/popover-test.ts",
          "isStrictMode": false
        }));
        assert.dom(document.querySelector('.oss-popover__contextualactions')).hasText('TEST2');
      });
      (0, _qunit.test)('Content named-block content renders', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Popover @title='Title test' @arrowplacement='top'>
                <:content>TEST3</:content>
              </OSS::Popover>
        */
        {
          "id": "nWmrCa+b",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@arrowplacement\"],[\"Title test\",\"top\"]],[[\"content\"],[[[[1,\"TEST3\"]],[]]]]]],[],false,[\"o-s-s/popover\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/popover-test.ts",
          "isStrictMode": false
        }));
        assert.dom(document.querySelector('.oss-popover__content')).hasText('TEST3');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/power-select-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/power-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    const onSearch = _sinon.default.stub();
    const onChange = _sinon.default.stub();
    hooks.beforeEach(function () {
      this.selectedItems = [];
      this.items = [];
      this.onSearch = onSearch;
    });
    (0, _qunit.module)('it renders', () => {
      (0, _qunit.test)('with all required named blocks', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}}>
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "6YBI3et/",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-power-select').exists({
          count: 1
        });
        assert.dom('.upf-power-select__array-container').exists({
          count: 1
        });
        assert.dom('.upf-power-select').hasNoAttribute('open');
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        assert.dom('.upf-power-select').hasAttribute('open');
      });
      (0, _qunit.test)('without a border when @borderless is true', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}} @borderless={{true}}>
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "FDIKGC4H",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@borderless\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],true]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-power-select').hasClass('upf-power-select--borderless');
      });
      (0, _qunit.test)('custom empty state is properly rendered', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}}>
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                  <:empty-state>
                    <div class="foobar">custom empty state</div>
                  </:empty-state>
                </OSS::PowerSelect>
              
        */
        {
          "id": "G8ldjER/",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\",\"empty-state\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]],[[[1,\"\\n            \"],[10,0],[14,0,\"foobar\"],[12],[1,\"custom empty state\"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-power-select').exists({
          count: 1
        });
        assert.dom('.upf-power-select__array-container').exists({
          count: 1
        });
        assert.dom('.upf-power-select').hasNoAttribute('open');
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        assert.dom('.upf-power-select').hasAttribute('open');
        assert.dom('.foobar').exists();
        assert.dom('.foobar').hasText('custom empty state');
      });
    });
    (0, _qunit.module)('with @selectedItems', () => {
      (0, _qunit.test)('Passing @selectedItems parameter displays the items', async function (assert) {
        this.selectedItems = ['value1', 'value2'];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}}>
                  <:selected-item as |selectedItem|>
                    <span>{{selectedItem}}</span>
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "ciCjsVum",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[10,1],[12],[1,[30,1]],[13],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        const domTags = (0, _testHelpers.findAll)('.array-input-container span');
        assert.dom(domTags[0]).hasText('value1');
        assert.dom(domTags[1]).hasText('value2');
      });
      (0, _qunit.test)('Passing empty @selectedItems parameter displays nothing', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}}>
                  <:selected-item as |selectedItem|>
                    <span id="selectedItemTest">{{selectedItem}}</span>
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "WlZtGqhm",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[10,1],[14,1,\"selectedItemTest\"],[12],[1,[30,1]],[13],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.array-input-container #selectedItemTest').doesNotExist();
      });
      (0, _qunit.test)('Passing empty @selectedItems and @placeholder parameters displays placeholder', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}} @placeholder="placeholder">
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "z6GdUTQS",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@placeholder\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],\"placeholder\"]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.array-input-container').hasText('placeholder');
      });
    });
    (0, _qunit.module)('with @items', hooks => {
      hooks.beforeEach(function () {
        this.items = ['value1', 'value2'];
      });
      (0, _qunit.test)('Passing @items parameter displays the items in InfiniteSelect', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}}>
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "6YBI3et/",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        const domTags = (0, _testHelpers.findAll)('.upf-infinite-select__item');
        assert.dom(domTags[0]).hasText('value1');
        assert.dom(domTags[1]).hasText('value2');
      });
    });
    (0, _qunit.module)('with @onChange', hooks => {
      hooks.beforeEach(function () {
        this.selectedItems = ['value1', 'value2'];
        this.items = ['value1', 'value2'];
        this.onChange = onChange;
      });
      (0, _qunit.test)('selecting item triggers onChange with selection operation', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}} @onChange={{this.onChange}}>
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "ZpzizR2y",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@onChange\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],[30,0,[\"onChange\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        await (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');
        assert.ok(this.onChange.calledWith('value1', 'selection'));
      });
    });
    (0, _qunit.module)('with @searchPlaceholder', () => {
      (0, _qunit.test)('Passing @items parameter displays the items in InfiniteSelect', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}} @searchPlaceholder='searchPlaceholder'>
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "8CkXcASa",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@searchPlaceholder\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],\"searchPlaceholder\"]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        assert.dom('.upf-infinite-select input').hasAttribute('placeholder', 'searchPlaceholder');
      });
    });
    (0, _qunit.module)('with @onSearch', () => {
      (0, _qunit.test)('search is correctly called', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}}
                                  @onSearch={{this.onSearch}}>
                  <:selected-item as |selectedItem|>
                    {{selectedItem}}
                  </:selected-item>
                  <:option-item as |item|>
                    {{item}}
                  </:option-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "6YBI3et/",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        await (0, _testHelpers.typeIn)('.upf-infinite-select input', 's');
        assert.ok(this.onSearch.calledWith('s'));
      });
    });
    (0, _qunit.module)('with @onBottomReached', hooks => {
      hooks.beforeEach(function () {
        this.items = ['value1', 'value2', 'value3'];
        this.loadingMore = false;
        this.onBottomReached = _sinon.default.stub().callsFake(() => {
          this.set('loadingMore', true);
        });
      });
      (0, _qunit.test)('search is correctly call', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <div style="height:150px">
                  <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}} @loadingMore={{this.loadingMore}}
                                    @onSearch={{this.onSearch}} @onBottomReached={{this.onBottomReached}}>
                    <:selected-item as |selectedItem|>
                      {{selectedItem}}
                    </:selected-item>
                    <:option-item as |item|>
                      {{item}}
                    </:option-item>
                  </OSS::PowerSelect>
                </div>
              
        */
        {
          "id": "PB1yVieS",
          "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"height:150px\"],[12],[1,\"\\n          \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@loadingMore\",\"@onSearch\",\"@onBottomReached\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"loadingMore\"]],[30,0,[\"onSearch\"]],[30,0,[\"onBottomReached\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n              \"],[1,[30,1]],[1,\"\\n            \"]],[1]],[[[1,\"\\n              \"],[1,[30,2]],[1,\"\\n            \"]],[2]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        await (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);
        this.set('loadingMore', false);
        await (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);
        assert.ok(this.onBottomReached.calledTwice);
      });
    });
    (0, _qunit.module)('with @addressableAs', hooks => {
      hooks.beforeEach(function () {
        this.items = ['value1', 'value2', 'value3'];
      });
      (0, _qunit.test)('the dropdown has the right class assigned to it', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <div style="height:150px">
                  <OSS::PowerSelect @selectedItems={{this.selectedItems}} @items={{this.items}} @onSearch={{this.onSearch}} @addressableAs="foobar-select">
                    <:selected-item as |selectedItem|>
                      {{selectedItem}}
                    </:selected-item>
                    <:option-item as |item|>
                      {{item}}
                    </:option-item>
                  </OSS::PowerSelect>
                </div>
              
        */
        {
          "id": "ukgZeCsF",
          "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"height:150px\"],[12],[1,\"\\n          \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@addressableAs\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],\"foobar-select\"]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n              \"],[1,[30,1]],[1,\"\\n            \"]],[1]],[[[1,\"\\n              \"],[1,[30,2]],[1,\"\\n            \"]],[2]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-power-select__array-container');
        assert.dom('.upf-infinite-select').exists();
        assert.dom('.upf-infinite-select').hasClass('foobar-select__dropdown');
      });
    });
    (0, _qunit.module)('Error management', () => {
      (0, _qunit.test)('without selected-item named block', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::PowerSelect] You must pass selected-item named block');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @onSearch={{this.onSearch}}/>
              
        */
        {
          "id": "VPCYjfAq",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@onSearch\"],[[30,0,[\"onSearch\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('without option-item named block', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::PowerSelect] You must pass option-item named block');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::PowerSelect @onSearch={{this.onSearch}}>
                  <:selected-item as |selectedItem|>
                    {{selectedItem.name}}
                  </:selected-item>
                </OSS::PowerSelect>
              
        */
        {
          "id": "RTNrxf+6",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@onSearch\"],[[30,0,[\"onSearch\"]]]],[[\"selected-item\"],[[[[1,\"\\n            \"],[1,[30,1,[\"name\"]]],[1,\"\\n          \"]],[1]]]]],[1,\"\\n      \"]],[\"selectedItem\"],false,[\"o-s-s/power-select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/power-select-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/progress-bar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/progress-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.checkedValue = 42;
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ProgressBar @value={{this.checkedValue}} />
      */
      {
        "id": "KZFzVx3f",
        "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-progress-bar').exists();
    });
    (0, _qunit.module)('@value arg behaviour', function () {
      (0, _qunit.test)('It renders the progress-bar--inner with the correct width when @value is specified', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} />
        */
        {
          "id": "KZFzVx3f",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').exists();
        const innerBar = this.element.querySelector('.oss-progress-bar__inner');
        const inlineStyle = innerBar.getAttribute('style');
        assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
      });
      (0, _qunit.test)('It renders the progress-bar--inner with the correct width when @value is updated from one value to another', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} />
        */
        {
          "id": "KZFzVx3f",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').exists();
        const innerBar = this.element.querySelector('.oss-progress-bar__inner');
        let inlineStyle = innerBar.getAttribute('style');
        assert.ok(inlineStyle?.includes(this.checkedValue), 'The inline style attribute is set to the proper value');
        this.set('checkedValue', 100);
        inlineStyle = innerBar.getAttribute('style');
        assert.ok(inlineStyle?.includes('100'), 'The inline style attribute is set to the proper value');
      });
    });
    (0, _qunit.module)('@size arg behaviour', function () {
      (0, _qunit.test)('if the value is "xs", the progress bar height is the proper height', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @size="xs" />
        */
        {
          "id": "8Ls0RfcW",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@size\"],[[30,0,[\"checkedValue\"]],\"xs\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').exists();
        const innerBar = this.element.querySelector('.oss-progress-bar__inner');
        assert.equal(innerBar.clientHeight, 1, 'Element has the correct height');
      });
      (0, _qunit.test)('if the value is "sm", the progress bar height is the proper height', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @size="sm" />
        */
        {
          "id": "svG9srR7",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@size\"],[[30,0,[\"checkedValue\"]],\"sm\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').exists();
        const innerBar = this.element.querySelector('.oss-progress-bar__inner');
        assert.equal(innerBar.clientHeight, 4, 'Element has the correct height');
      });
      (0, _qunit.test)('if the value is "lg", the progress bar height is the proper height', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @size="lg" />
        */
        {
          "id": "5A7Wydmr",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@size\"],[[30,0,[\"checkedValue\"]],\"lg\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').exists();
        const innerBar = this.element.querySelector('.oss-progress-bar__inner');
        assert.equal(innerBar.clientHeight, 10, 'Element has the correct height');
      });
      (0, _qunit.test)('if the value is unspecified, the progress bar height is the proper height', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} />
        */
        {
          "id": "KZFzVx3f",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').exists();
        const innerBar = this.element.querySelector('.oss-progress-bar__inner');
        assert.equal(innerBar.clientHeight, 10, 'Element has the correct height');
      });
    });
    (0, _qunit.module)('@label arg behaviour', function () {
      (0, _qunit.test)('if the value is specified, the label is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @label="Hello"/>
        */
        {
          "id": "TySBaTNY",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@label\"],[[30,0,[\"checkedValue\"]],\"Hello\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar__label').exists();
        assert.dom('.oss-progress-bar__label').hasText('Hello');
      });
      (0, _qunit.test)('if the value is not specified, the label is not displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}}/>
        */
        {
          "id": "KZFzVx3f",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar__label').doesNotExist();
      });
    });
    (0, _qunit.module)('@displayValue arg behaviour', function () {
      (0, _qunit.test)('if the value is true, the value is displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" @displayValue={{true}}/>
        */
        {
          "id": "Ngy9ohQL",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@label\",\"@displayValue\"],[[30,0,[\"checkedValue\"]],\"Hello\",true]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar__value').exists();
        assert.dom('.oss-progress-bar__value').hasText(this.checkedValue + '%');
      });
      (0, _qunit.test)('if the value is false, the value is not displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" @displayValue={{false}}/>
        */
        {
          "id": "7+iagOsM",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@label\",\"@displayValue\"],[[30,0,[\"checkedValue\"]],\"Hello\",false]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar__value').doesNotExist();
      });
      (0, _qunit.test)('if the value is unspecified, the value is not displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @label="Hello" />
        */
        {
          "id": "TySBaTNY",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@label\"],[[30,0,[\"checkedValue\"]],\"Hello\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar__value').doesNotExist();
      });
    });
    (0, _qunit.module)('@skin arg behaviour', function () {
      (0, _qunit.test)('if the value is "warning", the progress bar has the correct class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @skin="warning" />
        */
        {
          "id": "YdHWrJsS",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@skin\"],[[30,0,[\"checkedValue\"]],\"warning\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--warning');
      });
      (0, _qunit.test)('if the value is "success", the progress bar has the correct class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @skin="success" />
        */
        {
          "id": "TK64izJq",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@skin\"],[[30,0,[\"checkedValue\"]],\"success\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--success');
      });
      (0, _qunit.test)('if the value is "danger", the progress bar has the correct class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @skin="danger" />
        */
        {
          "id": "wXRB769H",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@skin\"],[[30,0,[\"checkedValue\"]],\"danger\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--danger');
      });
      (0, _qunit.test)('if the value is unspecified, the progress bar has the correct class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} />
        */
        {
          "id": "KZFzVx3f",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar');
      });
    });
    (0, _qunit.module)('@coloredBackground arg behaviour', function () {
      (0, _qunit.test)('if the value is true, the colored-background class is added', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @coloredBackground={{true}} />
        */
        {
          "id": "79RZdO53",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@coloredBackground\"],[[30,0,[\"checkedValue\"]],true]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--colored-background');
      });
      (0, _qunit.test)('if the value is false, the colored-background class is not added', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @coloredBackground={{false}} />
        */
        {
          "id": "d8FBxw4f",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@coloredBackground\"],[[30,0,[\"checkedValue\"]],false]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--colored-background');
      });
      (0, _qunit.test)('if the value is unspecified, the colored-background class is not added', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} />
        */
        {
          "id": "KZFzVx3f",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--colored-background');
      });
    });
    (0, _qunit.module)('@secondarySkin arg behaviour', function () {
      (0, _qunit.test)('if the value is "warning", the progress bar has the correct secondary class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @secondarySkin="warning" />
        */
        {
          "id": "GiQsSnk/",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@secondarySkin\"],[[30,0,[\"checkedValue\"]],\"warning\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--secondary-skin--warning');
      });
      (0, _qunit.test)('if the value is "success", the progress bar has the correct secondary class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @secondarySkin="success" />
        */
        {
          "id": "rqpZDcnI",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@secondarySkin\"],[[30,0,[\"checkedValue\"]],\"success\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--secondary-skin--success');
      });
      (0, _qunit.test)('if the value is "danger", the progress bar has the correct secondary class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} @secondarySkin="danger" />
        */
        {
          "id": "KvQxghcj",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@secondarySkin\"],[[30,0,[\"checkedValue\"]],\"danger\"]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').hasClass('oss-progress-bar--secondary-skin--danger');
      });
      (0, _qunit.test)('if the value is unspecified, the progress bar does not have a secondary class', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ProgressBar @value={{this.checkedValue}} />
        */
        {
          "id": "KZFzVx3f",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"checkedValue\"]]]],null]],[],false,[\"o-s-s/progress-bar\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/progress-bar-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--secondary-skin--warning');
        assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--secondary-skin--success');
        assert.dom('.oss-progress-bar').doesNotHaveClass('oss-progress-bar--secondary-skin--danger');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/pulsating-dot-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/pulsating-dot', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PulsatingDot />
      */
      {
        "id": "OA9hyAU4",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/pulsating-dot\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/pulsating-dot-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-pulsating-dot').exists();
    });
    (0, _qunit.test)('The default applied skin is primary', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::PulsatingDot />
      */
      {
        "id": "OA9hyAU4",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/pulsating-dot\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/pulsating-dot-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-pulsating-dot').hasClass('oss-pulsating-dot--primary');
    });
    ['primary', 'success', 'error', 'warning'].forEach(skin => {
      (0, _qunit.test)(`it renders with skin ${skin}`, async function (assert) {
        this.set('skin', skin);
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::PulsatingDot @skin={{this.skin}} />
        */
        {
          "id": "8g6H8+Gj",
          "block": "[[[8,[39,0],null,[[\"@skin\"],[[30,0,[\"skin\"]]]],null]],[],false,[\"o-s-s/pulsating-dot\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/pulsating-dot-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-pulsating-dot').hasClass(`oss-pulsating-dot--${skin}`);
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/radio-button-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/test-helpers/dom/click", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _click, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon",0,"@ember/test-helpers/dom/click"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/radio-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton />
      */
      {
        "id": "cQTxsU1F",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-radio-btn').exists();
    });
    (0, _qunit.test)('It shows the selected state if the @selected parameter is true', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton @selected={{true}} />
      */
      {
        "id": "0JVLeoYr",
        "block": "[[[8,[39,0],null,[[\"@selected\"],[true]],null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-radio-btn--selected').exists();
    });
    (0, _qunit.test)('It shows the empty state if the @selected parameter is false', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton @selected={{false}} />
      */
      {
        "id": "8sBd6kLu",
        "block": "[[[8,[39,0],null,[[\"@selected\"],[false]],null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-radio-btn').exists();
      assert.dom('.oss-radio-btn--selected').doesNotExist();
    });
    (0, _qunit.test)('It shows the selected/disabled state if the @selected parameter is true and the @disabled parameter is true', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton @selected={{true}} @disabled={{true}} />
      */
      {
        "id": "p7qfBShQ",
        "block": "[[[8,[39,0],null,[[\"@selected\",\"@disabled\"],[true,true]],null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-radio-btn--selected').exists();
      assert.dom('.oss-radio-btn--disabled').exists();
    });
    (0, _qunit.test)('It shows the empty/disabled state if the @selected parameter is false and the @disabled parameter is true', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton @selected={{false}} @disabled={{true}} />
      */
      {
        "id": "Ytwolqh2",
        "block": "[[[8,[39,0],null,[[\"@selected\",\"@disabled\"],[false,true]],null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-radio-btn').exists();
      assert.dom('.oss-radio-btn--selected').doesNotExist();
      assert.dom('.oss-radio-btn--disabled').exists();
    });
    (0, _qunit.test)('It triggers the onChange method on click when the @disabled parameter is false', async function (assert) {
      this.onChange = _sinon.default.stub();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton @selected={{false}} @onChange={{this.onChange}} />
      */
      {
        "id": "1y7yssvf",
        "block": "[[[8,[39,0],null,[[\"@selected\",\"@onChange\"],[false,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-radio-btn').exists();
      await (0, _click.default)('.oss-radio-btn');
      assert.true(this.onChange.calledOnceWithExactly(true));
    });
    (0, _qunit.test)('It triggers the onChange method on click when the @disabled parameter is true', async function (assert) {
      this.onChange = _sinon.default.stub();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton @selected={{true}} @onChange={{this.onChange}} />
      */
      {
        "id": "qf/CV3tV",
        "block": "[[[8,[39,0],null,[[\"@selected\",\"@onChange\"],[true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-radio-btn').exists();
      await (0, _click.default)('.oss-radio-btn');
      assert.true(this.onChange.calledOnceWithExactly(false));
    });
    (0, _qunit.test)("It doesn't trigger the onChange method on click when the @disabled parameter is true", async function (assert) {
      this.onChange = _sinon.default.stub();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::RadioButton @selected={{false}} @disabled={{true}} @onChange={{this.onChange}} />
      */
      {
        "id": "GDTfck47",
        "block": "[[[8,[39,0],null,[[\"@selected\",\"@disabled\",\"@onChange\"],[false,true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/radio-button\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/radio-button-test.ts",
        "isStrictMode": false
      }));
      await (0, _click.default)('.oss-radio-btn');
      assert.true(this.onChange.notCalled);
    });
  });
});
define("dummy/tests/integration/components/o-s-s/scrollable-panel-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/scrollable-panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    function scrollIntoView(elementId) {
      document.querySelector(`#${elementId}`)?.scrollIntoView({
        block: 'center'
      });
    }
    const renderScrollableContent = (0, _templateFactory.createTemplateFactory)(
    /*
      
      <div class="background-color-gray-50" style="height:300px; width: 500px">
        <OSS::ScrollablePanel @disableShadows={{this.disableShadows}}>
          <div class="fx-col fx-gap-px-12 padding-px-12">
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="start-element"/>
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="center-element"/>
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="end-element"/>
          </div>
        </OSS::ScrollablePanel>
      </div>
    
    */
    {
      "id": "GvX/Lzyf",
      "block": "[[[1,\"\\n  \"],[10,0],[14,0,\"background-color-gray-50\"],[14,5,\"height:300px; width: 500px\"],[12],[1,\"\\n    \"],[8,[39,0],null,[[\"@disableShadows\"],[[30,0,[\"disableShadows\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[10,0],[14,0,\"fx-col fx-gap-px-12 padding-px-12\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[14,1,\"start-element\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[14,1,\"center-element\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[14,1,\"end-element\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[],false,[\"o-s-s/scrollable-panel\"]]",
      "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/scrollable-panel-test.ts",
      "isStrictMode": false
    });
    (0, _qunit.test)('When the container is not scrollable, it does not display shadows', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <div class="background-color-gray-50" style="height:500px; width: 500px">
              <OSS::ScrollablePanel>
                <div class="fx-col fx-gap-px-12 padding-px-12">
                  <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="start-element"/>
                  <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
                  <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="center-element"/>
                  <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
                  <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="end-element"/>
                </div>
              </OSS::ScrollablePanel>
            </div>
          
      */
      {
        "id": "AOZQf4pk",
        "block": "[[[1,\"\\n      \"],[10,0],[14,0,\"background-color-gray-50\"],[14,5,\"height:500px; width: 500px\"],[12],[1,\"\\n        \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n          \"],[10,0],[14,0,\"fx-col fx-gap-px-12 padding-px-12\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[14,1,\"start-element\"],[12],[13],[1,\"\\n            \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[12],[13],[1,\"\\n            \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[14,1,\"center-element\"],[12],[13],[1,\"\\n            \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[12],[13],[1,\"\\n            \"],[10,0],[14,0,\"background-color-gray-200\"],[14,5,\"height: 50px; width: 100%;\"],[14,1,\"end-element\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"o-s-s/scrollable-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/scrollable-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-scrollable-panel-content').exists();
      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
      assert.dom('.oss-scrollable-panel--shadow__bottom').doesNotExist();
    });
    (0, _qunit.module)('When the container is scrollable', () => {
      (0, _qunit.test)('It has a shadow bottom per default', async function (assert) {
        await (0, _testHelpers.render)(renderScrollableContent);
        assert.dom('.oss-scrollable-panel-content').exists();
        assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
        assert.dom('.oss-scrollable-panel--shadow__bottom').exists();
      });
      (0, _qunit.test)('When scrolling into last element, It only has a shadow top', async function (assert) {
        await (0, _testHelpers.render)(renderScrollableContent);
        scrollIntoView('end-element');
        assert.dom('.oss-scrollable-panel-content').exists();
        await (0, _testHelpers.waitFor)('.oss-scrollable-panel--shadow__top', {
          timeout: 500
        });
        assert.dom('.oss-scrollable-panel--shadow__top').exists();
        assert.dom('.oss-scrollable-panel--shadow__bottom').doesNotExist();
      });
      (0, _qunit.test)('When scrolling into center element, It has top and bottom shadows', async function (assert) {
        await (0, _testHelpers.render)(renderScrollableContent);
        scrollIntoView('center-element');
        assert.dom('.oss-scrollable-panel-content').exists();
        await (0, _testHelpers.waitFor)('.oss-scrollable-panel--shadow__top', {
          timeout: 500
        });
        assert.dom('.oss-scrollable-panel--shadow__top').exists();
        assert.dom('.oss-scrollable-panel--shadow__bottom').exists();
      });
      (0, _qunit.test)('When scrolling into first element, It only has a shadow bottom', async function (assert) {
        await (0, _testHelpers.render)(renderScrollableContent);
        scrollIntoView('start-element');
        assert.dom('.oss-scrollable-panel-content').exists();
        await (0, _testHelpers.waitFor)('.oss-scrollable-panel--shadow__bottom', {
          timeout: 500
        });
        assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
        assert.dom('.oss-scrollable-panel--shadow__bottom').exists();
      });
    });
    (0, _qunit.test)('When @disableShadows is enabled, the top & bottom shadows are not displayed', async function (assert) {
      this.disableShadows = true;
      await (0, _testHelpers.render)(renderScrollableContent);
      scrollIntoView('center-element');
      assert.dom('.oss-scrollable-panel-content').exists();
      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
      assert.dom('.oss-scrollable-panel--shadow__bottom').doesNotExist();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/search-field-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-intl/test-support", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _testSupport, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"ember-intl/test-support",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/search-field', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.onChange = value => {
        this.value = value;
      };
    });
    (0, _qunit.test)('Search Field component is rendered with a placeholder', async function (assert) {
      this.placeholder = 'This is a placeholder';
      this.value = '';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SearchField @value={{this.value}} @placeholder={{this.placeholder}} @onChange={{this.onChange}} />
      */
      {
        "id": "75xmp4yO",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@placeholder\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"placeholder\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/search-field\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/search-field-test.ts",
        "isStrictMode": false
      }));
      assert.dom('input').hasAttribute('placeholder', 'This is a placeholder');
    });
    (0, _qunit.test)('Input value is reset when the clear button is clicked', async function (assert) {
      this.value = 'Test';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />
      */
      {
        "id": "/mqKZfq7",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/search-field\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/search-field-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[role="button"]').exists();
      await (0, _testHelpers.click)('[role="button"]');
      assert.strictEqual(this.value, '');
    });
    (0, _qunit.test)('onChange function is triggered on input change', async function (assert) {
      this.value = '';
      this.onChange = _sinon.default.stub();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />
      */
      {
        "id": "/mqKZfq7",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/search-field\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/search-field-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)('input', 'Test', {
        delay: 0
      });
      assert.true(this.onChange.lastCall.calledWith('Test'));
    });
    (0, _qunit.test)('Clear button is not displayed when the input is empty', async function (assert) {
      this.value = '';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SearchField @value={{this.value}} @onChange={{this.onChange}} />
      */
      {
        "id": "/mqKZfq7",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/search-field\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/search-field-test.ts",
        "isStrictMode": false
      }));
      assert.dom('[role="button"]').doesNotExist();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/select-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.onChange = _sinon.default.stub();
      this.items = [{
        name: 'foo',
        label: 'First item'
      }, {
        name: 'bar',
        label: 'Second item'
      }];
    });
    (0, _qunit.module)('value changes', function () {
      (0, _qunit.test)('the onChange function is called with the selected item', async function (assert) {
        this.value = this.items[0];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "PT32Z2Yu",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-input div');
        await (0, _testHelpers.click)('.upf-infinite-select .upf-infinite-select__item:last-child');
        assert.ok(this.onChange.calledOnceWithExactly(this.items[1]));
      });
    });
    (0, _qunit.module)('items display', function () {
      (0, _qunit.test)('the option block properly displays each item', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "PT32Z2Yu",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-input div');
        assert.dom('.upf-infinite-select').exists();
        assert.dom('.upf-infinite-select .upf-infinite-select__item').exists({
          count: 2
        });
        assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child').hasText('foo');
        assert.dom('.upf-infinite-select .upf-infinite-select__item:last-child').hasText('bar');
      });
    });
    (0, _qunit.module)('selected value display', function () {
      (0, _qunit.test)('the default placeholder is displayed if the @value arg is null-ish', async function (assert) {
        this.value = null;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "PT32Z2Yu",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-input').hasText('Select');
      });
      (0, _qunit.test)('the passed @placeholder arg is displayed if the @value arg is null-ish', async function (assert) {
        this.value = null;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "E+Q/Zhdx",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-input').hasText('my placeholder');
      });
      (0, _qunit.test)("the current value's label attr is displayed", async function (assert) {
        this.value = this.items[0];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "E+Q/Zhdx",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-input').hasText('First item');
      });
      (0, _qunit.test)("the current value's is displayed with the targetLabel arg when passed", async function (assert) {
        this.value = this.items[0];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder" @targetLabel="name">
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "Dwop3I5H",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\",\"@targetLabel\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\",\"name\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-input').hasText('foo');
      });
      (0, _qunit.test)("the current value's is displayed with the right class and active icon in the options", async function (assert) {
        this.value = this.items[0];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder" @targetLabel="name">
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "Dwop3I5H",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\",\"@targetLabel\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\",\"name\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-input div');
        assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper').hasClass('selected');
        assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper i.far.fa-check').exists();
      });
      (0, _qunit.test)('the selected value is displayed using the selected named block if provided', async function (assert) {
        this.value = this.items[0];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
                    <:selected as |value|>
                      Selected value: {{value.name}}
                    </:selected>
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "/SUAhC5x",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\"]],[[\"selected\",\"option\"],[[[[1,\"\\n              Selected value: \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]],[[[1,\"\\n              \"],[1,[30,2,[\"name\"]]],[1,\"\\n            \"]],[2]]]]],[1,\"\\n        \"]],[\"value\",\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-input').hasText('Selected value: foo');
      });
    });
    (0, _qunit.module)('disabled state', function () {
      (0, _qunit.test)('the dropdown does not open when the select is clicked', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @disabled={{true}}>
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "tzi0+8CR",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@disabled\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],true]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-input div');
        assert.dom('.upf-infinite-select').doesNotExist();
      });
    });
    (0, _qunit.module)('feedback states', function () {
      (0, _qunit.module)('errorful state', function () {
        (0, _qunit.test)('the right class is applied to the select container', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @errorMessage="error !">
                      <:option as |item|>
                        {{item.name}}
                      </:option>
                    </OSS::Select>
                  
          */
          {
            "id": "bsUZMa+s",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@errorMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"error !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-select-container').hasClass('oss-select-container--errorful');
        });
        (0, _qunit.test)('the error message is displayed under the select field', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @errorMessage="error !">
                      <:option as |item|>
                        {{item.name}}
                      </:option>
                    </OSS::Select>
                  
          */
          {
            "id": "bsUZMa+s",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@errorMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"error !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-select-container .upf-input + .font-color-error-500').hasText('error !');
        });
      });
      (0, _qunit.module)('successful state', function () {
        (0, _qunit.test)('the right class is applied to the select container', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @successMessage="good !">
                      <:option as |item|>
                        {{item.name}}
                      </:option>
                    </OSS::Select>
                  
          */
          {
            "id": "3MCCp/Z7",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@successMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"good !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-select-container').hasClass('oss-select-container--successful');
        });
        (0, _qunit.test)('the error message is displayed under the select field', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @successMessage="good !">
                      <:option as |item|>
                        {{item.name}}
                      </:option>
                    </OSS::Select>
                  
          */
          {
            "id": "3MCCp/Z7",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@successMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"good !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-select-container .upf-input + .font-color-success-500').hasText('good !');
        });
      });
    });
    (0, _qunit.module)('searching through the options', function () {
      (0, _qunit.test)('the search is not displayed if no onSearch arg is provided', async function (assert) {
        this.value = this.items[0];
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "PT32Z2Yu",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-input div');
        assert.dom('.upf-infinite-select .upf-input').doesNotExist();
      });
      (0, _qunit.test)('the search is displayed if the @onSearch arg is provided', async function (assert) {
        assert.expect(4);
        this.value = this.items[0];
        this.onSearch = keyword => {
          assert.equal(keyword, 'F');
          this.set('items', this.items.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0));
        };
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @onSearch={{this.onSearch}} @items={{this.items}} @value={{this.value}}>
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "xDHpPnRz",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@onSearch\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"onSearch\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-input div');
        assert.dom('.upf-infinite-select .upf-input').exists();
        await (0, _testHelpers.typeIn)('.upf-infinite-select .upf-input', 'F');
        assert.dom('.upf-infinite-select .upf-infinite-select__item').exists({
          count: 1
        });
        assert.dom('.upf-infinite-select .upf-infinite-select__item').hasText('foo');
      });
    });
    (0, _qunit.module)('with @addressableAs', () => {
      (0, _qunit.test)('the dropdown has the right class assigned to it', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @addressableAs="foobar-select">
                    <:option as |item|>
                      {{item.name}}
                    </:option>
                  </OSS::Select>
                
        */
        {
          "id": "op+B8jIa",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@addressableAs\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"foobar-select\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.upf-input div');
        assert.dom('.upf-infinite-select').exists();
        assert.dom('.upf-infinite-select').hasClass('foobar-select__dropdown');
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if no @onChange arg is passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Select] The parameter @onChange of type function is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Select />
        */
        {
          "id": "ObKNdEe8",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if the component is invoked with no option named blocked', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Select] You must pass option named block');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Select @onChange={{this.onChange}} />
        */
        {
          "id": "L03qhPen",
          "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/select\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/select-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/side-panel-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/side-panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onClose = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}} />
      */
      {
        "id": "+z3m7huO",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-side-panel').exists();
    });
    (0, _qunit.module)('Named-blocks', function () {
      (0, _qunit.test)('The global named-block is properly displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}>
                    <:global>
                      <p>This is the global content</p>
                    </:global>
                  </OSS::SidePanel>
        */
        {
          "id": "AruJHmjo",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]]]],[[\"global\"],[[[[1,\"\\n              \"],[10,2],[12],[1,\"This is the global content\"],[13],[1,\"\\n            \"]],[]]]]]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('p').hasText('This is the global content');
      });
      (0, _qunit.test)('The header named-block is properly displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}>
                    <:header>
                      <p>This is the header</p>
                    </:header>
                  </OSS::SidePanel>
        */
        {
          "id": "EqL8cXg3",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]]]],[[\"header\"],[[[[1,\"\\n              \"],[10,2],[12],[1,\"This is the header\"],[13],[1,\"\\n            \"]],[]]]]]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__header').hasText('This is the header');
      });
      (0, _qunit.test)('The main named-block is properly displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}>
                    <:main>
                      <p>This is the content</p>
                    </:main>
                  </OSS::SidePanel>
        */
        {
          "id": "2hlpJLWu",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]]]],[[\"main\"],[[[[1,\"\\n              \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n            \"]],[]]]]]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__main').hasText('This is the content');
      });
      (0, _qunit.test)('The footer named-block is properly displayed', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}>
                    <:footer>
                      <p>This is the footer</p>
                    </:footer>
                  </OSS::SidePanel>
        */
        {
          "id": "OORmWzo3",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]]]],[[\"footer\"],[[[[1,\"\\n              \"],[10,2],[12],[1,\"This is the footer\"],[13],[1,\"\\n            \"]],[]]]]]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__footer').hasText('This is the footer');
      });
      (0, _qunit.test)('When noPadding is set to true, it set the default padding of each section to 0', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                  <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}
                                  @noPadding={{true}}>
                    <:header>
                      <p>This is the header</p>
                    </:header>
                    <:main>
                      <p>This is the content</p>
                    </:main>
                    <:footer>
                      <p>This is the footer</p>
                    </:footer>
                  </OSS::SidePanel>
        */
        {
          "id": "Ee2jU3w9",
          "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\",\"@noPadding\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]],true]],[[\"header\",\"main\",\"footer\"],[[[[1,\"\\n              \"],[10,2],[12],[1,\"This is the header\"],[13],[1,\"\\n            \"]],[]],[[[1,\"\\n              \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n            \"]],[]],[[[1,\"\\n              \"],[10,2],[12],[1,\"This is the footer\"],[13],[1,\"\\n            \"]],[]]]]]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__header').hasClass('padding-none');
        assert.dom('.oss-side-panel__main').hasClass('padding-none');
        assert.dom('.oss-side-panel__footer').hasClass('padding-none');
      });
    });
    (0, _qunit.module)('The visibility of the side panel varies', function () {
      (0, _qunit.test)('When @visible is truthy, the side panel is visible', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @onClose={{this.onClose}} />
        */
        {
          "id": "/puGfUqg",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@onClose\"],[\"Sidepanel\",true,true,[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel.oss-side-panel--visible').hasStyle({
          opacity: '1',
          visibility: 'visible'
        });
      });
      (0, _qunit.test)('When @visible is falsy, the side panel is not visible', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel @title="Sidepanel" @visible={{false}} @backdrop={{true}} @onClose={{this.onClose}} />
        */
        {
          "id": "TVwGEF67",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@onClose\"],[\"Sidepanel\",false,true,[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel').hasStyle({
          opacity: '0',
          visibility: 'hidden'
        });
      });
    });
    (0, _qunit.module)('The width of the side panel varies', function () {
      (0, _qunit.test)('When @size is sm, the width is small', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}} />
        */
        {
          "id": "+z3m7huO",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__content').hasStyle({
          width: '480px'
        });
      });
      (0, _qunit.test)('When @size is md, the width is medium', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="md" @onClose={{this.onClose}} />
        */
        {
          "id": "OQJuc5Im",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"md\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__content').hasStyle({
          width: '540px'
        });
      });
      (0, _qunit.test)('When @size is not defined, the default width is small', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @onClose={{this.onClose}} />
        */
        {
          "id": "/puGfUqg",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@onClose\"],[\"Sidepanel\",true,true,[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__content').hasStyle({
          width: '480px'
        });
      });
    });
    (0, _qunit.module)('Clicking outside the side panel (or clicking on the background) triggers the @onClose callback', function () {
      (0, _qunit.test)('When the backdrop is visible', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}} />
        */
        {
          "id": "+z3m7huO",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,true,\"sm\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__backdrop').hasStyle({
          backgroundColor: 'rgba(27, 30, 33, 0.376)'
        });
        await (0, _testHelpers.click)('.oss-side-panel__backdrop');
        assert.ok(this.onClose.calledOnce, 'Clicked on the visible backdrop so the side panel closes.');
      });
      (0, _qunit.test)('When the backdrop is transparent', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{false}} @size="sm" @onClose={{this.onClose}} />
        */
        {
          "id": "cSVFTWtK",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@visible\",\"@backdrop\",\"@size\",\"@onClose\"],[\"Sidepanel\",true,false,\"sm\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-side-panel__backdrop.oss-side-panel__backdrop--transparent').hasStyle({
          backgroundColor: 'rgba(0, 0, 0, 0)'
        });
        await (0, _testHelpers.click)('.oss-side-panel__backdrop');
        assert.ok(this.onClose.calledOnce, 'Clicked on the transparent backdrop so the side panel closes.');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/side-panel/header-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/side-panel/header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onClose = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} />
      */
      {
        "id": "YCNpInp4",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@onClose\"],[\"Sidepanel header\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel/header\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel/header-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-side-panel__header__content').exists();
    });
    (0, _qunit.test)('Clicking on the close button triggers the @onClose callback', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} />
      */
      {
        "id": "YCNpInp4",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@onClose\"],[\"Sidepanel header\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel/header\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel/header-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.fa-times').exists();
      await (0, _testHelpers.click)('.fa-times');
      assert.ok(this.onClose.calledOnce, 'Clicked on the close button so the side panel closes.');
    });
    (0, _qunit.module)('Return arrow button', function (hooks) {
      hooks.beforeEach(function () {
        this.onReturn = _sinon.default.stub();
      });
      (0, _qunit.test)('When @onReturn is truthy, it displays the return arrow button', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} @onReturn={{this.onReturn}} />
        */
        {
          "id": "rdTkB9U1",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@onClose\",\"@onReturn\"],[\"Sidepanel header\",[30,0,[\"onClose\"]],[30,0,[\"onReturn\"]]]],null]],[],false,[\"o-s-s/side-panel/header\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel/header-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.fa-arrow-left').exists();
      });
      (0, _qunit.test)('When @onReturn is falsy, it does not display the return arrow button', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} />
        */
        {
          "id": "YCNpInp4",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@onClose\"],[\"Sidepanel header\",[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/side-panel/header\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel/header-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.fa-arrow-left').doesNotExist();
      });
      (0, _qunit.test)('When the return button is clicked, @onReturn is called once', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SidePanel::Header @title="Sidepanel header" @onClose={{this.onClose}} @onReturn={{this.onReturn}} />
        */
        {
          "id": "rdTkB9U1",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@onClose\",\"@onReturn\"],[\"Sidepanel header\",[30,0,[\"onClose\"]],[30,0,[\"onReturn\"]]]],null]],[],false,[\"o-s-s/side-panel/header\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/side-panel/header-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.fa-arrow-left');
        assert.ok(this.onReturn.calledOnce, 'Clicked on the return button so the side panel closes.');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/skeleton-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/skeleton', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Skeleton/>
      */
      {
        "id": "8G+ewZzN",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-skeleton-effect').exists();
    });
    (0, _qunit.module)('@height parameters', () => {
      (0, _qunit.test)('Default height', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton/>
        */
        {
          "id": "8G+ewZzN",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-skeleton-effect').hasStyle({
          height: '36px'
        });
      });
      (0, _qunit.test)('The style height should correspond to parameter value', async function (assert) {
        this.height = 400;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @height={{this.height}}/>
        */
        {
          "id": "EQdDlkjv",
          "block": "[[[8,[39,0],null,[[\"@height\"],[[30,0,[\"height\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-skeleton-effect').hasStyle({
          height: '400px'
        });
      });
      (0, _qunit.test)('The style percentage height should correspond to parameter value', async function (assert) {
        this.height = '100%';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div style="height:250px"><OSS::Skeleton @height={{this.height}}/></div>
        */
        {
          "id": "mw9prhyQ",
          "block": "[[[10,0],[14,5,\"height:250px\"],[12],[8,[39,0],null,[[\"@height\"],[[30,0,[\"height\"]]]],null],[13]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-skeleton-effect').hasStyle({
          height: '250px'
        });
      });
    });
    (0, _qunit.module)('@width parameters', () => {
      (0, _qunit.test)('Default width', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton/>
        */
        {
          "id": "8G+ewZzN",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-skeleton-effect').hasStyle({
          width: '36px'
        });
      });
      (0, _qunit.test)('The style width should correspond to parameter value', async function (assert) {
        this.width = 400;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @width={{this.width}}/>
        */
        {
          "id": "n9W2Z6z5",
          "block": "[[[8,[39,0],null,[[\"@width\"],[[30,0,[\"width\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-skeleton-effect').hasStyle({
          width: '400px'
        });
      });
      (0, _qunit.test)('The style percentage width should correspond to parameter value', async function (assert) {
        this.width = '100%';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div style="width:250px"><OSS::Skeleton @width={{this.width}}/></div>
        */
        {
          "id": "Mk3S7zHG",
          "block": "[[[10,0],[14,5,\"width:250px\"],[12],[8,[39,0],null,[[\"@width\"],[[30,0,[\"width\"]]]],null],[13]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-skeleton-effect').hasStyle({
          width: '250px'
        });
      });
    });
    (0, _qunit.module)('@gap parameters', () => {
      (0, _qunit.test)('Default gap', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @multiple={{2}} />
        */
        {
          "id": "e3rmOTcm",
          "block": "[[[8,[39,0],null,[[\"@multiple\"],[2]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.fx-1').hasClass('fx-gap-px-9');
      });
      (0, _qunit.test)('The has class corresponding to gap', async function (assert) {
        this.gap = 12;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @gap={{this.gap}} @multiple={{2}} />
        */
        {
          "id": "B6EDZiuu",
          "block": "[[[8,[39,0],null,[[\"@gap\",\"@multiple\"],[[30,0,[\"gap\"]],2]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.fx-1').hasClass('fx-gap-px-12');
      });
    });
    (0, _qunit.module)('@multiple parameters', () => {
      (0, _qunit.test)('Default has one skeleton effect', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton/>
        */
        {
          "id": "8G+ewZzN",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        let items = (0, _testHelpers.findAll)('.upf-skeleton-effect');
        assert.ok(items.length === 1);
      });
      (0, _qunit.test)('The content has multiple skeleton effect', async function (assert) {
        this.multiple = 4;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @multiple={{this.multiple}}/>
        */
        {
          "id": "m88JA9UQ",
          "block": "[[[8,[39,0],null,[[\"@multiple\"],[[30,0,[\"multiple\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        let items = (0, _testHelpers.findAll)('.upf-skeleton-effect');
        assert.ok(items.length === 4);
      });
    });
    (0, _qunit.module)('@randomize parameters', hooks => {
      hooks.beforeEach(function () {
        this.multiple = 4;
        this.width = 200;
      });
      (0, _qunit.test)('Default randomize is false', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @width={{this.width}}/>
        */
        {
          "id": "n9W2Z6z5",
          "block": "[[[8,[39,0],null,[[\"@width\"],[[30,0,[\"width\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        let item = (0, _testHelpers.find)('.upf-skeleton-effect');
        assert.ok(this.width == item?.offsetWidth);
      });
      (0, _qunit.test)('Randomize width is within a 15% range', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @multiple={{this.multiple}} @width={{this.width}} @randomize={{true}}/>
        */
        {
          "id": "tzIFplKr",
          "block": "[[[8,[39,0],null,[[\"@multiple\",\"@width\",\"@randomize\"],[[30,0,[\"multiple\"]],[30,0,[\"width\"]],true]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        let item = (0, _testHelpers.find)('.upf-skeleton-effect');
        assert.ok(item.offsetWidth <= 230 && item.offsetWidth >= 170);
      });
    });
    (0, _qunit.test)('@direction default value is row', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Skeleton @multiple="3" />
      */
      {
        "id": "k5oTU4vI",
        "block": "[[[8,[39,0],null,[[\"@multiple\"],[\"3\"]],null]],[],false,[\"o-s-s/skeleton\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.fx-1').hasClass(`fx-row`);
    });
    (0, _qunit.test)('@direction value is column if specified', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Skeleton @direction="column" @multiple="2" />
      */
      {
        "id": "G6S+iexL",
        "block": "[[[8,[39,0],null,[[\"@direction\",\"@multiple\"],[\"column\",\"2\"]],null]],[],false,[\"o-s-s/skeleton\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.fx-1').hasClass(`fx-col`);
    });
    (0, _qunit.module)('Extra attributes', () => {
      (0, _qunit.test)('passing an extra class is applied to the component', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton class="my-extra-class" />
        */
        {
          "id": "mbIjNTeS",
          "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.my-extra-class').exists();
      });
      (0, _qunit.test)('passing data-control-name works', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton data-control-name="layout-sidebar" />
        */
        {
          "id": "utaVmdRx",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"layout-sidebar\"]],null,null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
        let inputWrapper = (0, _testHelpers.find)('.upf-skeleton-effect');
        assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
      });
    });
    (0, _qunit.module)('Error management', () => {
      (0, _qunit.test)('it throws an error if @direct is provided and does not match required values', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::Skeleton] The @direction argument should be a value of row,column,col');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Skeleton @direction="toto"/>
        */
        {
          "id": "zMng0IOn",
          "block": "[[[8,[39,0],null,[[\"@direction\"],[\"toto\"]],null]],[],false,[\"o-s-s/skeleton\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/skeleton-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/slider-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/slider', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.value = 10;
      this.min = 0;
      this.max = 100;
      this.step = 1;
      this.displayInputValue = true;
      this.unit = 'percentage';
      this.onChange = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
      */
      {
        "id": "kJwFiQCH",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-slider__container .oss-slider__range-container').exists();
    });
    (0, _qunit.test)('it renders the slider as disabled when @disabled is truthy', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @disabled={{true}} @onChange={{this.onChange}} />
      */
      {
        "id": "SgGWwzUz",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@disabled\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-slider__container--disabled .oss-slider__range').isDisabled();
    });
    (0, _qunit.test)('it renders the number input as disabled when @disabled is truthy', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @disabled={{true}} @onChange={{this.onChange}} />
      */
      {
        "id": "SgGWwzUz",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@disabled\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-slider__number-input input').isDisabled();
    });
    (0, _qunit.test)('it renders with a specific tooltip label when specified', async function (assert) {
      this.tooltipLabel = 'this is a specific tooltip label';
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Slider @value={{this.value}} @tooltipLabel={{this.tooltipLabel}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @disabled={{true}} @onChange={{this.onChange}} />
      */
      {
        "id": "e/XISNKy",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@tooltipLabel\",\"@displayInputValue\",\"@unit\",\"@disabled\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"tooltipLabel\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-slider__tooltip').hasText(this.tooltipLabel);
    });
    (0, _qunit.module)('for the slider width', () => {
      (0, _qunit.test)('it renders it properly', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
        */
        {
          "id": "kJwFiQCH",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        const element = this.element.querySelector('.oss-slider__range');
        assert.dom(element).exists();
        assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '10%');
      });
      (0, _qunit.module)('with @step', () => {
        (0, _qunit.test)('it renders it properly with the value rounded down', async function (assert) {
          this.value = '14';
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Slider @step={{10}} @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
          */
          {
            "id": "qUYo0VUy",
            "block": "[[[8,[39,0],null,[[\"@step\",\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[10,[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
            "isStrictMode": false
          }));
          const element = this.element.querySelector('.oss-slider__range');
          assert.dom(element).exists();
          assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '10%');
        });
        (0, _qunit.test)('it renders it properly with the value rounded up', async function (assert) {
          this.value = '16';
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::Slider @step={{10}} @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
          */
          {
            "id": "qUYo0VUy",
            "block": "[[[8,[39,0],null,[[\"@step\",\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[10,[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
            "isStrictMode": false
          }));
          const element = this.element.querySelector('.oss-slider__range');
          assert.dom(element).exists();
          assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '20%');
        });
      });
    });
    (0, _qunit.test)('the tooltip has the proper value', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
      */
      {
        "id": "kJwFiQCH",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-slider__tooltip').hasText('10%');
    });
    (0, _qunit.test)('the tooltip is rendered without unit when @unit is not provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @onChange={{this.onChange}} />
      */
      {
        "id": "W7p+PbkJ",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-slider__tooltip').hasText('10');
    });
    (0, _qunit.module)('for @defaultValue', hooks => {
      hooks.beforeEach(function () {
        this.value = null;
      });
      (0, _qunit.test)('when it is defined, it renders the correct value & placeholder', async function (assert) {
        this.defaultValue = '20';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @defaultValue={{this.defaultValue}} @displayInputValue={{this.displayInputValue}} @onChange={{this.onChange}} />
        */
        {
          "id": "pjGx5Ab4",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@defaultValue\",\"@displayInputValue\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"defaultValue\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-slider__range').hasValue('20');
        assert.dom('.oss-slider__number-input input').hasValue('');
        assert.dom('.oss-slider__number-input input').hasAttribute('placeholder', '20');
      });
      (0, _qunit.test)('when it is undefined, it renders the correct value & placeholder', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @onChange={{this.onChange}} />
        */
        {
          "id": "W7p+PbkJ",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-slider__range').hasValue('50');
        assert.dom('.oss-slider__number-input input').hasValue('');
        assert.dom('.oss-slider__number-input input').hasAttribute('placeholder', '50');
      });
    });
    (0, _qunit.module)('for @inputOptions', hooks => {
      hooks.beforeEach(function () {
        this.value = null;
      });
      (0, _qunit.test)("when the min is defined, the user can't set value under the minimum", async function (assert) {
        this.inputOptions = {
          min: 20
        };
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @inputOptions={{this.inputOptions}} @displayInputValue={{this.displayInputValue}} @onChange={{this.onChange}} />
        */
        {
          "id": "88fM5TYk",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@inputOptions\",\"@displayInputValue\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"inputOptions\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.fillIn)('.oss-slider__number-input input', '10');
        assert.ok(this.onChange.calledWith(20));
      });
      (0, _qunit.test)("when the min is defined, the user can't set value under the minimum", async function (assert) {
        this.inputOptions = {
          max: 20
        };
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @inputOptions={{this.inputOptions}} @displayInputValue={{this.displayInputValue}} @onChange={{this.onChange}} />
        */
        {
          "id": "88fM5TYk",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@inputOptions\",\"@displayInputValue\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"inputOptions\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.fillIn)('.oss-slider__number-input input', '30');
        assert.ok(this.onChange.calledWith(20));
      });
    });
    (0, _qunit.test)('the @onChange method is called with the proper value', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
      */
      {
        "id": "kJwFiQCH",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.fillIn)('.oss-slider__number-input input', '36');
      assert.ok(this.onChange.calledWith(36));
    });
    (0, _qunit.module)('value number input', function () {
      (0, _qunit.test)('it renders the number input when @displayInputValue is truthy', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
        */
        {
          "id": "kJwFiQCH",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-slider__number-input').exists();
      });
      (0, _qunit.test)('it renders the slider with a value of 0 when @value is not a number', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
        */
        {
          "id": "kJwFiQCH",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.fillIn)('.oss-slider__number-input input', '');
        assert.dom('.oss-slider__number-input').exists().hasText('');
        const element = this.element.querySelector('.oss-slider__range');
        assert.dom(element).exists();
        assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '0%');
      });
      (0, _qunit.test)('it does not render the number input when @displayInputValue is falsy', async function (assert) {
        this.displayInputValue = false;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
        */
        {
          "id": "kJwFiQCH",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-slider__number-input').doesNotExist();
      });
    });
    (0, _qunit.module)('Unit container', function () {
      (0, _qunit.test)('it does not render the unit container if @unit is undefined', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} />
        */
        {
          "id": "Wm1zvo+E",
          "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-slider__unit-container').doesNotExist();
      });
      (0, _qunit.test)('it does not render the unit container if @displayInputValue is falsy', async function (assert) {
        this.displayInputValue = false;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
        */
        {
          "id": "kJwFiQCH",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-slider__unit-container').doesNotExist();
      });
      (0, _qunit.test)('it renders the unit container with the proper unit when @unit is defined', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{this.displayInputValue}} @unit={{this.unit}} @onChange={{this.onChange}} />
        */
        {
          "id": "kJwFiQCH",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"displayInputValue\"]],[30,0,[\"unit\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-slider__number-input .fa-percent').exists();
      });
    });
    (0, _qunit.module)('slider option args', function () {
      (0, _qunit.test)('it renders the slider with a minimum value when @min is provided', async function (assert) {
        this.min = 30;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{true}} @min={{this.min}} @max={{this.max}} @step={{this.step}} @onChange={{this.onChange}} />
        */
        {
          "id": "6/FnGORp",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@min\",\"@max\",\"@step\",\"@onChange\"],[[30,0,[\"value\"]],true,[30,0,[\"min\"]],[30,0,[\"max\"]],[30,0,[\"step\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.fillIn)('.oss-slider__number-input input', '30');
        assert.equal(this.min, this.value);
        const element = this.element.querySelector('.oss-slider__range');
        assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '0%');
      });
      (0, _qunit.test)('it renders the slider with a maximum value when @min is provided', async function (assert) {
        this.max = 1000;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Slider @value={{this.value}} @displayInputValue={{true}} @min={{this.min}} @max={{this.max}} @step={{this.step}} @unit="percentage" @onChange={{this.onChange}} />
        */
        {
          "id": "vAjyBru4",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@displayInputValue\",\"@min\",\"@max\",\"@step\",\"@unit\",\"@onChange\"],[[30,0,[\"value\"]],true,[30,0,[\"min\"]],[30,0,[\"max\"]],[30,0,[\"step\"]],\"percentage\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/slider\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/slider-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.fillIn)('.oss-slider__number-input input', '1000');
        const element = this.element.querySelector('.oss-slider__range');
        assert.strictEqual(element.style.getPropertyValue('--range-percentage'), '100%');
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/social-post-badge-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  const ICONS_MATCHING = {
    article: '.fab.fa-wordpress',
    facebook_status: '.fab.fa-facebook-f',
    instagram_media: '.fab.fa-instagram',
    tiktok_video: '.fab.fa-tiktok',
    story: '.far.fa-circle-notch',
    tweet: '.fab.fa-x-twitter',
    pin: '.fab.fa-pinterest',
    youtube_video: '.fab.fa-youtube',
    twitch_stream: '.fab.fa-twitch'
  };
  const IMG_MATCHING = {
    instagram_reel: 'instagram-reel.svg',
    youtube_short: 'youtube-short.svg'
  };
  (0, _qunit.module)('Integration | Component | o-s-s/social-post-badge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.postType = 'pin';
      this.plain = false;
      this.selected = false;
      this.onToggle = () => {
        this.plain = !this.plain;
        this.selected = !this.selected;
      };
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
      */
      {
        "id": "Cs38LvDS",
        "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-social-post-badge').exists();
    });
    Object.keys(ICONS_MATCHING).forEach(media => {
      (0, _qunit.test)(`for ${media}, it renders the correct icon`, async function (assert) {
        this.postType = media;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "Cs38LvDS",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom(`.oss-social-post-badge i${ICONS_MATCHING[media]}`).exists();
      });
    });
    Object.keys(IMG_MATCHING).forEach(media => {
      (0, _qunit.test)(`for ${media}, it renders the correct image`, async function (assert) {
        this.postType = media;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "Cs38LvDS",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-social-post-badge img').hasAttribute('src', `/@upfluence/oss-components/assets/icons/${IMG_MATCHING[media]}`);
      });
    });
    (0, _qunit.module)('@plain', () => {
      (0, _qunit.test)('When @plain is not set class is not added', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "I+gLuD/u",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-social-post-badge').hasNoClass('oss-social-post-badge--plain');
      });
      (0, _qunit.test)('When @plain is true class is added', async function (assert) {
        this.plain = true;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "Cs38LvDS",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-social-post-badge').hasClass('oss-social-post-badge--plain');
      });
    });
    (0, _qunit.module)('@selected', () => {
      (0, _qunit.test)('When @selected is not set class is not added', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "HfEqwFcS",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-social-post-badge').hasNoClass('oss-social-post-badge--selected');
      });
      (0, _qunit.test)('When @selected is true class is added', async function (assert) {
        this.selected = true;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "Cs38LvDS",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-social-post-badge').hasClass('oss-social-post-badge--selected');
      });
    });
    (0, _qunit.module)('When clicking on an item', () => {
      (0, _qunit.test)('Then the @onToggle method is triggered', async function (assert) {
        this.postType = 'facebook_status';
        this.onToggle = _sinon.default.spy();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "Cs38LvDS",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-social-post-badge');
        assert.ok(this.onToggle.calledWith('facebook_status'));
      });
    });
    (0, _qunit.module)('error management', () => {
      (0, _qunit.test)('it throws an error if @selectedToggle is not provided', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::SocialPostBadge] The @postType parameter of type String is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "2qs28jxY",
          "block": "[[[8,[39,0],null,[[\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if @postType is not a value of SocialPostType', async function (assert) {
        this.postType = 'toto';
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::SocialPostBadge] The @postType parameter should be a value of SocialPostType');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
        */
        {
          "id": "Cs38LvDS",
          "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/social-post-badge-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/split-modal-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/split-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.closeModal = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('closeModal', _sinon.default.stub());
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SplitModal @close={{this.closeModal}} />
      */
      {
        "id": "ZuYIMZKb",
        "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],null]],[],false,[\"o-s-s/split-modal\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.split-modal').exists();
    });
    (0, _qunit.test)('The cross button at the top right of the modal closes the modal', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SplitModal @close={{this.closeModal}} />
      */
      {
        "id": "ZuYIMZKb",
        "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],null]],[],false,[\"o-s-s/split-modal\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.fa-times');
      assert.ok(this.closeModal.calledOnce);
    });
    (0, _qunit.test)('The content named-block is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::SplitModal @close={{this.closeModal}}>
              <:content>
                <p>This is the content</p>
              </:content>
            </OSS::SplitModal>
      */
      {
        "id": "LJKcwIJ6",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"content\"],[[[[1,\"\\n          \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog--content').hasText('This is the content');
    });
    (0, _qunit.test)('The footer named-block is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::SplitModal @close={{this.closeModal}}>
              <:footer>
                footer content
              </:footer>
            </OSS::SplitModal>
      */
      {
        "id": "PIohdi+d",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"footer\"],[[[[1,\"\\n          footer content\\n        \"]],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-modal-dialog footer').hasText('footer content');
    });
    (0, _qunit.test)('The preview named-block is properly displayed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <OSS::SplitModal @close={{this.closeModal}}>
              <:preview>
                preview content
              </:preview>
            </OSS::SplitModal>
      */
      {
        "id": "Hc5+hdbT",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"preview\"],[[[[1,\"\\n          preview content\\n        \"]],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.split-modal__preview').hasText('preview content');
    });
    (0, _qunit.test)('When the escape button is triggered, the modal is closed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::SplitModal @close={{this.closeModal}}></OSS::SplitModal>
      */
      {
        "id": "UMaxA6C/",
        "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerKeyEvent)('.oss-modal-dialog', 'keyup', 27);
      assert.true(this.closeModal.calledOnce);
    });
    (0, _qunit.module)('Clicking outside', function () {
      (0, _qunit.test)('It triggers the close action', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SplitModal @close={{this.closeModal}}></OSS::SplitModal>
        */
        {
          "id": "UMaxA6C/",
          "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.closeModal.notCalled);
        await (0, _testHelpers.click)('.oss-modal-dialog-backdrop');
        assert.ok(this.closeModal.calledOnce);
      });
      (0, _qunit.test)('If the disableClickOutside parameter is truthy, it does not trigger the close action', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SplitModal @close={{this.closeModal}} @disableClickOutside={{true}}></OSS::SplitModal>
        */
        {
          "id": "oeabTqOw",
          "block": "[[[8,[39,0],null,[[\"@close\",\"@disableClickOutside\"],[[30,0,[\"closeModal\"]],true]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
          "isStrictMode": false
        }));
        assert.ok(this.closeModal.notCalled);
        await (0, _testHelpers.click)('.oss-modal-dialog-backdrop');
        assert.ok(this.closeModal.notCalled);
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('The component throws an error if the close parameter is not passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::SplitModal] The close function is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::SplitModal />
        */
        {
          "id": "uSQFSOEr",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/split-modal\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/split-modal-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/star-rating-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/star-rating", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _starRating, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@upfluence/oss-components/components/o-s-s/star-rating",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/star-rating', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::StarRating @rating={{3}} @totalStars={{5}} />
      */
      {
        "id": "by7JWcv1",
        "block": "[[[8,[39,0],null,[[\"@rating\",\"@totalStars\"],[3,5]],null]],[],false,[\"o-s-s/star-rating\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/star-rating-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.star-rating').exists();
    });
    for (const starColor in _starRating.StarColor) {
      (0, _qunit.test)('Passing @activeColor, @passiveColor & @activeStyle applies the correct classes to the component', async function (assert) {
        this.activeColor = starColor;
        this.passiveColor = starColor;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::StarRating @rating={{5}} @totalStars={{8}}
                                                @activeColor={{this.activeColor}}
                                                @passiveStyle='regular'
                                                @passiveColor={{this.passiveColor}} />
        */
        {
          "id": "las3PimQ",
          "block": "[[[8,[39,0],null,[[\"@rating\",\"@totalStars\",\"@activeColor\",\"@passiveStyle\",\"@passiveColor\"],[5,8,[30,0,[\"activeColor\"]],\"regular\",[30,0,[\"passiveColor\"]]]],null]],[],false,[\"o-s-s/star-rating\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/star-rating-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.fas').hasClass(`color-${starColor}`);
        assert.dom('.far').hasClass(`color-${starColor}`);
      });
    }
    (0, _qunit.test)('The number of stars displayed is consistent with the provided @rating', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::StarRating @rating={{3}} @totalStars={{8}} @passiveStyle='regular'
                                            @activeColor={{this.activeColor}}
                                            @passiveColor={{this.passiveColor}} />
      */
      {
        "id": "AWYeniZB",
        "block": "[[[8,[39,0],null,[[\"@rating\",\"@totalStars\",\"@passiveStyle\",\"@activeColor\",\"@passiveColor\"],[3,8,\"regular\",[30,0,[\"activeColor\"]],[30,0,[\"passiveColor\"]]]],null]],[],false,[\"o-s-s/star-rating\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/star-rating-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.fas.fa-star.color-yellow').exists({
        count: 3
      });
    });
    (0, _qunit.test)('When @onChange parameter is passed, the method is called when a click is made on a star', async function (assert) {
      this.onChange = _sinon.default.stub();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::StarRating @rating={{3}} @totalStars={{8}} @passiveStyle='regular'
                                            @activeColor={{this.activeColor}}
                                            @passiveColor={{this.passiveColor}}
                                            @onChange={{this.onChange}} />
      */
      {
        "id": "VEXBfCoW",
        "block": "[[[8,[39,0],null,[[\"@rating\",\"@totalStars\",\"@passiveStyle\",\"@activeColor\",\"@passiveColor\",\"@onChange\"],[3,8,\"regular\",[30,0,[\"activeColor\"]],[30,0,[\"passiveColor\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/star-rating\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/star-rating-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.fa-star:nth-of-type(4)');
      assert.true(this.onChange.calledOnceWithExactly(4));
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('failing to pass @rating throws an error', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::StarRating] @rating argument is mandatory and must be a number');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::StarRating @totalStars={{5}} />
        */
        {
          "id": "+9lJ8bvR",
          "block": "[[[8,[39,0],null,[[\"@totalStars\"],[5]],null]],[],false,[\"o-s-s/star-rating\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/star-rating-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('failing to pass @totalStart throws an error', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::StarRating] @totalStars argument is mandatory and must be a number');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::StarRating @rating={{5}} />
        */
        {
          "id": "IAGwII3O",
          "block": "[[[8,[39,0],null,[[\"@rating\"],[5]],null]],[],false,[\"o-s-s/star-rating\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/star-rating-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/tag-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/tag", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _tag, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@upfluence/oss-components/components/o-s-s/tag"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Tag @label='test' />
      */
      {
        "id": "GVNxoePS",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"test\"]],null]],[],false,[\"o-s-s/tag\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-tag').exists();
    });
    (0, _qunit.test)('it renders the proper label when @label is passed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Tag @label="Test" />
      */
      {
        "id": "EEjkGOUp",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"Test\"]],null]],[],false,[\"o-s-s/tag\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-tag').exists({
        count: 1
      });
      assert.dom('.upf-tag').hasText('Test');
    });
    (0, _qunit.test)('it renders the proper icon when @icon is passed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Tag @icon="far fa-thumbs-up" />
      */
      {
        "id": "dMTcX4VR",
        "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-thumbs-up\"]],null]],[],false,[\"o-s-s/tag\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-tag').exists({
        count: 1
      });
      assert.dom('.upf-tag i').hasClass('fa-thumbs-up');
    });
    (0, _qunit.test)('it renders the proper suffix icon when @suffixIcon is passed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Tag @icon="far fa-thumbs-up" @suffixIcon="far fa-arrow-trend-up" />
      */
      {
        "id": "PAHsX9z1",
        "block": "[[[8,[39,0],null,[[\"@icon\",\"@suffixIcon\"],[\"far fa-thumbs-up\",\"far fa-arrow-trend-up\"]],null]],[],false,[\"o-s-s/tag\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-tag i').exists({
        count: 2
      });
      assert.dom('.upf-tag i:first-child').hasClass('fa-thumbs-up');
      assert.dom('.upf-tag i:last-child').hasClass('fa-arrow-trend-up');
    });
    (0, _qunit.module)('@plain', () => {
      (0, _qunit.test)('the right class is applied on the tag', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Tag @icon="far fa-thumbs-up" @plain={{true}} />
        */
        {
          "id": "Oo1Z4yBU",
          "block": "[[[8,[39,0],null,[[\"@icon\",\"@plain\"],[\"far fa-thumbs-up\",true]],null]],[],false,[\"o-s-s/tag\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-tag').hasClass('upf-tag--plain');
      });
    });
    (0, _qunit.module)('@hasEllipsis', () => {
      (0, _qunit.test)('When the param is true then the ellipsis is shown', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Tag @label='Test with a huge label sentence' @hasEllipsis='true' />
        */
        {
          "id": "xSy2UeLC",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@hasEllipsis\"],[\"Test with a huge label sentence\",\"true\"]],null]],[],false,[\"o-s-s/tag\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-tag').exists({
          count: 1
        });
        assert.dom('.upf-tag span').hasStyle({
          maxWidth: '80px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        });
      });
      (0, _qunit.test)('When the param is false then the ellipsis is shown', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Tag @label='Test with a huge label sentence' />
        */
        {
          "id": "Vq8P7YXF",
          "block": "[[[8,[39,0],null,[[\"@label\"],[\"Test with a huge label sentence\"]],null]],[],false,[\"o-s-s/tag\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-tag').exists({
          count: 1
        });
        assert.dom('.upf-tag span').doesNotExist();
        assert.dom('.upf-tag').hasText('Test with a huge label sentence');
      });
    });
    (0, _qunit.module)('@htmlSafe', () => {
      (0, _qunit.test)('Setting the param to true allows html to be rendered in the @label', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Tag @label='<div class="custom-html">Text content</div>' @htmlSafe={{true}} />
        */
        {
          "id": "praHzhI0",
          "block": "[[[8,[39,0],null,[[\"@label\",\"@htmlSafe\"],[\"<div class=\\\"custom-html\\\">Text content</div>\",true]],null]],[],false,[\"o-s-s/tag\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-tag .custom-html').hasText('Text content');
      });
      (0, _qunit.test)('When the param is falsy, html content is rendered as basic string', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Tag @label='<div class="custom-html">Text content</div>' />
        */
        {
          "id": "/22BdB3k",
          "block": "[[[8,[39,0],null,[[\"@label\"],[\"<div class=\\\"custom-html\\\">Text content</div>\"]],null]],[],false,[\"o-s-s/tag\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-tag .custom-html').doesNotExist();
        assert.dom('.upf-tag').hasText('<div class="custom-html">Text content</div>');
      });
    });
    Object.keys(_tag.SkinDefinition).forEach(skin => {
      (0, _qunit.test)(`it sets the right class when using a supported skin: ${skin}`, async function (assert) {
        this.skin = skin;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::Tag @skin={{this.skin}} @label="Test Skin" />
        */
        {
          "id": "5lw5M0c/",
          "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[[30,0,[\"skin\"]],\"Test Skin\"]],null]],[],false,[\"o-s-s/tag\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-tag').exists();
        assert.dom('.upf-tag').hasClass(`upf-tag--${_tag.SkinDefinition[this.skin]}`);
      });
    });
    (0, _qunit.test)('it properly sets up the xs size', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Tag @skin={{this.skin}} @label="Test Skin" @size="xs" />
      */
      {
        "id": "gn5gy+1o",
        "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\",\"@size\"],[[30,0,[\"skin\"]],\"Test Skin\",\"xs\"]],null]],[],false,[\"o-s-s/tag\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-tag').exists();
      assert.dom('.upf-tag').hasClass('upf-tag--xs');
    });
    (0, _qunit.test)('it fails if @label and @icon are missing', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::Tag] You must pass either a @label or an @icon argument.');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::Tag />
      */
      {
        "id": "5R7RxC5I",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/tag\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/tag-test.ts",
        "isStrictMode": false
      }));
    });
  });
});
define("dummy/tests/integration/components/o-s-s/text-area-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/text-area', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.value = 'Data';
      this.textareaSelector = '.oss-textarea-container  .oss-textarea';
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TextArea @label='test' />
      */
      {
        "id": "DPMltvEh",
        "block": "[[[8,[39,0],null,[[\"@label\"],[\"test\"]],null]],[],false,[\"o-s-s/text-area\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-textarea-container').exists();
    });
    (0, _qunit.module)('@resize', function () {
      (0, _qunit.test)('Default has no class resize', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea />
        */
        {
          "id": "Hw2OU7Sd",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
      });
      (0, _qunit.test)('When resize is vertical should have class resize-v', async function (assert) {
        this.resize = 'vertical';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea @resize={{this.resize}}/>
        */
        {
          "id": "lYnkb64E",
          "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-v');
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
      });
      (0, _qunit.test)('When resize is horizontal should have class resize-h', async function (assert) {
        this.resize = 'horizontal';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea @resize={{this.resize}}/>
        */
        {
          "id": "lYnkb64E",
          "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
        assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-h');
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');
      });
      (0, _qunit.test)('When resize is none should have class resize-none', async function (assert) {
        this.resize = 'none';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea @resize={{this.resize}}/>
        */
        {
          "id": "lYnkb64E",
          "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
        assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
        assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-none');
      });
    });
    (0, _qunit.module)('@rows', function () {
      (0, _qunit.test)('Default height', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea />
        */
        {
          "id": "Hw2OU7Sd",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        assert.equal(document.querySelector(this.textareaSelector).offsetHeight, 52);
      });
      (0, _qunit.test)('Row change height', async function (assert) {
        this.rows = 2;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea @rows={{this.rows}}/>
        */
        {
          "id": "miYg1Lxx",
          "block": "[[[8,[39,0],null,[[\"@rows\"],[[30,0,[\"rows\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        const twoRowHeight = document.querySelector(this.textareaSelector).offsetHeight;
        assert.ok(twoRowHeight > 36);
        await this.set('rows', 8);
        const heightRowHeight = document.querySelector(this.textareaSelector).offsetHeight;
        assert.ok(heightRowHeight > twoRowHeight);
      });
    });
    (0, _qunit.test)('When the field is updated, the @onChange method is called', async function (assert) {
      this.onChange = _sinon.default.spy();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TextArea @value={{this.value}} @onChange={{this.onChange}}/>
      */
      {
        "id": "Z+bMN0vQ",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.typeIn)(this.textareaSelector, 'b');
      assert.ok(this.onChange.calledOnceWithExactly('Datab'));
    });
    (0, _qunit.module)('Extra attributes', () => {
      (0, _qunit.test)('passing an extra class is applied to the component', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea class="my-extra-class" />
        */
        {
          "id": "7FEXKtip",
          "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.my-extra-class').exists();
      });
      (0, _qunit.test)('passing data-control-name works', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea data-control-name="description-input" />
        */
        {
          "id": "eP7HXLDR",
          "block": "[[[8,[39,0],[[24,\"data-control-name\",\"description-input\"]],null,null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
        let inputWrapper = document.querySelector('.oss-textarea-container');
        assert.equal(inputWrapper?.getAttribute('data-control-name'), 'description-input');
      });
    });
    (0, _qunit.module)('error management', () => {
      (0, _qunit.test)('it throws an error if @resize is not a correct value', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::TextArea] The @resize parameter should be a value of resize');
        });
        this.resize = 'NotACorrectValue';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TextArea @resize={{this.resize}} />
        */
        {
          "id": "lYnkb64E",
          "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/text-area-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/togglable-section-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/object", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _object, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"@ember/object",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/togglable-section', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.iconUrl = 'https://fr.wikipedia.org/wiki/Fichier:How_to_use_icon.svg';
      this.title = 'Fake title';
      this.subtitle = 'Some subtitle contents. Some subtitle contents. Some subtitle contents.';
      this.toggled = false;
      this.onChange = value => {
        (0, _object.set)(this, 'toggled', value);
      };
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                  @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                  @onChange={{this.onChange}} />
      */
      {
        "id": "XS9TTW/N",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@toggled\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.togglable-section').exists();
    });
    (0, _qunit.test)('It throws an error if the @title param is not passed', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @title parameter is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @subtitle={{this.subtitle}}
                                                       @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                       @onChange={{this.onChange}} />
      */
      {
        "id": "5NW5HEz3",
        "block": "[[[8,[39,0],null,[[\"@subtitle\",\"@iconUrl\",\"@toggled\",\"@onChange\"],[[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
    });
    (0, _qunit.test)('It throws an error if the @toggled param is not passed', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @toggled parameter is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                       @iconUrl={{this.iconUrl}}
                                                       @onChange={{this.onChange}} />
      */
      {
        "id": "/FcaqkvR",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
    });
    (0, _qunit.test)('It throws an error if the @onChange function is not passed', async function (assert) {
      (0, _testHelpers.setupOnerror)(err => {
        assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @onChange function is mandatory');
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                       @iconUrl={{this.iconUrl}} @toggled={{this.toggled}} />
      */
      {
        "id": "HBF3PmKZ",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@toggled\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
    });
    (0, _qunit.test)('It displays no image if @iconUrl param is not passed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                       @toggled={{this.toggled}}
                                                       @onChange={{this.onChange}} />
      */
      {
        "id": "5YKBnoTE",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@toggled\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom('img').doesNotExist();
    });
    (0, _qunit.test)('It displays a font-awesome icon if the @icon parameter is filled in', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @title="title" @icon="far fa-hourglass" @onChange={{this.onChange}} @toggled={{false}} />
      */
      {
        "id": "gIqxuYft",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@icon\",\"@onChange\",\"@toggled\"],[\"title\",\"far fa-hourglass\",[30,0,[\"onChange\"]],false]],null]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.far.fa-hourglass').exists();
    });
    (0, _qunit.test)('It displays a default badge with an icon if @badgeIcon is passed', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @title="title" @badgeIcon="far fa-hourglass" @onChange={{this.onChange}} @toggled={{false}} />
      */
      {
        "id": "qFSsRhR1",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@badgeIcon\",\"@onChange\",\"@toggled\"],[\"title\",\"far fa-hourglass\",[30,0,[\"onChange\"]],false]],null]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.upf-badge .far.fa-hourglass').exists();
    });
    (0, _qunit.module)('Toggle behavior', () => {
      async function renderComponent() {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                      @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                      @onChange={{this.onChange}}>
                                <:contents>
                                  <div>contents named block</div>
                                </:contents>
                              </OSS::TogglableSection>
        */
        {
          "id": "jOS/1BDv",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@toggled\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],[[\"contents\"],[[[[1,\"\\n                          \"],[10,0],[12],[1,\"contents named block\"],[13],[1,\"\\n                        \"]],[]]]]]],[],false,[\"o-s-s/togglable-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
          "isStrictMode": false
        }));
      }
      (0, _qunit.test)('When the toggle is enabled, the named-block contents are displayed', async function (assert) {
        await renderComponent();
        assert.dom('.togglable-section').doesNotContainText('contents named block');
        await (0, _testHelpers.click)('.upf-toggle');
        assert.dom('.togglable-section').hasTextContaining('contents named block');
      });
      (0, _qunit.test)('When the toggle is enabled, the header part turns grey', async function (assert) {
        await renderComponent();
        assert.dom('.inner-header').doesNotHaveClass('background-color-gray-50');
        await (0, _testHelpers.click)('.upf-toggle');
        assert.dom('.inner-header').hasClass('background-color-gray-50');
      });
      (0, _qunit.test)('When the toggle is disabled, the named-block contents are displayed', async function (assert) {
        this.toggled = true;
        await renderComponent();
        assert.dom('.togglable-section').hasTextContaining('contents named block');
        await (0, _testHelpers.click)('.upf-toggle');
        assert.dom('.togglable-section').doesNotContainText('contents named block');
      });
      (0, _qunit.test)('When the toggle is clicked, the @onChange method is called', async function (assert) {
        this.onChange = _sinon.default.stub();
        await renderComponent();
        await (0, _testHelpers.click)('.upf-toggle');
        assert.true(this.onChange.calledOnceWithExactly(true));
      });
    });
    (0, _qunit.module)('Size behavior', () => {
      (0, _qunit.test)('If the @size param is not passed, the default size is md', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}}>
                  <:contents>
                    <div>contents named block</div>
                  </:contents>
                </OSS::TogglableSection>
        */
        {
          "id": "8psQNTYz",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@toggled\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],[[\"contents\"],[[[[1,\"\\n            \"],[10,0],[12],[1,\"contents named block\"],[13],[1,\"\\n          \"]],[]]]]]],[],false,[\"o-s-s/togglable-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.togglable-section .header-block').hasClass('padding-px-18');
        await (0, _testHelpers.click)('.upf-toggle');
        assert.dom('.togglable-section .content-block').hasClass('padding-px-18');
      });
      (0, _qunit.test)('If the @size param is set to sm, the size is sm', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @size="sm">
                  <:contents>
                    <div>contents named block</div>
                  </:contents>
                </OSS::TogglableSection>
        */
        {
          "id": "CMxVr6bI",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@toggled\",\"@onChange\",\"@size\"],[[30,0,[\"title\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]],\"sm\"]],[[\"contents\"],[[[[1,\"\\n            \"],[10,0],[12],[1,\"contents named block\"],[13],[1,\"\\n          \"]],[]]]]]],[],false,[\"o-s-s/togglable-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.togglable-section .header-block').hasClass('padding-px-12');
        await (0, _testHelpers.click)('.upf-toggle');
        assert.dom('.togglable-section .content-block').hasClass('padding-px-12');
      });
      (0, _qunit.test)('If the @size param is set to md, the size is md', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @size="md">
                  <:contents>
                    <div>contents named block</div>
                  </:contents>
                </OSS::TogglableSection>
        */
        {
          "id": "bTi1nl3o",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@toggled\",\"@onChange\",\"@size\"],[[30,0,[\"title\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]],\"md\"]],[[\"contents\"],[[[[1,\"\\n            \"],[10,0],[12],[1,\"contents named block\"],[13],[1,\"\\n          \"]],[]]]]]],[],false,[\"o-s-s/togglable-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.togglable-section .header-block').hasClass('padding-px-18');
        await (0, _testHelpers.click)('.upf-toggle');
        assert.dom('.togglable-section .content-block').hasClass('padding-px-18');
      });
    });
    (0, _qunit.module)('@Disabled behaviour', () => {
      (0, _qunit.test)('If @disabled is truthy, the toggle is disabled', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{true}} />
        */
        {
          "id": "Pz2dJFmd",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@toggled\",\"@onChange\",\"@disabled\"],[[30,0,[\"title\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]],true]],null]],[],false,[\"o-s-s/togglable-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-toggle').hasClass('upf-toggle--disabled');
      });
      (0, _qunit.test)('If @disabled is falsy, the toggle is enabled', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{false}} />
        */
        {
          "id": "LpmeZJoU",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@toggled\",\"@onChange\",\"@disabled\"],[[30,0,[\"title\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]],false]],null]],[],false,[\"o-s-s/togglable-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-toggle').doesNotHaveClass('upf-toggle--disabled');
      });
      (0, _qunit.test)('If @disabled is truthy, the toggle can still be active', async function (assert) {
        this.toggled = true;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{true}} />
        */
        {
          "id": "Pz2dJFmd",
          "block": "[[[8,[39,0],null,[[\"@title\",\"@toggled\",\"@onChange\",\"@disabled\"],[[30,0,[\"title\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]],true]],null]],[],false,[\"o-s-s/togglable-section\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.upf-toggle').hasClass('upf-toggle--disabled');
        assert.dom('.upf-toggle').hasClass('upf-toggle--toggled');
      });
    });
    (0, _qunit.test)('When `header-actions` named block is passed, the content is rendered in the header', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::TogglableSection @title={{this.title}} @toggled={{this.toggled}} @onChange={{this.onChange}} @disabled={{true}} >
                  <:header-actions>
                    <div data-control-name="action-named-block-content" />
                  </:header-actions>
                </OSS::TogglableSection>
      */
      {
        "id": "zayH7jHX",
        "block": "[[[8,[39,0],null,[[\"@title\",\"@toggled\",\"@onChange\",\"@disabled\"],[[30,0,[\"title\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]],true]],[[\"header-actions\"],[[[[1,\"\\n              \"],[10,0],[14,\"data-control-name\",\"action-named-block-content\"],[12],[13],[1,\"\\n            \"]],[]]]]]],[],false,[\"o-s-s/togglable-section\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/togglable-section-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.togglable-section .header-block [data-control-name="action-named-block-content"]').exists();
    });
  });
});
define("dummy/tests/integration/components/o-s-s/toggle-buttons-test", ["qunit", "ember-qunit", "@ember/object", "@ember/test-helpers", "@ember/test-helpers/settled", "@ember/test-helpers/setup-onerror", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _object, _testHelpers, _settled, _setupOnerror, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/object",0,"@ember/test-helpers",0,"@ember/test-helpers/settled",0,"@ember/test-helpers/setup-onerror",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/toggle-buttons', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.selectedToggle = 'first';
      this.onSelection = value => {
        (0, _object.set)(this, 'selectedToggle', value);
      };
      this.toggles = [{
        value: 'first',
        label: 'First'
      }, {
        value: 'second',
        label: 'Second',
        icon: 'far fa-2'
      }];
    });
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
      */
      {
        "id": "4zYkewO0",
        "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-toggle-buttons-container').exists();
    });
    (0, _qunit.test)('the right class is applied when the @disabled arg is truthy', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}} @disabled={{true}}/>
      */
      {
        "id": "BzTze5Li",
        "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\",\"@disabled\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]],true]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-toggle-buttons-container').exists();
      assert.dom('.oss-toggle-buttons-container').hasClass('oss-toggle-buttons-container--disabled');
    });
    (0, _qunit.test)('the toggle icon is displayed when provided', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
      */
      {
        "id": "4zYkewO0",
        "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-toggle-buttons-btn:first-child i.far').doesNotExist();
      assert.dom('.oss-toggle-buttons-btn:last-child i.far').exists();
      assert.dom('.oss-toggle-buttons-btn:last-child i.far').hasClass('fa-2');
    });
    (0, _qunit.module)('If @selectedToggle is passed', function () {
      (0, _qunit.test)('If the selectedToggle matches an entry from the toggles, then the toggle is set to selected', async function (assert) {
        this.selectedToggle = 'second';
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
        */
        {
          "id": "4zYkewO0",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-toggle-buttons-btn--selected').hasText('Second');
      });
    });
    (0, _qunit.module)('When clicking on an item', () => {
      (0, _qunit.test)('the toggle is selected', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
        */
        {
          "id": "4zYkewO0",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-toggle-buttons-btn:first-child');
        assert.dom('.oss-toggle-buttons-btn--selected').hasText('First');
        await (0, _testHelpers.click)('.oss-toggle-buttons-btn:last-child');
        assert.dom('.oss-toggle-buttons-btn--selected').hasText('Second');
      });
      (0, _qunit.test)('the @onSelection method is not triggered if the item is already selected', async function (assert) {
        this.onSelectionStub = _sinon.default.stub();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @onSelection={{this.onSelectionStub}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
        */
        {
          "id": "F4TJ4o5S",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelectionStub\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-toggle-buttons-btn:first-child');
        assert.ok(this.onSelectionStub.notCalled);
      });
      (0, _qunit.test)('the @onSelection method is not triggered if the component is disabled', async function (assert) {
        this.onSelectionStub = _sinon.default.stub();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @onSelection={{this.onSelectionStub}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}} @disabled={{true}} />
        */
        {
          "id": "AcYeVB5x",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\",\"@disabled\"],[[30,0,[\"onSelectionStub\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]],true]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-toggle-buttons-btn:first-child');
        assert.ok(this.onSelectionStub.notCalled);
      });
      (0, _qunit.test)('the @onSelection method is triggered with the selected value', async function (assert) {
        this.onSelection = _sinon.default.spy();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
        */
        {
          "id": "4zYkewO0",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-toggle-buttons-btn:last-child');
        assert.ok(this.onSelection.calledWith('second'));
      });
    });
    (0, _qunit.module)('Error management', () => {
      (0, _qunit.test)('it throws an error if @toggles is not provided', async function (assert) {
        (0, _setupOnerror.default)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @toggles parameter of type Toggle[] is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @onSelection={{this.onSelection}} @selectedToggle={{this.selectedToggle}}/>
        */
        {
          "id": "uBS5BSIx",
          "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
      (0, _qunit.test)('it throws an error if @onSelection is not provided', async function (assert) {
        (0, _setupOnerror.default)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
        */
        {
          "id": "/0i7s+RT",
          "block": "[[[8,[39,0],null,[[\"@toggles\",\"@selectedToggle\"],[[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
      (0, _qunit.test)('it throws an error if @selectedToggle is not provided', async function (assert) {
        (0, _setupOnerror.default)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @selectedToggle parameter of type string or null is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @toggles={{this.toggles}} @onSelection={{this.onSelection}}  />
        */
        {
          "id": "uuJ4YkbU",
          "block": "[[[8,[39,0],null,[[\"@toggles\",\"@onSelection\"],[[30,0,[\"toggles\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
      (0, _qunit.test)('it throws an error if @selectedToggle is not a value of toggles', async function (assert) {
        this.selectedToggle = 'toto';
        (0, _setupOnerror.default)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @selectedToggle parameter should be null or a value of toggles');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleButtons @toggles={{this.toggles}} @onSelection={{this.onSelection}} @selectedToggle={{this.selectedToggle}}/>
        */
        {
          "id": "XOxhFc89",
          "block": "[[[8,[39,0],null,[[\"@toggles\",\"@onSelection\",\"@selectedToggle\"],[[30,0,[\"toggles\"]],[30,0,[\"onSelection\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-buttons-test.ts",
          "isStrictMode": false
        }));
        await (0, _settled.default)();
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/toggle-switch-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/toggle-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it applies the right class on the toggle switch depending on the value', async function (assert) {
      this.value = false;
      this.onChange = v => {
        this.set('value', v);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ToggleSwitch @value={{this.value}} @onChange={{this.onChange}} />
      */
      {
        "id": "uQ3ZlA52",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-switch-test.js",
        "isStrictMode": false
      }));
      assert.dom('.upf-toggle').hasNoClass('upf-toggle--toggled');
      await (0, _testHelpers.click)('.upf-toggle');
      assert.dom('.upf-toggle').hasClass('upf-toggle--toggled');
    });
    (0, _qunit.test)('it triggers the onChange action when clicking the button', async function (assert) {
      this.onChange = v => {
        assert.equal(v, false);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::ToggleSwitch @value={{true}} @onChange={{this.onChange}} />
      */
      {
        "id": "lRqJ2gZr",
        "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-switch-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.upf-toggle');
      assert.expect(1);
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if no onChange action is passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleSwitch] Please provide an onChange action');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleSwitch />
        */
        {
          "id": "+mWK6ji9",
          "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/toggle-switch\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-switch-test.js",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if no value is passed', async function (assert) {
        this.onChange = () => {};
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleSwitch] Please provide a boolean @value. @value is undefined');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleSwitch @onChange={{this.onChange}} />
        */
        {
          "id": "WlnTZKk+",
          "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-switch-test.js",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if passed value is not a boolean', async function (assert) {
        this.onChange = () => {};
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleSwitch] Please provide a boolean @value. @value is string');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::ToggleSwitch @value="true" @onChange={{this.onChange}} />
        */
        {
          "id": "xCHHCepE",
          "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[\"true\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/toggle-switch-test.js",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/upload-area-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-intl/test-support", "sinon", "@upfluence/oss-components/test-support/services/uploader", "@upfluence/oss-components/test-support", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _testSupport, _sinon, _uploader, _testSupport2, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"ember-intl/test-support",0,"sinon",0,"@upfluence/oss-components/test-support/services/uploader",0,"@upfluence/oss-components/test-support"eaimeta@70e063a35619d71f
  const file = new File([new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])], '1px.png', {
    type: 'image/png'
  });
  (0, _qunit.module)('Integration | Component | o-s-s/upload-area', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _testSupport2.setupToast)(hooks);
    hooks.beforeEach(function () {
      this.owner.register('service:uploader', _uploader.default);
      this.mockUploader = this.owner.lookup('service:uploader');
      this.validationRules = [{
        type: 'filesize',
        value: '1MB'
      }];
      this.size = null;
      this.subtitle = 'JPG, PNG, PDF (Max 800x400px - 2MB)';
      this.onUploadSuccess = _sinon.default.stub();
      this.onFileDeletion = _sinon.default.stub();
    });
    (0, _qunit.module)('rendering', function () {
      (0, _qunit.module)('browse action', function () {
        (0, _qunit.test)('the browse text is contained in a link', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link').exists();
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link').hasText('browse');
        });
        (0, _qunit.test)('clicking on browse text opens the hidden file input', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area-container input[type="file"]').exists();
          const fileInput = document.querySelector('.oss-upload-area-container input[type="file"]');
          const fileInputClickStub = _sinon.default.stub(fileInput, 'click');
          await (0, _testHelpers.click)('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link');
          assert.ok(fileInputClickStub.calledOnce);
        });
      });
      (0, _qunit.module)('size', function () {
        (0, _qunit.test)('it renders in the default size when no size arg is provided', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');
        });
        (0, _qunit.test)('it renders in the default size when no valid size is provided', async function (assert) {
          this.size = 'foo';
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');
        });
        (0, _qunit.test)('it renders in the provided size when it is a valid one', async function (assert) {
          this.size = 'lg';
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area').hasClass('oss-upload-area--lg');
        });
      });
      (0, _qunit.module)('subtitle', function () {
        (0, _qunit.test)('it renders only the title when no subtitle is provided', async function (assert) {
          this.subtitle = null;
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3').hasText('Drop your file here, or browse');
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').doesNotExist();
        });
        (0, _qunit.test)('it renders the subtitle when provided', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3').hasText('Drop your file here, or browse');
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').exists();
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').hasText(this.subtitle);
        });
      });
      (0, _qunit.module)('disabled mode', function () {
        (0, _qunit.test)('the right class is applied on the component', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "7OzGkoU1",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@disabled\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],true,[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area').hasClass('oss-upload-area--disabled');
        });
        (0, _qunit.test)('the browse word is not actionable', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "7OzGkoU1",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@disabled\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],true,[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link').doesNotExist();
        });
      });
    });
    (0, _qunit.module)('drag and drop support', function () {
      (0, _qunit.module)('disabled mode', function () {
        (0, _qunit.test)('dragging a file over the component does not do nothing', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "7OzGkoU1",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@disabled\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],true,[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'dragenter');
          assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--dragging');
        });
      });
      (0, _qunit.module)('active mode', function (hooks) {
        hooks.beforeEach(function () {
          this.file = file;
        });
        (0, _qunit.test)('dragging a file over the component applies the right class', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'dragenter');
          assert.dom('.oss-upload-area').hasClass('oss-upload-area--dragging');
        });
        (0, _qunit.test)('dropped file is validated', async function (assert) {
          _sinon.default.spy(this.mockUploader, 'validate');
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
            dataTransfer: {
              files: [this.file]
            }
          });
          assert.ok(this.mockUploader.validate.calledWithExactly({
            file: this.file,
            privacy: 'private',
            scope: 'anonymous'
          }, this.validationRules));
        });
        (0, _qunit.test)('error toasts are displayed if the dropped file does not pass the validation rules', async function (assert) {
          this.validationRules = [{
            type: 'filesize',
            value: '1B'
          }, {
            type: 'filetype',
            value: ['pdf']
          }];
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
            dataTransfer: {
              files: [this.file]
            }
          });
          assert.ok(this.toastErrorStub.calledWith(this.intl.t(`oss-components.upload-area.errors.filetype.description`), this.intl.t(`oss-components.upload-area.errors.filetype.title`)));
          assert.ok(this.toastErrorStub.calledWith(this.intl.t('oss-components.upload-area.errors.filesize.description', {
            max_filesize: '1B'
          }), this.intl.t('oss-components.upload-area.errors.filesize.title')));
        });
        (0, _qunit.test)('if onDryRun is passed, the uploaded file is passed to it if validated and no upload item is displayed', async function (assert) {
          this.onDryRun = _sinon.default.stub();
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onDryRun={{this.onDryRun}} />
                  
          */
          {
            "id": "hnyirku5",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\",\"@onDryRun\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]],[30,0,[\"onDryRun\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
            dataTransfer: {
              files: [this.file]
            }
          });
          assert.dom('.oss-upload-item').doesNotExist();
          assert.dom('.oss-upload-area').exists();
          assert.ok(this.onDryRun.calledOnceWithExactly(_sinon.default.match(file => file instanceof File)));
        });
        (0, _qunit.test)('the uploaded file is displayed if the dropped file passes the validation', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
            dataTransfer: {
              files: [this.file]
            }
          });
          assert.dom('.oss-upload-item').exists();
          assert.dom('.oss-upload-area').doesNotExist();
        });
        (0, _qunit.test)('clicking on the remove button in the upload item moves back to the upload state', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onFileDeletion={{this.onFileDeletion}} />
                  
          */
          {
            "id": "nciud8FG",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\",\"@onFileDeletion\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]],[30,0,[\"onFileDeletion\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
            dataTransfer: {
              files: [this.file]
            }
          });
          await (0, _testHelpers.waitFor)('.oss-upload-item [data-control-name="upload-item-remove-button"]');
          await (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-remove-button"]');
          assert.dom('.oss-upload-item').doesNotExist();
          assert.dom('.oss-upload-area').exists();
          assert.ok(this.onFileDeletion.calledOnce);
        });
        (0, _qunit.test)('clicking on the edit button in the upload item opens the hidden file input', async function (assert) {
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadArea
                      @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                      @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "5tJ4y9Ce",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
            "isStrictMode": false
          }));
          await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
            dataTransfer: {
              files: [this.file]
            }
          });
          const fileInput = document.querySelector('.oss-upload-area-container input[type="file"]');
          const fileInputClickStub = _sinon.default.stub(fileInput, 'click');
          await (0, _testHelpers.waitFor)('.oss-upload-item [data-control-name="upload-item-edit-button"]');
          await (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-edit-button"]');
          assert.ok(fileInputClickStub.calledOnce);
        });
      });
    });
    (0, _qunit.module)('displaying an existing file', function (hooks) {
      hooks.beforeEach(function () {
        this.artifact = {
          filename: 'foo.png',
          url: 'https://oss-components.org/foo.png',
          content_type: 'image/png'
        };
      });
      (0, _qunit.test)('the file is displayed using an upload-item', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadArea
                  @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
                  @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "LXq0+Q1J",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@artifact\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"artifact\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
          "isStrictMode": false
        }));
        assert.dom('.oss-upload-area').doesNotExist();
        assert.dom('.oss-upload-item').exists();
        assert.dom('.oss-upload-item [data-control-name="upload-item-filename"]').hasText('foo.png');
      });
      (0, _qunit.test)('clicking on the remove button in the upload item moves back to the upload state', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadArea
                  @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
                  @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onFileDeletion={{this.onFileDeletion}} />
              
        */
        {
          "id": "7IvwecIp",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@artifact\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\",\"@onFileDeletion\"],[[30,0,[\"mockUploader\"]],[30,0,[\"artifact\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]],[30,0,[\"onFileDeletion\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-remove-button"]');
        assert.dom('.oss-upload-item').doesNotExist();
        assert.dom('.oss-upload-area').exists();
        assert.ok(this.onFileDeletion.calledOnce);
      });
      (0, _qunit.test)('clicking on the edit button in the upload item opens the hidden file input', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadArea
                  @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
                  @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "LXq0+Q1J",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@artifact\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"artifact\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
          "isStrictMode": false
        }));
        const fileInput = document.querySelector('.oss-upload-area-container input[type="file"]');
        const fileInputClickStub = _sinon.default.stub(fileInput, 'click');
        await (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-edit-button"]');
        assert.ok(fileInputClickStub.calledOnce);
      });
    });
    (0, _qunit.module)('allow multiple files', function () {
      (0, _qunit.test)('it allows the user to upload more than one file', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadArea
                  @uploader={{this.mockUploader}} @multiple={{true}} @rules={{this.validationRules}}
                  @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "EnHKdy1N",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@multiple\",\"@rules\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],true,[30,0,[\"validationRules\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
          dataTransfer: {
            files: [file]
          }
        });
        await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
          dataTransfer: {
            files: [file]
          }
        });
        assert.dom('.oss-upload-area').exists();
        assert.dom('.oss-upload-item').exists({
          count: 2
        });
      });
      (0, _qunit.test)('the user can remove a specific uploaded item', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadArea
                  @uploader={{this.mockUploader}} @multiple={{true}} @rules={{this.validationRules}}
                  @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "EnHKdy1N",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@multiple\",\"@rules\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],true,[30,0,[\"validationRules\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-area-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
          dataTransfer: {
            files: [file]
          }
        });
        await (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
          dataTransfer: {
            files: [file]
          }
        });
        assert.dom('.oss-upload-item').exists({
          count: 2
        });
        await (0, _testHelpers.waitFor)('.oss-upload-item:first-child [data-control-name="upload-item-remove-button"]');
        await (0, _testHelpers.click)('.oss-upload-item:first-child [data-control-name="upload-item-remove-button"]');
        assert.dom('.oss-upload-item').exists({
          count: 1
        });
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/upload-item-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "sinon", "@upfluence/oss-components/test-support/services/uploader", "@upfluence/oss-components/types/uploader", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _sinon, _uploader, _uploader2, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon",0,"@upfluence/oss-components/test-support/services/uploader",0,"@upfluence/oss-components/types/uploader"eaimeta@70e063a35619d71f
  const buildFile = (name = '1px.png', type = 'image/png') => {
    return new File([new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])], name, {
      type
    });
  };
  (0, _qunit.module)('Integration | Component | o-s-s/upload-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    hooks.beforeEach(function () {
      this.owner.register('service:uploader', _uploader.default);
      this.uploader = this.owner.lookup('service:uploader');
      this.file = {
        filename: 'foo.png',
        url: 'https://oss-components.org/foo.png',
        content_type: 'image/png'
      };
      this.validationRules = [{
        type: 'filesize',
        value: '1MB'
      }];
      this.scope = 'anonymous';
      this.privacy = _uploader2.FilePrivacy.PUBLIC;
      this.onEdition = _sinon.default.stub();
      this.onFileDeletion = _sinon.default.stub();
      this.onUploadSuccess = _sinon.default.stub();
    });
    (0, _qunit.module)('provided file is a FileArtifact', function () {
      [{
        contentType: 'image/png',
        expected: 'fa-image'
      }, {
        contentType: 'image/jpeg',
        expected: 'fa-image'
      }, {
        contentType: 'video/mov',
        expected: 'fa-file-video'
      }, {
        contentType: 'application/pdf',
        expected: 'fa-file-pdf'
      }, {
        contentType: null,
        expected: 'fa-file-alt'
      }, {
        contentType: 'foo',
        expected: 'fa-file-alt'
      }].forEach(spec => {
        (0, _qunit.test)(`a badge with a matching icon is used when the file content type is: ${spec.contentType || 'empty'}`, async function (assert) {
          this.file.content_type = spec.contentType;
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadItem
                      @uploader={{this.uploader}} @file={{this.file}}
                      @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                      @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                      @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "i1WjPun3",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-item\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.upf-badge i').hasClass('far');
          assert.dom('.upf-badge i').hasClass(spec.expected);
        });
      });
      (0, _qunit.test)('its name is rendered properly', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="upload-item-filename"]').hasText('foo.png');
      });
      (0, _qunit.test)('its size is rendered properly if present', async function (assert) {
        this.file.size = 100;
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="upload-item-filesize"]').hasText('100 B');
      });
      (0, _qunit.test)('its size is not displayed if missing', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="upload-item-filesize]').doesNotExist();
      });
      (0, _qunit.test)('clicking the view button opens the file url', async function (assert) {
        const windowOpenStub = _sinon.default.stub(window, 'open');
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="upload-item-view-button"]');
        assert.ok(windowOpenStub.calledOnceWithExactly(this.file.url, '_blank'));
        windowOpenStub.restore();
      });
    });
    (0, _qunit.module)('provided file is a native File object', function (hooks) {
      hooks.beforeEach(function () {
        this.file = buildFile();
      });
      [{
        contentType: 'image/png',
        expected: 'fa-image'
      }, {
        contentType: 'image/jpeg',
        expected: 'fa-image'
      }, {
        contentType: 'video/mov',
        expected: 'fa-file-video'
      }, {
        contentType: 'application/pdf',
        expected: 'fa-file-pdf'
      }, {
        contentType: 'foo',
        expected: 'fa-file-alt'
      }].forEach(spec => {
        (0, _qunit.test)(`a badge with a matching icon is used when the file content type is: ${spec.contentType || 'empty'}`, async function (assert) {
          this.file = buildFile('my-file', spec.contentType);
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            
                    <OSS::UploadItem
                      @uploader={{this.uploader}} @file={{this.file}}
                      @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                      @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                      @onUploadSuccess={{this.onUploadSuccess}} />
                  
          */
          {
            "id": "i1WjPun3",
            "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-item\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
            "isStrictMode": false
          }));
          assert.dom('.upf-badge i').hasClass('far');
          assert.dom('.upf-badge i').hasClass(spec.expected);
        });
      });
      (0, _qunit.test)('its name is rendered properly', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="upload-item-filename"]').hasText('1px.png');
      });
      (0, _qunit.test)('its size is rendered properly if present', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        assert.dom('[data-control-name="upload-item-filesize"]').hasText('96 B');
      });
      (0, _qunit.test)('the file is immediately uploaded', async function (assert) {
        const uploadStub = _sinon.default.stub(this.uploader, 'upload');
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        assert.ok(uploadStub.calledOnceWithExactly(
        // Partial match because the onSuccess, onFailure, and onProgress are component methods, hence not being
        // accessible from the tests.
        _sinon.default.match({
          file: this.file,
          privacy: this.privacy,
          scope: this.scope
        }), this.validationRules));
      });
      (0, _qunit.test)('it enters error mode if the upload failed', async function (assert) {
        this.uploader.mode = 'failure';
        _sinon.default.spy(this.uploader, 'upload');
        this.onUploadFailure = _sinon.default.stub();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} @onUploadFailure={{this.onUploadFailure}} />
              
        */
        {
          "id": "xbe7IViw",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\",\"@onUploadFailure\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]],[30,0,[\"onUploadFailure\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.waitFor)('.oss-upload-item.oss-upload-item--errored');
        assert.dom('.oss-upload-item').hasClass('oss-upload-item--errored');
        assert.dom('.oss-upload-item [data-control-name="upload-item-try-again-button"]').exists();
        assert.dom('.oss-upload-item [data-control-name="upload-item-try-again-button"]').hasText('Try again');
        await (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-try-again-button"]');
        assert.ok(this.uploader.upload.calledWithExactly(
        // Partial match because the onSuccess, onFailure, and onProgress are component methods, hence not being
        // accessible from the tests.
        _sinon.default.match({
          file: this.file,
          privacy: this.privacy,
          scope: this.scope
        }), this.validationRules));
        assert.true(this.onUploadFailure.calledOnceWithExactly({
          payload: {}
        }));
      });
    });
    (0, _qunit.module)('common actions', function () {
      (0, _qunit.test)('clicking the edit button triggers the onEdition action', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="upload-item-edit-button"]');
        assert.ok(this.onEdition.calledOnce);
      });
      (0, _qunit.test)('clicking the remove button triggers the onDeletion action', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          
                <OSS::UploadItem
                  @uploader={{this.uploader}} @file={{this.file}}
                  @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                  @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                  @onUploadSuccess={{this.onUploadSuccess}} />
              
        */
        {
          "id": "M0ZtCxHJ",
          "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/upload-item-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('[data-control-name="upload-item-remove-button"]');
        assert.ok(this.onFileDeletion.calledOnce);
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/url-input-test", ["qunit", "ember-qunit", "ember-intl/test-support", "@ember/test-helpers", "@ember/test-helpers/dom/fill-in", "@ember/test-helpers/dom/type-in", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testSupport, _testHelpers, _fillIn, _typeIn, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"ember-intl/test-support",0,"@ember/test-helpers",0,"@ember/test-helpers/dom/fill-in",0,"@ember/test-helpers/dom/type-in",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | o-s-s/url-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _testSupport.setupIntl)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <OSS::UrlInput @prefix="https://" />
      */
      {
        "id": "2ecs47pD",
        "block": "[[[8,[39,0],null,[[\"@prefix\"],[\"https://\"]],null]],[],false,[\"o-s-s/url-input\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/url-input-test.ts",
        "isStrictMode": false
      }));
      assert.dom('.oss-input-group').exists();
    });
    (0, _qunit.module)('With @validationRegex parameter', () => {
      (0, _qunit.test)('When the text matches the Regex, the onChange function has the newValue and the isValid parameter is set to true', async function (assert) {
        this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
        this.value = '';
        this.onChange = _sinon.default.stub();
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                              @onChange={{this.onChange}} @value={{this.value}}
                                              @validationRegex={{this.subdomainRegex}} />
        */
        {
          "id": "+tgJxxML",
          "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/url-input-test.ts",
          "isStrictMode": false
        }));
        await (0, _fillIn.default)('input', 'fakedomai');
        await (0, _typeIn.default)('input', 'n');
        assert.true(this.onChange.calledOnceWithExactly('fakedomain', true));
      });
      (0, _qunit.module)("When the text doesn't match the Regex", () => {
        (0, _qunit.test)('The onChange function has the newValue and the isValid parameter is set to false', async function (assert) {
          this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
          this.value = '';
          this.onChange = _sinon.default.stub();
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                                @onChange={{this.onChange}} @value={{this.value}}
                                                @validationRegex={{this.subdomainRegex}} />
          */
          {
            "id": "+tgJxxML",
            "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/url-input-test.ts",
            "isStrictMode": false
          }));
          await (0, _typeIn.default)('input', 'a');
          assert.true(this.onChange.calledOnceWithExactly('a', false));
        });
        (0, _qunit.test)('If no error message has been specified by the parent, a default one is displayed', async function (assert) {
          this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
          this.value = '';
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                                @onChange={{this.onChange}} @value={{this.value}}
                                                @validationRegex={{this.subdomainRegex}} />
          */
          {
            "id": "+tgJxxML",
            "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/url-input-test.ts",
            "isStrictMode": false
          }));
          await (0, _typeIn.default)('input', 'a');
          assert.dom('.text-color-error').hasText('This is not a valid URL.');
        });
        (0, _qunit.test)('If an error message has been specified by the parent, it is displayed', async function (assert) {
          this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
          this.value = '';
          await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
          /*
            <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                                @onChange={{this.onChange}} @value={{this.value}}
                                                @errorMessage="This is a custom error message."
                                                @validationRegex={{this.subdomainRegex}} />
          */
          {
            "id": "0ll6eq1w",
            "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@errorMessage\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],\"This is a custom error message.\",[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
            "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/components/o-s-s/url-input-test.ts",
            "isStrictMode": false
          }));
          await (0, _typeIn.default)('input', 'a');
          assert.dom('.text-color-error').hasText('This is a custom error message.');
        });
      });
    });
  });
});
define("dummy/tests/integration/helpers/redirect-to-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | redirect-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.url = 'https://github.com/upfluence/oss-components';
    });
    (0, _qunit.test)('it redirects to the url on the current tab if not target is passed', async function (assert) {
      this.redirectStub = _sinon.default.stub(window, 'open');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div {{on "click" (redirect-to url=this.url)}}>link</div>
      */
      {
        "id": "e24AxJ/d",
        "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,[[\"url\"],[[30,0,[\"url\"]]]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/redirect-to-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('div');
      assert.ok(this.redirectStub.calledOnceWithExactly(this.url, '_self'));
      _sinon.default.restore();
    });
    (0, _qunit.test)('it redirects to the url on the provided target', async function (assert) {
      this.redirectStub = _sinon.default.stub(window, 'open');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div {{on "click" (redirect-to url=this.url target="_blank")}}>link</div>
      */
      {
        "id": "OsNY9YvN",
        "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,[[\"url\",\"target\"],[[30,0,[\"url\"]],\"_blank\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/redirect-to-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('div');
      assert.ok(this.redirectStub.calledOnceWithExactly(this.url, '_blank'));
      _sinon.default.restore();
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if the url argument is missing', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [helper][OSS::redirect-to] url argument is mandatory.');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div {{on "click" (redirect-to)}}>link</div>
        */
        {
          "id": "7PNhjOkz",
          "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,null]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/redirect-to-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if the target is not a valid one', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [helper][OSS::redirect-to] the target argument must be a valid one: https://www.w3schools.com/tags/att_a_target.asp.');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <div {{on "click" (redirect-to url=this.url target="_foo")}}>link</div>
        */
        {
          "id": "/wWML6ry",
          "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,[[\"url\",\"target\"],[[30,0,[\"url\"]],\"_foo\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/redirect-to-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/helpers/stop-propagation-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | stop-propagation', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.nativeStopPropagation = Event.prototype.stopPropagation;
    });
    hooks.afterEach(function () {
      Event.prototype.stopPropagation = this.nativeStopPropagation;
    });
    (0, _qunit.test)('it renders', async function (assert) {
      Event.prototype.stopPropagation = () => {
        assert.ok(true);
      };
      this.onClick = (arg, event) => {
        assert.equal(arg, 'foo');
        assert.ok(event instanceof MouseEvent);
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <button {{on "click" (stop-propagation (fn this.onClick "foo"))}}>stop propagation</button>
      */
      {
        "id": "1jf6xKDi",
        "block": "[[[11,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[28,[37,2],[[30,0,[\"onClick\"]],\"foo\"],null]],null]],null],[12],[1,\"stop propagation\"],[13]],[],false,[\"on\",\"stop-propagation\",\"fn\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/stop-propagation-test.ts",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('button');
      assert.expect(3);
    });
  });
});
define("dummy/tests/integration/helpers/transition-to-test", ["qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _sinon, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"sinon"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | transition-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      const router = this.owner.lookup('service:router');
      this.transitionToStub = _sinon.default.stub(router, 'transitionTo');
    });
    (0, _qunit.module)('only a route has been passed', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route only', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <a {{on "click" (transition-to route="foo")}}>link</a>
        */
        {
          "id": "nhJ6h//e",
          "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\"],[\"foo\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/transition-to-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('a');
        assert.ok(this.transitionToStub.calledWithExactly('foo', {
          queryParams: {}
        }));
      });
    });
    (0, _qunit.module)('a model has been passed to the transition', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route only', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <a {{on "click" (transition-to route="foo" model="1")}}>link</a>
        */
        {
          "id": "1UVEA5Ni",
          "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"model\"],[\"foo\",\"1\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/transition-to-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('a');
        assert.ok(this.transitionToStub.calledWithExactly('foo', '1', {
          queryParams: {}
        }));
      });
    });
    (0, _qunit.module)('multiple models have been passed to the transition', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route only', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <a {{on "click" (transition-to route="foo" models=(array 'fizz' 'buzz'))}}>link</a>
        */
        {
          "id": "Zlyj2tGf",
          "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"models\"],[\"foo\",[28,[37,2],[\"fizz\",\"buzz\"],null]]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\",\"array\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/transition-to-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('a');
        assert.ok(this.transitionToStub.calledWithExactly('foo', 'fizz', 'buzz', {
          queryParams: {}
        }));
      });
    });
    (0, _qunit.module)('with queryParams', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route and queryParams', async function (assert) {
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <a {{on "click" (transition-to route="foo" queryParams=(hash myParam="bruh"))}}>link</a>
        */
        {
          "id": "y1ty57b9",
          "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"queryParams\"],[\"foo\",[28,[37,2],null,[[\"myParam\"],[\"bruh\"]]]]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\",\"hash\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/transition-to-test.ts",
          "isStrictMode": false
        }));
        await (0, _testHelpers.click)('a');
        assert.ok(this.transitionToStub.calledWithExactly('foo', {
          queryParams: {
            myParam: 'bruh'
          }
        }));
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if the route argument is missing', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [helper][OSS::transition-to] route argument is mandatory');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <a {{on "click" (transition-to)}}>link</a>
        */
        {
          "id": "c0aaXEtO",
          "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,null]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/transition-to-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if both models and model arguments are passed', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [helper][OSS::transition-to] only one of model or models argument must be provided');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <a {{on "click" (transition-to route="foo" models=(array '1' '2') model='3')}}>link</a>
        */
        {
          "id": "oliuYXR+",
          "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"models\",\"model\"],[\"foo\",[28,[37,2],[\"1\",\"2\"],null],\"3\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\",\"array\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/transition-to-test.ts",
          "isStrictMode": false
        }));
      });
      (0, _qunit.test)('it throws an error if queryParams argument is passed but is not an object', async function (assert) {
        (0, _testHelpers.setupOnerror)(err => {
          assert.equal(err.message, 'Assertion Failed: [helper][OSS::transition-to] queryParams argument must be an object');
        });
        await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
        /*
          <a {{on "click" (transition-to route="foo" queryParams='string')}}>link</a>
        */
        {
          "id": "4j9GJYRp",
          "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"queryParams\"],[\"foo\",\"string\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
          "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/helpers/transition-to-test.ts",
          "isStrictMode": false
        }));
      });
    });
  });
});
define("dummy/tests/integration/modifiers/attach-element-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Modifiers | modifiers/attach-element', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('the attached element has no floating-related style when not using the modifier', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <div class="reference-element">
              I am the reference!
            </div>
      
            <div class="attached-element">
              I am floaaaaaating !
            </div>
          
      */
      {
        "id": "zdaQtUa4",
        "block": "[[[1,\"\\n      \"],[10,0],[14,0,\"reference-element\"],[12],[1,\"\\n        I am the reference!\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"attached-element\"],[12],[1,\"\\n        I am floaaaaaating !\\n      \"],[13],[1,\"\\n    \"]],[],false,[]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/modifiers/attach-element-test.ts",
        "isStrictMode": false
      }));
      const attachedElement = (0, _testHelpers.find)('.attached-element');
      const attachedElementStyles = Object.fromEntries(attachedElement.attributeStyleMap.entries());
      assert.deepEqual(Object.keys(attachedElementStyles), []);
    });
    (0, _qunit.test)('attached element is properly rendered w/ the right floating-ui positioning style', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <div class="reference-element">
              I am the reference!
            </div>
      
            <div class="attached-element" {{attach-element to=".reference-element"}}>
              I am floaaaaaating !
            </div>
          
      */
      {
        "id": "CIt7cH5I",
        "block": "[[[1,\"\\n      \"],[10,0],[14,0,\"reference-element\"],[12],[1,\"\\n        I am the reference!\\n      \"],[13],[1,\"\\n\\n      \"],[11,0],[24,0,\"attached-element\"],[4,[38,0],null,[[\"to\"],[\".reference-element\"]]],[12],[1,\"\\n        I am floaaaaaating !\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"attach-element\"]]",
        "moduleName": "/home/runner/work/oss-components/oss-components/dummy/tests/integration/modifiers/attach-element-test.ts",
        "isStrictMode": false
      }));
      const attachedElement = (0, _testHelpers.find)('.attached-element');
      const attachedElementStyles = Object.fromEntries(attachedElement.attributeStyleMap.entries());
      assert.deepEqual(Object.keys(attachedElementStyles), ['max-width', 'min-width', 'width', 'left', 'top', 'visibility']);
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "qunit", "qunit-dom", "ember-qunit", "@upfluence/oss-components/test-support/register-assertions", "ember-cli-code-coverage/test-support"], function (_app, _environment, _testHelpers, QUnit, _qunitDom, _emberQunit, _registerAssertions, _testSupport) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"dummy/app",0,"dummy/config/environment",0,"@ember/test-helpers",0,"qunit",0,"qunit-dom",0,"ember-qunit",0,"qunit-dom",0,"@upfluence/oss-components/test-support/register-assertions",0,"ember-cli-code-coverage/test-support"eaimeta@70e063a35619d71f
  // @ts-nocheck
  (0, _registerAssertions.default)(QUnit.assert);
  (0, _qunitDom.setup)(QUnit.assert);
  QUnit.done(async function () {
    (0, _testSupport.forceModulesToBeLoaded)((_, moduleName) => {
      return !moduleName.endsWith('.stories');
    });
    await (0, _testSupport.sendCoverage)();
  });
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/services/base-uploader-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | base-uploader', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.service = this.owner.lookup('service:base-uploader');
    });
    (0, _qunit.test)('it exists', function (assert) {
      assert.ok(this.service);
    });
    (0, _qunit.module)('#validate method', function (hooks) {
      hooks.beforeEach(function () {
        this.request = {
          file: new File([new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])], '1px.png', {
            type: 'image/png'
          }),
          privacy: 'private',
          scope: 'anonymous'
        };
      });
      (0, _qunit.test)('it passes if no validation is provided', function (assert) {
        this.validationRules = [];
        assert.deepEqual(this.service.validate(this.request, this.validationRules), {
          passes: true,
          validations: []
        });
      });
      (0, _qunit.test)('it filters out rules with empty values and passes', function (assert) {
        this.validationRules = [{
          type: 'filetype',
          value: []
        }, {
          type: 'filesize',
          value: null
        }];
        assert.deepEqual(this.service.validate(this.request, this.validationRules), {
          passes: true,
          validations: []
        });
      });
      (0, _qunit.module)('FileType validator', function () {
        (0, _qunit.test)("it does not pass if the file's type is not one of the allowed ones", function (assert) {
          this.validationRules = [{
            type: 'filetype',
            value: ['pdf']
          }];
          assert.deepEqual(this.service.validate(this.request, this.validationRules), {
            passes: false,
            validations: [{
              passes: false,
              rule: {
                type: 'filetype',
                value: ['pdf']
              }
            }]
          });
        });
        (0, _qunit.test)("it passes if the file's type is one of the allowed ones", function (assert) {
          this.validationRules = [{
            type: 'filetype',
            value: ['png']
          }];
          assert.deepEqual(this.service.validate(this.request, this.validationRules), {
            passes: true,
            validations: [{
              passes: true,
              rule: {
                type: 'filetype',
                value: ['png']
              }
            }]
          });
        });
        (0, _qunit.test)("it passes if the file's type matches one of a templated filetype", function (assert) {
          this.validationRules = [{
            type: 'filetype',
            value: ['image']
          }];
          assert.deepEqual(this.service.validate(this.request, this.validationRules), {
            passes: true,
            validations: [{
              passes: true,
              rule: {
                type: 'filetype',
                value: ['png', 'jpg', 'jpeg']
              }
            }]
          });
        });
      });
      (0, _qunit.module)('FileSize validator', function () {
        (0, _qunit.test)('it does not pass if the file is heavier than the maximum allowed', function (assert) {
          this.validationRules = [{
            type: 'filesize',
            value: '1B'
          }];
          assert.deepEqual(this.service.validate(this.request, this.validationRules), {
            passes: false,
            validations: [{
              passes: false,
              rule: {
                type: 'filesize',
                value: '1B'
              }
            }]
          });
        });
        (0, _qunit.test)('it passes if the file is heavier than the maximum allowed', function (assert) {
          this.validationRules = [{
            type: 'filesize',
            value: '10MB'
          }];
          assert.deepEqual(this.service.validate(this.request, this.validationRules), {
            passes: true,
            validations: [{
              passes: true,
              rule: {
                type: 'filesize',
                value: '10MB'
              }
            }]
          });
        });
      });
    });
    (0, _qunit.test)('calling the `url` getter throws throws a NotImplemented error', function (assert) {
      try {
        this.service.url;
      } catch (err) {
        assert.equal(err.message, '[@upfluence/oss-components::uploader] NotImpemented: Please extend this service and inherit this method.');
      }
      assert.expect(1);
    });
    (0, _qunit.test)('calling the upload method throws a NotImplemented error', function (assert) {
      try {
        this.service.upload({
          file: new File([new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])], '1px.png', {
            type: 'image/png'
          }),
          privacy: 'private',
          scope: 'anonymous'
        }, []);
      } catch (err) {
        assert.equal(err.message, '[@upfluence/oss-components::uploader] NotImpemented: Please extend this service and inherit this method.');
      }
    });
  });
});
define("dummy/tests/unit/services/toast-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/services/toast"], function (_qunit, _emberQunit, _testHelpers, _toast) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@upfluence/oss-components/services/toast"eaimeta@70e063a35619d71f
  const TOAST_TYPES = ['info', 'success', 'warning', 'error'];
  (0, _qunit.module)('Unit | Service | toast', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.service = this.owner.lookup('service:toast');
    });
    (0, _qunit.test)('it exists', function (assert) {
      assert.ok(this.service);
      assert.ok(this.service instanceof _toast.default);
      assert.ok(typeof this.service.info === 'function');
      assert.ok(typeof this.service.success === 'function');
      assert.ok(typeof this.service.warning === 'function');
      assert.ok(typeof this.service.error === 'function');
    });
    (0, _qunit.module)('public methods', function () {
      TOAST_TYPES.forEach(type => {
        (0, _qunit.test)(`${type}`, async function (assert) {
          const toast = this.service[type](`Message of ${type}`, `Title ${type}`, {
            timeout: 100
          });
          assert.dom(toast).exists();
          assert.dom(toast).hasClass(`toast--${type}`);
          assert.dom(toast).hasClass(`toast--visible`);
          assert.dom(toast.querySelector('.subtitle')).hasText(`Message of ${type}`);
          assert.dom(toast.querySelector('.title')).hasText(`Title ${type}`);
        });
      });
    });
    (0, _qunit.test)('it should close the toast when clicking on the button', async function (assert) {
      const toast = this.service.error('Message', 'Title', {
        timeout: 100
      });
      const buttonElement = toast.querySelector('button');
      assert.dom(buttonElement).exists({
        count: 1
      });
      await (0, _testHelpers.click)(buttonElement);
      const animation = toast.getAnimations().filter(animation => animation.id === 'destroy')[0];
      await animation.finished;
      assert.true(toast.parentElement === null);
    });
    (0, _qunit.test)('the onclick function is called when the toast is clicked', async function (assert) {
      const toast = this.service.error('Message', 'Title', {
        timeout: 100,
        onclick: event => {
          assert.equal(event.type, 'click');
        }
      });
      await (0, _testHelpers.click)(toast);
      assert.expect(1);
    });
    (0, _qunit.module)('badge options', function () {
      (0, _qunit.test)('it should display icon', async function (assert) {
        const toast = this.service.error('Message', 'Title', {
          timeout: 100,
          badge: {
            icon: 'fab fa-jedi-order'
          }
        });
        const badge = toast.querySelector('.upf-badge i');
        assert.dom(badge).hasClass('fab');
        assert.dom(badge).hasClass('fa-jedi-order');
      });
      (0, _qunit.test)('it should display img', async function (assert) {
        const url = '/assets/images/upfluence-white-logo.svg';
        const toast = this.service.error('Message', 'Title', {
          timeout: 100,
          badge: {
            image: url
          }
        });
        const badge = toast.querySelector('.upf-badge img');
        assert.dom(badge).hasAttribute('src', url);
      });
      (0, _qunit.test)('it should display text', async function (assert) {
        const toast = this.service.error('Message', 'Title', {
          timeout: 100,
          badge: {
            text: '1'
          }
        });
        const badge = toast.querySelector('.upf-badge span');
        assert.dom(badge).hasText('1');
      });
    });
  });
});
define("dummy/tests/unit/utils/upf-local-storage-test", ["dummy/utils/upf-local-storage", "qunit"], function (_upfLocalStorage, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"dummy/utils/upf-local-storage",0,"qunit"eaimeta@70e063a35619d71f
  const TEST_KEY = 'testKey';
  const DEFAULT_PREFIX = '_upf.';
  const CUSTOM_PREFIX = 'workflow';
  const TEST_VALUE = 'testValue';
  const TEST_OBJECT = {
    attr: TEST_VALUE
  };
  const TEST_OBJECT_UPDATE = {
    attr2: TEST_VALUE
  };
  const ERROR_TYPE_STRING = '[value] parameter MUST be of type :string';
  const ERROR_TYPE_OBJECT = '[object] parameter MUST be of type :object';
  (0, _qunit.module)('Unit | Utility | UPFLocalStorage', function (hooks) {
    hooks.beforeEach(function () {
      localStorage.clear();
    });
    (0, _qunit.test)('it can be instanciated', function (assert) {
      let upfStorage = new _upfLocalStorage.default();
      assert.ok(upfStorage);
    });
    (0, _qunit.module)('Prefix', function () {
      (0, _qunit.test)('Saving content without specifying a prefix will use the default ".upf_" prefix', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.equal(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('Setting a custom prefix on the Ctor will save content with the set prefix', function (assert) {
        let upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.equal(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: saveObject', function () {
      (0, _qunit.test)('saveObject() sets the default prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT, localStorageParsedObject);
      });
      (0, _qunit.test)('saveObject() sets the custom prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        const localStorageParsedObject = JSON.parse(localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT, localStorageParsedObject);
      });
      (0, _qunit.test)('saveObject() throws an error if the object parameter is not an object', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        assert.throws(() => {
          upfStorage.saveObject(TEST_KEY, TEST_VALUE);
        }, ERROR_TYPE_OBJECT);
      });
      (0, _qunit.test)('saveObject() saves an object in the localStorage as a stringified JSON', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        const localStorageStringifiedObject = localStorage.getItem(DEFAULT_PREFIX + TEST_KEY);
        assert.deepEqual(JSON.stringify(TEST_OBJECT), localStorageStringifiedObject);
      });
    });
    (0, _qunit.module)('Method: updateObject', function () {
      (0, _qunit.test)('updateObject() sets the default prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
      });
      (0, _qunit.test)('updateObject() sets the custom prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        const localStorageParsedObject = JSON.parse(localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
      });
      (0, _qunit.test)('updateObject() throws an error if the object parameter is not an object', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        assert.throws(() => {
          upfStorage.updateObject(TEST_KEY, TEST_VALUE);
        }, ERROR_TYPE_OBJECT);
      });
      (0, _qunit.test)('updateObject() adds content to the existing object', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual({
          ...TEST_OBJECT,
          ...TEST_OBJECT_UPDATE
        }, localStorageParsedObject);
      });
      (0, _qunit.test)('updateObject() creates the Object if there is no previous value', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        const localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
      });
    });
    (0, _qunit.module)('Method: getObject', function () {
      (0, _qunit.test)('getObject() returns an empty object if the key is not found', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        assert.deepEqual({}, upfStorage.getObject(TEST_KEY));
      });
      (0, _qunit.test)('getObject() returns an object with the proper contents', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        assert.deepEqual(TEST_OBJECT, upfStorage.getObject(TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: saveItem', function () {
      (0, _qunit.test)('saveItem() throws an error if the object parameter is not a string', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        assert.throws(() => {
          upfStorage.saveItem(TEST_KEY, 1337);
        }, ERROR_TYPE_STRING);
      });
      (0, _qunit.test)('saveItem() sets the default prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('saveItem() sets the custom prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('saveItem() saves the proper value in the localStorage', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: updateItem', function () {
      (0, _qunit.test)('updateItem() throws an error if the object parameter is not a string', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        assert.throws(() => {
          upfStorage.updateItem(TEST_KEY, 1337);
        }, ERROR_TYPE_STRING);
      });
      (0, _qunit.test)('updateItem() sets the default prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.updateItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('updateItem() sets the custom prefix key', function (assert) {
        let upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.updateItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('updateItem() overwrites any previous key and saves the value', function (assert) {
        let upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.updateItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
        upfStorage.updateItem(TEST_KEY, TEST_VALUE + TEST_VALUE);
        assert.deepEqual(TEST_VALUE + TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: getItem', function () {
      (0, _qunit.test)('getItem() returns null if no key is found', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        assert.equal(null, upfStorage.getItem(TEST_KEY));
      });
      (0, _qunit.test)('getItem() returns the proper value if the key is found', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.equal(TEST_VALUE, upfStorage.getItem(TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: delete', function () {
      (0, _qunit.test)('delete() uses the default prefix when removing a key', function (assert) {
        let upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        upfStorage.delete(TEST_KEY);
        assert.equal(null, upfStorage.getItem(TEST_KEY));
      });
      (0, _qunit.test)('delete() uses the custom prefix when removing a key', function (assert) {
        let upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
        upfStorage.delete(TEST_KEY);
        assert.equal(null, upfStorage.getItem(TEST_KEY));
      });
    });
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
