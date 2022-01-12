function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pickup-assigned-pickup-assigned-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pickup-assigned/pickup-assigned.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pickup-assigned/pickup-assigned.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPickupAssignedPickupAssignedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>Buscar entregador</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"container ion-text-center\">\r\n\t\t<div class=\"img_box\">\r\n\t\t\t<img src=\"assets/images/pickup_assigned_img.png\">\r\n\t\t</div>\r\n\t\t<h2>{{'your_pickup_has_ben_arranged' | translate}}</h2>\r\n\t\t<p>{{'thank_you_for_choosing_us_for' | translate}}<br>{{'delivery_you_valuable_stuffs' | translate}}</p>\r\n\t</div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-row>\r\n\t\t<ion-col size=\"6\">\r\n\t\t\t<ion-button size=\"large\"  class=\"btn back_to_home\" (click)=\"back_to_home()\">{{'back_to_home' | translate}}</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"6\">\r\n\t\t\t<ion-button size=\"large\"  class=\"btn track_my_courier\">{{'track_my_courier' | translate}}</ion-button>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pickup-assigned/pickup-assigned-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pickup-assigned/pickup-assigned-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PickupAssignedPageRoutingModule */

  /***/
  function srcAppPickupAssignedPickupAssignedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickupAssignedPageRoutingModule", function () {
      return PickupAssignedPageRoutingModule;
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


    var _pickup_assigned_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pickup-assigned.page */
    "./src/app/pickup-assigned/pickup-assigned.page.ts");

    var routes = [{
      path: '',
      component: _pickup_assigned_page__WEBPACK_IMPORTED_MODULE_3__["PickupAssignedPage"]
    }];

    var PickupAssignedPageRoutingModule = function PickupAssignedPageRoutingModule() {
      _classCallCheck(this, PickupAssignedPageRoutingModule);
    };

    PickupAssignedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PickupAssignedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pickup-assigned/pickup-assigned.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pickup-assigned/pickup-assigned.module.ts ***!
    \***********************************************************/

  /*! exports provided: PickupAssignedPageModule */

  /***/
  function srcAppPickupAssignedPickupAssignedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickupAssignedPageModule", function () {
      return PickupAssignedPageModule;
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


    var _pickup_assigned_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pickup-assigned-routing.module */
    "./src/app/pickup-assigned/pickup-assigned-routing.module.ts");
    /* harmony import */


    var _pickup_assigned_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pickup-assigned.page */
    "./src/app/pickup-assigned/pickup-assigned.page.ts");

    var PickupAssignedPageModule = function PickupAssignedPageModule() {
      _classCallCheck(this, PickupAssignedPageModule);
    };

    PickupAssignedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _pickup_assigned_routing_module__WEBPACK_IMPORTED_MODULE_6__["PickupAssignedPageRoutingModule"]],
      declarations: [_pickup_assigned_page__WEBPACK_IMPORTED_MODULE_7__["PickupAssignedPage"]]
    })], PickupAssignedPageModule);
    /***/
  },

  /***/
  "./src/app/pickup-assigned/pickup-assigned.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pickup-assigned/pickup-assigned.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPickupAssignedPickupAssignedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  text-align: center;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.container .img_box {\n  margin: auto;\n  width: 278px;\n  margin-bottom: 63px;\n}\n\n.container h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--text-black);\n  padding-bottom: 23px;\n}\n\n.container p {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n\nion-footer {\n  background: var(--white) !important;\n}\n\nion-footer ion-row {\n  margin: 0 -0.5px;\n}\n\nion-footer ion-row ion-col {\n  padding: 0 0.5px;\n}\n\nion-footer ion-row ion-col .button.btn {\n  font-size: 1.1rem !important;\n}\n\nion-footer ion-row ion-col .button.btn.back_to_home {\n  --border-radius: 33px 0 0 0;\n}\n\nion-footer ion-row ion-col .button.btn.track_my_courier {\n  --border-radius: 0px 0 33px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlja3VwLWFzc2lnbmVkL0M6XFxpb25pY1xcY291cmllcl9jL3NyY1xcYXBwXFxwaWNrdXAtYXNzaWduZWRcXHBpY2t1cC1hc3NpZ25lZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BpY2t1cC1hc3NpZ25lZC9waWNrdXAtYXNzaWduZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUM7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURNQTtFQUNDLG1DQUFBO0FDSEQ7O0FES0M7RUFDQyxnQkFBQTtBQ0hGOztBREtFO0VBQ0MsZ0JBQUE7QUNISDs7QURLRztFQUNDLDRCQUFBO0FDSEo7O0FES0k7RUFDQywyQkFBQTtBQ0hMOztBRE1JO0VBQ0MsNkJBQUE7QUNKTCIsImZpbGUiOiJzcmMvYXBwL3BpY2t1cC1hc3NpZ25lZC9waWNrdXAtYXNzaWduZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcblx0LmltZ19ib3gge1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0d2lkdGg6IDI3OHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNjNweDtcclxuXHR9XHJcblxyXG5cdGgyIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyM3B4O1xyXG5cdH1cclxuXHJcblx0cCB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0Zm9udC1zaXplOiAuOXJlbTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuXHJcblx0aW9uLXJvdyB7XHJcblx0XHRtYXJnaW46IDAgLS41cHg7XHJcblxyXG5cdFx0aW9uLWNvbCB7XHJcblx0XHRcdHBhZGRpbmc6IDAgLjVweDtcclxuXHJcblx0XHRcdC5idXR0b24uYnRuIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG5cclxuXHRcdFx0XHQmLmJhY2tfdG9faG9tZSB7XHJcblx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmLnRyYWNrX215X2NvdXJpZXIge1xyXG5cdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOiAwcHggMCAzM3B4IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5jb250YWluZXIgLmltZ19ib3gge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyNzhweDtcbiAgbWFyZ2luLWJvdHRvbTogNjNweDtcbn1cbi5jb250YWluZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHBhZGRpbmctYm90dG9tOiAyM3B4O1xufVxuLmNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cge1xuICBtYXJnaW46IDAgLTAuNXB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAuNXB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4ge1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uYmFja190b19ob21lIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzM3B4IDAgMCAwO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4udHJhY2tfbXlfY291cmllciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4IDAgMzNweCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pickup-assigned/pickup-assigned.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pickup-assigned/pickup-assigned.page.ts ***!
    \*********************************************************/

  /*! exports provided: PickupAssignedPage */

  /***/
  function srcAppPickupAssignedPickupAssignedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickupAssignedPage", function () {
      return PickupAssignedPage;
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

    var PickupAssignedPage = /*#__PURE__*/function () {
      function PickupAssignedPage(navCtrl) {
        _classCallCheck(this, PickupAssignedPage);

        this.navCtrl = navCtrl;
      }

      _createClass(PickupAssignedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back_to_home",
        value: function back_to_home() {
          this.navCtrl.navigateRoot(['./tabs']);
        }
      }]);

      return PickupAssignedPage;
    }();

    PickupAssignedPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    PickupAssignedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pickup-assigned',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pickup-assigned.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pickup-assigned/pickup-assigned.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pickup-assigned.page.scss */
      "./src/app/pickup-assigned/pickup-assigned.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PickupAssignedPage);
    /***/
  }
}]);
//# sourceMappingURL=pickup-assigned-pickup-assigned-module-es5.js.map