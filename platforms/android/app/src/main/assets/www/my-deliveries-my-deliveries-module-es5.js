function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-deliveries-my-deliveries-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-deliveries/my-deliveries.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-deliveries/my-deliveries.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyDeliveriesMyDeliveriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>{{'my_deliveries' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'pending_deliveries' | translate}}</h2>\r\n\r\n\t\t<ion-item class=\"pending item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/courier.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Courier</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'pickup_arranged' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">20 Jun 2020, 11:40 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 8.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>Emili Williamson</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<ion-item class=\"pending item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'pickup_arranged' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">20 Jun 2020, 11:35 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 6.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>Silver Leaf Restaurant</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<h2>{{'past_deliveries' | translate}}</h2>\r\n\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\r\n\t</ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: MyDeliveriesPageRoutingModule */

  /***/
  function srcAppMyDeliveriesMyDeliveriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDeliveriesPageRoutingModule", function () {
      return MyDeliveriesPageRoutingModule;
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


    var _my_deliveries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-deliveries.page */
    "./src/app/my-deliveries/my-deliveries.page.ts");

    var routes = [{
      path: '',
      component: _my_deliveries_page__WEBPACK_IMPORTED_MODULE_3__["MyDeliveriesPage"]
    }];

    var MyDeliveriesPageRoutingModule = function MyDeliveriesPageRoutingModule() {
      _classCallCheck(this, MyDeliveriesPageRoutingModule);
    };

    MyDeliveriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyDeliveriesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries.module.ts ***!
    \*******************************************************/

  /*! exports provided: MyDeliveriesPageModule */

  /***/
  function srcAppMyDeliveriesMyDeliveriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDeliveriesPageModule", function () {
      return MyDeliveriesPageModule;
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


    var _my_deliveries_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-deliveries-routing.module */
    "./src/app/my-deliveries/my-deliveries-routing.module.ts");
    /* harmony import */


    var _my_deliveries_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-deliveries.page */
    "./src/app/my-deliveries/my-deliveries.page.ts");

    var MyDeliveriesPageModule = function MyDeliveriesPageModule() {
      _classCallCheck(this, MyDeliveriesPageModule);
    };

    MyDeliveriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_deliveries_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyDeliveriesPageRoutingModule"]],
      declarations: [_my_deliveries_page__WEBPACK_IMPORTED_MODULE_7__["MyDeliveriesPage"]]
    })], MyDeliveriesPageModule);
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyDeliveriesMyDeliveriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 25px !important;\n  font-size: 1.4rem;\n  text-align: center;\n  font-weight: 500;\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 14px 6px 0px 6px;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  padding: 9px 6px 16px 6px;\n}\n\nion-list ion-item {\n  padding: 0;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  margin-bottom: 12px;\n  background: var(--white);\n  border-radius: 8px;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n  overflow: hidden;\n}\n\nion-list ion-item .item_inner .item_header {\n  padding: 10px 13px 7px 13px;\n}\n\nion-list ion-item .item_inner .item_header .img_box {\n  width: 48px;\n  min-width: 48px;\n  margin-right: 10px;\n}\n\nion-list ion-item .item_inner .item_header .text_box {\n  width: 100%;\n  overflow: hidden;\n}\n\nion-list ion-item .item_inner .item_header .text_box h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-black);\n}\n\nion-list ion-item .item_inner .item_header .text_box h3 span.item_title {\n  width: 100%;\n  max-width: calc(100% - 131px);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\nion-list ion-item .item_inner .item_header .text_box h3 span.status {\n  min-width: 125px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n}\n\nion-list ion-item .item_inner .item_header .text_box p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n}\n\nion-list ion-item .item_inner .item_header .text_box p span.price {\n  min-width: 70px;\n}\n\nion-list ion-item .item_inner .item_footer {\n  background: var(--bg-color);\n  padding: 13px 13px 12px 13px;\n}\n\nion-list ion-item .item_inner .item_footer h4 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 0.87rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  min-width: 35%;\n  max-height: 35%;\n}\n\nion-list ion-item .item_inner .item_footer h5 {\n  margin: 0;\n  min-width: 30%;\n  max-height: 30%;\n}\n\nion-list ion-item .item_inner .item_footer h5 .icon_container {\n  display: flex;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n\nion-list ion-item .item_inner .item_footer h5 ion-icon {\n  color: var(--primary);\n  font-size: 1.3rem;\n  display: block;\n}\n\nion-list ion-item .item_inner .item_footer h5 span.dotted_icon {\n  background: var(--text-light);\n  display: block;\n  min-width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  margin: 0 1px;\n}\n\nion-list ion-item.pending .item_inner .item_header .text_box h3 span.status {\n  color: var(--primary);\n}\n\nion-list ion-item.past .item_inner .item_header .text_box h3 span.status {\n  color: var(--text-dark);\n  font-weight: 600;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZGVsaXZlcmllcy9DOlxcaW9uaWNcXGNvdXJpZXJfYy9zcmNcXGFwcFxcbXktZGVsaXZlcmllc1xcbXktZGVsaXZlcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL215LWRlbGl2ZXJpZXMvbXktZGVsaXZlcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQywwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNERDs7QURHQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElDO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElFO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FDRkg7O0FESUc7RUFDQywyQkFBQTtBQ0ZKOztBRElJO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZMOztBREtJO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FDSEw7O0FES0s7RUFDQyxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNITjs7QURNTztFQUNDLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0pSOztBRE9PO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNMUjs7QURVSztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDUk47O0FEV087RUFDQyxlQUFBO0FDVFI7O0FEZ0JHO0VBQ0MsMkJBQUE7RUFDQSw0QkFBQTtBQ2RKOztBRGdCSTtFQUNDLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDZEw7O0FEaUJJO0VBQ0MsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDZkw7O0FEaUJLO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQ2ZOOztBRGtCSztFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDaEJOOztBRG9CTTtFQUNDLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDbEJQOztBRDZCSztFQUNDLHFCQUFBO0FDM0JOOztBRHFDSztFQUNDLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ25DTiIsImZpbGUiOiJzcmMvYXBwL215LWRlbGl2ZXJpZXMvbXktZGVsaXZlcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHRpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdFx0cGFkZGluZzogMCAyNXB4ICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDEuNHJlbTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0fVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDE0cHggNnB4IDBweCA2cHg7XHJcblxyXG5cdGgyIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdHBhZGRpbmc6IDlweCA2cHggMTZweCA2cHg7XHJcblx0fVxyXG5cclxuXHRpb24taXRlbSB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0LS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG5cdFx0Lml0ZW1faW5uZXIge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0XHRcdC5pdGVtX2hlYWRlciB7XHJcblx0XHRcdFx0cGFkZGluZzogMTBweCAxM3B4IDdweCAxM3B4O1xyXG5cclxuXHRcdFx0XHQuaW1nX2JveCB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDhweDtcclxuXHRcdFx0XHRcdG1pbi13aWR0aDogNDhweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC50ZXh0X2JveCB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdFx0XHRcdFx0aDMge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcblxyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHQmLml0ZW1fdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEzMXB4KTtcclxuXHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQmLnN0YXR1cyB7XHJcblx0XHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDEyNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLjVweDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblxyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHQmLnByaWNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogNzBweDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pdGVtX2Zvb3RlciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEzcHggMTNweCAxMnB4IDEzcHg7XHJcblxyXG5cdFx0XHRcdGg0IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjg3cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHRcdG1pbi13aWR0aDogMzUlO1xyXG5cdFx0XHRcdFx0bWF4LWhlaWdodDogMzUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aDUge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiAzMCU7XHJcblx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAzMCU7XHJcblxyXG5cdFx0XHRcdFx0Lmljb25fY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjNyZW07XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0XHQmLmRvdHRlZF9pY29uIHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDNweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIDFweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCYucGVuZGluZyB7XHJcblx0XHRcdC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggaDMge1xyXG5cclxuXHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdCYuc3RhdHVzIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cdFxyXG5cdFx0Ji5wYXN0IHtcclxuXHRcdFx0Lml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyB7XHJcblxyXG5cdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0Ji5zdGF0dXMge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMjVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE0cHggNnB4IDBweCA2cHg7XG59XG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDlweCA2cHggMTZweCA2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDEzcHggN3B4IDEzcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLmltZ19ib3gge1xuICB3aWR0aDogNDhweDtcbiAgbWluLXdpZHRoOiA0OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyBzcGFuLml0ZW1fdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMzFweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyBzcGFuLnN0YXR1cyB7XG4gIG1pbi13aWR0aDogMTI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IHAgc3Bhbi5wcmljZSB7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgcGFkZGluZzogMTNweCAxM3B4IDEycHggMTNweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoNCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAzNSU7XG4gIG1heC1oZWlnaHQ6IDM1JTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoNSB7XG4gIG1hcmdpbjogMDtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIG1heC1oZWlnaHQ6IDMwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoNSAuaWNvbl9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGg1IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDUgc3Bhbi5kb3R0ZWRfaWNvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbGlnaHQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCAxcHg7XG59XG5pb24tbGlzdCBpb24taXRlbS5wZW5kaW5nIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggaDMgc3Bhbi5zdGF0dXMge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24tbGlzdCBpb24taXRlbS5wYXN0IC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggaDMgc3Bhbi5zdGF0dXMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries.page.ts ***!
    \*****************************************************/

  /*! exports provided: MyDeliveriesPage */

  /***/
  function srcAppMyDeliveriesMyDeliveriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDeliveriesPage", function () {
      return MyDeliveriesPage;
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

    var MyDeliveriesPage = /*#__PURE__*/function () {
      function MyDeliveriesPage(route) {
        _classCallCheck(this, MyDeliveriesPage);

        this.route = route;
      }

      _createClass(MyDeliveriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "track_delivery",
        value: function track_delivery() {
          this.route.navigate(['./track-delivery']);
        }
      }]);

      return MyDeliveriesPage;
    }();

    MyDeliveriesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MyDeliveriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-deliveries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-deliveries.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-deliveries/my-deliveries.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-deliveries.page.scss */
      "./src/app/my-deliveries/my-deliveries.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MyDeliveriesPage);
    /***/
  }
}]);
//# sourceMappingURL=my-deliveries-my-deliveries-module-es5.js.map