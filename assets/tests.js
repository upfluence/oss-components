'use strict';

define("dummy/tests/integration/components/modifiers/enable-tooltip-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var PLACEMENTS = [undefined, 'top', 'bottom', 'left', 'right'];
  (0, _qunit.module)('Integration | Component | modifiers/enable-tooltip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.title = 'Title';
    });

    function renderTooltip() {
      return _renderTooltip.apply(this, arguments);
    }

    function _renderTooltip() {
      _renderTooltip = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <div class="test-container" style="height: 20px; width: 40px"
                           {{enable-tooltip title=this.title subtitle=this.subtitle placement=this.placement icon=this.icon trigger=this.trigger html=this.html}}>
                      </div>
                    
                */
                {
                  "id": "JKPpd0PX",
                  "block": "[[[1,\"\\n      \"],[11,0],[24,0,\"test-container\"],[24,5,\"height: 20px; width: 40px\"],[4,[38,0],null,[[\"title\",\"subtitle\",\"placement\",\"icon\",\"trigger\",\"html\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"placement\"]],[30,0,[\"icon\"]],[30,0,[\"trigger\"]],[30,0,[\"html\"]]]]],[12],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"enable-tooltip\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));
      return _renderTooltip.apply(this, arguments);
    }

    (0, _qunit.test)("it doesn't render when the title is empty", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.title = '';
                _context.next = 3;
                return renderTooltip();

              case 3:
                _context.next = 5;
                return assert.tooltip('.test-container').doesNotExist();

              case 5:
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
    (0, _qunit.test)('it renders the correct title', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return renderTooltip();

              case 2:
                _context2.next = 4;
                return assert.tooltip('.test-container').hasTitle(this.title);

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
    (0, _qunit.module)('icon attribute', function () {
      (0, _qunit.test)('it renders the correct icon', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.icon = 'far fa-wine-glass-alt';
                  _context3.next = 3;
                  return renderTooltip();

                case 3:
                  _context3.next = 5;
                  return assert.tooltip('.test-container').hasIcon(this.icon);

                case 5:
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
      (0, _qunit.test)("it doesn't render the icon", /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return renderTooltip();

                case 2:
                  _context4.next = 4;
                  return assert.tooltip('.test-container').doesNotHaveIcon();

                case 4:
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
    (0, _qunit.module)('subtitle attribute', function () {
      (0, _qunit.test)('it renders the correct subtitle', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.subtitle = 'subtitle';
                  _context5.next = 3;
                  return renderTooltip();

                case 3:
                  _context5.next = 5;
                  return assert.tooltip('.test-container').hasSubtitle(this.subtitle);

                case 5:
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
      (0, _qunit.test)("it doesn't render the subtitle", /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return renderTooltip();

                case 2:
                  _context6.next = 4;
                  return assert.tooltip('.test-container').doesNotHaveSubtitle();

                case 4:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('placement attribute', function () {
      PLACEMENTS.forEach(function (placement) {
        (0, _qunit.test)("it renders the correct placement ".concat(placement), /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.placement = placement;
                    _context7.next = 3;
                    return renderTooltip();

                  case 3:
                    _context7.next = 5;
                    return assert.tooltip('.test-container').hasPlacement(placement || 'bottom');

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          return function (_x7) {
            return _ref8.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('trigger attribute', function () {
      (0, _qunit.test)('it renders when hovering and focusing the element with undefined trigger', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return renderTooltip();

                case 2:
                  _context8.next = 4;
                  return assert.tooltip('.test-container').exists();

                case 4:
                  _context8.next = 6;
                  return assert.tooltip('.test-container').exists('focusin');

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders when hovering the element', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  this.trigger = 'hover';
                  _context9.next = 3;
                  return renderTooltip();

                case 3:
                  _context9.next = 5;
                  return assert.tooltip('.test-container').exists();

                case 5:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders when focusing the element', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  this.trigger = 'focus';
                  _context10.next = 3;
                  return renderTooltip();

                case 3:
                  _context10.next = 5;
                  return assert.tooltip('.test-container').exists('focusin');

                case 5:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('html attribute', function () {
      (0, _qunit.test)("it doesn't render the html safe by default", /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return renderTooltip();

                case 2:
                  _context11.next = 4;
                  return assert.tooltip('.test-container').isNotHtmlSafe();

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the html safe when the value is true', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  this.html = true;
                  _context12.next = 3;
                  return renderTooltip();

                case 3:
                  _context12.next = 5;
                  return assert.tooltip('.test-container').isHtmlSafe();

                case 5:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
      (0, _qunit.test)("it doesn't render the html safe when the value is false", /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  this.html = false;
                  _context13.next = 3;
                  return renderTooltip();

                case 3:
                  _context13.next = 5;
                  return assert.tooltip('.test-container').isNotHtmlSafe();

                case 5:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/modifiers/on-bottom-reached-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | modifiers/on-bottom-reached', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it triggers the callback when the bottom of the div is reached', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.bottomReached = function () {
                  assert.ok(true, 'Entered the bottom reached callback');
                };

                _context.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
                           {{on-bottom-reached this.bottomReached}}>
                        <div style="height: 250px">hello</div>
                      </div>
                    
                */
                {
                  "id": "OxfzSyPd",
                  "block": "[[[1,\"\\n      \"],[11,0],[24,0,\"scrollable\"],[24,5,\"background: red; height: 100px; overflow: scroll\"],[4,[38,0],[[30,0,[\"bottomReached\"]]],null],[12],[1,\"\\n        \"],[10,0],[14,5,\"height: 250px\"],[12],[1,\"hello\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[\"on-bottom-reached\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context.next = 5;
                return (0, _testHelpers.scrollTo)('.scrollable', 0, document.querySelector('.scrollable').scrollHeight - document.querySelector('.scrollable').clientHeight);

              case 5:
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
  });
});
define("dummy/tests/integration/components/modifiers/scroll-shadow-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (0, _qunit.module)('Integration | Component | modifiers/scroll-shadow', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    var itemNumbers = new Array(6).fill(null).map(function (_, i) {
      return i;
    });

    var ResizeObserverMock = /*#__PURE__*/function () {
      function ResizeObserverMock() {
        _classCallCheck(this, ResizeObserverMock);
      }

      _createClass(ResizeObserverMock, [{
        key: "observe",
        value: function observe() {}
      }, {
        key: "unobserve",
        value: function unobserve() {}
      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ResizeObserverMock;
    }();

    (0, _qunit.module)('when container has scrollbar', function (hooks) {
      hooks.beforeEach(function () {
        this.itemNumbers = itemNumbers;
      });
      (0, _qunit.test)('it should have scroll shadow class', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "u/4JtUpp",
                    "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n          \"],[11,0],[24,0,\"items-container\"],[24,5,\"max-height: 80px;overflow: auto;\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"              \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context.next = 4;
                  return (0, _testHelpers.waitFor)('.scroll-shadow', {
                    timeout: 2000
                  });

                case 4:
                  assert.dom('.items-container').hasClass('scroll-shadow');

                case 5:
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
      (0, _qunit.module)('when using color', function () {
        (0, _qunit.test)('with default color', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                      "id": "aRPLgN49",
                      "block": "[[[1,\"\\n          \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n            \"],[11,0],[24,0,\"items-container\"],[24,5,\"max-height: 80px;overflow: auto;\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"                \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    _context2.next = 4;
                    return (0, _testHelpers.waitFor)('.scroll-shadow--default', {
                      timeout: 2000
                    });

                  case 4:
                    assert.dom('.items-container').hasClass('scroll-shadow--default');

                  case 5:
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
        (0, _qunit.test)('with field color', /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                      "id": "FGpOXZ62",
                      "block": "[[[1,\"\\n          \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n            \"],[11,0],[24,0,\"items-container\"],[24,5,\"max-height: 80px;overflow: auto;\"],[4,[38,0],null,[[\"color\"],[\"field\"]]],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"                \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    _context3.next = 4;
                    return (0, _testHelpers.waitFor)('.scroll-shadow--field', {
                      timeout: 2000
                    });

                  case 4:
                    assert.dom('.items-container').hasClass('scroll-shadow--field');

                  case 5:
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
    });
    (0, _qunit.module)('when container has not scrollbar', function (hooks) {
      hooks.beforeEach(function () {
        this.itemNumbers = itemNumbers;
      });
      (0, _qunit.test)('it should not have scroll shadow classes', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "tbeVa5c5",
                    "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n          \"],[11,0],[24,0,\"items-container\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"              \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.items-container').doesNotHaveClass('scroll-shadow');
                  assert.dom('.items-container').doesNotHaveClass('scroll-shadow--white');

                case 4:
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
    (0, _qunit.module)('when container change scrollbar dynamically', function (hooks) {
      hooks.beforeEach(function () {
        this.itemNumbers = itemNumbers;
      });
      (0, _qunit.test)('it should call ResizeObserver', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var resizeObserverStub, container;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  resizeObserverStub = _sinon.default.stub(ResizeObserverMock.prototype, 'observe');
                  window.ResizeObserver = ResizeObserverMock;
                  _context5.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "tbeVa5c5",
                    "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"position: relative\"],[12],[1,\"\\n          \"],[11,0],[24,0,\"items-container\"],[4,[38,0],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"itemNumbers\"]]],null]],null],null,[[[1,\"              \"],[10,0],[12],[1,\"Item \"],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"itemNumber\"],false,[\"scroll-shadow\",\"each\",\"-track-array\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  container = document.querySelector('.items-container');
                  container.style.maxHeight = '80px';
                  container.style.overflow = 'auto';
                  assert.ok(resizeObserverStub.calledOnce);

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/access-panel-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/object"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon, _object) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/access-panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
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

    function renderComponent() {
      return _renderComponent.apply(this, arguments);
    }

    function _renderComponent() {
      _renderComponent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                  "id": "tyc4en3+",
                  "block": "[[[8,[39,0],null,[[\"@records\",\"@loading\",\"@initialLoad\",\"@onBottomReached\",\"@onSearch\",\"@onClose\"],[[30,0,[\"records\"]],[30,0,[\"loading\"]],[30,0,[\"initialLoad\"]],[30,0,[\"loadMore\"]],[30,0,[\"onSearch\"]],[30,0,[\"onClose\"]]]],[[\"header\",\"columns\",\"row\",\"empty-state\",\"no-results\"],[[[[1,\"Header\"]],[]],[[[1,\"Columns\"]],[]],[[[1,\"row display: \"],[1,[30,1,[\"label\"]]]],[1]],[[[10,0],[14,0,\"empty-state\"],[12],[1,\"empty state\"],[13]],[]],[[[10,0],[14,0,\"no-results\"],[12],[1,\"no search results\"],[13]],[]]]]],[1,\"\\n      \"]],[\"record\"],false,[\"o-s-s/access-panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
      return _renderComponent.apply(this, arguments);
    }

    (0, _qunit.test)('it renders the right empty state when no records are found and there is no ongoing search', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.records = [];
                _context.next = 3;
                return renderComponent();

              case 3:
                assert.dom('.empty-state').exists();
                assert.dom('.empty-state').hasText('empty state');

              case 5:
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
    (0, _qunit.test)('the initial loading state is correctly displayed', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.loading = true;
                this.initialLoad = true;
                _context2.next = 4;
                return renderComponent();

              case 4:
                assert.dom('.oss-access-panel-container__row').exists({
                  count: 12
                });
                assert.dom('.oss-access-panel-container__row .upf-skeleton-effect').exists({
                  count: 24
                });

              case 6:
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
    (0, _qunit.test)('the initial loading state is correctly displayed', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.loading = true;
                this.initialLoad = false;
                _context3.next = 4;
                return renderComponent();

              case 4:
                assert.dom('.oss-access-panel-container__row').exists({
                  count: 5
                });
                assert.dom('.oss-access-panel-container__row .upf-skeleton-effect').exists({
                  count: 6
                });

              case 6:
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
    (0, _qunit.test)('The header named block is correctly filled', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return renderComponent();

              case 2:
                assert.dom('.oss-access-panel-container__header').exists();
                assert.dom('.oss-access-panel-container__header').hasText('Header');

              case 4:
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
    (0, _qunit.test)('The columns named block is correctly filled', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return renderComponent();

              case 2:
                assert.dom('.oss-access-panel-container__rows-header').exists();
                assert.dom('.oss-access-panel-container__rows-header').hasText('Columns');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('The records are correctly displayed using the row named block', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return renderComponent();

              case 2:
                assert.dom('.oss-access-panel-container__row').exists({
                  count: 2
                });
                assert.dom('.oss-access-panel-container__row:first-child').hasText('row display: foo');
                assert.dom('.oss-access-panel-container__row:last-child').hasText('row display: bar');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Search', function () {
      (0, _qunit.test)('it calls the onSearch arg when a keyword is typed', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return renderComponent();

                case 2:
                  _context7.next = 4;
                  return (0, _testHelpers.fillIn)('.oss-input-container input', 'fo');

                case 4:
                  _context7.next = 6;
                  return (0, _testHelpers.typeIn)('.oss-input-container input', 'o', {
                    delay: 0
                  });

                case 6:
                  assert.ok(this.onSearch.calledOnceWithExactly('foo'));

                case 7:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders the right empty state when no records are found and there is an ongoing search', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.onSearch = _sinon.default.stub().callsFake(function () {
                    (0, _object.set)(_this, 'records', []);
                  });
                  _context8.next = 3;
                  return renderComponent();

                case 3:
                  _context8.next = 5;
                  return (0, _testHelpers.fillIn)('.oss-input-container input', 'fo');

                case 5:
                  _context8.next = 7;
                  return (0, _testHelpers.typeIn)('.oss-input-container input', 'o', {
                    delay: 0
                  });

                case 7:
                  assert.dom('.no-results').exists();
                  assert.dom('.no-results').hasText('no search results');

                case 9:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/alert-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var ALERT_SKINS = ['success', 'error', 'info', 'warning'];
  var ICONS = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-triangle',
    info: 'fa-info-circle',
    warning: 'fa-exclamation-circle'
  };
  (0, _qunit.module)('Integration | Component | o-s-s/alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Alert @skin="success" />
                */
                {
                  "id": "Rf8aFhs+",
                  "block": "[[[8,[39,0],null,[[\"@skin\"],[\"success\"]],null]],[],false,[\"o-s-s/alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-alert').exists({
                  count: 1
                });

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
    (0, _qunit.test)('it sets info as default if no skin is specified', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Alert />
                */
                {
                  "id": "B81+XB/i",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-alert').hasClass('upf-alert--info');

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
    ALERT_SKINS.forEach(function (skin) {
      (0, _qunit.test)("it renders ".concat(skin, " skin correctly"), /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.skin = skin;
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Alert @skin={{this.skin}} @title={{concat "Title " this.skin}} @subtitle={{concat "Subitle " this.skin}} />
                  */
                  {
                    "id": "xXQJE3ce",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@title\",\"@subtitle\"],[[30,0,[\"skin\"]],[28,[37,1],[\"Title \",[30,0,[\"skin\"]]],null],[28,[37,1],[\"Subitle \",[30,0,[\"skin\"]]],null]]],null]],[],false,[\"o-s-s/alert\",\"concat\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-alert .icon i').hasClass('far');
                  assert.dom('.upf-alert .icon i').hasClass("".concat(ICONS[skin]));
                  assert.dom('.upf-alert .title').hasText("Title ".concat(skin));
                  assert.dom('.upf-alert .subtitle').hasText("Subitle ".concat(skin));

                case 7:
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
    });
    (0, _qunit.module)('@plain parameter', function () {
      (0, _qunit.test)('if true, the background-color is grey', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Alert @plain={{true}} />
                  */
                  {
                    "id": "o265rDzd",
                    "block": "[[[8,[39,0],null,[[\"@plain\"],[true]],null]],[],false,[\"o-s-s/alert\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-alert .main-container').hasClass('main-container--plain');

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
      (0, _qunit.test)('if false, the background-color is white', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Alert @plain={{false}} />
                  */
                  {
                    "id": "iXRifVDn",
                    "block": "[[[8,[39,0],null,[[\"@plain\"],[false]],null]],[],false,[\"o-s-s/alert\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-alert .main-container').hasNoClass('main-container--plain');

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('if undefined, the background-color is grey', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Alert />
                  */
                  {
                    "id": "B81+XB/i",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/alert\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-alert .main-container').hasClass('main-container--plain');

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('@closable parameter', function () {
      (0, _qunit.test)('if true, display the cross icon which delete alert when you click on it', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <div><OSS::Alert @closable={{true}} /></div>
                  */
                  {
                    "id": "sHff+x31",
                    "block": "[[[10,0],[12],[8,[39,0],null,[[\"@closable\"],[true]],null],[13]],[],false,[\"o-s-s/alert\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-alert').exists();
                  assert.dom('.upf-alert .main-container .fx-col i').exists();
                  assert.dom('.upf-alert .main-container .fx-col i').hasClass('fa-times');
                  _context7.next = 7;
                  return (0, _testHelpers.click)('.upf-alert .main-container .fx-col i');

                case 7:
                  assert.dom('.upf-alert').doesNotExist();

                case 8:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('if false, the cross icon is not displayed', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Alert @closable={{false}} />
                  */
                  {
                    "id": "ZNVkWojl",
                    "block": "[[[8,[39,0],null,[[\"@closable\"],[false]],null]],[],false,[\"o-s-s/alert\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-alert').exists();
                  assert.dom('.upf-alert .main-container .fx-col i').doesNotExist();

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('if undefined, the cross icon is not displayed', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Alert />
                  */
                  {
                    "id": "B81+XB/i",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/alert\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-alert').exists();
                  assert.dom('.upf-alert .main-container .fx-col i').doesNotExist();

                case 4:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('clicking the cross icon also calls the onClose argument provided', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  this.onClose = _sinon.default.stub();
                  _context10.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <div><OSS::Alert @closable={{true}} @onClose={{this.onClose}} /></div>
                  */
                  {
                    "id": "GS869ZsB",
                    "block": "[[[10,0],[12],[8,[39,0],null,[[\"@closable\",\"@onClose\"],[true,[30,0,[\"onClose\"]]]],null],[13]],[],false,[\"o-s-s/alert\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context10.next = 5;
                  return (0, _testHelpers.click)('.upf-alert .main-container .fx-col i');

                case 5:
                  assert.ok(this.onClose.calledOnce);
                  assert.dom('.upf-alert').doesNotExist();

                case 7:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('it renders the extra-content named block', /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Alert><:extra-content><div>Hello</div></:extra-content></OSS::Alert>
                */
                {
                  "id": "mW7BpVRZ",
                  "block": "[[[8,[39,0],null,null,[[\"extra-content\"],[[[[10,0],[12],[1,\"Hello\"],[13]],[]]]]]],[],false,[\"o-s-s/alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-alert .text-container div').hasText('Hello');

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/array-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | OSS::ArrayInput', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    var onChange = _sinon.default.stub();

    var validator = _sinon.default.stub();

    function fillInputAndValidate() {
      return _fillInputAndValidate.apply(this, arguments);
    }

    function _fillInputAndValidate() {
      _fillInputAndValidate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var keyword,
            input,
            _args13 = arguments;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                keyword = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : 'keyword';
                _context13.next = 3;
                return (0, _testHelpers.fillIn)('.array-input-container input', keyword);

              case 3:
                input = (0, _testHelpers.find)('.array-input-container input');
                _context13.next = 6;
                return (0, _testHelpers.triggerKeyEvent)(input, 'keydown', 'Enter', {
                  code: 'Enter'
                });

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));
      return _fillInputAndValidate.apply(this, arguments);
    }

    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ArrayInput />
                */
                {
                  "id": "xSmTQTjQ",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/array-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.array-input-container').exists();

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
    (0, _qunit.module)('@values parameter', function (hooks) {
      hooks.beforeEach(function () {
        this.loadedValues = ['value1', 'value2'];
      });
      (0, _qunit.test)('Passing @values parameter displays the items', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          var domTags;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @values={{this.loadedValues}} />
                  */
                  {
                    "id": "1OKbgUgG",
                    "block": "[[[8,[39,0],null,[[\"@values\"],[[30,0,[\"loadedValues\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context2.next = 4;
                  return (0, _testHelpers.findAll)('.upf-chip');

                case 4:
                  domTags = _context2.sent;
                  assert.dom(domTags[0]).hasText('value1');
                  assert.dom(domTags[1]).hasText('value2');

                case 7:
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
    (0, _qunit.module)('WHEN @onChange function is set', function (hooks) {
      hooks.beforeEach(function () {
        this.onChange = onChange;
      });
      (0, _qunit.test)('it is triggered on keyword addition', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @onChange={{this.onChange}} />
                  */
                  {
                    "id": "GUtRzzWL",
                    "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context3.next = 4;
                  return fillInputAndValidate();

                case 4:
                  assert.ok(onChange.calledWith(['keyword']));

                case 5:
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
      (0, _qunit.test)('it is triggered on keyword deletion', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @onChange={{this.onChange}} />
                  */
                  {
                    "id": "GUtRzzWL",
                    "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context4.next = 4;
                  return fillInputAndValidate();

                case 4:
                  assert.ok(onChange.calledWith(['keyword']));
                  _context4.next = 7;
                  return (0, _testHelpers.click)('.upf-chip i');

                case 7:
                  assert.dom('.upf-chip').doesNotExist();
                  assert.ok(onChange.calledWith([]));

                case 9:
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
      (0, _qunit.test)('it is triggered on keyword edition', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @onChange={{this.onChange}} />
                  */
                  {
                    "id": "GUtRzzWL",
                    "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context5.next = 4;
                  return fillInputAndValidate();

                case 4:
                  assert.ok(onChange.calledWith(['keyword']));
                  _context5.next = 7;
                  return (0, _testHelpers.triggerKeyEvent)('.array-input-container input', 'keydown', 'Backspace', {
                    code: 'Backspace'
                  });

                case 7:
                  assert.dom('.upf-chip').doesNotExist();
                  assert.ok(onChange.calledWith([]));

                case 9:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('WHEN @onValidator function is set', function (hooks) {
      hooks.beforeEach(function () {
        this.validator = validator;
      });
      (0, _qunit.test)('it is triggered on keyword addition', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @validator={{this.validator}} />
                  */
                  {
                    "id": "ijchKe5r",
                    "block": "[[[8,[39,0],null,[[\"@validator\"],[[30,0,[\"validator\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context6.next = 4;
                  return fillInputAndValidate('hashtag');

                case 4:
                  assert.ok(validator.calledWith('hashtag'));

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('WHEN the validator is truthy, the value is added as a tag', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  validator.returns(true);
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @validator={{this.validator}} />
                  */
                  {
                    "id": "ijchKe5r",
                    "block": "[[[8,[39,0],null,[[\"@validator\"],[[30,0,[\"validator\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context7.next = 5;
                  return fillInputAndValidate('hashtag');

                case 5:
                  assert.ok(validator.calledWith('hashtag'));
                  assert.ok(validator.returned(true));
                  assert.dom('.upf-chip').exists();
                  assert.dom('.upf-chip').hasText('hashtag');

                case 9:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('WHEN the validator is falsy, the value is not added', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  validator.returns(false);
                  _context8.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @validator={{this.validator}} />
                  */
                  {
                    "id": "ijchKe5r",
                    "block": "[[[8,[39,0],null,[[\"@validator\"],[[30,0,[\"validator\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context8.next = 5;
                  return fillInputAndValidate('hashtag');

                case 5:
                  assert.ok(validator.calledWith('hashtag'));
                  assert.ok(validator.returned(false));
                  assert.dom('.upf-chip').doesNotExist();

                case 8:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('WHEN the user presses on the Backspace key', function () {
      (0, _qunit.test)('If there are no tags, nothing happens', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput />
                  */
                  {
                    "id": "xSmTQTjQ",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context9.next = 4;
                  return (0, _testHelpers.triggerKeyEvent)('.array-input-container input', 'keydown', 'Backspace', {
                    code: 'Backspace'
                  });

                case 4:
                  assert.dom('.upf-chip').doesNotExist();
                  assert.dom('.array-input-container').exists();
                  assert.dom('.array-input-container input').exists();

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If there are tags, the last one is removed and is passed to edit mode', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var domTags;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  this.loadedValues = ['value1', 'value2'];
                  _context10.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @values={{this.loadedValues}} />
                  */
                  {
                    "id": "1OKbgUgG",
                    "block": "[[[8,[39,0],null,[[\"@values\"],[[30,0,[\"loadedValues\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  domTags = (0, _testHelpers.findAll)('.upf-chip');
                  assert.equal(domTags.length, 2);
                  assert.dom(domTags[1]).hasText('value2');
                  _context10.next = 8;
                  return (0, _testHelpers.triggerKeyEvent)('.array-input-container input', 'keydown', 'Backspace', {
                    code: 'Backspace'
                  });

                case 8:
                  domTags = (0, _testHelpers.findAll)('.upf-chip');
                  assert.equal(domTags.length, 1);
                  assert.dom('.array-input-container input').hasValue('value2');

                case 11:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Keyboard validation', function () {
      (0, _qunit.test)('entries are validated when one of the extra keyboard trigger is hit', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          var input;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ArrayInput @keyboardTriggers={{array " "}} />
                  */
                  {
                    "id": "qUmYcC4G",
                    "block": "[[[8,[39,0],null,[[\"@keyboardTriggers\"],[[28,[37,1],[\" \"],null]]],null]],[],false,[\"o-s-s/array-input\",\"array\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context11.next = 4;
                  return (0, _testHelpers.fillIn)('.array-input-container input', 'foobar');

                case 4:
                  input = (0, _testHelpers.find)('.array-input-container input');
                  _context11.next = 7;
                  return (0, _testHelpers.triggerKeyEvent)(input, 'keydown', ' ');

                case 7:
                  assert.dom('.upf-chip').exists();
                  assert.dom('.upf-chip').hasText('foobar');

                case 9:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('Clicking on the remove icon suppresses the target entry', /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
        var domTagsRemove;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.loadedValues = ['value1', 'value2'];
                _context12.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ArrayInput @values={{this.loadedValues}} />
                */
                {
                  "id": "1OKbgUgG",
                  "block": "[[[8,[39,0],null,[[\"@values\"],[[30,0,[\"loadedValues\"]]]],null]],[],false,[\"o-s-s/array-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                domTagsRemove = (0, _testHelpers.findAll)('.upf-chip');
                assert.equal(domTagsRemove.length, 2);
                _context12.next = 7;
                return (0, _testHelpers.click)('.upf-chip i');

              case 7:
                domTagsRemove = (0, _testHelpers.findAll)('.upf-chip');
                assert.equal(domTagsRemove.length, 1);
                assert.dom('.upf-chip').hasText('value2');

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function (_x12) {
        return _ref13.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/avatar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/avatar"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _avatar) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/avatar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('Default behavior', function () {
      (0, _qunit.test)('it displays the image when it is provided', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar @image="http://foo.co/bar.png" />
                  */
                  {
                    "id": "YtDsPCu/",
                    "block": "[[[8,[39,0],null,[[\"@image\"],[\"http://foo.co/bar.png\"]],null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-avatar').exists();
                  assert.dom('.upf-avatar img').exists();
                  assert.dom('.upf-avatar img').hasAttribute('src', 'http://foo.co/bar.png');

                case 5:
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
      (0, _qunit.test)('it displays the initials when they are provided', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar @initials="TS" />
                  */
                  {
                    "id": "f/33aJfB",
                    "block": "[[[8,[39,0],null,[[\"@initials\"],[\"TS\"]],null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-avatar').exists();
                  assert.dom('.upf-avatar span').exists();
                  assert.dom('.upf-avatar span').hasText('TS');

                case 5:
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
      (0, _qunit.test)('it displays the default image when initials and image are not provided', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar />
                  */
                  {
                    "id": "/DPgB3m1",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-avatar').exists();
                  assert.dom('.upf-avatar img').exists();
                  assert.dom('.upf-avatar img').hasAttribute('src', _avatar.DEFAULT_IMAGE_URL);

                case 5:
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
      (0, _qunit.test)('it displays the image when image and initials are provided', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar @image="http://foo.co/bar.png" @initials="TS" />
                  */
                  {
                    "id": "eyit4QXW",
                    "block": "[[[8,[39,0],null,[[\"@image\",\"@initials\"],[\"http://foo.co/bar.png\",\"TS\"]],null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-avatar').exists();
                  assert.dom('.upf-avatar img').exists();
                  assert.dom('.upf-avatar img').hasAttribute('src', 'http://foo.co/bar.png');

                case 5:
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
    (0, _qunit.module)('Sizes', function () {
      (0, _qunit.test)('it sets the right default class when size is not provided', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar />
                  */
                  {
                    "id": "/DPgB3m1",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-avatar').exists();
                  assert.dom('.upf-avatar').hasClass("upf-avatar--md");

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      Object.keys(_avatar.SizeDefinition).forEach(function (size) {
        (0, _qunit.test)("it sets the right class when using a supported size: ".concat(size), /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.size = size;
                    _context6.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::Avatar @size={{this.size}} />
                    */
                    {
                      "id": "9sZU5tcG",
                      "block": "[[[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null]],[],false,[\"o-s-s/avatar\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.dom('.upf-avatar').exists();
                    assert.dom('.upf-avatar').hasClass("upf-avatar--".concat(size));

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          return function (_x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('Error behavior', function () {
      (0, _qunit.test)('it throws an error if the wrong size argument is passed', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, "Assertion Failed: [component][OSS::Avatar] Unknown size. Available sizes are: ".concat(Object.keys(_avatar.SizeDefinition).join(', ')));
                  });
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar @size="test" />
                  */
                  {
                    "id": "V2CXC3Hq",
                    "block": "[[[8,[39,0],null,[[\"@size\"],[\"test\"]],null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it displays the initials when both initials and image are provided and the image fails to load', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar @image="http://foo.co/bar.p" @initials="TS" />
                  */
                  {
                    "id": "/6lLb1pD",
                    "block": "[[[8,[39,0],null,[[\"@image\",\"@initials\"],[\"http://foo.co/bar.p\",\"TS\"]],null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context8.next = 4;
                  return (0, _testHelpers.waitFor)('.upf-avatar span');

                case 4:
                  assert.dom('.upf-avatar').exists();
                  assert.dom('.upf-avatar span').exists();
                  assert.dom('.upf-avatar span').hasText('TS');

                case 7:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it displays the placeholder image when the image provided in parameters fails to load', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Avatar @image="http://foo.co/bar.p" />
                  */
                  {
                    "id": "w6sYtFyZ",
                    "block": "[[[8,[39,0],null,[[\"@image\"],[\"http://foo.co/bar.p\"]],null]],[],false,[\"o-s-s/avatar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context9.next = 4;
                  return (0, _testHelpers.waitUntil)(function () {
                    var _find;

                    return ((_find = (0, _testHelpers.find)('.upf-avatar img')) === null || _find === void 0 ? void 0 : _find.getAttribute('src')) === _avatar.DEFAULT_IMAGE_URL;
                  });

                case 4:
                  assert.dom('.upf-avatar').exists();
                  assert.dom('.upf-avatar img').exists();
                  assert.dom('.upf-avatar img').hasAttribute('src', _avatar.DEFAULT_IMAGE_URL);

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/badge-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/badge"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _badge) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/badge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.module)('sizes', function () {
      (0, _qunit.test)('it sets the right class when usng a supported size', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @size="lg" @text="2x" />
                  */
                  {
                    "id": "t21skA09",
                    "block": "[[[8,[39,0],null,[[\"@size\",\"@text\"],[\"lg\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-badge').exists();
                  assert.dom('.upf-badge').hasClass('upf-badge--size-lg');

                case 4:
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
      (0, _qunit.test)('it defaults to md size if none is passed', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @text="2x" />
                  */
                  {
                    "id": "SA53evHl",
                    "block": "[[[8,[39,0],null,[[\"@text\"],[\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-badge').exists();
                  assert.dom('.upf-badge').hasClass('upf-badge--size-md');

                case 4:
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
    (0, _qunit.module)('skins', function () {
      Object.keys(_badge.SkinDefinition).forEach(function (skin) {
        (0, _qunit.test)("it sets the right class when using a supported skin: ".concat(skin), /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.skin = skin;
                    _context3.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::Badge @skin={{this.skin}} @text="2x" />
                    */
                    {
                      "id": "Ldg9aUnG",
                      "block": "[[[8,[39,0],null,[[\"@skin\",\"@text\"],[[30,0,[\"skin\"]],\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.dom('.upf-badge').exists();
                    assert.dom('.upf-badge').hasClass("upf-badge--".concat(skin.startsWith('xtd') ? skin.replace('xtd', 'extended') : skin));

                  case 5:
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
      });
      (0, _qunit.test)('it adds the plain class when passed', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @skin="primary" @plain={{true}} @text="2x" />
                  */
                  {
                    "id": "m0xpp904",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@plain\",\"@text\"],[\"primary\",true,\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-badge').hasClass('upf-badge--plain');

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
    (0, _qunit.module)('content args', function () {
      (0, _qunit.test)('it displays the right icon when using the @icon arg', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @icon="fas fa-users" />
                  */
                  {
                    "id": "rBEAc5ut",
                    "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fas fa-users\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-badge').exists();
                  assert.dom('.upf-badge i').hasAttribute('class', 'fas fa-users');

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it displays the right text when using the @text arg', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @text="2x" />
                  */
                  {
                    "id": "SA53evHl",
                    "block": "[[[8,[39,0],null,[[\"@text\"],[\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-badge').exists();
                  assert.dom('.upf-badge .upf-badge__text').exists();
                  assert.dom('.upf-badge .upf-badge__text').hasText('2x');

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it displays the right image when using the @image arg', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @image="http://foo.co/bar.png" />
                  */
                  {
                    "id": "74LReQX5",
                    "block": "[[[8,[39,0],null,[[\"@image\"],[\"http://foo.co/bar.png\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-badge').exists();
                  assert.dom('.upf-badge img').exists();
                  assert.dom('.upf-badge img').hasAttribute('src', 'http://foo.co/bar.png');

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error when an unsupported skin is passed', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] Unknown skin. Available skins are: primary, success, alert, error, xtd-cyan, xtd-orange, xtd-yellow, xtd-lime, xtd-blue, xtd-violet');
                  });
                  _context8.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @skin="foo" @text="2x" />
                  */
                  {
                    "id": "HT7FGbbu",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@text\"],[\"foo\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error when an unsupported size is passed', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] Unknown size. Available sizes are: sm, md, lg');
                  });
                  _context9.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @size="foo" @text="2x" />
                  */
                  {
                    "id": "ESxSPYGg",
                    "block": "[[[8,[39,0],null,[[\"@size\",\"@text\"],[\"foo\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if no argument is passed', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] One of @icon, @image or @text arguments is mandatory. You passed 0 arguments');
                  });
                  _context10.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge />
                  */
                  {
                    "id": "1TU+F/l3",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if more than one content argument is passed', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Badge] One of @icon, @image or @text arguments is mandatory. You passed 2 arguments');
                  });
                  _context11.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Badge @icon="fas fa-users" @text="2x" />
                  */
                  {
                    "id": "bqPH9U7v",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@text\"],[\"fas fa-users\",\"2x\"]],null]],[],false,[\"o-s-s/badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/banner-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/banner', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Banner />
                */
                {
                  "id": "Dkwyjpto",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-banner').exists();

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
    (0, _qunit.test)('passing a font-awesome icon in the @icon parameter, displays the icon in a rounded badge', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Banner @icon="fas fa-check" />
                */
                {
                  "id": "4tD+dfWl",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fas fa-check\"]],null]],[],false,[\"o-s-s/banner\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-banner .fa-check').exists();

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
    (0, _qunit.test)('passing an image url in the @image parameter, displays the image in a rounded badge', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.url = 'https://thepressfree.com/wp-content/uploads/2021/11/Voici-pourquoi-Bruce-Banner-netait-plus-Smart-Hulk-dans-la-800x445.jpg';
                _context3.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Banner @image={{this.url}} />
                */
                {
                  "id": "HCX2NURD",
                  "block": "[[[8,[39,0],null,[[\"@image\"],[[30,0,[\"url\"]]]],null]],[],false,[\"o-s-s/banner\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.upf-banner img').exists();
                assert.dom('img').hasAttribute('src', this.url);

              case 5:
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
    (0, _qunit.test)('passing a title in the @title parameter, displays the title in the component', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Banner @title="Test Title" />
                */
                {
                  "id": "Gxp3rVRT",
                  "block": "[[[8,[39,0],null,[[\"@title\"],[\"Test Title\"]],null]],[],false,[\"o-s-s/banner\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-banner .font-weight-semibold').hasText('Test Title');

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
    (0, _qunit.test)('passing a subtitle in the @subtitle parameter, displays the title in the component', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Banner @subtitle="Test subtitle" />
                */
                {
                  "id": "IgDs3UTL",
                  "block": "[[[8,[39,0],null,[[\"@subtitle\"],[\"Test subtitle\"]],null]],[],false,[\"o-s-s/banner\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-banner .font-color-gray-500.text-size-4').hasText('Test subtitle');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('when passing a plain in the @plain parameter', function () {
      (0, _qunit.test)('when value is truthy, it sets gray-50 background', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Banner @plain={{true}} />
                  */
                  {
                    "id": "0S8iSNZB",
                    "block": "[[[8,[39,0],null,[[\"@plain\"],[true]],null]],[],false,[\"o-s-s/banner\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-banner.background-color-gray-50').exists();

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when value is falsy, it sets white background', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Banner @plain={{false}} />
                  */
                  {
                    "id": "9Nf0S3jM",
                    "block": "[[[8,[39,0],null,[[\"@plain\"],[false]],null]],[],false,[\"o-s-s/banner\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-banner.background-color-white').exists();

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when value is undefined, it sets white background', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Banner />
                  */
                  {
                    "id": "Dkwyjpto",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-banner.background-color-white').exists();

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('when passing a selected in the @selected parameter', function () {
      (0, _qunit.test)('when value is truthy, it adds upf-banner--selected class', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Banner @selected={{true}} />
                  */
                  {
                    "id": "tPNSw5Ml",
                    "block": "[[[8,[39,0],null,[[\"@selected\"],[true]],null]],[],false,[\"o-s-s/banner\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-banner.upf-banner--selected').exists();

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)("when value is falsy, it doesn't add upf-banner--selected class", /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Banner @selected={{false}} />
                  */
                  {
                    "id": "VqAV4OJh",
                    "block": "[[[8,[39,0],null,[[\"@selected\"],[false]],null]],[],false,[\"o-s-s/banner\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-banner.upf-banner--selected').doesNotExist();

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)("when value is undefined, it doesn't add upf-banner--selected class", /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Banner />
                  */
                  {
                    "id": "Dkwyjpto",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/banner\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-banner.upf-banner--selected').doesNotExist();

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('passing a custom-icon named block, renders inside the component', /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Banner @subtitle="Test subtitle">
                        <:custom-icon>
                          <OSS::Badge @text="2x" />
                        </:custom-icon>
                      </OSS::Banner>
                    
                */
                {
                  "id": "XNpz321K",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@subtitle\"],[\"Test subtitle\"]],[[\"custom-icon\"],[[[[1,\"\\n          \"],[8,[39,1],null,[[\"@text\"],[\"2x\"]],null],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/banner\",\"o-s-s/badge\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-badge').exists();

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x12) {
        return _ref13.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('passing an actions named block, renders inside the component', /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Banner @subtitle="Test subtitle">
                        <:actions>
                          <OSS::Button @skin="primary" @label="browse" @icon="fas fa-box-open" @size="md" />
                        </:actions>
                      </OSS::Banner>
                    
                */
                {
                  "id": "eQmLuK2q",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@subtitle\"],[\"Test subtitle\"]],[[\"actions\"],[[[[1,\"\\n          \"],[8,[39,1],null,[[\"@skin\",\"@label\",\"@icon\",\"@size\"],[\"primary\",\"browse\",\"fas fa-box-open\",\"md\"]],null],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/banner\",\"o-s-s/button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-btn').exists();

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x13) {
        return _ref14.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/button-dropdown-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/button-dropdown', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('the icon is not displayed if not provided', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ButtonDropdown @label="label"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                */
                {
                  "id": "gnivTC8l",
                  "block": "[[[8,[39,0],null,[[\"@label\"],[\"label\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').doesNotExist();

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
    (0, _qunit.test)('the label is not displayed if not provided', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ButtonDropdown @icon="far fa-users"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                */
                {
                  "id": "L7hoJO4w",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-users\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').doesNotExist();

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
    (0, _qunit.test)('the icon and label are displayed correctly when provided', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ButtonDropdown @icon="far fa-users" @label="label"><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                */
                {
                  "id": "jELuq6sR",
                  "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"far fa-users\",\"label\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').exists();
                assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').hasClass('far');
                assert.dom('.oss-button-dropdown__trigger .fx-row:first-child i').hasClass('fa-users');
                assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').exists();
                assert.dom('.oss-button-dropdown__trigger .fx-row:first-child span').hasText('label');

              case 7:
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
    (0, _qunit.module)('If @mainAction is undefined', function () {
      (0, _qunit.test)('Clicking on the button opens the dropdown', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label">
                                <:items>
                                  <div class="oss-button-dropdown__item">foo</div>
                                </:items>
                              </OSS::ButtonDropdown>
                  */
                  {
                    "id": "k/GDb8+e",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"far fa-users\",\"label\"]],[[\"items\"],[[[[1,\"\\n                \"],[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-button-dropdown__items').doesNotExist();
                  assert.dom('.oss-button-dropdown__trigger').hasAttribute('role', 'button');
                  _context4.next = 6;
                  return (0, _testHelpers.click)('.oss-button-dropdown__trigger');

                case 6:
                  assert.dom('.oss-button-dropdown__items').exists();
                  assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists({
                    count: 1
                  });
                  assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').hasText('foo');

                case 9:
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
      (0, _qunit.test)("Hasn't inner border separator", /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
                                <:items>
                                  <div class="oss-button-dropdown__item">foo</div>
                                </:items>
                              </OSS::ButtonDropdown>
                  */
                  {
                    "id": "Z2UQskzd",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[1,\"\\n                \"],[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-button-dropdown__trigger .fx-row:last-child').doesNotHaveStyle({
                    'border-left': '1px solid rgb(229, 231, 235)'
                  });

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('If @mainAction is defined', function (hooks) {
      hooks.beforeEach(function () {
        this.mainAction = _sinon.default.stub();
      });
      (0, _qunit.test)('Clicking on the button should not open the dropdown', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                  */
                  {
                    "id": "4YcUk/oy",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-button-dropdown__items').doesNotExist();
                  assert.dom('.oss-button-dropdown__trigger').hasNoAttribute('role', 'button');
                  _context6.next = 6;
                  return (0, _testHelpers.click)('.oss-button-dropdown__trigger');

                case 6:
                  assert.dom('.oss-button-dropdown__items').doesNotExist();

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Clicking on the left part should trigger mainAction', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                  */
                  {
                    "id": "4YcUk/oy",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.ok(this.mainAction.notCalled);
                  assert.dom('.oss-button-dropdown__trigger .fx-row:first-child').hasAttribute('role', 'button');
                  _context7.next = 6;
                  return (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:first-child');

                case 6:
                  assert.ok(this.mainAction.calledOnce);

                case 7:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Clicking on the caret container part opens the dropdown', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                  */
                  {
                    "id": "4YcUk/oy",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-button-dropdown__items').doesNotExist();
                  assert.dom('.oss-button-dropdown__trigger .fx-row:last-child').hasAttribute('role', 'button');
                  _context8.next = 6;
                  return (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:last-child');

                case 6:
                  assert.dom('.oss-button-dropdown__items').exists();
                  assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists({
                    count: 1
                  });
                  assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').hasText('foo');

                case 9:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Has inner border separator', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                  */
                  {
                    "id": "4YcUk/oy",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-button-dropdown__trigger .fx-row:last-child').hasStyle({
                    'border-left': '1px solid rgb(229, 231, 235)'
                  });

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('When the dropdown is opened', function (hooks) {
      hooks.beforeEach(function () {
        this.mainAction = _sinon.default.stub();
      });
      (0, _qunit.test)('Clicking on an item should close the dropdown', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
                                <:items>
                                  <div class="oss-button-dropdown__item">foo</div>
                                </:items>
                              </OSS::ButtonDropdown>
                  */
                  {
                    "id": "Z2UQskzd",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[1,\"\\n                \"],[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context10.next = 4;
                  return (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:last-child');

                case 4:
                  _context10.next = 6;
                  return (0, _testHelpers.click)('.oss-button-dropdown__items .oss-button-dropdown__item');

                case 6:
                  assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').doesNotExist();

                case 7:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Clicking on an item with stopPropagation should keep the dropdown opened', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  this.stopPropagation = function (e) {
                    e.stopPropagation();
                  };

                  _context11.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown @icon="far fa-users" @label="label" @mainAction={{this.mainAction}}>
                                <:items>
                                  <div class="oss-button-dropdown__item" {{on "click" this.stopPropagation}}>bar</div>
                                </:items>
                              </OSS::ButtonDropdown>
                  */
                  {
                    "id": "6Pn23fQg",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@mainAction\"],[\"far fa-users\",\"label\",[30,0,[\"mainAction\"]]]],[[\"items\"],[[[[1,\"\\n                \"],[11,0],[24,0,\"oss-button-dropdown__item\"],[4,[38,1],[\"click\",[30,0,[\"stopPropagation\"]]],null],[12],[1,\"bar\"],[13],[1,\"\\n              \"]],[]]]]]],[],false,[\"o-s-s/button-dropdown\",\"on\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context11.next = 5;
                  return (0, _testHelpers.click)('.oss-button-dropdown__trigger .fx-row:last-child');

                case 5:
                  _context11.next = 7;
                  return (0, _testHelpers.click)('.oss-button-dropdown__items .oss-button-dropdown__item');

                case 7:
                  assert.dom('.oss-button-dropdown__items .oss-button-dropdown__item').exists();

                case 8:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if no icon or label args is provided', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ButtonDropdown] You must pass either a @label or an @icon argument.');
                  });
                  _context12.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                  */
                  {
                    "id": "uZEQ2XX2",
                    "block": "[[[8,[39,0],null,null,[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if mainAction exists and is not a function', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ButtonDropdown] The parameter @mainAction should be a function.');
                  });
                  _context13.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ButtonDropdown  @label="test" @mainAction="foo" ><:items><div class="oss-button-dropdown__item">foo</div></:items></OSS::ButtonDropdown>
                  */
                  {
                    "id": "My0FEzSp",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@mainAction\"],[\"test\",\"foo\"]],[[\"items\"],[[[[10,0],[14,0,\"oss-button-dropdown__item\"],[12],[1,\"foo\"],[13]],[]]]]]],[],false,[\"o-s-s/button-dropdown\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/button-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the icon when present', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Button @icon="fab fa-facebook" />
                */
                {
                  "id": "lRw6ymS6",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fab fa-facebook\"]],null]],[],false,[\"o-s-s/button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-btn i').hasClass('fa-facebook');

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
    (0, _qunit.test)('it renders the icon and label when present', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Button @icon="fab fa-facebook" @label="Label" />
                */
                {
                  "id": "YfZYoRh8",
                  "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fab fa-facebook\",\"Label\"]],null]],[],false,[\"o-s-s/button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-btn i').hasClass('fa-facebook');
                assert.dom('.upf-btn span').hasClass('margin-left-xxx-sm');
                assert.dom('.upf-btn span').hasText('Label');

              case 5:
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
    (0, _qunit.test)('it renders the default button', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Button @label="Test" />
                */
                {
                  "id": "gudCmmbf",
                  "block": "[[[8,[39,0],null,[[\"@label\"],[\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-btn').exists({
                  count: 1
                });
                assert.dom('.upf-btn').hasClass('upf-btn--default');
                assert.dom('.upf-btn').hasText('Test');

              case 5:
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
    (0, _qunit.module)('it render with the correct skin', function () {
      (0, _qunit.test)('when using an unknown skin, it is set to default', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="unknown" @label="Test" />
                  */
                  {
                    "id": "3vsiopuu",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"unknown\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--default');

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
      (0, _qunit.test)('when using primary skin', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="primary" @label="Test" />
                  */
                  {
                    "id": "oGXdt4AE",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"primary\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--primary');

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using secondary skin', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="secondary" @label="Test" />
                  */
                  {
                    "id": "bSct/xBb",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"secondary\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--secondary');

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using destructive skin', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="destructive" @label="Test" />
                  */
                  {
                    "id": "HN/JJBtV",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"destructive\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--destructive');

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using alert skin', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="alert" @label="Test" />
                  */
                  {
                    "id": "7rOQzQ6Q",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"alert\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--alert');

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using success skin', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="success" @label="Test" />
                  */
                  {
                    "id": "MJ7GzxvX",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"success\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--success');

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using social-instagram skin', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="instagram" @label="Test" />
                  */
                  {
                    "id": "2Fo/kOts",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"instagram\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--social-instagram');

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using social-facebook skin', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="facebook" @label="Test" />
                  */
                  {
                    "id": "zWlJEXtL",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"facebook\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--social-facebook');

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using social-youtube skin', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @skin="youtube" @label="Test" />
                  */
                  {
                    "id": "2viUkVmw",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[\"youtube\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--social-youtube');

                case 3:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('it render with the right size', function () {
      (0, _qunit.test)('when using xs', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @size="xs" @label="Test" />
                  */
                  {
                    "id": "crfNYXod",
                    "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"xs\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--xs');

                case 3:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using sm', /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @size="sm" @label="Test" />
                  */
                  {
                    "id": "bD3nCNUZ",
                    "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"sm\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--sm');

                case 3:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        return function (_x14) {
          return _ref15.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using md', /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @size="md" @label="Test" />
                  */
                  {
                    "id": "8v1QA640",
                    "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"md\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--md');

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        return function (_x15) {
          return _ref16.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when using lg', /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @size="lg" @label="Test" />
                  */
                  {
                    "id": "YzpN3IzW",
                    "block": "[[[8,[39,0],null,[[\"@size\",\"@label\"],[\"lg\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--lg');

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function (_x16) {
          return _ref17.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('it renders with loading state', function () {
      (0, _qunit.test)('when using default loading', /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
          var btn;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @size="sm" @loading="true" @label="Test" />
                  */
                  {
                    "id": "bbFX4oZC",
                    "block": "[[[8,[39,0],null,[[\"@size\",\"@loading\",\"@label\"],[\"sm\",\"true\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  btn = document.querySelector('.upf-btn');
                  assert.equal(btn === null || btn === void 0 ? void 0 : btn.children[0].className, 'fas fa-circle-notch fa-spin');

                case 4:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function (_x17) {
          return _ref18.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('it renders a square button', function () {
      (0, _qunit.test)('when setting the square parameter to true', /*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(assert) {
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @square="true" @label="Test" />
                  */
                  {
                    "id": "Glv72jWC",
                    "block": "[[[8,[39,0],null,[[\"@square\",\"@label\"],[\"true\",\"Test\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-square-btn').exists();

                case 3:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));

        return function (_x18) {
          return _ref19.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('it renders with the right theme', function () {
      (0, _qunit.test)('it adds the right class for usage on dark theme', /*#__PURE__*/function () {
        var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(assert) {
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @label="Test" @theme="dark" />
                  */
                  {
                    "id": "94FrZ0h9",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@theme\"],[\"Test\",\"dark\"]],null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-btn').hasClass('upf-btn--dark-bg');

                case 3:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));

        return function (_x19) {
          return _ref20.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('it renders countDown', function (hooks) {
      hooks.beforeEach(function () {
        this.intlService = this.owner.lookup('service:intl');
      });
      (0, _qunit.test)('when clicking, it trigger the countdown', /*#__PURE__*/function () {
        var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(assert) {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  this.callback = function () {};

                  _context20.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @label="Test" @countDown={{hash callback=this.callback}} />
                  */
                  {
                    "id": "r9MPPvfk",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"callback\"],[[30,0,[\"callback\"]]]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context20.next = 5;
                  return (0, _testHelpers.click)('.upf-btn--default');

                case 5:
                  assert.dom('.upf-btn--default').hasText(this.intlService.t('oss-components.button.cancel_message', {
                    time: 5
                  }));

                case 6:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20, this);
        }));

        return function (_x20) {
          return _ref21.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when clicking, it executes callback at the end of the countdown', /*#__PURE__*/function () {
        var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(assert) {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  this.callback = _sinon.default.stub().callsFake(function () {});
                  _context21.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @label="Test" @countDown={{hash callback=this.callback time=50 step=10}} />
                  */
                  {
                    "id": "sSLBUBKu",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"callback\",\"time\",\"step\"],[[30,0,[\"callback\"]],50,10]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context21.next = 5;
                  return (0, _testHelpers.click)('.upf-btn--default');

                case 5:
                  _context21.next = 7;
                  return (0, _testHelpers.waitUntil)(function () {
                    var _document$querySelect, _document$querySelect2;

                    return (_document$querySelect = document.querySelector('.upf-btn--default')) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.textContent) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.includes('Test');
                  }, {
                    timeout: 1000
                  });

                case 7:
                  assert.true(this.callback.calledOnce);

                case 8:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21, this);
        }));

        return function (_x21) {
          return _ref22.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('when clicking again, it cancels the countdown', /*#__PURE__*/function () {
        var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(assert) {
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  this.callback = function () {};

                  _context22.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @label="Test" @countDown={{hash callback=this.callback}} />
                  */
                  {
                    "id": "r9MPPvfk",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"callback\"],[[30,0,[\"callback\"]]]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context22.next = 5;
                  return (0, _testHelpers.click)('.upf-btn--default');

                case 5:
                  _context22.next = 7;
                  return (0, _testHelpers.click)('.upf-btn--default');

                case 7:
                  assert.dom('.upf-btn--default').hasText('Test');

                case 8:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22, this);
        }));

        return function (_x22) {
          return _ref23.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it fails if @label and @icon are missing', /*#__PURE__*/function () {
        var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(assert) {
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Button] You must pass either a @label or an @icon argument.');
                  });
                  _context23.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button />
                  */
                  {
                    "id": "kGb/PEqR",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/button\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee23);
        }));

        return function (_x23) {
          return _ref24.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it fails if callback missing for @countDown argument', /*#__PURE__*/function () {
        var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(assert) {
          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, "Assertion Failed: [component][OSS::Button] You must pass either a hash with 'callback' value to @countDown argument.");
                  });
                  _context24.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Button @label="Test" @countDown={{hash time=1000}} />
                  */
                  {
                    "id": "0TJpu4LE",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@countDown\"],[\"Test\",[28,[37,1],null,[[\"time\"],[1000]]]]],null]],[],false,[\"o-s-s/button\",\"hash\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee24);
        }));

        return function (_x24) {
          return _ref25.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/checkbox-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onChange = function () {};
    });
    (0, _qunit.test)('it renders correctly', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.checked = false;
                _context.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />
                */
                {
                  "id": "T2jqiRvX",
                  "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.upf-checkbox input').isNotChecked();

              case 4:
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
    (0, _qunit.test)('the size arg is handled correctly', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Checkbox @checked={{true}} @onChange={{this.onChange}} @size="sm" />
                */
                {
                  "id": "cYE059jY",
                  "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\",\"@size\"],[true,[30,0,[\"onChange\"]],\"sm\"]],null]],[],false,[\"o-s-s/checkbox\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-checkbox').hasClass('upf-checkbox--sm');

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
    (0, _qunit.test)('it is correctly updated when the checked argument changes', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.checked = false;
                _context3.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />
                */
                {
                  "id": "T2jqiRvX",
                  "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('checked', true);
                assert.dom('.upf-checkbox input').isChecked();

              case 5:
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
    (0, _qunit.test)('disabled state is handled correctly', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var onChangeSpy;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                onChangeSpy = _sinon.default.spy(this.onChange);
                _context4.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Checkbox @checked={{false}} @onChange={{this.onChange}} @disabled={{true}} />
                */
                {
                  "id": "/+afY3qJ",
                  "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\",\"@disabled\"],[false,[30,0,[\"onChange\"]],true]],null]],[],false,[\"o-s-s/checkbox\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.upf-checkbox input').hasAttribute('disabled');
                _context4.next = 6;
                return (0, _testHelpers.click)('.upf-checkbox');

              case 6:
                assert.ok(onChangeSpy.neverCalledWith());

              case 7:
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
    (0, _qunit.test)('the onChange hooks is called with the new value', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.checked = false;

                this.onChange = function (value) {
                  assert.equal(value, true);
                };

                _context5.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />
                */
                {
                  "id": "T2jqiRvX",
                  "block": "[[[8,[39,0],null,[[\"@checked\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context5.next = 6;
                return (0, _testHelpers.click)('.upf-checkbox');

              case 6:
                assert.expect(1);

              case 7:
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
    (0, _qunit.module)('@partial argument', function () {
      (0, _qunit.test)('it is correctly updated when the partial argument changes', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.checked = true;
                  this.partial = false;
                  _context6.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />
                  */
                  {
                    "id": "Sxgc0e+y",
                    "block": "[[[8,[39,0],null,[[\"@checked\",\"@partial\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"partial\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  assert.dom('.upf-checkbox__fake-checkbox').hasNoClass('upf-checkbox__fake-checkbox--partial');
                  assert.dom('.upf-checkbox input').isChecked();
                  this.set('partial', true);
                  assert.dom('.upf-checkbox__fake-checkbox').hasClass('upf-checkbox__fake-checkbox--partial');

                case 8:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('if checked is truthy and partial is truthy, the checkbox is partially checked', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  this.checked = true;
                  this.partial = true;
                  _context7.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />
                  */
                  {
                    "id": "Sxgc0e+y",
                    "block": "[[[8,[39,0],null,[[\"@checked\",\"@partial\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"partial\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  assert.dom('.upf-checkbox__fake-checkbox').hasClass('upf-checkbox__fake-checkbox--partial');

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('if checked is truthy and partial is falsy, the checkbox is totally checked', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.checked = true;
                  this.partial = false;
                  _context8.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Checkbox @checked={{this.checked}} @partial={{this.partial}} @onChange={{this.onChange}} />
                  */
                  {
                    "id": "Sxgc0e+y",
                    "block": "[[[8,[39,0],null,[[\"@checked\",\"@partial\",\"@onChange\"],[[30,0,[\"checked\"]],[30,0,[\"partial\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/checkbox\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  assert.dom('.upf-checkbox__fake-checkbox').hasNoClass('upf-checkbox__fake-checkbox--partial');

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if checked argument is missing', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (error) {
                    assert.equal(error.message, 'Assertion Failed: [component][OSS::Checkbox] Boolean @checked argument is mandatory.');
                  });
                  _context9.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Checkbox />
                  */
                  {
                    "id": "yovpgGqB",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/checkbox\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if checked argument is missing', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (error) {
                    assert.equal(error.message, 'Assertion Failed: [component][OSS::Checkbox] @onChange argument is mandatory.');
                  });
                  _context10.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Checkbox @checked={{true}} />
                  */
                  {
                    "id": "q03HGh60",
                    "block": "[[[8,[39,0],null,[[\"@checked\"],[true]],null]],[],false,[\"o-s-s/checkbox\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/chip-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/chip", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _chip, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/chip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onRemove = function () {};

      this.label = 'Test';
    });
    (0, _qunit.module)('Default behavior', function () {
      (0, _qunit.test)('basic render', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />
                  */
                  {
                    "id": "ZUsPR75P",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-chip').exists();
                  assert.dom('.upf-chip span').exists();
                  assert.dom('.upf-chip i').exists();
                  assert.dom('.upf-chip').hasClass('upf-chip--default');
                  assert.dom('.upf-chip span').hasText(this.label);

                case 7:
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
      (0, _qunit.test)('it renders the proper label when @label is passed', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />
                  */
                  {
                    "id": "ZUsPR75P",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-chip').exists({
                    count: 1
                  });
                  assert.dom('.upf-chip').hasText('Test');

                case 4:
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
      (0, _qunit.test)('The component is disabled if the @disabled parameter is truthy', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{true}} />
                  */
                  {
                    "id": "nTNgy53m",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\",\"@disabled\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]],true]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-chip').exists({
                    count: 1
                  });
                  assert.dom('.upf-chip').hasClass('upf-chip--disabled');

                case 4:
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
    (0, _qunit.module)('@maxDisplayWidth', function () {
      (0, _qunit.test)('The component adds an ellispsis if the label is wider than @maxDisplayWidth', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label="Test with a huge label sentence" @onRemove={{this.onRemove}} @maxDisplayWidth={{100}} />
                  */
                  {
                    "id": "tOK3qF3L",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\",\"@maxDisplayWidth\"],[\"Test with a huge label sentence\",[30,0,[\"onRemove\"]],100]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-chip').exists({
                    count: 1
                  });
                  assert.dom('.upf-chip span').hasStyle({
                    maxWidth: '100px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  });

                case 4:
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
      (0, _qunit.test)('When the param is not set', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label="Test with a huge label sentence" @onRemove={{this.onRemove}} />
                  */
                  {
                    "id": "1B2yY/7G",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[\"Test with a huge label sentence\",[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-chip').exists({
                    count: 1
                  });
                  assert.dom('.upf-chip span').doesNotHaveAttribute('style');
                  assert.dom('.upf-chip').hasText('Test with a huge label sentence');

                case 5:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('On cross click event', function (hooks) {
      hooks.beforeEach(function () {
        this.onRemove = _sinon.default.stub();
      });
      (0, _qunit.test)('When clicking on the close icon, the component triggers the @onRemove method', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} />
                  */
                  {
                    "id": "ZUsPR75P",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context6.next = 4;
                  return (0, _testHelpers.click)('.upf-chip i');

                case 4:
                  assert.true(this.onRemove.calledOnce);

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When @disabled is true and clicking on the close icon, the component no triggers the @onRemove method', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label={{this.label}} @onRemove={{this.onRemove}} @disabled={{true}} />
                  */
                  {
                    "id": "nTNgy53m",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@onRemove\",\"@disabled\"],[[30,0,[\"label\"]],[30,0,[\"onRemove\"]],true]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context7.next = 4;
                  return (0, _testHelpers.click)('.upf-chip i');

                case 4:
                  assert.true(this.onRemove.notCalled);

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    Object.keys(_chip.SkinDefinition).forEach(function (skin) {
      (0, _qunit.test)("it sets the right class when using a supported skin: ".concat(skin), /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.skin = skin;
                  _context8.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @skin={{this.skin}} @label={{this.label}} @onRemove={{this.onRemove}} />
                  */
                  {
                    "id": "5KCB8khU",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\",\"@onRemove\"],[[30,0,[\"skin\"]],[30,0,[\"label\"]],[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-chip').exists();
                  assert.dom('.upf-chip').hasClass("upf-chip--".concat(_chip.SkinDefinition[this.skin]));

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('It throws an error if @onRemove is not passed', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Chip] The parameter @onRemove of type function is mandatory');
                  });
                  _context9.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @label={{this.label}} />
                  */
                  {
                    "id": "Mey2yObq",
                    "block": "[[[8,[39,0],null,[[\"@label\"],[[30,0,[\"label\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('It throws an error if @label is not passed', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Chip] The @label parameter is mandatory');
                  });
                  _context10.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Chip @onRemove={{this.onRemove}} />
                  */
                  {
                    "id": "tJYeXa74",
                    "block": "[[[8,[39,0],null,[[\"@onRemove\"],[[30,0,[\"onRemove\"]]]],null]],[],false,[\"o-s-s/chip\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/code-block-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/code-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.codeBlock = codeExample;
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock />
                */
                {
                  "id": "uNffFben",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.code-block').exists();

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
    (0, _qunit.test)('The code content is displayed properly', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var codeLines;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} />
                */
                {
                  "id": "TLGf4ySp",
                  "block": "[[[8,[39,0],null,[[\"@content\"],[[30,0,[\"codeBlock\"]]]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                codeLines = (0, _testHelpers.findAll)('.code-block code');
                assert.equal(codeLines.length, 60);
                assert.dom(codeLines[0]).hasText("import Component from '@glimmer/component';");
                assert.dom(codeLines[1]).hasText("import { action } from '@ember/object';");
                assert.dom(codeLines[2]).hasText("import { inject as service } from '@ember/service';");

              case 7:
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
    (0, _qunit.test)('If copyable parameter is set, the copy button is visible', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} />
                */
                {
                  "id": "OxouE7go",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@copyable\"],[[30,0,[\"codeBlock\"]],true]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.code-block .floating-copy-btn').exists();

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
    (0, _qunit.test)('Clicking on the copy button copies the code into the users clipboard', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var stubClipboard;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                stubClipboard = _sinon.default.stub(navigator.clipboard, 'writeText');
                _context4.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} />
                */
                {
                  "id": "OxouE7go",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@copyable\"],[[30,0,[\"codeBlock\"]],true]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context4.next = 5;
                return (0, _testHelpers.click)('.code-block .floating-copy-btn .upf-btn');

              case 5:
                assert.ok(stubClipboard.calledOnceWithExactly(this.codeBlock));

                _sinon.default.restore();

              case 7:
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
    (0, _qunit.test)('if onCopyMessage is set, it shows a toast message when the code is copied', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var stubToast;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _sinon.default.stub(navigator.clipboard, 'writeText');

                _context5.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @copyable={{true}} @onCopyMessage={{'Copied!'}} />
                */
                {
                  "id": "Cl2ibQ/o",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@copyable\",\"@onCopyMessage\"],[[30,0,[\"codeBlock\"]],true,\"Copied!\"]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                stubToast = _sinon.default.stub(this.owner.lookup('service:toast'), 'success');
                _context5.next = 6;
                return (0, _testHelpers.click)('.code-block .floating-copy-btn .upf-btn');

              case 6:
                assert.ok(stubToast.calledOnceWithExactly('Copied!', ''));

                _sinon.default.restore();

              case 8:
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
    (0, _qunit.test)('If scrollable parameter is set, the component is scrollable', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @scrollable={{true}} />
                */
                {
                  "id": "8SLQaJ+P",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@scrollable\"],[[30,0,[\"codeBlock\"]],true]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.code-container.scrollable').exists();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If scrollable parameter is unset, the component shows the bottom shadow', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} />
                */
                {
                  "id": "TLGf4ySp",
                  "block": "[[[8,[39,0],null,[[\"@content\"],[[30,0,[\"codeBlock\"]]]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.code-container.scroll-shadow').exists();

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If collapseHeight is set, the height of the component is equal to the param size', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
                */
                {
                  "id": "SmSWApT7",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.code-container').hasStyle({
                  height: '100px'
                });

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If collapseHeight is set, the uncollapse button is visible', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
                */
                {
                  "id": "SmSWApT7",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.floating-collapse-btn').exists();
                assert.dom('.floating-collapse-btn').hasText('Uncollapse');

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('Clicking on the uncollapse button doubles the components height', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
                */
                {
                  "id": "SmSWApT7",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context10.next = 4;
                return (0, _testHelpers.click)('.floating-collapse-btn');

              case 4:
                assert.dom('.code-container').hasStyle({
                  height: '200px'
                });

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('Clicking on the collapse button resets the height to the original collapseHeight parameter height', /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{102}} />
                */
                {
                  "id": "T8P20GUv",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],102]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context11.next = 4;
                return (0, _testHelpers.click)('.floating-collapse-btn');

              case 4:
                assert.dom('.code-container').hasStyle({
                  height: '204px'
                });
                _context11.next = 7;
                return (0, _testHelpers.click)('.floating-collapse-btn');

              case 7:
                assert.dom('.code-container').hasStyle({
                  height: '102px'
                });

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('Clicking on the uncollapse button show the collapse button', /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CodeBlock @content={{this.codeBlock}} @collapseHeight={{100}} />
                */
                {
                  "id": "SmSWApT7",
                  "block": "[[[8,[39,0],null,[[\"@content\",\"@collapseHeight\"],[[30,0,[\"codeBlock\"]],100]],null]],[],false,[\"o-s-s/code-block\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context12.next = 4;
                return (0, _testHelpers.click)('.floating-collapse-btn');

              case 4:
                assert.dom('.floating-collapse-btn').hasText('Collapse');

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x12) {
        return _ref13.apply(this, arguments);
      };
    }());
  });
  var codeExample = "import Component from '@glimmer/component';\nimport { action } from '@ember/object';\nimport { inject as service } from '@ember/service';\nimport { tracked } from '@glimmer/tracking';\nimport ToastService from '@upfluence/oss-components/services/toast';\n\ninterface OSSCodeBlockArgs {\n  content: string;\n  copyable?: boolean;\n  scrollable?: boolean;\n  collapseHeight?: number;\n  onCopyMessage?: string;\n}\n\nexport default class OSSCodeBlock extends Component<OSSCodeBlockArgs> {\n  @tracked collapsable: boolean = false;\n  @tracked collapsed: boolean = true;\n  @tracked componentHeight: number = 0;\n  @service declare toast: ToastService;\n\n  constructor(owner: unknown, args: OSSCodeBlockArgs) {\n    super(owner, args);\n    if (this.args.collapseHeight) {\n      this.componentHeight = this.args.collapseHeight;\n      this.collapsable = true;\n    }\n  }\n\n  get heightStyle(): string | null {\n    if (this.args.collapseHeight) {\n      return `height: ${this.componentHeight}px;`;\n    }\n    return null;\n  }\n\n  get codeLineArray(): string[] {\n    return (this.args.content || '').split(/\r?\n/);\n  }\n\n  @action\n  copyToClipboard(): void {\n    navigator.clipboard.writeText(this.args.content);\n    if (this.args.onCopyMessage) {\n      this.toast.success(this.args.onCopyMessage, '');\n    }\n  }\n\n  @action\n  collapse(): void {\n    this.collapsed = true;\n    this.componentHeight = this.componentHeight / 2;\n  }\n\n  @action\n  uncollapse(): void {\n    this.collapsed = false;\n    this.componentHeight = this.componentHeight * 2;\n  }\n}";
});
define("dummy/tests/integration/components/o-s-s/content-panel-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/content-panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ContentPanel/>
                */
                {
                  "id": "Byhkzt6H",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/content-panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-content-panel').exists();

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
    (0, _qunit.test)('The content named-block is properly displayed', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::ContentPanel>
                        <p>This is the content</p>
                      </OSS::ContentPanel>
                */
                {
                  "id": "bGdO06Em",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n      \"]],[]]]]]],[],false,[\"o-s-s/content-panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-content-panel').hasText('This is the content');

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
});
define("dummy/tests/integration/components/o-s-s/copy-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/copy', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Copy />
                */
                {
                  "id": "VIh3pNOR",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/copy\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-btn--default').exists();

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
    (0, _qunit.test)('it renders when inline value is specified', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Copy @inline={{true}} />
                */
                {
                  "id": "nSNPh4A4",
                  "block": "[[[8,[39,0],null,[[\"@inline\"],[true]],null]],[],false,[\"o-s-s/copy\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-copy--inline').exists();

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
    (0, _qunit.test)('the tooltip has correct wording', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Copy />
                */
                {
                  "id": "VIh3pNOR",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/copy\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context3.next = 4;
                return assert.tooltip('.upf-btn--default').hasTitle('Copy');

              case 4:
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
    (0, _qunit.module)('when clicking', function (hooks) {
      hooks.beforeEach(function () {
        this.toastService = this.owner.lookup('service:toast');
      });
      hooks.afterEach(function () {
        _sinon.default.restore();
      });
      (0, _qunit.test)('the info toast is rendered', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          var toastInfoStub;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _sinon.default.stub(navigator.clipboard, 'writeText').resolves();

                  toastInfoStub = _sinon.default.stub(this.toastService, 'info').resolves();
                  _context4.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Copy @value="test" />
                  */
                  {
                    "id": "sxKYnsUK",
                    "block": "[[[8,[39,0],null,[[\"@value\"],[\"test\"]],null]],[],false,[\"o-s-s/copy\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context4.next = 6;
                  return (0, _testHelpers.click)('.upf-btn--default');

                case 6:
                  assert.true(toastInfoStub.calledOnceWithExactly('Successfully copied to your clipboard.', 'Copied to clipboard'));

                case 7:
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
      (0, _qunit.test)('the error toast is rendered', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var toastErrorStub;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _sinon.default.stub(navigator.clipboard, 'writeText').rejects();

                  toastErrorStub = _sinon.default.stub(this.toastService, 'error').resolves();
                  _context5.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Copy @value="test" />
                  */
                  {
                    "id": "sxKYnsUK",
                    "block": "[[[8,[39,0],null,[[\"@value\"],[\"test\"]],null]],[],false,[\"o-s-s/copy\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context5.next = 6;
                  return (0, _testHelpers.click)('.upf-btn--default');

                case 6:
                  assert.true(toastErrorStub.calledOnceWithExactly('Failed to copy to your clipboard. Please try again.', 'Error'));

                case 7:
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
      (0, _qunit.test)('the clipboard writeText method is called', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var writeTextStub;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  writeTextStub = _sinon.default.stub(navigator.clipboard, 'writeText').resolves();

                  _sinon.default.stub(this.toastService, 'info').resolves();

                  this.textForCopy = 'test';
                  _context6.next = 5;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Copy @value={{this.textForCopy}} />
                  */
                  {
                    "id": "5AS9AVtQ",
                    "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"textForCopy\"]]]],null]],[],false,[\"o-s-s/copy\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 5:
                  _context6.next = 7;
                  return (0, _testHelpers.click)('.upf-btn--default');

                case 7:
                  assert.true(writeTextStub.calledOnceWithExactly(this.textForCopy));

                case 8:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/country-selector-test", ["@ember/template-factory", "@ember/test-helpers/setup-onerror", "@ember/test-helpers/settled", "sinon", "qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/utils/country-codes", "@ember/object", "@ember/test-helpers/dom/trigger-key-event"], function (_templateFactory, _setupOnerror, _settled, _sinon, _qunit, _emberQunit, _testHelpers, _countryCodes, _object, _triggerKeyEvent) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/country-selector', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      var _this = this;

      this.value = '';

      this.onchange = function (value) {
        (0, _object.set)(_this, 'value', value.alpha2);
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
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
                */
                {
                  "id": "pidsqG4b",
                  "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.ok(true);

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
    (0, _qunit.test)('When clicking on the input, the dropdown menu opens', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
                */
                {
                  "id": "pidsqG4b",
                  "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context2.next = 4;
                return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

              case 4:
                assert.dom('.upf-infinite-select').exists();

              case 5:
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
    (0, _qunit.module)('If @value is passed', function (hooks) {
      hooks.beforeEach(function () {
        this.initValue = {
          id: 'FR',
          alpha2: 'FR',
          alpha3: 'FRA',
          countryCallingCodes: ['33'],
          currencies: ['EUR'],
          name: 'France',
          showOnTop: true
        };
      });
      (0, _qunit.test)('If the value matches an entry from the sourceList, then the input is set to the value', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} @value={{this.initValue.alpha2}} />
                  */
                  {
                    "id": "ixOMxNmF",
                    "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\",\"@value\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]],[30,0,[\"initValue\",\"alpha2\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('[data-control-name="country-selector-input"]').hasText('France');

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
      (0, _qunit.test)('If the value matches an entry from the sourceList, the @onChange function is triggered', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.onchange = _sinon.default.spy();
                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} @value={{this.initValue.alpha2}} />
                  */
                  {
                    "id": "ixOMxNmF",
                    "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\",\"@value\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]],[30,0,[\"initValue\",\"alpha2\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.ok(this.onchange.calledOnceWith(this.initValue));

                case 4:
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
    });
    (0, _qunit.module)('Dropdown menu', function () {
      (0, _qunit.test)('It displays all items from the @sourceList parameter', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var rows;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
                  */
                  {
                    "id": "pidsqG4b",
                    "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context5.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 4:
                  rows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
                  assert.equal(rows.length, this.countries.length);

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
      (0, _qunit.test)('if @sourceList contain ids, then country icons are displayed', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
                  */
                  {
                    "id": "pidsqG4b",
                    "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context6.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 4:
                  assert.dom('.upf-infinite-select__item' + ' .fflag.fflag-US').exists();

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('If @sourceList contains ids, then the country placeholder is displayed', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
                */
                {
                  "id": "pidsqG4b",
                  "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('[data-control-name="country-selector-input"]').hasText('Select your country');

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('if sourceList does not contain ids, then the placeholder is for provinces', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />
                */
                {
                  "id": "S/NPQyCd",
                  "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('[data-control-name="country-selector-input"]').hasText('Select your province/state');

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('When clicking on an item', function () {
      (0, _qunit.test)('When selecting an item, the dropdown is closed', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />
                  */
                  {
                    "id": "S/NPQyCd",
                    "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context9.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 4:
                  _context9.next = 6;
                  return (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');

                case 6:
                  assert.dom('.upf-infinite-select').doesNotExist();

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When clicking outside of the dropdown, the dropdown is closed', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.provinces}} />
                  */
                  {
                    "id": "S/NPQyCd",
                    "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context10.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 4:
                  _context10.next = 6;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 6:
                  assert.dom('.upf-infinite-select').doesNotExist();

                case 7:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('the input is updated with the value', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @value={{this.value}} @onChange={{this.onchange}} @sourceList={{this.countries}} />
                  */
                  {
                    "id": "QKVGNn0l",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"value\"]],[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context11.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 4:
                  _context11.next = 6;
                  return (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');

                case 6:
                  assert.dom('[data-control-name="country-selector-input"]').hasText('United States');

                case 7:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('the @onChange method is triggered with the selected value', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  this.onchange = _sinon.default.spy();
                  _context12.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} @sourceList={{this.countries}} />
                  */
                  {
                    "id": "pidsqG4b",
                    "block": "[[[8,[39,0],null,[[\"@onChange\",\"@sourceList\"],[[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context12.next = 5;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 5:
                  _context12.next = 7;
                  return (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(2)');

                case 7:
                  assert.ok(this.onchange.calledWith({
                    id: 'FR',
                    alpha2: 'FR',
                    alpha3: 'FRA',
                    countryCallingCodes: ['33'],
                    currencies: ['EUR'],
                    name: 'France',
                    showOnTop: true
                  }));

                case 8:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If the component is using Countries as @sourceList, the flag icon is visible in the input', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @value={{this.value}} @onChange={{this.onchange}} @sourceList={{this.countries}} />
                  */
                  {
                    "id": "QKVGNn0l",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"value\"]],[30,0,[\"onchange\"]],[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context13.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 4:
                  _context13.next = 6;
                  return (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');

                case 6:
                  assert.dom('[data-control-name="country-selector-input"]').hasText('United States');
                  assert.dom('[data-control-name="country-selector-input"] .fflag.fflag-US').exists();

                case 8:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If the component is using Provinces as @sourceList, the flag icon is not visible in the input', /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
          var _this2 = this;

          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  this.province = '';

                  this.onProvinceChange = function (value) {
                    (0, _object.set)(_this2, 'province', value.name);
                  };

                  _context14.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @value={{this.province}} @onChange={{this.onProvinceChange}} @sourceList={{this.provinces}} />
                  */
                  {
                    "id": "ueIkdnSI",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"province\"]],[30,0,[\"onProvinceChange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context14.next = 6;
                  return (0, _testHelpers.click)('[data-control-name="country-selector-input"]');

                case 6:
                  _context14.next = 8;
                  return (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');

                case 8:
                  assert.dom('[data-control-name="country-selector-input"]').hasText('Alabama');
                  assert.dom('[data-control-name="country-selector-input"] .fflag.fflag-US').doesNotExist();

                case 10:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        return function (_x14) {
          return _ref15.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Keyboard control management', function () {
      (0, _qunit.test)('on keydown Enter should open the dropdown', /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
          var _this3 = this;

          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  this.onProvinceChange = function (value) {
                    (0, _object.set)(_this3, 'province', value.name);
                  };

                  _context15.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @value={{this.province}} @onChange={{this.onProvinceChange}} @sourceList={{this.provinces}} />
                  */
                  {
                    "id": "ueIkdnSI",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\",\"@sourceList\"],[[30,0,[\"province\"]],[30,0,[\"onProvinceChange\"]],[30,0,[\"provinces\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-infinite-select').doesNotExist();
                  _context15.next = 6;
                  return (0, _triggerKeyEvent.default)('[data-control-name="country-selector-input"]', 'keydown', 'Enter');

                case 6:
                  assert.dom('.upf-infinite-select').exists();

                case 7:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        return function (_x15) {
          return _ref16.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('error management', function () {
      (0, _qunit.test)('it throws an error if @sourceList is not provided', /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  (0, _setupOnerror.default)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::CountrySelector] The parameter @sourceList of type object is mandatory');
                  });
                  _context16.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @onChange={{this.onchange}} />
                  */
                  {
                    "id": "hH/Wd9Iz",
                    "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onchange\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context16.next = 5;
                  return (0, _settled.default)();

                case 5:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function (_x16) {
          return _ref17.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if @onChange is not provided', /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  (0, _setupOnerror.default)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::CountrySelector] The @onChange parameter is mandatory');
                  });
                  _context17.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CountrySelector @sourceList={{this.countries}} />
                  */
                  {
                    "id": "7V+jm2PD",
                    "block": "[[[8,[39,0],null,[[\"@sourceList\"],[[30,0,[\"countries\"]]]],null]],[],false,[\"o-s-s/country-selector\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context17.next = 5;
                  return (0, _settled.default)();

                case 5:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function (_x17) {
          return _ref18.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/currency-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/currency-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onChange = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.value = 0;
                this.currency = '';
                _context.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CurrencyInput @onChange={{this.onChange}} />
                */
                {
                  "id": "5irjHw3/",
                  "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                assert.dom('.currency-input-container').exists();

              case 5:
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
    (0, _qunit.test)('The passed @value parameter is properly displayed in the input', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CurrencyInput @value="12341234" @onChange={{this.onChange}} />
                */
                {
                  "id": "2+cL3cXM",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[\"12341234\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('input').hasValue('12341234');

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
    (0, _qunit.test)('It properly loads the correct currency when the @currency parameter is defined', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CurrencyInput @currency="EUR" @onChange={{this.onChange}} />
                */
                {
                  "id": "hYOv4yHZ",
                  "block": "[[[8,[39,0],null,[[\"@currency\",\"@onChange\"],[\"EUR\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.currency-selector').hasText('€');

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
    (0, _qunit.test)('It displays an error message below the component if @errorMessage is passed', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CurrencyInput @onChange={{this.onChange}} @errorMessage="This is an error message" />
                */
                {
                  "id": "qcfHM8jA",
                  "block": "[[[8,[39,0],null,[[\"@onChange\",\"@errorMessage\"],[[30,0,[\"onChange\"]],\"This is an error message\"]],null]],[],false,[\"o-s-s/currency-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.currency-input-container').containsText('This is an error message');

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
    (0, _qunit.test)('It displays an red border around the component if @errorMessage exists', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CurrencyInput @onChange={{this.onChange}} @errorMessage="This is an error message" />
                */
                {
                  "id": "qcfHM8jA",
                  "block": "[[[8,[39,0],null,[[\"@onChange\",\"@errorMessage\"],[[30,0,[\"onChange\"]],\"This is an error message\"]],null]],[],false,[\"o-s-s/currency-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.currency-input-container').hasStyle({
                  borderColor: 'rgb(27, 30, 33)'
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Currency selector', function () {
      (0, _qunit.test)('Clicking on the currency symbol button opens the currency selector', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "9MBQx8DN",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context6.next = 4;
                  return (0, _testHelpers.click)('.currency-selector');

                case 4:
                  assert.dom('.upf-infinite-select').exists();

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Selecting a new currency in the Currency selector triggers the onChange method', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          var clickableRows;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  this.currency = '';
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "nLgQ/BIs",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context7.next = 5;
                  return (0, _testHelpers.click)('.currency-selector');

                case 5:
                  clickableRows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
                  _context7.next = 8;
                  return (0, _testHelpers.click)(clickableRows[4]);

                case 8:
                  assert.true(this.onChange.calledOnceWithExactly('AUD', 0));

                case 9:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Selecting a new currency in the Currency selector triggers the onChange method with currency only', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          var clickableRows;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.currency = '';
                  _context8.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @onlyCurrency={{true}} @currency={{this.currency}} @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "SuZDIBzi",
                    "block": "[[[8,[39,0],null,[[\"@onlyCurrency\",\"@currency\",\"@value\",\"@onChange\"],[true,[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context8.next = 5;
                  return (0, _testHelpers.click)('.currency-selector');

                case 5:
                  clickableRows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
                  _context8.next = 8;
                  return (0, _testHelpers.click)(clickableRows[4]);

                case 8:
                  assert.true(this.onChange.calledOnceWithExactly('AUD', 0));

                case 9:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Typing in the search input filters the results', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          var clickableRows;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "9MBQx8DN",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context9.next = 4;
                  return (0, _testHelpers.click)('.currency-selector');

                case 4:
                  assert.dom('.upf-infinite-select').exists();
                  _context9.next = 7;
                  return (0, _testHelpers.typeIn)('.upf-infinite-select input', 'usd');

                case 7:
                  clickableRows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
                  assert.equal(clickableRows.length, 1);
                  assert.dom(clickableRows[0]).hasText('$ USD');

                case 10:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Searching by currency symbol works', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var clickableRows;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "9MBQx8DN",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context10.next = 4;
                  return (0, _testHelpers.click)('.currency-selector');

                case 4:
                  assert.dom('.upf-infinite-select').exists();
                  _context10.next = 7;
                  return (0, _testHelpers.typeIn)('.upf-infinite-select input', '€');

                case 7:
                  clickableRows = (0, _testHelpers.findAll)('.upf-infinite-select__item');
                  assert.equal(clickableRows.length, 1);
                  assert.dom(clickableRows[0]).hasText('€ EUR');

                case 10:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('The passed @currency parameter changes are properly tracked in the input', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  this.currency = 'USD';
                  _context11.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "nLgQ/BIs",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.currency-selector').hasText('$');
                  this.set('currency', 'EUR');
                  assert.dom('.currency-selector').hasText('€');

                case 6:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('the selection is disabled if @allowCurrencyUpdate is falsy', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  this.currency = 'USD';
                  _context12.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency={{this.currency}} @value="" @onChange={{this.onChange}} @allowCurrencyUpdate={{false}} />
                  */
                  {
                    "id": "cMBclQ+F",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\",\"@allowCurrencyUpdate\"],[[30,0,[\"currency\"]],\"\",[30,0,[\"onChange\"]],false]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.currency-selector .far.fa-chevron-down').doesNotExist();
                  _context12.next = 6;
                  return (0, _testHelpers.click)('.currency-selector');

                case 6:
                  assert.dom('.upf-infinite-select').doesNotExist();

                case 7:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Currency Input', function () {
      (0, _qunit.test)('Typing numbers in the currency input triggers the onChange method', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "9MBQx8DN",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context13.next = 4;
                  return (0, _testHelpers.typeIn)('input', '8');

                case 4:
                  assert.ok(this.onChange.calledOnce);
                  assert.dom('input').hasValue('08');

                case 6:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Typing non-numeric characters does not apply changes', /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency="" @value="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "9MBQx8DN",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context14.next = 4;
                  return (0, _testHelpers.typeIn)('input', '8');

                case 4:
                  assert.ok(this.onChange.calledOnce); // @ts-ignore

                  _context14.next = 7;
                  return (0, _testHelpers.triggerKeyEvent)('input', 'keydown', 'A', {
                    code: 'a'
                  });

                case 7:
                  assert.dom('input').hasValue('08');

                case 8:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        return function (_x14) {
          return _ref15.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Placeholder is correctly displayed when provided', /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency="" @value="" @placeholder="foobar" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "Wj98Tqq4",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@value\",\"@placeholder\",\"@onChange\"],[\"\",\"\",\"foobar\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('input').hasAttribute('placeholder', 'foobar');

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        return function (_x15) {
          return _ref16.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Currency only mode', function () {
      (0, _qunit.test)('it renders currency only', /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency="USD" @onlyCurrency={{true}} @onChange={{this.onChange}} />
                  */
                  {
                    "id": "g6yukpR6",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@onlyCurrency\",\"@onChange\"],[\"USD\",true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.currency-input-container').exists();
                  assert.dom('.currency-selector').exists();
                  assert.dom('.currency-selector').hasText('$ USD');
                  assert.dom('.currency-input input').doesNotExist();

                case 6:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function (_x16) {
          return _ref17.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it renders currency only with empty currency param', /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::CurrencyInput @currency={{undefined}} @onlyCurrency={{true}} @onChange={{this.onChange}} />
                  */
                  {
                    "id": "P0mpH7Wn",
                    "block": "[[[8,[39,0],null,[[\"@currency\",\"@onlyCurrency\",\"@onChange\"],[[27],true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.currency-input-container').exists();
                  assert.dom('.currency-selector').exists();
                  assert.dom('.currency-selector').hasText('$ USD');
                  assert.dom('.currency-input input').doesNotExist();

                case 6:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function (_x17) {
          return _ref18.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('It throws an error if @onChange is not passed', /*#__PURE__*/function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(assert) {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [component][OSS::CurrencyInput] The parameter @onChange of type function is mandatory');
                });
                _context18.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CurrencyInput />
                */
                {
                  "id": "fTeJDQ52",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/currency-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context18.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      return function (_x18) {
        return _ref19.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('When paste event is received', function (hooks) {
      hooks.beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this.value = '1234567890';
                _context19.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::CurrencyInput @onChange={{this.onChange}} @value={{this.value}} />
                */
                {
                  "id": "e0hCyllX",
                  "block": "[[[8,[39,0],null,[[\"@onChange\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/currency-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      })));
      (0, _qunit.test)('The value stored in clipboard is inserted in the input', /*#__PURE__*/function () {
        var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(assert) {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  assert.dom('input').hasValue('1234567890');
                  _context20.next = 3;
                  return (0, _testHelpers.triggerEvent)('input', 'paste', {
                    clipboardData: {
                      getData: _sinon.default.stub().returns('123')
                    }
                  });

                case 3:
                  assert.dom('input').hasValue('1234567890123');

                case 4:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20);
        }));

        return function (_x19) {
          return _ref21.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('The non-numeric characters are escaped', /*#__PURE__*/function () {
        var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(assert) {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  assert.dom('input').hasValue('1234567890');
                  _context21.next = 3;
                  return (0, _testHelpers.triggerEvent)('input', 'paste', {
                    clipboardData: {
                      getData: _sinon.default.stub().returns('1withletter0')
                    }
                  });

                case 3:
                  assert.dom('input').hasValue('123456789010');

                case 4:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));

        return function (_x20) {
          return _ref22.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When selection is applied, it replaces the selection', /*#__PURE__*/function () {
        var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(assert) {
          var input;
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  assert.dom('input').hasValue('1234567890');
                  input = document.querySelector('input.ember-text-field');
                  input.setSelectionRange(4, 6);
                  _context22.next = 5;
                  return (0, _testHelpers.triggerEvent)('input', 'paste', {
                    clipboardData: {
                      getData: _sinon.default.stub().returns('0')
                    }
                  });

                case 5:
                  assert.dom('input').hasValue('123407890');

                case 6:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22);
        }));

        return function (_x21) {
          return _ref23.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/email-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/email-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput @value="" />
                */
                {
                  "id": "JeKarLpE",
                  "block": "[[[8,[39,0],null,[[\"@value\"],[\"\"]],null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-container').exists();

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
    (0, _qunit.test)('it renders the @placeholder', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput @value="" @placeholder="test" />
                */
                {
                  "id": "S3JUHPlK",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@placeholder\"],[\"\",\"test\"]],null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-container input').hasProperty('placeholder', 'test');

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
    (0, _qunit.test)('it displays the error message when the @errorMessage is non-empty', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput @value="" @errorMessage="This is the error message" />
                */
                {
                  "id": "MdXDK3ky",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@errorMessage\"],[\"\",\"This is the error message\"]],null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
                assert.dom('.text-color-error').hasText('This is the error message');

              case 4:
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
    (0, _qunit.test)('If the email regex isnt matched, then the error message is displayed', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.value = '';
                _context4.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput @value={{this.value}} />
                */
                {
                  "id": "b8/5HUPm",
                  "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context4.next = 5;
                return (0, _testHelpers.typeIn)('input', 'foo@f');

              case 5:
                assert.dom('.text-color-error').hasText('Please enter a valid email address.');

              case 6:
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
    (0, _qunit.test)('If the email regex is matched, and the @validates method is passed, then the status of the validation is returned', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.value = 'john.doe@example.com';

                this.validates = function (x) {
                  assert.equal(x, true);
                };

                _context5.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput @value={{this.value}} @validates={{this.validates}} />
                */
                {
                  "id": "eX/S6D2B",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context5.next = 6;
                return (0, _testHelpers.typeIn)('input', 'a');

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
    (0, _qunit.test)('If the email regex isnt matched, and the @validates method is passed, then the status of the validation is returned', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.value = 'foo@f';

                this.validates = function (x) {
                  assert.equal(x, false);
                };

                _context6.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput @value={{this.value}} @validates={{this.validates}} />
                */
                {
                  "id": "eX/S6D2B",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context6.next = 6;
                return (0, _testHelpers.typeIn)('input', 'a');

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it throws an error when the @value parameter is missing', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [component][OSS::EmailInput] The @value parameter is mandatory');
                });
                _context7.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput />
                */
                {
                  "id": "zxW5nQ4Y",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it calls the @onChange method', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.value = '';
                this.onChange = _sinon.default.stub();
                _context8.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::EmailInput @value={{this.value}} @onChange={{this.onChange}} />
                */
                {
                  "id": "d06cBB/s",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/email-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context8.next = 6;
                return (0, _testHelpers.typeIn)('input', 'a');

              case 6:
                assert.true(this.onChange.calledOnceWithExactly('a'));

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/icon-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var STYLE_CLASSES = {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    duotone: 'fad',
    brand: 'fab'
  };
  (0, _qunit.module)('Integration | Component | o-s-s/icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Icon @icon="fa-laptop-code" />
                */
                {
                  "id": "WMPyIf2l",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fa-laptop-code\"]],null]],[],false,[\"o-s-s/icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('i').exists();

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
    (0, _qunit.test)('it renders the correct icon class', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Icon @icon="fa-code-merge" />
                */
                {
                  "id": "QEtQpkZb",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fa-code-merge\"]],null]],[],false,[\"o-s-s/icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('i').hasClass('fa-code-merge');

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
    (0, _qunit.test)("it renders the correct default style class", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Icon @icon="fa-code-merge" />
                */
                {
                  "id": "QEtQpkZb",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fa-code-merge\"]],null]],[],false,[\"o-s-s/icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('i').hasClass('far');

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

    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      (0, _qunit.test)("it renders the correct style ".concat(key, " class"), /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.style = key;
                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Icon @icon="fa-code-merge" @style={{this.style}} />
                  */
                  {
                    "id": "cZDX1Uio",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@style\"],[\"fa-code-merge\",[30,0,[\"style\"]]]],null]],[],false,[\"o-s-s/icon\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('i').hasClass(value);

                case 4:
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
    };

    for (var _i = 0, _Object$entries = Object.entries(STYLE_CLASSES); _i < _Object$entries.length; _i++) {
      _loop();
    }

    (0, _qunit.test)('it throws an error if icon argument is missing', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (error) {
                  assert.equal(error.message, 'Assertion Failed: [component][OSS::Icon] The @icon parameter is mandatory');
                });
                _context5.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Icon />
                */
                {
                  "id": "tq0ZKiIP",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/illustration-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/illustration"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _illustration) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/illustration', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Illustration @src="/@upfluence/oss-components/assets/images/no-records.svg" />
                */
                {
                  "id": "EU+1SYUL",
                  "block": "[[[8,[39,0],null,[[\"@src\"],[\"/@upfluence/oss-components/assets/images/no-records.svg\"]],null]],[],false,[\"o-s-s/illustration\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('object').hasAttribute('data', '/@upfluence/oss-components/assets/images/no-records.svg');

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
    (0, _qunit.test)('the style is inserted', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var _querySelector;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Illustration @src="/@upfluence/oss-components/assets/images/no-records.svg" />
                */
                {
                  "id": "EU+1SYUL",
                  "block": "[[[8,[39,0],null,[[\"@src\"],[\"/@upfluence/oss-components/assets/images/no-records.svg\"]],null]],[],false,[\"o-s-s/illustration\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context2.next = 4;
                return (0, _testHelpers.waitUntil)(function () {
                  var _contentDocument;

                  return (_contentDocument = (0, _testHelpers.find)('object').contentDocument) === null || _contentDocument === void 0 ? void 0 : _contentDocument.querySelector('svg');
                });

              case 4:
                _context2.next = 6;
                return (0, _testHelpers.settled)();

              case 6:
                assert.equal((_querySelector = (0, _testHelpers.find)('object').contentDocument.querySelector('svg style')) === null || _querySelector === void 0 ? void 0 : _querySelector.textContent, ":root { ".concat((0, _illustration.extractCSSVars)().join(';'), " }"));

              case 7:
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
});
define("dummy/tests/integration/components/o-s-s/infinite-select-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _isFocused(element) {
    return element === document.activeElement;
  }

  var FAKE_DATA = [{
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
    (0, _qunit.module)('search is enabled', function () {
      (0, _qunit.module)('with onSearch hook', function () {
        (0, _qunit.test)('it calls the onSearch hook with the typed keyword', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.onSearch = function (keyword) {
                      assert.equal(keyword, 'b', 'Enters the onSearch hook');
                    };

                    this.onSelect = function () {};

                    _context.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect
                                    @items={{this.items}} @searchEnabled={{true}} @onSearch={{this.onSearch}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "A+xk1fOU",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSearch\",\"@onSelect\"],[[30,0,[\"items\"]],true,[30,0,[\"onSearch\"]],[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select input.upf-input').exists();
                    _context.next = 7;
                    return (0, _testHelpers.typeIn)('.upf-infinite-select input.upf-input', 'b');

                  case 7:
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
        (0, _qunit.test)('it uses the passed placeholder when present', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.onSearch = function () {};

                    this.onSelect = function () {};

                    _context2.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                                <OSS::InfiniteSelect
                                  @items={{this.items}} @searchEnabled={{true}} @onSearch={{this.onSearch}} @searchPlaceholder="Foobar"
                                  @onSelect={{this.onSelect}}/>
                              
                    */
                    {
                      "id": "yJxTUFmU",
                      "block": "[[[1,\"\\n            \"],[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSearch\",\"@searchPlaceholder\",\"@onSelect\"],[[30,0,[\"items\"]],true,[30,0,[\"onSearch\"]],\"Foobar\",[30,0,[\"onSelect\"]]]],null],[1,\"\\n          \"]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select input.upf-input').exists();
                    assert.dom('.upf-infinite-select input.upf-input').hasAttribute('placeholder', 'Foobar');

                  case 6:
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
      });
    });
    (0, _qunit.module)('item selection', function () {
      (0, _qunit.module)('onSelect is passed', function () {
        (0, _qunit.test)('it calls the onSelect hook with the clicked item', /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function (item) {
                      assert.equal(item.name, 'Batman');
                    };

                    _context3.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "gIdGigRo",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    _context3.next = 6;
                    return (0, _testHelpers.click)('.upf-infinite-select__items-container .upf-infinite-select__item:first-child');

                  case 6:
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
      });
    });
    (0, _qunit.module)('loading states', function () {
      (0, _qunit.module)('full content loading', function () {
        (0, _qunit.test)('should display rows of skeleton loading in place of the content', /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function () {};

                    _context4.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @loading={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "p2NtsN7q",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@loading\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],true,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').doesNotExist();
                    assert.dom('.upf-infinite-select__items-container .upf-skeleton-effect').exists({
                      count: 5
                    });

                  case 6:
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
      });
      (0, _qunit.module)('additional content loading', function () {
        (0, _qunit.test)('should display rows of skeleton loading after the existing content', /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function () {};

                    _context5.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @loadingMore={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "We6mmpAk",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@loadingMore\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],true,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').exists({
                      count: FAKE_DATA.length
                    });
                    assert.dom('.upf-infinite-select__items-container .upf-skeleton-effect').exists({
                      count: 3
                    });

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
    (0, _qunit.module)('it renders', function () {
      (0, _qunit.module)('with itemLabel', function () {
        (0, _qunit.test)('it uses the passed itemLabel argument as display key', /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
            var displayedNames;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function () {};

                    _context6.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @itemLabel="characters" @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "LpTz8Czx",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@itemLabel\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],\"characters\",false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').exists({
                      count: FAKE_DATA.length
                    });
                    displayedNames = [];
                    document.querySelectorAll('.upf-infinite-select__items-container .upf-infinite-select__item').forEach(function (x) {
                      displayedNames.push(x.textContent.trim());
                    });
                    assert.deepEqual(displayedNames, FAKE_DATA.map(function (x) {
                      return x.characters;
                    }));

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          return function (_x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('with option block', function () {
        (0, _qunit.test)('it uses the passed block to display options', /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
            var displayedNames;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function () {};

                    _context7.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                                <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}>
                                  <:option as |opt|>
                                    Comics - {{opt.name}}
                                  </:option>
                                </OSS::InfiniteSelect>
                              
                    */
                    {
                      "id": "lUNIBoWy",
                      "block": "[[[1,\"\\n            \"],[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],[[\"option\"],[[[[1,\"\\n                Comics - \"],[1,[30,1,[\"name\"]]],[1,\"\\n              \"]],[1]]]]],[1,\"\\n          \"]],[\"opt\"],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select__items-container .upf-infinite-select__item').exists({
                      count: FAKE_DATA.length
                    });
                    displayedNames = [];
                    document.querySelectorAll('.upf-infinite-select__items-container .upf-infinite-select__item').forEach(function (x) {
                      displayedNames.push(x.textContent.trim());
                    });
                    assert.deepEqual(displayedNames, FAKE_DATA.map(function (x) {
                      return "Comics - ".concat(x.name);
                    }));

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          return function (_x7) {
            return _ref8.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('with empty items', function () {
        (0, _qunit.test)('it should render the empty state', /*#__PURE__*/function () {
          var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.items = [];

                    this.onSelect = function () {};

                    _context8.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "gIdGigRo",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select__items-container').hasClass('upf-infinite-select__items-container--empty');
                    assert.dom('.upf-infinite-select__items-container object').hasAttribute('data', '/@upfluence/oss-components/assets/images/no-records.svg');

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          return function (_x8) {
            return _ref9.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('with inline', function () {
        (0, _qunit.test)('it should render with undefined arg', /*#__PURE__*/function () {
          var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function () {};

                    _context9.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "gIdGigRo",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select.upf-infinite-select--absolute').exists({
                      count: 1
                    });

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          return function (_x9) {
            return _ref10.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('it should render with falsy arg', /*#__PURE__*/function () {
          var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function () {};

                    _context10.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "zzIePxnW",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select.upf-infinite-select--absolute').exists({
                      count: 1
                    });

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          return function (_x10) {
            return _ref11.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('it should render with truthy arg', /*#__PURE__*/function () {
          var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.items = FAKE_DATA;

                    this.onSelect = function () {};

                    _context11.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{true}} @searchEnabled={{false}} @onSelect={{this.onSelect}}/>
                    */
                    {
                      "id": "q+XPnrbu",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],true,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    assert.dom('.upf-infinite-select').exists({
                      count: 1
                    });
                    assert.dom('.upf-infinite-select--absolute').doesNotExist();

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));

          return function (_x11) {
            return _ref12.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('with onBottomReached', function () {
      (0, _qunit.test)('it should trigger onBottomReach function', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  this.items = FAKE_DATA;

                  this.onSelect = function () {};

                  this.loadingMore = false;
                  this.onBottomReached = _sinon.default.stub().callsFake(function () {
                    _this.set('loadingMore', true);
                  });
                  _context12.next = 6;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                                 @loadingMore={{this.loadingMore}} @onBottomReached={{this.onBottomReached}} />
                          
                  */
                  {
                    "id": "wXNkRgmo",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@items\",\"@searchEnabled\",\"@onSelect\",\"@loadingMore\",\"@onBottomReached\"],[[30,0,[\"items\"]],false,[30,0,[\"onSelect\"]],[30,0,[\"loadingMore\"]],[30,0,[\"onBottomReached\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/infinite-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 6:
                  _context12.next = 8;
                  return (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);

                case 8:
                  this.set('loadingMore', false);
                  _context12.next = 11;
                  return (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);

                case 11:
                  assert.ok(this.onBottomReached.calledTwice);

                case 12:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Keyboard control management', function (hooks) {
      hooks.beforeEach(function () {
        this.items = FAKE_DATA;

        this.onSelect = function () {};

        this.onSearch = function () {};
      });
      (0, _qunit.module)('If keyboard is disabled', function () {
        (0, _qunit.test)('The first element should not be focused on load', /*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}} />
                    */
                    {
                      "id": "zzIePxnW",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));

          return function (_x13) {
            return _ref14.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('The keyboard controls are disabled', /*#__PURE__*/function () {
          var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}} />
                    */
                    {
                      "id": "zzIePxnW",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
                    _context14.next = 5;
                    return (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'ArrowDown');

                  case 5:
                    assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
                    assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));

          return function (_x14) {
            return _ref15.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('If keyboard is enabled', function (hooks) {
        hooks.beforeEach(function () {
          this.enableKeyboard = true;
        });
        (0, _qunit.module)('If Search is enabled', function () {
          (0, _qunit.test)('Search input should be focused', /*#__PURE__*/function () {
            var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                      /*
                        <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                           @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>
                      */
                      {
                        "id": "wfn9YsGs",
                        "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                        "moduleName": "(unknown template module)",
                        "isStrictMode": false
                      }));

                    case 2:
                      assert.ok(_isFocused(document.querySelector('.upf-input')));
                      assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));

            return function (_x15) {
              return _ref16.apply(this, arguments);
            };
          }());
          (0, _qunit.test)('On keydown Enter it should focus the first element', /*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                      /*
                        <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                           @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>
                      */
                      {
                        "id": "wfn9YsGs",
                        "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                        "moduleName": "(unknown template module)",
                        "isStrictMode": false
                      }));

                    case 2:
                      assert.ok(_isFocused(document.querySelector('.upf-input')));
                      _context16.next = 5;
                      return (0, _testHelpers.triggerKeyEvent)('.upf-input', 'keydown', 'Enter');

                    case 5:
                      assert.notOk(_isFocused(document.querySelector('.upf-input')));
                      assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));

            return function (_x16) {
              return _ref17.apply(this, arguments);
            };
          }());
          (0, _qunit.test)('On keydown ArrowDown it should focus the first element', /*#__PURE__*/function () {
            var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                      /*
                        <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                           @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}}/>
                      */
                      {
                        "id": "wfn9YsGs",
                        "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                        "moduleName": "(unknown template module)",
                        "isStrictMode": false
                      }));

                    case 2:
                      assert.ok(_isFocused(document.querySelector('.upf-input')));
                      _context17.next = 5;
                      return (0, _testHelpers.triggerKeyEvent)('.upf-input', 'keydown', 'ArrowDown');

                    case 5:
                      assert.notOk(_isFocused(document.querySelector('.upf-input')));
                      assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

                    case 7:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));

            return function (_x17) {
              return _ref18.apply(this, arguments);
            };
          }());
          (0, _qunit.test)('On keydown Enter it should call the onClose action', /*#__PURE__*/function () {
            var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(assert) {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.onClose = _sinon.default.stub();
                      _context18.next = 3;
                      return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                      /*
                        <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{true}} @onSelect={{this.onSelect}}
                                                           @enableKeyboard={{this.enableKeyboard}} @onSearch={{this.onSearch}} @onClose={{this.onClose}}/>
                      */
                      {
                        "id": "QRdAmYC7",
                        "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onSearch\",\"@onClose\"],[[30,0,[\"items\"]],false,true,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onSearch\"]],[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                        "moduleName": "(unknown template module)",
                        "isStrictMode": false
                      }));

                    case 3:
                      assert.ok(_isFocused(document.querySelector('.upf-input')));
                      assert.ok(this.onClose.notCalled);
                      _context18.next = 7;
                      return (0, _testHelpers.triggerKeyEvent)('.upf-input', 'keydown', 'Escape');

                    case 7:
                      assert.ok(this.onClose.calledOnce);

                    case 8:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            return function (_x18) {
              return _ref19.apply(this, arguments);
            };
          }());
        });
        (0, _qunit.test)('The first element should be focuses on load', /*#__PURE__*/function () {
          var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(assert) {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                                       @enableKeyboard={{this.enableKeyboard}}/>
                    */
                    {
                      "id": "aghFVdQy",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));

          return function (_x19) {
            return _ref20.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('On keydown ArrowUp & ArrowDown it should control the focused element', /*#__PURE__*/function () {
          var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(assert) {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                                       @enableKeyboard={{this.enableKeyboard}}/>
                    */
                    {
                      "id": "aghFVdQy",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
                    _context20.next = 5;
                    return (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'ArrowDown');

                  case 5:
                    assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));
                    assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));
                    _context20.next = 9;
                    return (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'ArrowUp');

                  case 9:
                    assert.notOk(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[1]));
                    assert.ok(_isFocused(document.querySelectorAll('.upf-infinite-select__item')[0]));

                  case 11:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          }));

          return function (_x20) {
            return _ref21.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('On keydown Enter it should select the focused element', /*#__PURE__*/function () {
          var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(assert) {
            var el;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    this.onSelect = _sinon.default.stub();
                    _context21.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                                       @enableKeyboard={{this.enableKeyboard}}/>
                    */
                    {
                      "id": "aghFVdQy",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    el = document.querySelectorAll('.upf-infinite-select__item')[0];
                    assert.ok(_isFocused(el));
                    assert.ok(this.onSelect.notCalled);
                    _context21.next = 8;
                    return (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'Enter');

                  case 8:
                    assert.ok(this.onSelect.calledOnceWith(FAKE_DATA[0]));

                  case 9:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));

          return function (_x21) {
            return _ref22.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('On keydown Tab/Escape it should call the onClose action', /*#__PURE__*/function () {
          var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(assert) {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    this.onClose = _sinon.default.stub();
                    _context22.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @inline={{false}} @searchEnabled={{false}} @onSelect={{this.onSelect}}
                                                       @enableKeyboard={{this.enableKeyboard}} @onClose={{this.onClose}}/>
                    */
                    {
                      "id": "pPAwbaPG",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@inline\",\"@searchEnabled\",\"@onSelect\",\"@enableKeyboard\",\"@onClose\"],[[30,0,[\"items\"]],false,false,[30,0,[\"onSelect\"]],[30,0,[\"enableKeyboard\"]],[30,0,[\"onClose\"]]]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.ok(this.onClose.notCalled);
                    _context22.next = 6;
                    return (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'Tab');

                  case 6:
                    assert.ok(this.onClose.calledOnce);
                    _context22.next = 9;
                    return (0, _testHelpers.triggerKeyEvent)('.upf-infinite-select__items-container', 'keydown', 'Escape');

                  case 9:
                    assert.ok(this.onClose.calledTwice);

                  case 10:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));

          return function (_x22) {
            return _ref23.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.module)('On item selection, if onSelect is not passed', function () {
        (0, _qunit.test)('it should throw an error', /*#__PURE__*/function () {
          var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(assert) {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    (0, _testHelpers.setupOnerror)(function (err) {
                      assert.equal(err.message, 'Assertion Failed: [component][OSS::InfiniteSelect] `onSelect` action is mandatory');
                    });
                    _context23.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{false}} />
                    */
                    {
                      "id": "SyTm9Gvd",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\"],[[30,0,[\"items\"]],false]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));

          return function (_x23) {
            return _ref24.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('When the search is enabled, if no onSearch hook has been passed', function () {
        (0, _qunit.test)('should throw an error', /*#__PURE__*/function () {
          var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(assert) {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    (0, _testHelpers.setupOnerror)(function (err) {
                      assert.equal(err.message, 'Assertion Failed: [component][OSS::InfiniteSelect] Search is enabled without an `onSearch` action being passed');
                    });
                    _context24.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::InfiniteSelect @items={{this.items}} @searchEnabled={{true}} />
                    */
                    {
                      "id": "A7HOJpQU",
                      "block": "[[[8,[39,0],null,[[\"@items\",\"@searchEnabled\"],[[30,0,[\"items\"]],true]],null]],[],false,[\"o-s-s/infinite-select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24);
          }));

          return function (_x24) {
            return _ref25.apply(this, arguments);
          };
        }());
      });
    });
  });
});
define("dummy/tests/integration/components/o-s-s/input-container-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/input-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputContainer />
                */
                {
                  "id": "oeMIiOWr",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/input-container\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-input').exists();

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
    (0, _qunit.module)('Input Blocks', function () {
      function renderComponentWithPrefixSuffix() {
        return _renderComponentWithPrefixSuffix.apply(this, arguments);
      }

      function _renderComponentWithPrefixSuffix() {
        _renderComponentWithPrefixSuffix = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "QB4gWFuj",
                    "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"prefix\",\"input\",\"suffix\"],[[[[1,\"\\n          \"],[8,[39,1],null,[[\"@style\",\"@icon\"],[\"solid\",\"fa-user\"]],null],[1,\"\\n        \"]],[]],[[[1,\"\\n          \"],[8,[39,2],[[24,1,\"custom-input\"]],null,null],[1,\"\\n        \"]],[]],[[[1,\"\\n          \"],[8,[39,1],null,[[\"@style\",\"@icon\"],[\"solid\",\"fa-times\"]],null],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/input-container\",\"o-s-s/icon\",\"input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _renderComponentWithPrefixSuffix.apply(this, arguments);
      }

      (0, _qunit.test)('Passing a :prefix named-block renders the block properly', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return renderComponentWithPrefixSuffix();

                case 2:
                  assert.dom('.fa-user').exists();

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
      (0, _qunit.test)('Passing a :suffix named-block renders the block properly', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return renderComponentWithPrefixSuffix();

                case 2:
                  assert.dom('.fa-times').exists();

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
      (0, _qunit.test)('Passing an :input named-block overloads the default input', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return renderComponentWithPrefixSuffix();

                case 2:
                  assert.dom('#custom-input').exists();

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
    (0, _qunit.module)('Component Parameters', function (hooks) {
      var onValueChange;
      hooks.beforeEach(function () {
        onValueChange = _sinon.default.fake.returns(true);
        this.set('value', 'testValue');
        this.set('placeholder', 'Type your text');
        this.set('onValueChange', onValueChange);
      });

      function renderComponentWithParameters() {
        return _renderComponentWithParameters.apply(this, arguments);
      }

      function _renderComponentWithParameters() {
        _renderComponentWithParameters = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::InputContainer @value={{this.value}}
                                               @onChange={{this.onValueChange}}
                                               @placeholder={{this.placeholder}} />
                  */
                  {
                    "id": "U5h/EO9U",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@value\",\"@onChange\",\"@placeholder\"],[[30,0,[\"value\"]],[30,0,[\"onValueChange\"]],[30,0,[\"placeholder\"]]]],null]],[],false,[\"o-s-s/input-container\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));
        return _renderComponentWithParameters.apply(this, arguments);
      }

      (0, _qunit.test)('Passing a @value parameter works', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return renderComponentWithParameters();

                case 2:
                  assert.dom('.upf-input').hasValue('testValue');

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Passing a @placeholder parameter works', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          var inputElement;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return renderComponentWithParameters();

                case 2:
                  inputElement = (0, _testHelpers.find)('.upf-input');
                  assert.equal(inputElement.getAttribute('placeholder'), 'Type your text');

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Passing an @onChange method works and is triggered on input changes', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          var inputElement;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return renderComponentWithParameters();

                case 2:
                  inputElement = (0, _testHelpers.find)('.upf-input');
                  _context8.next = 5;
                  return (0, _testHelpers.typeIn)(inputElement, 'a');

                case 5:
                  assert.ok(onValueChange.called);

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Extra attributes', function () {
      (0, _qunit.test)('passing an extra class is applied to the component', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::InputContainer class="my-extra-class" />
                  */
                  {
                    "id": "at22TSSJ",
                    "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/input-container\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.my-extra-class').exists();

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('passing data-control-name works', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          var inputWrapper;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::InputContainer data-control-name="firstname-input" />
                  */
                  {
                    "id": "w99BQPi5",
                    "block": "[[[8,[39,0],[[24,\"data-control-name\",\"firstname-input\"]],null,null]],[],false,[\"o-s-s/input-container\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  inputWrapper = (0, _testHelpers.find)('.oss-input-container');
                  assert.equal(inputWrapper.getAttribute('data-control-name'), 'firstname-input');

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/input-group-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/input-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputGroup @prefix="username" />
                */
                {
                  "id": "+oA6e7O6",
                  "block": "[[[8,[39,0],null,[[\"@prefix\"],[\"username\"]],null]],[],false,[\"o-s-s/input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-group').exists();

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
    (0, _qunit.test)('Passing the @prefix parameter displays the input prefix', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputGroup @prefix="username" />
                */
                {
                  "id": "+oA6e7O6",
                  "block": "[[[8,[39,0],null,[[\"@prefix\"],[\"username\"]],null]],[],false,[\"o-s-s/input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-group-row-prefix').hasText('username');

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
    (0, _qunit.test)('Passing the @suffix parameter displays the input suffix', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputGroup @suffix="@domain.com" />
                */
                {
                  "id": "WerzVWp9",
                  "block": "[[[8,[39,0],null,[[\"@suffix\"],[\"@domain.com\"]],null]],[],false,[\"o-s-s/input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-group-row-suffix').hasText('@domain.com');

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
    (0, _qunit.test)('Passing the @suffix parameter displays the input suffix', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputGroup @prefix="email" @suffix="@domain.com" />
                */
                {
                  "id": "GpsUUxDH",
                  "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\"],[\"email\",\"@domain.com\"]],null]],[],false,[\"o-s-s/input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-group-row-prefix').hasText('email');
                assert.dom('.oss-input-group-row-suffix').hasText('@domain.com');

              case 4:
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
    (0, _qunit.test)('Passing the @errorMessage parameter displays the error message', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputGroup @suffix="@domain.com" @errorMessage="This is an error." />
                */
                {
                  "id": "wyA/V9ac",
                  "block": "[[[8,[39,0],null,[[\"@suffix\",\"@errorMessage\"],[\"@domain.com\",\"This is an error.\"]],null]],[],false,[\"o-s-s/input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-group-row--error').exists();
                assert.dom('.oss-input-group span').hasText('This is an error.');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('Passing the @errorMessage sets an error border on the whole compoenent', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputGroup @prefix="random" @suffix="@domain.com" @errorMessage="This is an error." />
                */
                {
                  "id": "J7JJZHwB",
                  "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@errorMessage\"],[\"random\",\"@domain.com\",\"This is an error.\"]],null]],[],false,[\"o-s-s/input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-group-row--error').exists();
                assert.dom('input').hasStyle({
                  borderColor: 'rgb(239, 68, 68)'
                });
                assert.dom('.oss-input-group-row-prefix').hasStyle({
                  borderColor: 'rgb(239, 68, 68) rgb(27, 30, 33) rgb(239, 68, 68) rgb(239, 68, 68)'
                });
                assert.dom('.oss-input-group-row-suffix').hasStyle({
                  borderColor: 'rgb(239, 68, 68) rgb(239, 68, 68) rgb(239, 68, 68) rgb(27, 30, 33)'
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it fails if no prefix or suffix parameters are passed', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [component][OSS::InputGroup] No @prefix or @suffix parameter were passed. If you are not going to use any, you should use an OSS::InputContainer.');
                });
                _context7.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::InputGroup />
                */
                {
                  "id": "QTKSqTC8",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/layout/sidebar-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/layout/sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Layout::Sidebar />
                */
                {
                  "id": "+kVukCA1",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/layout/sidebar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-sidebar--containers').exists();

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
    (0, _qunit.test)('it renders the logo when present', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var _document$querySelect;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.logo = '/toto.png';
                _context2.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Layout::Sidebar @logo={{this.logo}}/>
                */
                {
                  "id": "bgmYMeTw",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@logo\"],[[30,0,[\"logo\"]]]],null]],[],false,[\"o-s-s/layout/sidebar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.equal((_document$querySelect = document.querySelector('.oss-sidebar--containers .logo-container img')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute('src'), '/toto.png');

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
    (0, _qunit.module)('Named block', function () {
      (0, _qunit.test)('The content named-block is properly displayed', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::Layout::Sidebar>
                            <:content>
                              <p>This is the content</p>
                            </:content>
                          </OSS::Layout::Sidebar>
                  */
                  {
                    "id": "TTYR4eJB",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,null,[[\"content\"],[[[[1,\"\\n            \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n          \"]],[]]]]]],[],false,[\"o-s-s/layout/sidebar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-sidebar--content').hasText('This is the content');

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
      (0, _qunit.test)('The footer named-block is properly displayed', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::Layout::Sidebar>
                            <:footer>
                              footer content
                            </:footer>
                          </OSS::Layout::Sidebar>
                  */
                  {
                    "id": "qht1s7E4",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,null,[[\"footer\"],[[[[1,\"\\n            footer content\\n          \"]],[]]]]]],[],false,[\"o-s-s/layout/sidebar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-sidebar--footer').hasText('footer content');

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
    (0, _qunit.module)('Extra attributes', function () {
      (0, _qunit.test)('passing an extra class is applied to the component', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar class="my-extra-class" />
                  */
                  {
                    "id": "Jj0xlek7",
                    "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/layout/sidebar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.my-extra-class').exists();

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('passing data-control-name works', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var inputWrapper;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar data-control-name="layout-sidebar" />
                  */
                  {
                    "id": "twbuhNCK",
                    "block": "[[[8,[39,0],[[24,\"data-control-name\",\"layout-sidebar\"]],null,null]],[],false,[\"o-s-s/layout/sidebar\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  inputWrapper = (0, _testHelpers.find)('.oss-sidebar--containers');
                  assert.equal(inputWrapper === null || inputWrapper === void 0 ? void 0 : inputWrapper.getAttribute('data-control-name'), 'layout-sidebar');

                case 4:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/layout/sidebar/item-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | oss/layout/sidebar/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Layout::Sidebar::Item @icon="far fa-search" />
                */
                {
                  "id": "LA23dVaz",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-sidebar-item').exists();

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
    (0, _qunit.test)('it renders the icon when present', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Layout::Sidebar::Item @icon="fal fa-search" />
                */
                {
                  "id": "2C003WQI",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fal fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-sidebar-item .oss-sidebar-item--icon i').hasClass('fa-search');

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
    (0, _qunit.module)('Arguments', function () {
      (0, _qunit.test)('Default value for locked is false', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search"/>
                  */
                  {
                    "id": "LA23dVaz",
                    "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-sidebar-item--locked').doesNotExist();

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
      (0, _qunit.test)('When locked is true', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}}/>
                  */
                  {
                    "id": "CcotIReK",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@locked\"],[\"far fa-search\",true]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-sidebar-item--locked').exists();

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
      (0, _qunit.test)('Default value for hasNotification is false', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search"/>
                  */
                  {
                    "id": "LA23dVaz",
                    "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-sidebar-item--notification').doesNotExist();

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When hasNotification is true', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search" @hasNotifications={{true}}/>
                  */
                  {
                    "id": "d4lA8yT2",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@hasNotifications\"],[\"far fa-search\",true]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-sidebar-item--notification').exists();

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Actions', function (hooks) {
      hooks.beforeEach(function () {
        this.defaultAction = _sinon.default.spy();
        this.lockedAction = _sinon.default.spy();
      });
      (0, _qunit.test)('OnClick defaultAction is triggered', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search" @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}}/>
                  */
                  {
                    "id": "0MWtuUPe",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@defaultAction\",\"@lockedAction\"],[\"far fa-search\",[30,0,[\"defaultAction\"]],[30,0,[\"lockedAction\"]]]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context7.next = 4;
                  return (0, _testHelpers.click)('.oss-sidebar-item');

                case 4:
                  assert.ok(this.defaultAction.calledOnce);
                  assert.ok(this.lockedAction.notCalled);

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When locked is true lockedAction is triggered', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search" @locked={{true}} @defaultAction={{this.defaultAction}} @lockedAction={{this.lockedAction}}/>
                  */
                  {
                    "id": "HvbD4VlW",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@locked\",\"@defaultAction\",\"@lockedAction\"],[\"far fa-search\",true,[30,0,[\"defaultAction\"]],[30,0,[\"lockedAction\"]]]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context8.next = 4;
                  return (0, _testHelpers.click)('.oss-sidebar-item');

                case 4:
                  assert.ok(this.defaultAction.notCalled);
                  assert.ok(this.lockedAction.calledOnce);

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Extra attributes', function () {
      (0, _qunit.test)('passing an extra class is applied to the component', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search" class="my-extra-class" />
                  */
                  {
                    "id": "vipnknXz",
                    "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.my-extra-class').exists();

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('passing data-control-name works', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var inputWrapper;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Layout::Sidebar::Item @icon="far fa-search" data-control-name="layout-sidebar" />
                  */
                  {
                    "id": "OaSwikXn",
                    "block": "[[[8,[39,0],[[24,\"data-control-name\",\"layout-sidebar\"]],[[\"@icon\"],[\"far fa-search\"]],null]],[],false,[\"o-s-s/layout/sidebar/item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  inputWrapper = (0, _testHelpers.find)('.oss-sidebar-item');
                  assert.equal(inputWrapper === null || inputWrapper === void 0 ? void 0 : inputWrapper.getAttribute('data-control-name'), 'layout-sidebar');

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/link-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders with icon only', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Link @icon="fab fa-facebook" />
                */
                {
                  "id": "eQZicYur",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"fab fa-facebook\"]],null]],[],false,[\"o-s-s/link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-link i').hasClass('fa-facebook');

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
    (0, _qunit.test)('it renders with label only', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Link @label="Super Label" />
                */
                {
                  "id": "YDuE0ZRR",
                  "block": "[[[8,[39,0],null,[[\"@label\"],[\"Super Label\"]],null]],[],false,[\"o-s-s/link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-link span').hasText('Super Label');

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
    (0, _qunit.test)('it renders with both label and icon', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Link @icon="fab fa-facebook" @label="Facebook" />
                */
                {
                  "id": "VVEz+KAu",
                  "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fab fa-facebook\",\"Facebook\"]],null]],[],false,[\"o-s-s/link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-link i').hasClass('fa-facebook');
                assert.dom('.upf-link span').hasClass('margin-left-xxx-sm');
                assert.dom('.upf-link span').hasText('Facebook');

              case 5:
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
    (0, _qunit.test)('it opens link with href and target', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var windowOpenStub;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                windowOpenStub = _sinon.default.stub(window, 'open');
                _context4.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Link @icon="fab fa-facebook" @label="Facebook" 
                                 @link={{hash href="https://www.google.fr" target="_blank"}} />
                    
                */
                {
                  "id": "h5FjiSVl",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@label\",\"@link\"],[\"fab fa-facebook\",\"Facebook\",[28,[37,1],null,[[\"href\",\"target\"],[\"https://www.google.fr\",\"_blank\"]]]]],null],[1,\"\\n    \"]],[],false,[\"o-s-s/link\",\"hash\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context4.next = 5;
                return (0, _testHelpers.click)('.upf-link');

              case 5:
                assert.true(windowOpenStub.calledOnceWithExactly('https://www.google.fr', '_blank'));

                _sinon.default.restore();

              case 7:
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
    (0, _qunit.test)('it transits to the route', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var transitionToStub;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                transitionToStub = _sinon.default.stub(this.owner.lookup('service:router'), 'transitionTo');
                _context5.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Link @icon="fab fa-facebook" @label="Facebook" @transitionTo={{"workflow.create"}} />
                */
                {
                  "id": "JorAowEl",
                  "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\",\"@transitionTo\"],[\"fab fa-facebook\",\"Facebook\",\"workflow.create\"]],null]],[],false,[\"o-s-s/link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context5.next = 5;
                return (0, _testHelpers.click)('.upf-link');

              case 5:
                assert.true(transitionToStub.calledOnceWithExactly('workflow.create'));

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
    (0, _qunit.test)('it fails if no label nor icon argument are present', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [component][OSS::Link] You must pass either a @label or an @icon argument.');
                });
                _context6.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Link />
                */
                {
                  "id": "yo7RrCus",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/modal-dialog-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/test-helpers/dom/click"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon, _click) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/modal-dialog', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.closeModal = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
                */
                {
                  "id": "R8OOmDpm",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-modal-dialog').exists();

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
    (0, _qunit.test)('On escape button the modal is closed', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
                */
                {
                  "id": "R8OOmDpm",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context2.next = 4;
                return (0, _testHelpers.triggerKeyEvent)('.oss-modal-dialog', 'keyup', 27);

              case 4:
                assert.ok(this.closeModal.calledOnce);

              case 5:
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
    (0, _qunit.test)('The cross button at the top right of the modal closes the modal', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
                */
                {
                  "id": "R8OOmDpm",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context3.next = 4;
                return (0, _click.default)('.fa-times');

              case 4:
                assert.ok(this.closeModal.calledOnce);

              case 5:
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
    (0, _qunit.test)('The title parameter is properly displayed', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md" />
                */
                {
                  "id": "R8OOmDpm",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-modal-dialog .title').hasText('Example modal');

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
    (0, _qunit.test)('The subtitle parameter is properly displayed', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ModalDialog @title="Example modal" @subtitle="Subtitle" @close={{this.closeModal}} @size="md" />
                */
                {
                  "id": "dsyWza2o",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"Subtitle\",[30,0,[\"closeModal\"]],\"md\"]],null]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-modal-dialog .subtitle').hasText('Subtitle');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('The illustration named-block is properly displayed', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
                        <:illustration>
                          <p class="illustration-container">Illustration</p>
                        </:illustration>
                      </OSS::ModalDialog>
                */
                {
                  "id": "PsIfCoFT",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],[[\"illustration\"],[[[[1,\"\\n          \"],[10,2],[14,0,\"illustration-container\"],[12],[1,\"Illustration\"],[13],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.illustration-container').exists();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('The content named-block is properly displayed', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
                        <:content>
                          <p>This is the content</p>
                        </:content>
                      </OSS::ModalDialog>
                */
                {
                  "id": "YaYyx/5I",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],[[\"content\"],[[[[1,\"\\n          \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-modal-dialog--content').hasText('This is the content');

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('The footer named-block is properly displayed', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::ModalDialog @title="Example modal" @subtitle="subtitle" @close={{this.closeModal}} @size="md">
                        <:footer>
                          footer content
                        </:footer>
                      </OSS::ModalDialog>
                */
                {
                  "id": "X00aDNTK",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@close\",\"@size\"],[\"Example modal\",\"subtitle\",[30,0,[\"closeModal\"]],\"md\"]],[[\"footer\"],[[[[1,\"\\n          footer content\\n        \"]],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-modal-dialog footer').hasText('footer content');

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('The component throws an error if the title parameter is not passed', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ModalDialog] The title parameter is mandatory');
                  });
                  _context9.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ModalDialog @close={{this.closeModal}}></OSS::ModalDialog>
                  */
                  {
                    "id": "1kjX3R5V",
                    "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('The component throws an error if the close parameter is not passed', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ModalDialog] The close function is mandatory');
                  });
                  _context10.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ModalDialog @title="Test"></OSS::ModalDialog>
                  */
                  {
                    "id": "jgNtFbQK",
                    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Test\"]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/modal-dialog\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/modal-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
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
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                  "id": "DNvKY1zc",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\"],[\"Test Modal\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n          Foo\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n          Bar\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
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
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                      "id": "z6/SHIC1",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@options\"],[\"Test Modal\",[28,[37,1],null,[[\"centered\"],[true]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.modal-dialog').hasClass('modal-dialog--centered');

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
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                      "id": "J1Uls4C9",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@options\"],[\"Test Modal\",[28,[37,1],null,[[\"modalClass\"],[\"foobar\"]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
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
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                      "id": "yWgLrrkf",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@title\",\"@options\"],[\"Test Modal\",[28,[37,1],null,[[\"borderlessHeader\"],[true]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
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
      (0, _qunit.module)('no header', function () {
        (0, _qunit.test)('no header container is present', /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                      "id": "Tms9s1RG",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],null,[[\"header\"],[false]]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"o-s-s/modal\",\"hash\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.modal-dialog .modal-header').doesNotExist();

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          return function (_x5) {
            return _ref6.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('keyboard shortcut', function () {
      (0, _qunit.test)('it closes the modal on Escape key', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.display = true;

                  this.onClose = function () {
                    _this.set('display', false);
                  };

                  _context6.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "bJIdm3yq",
                    "block": "[[[1,\"\\n\"],[41,[30,0,[\"display\"]],[[[1,\"          \"],[8,[39,1],null,[[\"@onClose\"],[[30,0,[\"onClose\"]]]],[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n              Foo\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n              Bar\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"      \"]],[],false,[\"if\",\"o-s-s/modal\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  assert.dom('.modal-dialog').exists();
                  _context6.next = 7;
                  return (0, _testHelpers.triggerKeyEvent)('.modal', 'keydown', 'Escape');

                case 7:
                  assert.dom('.modal-dialog').doesNotExist();

                case 8:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/nav-tab-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/nav-tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.onSelection = function () {};

      this.tabArray = [];
    });
    (0, _qunit.module)('Default behavior', function () {
      (0, _qunit.test)('basic render', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.tabArray.push({
                    label: 'Tab'
                  });
                  _context.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
                  */
                  {
                    "id": "3rporupq",
                    "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.tab-container').exists();
                  assert.dom('.tab-container .tab').exists();
                  assert.dom('.tab-content span').exists();
                  assert.dom('.tab-content span').hasText('Tab');

                case 7:
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
      (0, _qunit.test)('Tab Icon displays properly', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.tabArray.push({
                    label: 'Tab',
                    icon: 'far fa-thumbs-up'
                  });
                  _context2.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
                  */
                  {
                    "id": "3rporupq",
                    "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.tab-container').exists();
                  assert.dom('.tab-container .tab').exists();
                  assert.dom('.tab-content span').exists();
                  assert.dom('.tab-content i').exists();
                  assert.dom('.tab-content i').hasClass('fa-thumbs-up');
                  assert.dom('.tab-content span').hasText('Tab');

                case 9:
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
      (0, _qunit.test)('Tab info-circle displays properly', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.tabArray.push({
                    label: 'Tab',
                    infoCircle: true
                  });
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
                  */
                  {
                    "id": "3rporupq",
                    "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.tab-container').exists();
                  assert.dom('.tab-container .tab').exists();
                  assert.dom('.tab-content span').exists();
                  assert.dom('.tab-content i').exists();
                  assert.dom('.tab-content i').hasClass('fa-info-circle');
                  assert.dom('.tab-content span').hasText('Tab');

                case 9:
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
      (0, _qunit.test)('Tab notification dot displays properly', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.tabArray.push({
                    label: 'Tab',
                    notificationDot: true
                  });
                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
                  */
                  {
                    "id": "3rporupq",
                    "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.tab-container').exists();
                  assert.dom('.tab-container .tab').exists();
                  assert.dom('.tab-content .fas.fa-circle').exists();

                case 6:
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
      (0, _qunit.test)('Tab displays selected state properly', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.tabArray.push({
                    label: 'Tab',
                    selected: true
                  });
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
                  */
                  {
                    "id": "3rporupq",
                    "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.tab-container').exists();
                  assert.dom('.tab-container .tab').exists();
                  assert.dom('.tab-content span').exists();
                  assert.dom('.tab-container .tab').hasClass('tab--selected');
                  assert.dom('.tab-content span').hasText('Tab');

                case 8:
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
      (0, _qunit.test)('Tab displays disabled state properly', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.tabArray.push({
                    label: 'Tab',
                    disabled: true
                  });
                  _context6.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
                  */
                  {
                    "id": "3rporupq",
                    "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.tab-container').exists();
                  assert.dom('.tab-container .tab').exists();
                  assert.dom('.tab-content span').exists();
                  assert.dom('.tab-container .tab').hasClass('tab--disabled');
                  assert.dom('.tab-content span').hasText('Tab');

                case 8:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('When clicking on Tab element, the component triggers the @onSelection method', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.onSelection = _sinon.default.stub();
                this.tabArray.push({
                  label: 'Tab'
                });
                _context7.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />
                */
                {
                  "id": "3rporupq",
                  "block": "[[[8,[39,0],null,[[\"@tabArray\",\"@onSelection\"],[[30,0,[\"tabArray\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context7.next = 6;
                return (0, _testHelpers.click)('.tab');

              case 6:
                assert.true(this.onSelection.calledOnce);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('It throws an error if @onSelection is not passed', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The parameter @onSelection of type function is mandatory');
                  });
                  _context8.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @tabArray={{this.tabArray}} />
                  */
                  {
                    "id": "80YAqDFw",
                    "block": "[[[8,[39,0],null,[[\"@tabArray\"],[[30,0,[\"tabArray\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('It throws an error if @tabArray is not passed', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The parameter @tabArray is mandatory');
                  });
                  _context9.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @onSelection={{this.onSelection}} />
                  */
                  {
                    "id": "I2pERIWx",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\"],[[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The parameter @tabArray is mandatory');
                  });
                  _context9.next = 6;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @onSelection={{this.onSelection}} @tabArray=[] />
                  */
                  {
                    "id": "T89F5v39",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@tabArray\"],[[30,0,[\"onSelection\"]],\"[]\"]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 6:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('It throws an error if @label and @icon is missing for any element in @tabArray', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  this.tabArray.push({
                    label: '',
                    icon: ''
                  });
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The @label or @icon parameter is mandatory for each element in @tabArray');
                  });
                  _context10.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NavTab @onSelection={{this.onSelection}} @tabArray={{this.tabArray}} />
                  */
                  {
                    "id": "LwlFoY2r",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@tabArray\"],[[30,0,[\"onSelection\"]],[30,0,[\"tabArray\"]]]],null]],[],false,[\"o-s-s/nav-tab\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/number-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@ember/test-helpers/dom/click", "@ember/test-helpers/dom/trigger-key-event", "@ember/test-helpers/dom/type-in", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _click, _triggerKeyEvent, _typeIn, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/number-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::NumberInput />
                */
                {
                  "id": "MfDNJImx",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.number-input').exists();

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
    (0, _qunit.module)('@value parameter', function () {
      (0, _qunit.test)('If none present, the default value is 0', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0');

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
      (0, _qunit.test)('If the value is passed, it is set in the input', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @value={{42}} />
                  */
                  {
                    "id": "3oVdohPO",
                    "block": "[[[8,[39,0],null,[[\"@value\"],[42]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('42');

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
    (0, _qunit.module)('@step parameter', function () {
      (0, _qunit.test)('If none present, the default step is 1', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0');
                  _context4.next = 5;
                  return (0, _click.default)('.upf-square-btn:nth-of-type(2)');

                case 5:
                  assert.dom('.number-input input').hasValue('1');

                case 6:
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
      (0, _qunit.test)('If the step is passed, it is used when increasing the value', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @step={{5}} />
                  */
                  {
                    "id": "AI6CfaMh",
                    "block": "[[[8,[39,0],null,[[\"@step\"],[5]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0');
                  _context5.next = 5;
                  return (0, _click.default)('.upf-square-btn:nth-of-type(2)');

                case 5:
                  assert.dom('.number-input input').hasValue('5');

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If the step is passed, it is used when decreasing the value', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @step={{5}} />
                  */
                  {
                    "id": "AI6CfaMh",
                    "block": "[[[8,[39,0],null,[[\"@step\"],[5]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0');
                  _context6.next = 5;
                  return (0, _click.default)('.upf-square-btn:nth-of-type(1)');

                case 5:
                  assert.dom('.number-input input').hasValue('-5');

                case 6:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Value increase', function () {
      (0, _qunit.test)('+ button increases the value by the step', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0');
                  _context7.next = 5;
                  return (0, _click.default)('.upf-square-btn:nth-of-type(2)');

                case 5:
                  assert.dom('.number-input input').hasValue('1');

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Up arrow increases the value by the step', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0'); // @ts-ignore

                  _context8.next = 5;
                  return (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowUp', {
                    code: 'ArrowUp'
                  });

                case 5:
                  assert.dom('.number-input input').hasValue('1');

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Right arrow increases the value by the step', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0'); // @ts-ignore

                  _context9.next = 5;
                  return (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowRight', {
                    code: 'ArrowRight'
                  });

                case 5:
                  assert.dom('.number-input input').hasValue('1');

                case 6:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If @max parameter is set, increasing the value sets the max value', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @value={{5}} @max={{5}} />
                  */
                  {
                    "id": "KCehC8l8",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@max\"],[5,5]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('5');
                  assert.dom('.upf-square-btn:nth-of-type(2)').isDisabled();

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If @max & @maxReachedTooltip parameter are set, it renders the tooltip', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          var _document$querySelect;

          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @value={{5}} @max={{5}} @maxReachedTooltip="max" />
                  */
                  {
                    "id": "DZK+A3Ct",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@max\",\"@maxReachedTooltip\"],[5,5,\"max\"]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  (_document$querySelect = document.querySelector('.upf-square-btn:nth-of-type(2)')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.dispatchEvent(new Event('mouseover'));
                  _context11.next = 5;
                  return (0, _testHelpers.waitFor)('.upf-tooltip');

                case 5:
                  assert.dom('.upf-tooltip .title').hasText('max');

                case 6:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Value decrease', function () {
      (0, _qunit.test)('- button increases the value by the step', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0');
                  _context12.next = 5;
                  return (0, _click.default)('.upf-square-btn:nth-of-type(1)');

                case 5:
                  assert.dom('.number-input input').hasValue('-1');

                case 6:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Down arrow increases the value by the step', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0'); // @ts-ignore

                  _context13.next = 5;
                  return (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowDown', {
                    code: 'ArrowDown'
                  });

                case 5:
                  assert.dom('.number-input input').hasValue('-1');

                case 6:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Left arrow increases the value by the step', /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput />
                  */
                  {
                    "id": "MfDNJImx",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('0'); // @ts-ignore

                  _context14.next = 5;
                  return (0, _triggerKeyEvent.default)('.number-input input', 'keydown', 'ArrowLeft', {
                    code: 'ArrowLeft'
                  });

                case 5:
                  assert.dom('.number-input input').hasValue('-1');

                case 6:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        return function (_x14) {
          return _ref15.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If @min parameter is set, decreasing the value sets the min value', /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @value={{5}} @min={{5}} />
                  */
                  {
                    "id": "nOdlie7z",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@min\"],[5,5]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.number-input input').hasValue('5');
                  assert.dom('.upf-square-btn:nth-of-type(1)').isDisabled();

                case 4:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        return function (_x15) {
          return _ref16.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('If @min & @minReachedTooltip parameter are set, it renders the tooltip', /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
          var _document$querySelect2;

          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @value={{5}} @min={{5}} @minReachedTooltip="min" />
                  */
                  {
                    "id": "wS5NjZsl",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@min\",\"@minReachedTooltip\"],[5,5,\"min\"]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  (_document$querySelect2 = document.querySelector('.upf-square-btn:nth-of-type(1)')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.dispatchEvent(new Event('mouseover'));
                  _context16.next = 5;
                  return (0, _testHelpers.waitFor)('.upf-tooltip');

                case 5:
                  assert.dom('.upf-tooltip .title').hasText('min');

                case 6:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function (_x16) {
          return _ref17.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('On user input', function () {
      (0, _qunit.test)('if the inputed value is above the max value, the max value is set', /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @max={{42}} />
                  */
                  {
                    "id": "JUYyIOFN",
                    "block": "[[[8,[39,0],null,[[\"@max\"],[42]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context17.next = 4;
                  return (0, _typeIn.default)('.number-input input', '455');

                case 4:
                  assert.dom('.number-input input').hasValue('42');

                case 5:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function (_x17) {
          return _ref18.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('if the inputed value is below the min value, the min value is set', /*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(assert) {
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::NumberInput @value={{0}} @min={{42}} />
                  */
                  {
                    "id": "fHrwPbDC",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@min\"],[0,42]],null]],[],false,[\"o-s-s/number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context18.next = 4;
                  return (0, _typeIn.default)('.number-input input', '3');

                case 4:
                  assert.dom('.number-input input').hasValue('42');

                case 5:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));

        return function (_x18) {
          return _ref19.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('The @onChange method receives the updated value', /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(assert) {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this.onChange = _sinon.default.stub();
                _context19.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::NumberInput @value={{0}} @onChange={{this.onChange}} />
                */
                {
                  "id": "M1NPJA/V",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[0,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/number-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context19.next = 5;
                return (0, _click.default)('.upf-square-btn:nth-of-type(2)');

              case 5:
                assert.true(this.onChange.calledOnceWithExactly(1));

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function (_x19) {
        return _ref20.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/panel-row-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/panel-row', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'l}} />
                */
                {
                  "id": "3M179f20",
                  "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-cog\",\"Your Label\"]],null]],[],false,[\"o-s-s/panel/row\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel-content--row').exists();

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
    (0, _qunit.test)('It renders the @icon properly', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'l}} />
                */
                {
                  "id": "3M179f20",
                  "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-cog\",\"Your Label\"]],null]],[],false,[\"o-s-s/panel/row\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.far').exists();

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
    (0, _qunit.test)('it renders the @label properly', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'l}} />
                */
                {
                  "id": "3M179f20",
                  "block": "[[[8,[39,0],null,[[\"@icon\",\"@label\"],[\"fa-cog\",\"Your Label\"]],null]],[],false,[\"o-s-s/panel/row\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span').hasText('Your Label');

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
});
define("dummy/tests/integration/components/o-s-s/panel-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/panel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:content>Content</:content>
                      </OSS::Panel>
                    
                */
                {
                  "id": "P8xuxtLG",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"content\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel').exists();
                assert.dom('.oss-panel--content').hasText('Content', 'Content should be visible');

              case 4:
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
    (0, _qunit.test)('it should render the content separator if the header exists', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:header>Header</:header>
                        <:content>Content</:content>
                      </OSS::Panel>
                    
                */
                {
                  "id": "q/ZZFaTX",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"header\",\"content\"],[[[[1,\"Header\"]],[]],[[[1,\"Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel--content .oss-panel--separator').exists('Content separator should be visible when header is visible');

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
    (0, _qunit.test)('it should render the footer separator if the content exists', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:header>Header</:header>
                        <:content>Content</:content>
                        <:footer>Footer</:footer>
                      </OSS::Panel>
                    
                */
                {
                  "id": "xWnKwkFn",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"header\",\"content\",\"footer\"],[[[[1,\"Header\"]],[]],[[[1,\"Content\"]],[]],[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel--footer .oss-panel--separator').exists('Footer separator should be visible when the content is visible');

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
    (0, _qunit.test)('it should not render the content separator if the header does not exist', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:content>Content</:content>
                        <:footer>Footer</:footer>
                      </OSS::Panel>
                    
                */
                {
                  "id": "gGf0p2Nd",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"content\",\"footer\"],[[[[1,\"Content\"]],[]],[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel--content .oss-panel--separator').doesNotExist('Content separator should not be visible when header is not visible');

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
    (0, _qunit.test)('it should not render the footer separator if the content does not exist', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:footer>Footer</:footer>
                      </OSS::Panel>
                    
                */
                {
                  "id": "P5g4Sh0l",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"footer\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel--footer .oss-panel--separator').doesNotExist('Footer separator should not be visible when the content is not visible');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If the header named-block is defined, it is properly rendered', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:header>Header</:header>
                      </OSS::Panel>
                    
                */
                {
                  "id": "2hcqdwgD",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"header\"],[[[[1,\"Header\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel--header').exists('The header named block should be visible');

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If the content named-block is defined, it is properly rendered', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:content>Content</:content>
                      </OSS::Panel>
                    
                */
                {
                  "id": "P8xuxtLG",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"content\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel--content').exists('The content named block should be visible');

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If the footer named-block is defined, it is properly rendered', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::Panel>
                        <:footer>Footer</:footer>
                      </OSS::Panel>
                    
                */
                {
                  "id": "P5g4Sh0l",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"footer\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"o-s-s/panel\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-panel--footer').exists('The footer named block should be visible');

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/password-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/password-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value="" />
                */
                {
                  "id": "RqoPMzF6",
                  "block": "[[[8,[39,0],null,[[\"@value\"],[\"\"]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-container').exists();

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
    (0, _qunit.test)('it renders the @placeholder', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value="" @placeholder="test" />
                */
                {
                  "id": "h+Y/6nU9",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@placeholder\"],[\"\",\"test\"]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-container input').hasProperty('placeholder', 'test');

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
    (0, _qunit.test)('it displays the error message when the @errorMessage is non-empty', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value="" @errorMessage="This is the error message" />
                */
                {
                  "id": "Hh2TrMr8",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@errorMessage\"],[\"\",\"This is the error message\"]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-container').hasClass('oss-input-container--errored');
                assert.dom('.text-color-error').hasText('This is the error message');

              case 4:
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
    (0, _qunit.test)('The input is set to password, thus hiding characters, by default', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value="azeaze" />
                */
                {
                  "id": "PSKZAjrH",
                  "block": "[[[8,[39,0],null,[[\"@value\"],[\"azeaze\"]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('input').hasAttribute('type', 'password');

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
    (0, _qunit.test)('Clicking on the eye icon sets the input type to text, thus making the text readable', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value="azeaze" />
                */
                {
                  "id": "PSKZAjrH",
                  "block": "[[[8,[39,0],null,[[\"@value\"],[\"azeaze\"]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('input').hasAttribute('type', 'password');
                _context5.next = 5;
                return (0, _testHelpers.click)('.fa-eye');

              case 5:
                assert.dom('input').hasAttribute('type', 'text');

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('Clicking on the eye-slash icon sets the input type to password, thus hiding the text', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value="azeaze" />
                */
                {
                  "id": "PSKZAjrH",
                  "block": "[[[8,[39,0],null,[[\"@value\"],[\"azeaze\"]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('input').hasAttribute('type', 'password');
                _context6.next = 5;
                return (0, _testHelpers.click)('.fa-eye');

              case 5:
                assert.dom('input').hasAttribute('type', 'text');
                _context6.next = 8;
                return (0, _testHelpers.click)('.fa-eye-slash');

              case 8:
                assert.dom('input').hasAttribute('type', 'password');

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If the password regex isnt matched, then the error message is displayed', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.value = '';
                _context7.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value={{this.value}} />
                */
                {
                  "id": "zF+lggiu",
                  "block": "[[[8,[39,0],null,[[\"@value\"],[[30,0,[\"value\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context7.next = 5;
                return (0, _testHelpers.typeIn)('input', 'az');

              case 5:
                assert.dom('.text-color-error').hasText('Your password should have at least 8 characters with at least one lower-case character, one upper-case character and one digit.');

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If the password regex is matched, and the @validates method is passed, then the status of the validation is returned', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.value = '1Aaaaaa';

                this.validates = function (x) {
                  assert.equal(x, true);
                };

                _context8.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
                */
                {
                  "id": "nAOSYrA9",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context8.next = 6;
                return (0, _testHelpers.typeIn)('input', 'a');

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('If the password regex isnt matched, and the @validates method is passed, then the status of the validation is returned', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.value = '1A';

                this.validates = function (x) {
                  assert.equal(x, false);
                };

                _context9.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput @value={{this.value}} @validates={{this.validates}} />
                */
                {
                  "id": "nAOSYrA9",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@validates\"],[[30,0,[\"value\"]],[30,0,[\"validates\"]]]],null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context9.next = 6;
                return (0, _testHelpers.typeIn)('input', 'a');

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it throws an error when the @value parameter is missing', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [component][OSS::PasswordInput] The @value parameter is mandatory');
                });
                _context10.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PasswordInput />
                */
                {
                  "id": "SHIyDU6x",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/password-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/phone-number-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@ember/test-helpers/dom/click", "sinon", "@ember/test-helpers/dom/find-all", "@ember/test-helpers/dom/type-in", "@ember/test-helpers/settled"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _click, _sinon, _findAll, _typeIn, _settled) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/phone-number', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.onChange = function () {};

                _context.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
                */
                {
                  "id": "bXqSAdau",
                  "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.phone-number-container').exists();

              case 4:
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
    (0, _qunit.test)('The passed @number parameter is properly displayed in the input', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.onChange = function () {};

                _context2.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PhoneNumberInput @prefix="" @number="12341234" @onChange={{this.onChange}} />
                */
                {
                  "id": "B7WcasOX",
                  "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"12341234\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('input').hasValue('12341234');

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
    (0, _qunit.test)('It properly loads the correct country when the @prefix parameter is defined', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.onChange = function () {};

                _context3.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::PhoneNumberInput @prefix="+33" @number="" @onChange={{this.onChange}} />
                */
                {
                  "id": "Pg1K7opr",
                  "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"+33\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.country-selector .fflag.fflag-FR').exists();

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
    (0, _qunit.module)('Country selector', function () {
      (0, _qunit.test)('Clicking on the Flag button opens the country selector', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.onChange = function () {};

                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "bXqSAdau",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context4.next = 5;
                  return (0, _click.default)('.country-selector');

                case 5:
                  assert.dom('.upf-infinite-select').exists();

                case 6:
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
      (0, _qunit.test)('Selecting a new country in the Country selector triggers the onChange method', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var clickableRows;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.onChange = _sinon.default.spy();
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "bXqSAdau",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context5.next = 5;
                  return (0, _click.default)('.country-selector');

                case 5:
                  clickableRows = (0, _findAll.default)('.upf-infinite-select__item');
                  _context5.next = 8;
                  return (0, _click.default)(clickableRows[4]);

                case 8:
                  assert.ok(this.onChange.calledOnce);
                  assert.dom('.country-selector .fflag.fflag-CH').exists();

                case 10:
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
      (0, _qunit.test)('Typing in the search input filters the results', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var clickableRows;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.onChange = _sinon.default.spy();
                  _context6.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "bXqSAdau",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context6.next = 5;
                  return (0, _click.default)('.country-selector');

                case 5:
                  assert.dom('.upf-infinite-select').exists();
                  _context6.next = 8;
                  return (0, _typeIn.default)('.upf-infinite-select input', 'fran');

                case 8:
                  clickableRows = (0, _findAll.default)('.upf-infinite-select__item');
                  assert.equal(clickableRows.length, 1);
                  assert.dom(clickableRows[0]).hasText('France (+33)');

                case 11:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Searching by Country Code Prefix works', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          var clickableRows;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  this.onChange = _sinon.default.spy();
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "bXqSAdau",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\"],[\"\",\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context7.next = 5;
                  return (0, _click.default)('.country-selector');

                case 5:
                  assert.dom('.upf-infinite-select').exists();
                  _context7.next = 8;
                  return (0, _typeIn.default)('.upf-infinite-select input', '33');

                case 8:
                  clickableRows = (0, _findAll.default)('.upf-infinite-select__item');
                  assert.equal(clickableRows.length, 2);
                  assert.dom(clickableRows[0]).hasText('France (+33)');

                case 11:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Phone Number Input', function () {
      (0, _qunit.test)('Typing numbers in the Phone input triggers the onChange method', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.onChange = _sinon.default.spy();
                  this.onValidation = _sinon.default.spy();
                  _context8.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} @validates={{this.onValidation}} />
                  */
                  {
                    "id": "kZk/OxLq",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[\"\",\"\",[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context8.next = 6;
                  return (0, _typeIn.default)('input', '8');

                case 6:
                  assert.ok(this.onChange.calledOnce);
                  assert.ok(this.onValidation.calledWithExactly(true));
                  assert.dom('input').hasValue('8');

                case 9:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Typing non-numeric characters does not apply changes', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  this.onChange = _sinon.default.spy();
                  this.onValidation = _sinon.default.spy();
                  _context9.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix="" @number="" @onChange={{this.onChange}} @validates={{this.onValidation}} />
                  */
                  {
                    "id": "kZk/OxLq",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[\"\",\"\",[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context9.next = 6;
                  return (0, _typeIn.default)('input', '8');

                case 6:
                  assert.ok(this.onChange.calledOnce); // @ts-ignore

                  _context9.next = 9;
                  return (0, _testHelpers.triggerKeyEvent)('input', 'keydown', 'A', {
                    code: 'a'
                  });

                case 9:
                  assert.ok(this.onValidation.calledWithExactly(true));
                  assert.dom('input').hasValue('8');

                case 11:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it displays an error if the number contains a + symbol', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  this.prefix = '+1';
                  this.number = '';

                  this.onChange = function (prefix, number) {
                    _this.set('prefix', prefix);

                    _this.set('number', number);
                  };

                  this.onValidation = _sinon.default.spy();
                  _context10.next = 6;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix={{this.prefix}} @number={{this.number}} @onChange={{this.onChange}} @validates={{this.onValidation}} />
                  */
                  {
                    "id": "3f8iSdmc",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@number\",\"@onChange\",\"@validates\"],[[30,0,[\"prefix\"]],[30,0,[\"number\"]],[30,0,[\"onChange\"]],[30,0,[\"onValidation\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 6:
                  _context10.next = 8;
                  return (0, _typeIn.default)('input', '+1');

                case 8:
                  _context10.next = 10;
                  return (0, _settled.default)();

                case 10:
                  assert.ok(this.onValidation.calledWithExactly(false));
                  assert.dom('.font-color-error-500').exists();

                case 12:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('It throws an error if @prefix is not passed', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @prefix of type string is mandatory');
                  });

                  this.onChange = function () {};

                  _context11.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @number="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "6nAQ/Ydu",
                    "block": "[[[8,[39,0],null,[[\"@number\",\"@onChange\"],[\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context11.next = 6;
                  return (0, _settled.default)();

                case 6:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('It throws an error if @number is not passed', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @number of type string is mandatory');
                  });

                  this.onChange = function () {};

                  _context12.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @prefix="" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "RnHx/E9i",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@onChange\"],[\"\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context12.next = 6;
                  return (0, _settled.default)();

                case 6:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('It throws an error if @onChange is not passed', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::PhoneNumberInput] The parameter @onChange of type function is mandatory');
                  });

                  this.onChange = function () {};

                  _context13.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::PhoneNumberInput @number="" @prefix="" />
                  */
                  {
                    "id": "+wCJxRMz",
                    "block": "[[[8,[39,0],null,[[\"@number\",\"@prefix\"],[\"\",\"\"]],null]],[],false,[\"o-s-s/phone-number-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context13.next = 6;
                  return (0, _settled.default)();

                case 6:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        return function (_x13) {
          return _ref14.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/power-select-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/power-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    var onSearch = _sinon.default.stub();

    var onChange = _sinon.default.stub();

    hooks.beforeEach(function () {
      this.selectedItems = [];
      this.items = [];
      this.onSearch = onSearch;
    });
    (0, _qunit.module)('it renders', function () {
      (0, _qunit.test)('with all required named blocks', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "sTJ8qWvt",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-power-select').exists({
                    count: 1
                  });
                  assert.dom('.upf-power-select__array-container').exists({
                    count: 1
                  });
                  assert.dom('.upf-infinite-select').doesNotExist();
                  _context.next = 7;
                  return (0, _testHelpers.click)('.upf-power-select__array-container');

                case 7:
                  assert.dom('.upf-infinite-select').exists();

                case 8:
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
      (0, _qunit.test)('custom empty state is properly rendered', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "bpSmyDA0",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\",\"empty-state\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]],[[[1,\"\\n            \"],[10,0],[14,0,\"foobar\"],[12],[1,\"custom empty state\"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-power-select').exists({
                    count: 1
                  });
                  assert.dom('.upf-power-select__array-container').exists({
                    count: 1
                  });
                  assert.dom('.upf-infinite-select').doesNotExist();
                  _context2.next = 7;
                  return (0, _testHelpers.click)('.upf-power-select__array-container');

                case 7:
                  assert.dom('.upf-infinite-select').exists();
                  assert.dom('.foobar').exists();
                  assert.dom('.foobar').hasText('custom empty state');

                case 10:
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
    (0, _qunit.module)('with @selectedItems', function () {
      (0, _qunit.test)('Passing @selectedItems parameter displays the items', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          var domTags;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.selectedItems = ['value1', 'value2'];
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "yKdrDONy",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[10,1],[12],[1,[30,1]],[13],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  domTags = (0, _testHelpers.findAll)('.array-input-container span');
                  assert.dom(domTags[0]).hasText('value1');
                  assert.dom(domTags[1]).hasText('value2');

                case 6:
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
      (0, _qunit.test)('Passing empty @selectedItems parameter displays nothing', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "35kqICw5",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[10,1],[14,1,\"selectedItemTest\"],[12],[1,[30,1]],[13],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.array-input-container #selectedItemTest').doesNotExist();

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
      (0, _qunit.test)('Passing empty @selectedItems and @placeholder parameters displays placeholder', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "8zueNla2",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@placeholder\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],\"placeholder\"]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.array-input-container').hasText('placeholder');

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('with @items', function (hooks) {
      hooks.beforeEach(function () {
        this.items = ['value1', 'value2'];
      });
      (0, _qunit.test)('Passing @items parameter displays the items in InfiniteSelect', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var domTags;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "sTJ8qWvt",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context6.next = 4;
                  return (0, _testHelpers.click)('.upf-power-select__array-container');

                case 4:
                  domTags = (0, _testHelpers.findAll)('.upf-infinite-select__item');
                  assert.dom(domTags[0]).hasText('value1');
                  assert.dom(domTags[1]).hasText('value2');

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('with @onChange', function (hooks) {
      hooks.beforeEach(function () {
        this.selectedItems = ['value1', 'value2'];
        this.items = ['value1', 'value2'];
        this.onChange = onChange;
      });
      (0, _qunit.test)('selecting item triggers onChange with selection operation', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "dgs2jaQ0",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@onChange\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],[30,0,[\"onChange\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context7.next = 4;
                  return (0, _testHelpers.click)('.upf-power-select__array-container');

                case 4:
                  _context7.next = 6;
                  return (0, _testHelpers.click)('.upf-infinite-select__item:nth-child(1)');

                case 6:
                  assert.ok(this.onChange.calledWith('value1', 'selection'));

                case 7:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('with @searchPlaceholder', function () {
      (0, _qunit.test)('Passing @items parameter displays the items in InfiniteSelect', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "EEPiasZe",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\",\"@searchPlaceholder\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]],\"searchPlaceholder\"]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context8.next = 4;
                  return (0, _testHelpers.click)('.upf-power-select__array-container');

                case 4:
                  assert.dom('.upf-infinite-select input').hasAttribute('placeholder', 'searchPlaceholder');

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('with @onSearch', function () {
      (0, _qunit.test)('search is correctly called', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "sTJ8qWvt",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@onSearch\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"onSearch\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"]],[1]],[[[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"]],[2]]]]],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context9.next = 4;
                  return (0, _testHelpers.click)('.upf-power-select__array-container');

                case 4:
                  _context9.next = 6;
                  return (0, _testHelpers.typeIn)('.upf-infinite-select input', 's');

                case 6:
                  assert.ok(this.onSearch.calledWith('s'));

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('with @onBottomReached', function (hooks) {
      hooks.beforeEach(function () {
        var _this = this;

        this.items = ['value1', 'value2', 'value3'];
        this.loadingMore = false;
        this.onBottomReached = _sinon.default.stub().callsFake(function () {
          _this.set('loadingMore', true);
        });
      });
      (0, _qunit.test)('search is correctly call', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "uCW6Th8x",
                    "block": "[[[1,\"\\n        \"],[10,0],[14,5,\"height:150px\"],[12],[1,\"\\n          \"],[8,[39,0],null,[[\"@selectedItems\",\"@items\",\"@loadingMore\",\"@onSearch\",\"@onBottomReached\"],[[30,0,[\"selectedItems\"]],[30,0,[\"items\"]],[30,0,[\"loadingMore\"]],[30,0,[\"onSearch\"]],[30,0,[\"onBottomReached\"]]]],[[\"selected-item\",\"option-item\"],[[[[1,\"\\n              \"],[1,[30,1]],[1,\"\\n            \"]],[1]],[[[1,\"\\n              \"],[1,[30,2]],[1,\"\\n            \"]],[2]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[\"selectedItem\",\"item\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context10.next = 4;
                  return (0, _testHelpers.click)('.upf-power-select__array-container');

                case 4:
                  _context10.next = 6;
                  return (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);

                case 6:
                  this.set('loadingMore', false);
                  _context10.next = 9;
                  return (0, _testHelpers.scrollTo)('.upf-infinite-select__items-container', 0, 1500);

                case 9:
                  assert.ok(this.onBottomReached.calledTwice);

                case 10:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('without selected-item named block', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::PowerSelect] You must pass selected-item named block');
                  });
                  _context11.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::PowerSelect @onSearch={{this.onSearch}}/>
                        
                  */
                  {
                    "id": "OUZFPCxM",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@onSearch\"],[[30,0,[\"onSearch\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('without option-item named block', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::PowerSelect] You must pass option-item named block');
                  });
                  _context12.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::PowerSelect @onSearch={{this.onSearch}}>
                            <:selected-item as |selectedItem|>
                              {{selectedItem.name}}
                            </:selected-item>
                          </OSS::PowerSelect>
                        
                  */
                  {
                    "id": "ksvfUbsR",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@onSearch\"],[[30,0,[\"onSearch\"]]]],[[\"selected-item\"],[[[[1,\"\\n            \"],[1,[30,1,[\"name\"]]],[1,\"\\n          \"]],[1]]]]],[1,\"\\n      \"]],[\"selectedItem\"],false,[\"o-s-s/power-select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/radio-button-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@ember/test-helpers/dom/click"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon, _click) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/radio-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton />
                */
                {
                  "id": "xKDNIPNa",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-radio-btn').exists();

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
    (0, _qunit.test)('It shows the selected state if the @selected parameter is true', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton @selected={{true}} />
                */
                {
                  "id": "K8w6lsJT",
                  "block": "[[[8,[39,0],null,[[\"@selected\"],[true]],null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-radio-btn--selected').exists();

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
    (0, _qunit.test)('It shows the empty state if the @selected parameter is false', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton @selected={{false}} />
                */
                {
                  "id": "NQKHf9Ux",
                  "block": "[[[8,[39,0],null,[[\"@selected\"],[false]],null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-radio-btn').exists();
                assert.dom('.oss-radio-btn--selected').doesNotExist();

              case 4:
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
    (0, _qunit.test)('It shows the selected/disabled state if the @selected parameter is true and the @disabled parameter is true', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton @selected={{true}} @disabled={{true}} />
                */
                {
                  "id": "eL/KwNvl",
                  "block": "[[[8,[39,0],null,[[\"@selected\",\"@disabled\"],[true,true]],null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-radio-btn--selected').exists();
                assert.dom('.oss-radio-btn--disabled').exists();

              case 4:
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
    (0, _qunit.test)('It shows the empty/disabled state if the @selected parameter is false and the @disabled parameter is true', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton @selected={{false}} @disabled={{true}} />
                */
                {
                  "id": "48VpPbvG",
                  "block": "[[[8,[39,0],null,[[\"@selected\",\"@disabled\"],[false,true]],null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-radio-btn').exists();
                assert.dom('.oss-radio-btn--selected').doesNotExist();
                assert.dom('.oss-radio-btn--disabled').exists();

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('It triggers the onChange method on click when the @disabled parameter is false', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.onChange = _sinon.default.stub();
                _context6.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton @selected={{false}} @onChange={{this.onChange}} />
                */
                {
                  "id": "FzSFLKuw",
                  "block": "[[[8,[39,0],null,[[\"@selected\",\"@onChange\"],[false,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.oss-radio-btn').exists();
                _context6.next = 6;
                return (0, _click.default)('.oss-radio-btn');

              case 6:
                assert.true(this.onChange.calledOnceWithExactly(true));

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('It triggers the onChange method on click when the @disabled parameter is true', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.onChange = _sinon.default.stub();
                _context7.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton @selected={{true}} @onChange={{this.onChange}} />
                */
                {
                  "id": "fGwnIFqW",
                  "block": "[[[8,[39,0],null,[[\"@selected\",\"@onChange\"],[true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.oss-radio-btn').exists();
                _context7.next = 6;
                return (0, _click.default)('.oss-radio-btn');

              case 6:
                assert.true(this.onChange.calledOnceWithExactly(false));

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)("It doesn't trigger the onChange method on click when the @disabled parameter is true", /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.onChange = _sinon.default.stub();
                _context8.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::RadioButton @selected={{false}} @disabled={{true}} @onChange={{this.onChange}} />
                */
                {
                  "id": "akBP+B83",
                  "block": "[[[8,[39,0],null,[[\"@selected\",\"@disabled\",\"@onChange\"],[false,true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/radio-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context8.next = 5;
                return (0, _click.default)('.oss-radio-btn');

              case 5:
                assert.true(this.onChange.notCalled);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/select-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
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
      (0, _qunit.test)('the onChange function is called with the selected item', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.value = this.items[0];
                  _context.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "W4Z44kYq",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context.next = 5;
                  return (0, _testHelpers.click)('.upf-input div');

                case 5:
                  _context.next = 7;
                  return (0, _testHelpers.click)('.upf-infinite-select .upf-infinite-select__item:last-child');

                case 7:
                  assert.ok(this.onChange.calledOnceWithExactly(this.items[1]));

                case 8:
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
    });
    (0, _qunit.module)('items display', function () {
      (0, _qunit.test)('the option block properly displays each item', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "W4Z44kYq",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context2.next = 4;
                  return (0, _testHelpers.click)('.upf-input div');

                case 4:
                  assert.dom('.upf-infinite-select').exists();
                  assert.dom('.upf-infinite-select .upf-infinite-select__item').exists({
                    count: 2
                  });
                  assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child').hasText('foo');
                  assert.dom('.upf-infinite-select .upf-infinite-select__item:last-child').hasText('bar');

                case 8:
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
    (0, _qunit.module)('selected value display', function () {
      (0, _qunit.test)('the default placeholder is displayed if the @value arg is null-ish', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.value = null;
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "W4Z44kYq",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-input').hasText('Select');

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
      (0, _qunit.test)('the passed @placeholder arg is displayed if the @value arg is null-ish', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.value = null;
                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "2DnRKpsn",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-input').hasText('my placeholder');

                case 4:
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
      (0, _qunit.test)("the current value's label attr is displayed", /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.value = this.items[0];
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder">
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "2DnRKpsn",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-input').hasText('First item');

                case 4:
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
      (0, _qunit.test)("the current value's is displayed with the targetLabel arg when passed", /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.value = this.items[0];
                  _context6.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder" @targetLabel="name">
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "NpYqxCLD",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\",\"@targetLabel\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\",\"name\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-input').hasText('foo');

                case 4:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)("the current value's is displayed with the right class and active icon in the options", /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  this.value = this.items[0];
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @placeholder="my placeholder" @targetLabel="name">
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "NpYqxCLD",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\",\"@targetLabel\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\",\"name\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context7.next = 5;
                  return (0, _testHelpers.click)('.upf-input div');

                case 5:
                  assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper').hasClass('selected');
                  assert.dom('.upf-infinite-select .upf-infinite-select__item:first-child .item-wrapper i.far.fa-check').exists();

                case 7:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('the selected value is displayed using the selected named block if provided', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.value = this.items[0];
                  _context8.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "DQpl2x8n",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@placeholder\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"my placeholder\"]],[[\"selected\",\"option\"],[[[[1,\"\\n              Selected value: \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]],[[[1,\"\\n              \"],[1,[30,2,[\"name\"]]],[1,\"\\n            \"]],[2]]]]],[1,\"\\n        \"]],[\"value\",\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-input').hasText('Selected value: foo');

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('disabled state', function () {
      (0, _qunit.test)('the dropdown does not open when the select is clicked', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @disabled={{true}}>
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "jHzm1q8/",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@disabled\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],true]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context9.next = 4;
                  return (0, _testHelpers.click)('.upf-input div');

                case 4:
                  assert.dom('.upf-infinite-select').doesNotExist();

                case 5:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('feedback states', function () {
      (0, _qunit.module)('errorful state', function () {
        (0, _qunit.test)('the right class is applied to the select container', /*#__PURE__*/function () {
          var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @errorMessage="error !">
                                <:option as |item|>
                                  {{item.name}}
                                </:option>
                              </OSS::Select>
                            
                    */
                    {
                      "id": "AyGkL6zl",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@errorMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"error !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-select-container').hasClass('oss-select-container--errorful');

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          return function (_x10) {
            return _ref11.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('the error message is displayed under the select field', /*#__PURE__*/function () {
          var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @errorMessage="error !">
                                <:option as |item|>
                                  {{item.name}}
                                </:option>
                              </OSS::Select>
                            
                    */
                    {
                      "id": "AyGkL6zl",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@errorMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"error !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-select-container .upf-input + .font-color-error-500').hasText('error !');

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          return function (_x11) {
            return _ref12.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('successful state', function () {
        (0, _qunit.test)('the right class is applied to the select container', /*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @successMessage="good !">
                                <:option as |item|>
                                  {{item.name}}
                                </:option>
                              </OSS::Select>
                            
                    */
                    {
                      "id": "yk6s+kei",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@successMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"good !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-select-container').hasClass('oss-select-container--successful');

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          return function (_x12) {
            return _ref13.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('the error message is displayed under the select field', /*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}} @successMessage="good !">
                                <:option as |item|>
                                  {{item.name}}
                                </:option>
                              </OSS::Select>
                            
                    */
                    {
                      "id": "yk6s+kei",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\",\"@successMessage\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]],\"good !\"]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-select-container .upf-input + .font-color-success-500').hasText('good !');

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));

          return function (_x13) {
            return _ref14.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('searching through the options', function () {
      (0, _qunit.test)('the search is not displayed if no onSearch arg is provided', /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  this.value = this.items[0];
                  _context14.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @items={{this.items}} @value={{this.value}}>
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "W4Z44kYq",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context14.next = 5;
                  return (0, _testHelpers.click)('.upf-input div');

                case 5:
                  assert.dom('.upf-infinite-select .upf-input').doesNotExist();

                case 6:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        return function (_x14) {
          return _ref15.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('the search is displayed if the @onSearch arg is provided', /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  assert.expect(4);
                  this.value = this.items[0];

                  this.onSearch = function (keyword) {
                    assert.equal(keyword, 'F');

                    _this.set('items', _this.items.filter(function (item) {
                      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
                    }));
                  };

                  _context15.next = 5;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                            <OSS::Select @onChange={{this.onChange}} @onSearch={{this.onSearch}} @items={{this.items}} @value={{this.value}}>
                              <:option as |item|>
                                {{item.name}}
                              </:option>
                            </OSS::Select>
                          
                  */
                  {
                    "id": "AYy7Cr3x",
                    "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@onChange\",\"@onSearch\",\"@items\",\"@value\"],[[30,0,[\"onChange\"]],[30,0,[\"onSearch\"]],[30,0,[\"items\"]],[30,0,[\"value\"]]]],[[\"option\"],[[[[1,\"\\n              \"],[1,[30,1,[\"name\"]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"]],[\"item\"],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 5:
                  _context15.next = 7;
                  return (0, _testHelpers.click)('.upf-input div');

                case 7:
                  assert.dom('.upf-infinite-select .upf-input').exists();
                  _context15.next = 10;
                  return (0, _testHelpers.typeIn)('.upf-infinite-select .upf-input', 'F');

                case 10:
                  assert.dom('.upf-infinite-select .upf-infinite-select__item').exists({
                    count: 1
                  });
                  assert.dom('.upf-infinite-select .upf-infinite-select__item').hasText('foo');

                case 12:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        return function (_x15) {
          return _ref16.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if no @onChange arg is passed', /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Select] The parameter @onChange of type function is mandatory');
                  });
                  _context16.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Select />
                  */
                  {
                    "id": "I8P9MsNU",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function (_x16) {
          return _ref17.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if the component is invoked with no option named blocked', /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Select] You must pass option named block');
                  });
                  _context17.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Select @onChange={{this.onChange}} />
                  */
                  {
                    "id": "sqyctJMG",
                    "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/select\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function (_x17) {
          return _ref18.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/skeleton-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/skeleton', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Skeleton/>
                */
                {
                  "id": "SrLwdpLC",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-skeleton-effect').exists();

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
    (0, _qunit.module)('@height parameters', function () {
      (0, _qunit.test)('Default height', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton/>
                  */
                  {
                    "id": "SrLwdpLC",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-skeleton-effect').hasStyle({
                    height: '36px'
                  });

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
      (0, _qunit.test)('The style height should correspond to parameter value', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.height = 400;
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @height={{this.height}}/>
                  */
                  {
                    "id": "qhSYk5tt",
                    "block": "[[[8,[39,0],null,[[\"@height\"],[[30,0,[\"height\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-skeleton-effect').hasStyle({
                    height: '400px'
                  });

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
    });
    (0, _qunit.module)('@width parameters', function () {
      (0, _qunit.test)('Default width', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton/>
                  */
                  {
                    "id": "SrLwdpLC",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-skeleton-effect').hasStyle({
                    width: '36px'
                  });

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
      (0, _qunit.test)('The style width should correspond to parameter value', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.width = 400;
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @width={{this.width}}/>
                  */
                  {
                    "id": "isCzhG2g",
                    "block": "[[[8,[39,0],null,[[\"@width\"],[[30,0,[\"width\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-skeleton-effect').hasStyle({
                    width: '400px'
                  });

                case 4:
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
    (0, _qunit.module)('@gap parameters', function () {
      (0, _qunit.test)('Default gap', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @multiple={{2}} />
                  */
                  {
                    "id": "IYhXiFx+",
                    "block": "[[[8,[39,0],null,[[\"@multiple\"],[2]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.fx-1').hasClass('fx-gap-px-9');

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('The has class corresponding to gap', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  this.gap = 12;
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @gap={{this.gap}} @multiple={{2}} />
                  */
                  {
                    "id": "OnnUNH2D",
                    "block": "[[[8,[39,0],null,[[\"@gap\",\"@multiple\"],[[30,0,[\"gap\"]],2]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.fx-1').hasClass('fx-gap-px-12');

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('@multiple parameters', function () {
      (0, _qunit.test)('Default has one skeleton effect', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          var items;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton/>
                  */
                  {
                    "id": "SrLwdpLC",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  items = (0, _testHelpers.findAll)('.upf-skeleton-effect');
                  assert.ok(items.length === 1);

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('The content has multiple skeleton effect', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          var items;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  this.multiple = 4;
                  _context9.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @multiple={{this.multiple}}/>
                  */
                  {
                    "id": "Bd+Pd5mH",
                    "block": "[[[8,[39,0],null,[[\"@multiple\"],[[30,0,[\"multiple\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  items = (0, _testHelpers.findAll)('.upf-skeleton-effect');
                  assert.ok(items.length === 4);

                case 5:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('@randomize parameters', function () {
      hooks.beforeEach(function () {
        this.multiple = 4;
        this.width = 200;
      });
      (0, _qunit.test)('Default randomize is false', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var item;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @width={{this.width}}/>
                  */
                  {
                    "id": "isCzhG2g",
                    "block": "[[[8,[39,0],null,[[\"@width\"],[[30,0,[\"width\"]]]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  item = (0, _testHelpers.find)('.upf-skeleton-effect');
                  assert.ok(this.width == (item === null || item === void 0 ? void 0 : item.offsetWidth));

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Randomize width is within a 15% range', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          var item;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @multiple={{this.multiple}} @width={{this.width}} @randomize={{true}}/>
                  */
                  {
                    "id": "vqxoUfFV",
                    "block": "[[[8,[39,0],null,[[\"@multiple\",\"@width\",\"@randomize\"],[[30,0,[\"multiple\"]],[30,0,[\"width\"]],true]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  item = (0, _testHelpers.find)('.upf-skeleton-effect');
                  assert.ok(item.offsetWidth <= 230 && item.offsetWidth >= 170);

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('@direction default value is row', /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Skeleton @multiple="3" />
                */
                {
                  "id": "C8LZMYkY",
                  "block": "[[[8,[39,0],null,[[\"@multiple\"],[\"3\"]],null]],[],false,[\"o-s-s/skeleton\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.fx-1').hasClass("fx-row");

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x12) {
        return _ref13.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('@direction value is column if specified', /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Skeleton @direction="column" @multiple="2" />
                */
                {
                  "id": "aAWBTEyc",
                  "block": "[[[8,[39,0],null,[[\"@direction\",\"@multiple\"],[\"column\",\"2\"]],null]],[],false,[\"o-s-s/skeleton\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.fx-1').hasClass("fx-col");

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x13) {
        return _ref14.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Extra attributes', function () {
      (0, _qunit.test)('passing an extra class is applied to the component', /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton class="my-extra-class" />
                  */
                  {
                    "id": "ZIWseQiU",
                    "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.my-extra-class').exists();

                case 3:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        return function (_x14) {
          return _ref15.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('passing data-control-name works', /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
          var inputWrapper;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton data-control-name="layout-sidebar" />
                  */
                  {
                    "id": "ivBqECsJ",
                    "block": "[[[8,[39,0],[[24,\"data-control-name\",\"layout-sidebar\"]],null,null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  inputWrapper = (0, _testHelpers.find)('.upf-skeleton-effect');
                  assert.equal(inputWrapper === null || inputWrapper === void 0 ? void 0 : inputWrapper.getAttribute('data-control-name'), 'layout-sidebar');

                case 4:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        return function (_x15) {
          return _ref16.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if @direct is provided and does not match required values', /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::Skeleton] The @direction argument should be a value of row,column,col');
                  });
                  _context16.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Skeleton @direction="toto"/>
                  */
                  {
                    "id": "gXD+pLej",
                    "block": "[[[8,[39,0],null,[[\"@direction\"],[\"toto\"]],null]],[],false,[\"o-s-s/skeleton\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function (_x16) {
          return _ref17.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/social-post-badge-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/social-post-badge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      var _this = this;

      this.postType = 'pin';
      this.plain = false;
      this.selected = false;

      this.onToggle = function () {
        _this.plain = !_this.plain;
        _this.selected = !_this.selected;
      };
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
                */
                {
                  "id": "EkFRxsHC",
                  "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-social-post-badge').exists();

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
    (0, _qunit.module)('@plain', function () {
      (0, _qunit.test)('When @plain is not set class is not added', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SocialPostBadge @postType={{this.postType}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
                  */
                  {
                    "id": "D7rdW/qe",
                    "block": "[[[8,[39,0],null,[[\"@postType\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-social-post-badge').hasNoClass('oss-social-post-badge--plain');

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
      (0, _qunit.test)('When @plain is true class is added', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.plain = true;
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
                  */
                  {
                    "id": "EkFRxsHC",
                    "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.oss-social-post-badge').hasClass('oss-social-post-badge--plain');

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
    });
    (0, _qunit.module)('@selected', function () {
      (0, _qunit.test)('When @selected is not set class is not added', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @onToggle={{this.onToggle}}/>
                  */
                  {
                    "id": "wCVxwflw",
                    "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-social-post-badge').hasNoClass('oss-social-post-badge--selected');

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
      (0, _qunit.test)('When @selected is true class is added', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.selected = true;
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
                  */
                  {
                    "id": "EkFRxsHC",
                    "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.oss-social-post-badge').hasClass('oss-social-post-badge--selected');

                case 4:
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
    (0, _qunit.module)('When clicking on an item', function () {
      (0, _qunit.test)('Then the @onToggle method is triggered', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.postType = 'facebook_status';
                  this.onToggle = _sinon.default.spy();
                  _context6.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
                  */
                  {
                    "id": "EkFRxsHC",
                    "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context6.next = 6;
                  return (0, _testHelpers.click)('.oss-social-post-badge');

                case 6:
                  assert.ok(this.onToggle.calledWith('facebook_status'));

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('error management', function () {
      (0, _qunit.test)('it throws an error if @selectedToggle is not provided', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::SocialPostBadge] The @postType parameter of type String is mandatory');
                  });
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SocialPostBadge @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
                  */
                  {
                    "id": "i47uuiX/",
                    "block": "[[[8,[39,0],null,[[\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if @postType is not a value of SocialPostType', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  this.postType = 'toto';
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::SocialPostBadge] The @postType parameter should be a value of SocialPostType');
                  });
                  _context8.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SocialPostBadge @postType={{this.postType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>
                  */
                  {
                    "id": "EkFRxsHC",
                    "block": "[[[8,[39,0],null,[[\"@postType\",\"@plain\",\"@selected\",\"@onToggle\"],[[30,0,[\"postType\"]],[30,0,[\"plain\"]],[30,0,[\"selected\"]],[30,0,[\"onToggle\"]]]],null]],[],false,[\"o-s-s/social-post-badge\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/split-modal-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/split-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.closeModal = _sinon.default.stub();
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('closeModal', _sinon.default.stub());
                _context.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::SplitModal @close={{this.closeModal}} />
                */
                {
                  "id": "QORyLxY+",
                  "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],null]],[],false,[\"o-s-s/split-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.split-modal').exists();

              case 4:
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
    (0, _qunit.test)('The cross button at the top right of the modal closes the modal', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::SplitModal @close={{this.closeModal}} />
                */
                {
                  "id": "QORyLxY+",
                  "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],null]],[],false,[\"o-s-s/split-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context2.next = 4;
                return (0, _testHelpers.click)('.fa-times');

              case 4:
                assert.ok(this.closeModal.calledOnce);

              case 5:
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
    (0, _qunit.test)('The content named-block is properly displayed', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::SplitModal @close={{this.closeModal}}>
                        <:content>
                          <p>This is the content</p>
                        </:content>
                      </OSS::SplitModal>
                */
                {
                  "id": "wUM8L2+8",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"content\"],[[[[1,\"\\n          \"],[10,2],[12],[1,\"This is the content\"],[13],[1,\"\\n        \"]],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-modal-dialog--content').hasText('This is the content');

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
    (0, _qunit.test)('The footer named-block is properly displayed', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::SplitModal @close={{this.closeModal}}>
                        <:footer>
                          footer content
                        </:footer>
                      </OSS::SplitModal>
                */
                {
                  "id": "4jWX0Z3N",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"footer\"],[[[[1,\"\\n          footer content\\n        \"]],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-modal-dialog footer').hasText('footer content');

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
    (0, _qunit.test)('The preview named-block is properly displayed', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  
                      <OSS::SplitModal @close={{this.closeModal}}>
                        <:preview>
                          preview content
                        </:preview>
                      </OSS::SplitModal>
                */
                {
                  "id": "RnRNgTED",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"preview\"],[[[[1,\"\\n          preview content\\n        \"]],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.split-modal__preview').hasText('preview content');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('When the escape button is triggered, the modal is closed', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::SplitModal @close={{this.closeModal}}></OSS::SplitModal>
                */
                {
                  "id": "+qEIc7sM",
                  "block": "[[[8,[39,0],null,[[\"@close\"],[[30,0,[\"closeModal\"]]]],[[\"default\"],[[[],[]]]]]],[],false,[\"o-s-s/split-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                _context6.next = 4;
                return (0, _testHelpers.triggerKeyEvent)('.oss-modal-dialog', 'keyup', 27);

              case 4:
                assert.true(this.closeModal.calledOnce);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('The component throws an error if the close parameter is not passed', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::SplitModal] The close function is mandatory');
                  });
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::SplitModal />
                  */
                  {
                    "id": "akCmDMDT",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/split-modal\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/star-rating-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/star-rating"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _starRating) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/star-rating', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::StarRating @rating={{3}} @totalStars={{5}} />
                */
                {
                  "id": "SZplqu4g",
                  "block": "[[[8,[39,0],null,[[\"@rating\",\"@totalStars\"],[3,5]],null]],[],false,[\"o-s-s/star-rating\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.star-rating').exists();

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

    var _loop = function _loop(starColor) {
      (0, _qunit.test)('Passing @activeColor and @passiveColor applies the correct classes to the component', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.activeColor = starColor;
                  this.passiveColor = starColor;
                  _context4.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::StarRating @rating={{5}} @totalStars={{8}}
                                                          @activeColor={{this.activeColor}}
                                                          @passiveColor={{this.passiveColor}} />
                  */
                  {
                    "id": "MDSTYj6y",
                    "block": "[[[8,[39,0],null,[[\"@rating\",\"@totalStars\",\"@activeColor\",\"@passiveColor\"],[5,8,[30,0,[\"activeColor\"]],[30,0,[\"passiveColor\"]]]],null]],[],false,[\"o-s-s/star-rating\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  assert.dom('.fas').hasClass("color-".concat(starColor));

                case 5:
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
    };

    for (var starColor in _starRating.StarColor) {
      _loop(starColor);
    }

    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('failing to pass @rating throws an error', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::StarRating] @rating argument is mandatory and must be a number');
                  });
                  _context2.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::StarRating @totalStars={{5}} />
                  */
                  {
                    "id": "fCY6vEEq",
                    "block": "[[[8,[39,0],null,[[\"@totalStars\"],[5]],null]],[],false,[\"o-s-s/star-rating\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

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
      (0, _qunit.test)('failing to pass @totalStart throws an error', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::StarRating] @totalStars argument is mandatory and must be a number');
                  });
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::StarRating @rating={{5}} />
                  */
                  {
                    "id": "Qss8skQP",
                    "block": "[[[8,[39,0],null,[[\"@rating\"],[5]],null]],[],false,[\"o-s-s/star-rating\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

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
  });
});
define("dummy/tests/integration/components/o-s-s/tag-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@upfluence/oss-components/components/o-s-s/tag"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _tag) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Tag @label='test' />
                */
                {
                  "id": "+K2Nk0WX",
                  "block": "[[[8,[39,0],null,[[\"@label\"],[\"test\"]],null]],[],false,[\"o-s-s/tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-tag').exists();

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
    (0, _qunit.test)('it renders the proper label when @label is passed', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Tag @label="Test" />
                */
                {
                  "id": "yHQY3svg",
                  "block": "[[[8,[39,0],null,[[\"@label\"],[\"Test\"]],null]],[],false,[\"o-s-s/tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-tag').exists({
                  count: 1
                });
                assert.dom('.upf-tag').hasText('Test');

              case 4:
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
    (0, _qunit.test)('it renders the proper icon when @icon is passed', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Tag @icon="far fa-thumbs-up" />
                */
                {
                  "id": "SpebM3SX",
                  "block": "[[[8,[39,0],null,[[\"@icon\"],[\"far fa-thumbs-up\"]],null]],[],false,[\"o-s-s/tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.upf-tag').exists({
                  count: 1
                });
                assert.dom('.upf-tag i').hasClass('fa-thumbs-up');

              case 4:
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
    (0, _qunit.module)('@plain', function () {
      (0, _qunit.test)('the right class is applied on the tag', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Tag @icon="far fa-thumbs-up" @plain={{true}} />
                  */
                  {
                    "id": "yswZTBvu",
                    "block": "[[[8,[39,0],null,[[\"@icon\",\"@plain\"],[\"far fa-thumbs-up\",true]],null]],[],false,[\"o-s-s/tag\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-tag').hasClass('upf-tag--plain');

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
    (0, _qunit.module)('@hasEllipsis', function () {
      (0, _qunit.test)('When the param is true then the ellipsis is shown', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Tag @label='Test with a huge label sentence' @hasEllipsis='true' />
                  */
                  {
                    "id": "L8GLgoc6",
                    "block": "[[[8,[39,0],null,[[\"@label\",\"@hasEllipsis\"],[\"Test with a huge label sentence\",\"true\"]],null]],[],false,[\"o-s-s/tag\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-tag').exists({
                    count: 1
                  });
                  assert.dom('.upf-tag span').hasStyle({
                    maxWidth: '80px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  });

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When the param is false then the ellipsis is shown', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Tag @label='Test with a huge label sentence' />
                  */
                  {
                    "id": "Xl8+1nvW",
                    "block": "[[[8,[39,0],null,[[\"@label\"],[\"Test with a huge label sentence\"]],null]],[],false,[\"o-s-s/tag\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.upf-tag').exists({
                    count: 1
                  });
                  assert.dom('.upf-tag span').doesNotExist();
                  assert.dom('.upf-tag').hasText('Test with a huge label sentence');

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    Object.keys(_tag.SkinDefinition).forEach(function (skin) {
      (0, _qunit.test)("it sets the right class when using a supported skin: ".concat(skin), /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  this.skin = skin;
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::Tag @skin={{this.skin}} @label="Test Skin" />
                  */
                  {
                    "id": "fO1kC47O",
                    "block": "[[[8,[39,0],null,[[\"@skin\",\"@label\"],[[30,0,[\"skin\"]],\"Test Skin\"]],null]],[],false,[\"o-s-s/tag\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.upf-tag').exists();
                  assert.dom('.upf-tag').hasClass("upf-tag--".concat(_tag.SkinDefinition[this.skin]));

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('it fails if @label and @icon are missing', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [component][OSS::Tag] You must pass either a @label or an @icon argument.');
                });
                _context8.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::Tag />
                */
                {
                  "id": "l3a1E+mG",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/o-s-s/text-area-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/text-area', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.value = 'Data';
      this.textareaSelector = '.oss-textarea-container  .oss-textarea';
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TextArea @label='test' />
                */
                {
                  "id": "euACnvZD",
                  "block": "[[[8,[39,0],null,[[\"@label\"],[\"test\"]],null]],[],false,[\"o-s-s/text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-textarea-container').exists();

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
    (0, _qunit.module)('@resize', function () {
      (0, _qunit.test)('Default has no class resize', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea />
                  */
                  {
                    "id": "VlrozZ3x",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');

                case 5:
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
      (0, _qunit.test)('When resize is vertical should have class resize-v', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.resize = 'vertical';
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea @resize={{this.resize}}/>
                  */
                  {
                    "id": "/yZUZjEp",
                    "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-v');
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');

                case 6:
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
      (0, _qunit.test)('When resize is horizontal should have class resize-h', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.resize = 'horizontal';
                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea @resize={{this.resize}}/>
                  */
                  {
                    "id": "/yZUZjEp",
                    "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
                  assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-h');
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-none');

                case 6:
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
      (0, _qunit.test)('When resize is none should have class resize-none', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.resize = 'none';
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea @resize={{this.resize}}/>
                  */
                  {
                    "id": "/yZUZjEp",
                    "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-v');
                  assert.dom(this.textareaSelector).hasNoClass('oss-textarea--resize-h');
                  assert.dom(this.textareaSelector).hasClass('oss-textarea--resize-none');

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
    (0, _qunit.module)('@rows', function () {
      (0, _qunit.test)('Default height', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea />
                  */
                  {
                    "id": "VlrozZ3x",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.equal(document.querySelector(this.textareaSelector).offsetHeight, 52);

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('Row change height', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          var twoRowHeight, heightRowHeight;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  this.rows = 2;
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea @rows={{this.rows}}/>
                  */
                  {
                    "id": "BL2XAOpH",
                    "block": "[[[8,[39,0],null,[[\"@rows\"],[[30,0,[\"rows\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  twoRowHeight = document.querySelector(this.textareaSelector).offsetHeight;
                  assert.ok(twoRowHeight > 36);
                  _context7.next = 7;
                  return this.set('rows', 8);

                case 7:
                  heightRowHeight = document.querySelector(this.textareaSelector).offsetHeight;
                  assert.ok(heightRowHeight > twoRowHeight);

                case 9:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.test)('When the field is updated, the @onChange method is called', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.onChange = _sinon.default.spy();
                _context8.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TextArea @value={{this.value}} @onChange={{this.onChange}}/>
                */
                {
                  "id": "wkdSNoIG",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context8.next = 5;
                return (0, _testHelpers.typeIn)(this.textareaSelector, 'b');

              case 5:
                assert.ok(this.onChange.calledOnceWithExactly('Datab'));

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Extra attributes', function () {
      (0, _qunit.test)('passing an extra class is applied to the component', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea class="my-extra-class" />
                  */
                  {
                    "id": "K0ip07Ao",
                    "block": "[[[8,[39,0],[[24,0,\"my-extra-class\"]],null,null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.my-extra-class').exists();

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('passing data-control-name works', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          var inputWrapper;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea data-control-name="description-input" />
                  */
                  {
                    "id": "JN91p5V5",
                    "block": "[[[8,[39,0],[[24,\"data-control-name\",\"description-input\"]],null,null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  inputWrapper = document.querySelector('.fx-1');
                  assert.equal(inputWrapper === null || inputWrapper === void 0 ? void 0 : inputWrapper.getAttribute('data-control-name'), 'description-input');

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('error management', function () {
      (0, _qunit.test)('it throws an error if @resize is not a correct value', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::TextArea] The @resize parameter should be a value of resize');
                  });
                  this.resize = 'NotACorrectValue';
                  _context11.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::TextArea @resize={{this.resize}} />
                  */
                  {
                    "id": "/yZUZjEp",
                    "block": "[[[8,[39,0],null,[[\"@resize\"],[[30,0,[\"resize\"]]]],null]],[],false,[\"o-s-s/text-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/togglable-section-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@ember/object", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _object, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/togglable-section', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      var _this = this;

      this.iconUrl = 'https://fr.wikipedia.org/wiki/Fichier:How_to_use_icon.svg';
      this.title = 'Fake title';
      this.subtitle = 'Some subtitle contents. Some subtitle contents. Some subtitle contents.';
      this.toggled = false;

      this.onChange = function (value) {
        (0, _object.set)(_this, 'toggled', value);
      };
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                                 @onChange={{this.onChange}} />
                */
                {
                  "id": "pvGVwji5",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@toggled\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.togglable-section').exists();

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
    (0, _qunit.test)('It throws an error if the @title param is not passed', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @title parameter is mandatory');
                });
                _context2.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TogglableSection @subtitle={{this.subtitle}}
                                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}}
                                                                 @onChange={{this.onChange}} />
                */
                {
                  "id": "nQUZaoaF",
                  "block": "[[[8,[39,0],null,[[\"@subtitle\",\"@iconUrl\",\"@toggled\",\"@onChange\"],[[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

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
    (0, _qunit.test)('It throws an error if the @toggled param is not passed', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @toggled parameter is mandatory');
                });
                _context3.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                                 @iconUrl={{this.iconUrl}}
                                                                 @onChange={{this.onChange}} />
                */
                {
                  "id": "gmekAMFk",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

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
    (0, _qunit.test)('It throws an error if the @onChange function is not passed', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0, _testHelpers.setupOnerror)(function (err) {
                  assert.equal(err.message, 'Assertion Failed: [OSS::TogglableSection] The @onChange function is mandatory');
                });
                _context4.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                                 @iconUrl={{this.iconUrl}} @toggled={{this.toggled}} />
                */
                {
                  "id": "0VvL9/KA",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@toggled\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

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
    (0, _qunit.test)('It displays no image if @iconUrl param is not passed', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TogglableSection @title={{this.title}} @subtitle={{this.subtitle}}
                                                                 @toggled={{this.toggled}}
                                                                 @onChange={{this.onChange}} />
                */
                {
                  "id": "eGtZdgQk",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@toggled\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/togglable-section\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('img').doesNotExist();

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('It displays a font-awesome icon if the @icon parameter is filled in', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::TogglableSection @title="title" @icon="far fa-hourglass" @onChange={{this.onChange}} @toggled={{false}} />
                */
                {
                  "id": "nyQwGI98",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@icon\",\"@onChange\",\"@toggled\"],[\"title\",\"far fa-hourglass\",[30,0,[\"onChange\"]],false]],null]],[],false,[\"o-s-s/togglable-section\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.far.fa-hourglass').exists();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('Toggle behavior', function () {
      function renderComponent() {
        return _renderComponent.apply(this, arguments);
      }

      function _renderComponent() {
        _renderComponent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
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
                    "id": "6ZBVR1Vb",
                    "block": "[[[8,[39,0],null,[[\"@title\",\"@subtitle\",\"@iconUrl\",\"@toggled\",\"@onChange\"],[[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"iconUrl\"]],[30,0,[\"toggled\"]],[30,0,[\"onChange\"]]]],[[\"contents\"],[[[[1,\"\\n                          \"],[10,0],[12],[1,\"contents named block\"],[13],[1,\"\\n                        \"]],[]]]]]],[],false,[\"o-s-s/togglable-section\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));
        return _renderComponent.apply(this, arguments);
      }

      (0, _qunit.test)('When the toggle is enabled, the named-block contents are displayed', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return renderComponent();

                case 2:
                  assert.dom('.togglable-section').doesNotContainText('contents named block');
                  _context7.next = 5;
                  return (0, _testHelpers.click)('.upf-toggle');

                case 5:
                  assert.dom('.togglable-section').hasTextContaining('contents named block');

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When the toggle is enabled, the header part turns grey', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return renderComponent();

                case 2:
                  assert.dom('.inner-header').doesNotHaveClass('background-color-gray-50');
                  _context8.next = 5;
                  return (0, _testHelpers.click)('.upf-toggle');

                case 5:
                  assert.dom('.inner-header').hasClass('background-color-gray-50');

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When the toggle is disabled, the named-block contents are displayed', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  this.toggled = true;
                  _context9.next = 3;
                  return renderComponent();

                case 3:
                  assert.dom('.togglable-section').hasTextContaining('contents named block');
                  _context9.next = 6;
                  return (0, _testHelpers.click)('.upf-toggle');

                case 6:
                  assert.dom('.togglable-section').doesNotContainText('contents named block');

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('When the toggle is clicked, the @onChange method is called', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  this.onChange = _sinon.default.stub();
                  _context10.next = 3;
                  return renderComponent();

                case 3:
                  _context10.next = 5;
                  return (0, _testHelpers.click)('.upf-toggle');

                case 5:
                  assert.true(this.onChange.calledOnceWithExactly(true, _sinon.default.match(function (propablyEvent) {
                    return propablyEvent instanceof Event;
                  })));

                case 6:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/toggle-buttons-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/object", "@ember/test-helpers", "@ember/test-helpers/settled", "@ember/test-helpers/setup-onerror", "sinon"], function (_templateFactory, _qunit, _emberQunit, _object, _testHelpers, _settled, _setupOnerror, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/toggle-buttons', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      var _this = this;

      this.selectedToggle = 'first';

      this.onSelection = function (value) {
        (0, _object.set)(_this, 'selectedToggle', value);
      };

      this.toggles = [{
        value: 'first',
        label: 'First'
      }, {
        value: 'second',
        label: 'Second'
      }];
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
                */
                {
                  "id": "cTDXfO0q",
                  "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-toggle-buttons-container').exists();

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
    (0, _qunit.module)('If @selectedToggle is passed', function () {
      (0, _qunit.test)('If the selectedToggle matches an entry from the toggles, then the toggle is set to selected', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.selectedToggle = 'second';
                  _context2.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
                  */
                  {
                    "id": "cTDXfO0q",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('.oss-toggle-buttons-btn--selected').hasText('Second');

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
    });
    (0, _qunit.module)('When clicking on an item', function () {
      (0, _qunit.test)('the toggle is selected', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
                  */
                  {
                    "id": "cTDXfO0q",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context3.next = 4;
                  return (0, _testHelpers.click)('.oss-toggle-buttons-btn:first-child');

                case 4:
                  assert.dom('.oss-toggle-buttons-btn--selected').hasText('First');
                  _context3.next = 7;
                  return (0, _testHelpers.click)('.oss-toggle-buttons-btn:last-child');

                case 7:
                  assert.dom('.oss-toggle-buttons-btn--selected').hasText('Second');

                case 8:
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
      (0, _qunit.test)('the @onSelection method is not triggered if the item is already selected', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.onSelectionStub = _sinon.default.stub();
                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @onSelection={{this.onSelectionStub}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
                  */
                  {
                    "id": "H6X9MwrU",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelectionStub\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context4.next = 5;
                  return (0, _testHelpers.click)('.oss-toggle-buttons-btn:first-child');

                case 5:
                  assert.ok(this.onSelectionStub.notCalled);

                case 6:
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
      (0, _qunit.test)('the @onSelection method is triggered with the selected value', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.onSelection = _sinon.default.spy();
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @onSelection={{this.onSelection}} @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
                  */
                  {
                    "id": "cTDXfO0q",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@toggles\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context5.next = 5;
                  return (0, _testHelpers.click)('.oss-toggle-buttons-btn:last-child');

                case 5:
                  assert.ok(this.onSelection.calledWith('second'));

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
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if @toggles is not provided', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  (0, _setupOnerror.default)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @toggles parameter of type Toggle[] is mandatory');
                  });
                  _context6.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @onSelection={{this.onSelection}} @selectedToggle={{this.selectedToggle}}/>
                  */
                  {
                    "id": "iyzJoBMH",
                    "block": "[[[8,[39,0],null,[[\"@onSelection\",\"@selectedToggle\"],[[30,0,[\"onSelection\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context6.next = 5;
                  return (0, _settled.default)();

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if @onSelection is not provided', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  (0, _setupOnerror.default)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @onSelection parameter of type function is mandatory');
                  });
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @toggles={{this.toggles}} @selectedToggle={{this.selectedToggle}}/>
                  */
                  {
                    "id": "k6kIwNT0",
                    "block": "[[[8,[39,0],null,[[\"@toggles\",\"@selectedToggle\"],[[30,0,[\"toggles\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context7.next = 5;
                  return (0, _settled.default)();

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if @selectedToggle is not provided', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  (0, _setupOnerror.default)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @selectedToggle parameter of type string is mandatory');
                  });
                  _context8.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @toggles={{this.toggles}} @onSelection={{this.onSelection}}  />
                  */
                  {
                    "id": "9F606NOt",
                    "block": "[[[8,[39,0],null,[[\"@toggles\",\"@onSelection\"],[[30,0,[\"toggles\"]],[30,0,[\"onSelection\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context8.next = 5;
                  return (0, _settled.default)();

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if @selectedToggle is not a value of toggles', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  this.selectedToggle = 'toto';
                  (0, _setupOnerror.default)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleButtons] The @selectedToggle parameter should be a value of toggles');
                  });
                  _context9.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleButtons @toggles={{this.toggles}} @onSelection={{this.onSelection}} @selectedToggle={{this.selectedToggle}}/>
                  */
                  {
                    "id": "DPgceCAL",
                    "block": "[[[8,[39,0],null,[[\"@toggles\",\"@onSelection\",\"@selectedToggle\"],[[30,0,[\"toggles\"]],[30,0,[\"onSelection\"]],[30,0,[\"selectedToggle\"]]]],null]],[],false,[\"o-s-s/toggle-buttons\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
                  _context9.next = 6;
                  return (0, _settled.default)();

                case 6:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/toggle-switch-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/toggle-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it applies the right class on the toggle switch depending on the value', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.value = false;

                this.onChange = function (v) {
                  _this.set('value', v);
                };

                _context.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ToggleSwitch @value={{this.value}} @onChange={{this.onChange}} />
                */
                {
                  "id": "5mmRnCQb",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[[30,0,[\"value\"]],[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                assert.dom('.upf-toggle').hasNoClass('upf-toggle--toggled');
                _context.next = 7;
                return (0, _testHelpers.click)('.upf-toggle');

              case 7:
                assert.dom('.upf-toggle').hasClass('upf-toggle--toggled');

              case 8:
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
    (0, _qunit.test)('it triggers the onChange action when clicking the button', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.onChange = function (v) {
                  assert.equal(v, false);
                };

                _context2.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::ToggleSwitch @value={{true}} @onChange={{this.onChange}} />
                */
                {
                  "id": "LXGDbs+l",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[true,[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context2.next = 5;
                return (0, _testHelpers.click)('.upf-toggle');

              case 5:
                assert.expect(1);

              case 6:
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
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if no onChange action is passed', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleSwitch] Please provide an onChange action');
                  });
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleSwitch />
                  */
                  {
                    "id": "bET+DZSD",
                    "block": "[[[8,[39,0],null,null,null]],[],false,[\"o-s-s/toggle-switch\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

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
      (0, _qunit.test)('it throws an error if no value is passed', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.onChange = function () {};

                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleSwitch] Please provide a boolean @value. @value is undefined');
                  });
                  _context4.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleSwitch @onChange={{this.onChange}} />
                  */
                  {
                    "id": "LuvymKvy",
                    "block": "[[[8,[39,0],null,[[\"@onChange\"],[[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
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
      (0, _qunit.test)('it throws an error if passed value is not a boolean', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.onChange = function () {};

                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [component][OSS::ToggleSwitch] Please provide a boolean @value. @value is string');
                  });
                  _context5.next = 4;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::ToggleSwitch @value="true" @onChange={{this.onChange}} />
                  */
                  {
                    "id": "XMJWs0uj",
                    "block": "[[[8,[39,0],null,[[\"@value\",\"@onChange\"],[\"true\",[30,0,[\"onChange\"]]]],null]],[],false,[\"o-s-s/toggle-switch\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 4:
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
});
define("dummy/tests/integration/components/o-s-s/upload-area-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@upfluence/oss-components/test-support/services/uploader"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon, _uploader) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var file = new File([new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])], '1px.png', {
    type: 'image/png'
  });
  (0, _qunit.module)('Integration | Component | o-s-s/upload-area', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
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
        (0, _qunit.test)('the browse text is contained in a link', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link').exists();
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link').hasText('browse');

                  case 4:
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
        (0, _qunit.test)('clicking on browse text opens the hidden file input', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
            var fileInput, fileInputClickStub;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-upload-area-container input[type="file"]').exists();
                    fileInput = document.querySelector('.oss-upload-area-container input[type="file"]');
                    fileInputClickStub = _sinon.default.stub(fileInput, 'click');
                    _context2.next = 7;
                    return (0, _testHelpers.click)('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link');

                  case 7:
                    assert.ok(fileInputClickStub.calledOnce);

                  case 8:
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
      (0, _qunit.module)('size', function () {
        (0, _qunit.test)('it renders in the default size when no size arg is provided', /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');

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
        (0, _qunit.test)('it renders in the default size when no valid size is provided', /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.size = 'foo';
                    _context4.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');

                  case 4:
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
        (0, _qunit.test)('it renders in the provided size when it is a valid one', /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.size = 'lg';
                    _context5.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.dom('.oss-upload-area').hasClass('oss-upload-area--lg');

                  case 4:
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
      (0, _qunit.module)('subtitle', function () {
        (0, _qunit.test)('it renders only the title when no subtitle is provided', /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.subtitle = null;
                    _context6.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3').hasText('Drop your file here, or browse');
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').doesNotExist();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          return function (_x6) {
            return _ref7.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('it renders the subtitle when provided', /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3').hasText('Drop your file here, or browse');
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').exists();
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').hasText(this.subtitle);

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          return function (_x7) {
            return _ref8.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('disabled mode', function () {
        (0, _qunit.test)('the right class is applied on the component', /*#__PURE__*/function () {
          var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "jECprN7o",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@disabled\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],true,[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-upload-area').hasClass('oss-upload-area--disabled');

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          return function (_x8) {
            return _ref9.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('the browse word is not actionable', /*#__PURE__*/function () {
          var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "jECprN7o",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@disabled\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],true,[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link').doesNotExist();

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));

          return function (_x9) {
            return _ref10.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.module)('drag and drop support', function () {
      (0, _qunit.module)('disabled mode', function () {
        (0, _qunit.test)('dragging a file over the component does not do nothing', /*#__PURE__*/function () {
          var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "jECprN7o",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@disabled\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],true,[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    _context10.next = 4;
                    return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'dragenter');

                  case 4:
                    assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--dragging');

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          return function (_x10) {
            return _ref11.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.module)('active mode', function (hooks) {
        hooks.beforeEach(function () {
          this.file = file;
        });
        (0, _qunit.test)('dragging a file over the component applies the right class', /*#__PURE__*/function () {
          var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    _context11.next = 4;
                    return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'dragenter');

                  case 4:
                    assert.dom('.oss-upload-area').hasClass('oss-upload-area--dragging');

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          return function (_x11) {
            return _ref12.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('dropped file is validated', /*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _sinon.default.spy(this.mockUploader, 'validate');

                    _context12.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    _context12.next = 5;
                    return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                      dataTransfer: {
                        files: [this.file]
                      }
                    });

                  case 5:
                    assert.ok(this.mockUploader.validate.calledWithExactly({
                      file: this.file,
                      privacy: 'private',
                      scope: 'anonymous'
                    }, this.validationRules));

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));

          return function (_x12) {
            return _ref13.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('error toasts are displayed if the dropped file does not pass the validation rules', /*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
            var toastStub, intlService;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.validationRules = [{
                      type: 'filesize',
                      value: '1B'
                    }, {
                      type: 'filetype',
                      value: ['pdf']
                    }];
                    toastStub = _sinon.default.stub(this.owner.lookup('service:toast'), 'error');
                    intlService = this.owner.lookup('service:intl');
                    _context13.next = 5;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 5:
                    _context13.next = 7;
                    return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                      dataTransfer: {
                        files: [this.file]
                      }
                    });

                  case 7:
                    assert.ok(toastStub.calledWith(intlService.t("oss-components.upload-area.errors.filetype.description"), intlService.t("oss-components.upload-area.errors.filetype.title")));
                    assert.ok(toastStub.calledWith(intlService.t("oss-components.upload-area.errors.filesize.description", {
                      max_filesize: '1B'
                    }), intlService.t("oss-components.upload-area.errors.filesize.title")));

                  case 9:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));

          return function (_x13) {
            return _ref14.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('the uploaded file is displayed if the dropped file passes the validation', /*#__PURE__*/function () {
          var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(assert) {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    _context14.next = 4;
                    return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                      dataTransfer: {
                        files: [this.file]
                      }
                    });

                  case 4:
                    assert.dom('.oss-upload-item').exists();
                    assert.dom('.oss-upload-area').doesNotExist();

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));

          return function (_x14) {
            return _ref15.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('clicking on the remove button in the upload item moves back to the upload state', /*#__PURE__*/function () {
          var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(assert) {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onFileDeletion={{this.onFileDeletion}} />
                            
                    */
                    {
                      "id": "q/wQA0K9",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\",\"@onFileDeletion\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]],[30,0,[\"onFileDeletion\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    _context15.next = 4;
                    return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                      dataTransfer: {
                        files: [this.file]
                      }
                    });

                  case 4:
                    _context15.next = 6;
                    return (0, _testHelpers.waitFor)('.oss-upload-item [data-control-name="upload-item-remove-button"]');

                  case 6:
                    _context15.next = 8;
                    return (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-remove-button"]');

                  case 8:
                    assert.dom('.oss-upload-item').doesNotExist();
                    assert.dom('.oss-upload-area').exists();
                    assert.ok(this.onFileDeletion.calledOnce);

                  case 11:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));

          return function (_x15) {
            return _ref16.apply(this, arguments);
          };
        }());
        (0, _qunit.test)('clicking on the edit button in the upload item opens the hidden file input', /*#__PURE__*/function () {
          var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(assert) {
            var fileInput, fileInputClickStub;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadArea
                                @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
                                @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "yaVOzINs",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-area\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 2:
                    _context16.next = 4;
                    return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                      dataTransfer: {
                        files: [this.file]
                      }
                    });

                  case 4:
                    fileInput = document.querySelector('.oss-upload-area-container input[type="file"]');
                    fileInputClickStub = _sinon.default.stub(fileInput, 'click');
                    _context16.next = 8;
                    return (0, _testHelpers.waitFor)('.oss-upload-item [data-control-name="upload-item-edit-button"]');

                  case 8:
                    _context16.next = 10;
                    return (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-edit-button"]');

                  case 10:
                    assert.ok(fileInputClickStub.calledOnce);

                  case 11:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));

          return function (_x16) {
            return _ref17.apply(this, arguments);
          };
        }());
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
      (0, _qunit.test)('the file is displayed using an upload-item', /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(assert) {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadArea
                            @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
                            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "hXvsDVFu",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@artifact\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"artifact\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('.oss-upload-area').doesNotExist();
                  assert.dom('.oss-upload-item').exists();
                  assert.dom('.oss-upload-item [data-control-name="upload-item-filename"]').hasText('foo.png');

                case 5:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function (_x17) {
          return _ref18.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('clicking on the remove button in the upload item moves back to the upload state', /*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(assert) {
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadArea
                            @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
                            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onFileDeletion={{this.onFileDeletion}} />
                        
                  */
                  {
                    "id": "M0zLzDPn",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@artifact\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\",\"@onFileDeletion\"],[[30,0,[\"mockUploader\"]],[30,0,[\"artifact\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]],[30,0,[\"onFileDeletion\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context18.next = 4;
                  return (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-remove-button"]');

                case 4:
                  assert.dom('.oss-upload-item').doesNotExist();
                  assert.dom('.oss-upload-area').exists();
                  assert.ok(this.onFileDeletion.calledOnce);

                case 7:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18, this);
        }));

        return function (_x18) {
          return _ref19.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('clicking on the edit button in the upload item opens the hidden file input', /*#__PURE__*/function () {
        var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(assert) {
          var fileInput, fileInputClickStub;
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadArea
                            @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
                            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "hXvsDVFu",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@artifact\",\"@rules\",\"@size\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],[30,0,[\"artifact\"]],[30,0,[\"validationRules\"]],[30,0,[\"size\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  fileInput = document.querySelector('.oss-upload-area-container input[type="file"]');
                  fileInputClickStub = _sinon.default.stub(fileInput, 'click');
                  _context19.next = 6;
                  return (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-edit-button"]');

                case 6:
                  assert.ok(fileInputClickStub.calledOnce);

                case 7:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));

        return function (_x19) {
          return _ref20.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('allow multiple files', function () {
      (0, _qunit.test)('it allows the user to upload more than one file', /*#__PURE__*/function () {
        var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(assert) {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadArea
                            @uploader={{this.mockUploader}} @multiple={{true}} @rules={{this.validationRules}}
                            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "9gxgGW1F",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@multiple\",\"@rules\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],true,[30,0,[\"validationRules\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context20.next = 4;
                  return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                    dataTransfer: {
                      files: [file]
                    }
                  });

                case 4:
                  _context20.next = 6;
                  return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                    dataTransfer: {
                      files: [file]
                    }
                  });

                case 6:
                  assert.dom('.oss-upload-area').exists();
                  assert.dom('.oss-upload-item').exists({
                    count: 2
                  });

                case 8:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20);
        }));

        return function (_x20) {
          return _ref21.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('the user can remove a specific uploaded item', /*#__PURE__*/function () {
        var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(assert) {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadArea
                            @uploader={{this.mockUploader}} @multiple={{true}} @rules={{this.validationRules}}
                            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "9gxgGW1F",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@multiple\",\"@rules\",\"@subtitle\",\"@onUploadSuccess\"],[[30,0,[\"mockUploader\"]],true,[30,0,[\"validationRules\"]],[30,0,[\"subtitle\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-area\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context21.next = 4;
                  return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                    dataTransfer: {
                      files: [file]
                    }
                  });

                case 4:
                  _context21.next = 6;
                  return (0, _testHelpers.triggerEvent)('.oss-upload-area', 'drop', {
                    dataTransfer: {
                      files: [file]
                    }
                  });

                case 6:
                  assert.dom('.oss-upload-item').exists({
                    count: 2
                  });
                  _context21.next = 9;
                  return (0, _testHelpers.waitFor)('.oss-upload-item:first-child [data-control-name="upload-item-remove-button"]');

                case 9:
                  _context21.next = 11;
                  return (0, _testHelpers.click)('.oss-upload-item:first-child [data-control-name="upload-item-remove-button"]');

                case 11:
                  assert.dom('.oss-upload-item').exists({
                    count: 1
                  });

                case 12:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));

        return function (_x21) {
          return _ref22.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/upload-item-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon", "@upfluence/oss-components/test-support/services/uploader", "@upfluence/oss-components/types/uploader"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon, _uploader, _uploader2) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var buildFile = function buildFile() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1px.png';
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';
    return new File([new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])], name, {
      type: type
    });
  };

  (0, _qunit.module)('Integration | Component | o-s-s/upload-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
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
      }].forEach(function (spec) {
        (0, _qunit.test)("a badge with a matching icon is used when the file content type is: ".concat(spec.contentType || 'empty'), /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.file.content_type = spec.contentType;
                    _context.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadItem
                                @uploader={{this.uploader}} @file={{this.file}}
                                @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                                @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                                @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "dWwx90GT",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-item\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.dom('.upf-badge i').hasClass('far');
                    assert.dom('.upf-badge i').hasClass(spec.expected);

                  case 5:
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
      });
      (0, _qunit.test)('its name is rendered properly', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('[data-control-name="upload-item-filename"]').hasText('foo.png');

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
      (0, _qunit.test)('its size is rendered properly if present', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.file.size = 100;
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.dom('[data-control-name="upload-item-filesize"]').hasText('100 B');

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
      (0, _qunit.test)('its size is not displayed if missing', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('[data-control-name="upload-item-filesize]').doesNotExist();

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
      (0, _qunit.test)('clicking the view button opens the file url', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var windowOpenStub;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  windowOpenStub = _sinon.default.stub(window, 'open');
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  _context5.next = 5;
                  return (0, _testHelpers.click)('[data-control-name="upload-item-view-button"]');

                case 5:
                  assert.ok(windowOpenStub.calledOnceWithExactly(this.file.url, '_blank'));
                  windowOpenStub.restore();

                case 7:
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
      }].forEach(function (spec) {
        (0, _qunit.test)("a badge with a matching icon is used when the file content type is: ".concat(spec.contentType || 'empty'), /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.file = buildFile('my-file', spec.contentType);
                    _context6.next = 3;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      
                              <OSS::UploadItem
                                @uploader={{this.uploader}} @file={{this.file}}
                                @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                                @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                                @onUploadSuccess={{this.onUploadSuccess}} />
                            
                    */
                    {
                      "id": "dWwx90GT",
                      "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n        \"]],[],false,[\"o-s-s/upload-item\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 3:
                    assert.dom('.upf-badge i').hasClass('far');
                    assert.dom('.upf-badge i').hasClass(spec.expected);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          return function (_x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      });
      (0, _qunit.test)('its name is rendered properly', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('[data-control-name="upload-item-filename"]').hasText('1px.png');

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('its size is rendered properly if present', /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  assert.dom('[data-control-name="upload-item-filesize"]').hasText('96 B');

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('the file is immediately uploaded', /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
          var uploadStub;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  uploadStub = _sinon.default.stub(this.uploader, 'upload');
                  _context9.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                  assert.ok(uploadStub.calledOnceWithExactly( // Partial match because the onSuccess, onFailure, and onProgress are component methods, hence not being
                  // accessible from the tests.
                  _sinon.default.match({
                    file: this.file,
                    privacy: this.privacy,
                    scope: this.scope
                  }), this.validationRules));

                case 4:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it enters error mode if the upload failed', /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  this.uploader.mode = 'failure';

                  _sinon.default.spy(this.uploader, 'upload');

                  this.onUploadFailure = _sinon.default.stub();
                  _context10.next = 5;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} @onUploadFailure={{this.onUploadFailure}} />
                        
                  */
                  {
                    "id": "kUEY7IB0",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\",\"@onUploadFailure\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]],[30,0,[\"onUploadFailure\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 5:
                  _context10.next = 7;
                  return (0, _testHelpers.waitFor)('.oss-upload-item.oss-upload-item--errored');

                case 7:
                  assert.dom('.oss-upload-item').hasClass('oss-upload-item--errored');
                  assert.dom('.oss-upload-item [data-control-name="upload-item-try-again-button"]').exists();
                  assert.dom('.oss-upload-item [data-control-name="upload-item-try-again-button"]').hasText('Try again');
                  _context10.next = 12;
                  return (0, _testHelpers.click)('.oss-upload-item [data-control-name="upload-item-try-again-button"]');

                case 12:
                  assert.ok(this.uploader.upload.calledWithExactly( // Partial match because the onSuccess, onFailure, and onProgress are component methods, hence not being
                  // accessible from the tests.
                  _sinon.default.match({
                    file: this.file,
                    privacy: this.privacy,
                    scope: this.scope
                  }), this.validationRules));
                  assert.true(this.onUploadFailure.calledOnceWithExactly({
                    payload: {}
                  }));

                case 14:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    (0, _qunit.module)('common actions', function () {
      (0, _qunit.test)('clicking the edit button triggers the onEdition action', /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context11.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="upload-item-edit-button"]');

                case 4:
                  assert.ok(this.onEdition.calledOnce);

                case 5:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('clicking the remove button triggers the onDeletion action', /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    
                          <OSS::UploadItem
                            @uploader={{this.uploader}} @file={{this.file}}
                            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
                            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
                            @onUploadSuccess={{this.onUploadSuccess}} />
                        
                  */
                  {
                    "id": "rajQ8uBK",
                    "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@uploader\",\"@file\",\"@rules\",\"@scope\",\"@privacy\",\"@onEdition\",\"@onDeletion\",\"@onUploadSuccess\"],[[30,0,[\"uploader\"]],[30,0,[\"file\"]],[30,0,[\"validationRules\"]],[30,0,[\"scope\"]],[30,0,[\"privacy\"]],[30,0,[\"onEdition\"]],[30,0,[\"onFileDeletion\"]],[30,0,[\"onUploadSuccess\"]]]],null],[1,\"\\n      \"]],[],false,[\"o-s-s/upload-item\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context12.next = 4;
                  return (0, _testHelpers.click)('[data-control-name="upload-item-remove-button"]');

                case 4:
                  assert.ok(this.onFileDeletion.calledOnce);

                case 5:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/integration/components/o-s-s/url-input-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "@ember/test-helpers/dom/fill-in", "@ember/test-helpers/dom/type-in", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _fillIn, _typeIn, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | o-s-s/url-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <OSS::UrlInput @prefix="https://" />
                */
                {
                  "id": "/SUAPxET",
                  "block": "[[[8,[39,0],null,[[\"@prefix\"],[\"https://\"]],null]],[],false,[\"o-s-s/url-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.oss-input-group').exists();

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
    (0, _qunit.module)('With @validationRegex parameter', function () {
      (0, _qunit.test)('When the text matches the Regex, the onChange function has the newValue and the isValid parameter is set to true', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
                  this.value = '';
                  this.onChange = _sinon.default.stub();
                  _context2.next = 5;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                                        @onChange={{this.onChange}} @value={{this.value}}
                                                        @validationRegex={{this.subdomainRegex}} />
                  */
                  {
                    "id": "iMomYBSo",
                    "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 5:
                  _context2.next = 7;
                  return (0, _fillIn.default)('input', 'fakedomai');

                case 7:
                  _context2.next = 9;
                  return (0, _typeIn.default)('input', 'n');

                case 9:
                  assert.true(this.onChange.calledOnceWithExactly('fakedomain', true));

                case 10:
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
      (0, _qunit.module)("When the text doesn't match the Regex", function () {
        (0, _qunit.test)('The onChange function has the newValue and the isValid parameter is set to false', /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
                    this.value = '';
                    this.onChange = _sinon.default.stub();
                    _context3.next = 5;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                                          @onChange={{this.onChange}} @value={{this.value}}
                                                          @validationRegex={{this.subdomainRegex}} />
                    */
                    {
                      "id": "iMomYBSo",
                      "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 5:
                    _context3.next = 7;
                    return (0, _typeIn.default)('input', 'a');

                  case 7:
                    assert.true(this.onChange.calledOnceWithExactly('a', false));

                  case 8:
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
        (0, _qunit.test)('If no error message has been specified by the parent, a default one is displayed', /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
                    this.value = '';
                    _context4.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                                          @onChange={{this.onChange}} @value={{this.value}}
                                                          @validationRegex={{this.subdomainRegex}} />
                    */
                    {
                      "id": "iMomYBSo",
                      "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    _context4.next = 6;
                    return (0, _typeIn.default)('input', 'a');

                  case 6:
                    assert.dom('.text-color-error').hasText('This is not a valid URL.');

                  case 7:
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
        (0, _qunit.test)('If an error message has been specified by the parent, it is displayed', /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
                    this.value = '';
                    _context5.next = 4;
                    return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                    /*
                      <OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                                          @onChange={{this.onChange}} @value={{this.value}}
                                                          @errorMessage="This is a custom error message."
                                                          @validationRegex={{this.subdomainRegex}} />
                    */
                    {
                      "id": "10/j65Se",
                      "block": "[[[8,[39,0],null,[[\"@prefix\",\"@suffix\",\"@onChange\",\"@value\",\"@errorMessage\",\"@validationRegex\"],[\"https://\",\".myshopify.com\",[30,0,[\"onChange\"]],[30,0,[\"value\"]],\"This is a custom error message.\",[30,0,[\"subdomainRegex\"]]]],null]],[],false,[\"o-s-s/url-input\"]]",
                      "moduleName": "(unknown template module)",
                      "isStrictMode": false
                    }));

                  case 4:
                    _context5.next = 6;
                    return (0, _typeIn.default)('input', 'a');

                  case 6:
                    assert.dom('.text-color-error').hasText('This is a custom error message.');

                  case 7:
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
  });
});
define("dummy/tests/integration/helpers/redirect-to-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | redirect-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.url = 'https://github.com/upfluence/oss-components';
    });
    (0, _qunit.test)('it redirects to the url on the current tab if not target is passed', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.redirectStub = _sinon.default.stub(window, 'open');
                _context.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <div {{on "click" (redirect-to url=this.url)}}>link</div>
                */
                {
                  "id": "zt+hm0jz",
                  "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,[[\"url\"],[[30,0,[\"url\"]]]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context.next = 5;
                return (0, _testHelpers.click)('div');

              case 5:
                assert.ok(this.redirectStub.calledOnceWithExactly(this.url, '_self'));

                _sinon.default.restore();

              case 7:
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
    (0, _qunit.test)('it redirects to the url on the provided target', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.redirectStub = _sinon.default.stub(window, 'open');
                _context2.next = 3;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <div {{on "click" (redirect-to url=this.url target="_blank")}}>link</div>
                */
                {
                  "id": "PArLA07E",
                  "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,[[\"url\",\"target\"],[[30,0,[\"url\"]],\"_blank\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                _context2.next = 5;
                return (0, _testHelpers.click)('div');

              case 5:
                assert.ok(this.redirectStub.calledOnceWithExactly(this.url, '_blank'));

                _sinon.default.restore();

              case 7:
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
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if the url argument is missing', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [helper][OSS::redirect-to] url argument is mandatory.');
                  });
                  _context3.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <div {{on "click" (redirect-to)}}>link</div>
                  */
                  {
                    "id": "irZd7nQN",
                    "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,null]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

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
      (0, _qunit.test)('it throws an error if the target is not a valid one', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [helper][OSS::redirect-to] the target argument must be a valid one: https://www.w3schools.com/tags/att_a_target.asp.');
                  });
                  _context4.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <div {{on "click" (redirect-to url=this.url target="_foo")}}>link</div>
                  */
                  {
                    "id": "IaSpo7qT",
                    "block": "[[[11,0],[4,[38,0],[\"click\",[28,[37,1],null,[[\"url\",\"target\"],[[30,0,[\"url\"]],\"_foo\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"redirect-to\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

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
define("dummy/tests/integration/helpers/stop-propagation-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | stop-propagation', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.nativeStopPropagation = Event.prototype.stopPropagation;
    });
    hooks.afterEach(function () {
      Event.prototype.stopPropagation = this.nativeStopPropagation;
    });
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Event.prototype.stopPropagation = function () {
                  assert.ok(true);
                };

                this.onClick = function (arg, event) {
                  assert.equal(arg, 'foo');
                  assert.ok(event instanceof MouseEvent);
                };

                _context.next = 4;
                return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                /*
                  <button {{on "click" (stop-propagation (fn this.onClick "foo"))}}>stop propagation</button>
                */
                {
                  "id": "jhRPub3/",
                  "block": "[[[11,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[28,[37,2],[[30,0,[\"onClick\"]],\"foo\"],null]],null]],null],[12],[1,\"stop propagation\"],[13]],[],false,[\"on\",\"stop-propagation\",\"fn\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context.next = 6;
                return (0, _testHelpers.click)('button');

              case 6:
                assert.expect(3);

              case 7:
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
  });
});
define("dummy/tests/integration/helpers/transition-to-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers", "sinon"], function (_templateFactory, _qunit, _emberQunit, _testHelpers, _sinon) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | transition-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.transitionToStub = _sinon.default.stub(this.owner.lookup('service:router'), 'transitionTo');
    });
    (0, _qunit.module)('only a route has been passed', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route only', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <a {{on "click" (transition-to route="foo")}}>link</a>
                  */
                  {
                    "id": "EZeBAbs7",
                    "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\"],[\"foo\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context.next = 4;
                  return (0, _testHelpers.click)('a');

                case 4:
                  assert.ok(this.transitionToStub.calledWithExactly('foo', {
                    queryParams: {}
                  }));

                case 5:
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
    });
    (0, _qunit.module)('a model has been passed to the transition', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route only', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <a {{on "click" (transition-to route="foo" model="1")}}>link</a>
                  */
                  {
                    "id": "qYSLSbud",
                    "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"model\"],[\"foo\",\"1\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context2.next = 4;
                  return (0, _testHelpers.click)('a');

                case 4:
                  assert.ok(this.transitionToStub.calledWithExactly('foo', '1', {
                    queryParams: {}
                  }));

                case 5:
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
    });
    (0, _qunit.module)('multiple models have been passed to the transition', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route only', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <a {{on "click" (transition-to route="foo" models=(array 'fizz' 'buzz'))}}>link</a>
                  */
                  {
                    "id": "aji5x8cg",
                    "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"models\"],[\"foo\",[28,[37,2],[\"fizz\",\"buzz\"],null]]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\",\"array\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context3.next = 4;
                  return (0, _testHelpers.click)('a');

                case 4:
                  assert.ok(this.transitionToStub.calledWithExactly('foo', 'fizz', 'buzz', {
                    queryParams: {}
                  }));

                case 5:
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
    });
    (0, _qunit.module)('with queryParams', function () {
      (0, _qunit.test)('it triggers the RouterService#transitionTo method with the route and queryParams', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <a {{on "click" (transition-to route="foo" queryParams=(hash myParam="bruh"))}}>link</a>
                  */
                  {
                    "id": "VAaS03Sv",
                    "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"queryParams\"],[\"foo\",[28,[37,2],null,[[\"myParam\"],[\"bruh\"]]]]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\",\"hash\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 2:
                  _context4.next = 4;
                  return (0, _testHelpers.click)('a');

                case 4:
                  assert.ok(this.transitionToStub.calledWithExactly('foo', {
                    queryParams: {
                      myParam: 'bruh'
                    }
                  }));

                case 5:
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
    });
    (0, _qunit.module)('Error management', function () {
      (0, _qunit.test)('it throws an error if the route argument is missing', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [helper][OSS::transition-to] route argument is mandatory');
                  });
                  _context5.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <a {{on "click" (transition-to)}}>link</a>
                  */
                  {
                    "id": "Bs/hyUF1",
                    "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,null]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if both models and model arguments are passed', /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [helper][OSS::transition-to] only one of model or models argument must be provided');
                  });
                  _context6.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <a {{on "click" (transition-to route="foo" models=(array '1' '2') model='3')}}>link</a>
                  */
                  {
                    "id": "DQ/GUThh",
                    "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"models\",\"model\"],[\"foo\",[28,[37,2],[\"1\",\"2\"],null],\"3\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\",\"array\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it throws an error if queryParams argument is passed but is not an object', /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  (0, _testHelpers.setupOnerror)(function (err) {
                    assert.equal(err.message, 'Assertion Failed: [helper][OSS::transition-to] queryParams argument must be an object');
                  });
                  _context7.next = 3;
                  return (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
                  /*
                    <a {{on "click" (transition-to route="foo" queryParams='string')}}>link</a>
                  */
                  {
                    "id": "dYWKKlDa",
                    "block": "[[[11,3],[4,[38,0],[\"click\",[28,[37,1],null,[[\"route\",\"queryParams\"],[\"foo\",\"string\"]]]],null],[12],[1,\"link\"],[13]],[],false,[\"on\",\"transition-to\"]]",
                    "moduleName": "(unknown template module)",
                    "isStrictMode": false
                  }));

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "qunit", "qunit-dom", "ember-qunit", "@upfluence/oss-components/test-support/register-assertions"], function (_app, _environment, _testHelpers, QUnit, _qunitDom, _emberQunit, _registerAssertions) {
  "use strict";

  // @ts-nocheck
  (0, _registerAssertions.default)(QUnit.assert);
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/services/base-uploader-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

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

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var TOAST_TYPES = ['info', 'success', 'warning', 'error'];
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
      TOAST_TYPES.forEach(function (type) {
        (0, _qunit.test)("".concat(type), /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    toast = this.service[type]("Message of ".concat(type), "Title ".concat(type), {
                      timeout: 100
                    });
                    assert.dom(toast).exists();
                    assert.dom(toast).hasClass("toast--".concat(type));
                    assert.dom(toast).hasClass("toast--visible");
                    assert.dom(toast.querySelector('.subtitle')).hasText("Message of ".concat(type));
                    assert.dom(toast.querySelector('.title')).hasText("Title ".concat(type));

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    });
    (0, _qunit.test)('it should close the toast when clicking on the button', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var toast, buttonElement, animation;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                toast = this.service.error('Message', 'Title', {
                  timeout: 100
                });
                buttonElement = toast.querySelector('button');
                assert.dom(buttonElement).exists({
                  count: 1
                });
                _context2.next = 5;
                return (0, _testHelpers.click)(buttonElement);

              case 5:
                animation = toast.getAnimations().filter(function (animation) {
                  return animation.id === 'destroy';
                })[0];
                _context2.next = 8;
                return animation.finished;

              case 8:
                assert.true(toast.parentElement === null);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('the onclick function is called when the toast is clicked', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var toast;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                toast = this.service.error('Message', 'Title', {
                  timeout: 100,
                  onclick: function onclick(event) {
                    assert.equal(event.type, 'click');
                  }
                });
                _context3.next = 3;
                return (0, _testHelpers.click)(toast);

              case 3:
                assert.expect(1);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.module)('badge options', function () {
      (0, _qunit.test)('it should display icon', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
          var toast, badge;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  toast = this.service.error('Message', 'Title', {
                    timeout: 100,
                    badge: {
                      icon: 'fab fa-jedi-order'
                    }
                  });
                  badge = toast.querySelector('.upf-badge i');
                  assert.dom(badge).hasClass('fab');
                  assert.dom(badge).hasClass('fa-jedi-order');

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should display img', /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
          var url, toast, badge;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  url = '/assets/images/upfluence-white-logo.svg';
                  toast = this.service.error('Message', 'Title', {
                    timeout: 100,
                    badge: {
                      image: url
                    }
                  });
                  badge = toast.querySelector('.upf-badge img');
                  assert.dom(badge).hasAttribute('src', url);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
      (0, _qunit.test)('it should display text', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
          var toast, badge;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  toast = this.service.error('Message', 'Title', {
                    timeout: 100,
                    badge: {
                      text: '1'
                    }
                  });
                  badge = toast.querySelector('.upf-badge span');
                  assert.dom(badge).hasText('1');

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x6) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
  });
});
define("dummy/tests/unit/utils/upf-local-storage-test", ["dummy/utils/upf-local-storage", "qunit"], function (_upfLocalStorage, _qunit) {
  "use strict";

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var TEST_KEY = 'testKey';
  var DEFAULT_PREFIX = '_upf.';
  var CUSTOM_PREFIX = 'workflow';
  var TEST_VALUE = 'testValue';
  var TEST_OBJECT = {
    attr: TEST_VALUE
  };
  var TEST_OBJECT_UPDATE = {
    attr2: TEST_VALUE
  };
  var ERROR_TYPE_STRING = '[value] parameter MUST be of type :string';
  var ERROR_TYPE_OBJECT = '[object] parameter MUST be of type :object';
  (0, _qunit.module)('Unit | Utility | UPFLocalStorage', function (hooks) {
    hooks.beforeEach(function () {
      localStorage.clear();
    });
    (0, _qunit.test)('it can be instanciated', function (assert) {
      var upfStorage = new _upfLocalStorage.default();
      assert.ok(upfStorage);
    });
    (0, _qunit.module)('Prefix', function () {
      (0, _qunit.test)('Saving content without specifying a prefix will use the default ".upf_" prefix', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.equal(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('Setting a custom prefix on the Ctor will save content with the set prefix', function (assert) {
        var upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.equal(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: saveObject', function () {
      (0, _qunit.test)('saveObject() sets the default prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        var localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT, localStorageParsedObject);
      });
      (0, _qunit.test)('saveObject() sets the custom prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        var localStorageParsedObject = JSON.parse(localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT, localStorageParsedObject);
      });
      (0, _qunit.test)('saveObject() throws an error if the object parameter is not an object', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        assert.throws(function () {
          upfStorage.saveObject(TEST_KEY, TEST_VALUE);
        }, ERROR_TYPE_OBJECT);
      });
      (0, _qunit.test)('saveObject() saves an object in the localStorage as a stringified JSON', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        var localStorageStringifiedObject = localStorage.getItem(DEFAULT_PREFIX + TEST_KEY);
        assert.deepEqual(JSON.stringify(TEST_OBJECT), localStorageStringifiedObject);
      });
    });
    (0, _qunit.module)('Method: updateObject', function () {
      (0, _qunit.test)('updateObject() sets the default prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        var localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
      });
      (0, _qunit.test)('updateObject() sets the custom prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        var localStorageParsedObject = JSON.parse(localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
      });
      (0, _qunit.test)('updateObject() throws an error if the object parameter is not an object', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        assert.throws(function () {
          upfStorage.updateObject(TEST_KEY, TEST_VALUE);
        }, ERROR_TYPE_OBJECT);
      });
      (0, _qunit.test)('updateObject() adds content to the existing object', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        var localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual(_objectSpread(_objectSpread({}, TEST_OBJECT), TEST_OBJECT_UPDATE), localStorageParsedObject);
      });
      (0, _qunit.test)('updateObject() creates the Object if there is no previous value', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.updateObject(TEST_KEY, TEST_OBJECT_UPDATE);
        var localStorageParsedObject = JSON.parse(localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        assert.deepEqual(TEST_OBJECT_UPDATE, localStorageParsedObject);
      });
    });
    (0, _qunit.module)('Method: getObject', function () {
      (0, _qunit.test)('getObject() returns an empty object if the key is not found', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        assert.deepEqual({}, upfStorage.getObject(TEST_KEY));
      });
      (0, _qunit.test)('getObject() returns an object with the proper contents', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveObject(TEST_KEY, TEST_OBJECT);
        assert.deepEqual(TEST_OBJECT, upfStorage.getObject(TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: saveItem', function () {
      (0, _qunit.test)('saveItem() throws an error if the object parameter is not a string', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        assert.throws(function () {
          upfStorage.saveItem(TEST_KEY, 1337);
        }, ERROR_TYPE_STRING);
      });
      (0, _qunit.test)('saveItem() sets the default prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('saveItem() sets the custom prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('saveItem() saves the proper value in the localStorage', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: updateItem', function () {
      (0, _qunit.test)('updateItem() throws an error if the object parameter is not a string', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        assert.throws(function () {
          upfStorage.updateItem(TEST_KEY, 1337);
        }, ERROR_TYPE_STRING);
      });
      (0, _qunit.test)('updateItem() sets the default prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.updateItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('updateItem() sets the custom prefix key', function (assert) {
        var upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.updateItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
      (0, _qunit.test)('updateItem() overwrites any previous key and saves the value', function (assert) {
        var upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
        upfStorage.updateItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
        upfStorage.updateItem(TEST_KEY, TEST_VALUE + TEST_VALUE);
        assert.deepEqual(TEST_VALUE + TEST_VALUE, localStorage.getItem(CUSTOM_PREFIX + TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: getItem', function () {
      (0, _qunit.test)('getItem() returns null if no key is found', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        assert.equal(null, upfStorage.getItem(TEST_KEY));
      });
      (0, _qunit.test)('getItem() returns the proper value if the key is found', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.equal(TEST_VALUE, upfStorage.getItem(TEST_KEY));
      });
    });
    (0, _qunit.module)('Method: delete', function () {
      (0, _qunit.test)('delete() uses the default prefix when removing a key', function (assert) {
        var upfStorage = new _upfLocalStorage.default();
        upfStorage.saveItem(TEST_KEY, TEST_VALUE);
        assert.deepEqual(TEST_VALUE, localStorage.getItem(DEFAULT_PREFIX + TEST_KEY));
        upfStorage.delete(TEST_KEY);
        assert.equal(null, upfStorage.getItem(TEST_KEY));
      });
      (0, _qunit.test)('delete() uses the custom prefix when removing a key', function (assert) {
        var upfStorage = new _upfLocalStorage.default(CUSTOM_PREFIX);
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
