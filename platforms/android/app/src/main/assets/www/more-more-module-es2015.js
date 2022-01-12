(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-more-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>{{'account' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n\t<div class=\"profile_box d-flex\" (click)=\"view_profile()\">\r\n\t\t<div class=\"img_box center_img\">\r\n\t\t\t<img src=\"assets/images/profile.png\" class=\"crop_img\">\r\n\t\t</div>\r\n\t\t<div class=\"text_box\">\r\n\t\t\t<h2>Samantha Smith</h2>\r\n\t\t\t<p>{{'view_profile' | translate}}</p>\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item (click)=\"saved_addresses()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'saved_addresses' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'save_address_for_quick_process' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<ion-item (click)=\"contact_us()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'contact_us' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'contact_us_for_any_query_issue' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item (click)=\"change_language()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-globe ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'change_language' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'select_language' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item (click)=\"terms_conditions()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-assignment ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'terms_conditions' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'know_our_terms_conditions' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-arrow-split ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'share_app' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'share_with_friends_famill' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item (click)=\"logout()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-sign-in ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'logout' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'signout_form_current_account' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n\r\n\t<div *ngIf=\"config.showBuyPromt\" (click)=\"buyAppAction()\" class=\"buy_this_app\">\r\n\t\t<h2>\r\n\t\t\t<ion-icon class=\"zmdi zmdi-shopping-cart\"></ion-icon>\r\n\t\t\t{{\"buy_this_app\" | translate}}\r\n\t\t</h2>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/more/more-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/more/more-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageRoutingModule", function() { return MorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more.page */ "./src/app/more/more.page.ts");




const routes = [
    {
        path: '',
        component: _more_page__WEBPACK_IMPORTED_MODULE_3__["MorePage"]
    }
];
let MorePageRoutingModule = class MorePageRoutingModule {
};
MorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MorePageRoutingModule);



/***/ }),

/***/ "./src/app/more/more.module.ts":
/*!*************************************!*\
  !*** ./src/app/more/more.module.ts ***!
  \*************************************/
/*! exports provided: MorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _more_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-routing.module */ "./src/app/more/more-routing.module.ts");
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more.page */ "./src/app/more/more.page.ts");








let MorePageModule = class MorePageModule {
};
MorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _more_routing_module__WEBPACK_IMPORTED_MODULE_6__["MorePageRoutingModule"]
        ],
        declarations: [_more_page__WEBPACK_IMPORTED_MODULE_7__["MorePage"]]
    })
], MorePageModule);



/***/ }),

/***/ "./src/app/more/more.page.scss":
/*!*************************************!*\
  !*** ./src/app/more/more.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  padding: 0 25px !important;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\nion-header .profile_box {\n  padding: 27px 25px 25px 25px !important;\n}\nion-header .profile_box .img_box {\n  min-width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  margin-right: 15px;\n}\nion-header .profile_box .text_box {\n  color: var(--white);\n}\nion-header .profile_box .text_box h2 {\n  margin: 0;\n  font-size: 1.4rem;\n  letter-spacing: 0.7px;\n  padding-bottom: 2px;\n}\nion-header .profile_box .text_box p {\n  margin: 0;\n  opacity: 0.6;\n  font-weight: 500;\n  font-size: 0.95rem;\n  letter-spacing: 0.7px;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 45px 34px 19px 34px;\n  padding-bottom: 50px;\n}\nion-list ion-item {\n  padding: 0;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  margin-bottom: 38px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-start;\n}\nion-list ion-item .item_inner ion-icon {\n  color: var(--primary);\n  font-size: 1.6rem;\n  position: relative;\n  min-width: 48px;\n  display: block;\n  top: 3px;\n}\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 700;\n  font-size: 1.5rem;\n  letter-spacing: 0;\n  padding-bottom: 11px;\n}\nion-list ion-item .item_inner p {\n  color: var(--text-light);\n  margin: 0;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n}\n.buy_this_app {\n  background: var(--primary);\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  min-width: 155px;\n  z-index: 99999;\n  box-shadow: 0 10px 18px -4px rgba(0, 0, 0, 0.2);\n}\n.buy_this_app h2 {\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n.buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS9DOlxcaW9uaWNcXGNvdXJpZXJfYy9zcmNcXGFwcFxcbW9yZVxcbW9yZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vcmUvbW9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQywwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdDO0VBRUMsdUNBQUE7QUNGRjtBRElFO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRkg7QURLRTtFQUNDLG1CQUFBO0FDSEg7QURLRztFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE9HO0VBQ0MsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNMSjtBRFdBO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ1JEO0FEVUM7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNSRjtBRFVFO0VBQ0MsV0FBQTtFQUNBLHVCQUFBO0FDUkg7QURVRztFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ1JKO0FEV0c7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1RKO0FEWUc7RUFDQyx3QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEZ0JBO0VBQ0MsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQ2JEO0FEZUM7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDYkY7QURlRTtFQUNDLGVBQUE7RUFDQSxlQUFBO0FDYkgiLCJmaWxlIjoic3JjL2FwcC9tb3JlL21vcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblx0aW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuXHRcdHBhZGRpbmc6IDAgMjVweCAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdH1cclxuXHJcblx0LnByb2ZpbGVfYm94IHtcclxuXHJcblx0XHRwYWRkaW5nOiAyN3B4IDI1cHggMjVweCAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG5cdFx0LmltZ19ib3gge1xyXG5cdFx0XHRtaW4td2lkdGg6IDY4cHg7XHJcblx0XHRcdGhlaWdodDogNjhweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRleHRfYm94IHtcclxuXHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcblx0XHRcdGgyIHtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC43cHg7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDJweDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHAge1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRvcGFjaXR5OiAuNjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAuN3B4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDQ1cHggMzRweCAxOXB4IDM0cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcblxyXG5cdGlvbi1pdGVtIHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHQtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzhweDtcclxuXHJcblx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcblx0XHRcdGlvbi1pY29uIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjZyZW07XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdG1pbi13aWR0aDogNDhweDtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHR0b3A6IDNweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDIge1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMDtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTFweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cCB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmJ1eV90aGlzX2FwcCB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMjBweDtcclxuXHRyaWdodDogMjBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdGhlaWdodDogNTJweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWluLXdpZHRoOiAxNTVweDtcclxuXHR6LWluZGV4OiA5OTk5OTtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcblx0aDIge1xyXG5cdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cclxuXHRcdGlvbi1pY29uIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRtaW4td2lkdGg6IDI0cHg7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDI1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2JveCB7XG4gIHBhZGRpbmc6IDI3cHggMjVweCAyNXB4IDI1cHggIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGVfYm94IC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDY4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuaW9uLWhlYWRlciAucHJvZmlsZV9ib3ggLnRleHRfYm94IHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGVfYm94IC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGVfYm94IC50ZXh0X2JveCBwIHtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDQ1cHggMzRweCAxOXB4IDM0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogNDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idXlfdGhpc19hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTU1cHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3gtc2hhZG93OiAwIDEwcHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5idXlfdGhpc19hcHAgaDIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYnV5X3RoaXNfYXBwIGgyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtaW4td2lkdGg6IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/more/more.page.ts":
/*!***********************************!*\
  !*** ./src/app/more/more.page.ts ***!
  \***********************************/
/*! exports provided: MorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePage", function() { return MorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");





let MorePage = class MorePage {
    constructor(config, route, navCtrl) {
        this.config = config;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    view_profile() {
        this.route.navigate(['./my-profile']);
    }
    saved_addresses() {
        this.route.navigate(['./saved-addresses']);
    }
    contact_us() {
        this.route.navigate(['./contact-us']);
    }
    change_language() {
        this.route.navigate(['./change-language']);
    }
    terms_conditions() {
        this.route.navigate(['./terms-conditions']);
    }
    logout() {
        this.navCtrl.navigateRoot(['./sign-in']);
    }
    buyAppAction() {
        window.open("https://bit.ly/cc_CourierOne", '_system', 'location=no');
    }
};
MorePage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
MorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./more.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./more.page.scss */ "./src/app/more/more.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], MorePage);



/***/ })

}]);
//# sourceMappingURL=more-more-module-es2015.js.map