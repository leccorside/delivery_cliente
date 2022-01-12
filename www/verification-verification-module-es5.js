function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerificationVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Verificação</ion-title>\r\n\t</ion-toolbar>\r\n\t<div class=\"text_box\">\r\n\t\t<p>Entre com o código de 6 dígitos enviado em seu e-mail.</p>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">Código</ion-label>\r\n\t\t\t\t\t<ion-input type=\"name\" value=\"\" placeholder=\"Código de 6 dígitos\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"   class=\"btn\" (click)=\"submit()\">Autenticar</ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/verification/verification-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/verification/verification-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VerificationPageRoutingModule */

  /***/
  function srcAppVerificationVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
      return VerificationPageRoutingModule;
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


    var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var routes = [{
      path: '',
      component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }];

    var VerificationPageRoutingModule = function VerificationPageRoutingModule() {
      _classCallCheck(this, VerificationPageRoutingModule);
    };

    VerificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.module.ts ***!
    \*****************************************************/

  /*! exports provided: VerificationPageModule */

  /***/
  function srcAppVerificationVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
      return VerificationPageModule;
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


    var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verification-routing.module */
    "./src/app/verification/verification-routing.module.ts");
    /* harmony import */


    var _verification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var VerificationPageModule = function VerificationPageModule() {
      _classCallCheck(this, VerificationPageModule);
    };

    VerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationPageRoutingModule"]],
      declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_7__["VerificationPage"]]
    })], VerificationPageModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerificationVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\n.text_box {\n  color: var(--white);\n  padding: 26px 23px 15px 23px;\n}\n\n.text_box p {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.35rem;\n  line-height: 26px;\n  letter-spacing: 0.5px;\n  padding-bottom: 30px;\n}\n\n.text_box h2 {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.15rem;\n}\n\n.text_box h2 span {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\n.form {\n  padding-top: 62px;\n}\n\nion-footer {\n  background: var(--white);\n}\n\nion-footer .button.btn {\n  --border-radius: 33px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL0M6XFxpb25pY1xcY291cmllcl9jL3NyY1xcYXBwXFx2ZXJpZmljYXRpb25cXHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNkJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSw0QkFBQTtBQ0NEOztBRENDO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUU7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNBSDs7QURLQTtFQUNDLGlCQUFBO0FDRkQ7O0FES0E7RUFDQyx3QkFBQTtBQ0ZEOztBRElDO0VBQ0MsMkJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDEuNTZyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRfYm94IHtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdHBhZGRpbmc6IDI2cHggMjNweCAxNXB4IDIzcHg7XHJcblxyXG5cdHAge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblxyXG5cdGgyIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRmb250LXNpemU6IDEuMTVyZW07XHJcblxyXG5cdFx0c3BhbiB7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG5cdHBhZGRpbmctdG9wOiA2MnB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG5cdC5idXR0b24uYnRuIHtcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0X2JveCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDI2cHggMjNweCAxNXB4IDIzcHg7XG59XG4udGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuLnRleHRfYm94IGgyIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZy10b3A6IDYycHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24tZm9vdGVyIC5idXR0b24uYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzM3B4IDAgMCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/verification/verification.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/verification/verification.page.ts ***!
    \***************************************************/

  /*! exports provided: VerificationPage */

  /***/
  function srcAppVerificationVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
      return VerificationPage;
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

    var VerificationPage = /*#__PURE__*/function () {
      function VerificationPage(navCtrl) {
        _classCallCheck(this, VerificationPage);

        this.navCtrl = navCtrl;
      }

      _createClass(VerificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          this.navCtrl.navigateRoot(['./sign-up']);
        }
      }]);

      return VerificationPage;
    }();

    VerificationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification.page.scss */
      "./src/app/verification/verification.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], VerificationPage);
    /***/
  }
}]);
//# sourceMappingURL=verification-verification-module-es5.js.map