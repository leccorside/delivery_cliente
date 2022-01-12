(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up2-sign-up2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up2/sign-up2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up2/sign-up2.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Registre-se</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!--<div class=\"profile_container d-flex\">\n\t\t<ion-icon class=\"zmdi zmdi-image\"></ion-icon>\n\t\t<div class=\"img_box center_img\">\n\t\t\t<img src=\"assets/images/profile_pic_placeholder.png\" class=\"crop_img\"> \n\t\t</div>\n\t\t<ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n\t</div>-->\n\t<div class=\"form\">\n\n\t\t<h3>Insira seu e-mail para verificação</h3>\n\t\t<ion-list lines=\"none\">\n\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<div class=\"item_inner\">\n\t\t\t\t\t<ion-label position=\"fixed\">E-mail</ion-label>\n\t\t\t\t\t<ion-input type=\"enail\" value=\"\" placeholder=\"E-mail\"></ion-input>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\n\t\t</ion-list>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\"  class=\"btn\" (click)=\"continue()\">Continuar</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/sign-up2/sign-up2-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sign-up2/sign-up2-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SignUp2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp2PageRoutingModule", function() { return SignUp2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up2.page */ "./src/app/sign-up2/sign-up2.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up2_page__WEBPACK_IMPORTED_MODULE_3__["SignUp2Page"]
    }
];
let SignUp2PageRoutingModule = class SignUp2PageRoutingModule {
};
SignUp2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUp2PageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up2/sign-up2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sign-up2/sign-up2.module.ts ***!
  \*********************************************/
/*! exports provided: SignUp2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp2PageModule", function() { return SignUp2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up2-routing.module */ "./src/app/sign-up2/sign-up2-routing.module.ts");
/* harmony import */ var _sign_up2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up2.page */ "./src/app/sign-up2/sign-up2.page.ts");







let SignUp2PageModule = class SignUp2PageModule {
};
SignUp2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_up2_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUp2PageRoutingModule"]
        ],
        declarations: [_sign_up2_page__WEBPACK_IMPORTED_MODULE_6__["SignUp2Page"]]
    })
], SignUp2PageModule);



/***/ }),

/***/ "./src/app/sign-up2/sign-up2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sign-up2/sign-up2.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\nion-content {\n  border-radius: 0 !important;\n  --background: #fff !important;\n}\n\nion-content::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background: var(--white);\n  border-radius: 33px 0 0 0;\n  top: 10px;\n}\n\n.form {\n  top: 30px;\n}\n\n.profile_container {\n  padding: 22px 20px;\n  margin-bottom: 45px;\n}\n\n.profile_container ion-icon {\n  color: var(--primary);\n  margin: 0 auto;\n  font-size: 2rem;\n  margin-top: 30px;\n}\n\n.profile_container .img_box {\n  min-width: 115px;\n  height: 115px;\n  background: var(--bg-color);\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\nion-footer {\n  background: var(--white);\n}\n\nion-footer .button.btn {\n  --border-radius: 33px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cDIvQzpcXGlvbmljXFxjb3VyaWVyX2Mvc3JjXFxhcHBcXHNpZ24tdXAyXFxzaWduLXVwMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24tdXAyL3NpZ24tdXAyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLDJCQUFBO0VBQ0EsNkJBQUE7QUNDRDs7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNDRjs7QURHQTtFQUNDLFNBQUE7QUNBRDs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRDs7QURFQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNERjs7QURLQTtFQUNDLHdCQUFBO0FDRkQ7O0FER0M7RUFDQywyQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cDIvc2lnbi11cDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMS41NnJlbTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG5cdC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG5cclxuXHQmOjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzM3B4IDAgMCAwO1xyXG5cdFx0dG9wOiAxMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmZvcm17XHJcblx0dG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDIycHggMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG5cclxuXHRpb24taWNvbiB7XHJcblx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0fVxyXG5cclxuXHQuaW1nX2JveCB7XHJcblx0XHRtaW4td2lkdGg6IDExNXB4O1xyXG5cdFx0aGVpZ2h0OiAxMTVweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0LmJ1dHRvbi5idG57XHJcblx0XHQtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XHJcblx0fVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNTZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XG4gIHRvcDogMTBweDtcbn1cblxuLmZvcm0ge1xuICB0b3A6IDMwcHg7XG59XG5cbi5wcm9maWxlX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIycHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbi5wcm9maWxlX2NvbnRhaW5lciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5wcm9maWxlX2NvbnRhaW5lciAuaW1nX2JveCB7XG4gIG1pbi13aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/sign-up2/sign-up2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up2/sign-up2.page.ts ***!
  \*******************************************/
/*! exports provided: SignUp2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp2Page", function() { return SignUp2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SignUp2Page = class SignUp2Page {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    continue() {
        this.route.navigate(['./verification']);
    }
};
SignUp2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignUp2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up2/sign-up2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up2.page.scss */ "./src/app/sign-up2/sign-up2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignUp2Page);



/***/ })

}]);
//# sourceMappingURL=sign-up2-sign-up2-module-es2015.js.map