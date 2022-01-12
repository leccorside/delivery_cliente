function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'my_profile' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"profile_container d-flex\"> \r\n\t\t<div class=\"img_box center_img\">\r\n\t\t\t<img src=\"assets/images/profile.png\" class=\"crop_img\"> \r\n\t\t</div> \r\n\t</div>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'full_name' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"name\" value=\"Samantha Smith\" readonly></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"enail\" value=\"samanthasmith@mail.com\" readonly></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item> \r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'phone_number' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"text\" value=\"+1 987 654 3210\" readonly></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n ";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyProfilePageRoutingModule */

  /***/
  function srcAppMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
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


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/my-profile/my-profile.module.ts ***!
    \*************************************************/

  /*! exports provided: MyProfilePageModule */

  /***/
  function srcAppMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/my-profile/my-profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\nion-content {\n  border-radius: 0 !important;\n  --background: var(--transparent) !important;\n}\n\nion-content::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background: var(--white);\n  border-radius: 33px 0 0 0;\n}\n\n.profile_container {\n  padding: 22px 20px;\n  margin-bottom: 45px;\n}\n\n.profile_container .img_box {\n  min-width: 115px;\n  height: 115px;\n  background: var(--bg-color);\n  border-radius: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9DOlxcaW9uaWNcXGNvdXJpZXJfYy9zcmNcXGFwcFxcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQywyQkFBQTtFQUNBLDJDQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRDs7QURFQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9teS1wcm9maWxlL215LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMS41NnJlbTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblxyXG5cdCY6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XHJcblx0fVxyXG59XHJcblxyXG4ucHJvZmlsZV9jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDIycHggMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0NXB4OyBcclxuXHJcblx0LmltZ19ib3gge1xyXG5cdFx0bWluLXdpZHRoOiAxMTVweDtcclxuXHRcdGhlaWdodDogMTE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcbn1cclxuXHJcbiAiLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAzM3B4IDAgMCAwO1xufVxuXG4ucHJvZmlsZV9jb250YWluZXIge1xuICBwYWRkaW5nOiAyMnB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4ucHJvZmlsZV9jb250YWluZXIgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-profile/my-profile.page.ts ***!
    \***********************************************/

  /*! exports provided: MyProfilePage */

  /***/
  function srcAppMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyProfilePage = /*#__PURE__*/function () {
      function MyProfilePage() {
        _classCallCheck(this, MyProfilePage);
      }

      _createClass(MyProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfilePage;
    }();

    MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/my-profile/my-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MyProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=my-profile-my-profile-module-es5.js.map