function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'payment_modes' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'amount_to_pay' | translate}} $8.60</h2>\r\n\t\t<ion-radio-group>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'cash_on_pickup' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_while_pick_a_pickup' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"cop\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'cash_on_delivery' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_while_drop_a_delivery' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"cod\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'pay_pal' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_from_pay_pal_account' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"pay_pal\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'stripe' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_from_stripe_account' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"stripe\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t</ion-radio-group>\r\n\t</ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"  class=\"btn\" (click)=\"pickup_assigned()\">{{'done' | translate}}</ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/payment/payment-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/payment/payment-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: PaymentPageRoutingModule */

  /***/
  function srcAppPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
      return PaymentPageRoutingModule;
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


    var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/payment/payment.page.ts");

    var routes = [{
      path: '',
      component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }];

    var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
      _classCallCheck(this, PaymentPageRoutingModule);
    };

    PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/payment/payment.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/payment/payment.module.ts ***!
    \*******************************************/

  /*! exports provided: PaymentPageModule */

  /***/
  function srcAppPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
      return PaymentPageModule;
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


    var _payment_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment-routing.module */
    "./src/app/payment/payment-routing.module.ts");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/payment/payment.page.ts");

    var PaymentPageModule = function PaymentPageModule() {
      _classCallCheck(this, PaymentPageModule);
    };

    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_6__["PaymentPageRoutingModule"]],
      declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_7__["PaymentPage"]]
    })], PaymentPageModule);
    /***/
  },

  /***/
  "./src/app/payment/payment.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/payment/payment.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--bg-color);\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding-top: 24px;\n}\n\nion-list h2 {\n  margin: 0;\n  font-weight: 700;\n  letter-spacing: 0;\n  font-size: 1.2rem;\n  padding: 0 33px 24px 33px;\n}\n\nion-list ion-item {\n  padding: 16px 18px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  margin-bottom: 5px;\n  background: var(--white);\n}\n\nion-list ion-item ion-radio {\n  --color: var(--text-light);\n  --color-checked: var(--primary);\n  margin: 0;\n  margin-right: 20px;\n}\n\nion-list ion-item ion-label {\n  margin: 0;\n}\n\nion-list ion-item ion-label h3 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\nion-list ion-item ion-label h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  font-weight: 400;\n}\n\nion-footer {\n  background: var(--bg-color);\n}\n\nion-footer .button.btn {\n  --border-radius: 0px 33px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9DOlxcaW9uaWNcXGNvdXJpZXJfYy9zcmNcXGFwcFxccGF5bWVudFxccGF5bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBQTtBQ0NEOztBREVBO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURDQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVDO0VBQ0Msa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQUY7O0FERUU7RUFDQywwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQUg7O0FER0U7RUFDQyxTQUFBO0FDREg7O0FER0c7RUFDQyx1QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURTQTtFQUNDLDJCQUFBO0FDTkQ7O0FET0M7RUFDQyw2QkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nLXRvcDogMjRweDtcclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRwYWRkaW5nOiAwIDMzcHggMjRweCAzM3B4O1xyXG5cdH1cclxuXHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzoxNnB4ICAxOHB4O1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0LS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcblx0XHRpb24tcmFkaW8ge1xyXG5cdFx0XHQtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cclxuXHRcdFx0aDMge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGg0IHtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG5cdC5idXR0b24uYnRue1xyXG5cdFx0LS1ib3JkZXItcmFkaXVzOiAwcHggMzNweCAwIDA7XHJcblx0fVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDAgMzNweCAyNHB4IDMzcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE2cHggMThweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuaW9uLWZvb3RlciAuYnV0dG9uLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4IDMzcHggMCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/payment/payment.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/payment/payment.page.ts ***!
    \*****************************************/

  /*! exports provided: PaymentPage */

  /***/
  function srcAppPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
      return PaymentPage;
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

    var PaymentPage = /*#__PURE__*/function () {
      function PaymentPage(route) {
        _classCallCheck(this, PaymentPage);

        this.route = route;
      }

      _createClass(PaymentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pickup_assigned",
        value: function pickup_assigned() {
          this.route.navigate(['./pickup-assigned']);
        }
      }]);

      return PaymentPage;
    }();

    PaymentPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.page.scss */
      "./src/app/payment/payment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], PaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=payment-payment-module-es5.js.map