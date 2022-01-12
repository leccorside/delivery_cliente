(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Registre-se</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<!--<div class=\"profile_container d-flex\">\r\n\t\t<ion-icon class=\"zmdi zmdi-image\"></ion-icon>\r\n\t\t<div class=\"img_box center_img\">\r\n\t\t\t<img src=\"assets/images/profile_pic_placeholder.png\" class=\"crop_img\"> \r\n\t\t</div>\r\n\t\t<ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\r\n\t</div>-->\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\r\n\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">Nome completo</ion-label>\r\n\t\t\t\t\t<ion-input type=\"text\" value=\"\" placeholder=\"Nome completo\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"floating\" style=\"color: #999;\">CPF</ion-label>\r\n\t\t\t\t<ion-input\r\n\t\t\t\ttype=\"tel\"\r\n\t\t\t\tonkeypress=\"mascara(this, cpf)\"\r\n\t\t\t\t[(ngModel)]=\"cpf\"\r\n\t\t\t\tmaxlength=\"14\" \r\n\t\t\t\tplaceholder=\"000.000.000-00\"></ion-input>\r\n\t\t\t  </ion-item>\r\n\t\t  \r\n\t\t\t  <ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"floating\" style=\"color: #999;\">CNPJ</ion-label>\r\n\t\t\t\t<ion-input\r\n\t\t\t\ttype=\"tel\"\r\n\t\t\t\tonkeypress=\"mascara(this, cnpj)\"\r\n\t\t\t\t[(ngModel)]=\"cnpj\"\r\n\t\t\t\tmaxlength=\"18\" \r\n\t\t\t\tplaceholder=\"00.000.000/0000-00\"></ion-input>\r\n\t\t\t  </ion-item>\r\n\t\t\t<!--<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'select_country' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-select mode=\"md\" placeholder=\"{{'select_country_from_list' | translate}}\" interface=\"action-sheet\">\r\n\t\t\t\t\t\t<ion-select-option value=\"1\">Brazil</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"2\">India</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"3\">Ireland</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"4\">Japan</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"5\">Kenya</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"6\">Latvia</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"7\">Martinique</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"8\">Mexico</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"9\">Monaco</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"10\">Nepal</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>-->\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"floating\" style=\"color: #999;\" color=\"primary\">Celular</ion-label>\r\n\t\t\t\t<ion-input\r\n\t\t\t\ttype=\"tel\"\r\n\t\t\t\tonkeypress=\"mascara(this, telefone2)\"\r\n\t\t\t\t[(ngModel)]=\"celular\"\r\n\t\t\t\tmaxlength=\"15\" \r\n\t\t\t\tplaceholder=\"(00)00000-0000\"></ion-input>\r\n\t\t\t  </ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">Senha</ion-label>\r\n\t\t\t\t\t<ion-input type=\"password\" value=\"\" placeholder=\"Senha\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">Confirme a Senha</ion-label>\r\n\t\t\t\t\t<ion-input type=\"password\" value=\"\" placeholder=\"Senha\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"  class=\"btn\" (click)=\"continue()\">Continuar</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/sign-up/sign-up-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");








let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignUpPageRoutingModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_7__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\nion-content {\n  border-radius: 0 !important;\n  --background: #fff !important;\n}\n\nion-content::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background: var(--white);\n  border-radius: 33px 0 0 0;\n  top: 10px;\n}\n\n.form {\n  top: 30px;\n}\n\n.profile_container {\n  padding: 22px 20px;\n  margin-bottom: 45px;\n}\n\n.profile_container ion-icon {\n  color: var(--primary);\n  margin: 0 auto;\n  font-size: 2rem;\n  margin-top: 30px;\n}\n\n.profile_container .img_box {\n  min-width: 115px;\n  height: 115px;\n  background: var(--bg-color);\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\nion-footer {\n  background: var(--white);\n}\n\nion-footer .button.btn {\n  --border-radius: 33px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9DOlxcaW9uaWNcXGNvdXJpZXJfYy9zcmNcXGFwcFxcc2lnbi11cFxcc2lnbi11cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQywyQkFBQTtFQUNBLDZCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FER0E7RUFDQyxTQUFBO0FDQUQ7O0FER0E7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FDQUQ7O0FERUM7RUFDQyxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREY7O0FES0E7RUFDQyx3QkFBQTtBQ0ZEOztBREdDO0VBQ0MsMkJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxLjU2cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHRib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcblx0LS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcblxyXG5cdCY6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XHJcblx0XHR0b3A6IDEwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uZm9ybXtcclxuXHR0b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX2NvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMjJweCAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcblxyXG5cdGlvbi1pY29uIHtcclxuXHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0Zm9udC1zaXplOiAycmVtO1xyXG5cdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHR9XHJcblxyXG5cdC5pbWdfYm94IHtcclxuXHRcdG1pbi13aWR0aDogMTE1cHg7XHJcblx0XHRoZWlnaHQ6IDExNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHQuYnV0dG9uLmJ0bntcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uZm9ybSB7XG4gIHRvcDogMzBweDtcbn1cblxuLnByb2ZpbGVfY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjJweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLnByb2ZpbGVfY29udGFpbmVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnByb2ZpbGVfY29udGFpbmVyIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWZvb3RlciAuYnV0dG9uLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SignUpPage = class SignUpPage {
    constructor(route) {
        this.route = route;
        this.cpf = "";
        this.cnpj = "";
        this.celular = "";
    }
    ngOnInit() {
    }
    continue() {
        this.route.navigate(['./sign-up3']);
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map