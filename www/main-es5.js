function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app [dir]=\"rtlSide\">\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverymode/deliverymode.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliverymode/deliverymode.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeliverymodeDeliverymodePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>deliverymode</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n-->\r\n\r\n<ion-content (click)=\"dismiss()\">\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<div class=\"list_header\">\r\n\t\t\t<h1 class=\"ion-text-center\">Selecione o tipo de entrega</h1>\r\n\t\t</div>\r\n\t\t<ion-radio-group>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"1\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega econômica <span class=\"end\">R$8.60</span></h2>\r\n\t\t\t\t\t\t<p>Entrega em 2 a 3 dias.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"2\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega Delux <span class=\"end\">R$12.50</span></h2>\r\n\t\t\t\t\t\t<p>Entrega em até 6 horas.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"3\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega Premium <span class=\"end\">R$20.00</span></h2>\r\n\t\t\t\t\t\t<p>Entregua em 2-3 horas.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"4\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega econômica <span class=\"end\">R$8.60</span></h2>\r\n\t\t\t\t\t\t<p>Entrega em 2 a 3 dias.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"5\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega Delux <span class=\"end\">R$12.50</span></h2>\r\n\t\t\t\t\t\t<p>Entrega em até 6 horas.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"7\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega Premium <span class=\"end\">R$20.00</span></h2>\r\n\t\t\t\t\t\t<p>Entregua em 2-3 horas.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"7\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega econômica <span class=\"end\">R$8.60</span></h2>\r\n\t\t\t\t\t\t<p>Entrega em 2 a 3 dias.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"8\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega Delux <span class=\"end\">R$12.50</span></h2>\r\n\t\t\t\t\t\t<p>Entrega em até 6 horas.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<ion-radio value=\"9\"></ion-radio>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2 class=\"d-flex\">Entrega Premium <span class=\"end\">R$20.00</span></h2>\r\n\t\t\t\t\t\t<p>Entregua em 2-3 horas.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-radio-group>\r\n\t</ion-list>\r\n\t<ion-button size=\"large\" class=\"btn\" (click)=\"dismiss()\">Atualizar</ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'intro',
      pathMatch: 'full'
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-in-sign-in-module */
        "sign-in-sign-in-module").then(__webpack_require__.bind(null,
        /*! ./sign-in/sign-in.module */
        "./src/app/sign-in/sign-in.module.ts")).then(function (m) {
          return m.SignInPageModule;
        });
      }
    }, {
      path: 'sign-up',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-up-sign-up-module */
        "sign-up-sign-up-module").then(__webpack_require__.bind(null,
        /*! ./sign-up/sign-up.module */
        "./src/app/sign-up/sign-up.module.ts")).then(function (m) {
          return m.SignUpPageModule;
        });
      }
    }, {
      path: 'verification',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | verification-verification-module */
        "verification-verification-module").then(__webpack_require__.bind(null,
        /*! ./verification/verification.module */
        "./src/app/verification/verification.module.ts")).then(function (m) {
          return m.VerificationPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'arrange-delivery',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | arrange-delivery-arrange-delivery-module */
        "arrange-delivery-arrange-delivery-module").then(__webpack_require__.bind(null,
        /*! ./arrange-delivery/arrange-delivery.module */
        "./src/app/arrange-delivery/arrange-delivery.module.ts")).then(function (m) {
          return m.ArrangeDeliveryPageModule;
        });
      }
    }, {
      path: 'height-weight-lenght',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | height-weight-lenght-height-weight-lenght-module */
        "height-weight-lenght-height-weight-lenght-module").then(__webpack_require__.bind(null,
        /*! ./height-weight-lenght/height-weight-lenght.module */
        "./src/app/height-weight-lenght/height-weight-lenght.module.ts")).then(function (m) {
          return m.HeightWeightLenghtPageModule;
        });
      }
    }, {
      path: 'deliverymode',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./deliverymode/deliverymode.module */
        "./src/app/deliverymode/deliverymode.module.ts")).then(function (m) {
          return m.DeliverymodePageModule;
        });
      }
    }, {
      path: 'payment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | payment-payment-module */
        "payment-payment-module").then(__webpack_require__.bind(null,
        /*! ./payment/payment.module */
        "./src/app/payment/payment.module.ts")).then(function (m) {
          return m.PaymentPageModule;
        });
      }
    }, {
      path: 'pickup-assigned',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pickup-assigned-pickup-assigned-module */
        "pickup-assigned-pickup-assigned-module").then(__webpack_require__.bind(null,
        /*! ./pickup-assigned/pickup-assigned.module */
        "./src/app/pickup-assigned/pickup-assigned.module.ts")).then(function (m) {
          return m.PickupAssignedPageModule;
        });
      }
    }, {
      path: 'search-restaurant',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-restaurant-search-restaurant-module */
        "search-restaurant-search-restaurant-module").then(__webpack_require__.bind(null,
        /*! ./search-restaurant/search-restaurant.module */
        "./src/app/search-restaurant/search-restaurant.module.ts")).then(function (m) {
          return m.SearchRestaurantPageModule;
        });
      }
    }, {
      path: 'search-grocery-stores',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-grocery-stores-search-grocery-stores-module */
        "search-grocery-stores-search-grocery-stores-module").then(__webpack_require__.bind(null,
        /*! ./search-grocery-stores/search-grocery-stores.module */
        "./src/app/search-grocery-stores/search-grocery-stores.module.ts")).then(function (m) {
          return m.SearchGroceryStoresPageModule;
        });
      }
    }, {
      path: 'my-deliveries',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | my-deliveries-my-deliveries-module */
        "my-deliveries-my-deliveries-module").then(__webpack_require__.bind(null,
        /*! ./my-deliveries/my-deliveries.module */
        "./src/app/my-deliveries/my-deliveries.module.ts")).then(function (m) {
          return m.MyDeliveriesPageModule;
        });
      }
    }, {
      path: 'track-delivery',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | track-delivery-track-delivery-module */
        "track-delivery-track-delivery-module").then(__webpack_require__.bind(null,
        /*! ./track-delivery/track-delivery.module */
        "./src/app/track-delivery/track-delivery.module.ts")).then(function (m) {
          return m.TrackDeliveryPageModule;
        });
      }
    }, {
      path: 'more',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | more-more-module */
        "more-more-module").then(__webpack_require__.bind(null,
        /*! ./more/more.module */
        "./src/app/more/more.module.ts")).then(function (m) {
          return m.MorePageModule;
        });
      }
    }, {
      path: 'my-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | my-profile-my-profile-module */
        "my-profile-my-profile-module").then(__webpack_require__.bind(null,
        /*! ./my-profile/my-profile.module */
        "./src/app/my-profile/my-profile.module.ts")).then(function (m) {
          return m.MyProfilePageModule;
        });
      }
    }, {
      path: 'saved-addresses',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | saved-addresses-saved-addresses-module */
        "saved-addresses-saved-addresses-module").then(__webpack_require__.bind(null,
        /*! ./saved-addresses/saved-addresses.module */
        "./src/app/saved-addresses/saved-addresses.module.ts")).then(function (m) {
          return m.SavedAddressesPageModule;
        });
      }
    }, {
      path: 'contact-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-us-contact-us-module */
        "contact-us-contact-us-module").then(__webpack_require__.bind(null,
        /*! ./contact-us/contact-us.module */
        "./src/app/contact-us/contact-us.module.ts")).then(function (m) {
          return m.ContactUsPageModule;
        });
      }
    }, {
      path: 'terms-conditions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | terms-conditions-terms-conditions-module */
        "terms-conditions-terms-conditions-module").then(__webpack_require__.bind(null,
        /*! ./terms-conditions/terms-conditions.module */
        "./src/app/terms-conditions/terms-conditions.module.ts")).then(function (m) {
          return m.TermsConditionsPageModule;
        });
      }
    }, {
      path: 'change-language',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-language-change-language-module */
        "change-language-change-language-module").then(__webpack_require__.bind(null,
        /*! ./change-language/change-language.module */
        "./src/app/change-language/change-language.module.ts")).then(function (m) {
          return m.ChangeLanguagePageModule;
        });
      }
    }, {
      path: 'intro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | intro-intro-module */
        "intro-intro-module").then(__webpack_require__.bind(null,
        /*! ./intro/intro.module */
        "./src/app/intro/intro.module.ts")).then(function (m) {
          return m.IntroPageModule;
        });
      }
    }, {
      path: 'sign-up2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-up2-sign-up2-module */
        "sign-up2-sign-up2-module").then(__webpack_require__.bind(null,
        /*! ./sign-up2/sign-up2.module */
        "./src/app/sign-up2/sign-up2.module.ts")).then(function (m) {
          return m.SignUp2PageModule;
        });
      }
    }, {
      path: 'sign-up3',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-up3-sign-up3-module */
        "sign-up3-sign-up3-module").then(__webpack_require__.bind(null,
        /*! ./sign-up3/sign-up3.module */
        "./src/app/sign-up3/sign-up3.module.ts")).then(function (m) {
          return m.SignUp3PageModule;
        });
      }
    }, {
      path: 'aguarde',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | aguarde-aguarde-module */
        "aguarde-aguarde-module").then(__webpack_require__.bind(null,
        /*! ./aguarde/aguarde.module */
        "./src/app/aguarde/aguarde.module.ts")).then(function (m) {
          return m.AguardePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGlvbmljXFxjb3VyaWVyX2Mvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7RUFDQSxpR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRDtBREdBO0VBQ0MsMEJBQUE7RUFDQSxtR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGRDtBREtBO0VBQ0MsMEJBQUE7RUFDQSx5R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKRDtBRE9BO0VBQ0MsMEJBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNORDtBRFNBO0VBQ0MsMEJBQUE7RUFDQSw2R0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSRDtBRFdBO0VBQ0MsMEJBQUE7RUFDQSxpR0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNWRDtBRGVBOzs7Ozs7Ozs7Ozs7O0VBYUMsZ0NBQUE7RUFDQSwwQkFBQTtBQ2JEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuXHRzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuXHJcbiosXHJcbmJvZHksXHJcbmh0bWwsXHJcbnAsXHJcbnNwYW4sXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnN0cm9uZyxcclxubGkge1xyXG5cdC0taW9uLWZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdC8vbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKixcbmJvZHksXG5odG1sLFxucCxcbnNwYW4sXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcsXG5saSB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/services/myevent.services */
    "./src/services/myevent.services.ts");
    /* harmony import */


    var src_models_contants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/contants.models */
    "./src/models/contants.models.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(config, platform, navCtrl, splashScreen, statusBar, translate, myEvent) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.config = config;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.myEvent = myEvent;
        this.rtlSide = "left";
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(function (value) {
          _this.navCtrl.navigateRoot(['./']);

          _this.globalize(value);
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.hide();

            var defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].KEY_DEFAULT_LANGUAGE);

            _this2.globalize(defaultLang);
          });
        }
      }, {
        key: "globalize",
        value: function globalize(languagePriority) {
          this.translate.setDefaultLang("pt");
          var defaultLangCode = this.config.availableLanguages[0].code;
          this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        }
      }, {
        key: "setDirectionAccordingly",
        value: function setDirectionAccordingly(lang) {
          switch (lang) {
            case 'ar':
              {
                this.rtlSide = "rtl";
                break;
              }

            default:
              {
                this.rtlSide = "ltr";
                break;
              }
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_6__["MyEvent"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_services_myevent_services__WEBPACK_IMPORTED_MODULE_6__["MyEvent"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: APP_CONFIG, BaseAppConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
      return APP_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseAppConfig", function () {
      return BaseAppConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("app.config");
    var BaseAppConfig = {
      availableLanguages: [{
        code: 'en',
        name: 'English'
      }, {
        code: 'ar',
        name: 'Arabic'
      }, {
        code: 'es',
        name: 'Spanish'
      }, {
        code: 'fr',
        name: 'French'
      }, {
        code: 'id',
        name: 'Indonesian'
      }, {
        code: 'pt',
        name: 'Portuguese'
      }],
      showBuyPromt: false
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _deliverymode_deliverymode_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./deliverymode/deliverymode.module */
    "./src/app/deliverymode/deliverymode.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _deliverymode_deliverymode_module__WEBPACK_IMPORTED_MODULE_7__["DeliverymodePageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _app_config__WEBPACK_IMPORTED_MODULE_13__["APP_CONFIG"],
        useValue: _app_config__WEBPACK_IMPORTED_MODULE_13__["BaseAppConfig"]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/deliverymode/deliverymode-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/deliverymode/deliverymode-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DeliverymodePageRoutingModule */

  /***/
  function srcAppDeliverymodeDeliverymodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliverymodePageRoutingModule", function () {
      return DeliverymodePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _deliverymode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deliverymode.page */
    "./src/app/deliverymode/deliverymode.page.ts");

    var routes = [{
      path: '',
      component: _deliverymode_page__WEBPACK_IMPORTED_MODULE_3__["DeliverymodePage"]
    }];

    var DeliverymodePageRoutingModule = function DeliverymodePageRoutingModule() {
      _classCallCheck(this, DeliverymodePageRoutingModule);
    };

    DeliverymodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeliverymodePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/deliverymode/deliverymode.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/deliverymode/deliverymode.module.ts ***!
    \*****************************************************/

  /*! exports provided: DeliverymodePageModule */

  /***/
  function srcAppDeliverymodeDeliverymodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliverymodePageModule", function () {
      return DeliverymodePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _deliverymode_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deliverymode-routing.module */
    "./src/app/deliverymode/deliverymode-routing.module.ts");
    /* harmony import */


    var _deliverymode_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./deliverymode.page */
    "./src/app/deliverymode/deliverymode.page.ts");

    var DeliverymodePageModule = function DeliverymodePageModule() {
      _classCallCheck(this, DeliverymodePageModule);
    };

    DeliverymodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _deliverymode_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeliverymodePageRoutingModule"]],
      declarations: [_deliverymode_page__WEBPACK_IMPORTED_MODULE_7__["DeliverymodePage"]]
    })], DeliverymodePageModule);
    /***/
  },

  /***/
  "./src/app/deliverymode/deliverymode.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/deliverymode/deliverymode.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeliverymodeDeliverymodePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0) !important;\n}\n\nion-footer {\n  background: var(--bg-color);\n  border-radius: 33px 0 0 0;\n  overflow: hidden;\n}\n\nion-footer ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n}\n\nion-footer ion-list ion-radio-group {\n  max-height: 255px;\n  overflow: auto;\n  display: block;\n  padding-bottom: 20px;\n}\n\nion-footer ion-list .list_header {\n  padding: 20px 20px;\n}\n\nion-footer ion-list .list_header h1 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-black);\n}\n\nion-footer ion-list ion-item {\n  padding: 15px 20px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  margin-bottom: 5px;\n  background: var(--white);\n}\n\nion-footer ion-list ion-item .item_inner {\n  align-items: flex-start;\n}\n\nion-footer ion-list ion-item .item_inner .text_box {\n  width: 100%;\n}\n\nion-footer ion-list ion-item .item_inner .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.15rem;\n  padding-bottom: 7px;\n}\n\nion-footer ion-list ion-item .item_inner .text_box h2 span {\n  color: var(--text-black);\n  font-size: 1.17rem;\n}\n\nion-footer ion-list ion-item .item_inner .text_box p {\n  color: var(--text-light);\n  margin: 0;\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n\nion-footer ion-list ion-item ion-radio {\n  --color: var(--text-light);\n  --color-checked: var(--primary);\n  margin: 0;\n  margin-right: 20px;\n  min-width: 20px;\n  margin-top: 2px;\n}\n\nion-footer .button.btn {\n  --border-radius: 0px 33px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnltb2RlL0M6XFxpb25pY1xcY291cmllcl9jL3NyY1xcYXBwXFxkZWxpdmVyeW1vZGVcXGRlbGl2ZXJ5bW9kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlbGl2ZXJ5bW9kZS9kZWxpdmVyeW1vZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUNBQUE7QUNDRDs7QURFQTtFQUNDLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENDO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVFO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQUg7O0FESUU7RUFDQyxrQkFBQTtBQ0ZIOztBRElHO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0ZKOztBRFFFO0VBQ0Msa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDTkg7O0FEUUc7RUFDQyx1QkFBQTtBQ05KOztBRFFJO0VBQ0MsV0FBQTtBQ05MOztBRFFLO0VBQ0MsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ05OOztBRFFNO0VBQ0Msd0JBQUE7RUFDQSxrQkFBQTtBQ05QOztBRFVLO0VBQ0Msd0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JOOztBRGNHO0VBQ0MsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDWko7O0FEaUJDO0VBQ0MsNkJBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5bW9kZS9kZWxpdmVyeW1vZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcblx0Ym9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRpb24tbGlzdCB7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblxyXG5cclxuXHRcdGlvbi1yYWRpby1ncm91cCB7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDI1NXB4O1xyXG5cdFx0XHRvdmVyZmxvdzogYXV0bztcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQubGlzdF9oZWFkZXIge1xyXG5cdFx0XHRwYWRkaW5nOiAyMHB4IDIwcHg7XHJcblxyXG5cdFx0XHRoMSB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRwYWRkaW5nOiAxNXB4IDIwcHg7XHJcblx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcblx0XHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcblx0XHRcdFx0LnRleHRfYm94IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjE1cmVtO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG5cclxuXHRcdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xN3JlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpb24tcmFkaW8ge1xyXG5cdFx0XHRcdC0tY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uLmJ0biB7XHJcblx0XHQtLWJvcmRlci1yYWRpdXM6IDBweCAzM3B4IDAgMDtcclxuXHR9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAzM3B4IDAgMCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1yYWRpby1ncm91cCB7XG4gIG1heC1oZWlnaHQ6IDI1NXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCAubGlzdF9oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IC5saXN0X2hlYWRlciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDEuMTdyZW07XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSBpb24tcmFkaW8ge1xuICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuaW9uLWZvb3RlciAuYnV0dG9uLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4IDMzcHggMCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/deliverymode/deliverymode.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/deliverymode/deliverymode.page.ts ***!
    \***************************************************/

  /*! exports provided: DeliverymodePage */

  /***/
  function srcAppDeliverymodeDeliverymodePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliverymodePage", function () {
      return DeliverymodePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var DeliverymodePage = /*#__PURE__*/function () {
      function DeliverymodePage(modalController) {
        _classCallCheck(this, DeliverymodePage);

        this.modalController = modalController;
      }

      _createClass(DeliverymodePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }]);

      return DeliverymodePage;
    }();

    DeliverymodePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DeliverymodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deliverymode',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deliverymode.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/deliverymode/deliverymode.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deliverymode.page.scss */
      "./src/app/deliverymode/deliverymode.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DeliverymodePage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/models/contants.models.ts":
  /*!***************************************!*\
    !*** ./src/models/contants.models.ts ***!
    \***************************************/

  /*! exports provided: Constants */

  /***/
  function srcModelsContantsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.KEY_DEFAULT_LANGUAGE = 'cc_dl';
    /***/
  },

  /***/
  "./src/services/myevent.services.ts":
  /*!******************************************!*\
    !*** ./src/services/myevent.services.ts ***!
    \******************************************/

  /*! exports provided: MyEvent */

  /***/
  function srcServicesMyeventServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEvent", function () {
      return MyEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // For rxjs 6


    var MyEvent = /*#__PURE__*/function () {
      function MyEvent() {
        _classCallCheck(this, MyEvent);

        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MyEvent, [{
        key: "getLanguageObservable",
        value: function getLanguageObservable() {
          return this.selectedLanguage.asObservable();
        }
      }, {
        key: "setLanguageData",
        value: function setLanguageData(data) {
          this.selectedLanguage.next(data);
        }
      }]);

      return MyEvent;
    }();

    MyEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MyEvent);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\ionic\courier_c\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map