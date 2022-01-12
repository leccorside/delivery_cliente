(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["height-weight-lenght-height-weight-lenght-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/height-weight-lenght/height-weight-lenght.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/height-weight-lenght/height-weight-lenght.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'courier_info' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<div class=\"banner\">\r\n\t\t<h2 class=\"ion-text-center\">{{'select_measurements' | translate}}</h2>\r\n\t\t<img src=\"assets/images/box.png\">\r\n\t\t<h3 class=\"ion-text-end lenght\">\r\n\t\t\t<span>{{'lenght' | translate}}</span>\r\n\t\t\t<strong> 124 cm </strong>\r\n\t\t</h3>\r\n\t\t<h3 class=\"ion-text-center width\">\r\n\t\t\t<span>{{'width' | translate}}</span>\r\n\t\t\t<strong> 75 cm </strong>\r\n\t\t</h3>\r\n\t\t<h3 class=\"ion-text-center height\">\r\n\t\t\t<span>{{'height' | translate}}</span>\r\n\t\t\t<strong>60 cm </strong>\r\n\t\t</h3>\r\n\t</div>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\">{{'width' | translate}} <span class=\"end\">75 cm</span></h2>\r\n\t\t\t\t<ion-range mode=\"md\" min=\"-50\" max=\"90\"></ion-range>\r\n\t\t\t\t<h3 class=\"d-flex\">0 cm <span class=\"end\">1000 cm</span></h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\">{{'lenght' | translate}} <span class=\"end\">124 cm</span></h2>\r\n\t\t\t\t<ion-range mode=\"md\" min=\"-20\" max=\"200\"></ion-range>\r\n\t\t\t\t<h3 class=\"d-flex\">0 cm <span class=\"end\">1000 cm</span></h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\">{{'height' | translate}} <span class=\"end\">60 cm</span></h2>\r\n\t\t\t\t<ion-range mode=\"md\" min=\"-60\" max=\"85\"></ion-range>\r\n\t\t\t\t<h3 class=\"d-flex\">0 cm <span class=\"end\">1000 cm</span></h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"  class=\"btn\">{{'done' | translate}}</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/height-weight-lenght/height-weight-lenght-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/height-weight-lenght/height-weight-lenght-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HeightWeightLenghtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightWeightLenghtPageRoutingModule", function() { return HeightWeightLenghtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./height-weight-lenght.page */ "./src/app/height-weight-lenght/height-weight-lenght.page.ts");




const routes = [
    {
        path: '',
        component: _height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_3__["HeightWeightLenghtPage"]
    }
];
let HeightWeightLenghtPageRoutingModule = class HeightWeightLenghtPageRoutingModule {
};
HeightWeightLenghtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HeightWeightLenghtPageRoutingModule);



/***/ }),

/***/ "./src/app/height-weight-lenght/height-weight-lenght.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/height-weight-lenght/height-weight-lenght.module.ts ***!
  \*********************************************************************/
/*! exports provided: HeightWeightLenghtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightWeightLenghtPageModule", function() { return HeightWeightLenghtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _height_weight_lenght_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./height-weight-lenght-routing.module */ "./src/app/height-weight-lenght/height-weight-lenght-routing.module.ts");
/* harmony import */ var _height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./height-weight-lenght.page */ "./src/app/height-weight-lenght/height-weight-lenght.page.ts");








let HeightWeightLenghtPageModule = class HeightWeightLenghtPageModule {
};
HeightWeightLenghtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _height_weight_lenght_routing_module__WEBPACK_IMPORTED_MODULE_6__["HeightWeightLenghtPageRoutingModule"]
        ],
        declarations: [_height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_7__["HeightWeightLenghtPage"]]
    })
], HeightWeightLenghtPageModule);



/***/ }),

/***/ "./src/app/height-weight-lenght/height-weight-lenght.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/height-weight-lenght/height-weight-lenght.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--bg-color);\n}\n\n.banner {\n  padding-top: 21px;\n  position: relative;\n  overflow: hidden;\n  width: 300px;\n  margin: 0 auto;\n  height: 310px;\n}\n\n.banner h2 {\n  margin: 0;\n  padding-bottom: 56px;\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: var(--text-black);\n}\n\n.banner img {\n  display: block;\n  margin: 0 auto;\n  width: 160px;\n}\n\n.banner h3 {\n  position: absolute;\n  color: var(--text-black);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0;\n  font-size: 0.85rem;\n}\n\n.banner h3 strong {\n  display: block;\n  color: var(--primary);\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.banner h3.lenght {\n  left: 0;\n  bottom: 38px;\n}\n\n.banner h3.width {\n  right: -28px;\n  left: 0;\n  margin: 0 auto;\n  bottom: 0;\n}\n\n.banner h3.height {\n  right: 0;\n  bottom: 96px;\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 40px;\n}\n\nion-list ion-item {\n  padding: 14px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  background: var(--white);\n  --min-height: unset;\n  margin-bottom: 5px;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h2 {\n  color: var(--text-dark);\n  font-size: 1rem;\n  width: calc(100% - 25px);\n  margin: 0 auto;\n}\n\nion-list ion-item .item_inner h2 span {\n  color: var(--primary);\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner ion-range {\n  padding-top: 0;\n  padding-bottom: 0;\n  --bar-background: var(--text-light);\n  --bar-background-active: var(--text-light);\n  --knob-background: var(--primary);\n}\n\nion-footer {\n  background: var(--bg-color);\n}\n\nion-footer .button.btn {\n  --border-radius: 0px 33px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVpZ2h0LXdlaWdodC1sZW5naHQvQzpcXGlvbmljXFxjb3VyaWVyX2Mvc3JjXFxhcHBcXGhlaWdodC13ZWlnaHQtbGVuZ2h0XFxoZWlnaHQtd2VpZ2h0LWxlbmdodC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hlaWdodC13ZWlnaHQtbGVuZ2h0L2hlaWdodC13ZWlnaHQtbGVuZ2h0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRDs7QURDQztFQUNDLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVDO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0M7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDREY7O0FER0U7RUFDQyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREg7O0FESUU7RUFDQyxPQUFBO0VBQ0EsWUFBQTtBQ0ZIOztBREtFO0VBQ0MsWUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0hIOztBRE9FO0VBQ0MsUUFBQTtFQUNBLFlBQUE7QUNMSDs7QURXQTtFQUNDLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1JEOztBRFVDO0VBQ0MsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURVRTtFQUNDLFdBQUE7QUNSSDs7QURVRztFQUNDLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ1JKOztBRFVJO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUkw7O0FEWUc7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURhRztFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtBQ1hKOztBRGtCQTtFQUNDLDJCQUFBO0FDZkQ7O0FEaUJDO0VBQ0MsNkJBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL2hlaWdodC13ZWlnaHQtbGVuZ2h0L2hlaWdodC13ZWlnaHQtbGVuZ2h0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcblx0cGFkZGluZy10b3A6IDIxcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6IDMwMHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGhlaWdodDogMzEwcHg7XHJcblxyXG5cdGgyIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHR9XHJcblxyXG5cdGltZyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0d2lkdGg6IDE2MHB4O1xyXG5cdH1cclxuXHJcblx0aDMge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG5cdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAuODVyZW07XHJcblxyXG5cdFx0c3Ryb25nIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5sZW5naHQge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRib3R0b206IDM4cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji53aWR0aCB7XHJcblx0XHRcdHJpZ2h0OiAtMjhweDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ji5oZWlnaHQge1xyXG5cdFx0XHRyaWdodDogMDtcclxuXHRcdFx0Ym90dG9tOiA5NnB4O1xyXG5cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzogMTRweDtcclxuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG5cdFx0Lml0ZW1faW5uZXIge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdGgyIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDMge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHRmb250LXNpemU6IC43NXJlbTtcclxuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aW9uLXJhbmdlIHtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMDtcclxuXHRcdFx0XHQtLWJhci1iYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHQtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0LS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG5cclxuXHQuYnV0dG9uLmJ0biB7XHJcblx0XHQtLWJvcmRlci1yYWRpdXM6IDBweCAzM3B4IDAgMDtcclxuXHR9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuXG4uYmFubmVyIHtcbiAgcGFkZGluZy10b3A6IDIxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMTBweDtcbn1cbi5iYW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbi5iYW5uZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTYwcHg7XG59XG4uYmFubmVyIGgzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG4uYmFubmVyIGgzIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmJhbm5lciBoMy5sZW5naHQge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDM4cHg7XG59XG4uYmFubmVyIGgzLndpZHRoIHtcbiAgcmlnaHQ6IC0yOHB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm90dG9tOiAwO1xufVxuLmJhbm5lciBoMy5oZWlnaHQge1xuICByaWdodDogMDtcbiAgYm90dG9tOiA5NnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxNHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJhbmdlIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICAtLWJhci1iYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLXRleHQtbGlnaHQpO1xuICAtLWtub2ItYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG59XG5pb24tZm9vdGVyIC5idXR0b24uYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHggMzNweCAwIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/height-weight-lenght/height-weight-lenght.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/height-weight-lenght/height-weight-lenght.page.ts ***!
  \*******************************************************************/
/*! exports provided: HeightWeightLenghtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightWeightLenghtPage", function() { return HeightWeightLenghtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeightWeightLenghtPage = class HeightWeightLenghtPage {
    constructor() { }
    ngOnInit() {
    }
};
HeightWeightLenghtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-height-weight-lenght',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./height-weight-lenght.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/height-weight-lenght/height-weight-lenght.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./height-weight-lenght.page.scss */ "./src/app/height-weight-lenght/height-weight-lenght.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeightWeightLenghtPage);



/***/ })

}]);
//# sourceMappingURL=height-weight-lenght-height-weight-lenght-module-es2015.js.map