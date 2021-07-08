'use strict';

define("dummy/tests/integration/components/o-s-s/modal-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
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
                  id: "JG83zO1W",
                  block: "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"o-s-s/modal\",[],[[\"@title\"],[\"Test Modal\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"div\"],[14,0,\"modal-body\"],[12],[2,\"\\n          Foo\\n        \"],[13],[2,\"\\n\\n        \"],[10,\"div\"],[14,0,\"modal-footer\"],[12],[2,\"\\n          Bar\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.querySelector('.modal-title').textContent.trim(), 'Test Modal');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('available options', function () {
      (0, _qunit.module)('centered', function () {
        (0, _qunit.test)('it should set the centered class on the modal dialog', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return (0, _testHelpers.render)(Ember.HTMLBars.template(
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
                      id: "LHxxxFsN",
                      block: "{\"symbols\":[],\"statements\":[[2,\"\\n          \"],[8,\"o-s-s/modal\",[],[[\"@title\",\"@options\"],[\"Test Modal\",[30,[36,0],null,[[\"centered\"],[true]]]]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"div\"],[14,0,\"modal-body\"],[12],[2,\"\\n              Foo\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"div\"],[14,0,\"modal-footer\"],[12],[2,\"\\n              Bar\\n            \"],[13],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"hasEval\":false,\"upvars\":[\"hash\"]}",
                      meta: {}
                    }));

                  case 2:
                    assert.dom('.modal-dialog').hasClass('modal-dialog-centered');

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('additional classes on the modal-dialog', function () {
        (0, _qunit.test)('it should add the passed class on the modal dialog', /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return (0, _testHelpers.render)(Ember.HTMLBars.template(
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
                      id: "zBjt/4D6",
                      block: "{\"symbols\":[],\"statements\":[[2,\"\\n          \"],[8,\"o-s-s/modal\",[],[[\"@title\",\"@options\"],[\"Test Modal\",[30,[36,0],null,[[\"modalClass\"],[\"foobar\"]]]]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"div\"],[14,0,\"modal-body\"],[12],[2,\"\\n              Foo\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"div\"],[14,0,\"modal-footer\"],[12],[2,\"\\n              Bar\\n            \"],[13],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"hasEval\":false,\"upvars\":[\"hash\"]}",
                      meta: {}
                    }));

                  case 2:
                    assert.dom('.modal-dialog').hasClass('foobar');

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('borderless header', function () {
        (0, _qunit.test)('it should add the good class on the modal dialog', /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return (0, _testHelpers.render)(Ember.HTMLBars.template(
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
                      id: "XwiYgvnr",
                      block: "{\"symbols\":[],\"statements\":[[2,\"\\n          \"],[8,\"o-s-s/modal\",[],[[\"@title\",\"@options\"],[\"Test Modal\",[30,[36,0],null,[[\"borderlessHeader\"],[true]]]]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"div\"],[14,0,\"modal-body\"],[12],[2,\"\\n              Foo\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"div\"],[14,0,\"modal-footer\"],[12],[2,\"\\n              Bar\\n            \"],[13],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"hasEval\":false,\"upvars\":[\"hash\"]}",
                      meta: {}
                    }));

                  case 2:
                    assert.dom('.modal-dialog .modal-header').hasClass('modal-header__borderless');

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4) {
            return _ref5.apply(this, arguments);
          };
        }());
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/toggle-switch-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/toggle-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it throws an error if no onChange action is passed', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, '[component][OSS::ToggleSwitch] Please provide an onChange action');
                });
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <OSS::ToggleSwitch />
                */
                {
                  id: "GbXxIv+U",
                  block: "{\"symbols\":[],\"statements\":[[8,\"o-s-s/toggle-switch\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it throws an error if no value is passed', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.onChange = function () {};

                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, '[component][OSS::ToggleSwitch] Please provide a boolean @value. @value is undefined');
                });
                _context2.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <OSS::ToggleSwitch @onChange={{this.onChange}} />
                */
                {
                  id: "FCgu1CbQ",
                  block: "{\"symbols\":[],\"statements\":[[8,\"o-s-s/toggle-switch\",[],[[\"@onChange\"],[[32,0,[\"onChange\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it throws an error if passed value is not a boolean', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.onChange = function () {};

                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, '[component][OSS::ToggleSwitch] Please provide a boolean @value. @value is string');
                });
                _context3.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <OSS::ToggleSwitch @value="true" @onChange={{this.onChange}} />
                */
                {
                  id: "5/bzXSW2",
                  block: "{\"symbols\":[],\"statements\":[[8,\"o-s-s/toggle-switch\",[],[[\"@value\",\"@onChange\"],[\"true\",[32,0,[\"onChange\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it applies the right class on the toggle switch depending on the value', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.value = false;

                this.onChange = function (v) {
                  _this.set('value', v);
                };

                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <OSS::ToggleSwitch @value={{this.value}} @onChange={{this.onChange}} />
                */
                {
                  id: "q+55ZRh6",
                  block: "{\"symbols\":[],\"statements\":[[8,\"o-s-s/toggle-switch\",[],[[\"@value\",\"@onChange\"],[[32,0,[\"value\"]],[32,0,[\"onChange\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 4:
                assert.dom('.upf-toggle').hasNoClass('upf-toggle--toggled');
                _context4.next = 7;
                return (0, _testHelpers.click)('.upf-toggle');

              case 7:
                assert.dom('.upf-toggle').hasClass('upf-toggle--toggled');

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it triggers the onChange action when clicking the button', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.onChange = function (v) {
                  assert.equal(v, false);
                };

                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <OSS::ToggleSwitch @value={{true}} @onChange={{this.onChange}} />
                */
                {
                  id: "MXUBbxXj",
                  block: "{\"symbols\":[],\"statements\":[[8,\"o-s-s/toggle-switch\",[],[[\"@value\",\"@onChange\"],[true,[32,0,[\"onChange\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 3:
                _context5.next = 5;
                return (0, _testHelpers.click)('.upf-toggle');

              case 5:
                assert.expect(1);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
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
