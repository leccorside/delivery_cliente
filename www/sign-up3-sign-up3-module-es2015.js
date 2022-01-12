(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up3-sign-up3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up3/sign-up3.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up3/sign-up3.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Registre-se</ion-title>\n\t</ion-toolbar>\n\t<div class=\"text_box\">\n\t\t<p>Agora você precisa mandar uma foto dos seus documentos</p>\n\t</div>\n</ion-header>\n\n<ion-content>\n\t<div class=\"cnh\">\n\n        <h5>Foto CNH</h5>\n\t\t<ion-row>\n\n\t\t\t<ion-col col-6 class=\"col2\" >\n\t\t\t<span>Frente</span>\n\t\t\t<div class=\"imagens\" (click)=\"escolherImagem1()\">\n\t\t\t\t<img src=\"../../assets/images/sem-imagem.jpg\" [class]=\"className1\">\n\t\t\t\t<img src=\"{{base64Image1}}\" [class]=\"className2\">\n\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col col-6 class=\"col2\" >\n\t\t\t<span>Verso</span>\n\t\t\t<div class=\"imagens\" (click)=\"escolherImagem2()\">\n\t\t\t\t<img src=\"../../assets/images/sem-imagem.jpg\" [class]=\"className3\">\n\t\t\t\t<img src=\"{{base64Image2}}\" [class]=\"className4\">\n\t\t\t</div>\n\t\t\t</ion-col>\n\n\t\t</ion-row>\n\n\t</div>\n\n\t<div class=\"residencial\">\n\n        <h5>Comprovante de endereço</h5>\n\n        <ion-row>\n\n          <ion-col col-6 class=\"col2\" >\n            <span>Frente</span>\n            <div class=\"imagens\" (click)=\"escolherImagem3()\">\n              <img src=\"../../assets/images/sem-imagem.jpg\" [class]=\"className5\">\n              <img src=\"{{base64Image3}}\" [class]=\"className6\">\n            </div>\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\"   class=\"btn\" (click)=\"enviar()\">Enviar</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/sign-up3/sign-up3-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sign-up3/sign-up3-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SignUp3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp3PageRoutingModule", function() { return SignUp3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up3.page */ "./src/app/sign-up3/sign-up3.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up3_page__WEBPACK_IMPORTED_MODULE_3__["SignUp3Page"]
    }
];
let SignUp3PageRoutingModule = class SignUp3PageRoutingModule {
};
SignUp3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUp3PageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up3/sign-up3.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sign-up3/sign-up3.module.ts ***!
  \*********************************************/
/*! exports provided: SignUp3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp3PageModule", function() { return SignUp3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up3-routing.module */ "./src/app/sign-up3/sign-up3-routing.module.ts");
/* harmony import */ var _sign_up3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up3.page */ "./src/app/sign-up3/sign-up3.page.ts");







let SignUp3PageModule = class SignUp3PageModule {
};
SignUp3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_up3_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUp3PageRoutingModule"]
        ],
        declarations: [_sign_up3_page__WEBPACK_IMPORTED_MODULE_6__["SignUp3Page"]]
    })
], SignUp3PageModule);



/***/ }),

/***/ "./src/app/sign-up3/sign-up3.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sign-up3/sign-up3.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\n.text_box {\n  color: var(--white);\n  padding: 26px 23px 15px 23px;\n}\n\n.text_box p {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.35rem;\n  line-height: 26px;\n  letter-spacing: 0.5px;\n  padding-bottom: 30px;\n}\n\n.text_box h2 {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.15rem;\n}\n\n.text_box h2 span {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\n.form {\n  padding-top: 62px;\n}\n\nion-footer {\n  background: var(--white);\n}\n\nion-footer .button.btn {\n  --border-radius: 33px 0 0 0;\n}\n\n.cnh {\n  padding: 10px 15px;\n}\n\n.residencial {\n  padding: 10px 15px;\n}\n\n.grid-img {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.grid-img h5 {\n  font-weight: 700;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.img-mini {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100px;\n  max-width: 100px;\n  background-position: center center;\n  background-size: cover;\n  display: block;\n  position: relative;\n  text-align: center;\n  border-radius: 10px;\n}\n\n.img-mini2 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100px;\n  max-width: 100px;\n  background-position: center center;\n  background-size: cover;\n  display: block;\n  position: relative;\n  text-align: center;\n  border-radius: 10px;\n}\n\n.none {\n  display: none !important;\n}\n\n.action-sheet-icon.sc-ion-action-sheet-md {\n  padding-bottom: 0 !important;\n}\n\n.action-sheet-icon.sc-ion-action-sheet-md {\n  margin-bottom: -7px !important;\n}\n\n.action-sheet-icon {\n  margin-bottom: -7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cDMvQzpcXGlvbmljXFxjb3VyaWVyX2Mvc3JjXFxhcHBcXHNpZ24tdXAzXFxzaWduLXVwMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24tdXAzL3NpZ24tdXAzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsNEJBQUE7QUNDRDs7QURDQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUM7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVFO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQUg7O0FES0E7RUFDQyxpQkFBQTtBQ0ZEOztBREtBO0VBQ0Msd0JBQUE7QUNGRDs7QURJQztFQUNDLDJCQUFBO0FDRkY7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0Msa0JBQUE7QUNIRDs7QURVRTtFQUNELGtCQUFBO0VBQ0EsZ0JBQUE7QUNQRDs7QURVRTtFQUNELGdCQUFBO0FDUEQ7O0FEVUU7RUFDRCxnQkFBQTtBQ1BEOztBRFVFO0VBQ0Qsb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1BEOztBRFVFO0VBQ0Qsb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1BEOztBRFdFO0VBQ0Qsd0JBQUE7QUNSRDs7QURXQTtFQUNJLDRCQUFBO0FDUko7O0FEV0E7RUFDSSw4QkFBQTtBQ1JKOztBRFdBO0VBQ0ksOEJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAzL3NpZ24tdXAzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxLjU2cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0X2JveCB7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRwYWRkaW5nOiAyNnB4IDIzcHggMTVweCAyM3B4O1xyXG5cclxuXHRwIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRmb250LXNpemU6IDEuMzVyZW07XHJcblx0XHRsaW5lLWhlaWdodDogMjZweDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0Zm9udC1zaXplOiAxLjE1cmVtO1xyXG5cclxuXHRcdHNwYW4ge1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRsZXR0ZXItc3BhY2luZzogLjVweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuXHRwYWRkaW5nLXRvcDogNjJweDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuXHQuYnV0dG9uLmJ0biB7XHJcblx0XHQtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XHJcblx0fVxyXG59XHJcblxyXG4uY25oIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuLnJlc2lkZW5jaWFse1xyXG5cdHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuLmNvbDJ7XHJcblx0XHJcbn1cclxuICBcclxuICAuZ3JpZC1pbWd7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkLWltZyBoNXtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAubXQtMjB7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmltZy1taW5pe1xyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0bWF4LXdpZHRoOjEwMHB4O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWctbWluaTJ7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHRtYXgtd2lkdGg6MTAwcHg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5ub25le1xyXG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uYWN0aW9uLXNoZWV0LWljb24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aW9uLXNoZWV0LWljb24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tc2hlZXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtN3B4ICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0X2JveCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDI2cHggMjNweCAxNXB4IDIzcHg7XG59XG4udGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuLnRleHRfYm94IGgyIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZy10b3A6IDYycHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24tZm9vdGVyIC5idXR0b24uYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzM3B4IDAgMCAwO1xufVxuXG4uY25oIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4ucmVzaWRlbmNpYWwge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5ncmlkLWltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmdyaWQtaW1nIGg1IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmltZy1taW5pIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWctbWluaTIge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm5vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tc2hlZXQtaWNvbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbi1zaGVldC1pY29uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBtYXJnaW4tYm90dG9tOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tc2hlZXQtaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IC03cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sign-up3/sign-up3.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up3/sign-up3.page.ts ***!
  \*******************************************/
/*! exports provided: SignUp3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp3Page", function() { return SignUp3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");




let SignUp3Page = class SignUp3Page {
    constructor(navCtrl, actionSheetCtrl, camera) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.className1 = 'img-mini';
        this.className2 = 'none';
        this.className3 = 'img-mini';
        this.className4 = 'none';
        this.className5 = 'img-mini';
        this.className6 = 'none';
    }
    ngOnInit() {
    }
    enviar() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
    /*IMAGEM 1*/
    escolherImagem1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Selecione a imagem',
                buttons: [
                    {
                        text: 'Câmera',
                        icon: 'camera',
                        handler: () => {
                            this.openCamera();
                            console.log('Abrindo Câmera');
                        }
                    }, {
                        text: 'Galeria',
                        icon: 'image',
                        handler: () => {
                            this.openGaleria();
                            console.log('Abrindo Galeria');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openCamera() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.cameraData1 = imageData;
            this.base64Image1 = 'data:image/jpeg;base64,' + imageData;
            this.className1 = 'none';
            this.className2 = 'img-mini';
        }, (err) => {
            // Handle error
        });
    }
    openGaleria() {
        const options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.cameraData1 = imageData;
            this.base64Image1 = 'data:image/jpeg;base64,' + imageData;
            this.className1 = 'none';
            this.className2 = 'img-mini';
        }, (err) => {
            // Handle error
        });
    }
    /*IMAGEM 2*/
    escolherImagem2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Selecione a imagem',
                buttons: [
                    {
                        text: 'Câmera',
                        icon: 'camera',
                        handler: () => {
                            this.openCamera2();
                            console.log('Abrindo Câmera');
                        }
                    }, {
                        text: 'Galeria',
                        icon: 'image',
                        handler: () => {
                            this.openGaleria2();
                            console.log('Abrindo Galeria');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openCamera2() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.cameraData2 = imageData;
            this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
            this.className3 = 'none';
            this.className4 = 'img-mini';
        }, (err) => {
            // Handle error
        });
    }
    openGaleria2() {
        const options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.cameraData2 = imageData;
            this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
            this.className3 = 'none';
            this.className4 = 'img-mini';
        }, (err) => {
            // Handle error
        });
    }
    /*IMAGEM 3*/
    escolherImagem3() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Selecione a imagem',
                buttons: [
                    {
                        text: 'Câmera',
                        icon: 'camera',
                        handler: () => {
                            this.openCamera3();
                            console.log('Abrindo Câmera');
                        }
                    }, {
                        text: 'Galeria',
                        icon: 'image',
                        handler: () => {
                            this.openGaleria3();
                            console.log('Abrindo Galeria');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openCamera3() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.cameraData3 = imageData;
            this.base64Image3 = 'data:image/jpeg;base64,' + imageData;
            this.className5 = 'none';
            this.className6 = 'img-mini';
        }, (err) => {
            // Handle error
        });
    }
    openGaleria3() {
        const options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.cameraData3 = imageData;
            this.base64Image3 = 'data:image/jpeg;base64,' + imageData;
            this.className5 = 'none';
            this.className6 = 'img-mini';
        }, (err) => {
            // Handle error
        });
    }
};
SignUp3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }
];
SignUp3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up3/sign-up3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up3.page.scss */ "./src/app/sign-up3/sign-up3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]])
], SignUp3Page);



/***/ })

}]);
//# sourceMappingURL=sign-up3-sign-up3-module-es2015.js.map