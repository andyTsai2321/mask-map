(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-view-wrap\" (window:resize)=\"onResize($event)\">\n  <app-left-side [ngClass]=\"{'left-side-open': mainService.leftSideOpen, 'left-side-hide': !mainService.leftSideOpen}\"></app-left-side>\n  <app-map></app-map>\n</div>\n\n<app-footer></app-footer>\n\n<div class=\"float-functions\">\n  <div class=\"float-functions-wrap\" (click)=\"mainService.toggleLeftSide()\">\n    <i class=\"fas fa-search\"></i>\n  </div>\n  <div class=\"float-functions-wrap\" (click)=\"goNews()\">\n    <i class=\"far fa-newspaper\"></i>\n  </div>\n</div>\n\n<div class=\"new-wrap\" (click)=\"goNews()\">\n  <img src=\"assets/images/icons/chat.svg\" alt=\"\">\n  <span class=\"news\">NEWS</span>\n</div>\n\n<div [hidden]=\"!mainService.loading\">\n  <app-loading></app-loading>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"footer-wrap\">\n    <div>\n      資料更新時間\n      <ng-container *ngIf=\"mainService.isMobile; else fullTime\">\n        {{ mainService.updateTime | date:'h:mm:ss a'}}\n      </ng-container>\n\n      <ng-template #fullTime>\n        {{ mainService.updateTime | date:'MMM d, y, h:mm:ss a'}}\n      </ng-template>\n\n    </div>\n    <div>\n      Andy Tsai 口罩地圖\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-side/left-side.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/left-side/left-side.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"left-side-container\">\n  <div class=\"filter-wrap\">\n    <div class=\"search-input-container\">\n      <div class=\"search-input-wrap\">\n        <input class=\"search-input\" (keyup.enter)=\"startSearch()\"\n          [(ngModel)]=\"searchValue\"\n          placeholder=\"搜尋縣市、地址、藥局名等\" type=\"text\">\n        <i class=\"fas fa-search\" (click)=\"startSearch()\"></i>\n      </div>\n      <div *ngIf=\"mainService.isMobile\" class=\"leftSide-close\"\n        (click)=\"mainService.toggleLeftSide()\">\n        <i class=\"fas fa-times\"></i>\n      </div>\n    </div>\n\n\n    <!-- <span class=\"remind-text\">搜尋所在縣市、地址、藥局名稱</span> -->\n\n    <div class=\"mask-filter-wrap dropdown\">\n      <div class=\"my-favorite\" [class.active]=\"currentList === 'favorite'\" (click)=\"showFavorite()\">\n        <i class=\"fas fa-star\"></i>\n      </div>\n      <span>需求口罩選擇：</span>\n      <div class=\"mask-filter\">\n        <div (click)=\"maskFilterToggle()\" class=\"dropbtn\">\n          {{maskOption}}\n          <i class=\"fas fa-sort-down\"></i>\n        </div>\n        <div *ngIf=\"maskFilterShow\" class=\"dropdown-content\">\n          <div *ngIf=\"maskOption !== '全部'\" (click)=\"setMaskOption('全部')\">全部</div>\n          <div *ngIf=\"maskOption !== '成人口罩'\" (click)=\"setMaskOption('成人口罩')\">成人口罩</div>\n          <div *ngIf=\"maskOption !== '兒童口罩'\" (click)=\"setMaskOption('兒童口罩')\">兒童口罩</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"search-result-container\">\n\n    <div class=\"w100 text-align-center\" *ngIf=\"errorStr !== ''\">{{errorStr}}</div>\n\n    <ng-container *ngIf=\"currentList === 'all'\">\n      <ng-container [ngTemplateOutlet]=\"resultHeading\" [ngTemplateOutletContext]=\"{item:resultList.length}\"></ng-container>\n      <ng-container *ngFor=\"let item of resultList\">\n        <ng-container [ngTemplateOutlet]=\"pharmacyList\" [ngTemplateOutletContext]=\"{item:item}\"></ng-container>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"currentList === 'favorite'\">\n      <ng-container [ngTemplateOutlet]=\"resultHeading\" [ngTemplateOutletContext]=\"{item:allFavoriteList.length}\"></ng-container>\n      <ng-container *ngFor=\"let item of allFavoriteList\">\n        <ng-container [ngTemplateOutlet]=\"pharmacyList\" [ngTemplateOutletContext]=\"{item:item}\"></ng-container>\n      </ng-container>\n    </ng-container>\n\n\n    <ng-template #resultHeading let-dataLength=\"item\">\n      <div class=\"w100 text-align-center\" *ngIf=\"dataLength !== 0\">\n        <ng-container *ngIf=\"currentList === 'favorite'; else allHeading\">\n          我關注的藥局\n        </ng-container>\n        <ng-template #allHeading>全部</ng-template>\n        共{{dataLength}}筆結果 </div>\n    </ng-template>\n\n    <ng-template #pharmacyList let-item=\"item\">\n      <div class=\"result-wrap\"\n        (click)=\"goTarget(item.geometry.coordinates[1],item.geometry.coordinates[0])\">\n        <div class=\"title\">\n          <i class=\"result-star\" [ngClass]=\"favoriteCheck(item.properties.id)\"\n            (click)=\"toggleFavorite(item.properties.id)\"></i>\n          {{item.properties.name}}\n        </div>\n\n        <div class=\"details\">\n          <div>\n            <i class=\"fas fa-map-marker-alt\"></i> {{item.properties.name}}\n          </div>\n          <div><i class=\"fas fa-phone-alt\"></i> {{item.properties.address}}\n          </div>\n          <div *ngIf=\"item.properties.note !== '-'\"><i class=\"fas\n              fa-sticky-note\"></i> {{item.properties.note}} </div>\n        </div>\n\n        <div class=\"mask-wrap\">\n          <div class=\"adult-mask-wrap\">\n            成人口罩\n            <span class=\"number\">{{item.properties.mask_adult}}</span>\n            個\n          </div>\n          <div class=\"child-mask-wrap\">\n            兒童口罩\n            <span class=\"number\">{{item.properties.mask_child}}</span>\n            個\n          </div>\n        </div>\n\n      </div>\n    </ng-template>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"load-wrap\">\n  <div class=\"load-3\">\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mapWrap\"\n     leaflet\n     [leafletOptions]=\"mapService.options\"\n     [leafletMarkerCluster]=\"mapService.markerClusterData\"\n     [leafletMarkerClusterOptions]=\"mapService.markerClusterOptions\"\n     (leafletMapReady)=\"mapService.onMapReady($event)\"\n     (leafletMarkerClusterReady)=\"mapService.markerClusterReady($event)\">\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-wrap {\n  position: absolute;\n  bottom: 45px;\n  right: 0;\n  z-index: 999;\n  cursor: pointer;\n}\n.new-wrap img {\n  width: 136px;\n  height: 116px;\n}\n.new-wrap .news {\n  position: absolute;\n  left: 32px;\n  top: 45px;\n  font-size: 24px;\n  color: #fff;\n}\n.main-view-wrap {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  height: 100vh;\n}\napp-map {\n  width: 100%;\n}\napp-left-side {\n  width: 40%;\n}\n.text-align-center {\n  text-align: center;\n}\n.w100 {\n  width: 100%;\n}\n.float-functions {\n  display: none;\n}\n.float-functions .float-functions-wrap {\n  width: 60px;\n  height: 60px;\n  background: #00D4DF;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 30px;\n}\n@media (max-width: 1024px) {\n  .left-side-hide {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n  }\n\n  .left-side-open {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n\n  .float-functions {\n    display: block;\n    position: absolute;\n    bottom: 56px;\n    right: 19px;\n    display: -webkit-box;\n    display: flex;\n    z-index: 450;\n  }\n  .float-functions .float-functions-wrap:not(:last-child) {\n    margin-right: 10px;\n  }\n\n  app-map {\n    width: 100%;\n  }\n\n  app-left-side {\n    width: 100%;\n    position: absolute;\n    -webkit-transition: ease-out 0.3s;\n    transition: ease-out 0.3s;\n    z-index: 999;\n  }\n\n  .new-wrap {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5dHNhaS9wcm9qZWN0L21hc2stbWFwLWFuZHkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0pGO0FES0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0hKO0FES0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNISjtBRE9BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNKRjtBRE9BO0VBQ0UsV0FBQTtBQ0pGO0FET0E7RUFDRSxVQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtBQ0pGO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNISjtBRE1BO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDSEY7O0VES0E7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDRkY7O0VESUE7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLFlBQUE7RUNERjtFREdJO0lBQ0Usa0JBQUE7RUNETjs7RURLQTtJQUNFLFdBQUE7RUNGRjs7RURJQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGlDQUFBO0lBQUEseUJBQUE7SUFDQSxZQUFBO0VDREY7O0VER0E7SUFDRSxhQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LXNpemUzMjogMS42NnZ3O1xuJGZvbnQtc2l6ZTIwOiAxLjA0dnc7XG4kZm9udC1zaXplMjQ6IDEuMjV2dztcbiRmb250LXNpemUxNjogMC44M3Z3O1xuXG4ubmV3LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDVweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMzZweDtcbiAgICBoZWlnaHQ6IDExNnB4O1xuICB9XG4gIC5uZXdzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzJweDtcbiAgICB0b3A6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5tYWluLXZpZXctd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYXBwLW1hcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtbGVmdC1zaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxvYXQtZnVuY3Rpb25ze1xuICBkaXNwbGF5OiBub25lO1xuICAuZmxvYXQtZnVuY3Rpb25zLXdyYXB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6ICAjMDBENERGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5sZWZ0LXNpZGUtaGlkZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIC5sZWZ0LXNpZGUtb3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIC5mbG9hdC1mdW5jdGlvbnN7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICByaWdodDogMTlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6IDQ1MDtcbiAgICAuZmxvYXQtZnVuY3Rpb25zLXdyYXB7XG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXBwLW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgYXBwLWxlZnQtc2lkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLm5ldy13cmFwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIubmV3LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDVweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5ldy13cmFwIGltZyB7XG4gIHdpZHRoOiAxMzZweDtcbiAgaGVpZ2h0OiAxMTZweDtcbn1cbi5uZXctd3JhcCAubmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzJweDtcbiAgdG9wOiA0NXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpbi12aWV3LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmFwcC1tYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYXBwLWxlZnQtc2lkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLncxMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsb2F0LWZ1bmN0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxvYXQtZnVuY3Rpb25zIC5mbG9hdC1mdW5jdGlvbnMtd3JhcCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICMwMEQ0REY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubGVmdC1zaWRlLWhpZGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIC5sZWZ0LXNpZGUtb3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLmZsb2F0LWZ1bmN0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICByaWdodDogMTlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6IDQ1MDtcbiAgfVxuICAuZmxvYXQtZnVuY3Rpb25zIC5mbG9hdC1mdW5jdGlvbnMtd3JhcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICBhcHAtbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGFwcC1sZWZ0LXNpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuXG4gIC5uZXctd3JhcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/main.service */ "./src/app/service/main.service.ts");



let AppComponent = class AppComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.title = 'mask-map';
    }
    ngOnInit() {
        this.mainService.getFavoriteCookie();
        this.mainService.getData();
        if (document.body.clientWidth < 1024) {
            this.mainService.isMobile = true;
        }
        else {
            this.mainService.isMobile = false;
        }
    }
    goNews() {
        window.open('https://www.cdc.gov.tw/Bulletin/List/MmgtpeidAR5Ooai4-fgHzQ', '_blank');
    }
    onResize(event) {
        if (event.target.innerWidth < 1024) {
            this.mainService.isMobile = true;
        }
        else {
            this.mainService.isMobile = false;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/main.service */ "./src/app/service/main.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.service */ "./src/app/map/map.service.ts");
/* harmony import */ var _left_side_left_side_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./left-side/left-side.component */ "./src/app/left-side/left-side.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _asymmetrik_ngx_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet-markercluster */ "./node_modules/@asymmetrik/ngx-leaflet-markercluster/dist/index.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
            _left_side_left_side_component__WEBPACK_IMPORTED_MODULE_8__["LeftSideComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"].forRoot(),
            _asymmetrik_ngx_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_10__["LeafletMarkerClusterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ],
        providers: [_service_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"], _map_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  position: absolute;\n  bottom: 0;\n  padding: 11px 0;\n  background: #F2F9FD;\n  color: #00000080;\n  z-index: 999;\n  width: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 1.1vw;\n}\nfooter .footer-wrap {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  padding: 0 50px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5dHNhaS9wcm9qZWN0L21hc2stbWFwLWFuZHkvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTFweCAwO1xuICBiYWNrZ3JvdW5kOiAjRjJGOUZEO1xuICBjb2xvcjogIzAwMDAwMDgwO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXZ3O1xuICAuZm9vdGVyLXdyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG59XG4iLCJmb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTFweCAwO1xuICBiYWNrZ3JvdW5kOiAjRjJGOUZEO1xuICBjb2xvcjogIzAwMDAwMDgwO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXZ3O1xufVxuZm9vdGVyIC5mb290ZXItd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/main.service */ "./src/app/service/main.service.ts");



let FooterComponent = class FooterComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _service_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/left-side/left-side.component.scss":
/*!****************************************************!*\
  !*** ./src/app/left-side/left-side.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-wrap {\n  position: absolute;\n  bottom: 45px;\n  right: 0;\n  z-index: 999;\n  cursor: pointer;\n}\n.new-wrap img {\n  width: 136px;\n  height: 116px;\n}\n.new-wrap .news {\n  position: absolute;\n  left: 32px;\n  top: 45px;\n  font-size: 24px;\n  color: #fff;\n}\n.main-view-wrap {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  height: 100vh;\n}\napp-map {\n  width: 100%;\n}\napp-left-side {\n  width: 40%;\n}\n.text-align-center {\n  text-align: center;\n}\n.w100 {\n  width: 100%;\n}\n.float-functions {\n  display: none;\n}\n.float-functions .float-functions-wrap {\n  width: 60px;\n  height: 60px;\n  background: #00D4DF;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 30px;\n}\n@media (max-width: 1024px) {\n  .left-side-hide {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n  }\n\n  .left-side-open {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n\n  .float-functions {\n    display: block;\n    position: absolute;\n    bottom: 56px;\n    right: 19px;\n    display: -webkit-box;\n    display: flex;\n    z-index: 450;\n  }\n  .float-functions .float-functions-wrap:not(:last-child) {\n    margin-right: 10px;\n  }\n\n  app-map {\n    width: 100%;\n  }\n\n  app-left-side {\n    width: 100%;\n    position: absolute;\n    -webkit-transition: ease-out 0.3s;\n    transition: ease-out 0.3s;\n    z-index: 999;\n  }\n\n  .new-wrap {\n    display: none;\n  }\n}\n.left-side-container {\n  width: 100%;\n  height: 100vh;\n  z-index: 450;\n  overflow: hidden;\n  color: #000000b3;\n}\n.filter-wrap {\n  position: relative;\n  padding: 24px 20px;\n  background: #f2f9fd;\n}\n.filter-wrap .search-input {\n  width: 100%;\n  border-radius: 28px;\n  border: 0;\n  box-shadow: 0px 0px 20px #659fc529;\n  height: 40px;\n  padding: 0 31px;\n  margin-bottom: 8px;\n}\n.filter-wrap .search-input:focus {\n  outline: none;\n}\n.filter-wrap .fa-search {\n  position: absolute;\n  right: 13px;\n  top: 12px;\n  cursor: pointer;\n}\n.remind-text {\n  font-size: 16px;\n  color: #000000b3;\n}\n.result-wrap {\n  padding: 25px 0;\n  cursor: pointer;\n}\n.result-wrap .result-star {\n  color: #000000b3;\n}\n.favorite-heading {\n  margin: 5px 0 10px 0;\n}\n.result-wrap {\n  padding: 24px 20px;\n  background: #fff;\n}\n.result-wrap .title {\n  color: #000000b3;\n  font-size: 1.25vw;\n  margin-bottom: 16px;\n}\n.result-wrap .details > div {\n  color: #00000080;\n  font-size: 1.04vw;\n  margin-bottom: 8px;\n}\n.search-result-container {\n  height: calc(100vh - 66px);\n  padding-top: 8px;\n  background: #fff;\n  overflow: auto;\n  padding-bottom: 150px;\n}\n.mask-wrap {\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid #00000080;\n  padding-bottom: 24px;\n}\n.mask-wrap .adult-mask-wrap,\n.mask-wrap .child-mask-wrap {\n  -webkit-box-flex: 1;\n          flex: 1;\n  border-radius: 24px;\n  padding: 13px 0;\n  color: #000000b3;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 0.83vw;\n}\n.mask-wrap .adult-mask-wrap {\n  background: #f3cc9a;\n  margin-right: 8px;\n}\n.mask-wrap .child-mask-wrap {\n  background: #b1e5bb;\n}\n.mask-wrap .number {\n  font-size: 1.66vw;\n  margin: 0 8px;\n}\n.search-input-container {\n  width: 100%;\n  position: relative;\n}\n.mask-filter-wrap {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 13px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n.mask-filter-wrap .mask-filter {\n  position: relative;\n}\n.mask-filter-wrap .fa-sort-down {\n  position: absolute;\n  top: 1px;\n  right: 9px;\n  font-size: 20px;\n}\n.mask-filter-wrap .dropbtn {\n  box-shadow: 0px 0px 20px #659fc529;\n  border-radius: 20px;\n  background: #fff;\n  padding: 7px;\n  width: 127px;\n}\n.mask-filter-wrap .dropdown-content {\n  position: absolute;\n  width: 100%;\n  padding-top: 17px;\n  top: 23px;\n  background: #fff;\n}\n.mask-filter-wrap .dropdown-content > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 27px;\n}\n.mask-filter-wrap .dropdown-content > div:hover {\n  background: #eceaea;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.leftSide-close {\n  font-size: 35px;\n  z-index: 450;\n}\n.my-favorite {\n  font-size: 20px;\n  margin-right: 10px;\n  color: #e3dc61;\n  background: #fff;\n  padding: 6px;\n  border: 1px solid #afafaf;\n  border-radius: 9px;\n}\n.my-favorite.active {\n  color: #fff;\n  background: #e3dc61;\n}\n@media (max-width: 1024px) {\n  .search-input-container {\n    display: -webkit-box;\n    display: flex;\n  }\n\n  .search-input-wrap {\n    width: 95%;\n  }\n\n  .filter-wrap .fa-search {\n    right: 18%;\n  }\n\n  .leftSide-close {\n    width: 15%;\n    text-align: center;\n  }\n\n  .result-wrap {\n    padding: 24px 20px;\n    background: #fff;\n  }\n  .result-wrap .title {\n    font-size: 20px;\n  }\n  .result-wrap .details > div {\n    font-size: 18px;\n  }\n\n  .mask-wrap .adult-mask-wrap,\n.mask-wrap .child-mask-wrap {\n    font-size: 18px;\n  }\n  .mask-wrap .number {\n    font-size: 26px;\n  }\n}\n@media (max-width: 600px) {\n  .result-wrap .title {\n    font-size: 16px;\n  }\n  .result-wrap .details > div {\n    font-size: 14px;\n  }\n\n  .mask-wrap .adult-mask-wrap,\n.mask-wrap .child-mask-wrap {\n    font-size: 14px;\n  }\n  .mask-wrap .number {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5dHNhaS9wcm9qZWN0L21hc2stbWFwLWFuZHkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlZnQtc2lkZS9sZWZ0LXNpZGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5keXRzYWkvcHJvamVjdC9tYXNrLW1hcC1hbmR5L3NyYy9hcHAvbGVmdC1zaWRlL2xlZnQtc2lkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0pGO0FES0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0hKO0FES0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNISjtBRE9BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNKRjtBRE9BO0VBQ0UsV0FBQTtBQ0pGO0FET0E7RUFDRSxVQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtBQ0pGO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNISjtBRE1BO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VDSEY7O0VES0E7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDRkY7O0VESUE7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLFlBQUE7RUNERjtFREdJO0lBQ0Usa0JBQUE7RUNETjs7RURLQTtJQUNFLFdBQUE7RUNGRjs7RURJQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGlDQUFBO0lBQUEseUJBQUE7SUFDQSxZQUFBO0VDREY7O0VER0E7SUFDRSxhQUFBO0VDQUY7QUFDRjtBQ3pGQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUQyRkY7QUN4RkE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUQwRkY7QUN6RkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEMkZKO0FDMUZJO0VBQ0UsYUFBQTtBRDRGTjtBQ3hGRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEMEZKO0FDdEZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEeUZGO0FDdEZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUR5RkY7QUN4RkU7RUFDRSxnQkFBQTtBRDBGSjtBQ3RGQTtFQUNFLG9CQUFBO0FEeUZGO0FDdEZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRHlGRjtBQ3hGRTtFQUNFLGdCQUFBO0VBQ0EsaUJGeERVO0VFeURWLG1CQUFBO0FEMEZKO0FDdkZJO0VBQ0UsZ0JBQUE7RUFDQSxpQkYvRFE7RUVnRVIsa0JBQUE7QUR5Rk47QUNwRkE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUR1RkY7QUNwRkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FEdUZGO0FDdEZFOztFQUVFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkZ4RlU7QUNnTGQ7QUNyRkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FEdUZKO0FDckZFO0VBQ0UsbUJBQUE7QUR1Rko7QUNyRkU7RUFDRSxpQkZ0R1U7RUV1R1YsYUFBQTtBRHVGSjtBQ25GQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBRHNGRjtBQ25GQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FEc0ZGO0FDckZFO0VBQ0Usa0JBQUE7QUR1Rko7QUNyRkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRHVGSjtBQ3JGRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEdUZKO0FDckZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUR1Rko7QUN0Rkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUR3Rk47QUN2Rk07RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUR5RlI7QUNuRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRHNGRjtBQ25GQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEc0ZGO0FDckZFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FEdUZKO0FDbkZBO0VBQ0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7RURzRkY7O0VDcEZBO0lBQ0UsVUFBQTtFRHVGRjs7RUNwRkU7SUFDRSxVQUFBO0VEdUZKOztFQ3BGQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFRHVGRjs7RUNyRkE7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VEd0ZGO0VDdkZFO0lBQ0UsZUFBQTtFRHlGSjtFQ3RGSTtJQUNFLGVBQUE7RUR3Rk47O0VDbkZFOztJQUVFLGVBQUE7RURzRko7RUNwRkU7SUFDRSxlQUFBO0VEc0ZKO0FBQ0Y7QUNqRkE7RUFFSTtJQUNFLGVBQUE7RURrRko7RUMvRUk7SUFDRSxlQUFBO0VEaUZOOztFQzVFRTs7SUFFRSxlQUFBO0VEK0VKO0VDN0VFO0lBQ0UsZUFBQTtFRCtFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGVmdC1zaWRlL2xlZnQtc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LXNpemUzMjogMS42NnZ3O1xuJGZvbnQtc2l6ZTIwOiAxLjA0dnc7XG4kZm9udC1zaXplMjQ6IDEuMjV2dztcbiRmb250LXNpemUxNjogMC44M3Z3O1xuXG4ubmV3LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDVweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMzZweDtcbiAgICBoZWlnaHQ6IDExNnB4O1xuICB9XG4gIC5uZXdzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzJweDtcbiAgICB0b3A6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5tYWluLXZpZXctd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYXBwLW1hcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtbGVmdC1zaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxvYXQtZnVuY3Rpb25ze1xuICBkaXNwbGF5OiBub25lO1xuICAuZmxvYXQtZnVuY3Rpb25zLXdyYXB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6ICAjMDBENERGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5sZWZ0LXNpZGUtaGlkZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIC5sZWZ0LXNpZGUtb3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIC5mbG9hdC1mdW5jdGlvbnN7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICByaWdodDogMTlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6IDQ1MDtcbiAgICAuZmxvYXQtZnVuY3Rpb25zLXdyYXB7XG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXBwLW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgYXBwLWxlZnQtc2lkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLm5ldy13cmFwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIubmV3LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDVweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5ldy13cmFwIGltZyB7XG4gIHdpZHRoOiAxMzZweDtcbiAgaGVpZ2h0OiAxMTZweDtcbn1cbi5uZXctd3JhcCAubmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzJweDtcbiAgdG9wOiA0NXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpbi12aWV3LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmFwcC1tYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYXBwLWxlZnQtc2lkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLncxMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsb2F0LWZ1bmN0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxvYXQtZnVuY3Rpb25zIC5mbG9hdC1mdW5jdGlvbnMtd3JhcCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICMwMEQ0REY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubGVmdC1zaWRlLWhpZGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIC5sZWZ0LXNpZGUtb3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLmZsb2F0LWZ1bmN0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICByaWdodDogMTlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6IDQ1MDtcbiAgfVxuICAuZmxvYXQtZnVuY3Rpb25zIC5mbG9hdC1mdW5jdGlvbnMtd3JhcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICBhcHAtbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGFwcC1sZWZ0LXNpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuXG4gIC5uZXctd3JhcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmxlZnQtc2lkZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogNDUwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzAwMDAwMGIzO1xufVxuXG4uZmlsdGVyLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDI0cHggMjBweDtcbiAgYmFja2dyb3VuZDogI2YyZjlmZDtcbn1cbi5maWx0ZXItd3JhcCAuc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4ICM2NTlmYzUyOTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDMxcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5maWx0ZXItd3JhcCAuc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5maWx0ZXItd3JhcCAuZmEtc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW1pbmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDBiMztcbn1cblxuLnJlc3VsdC13cmFwIHtcbiAgcGFkZGluZzogMjVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVzdWx0LXdyYXAgLnJlc3VsdC1zdGFyIHtcbiAgY29sb3I6ICMwMDAwMDBiMztcbn1cblxuLmZhdm9yaXRlLWhlYWRpbmcge1xuICBtYXJnaW46IDVweCAwIDEwcHggMDtcbn1cblxuLnJlc3VsdC13cmFwIHtcbiAgcGFkZGluZzogMjRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnJlc3VsdC13cmFwIC50aXRsZSB7XG4gIGNvbG9yOiAjMDAwMDAwYjM7XG4gIGZvbnQtc2l6ZTogMS4yNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLnJlc3VsdC13cmFwIC5kZXRhaWxzID4gZGl2IHtcbiAgY29sb3I6ICMwMDAwMDA4MDtcbiAgZm9udC1zaXplOiAxLjA0dnc7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnNlYXJjaC1yZXN1bHQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjZweCk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG59XG5cbi5tYXNrLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDgwO1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbi5tYXNrLXdyYXAgLmFkdWx0LW1hc2std3JhcCxcbi5tYXNrLXdyYXAgLmNoaWxkLW1hc2std3JhcCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDEzcHggMDtcbiAgY29sb3I6ICMwMDAwMDBiMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44M3Z3O1xufVxuLm1hc2std3JhcCAuYWR1bHQtbWFzay13cmFwIHtcbiAgYmFja2dyb3VuZDogI2YzY2M5YTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubWFzay13cmFwIC5jaGlsZC1tYXNrLXdyYXAge1xuICBiYWNrZ3JvdW5kOiAjYjFlNWJiO1xufVxuLm1hc2std3JhcCAubnVtYmVyIHtcbiAgZm9udC1zaXplOiAxLjY2dnc7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hc2stZmlsdGVyLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubWFzay1maWx0ZXItd3JhcCAubWFzay1maWx0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFzay1maWx0ZXItd3JhcCAuZmEtc29ydC1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgcmlnaHQ6IDlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1hc2stZmlsdGVyLXdyYXAgLmRyb3BidG4ge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggIzY1OWZjNTI5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiAxMjdweDtcbn1cbi5tYXNrLWZpbHRlci13cmFwIC5kcm9wZG93bi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE3cHg7XG4gIHRvcDogMjNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tYXNrLWZpbHRlci13cmFwIC5kcm9wZG93bi1jb250ZW50ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjdweDtcbn1cbi5tYXNrLWZpbHRlci13cmFwIC5kcm9wZG93bi1jb250ZW50ID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VjZWFlYTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5sZWZ0U2lkZS1jbG9zZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgei1pbmRleDogNDUwO1xufVxuXG4ubXktZmF2b3JpdGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICNlM2RjNjE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuLm15LWZhdm9yaXRlLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZTNkYzYxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNlYXJjaC1pbnB1dC13cmFwIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG5cbiAgLmZpbHRlci13cmFwIC5mYS1zZWFyY2gge1xuICAgIHJpZ2h0OiAxOCU7XG4gIH1cblxuICAubGVmdFNpZGUtY2xvc2Uge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnJlc3VsdC13cmFwIHtcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICAucmVzdWx0LXdyYXAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnJlc3VsdC13cmFwIC5kZXRhaWxzID4gZGl2IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAubWFzay13cmFwIC5hZHVsdC1tYXNrLXdyYXAsXG4ubWFzay13cmFwIC5jaGlsZC1tYXNrLXdyYXAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAubWFzay13cmFwIC5udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yZXN1bHQtd3JhcCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAucmVzdWx0LXdyYXAgLmRldGFpbHMgPiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5tYXNrLXdyYXAgLmFkdWx0LW1hc2std3JhcCxcbi5tYXNrLXdyYXAgLmNoaWxkLW1hc2std3JhcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5tYXNrLXdyYXAgLm51bWJlciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xuXG4ubGVmdC1zaWRlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA0NTA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjMDAwMDAwYjM7XG59XG5cbi5maWx0ZXItd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmY5ZmQ7XG4gIC5zZWFyY2gtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjNjU5ZmM1Mjk7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMzFweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5mYS1zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTNweDtcbiAgICB0b3A6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5yZW1pbmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDBiMztcbn1cblxuLnJlc3VsdC13cmFwIHtcbiAgcGFkZGluZzogMjVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC5yZXN1bHQtc3RhcntcbiAgICBjb2xvcjogIzAwMDAwMGIzO1xuICB9XG59XG5cbi5mYXZvcml0ZS1oZWFkaW5ne1xuICBtYXJnaW46IDVweCAwIDEwcHggMDtcbn1cblxuLnJlc3VsdC13cmFwIHtcbiAgcGFkZGluZzogMjRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAudGl0bGUge1xuICAgIGNvbG9yOiAjMDAwMDAwYjM7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplMjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICAuZGV0YWlscyB7XG4gICAgPiBkaXYge1xuICAgICAgY29sb3I6ICMwMDAwMDA4MDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTIwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgfVxufVxuXG4uc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NnB4KTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn1cblxuLm1hc2std3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwODA7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAuYWR1bHQtbWFzay13cmFwLFxuICAuY2hpbGQtbWFzay13cmFwIHtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgcGFkZGluZzogMTNweCAwO1xuICAgIGNvbG9yOiAjMDAwMDAwYjM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTE2O1xuICB9XG5cbiAgLmFkdWx0LW1hc2std3JhcCB7XG4gICAgYmFja2dyb3VuZDogI2YzY2M5YTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuICAuY2hpbGQtbWFzay13cmFwIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjFlNWJiO1xuICB9XG4gIC5udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTMyO1xuICAgIG1hcmdpbjogMCA4cHg7XG4gIH1cbn1cblxuLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFzay1maWx0ZXItd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLm1hc2stZmlsdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmZhLXNvcnQtZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXB4O1xuICAgIHJpZ2h0OiA5cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5kcm9wYnRuIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggIzY1OWZjNTI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgd2lkdGg6IDEyN3B4O1xuICB9XG4gIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDE3cHg7XG4gICAgdG9wOiAyM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgPiBkaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlYWVhO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxlZnRTaWRlLWNsb3Nle1xuICBmb250LXNpemU6IDM1cHg7XG4gIHotaW5kZXg6IDQ1MDtcbn1cblxuLm15LWZhdm9yaXRle1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHJnYigyMjcsIDIyMCwgOTcpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZmFmYWY7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgJi5hY3RpdmV7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyNywgMjIwLCA5Nyk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5zZWFyY2gtaW5wdXQtd3JhcHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5maWx0ZXItd3JhcHtcbiAgICAuZmEtc2VhcmNoe1xuICAgICAgcmlnaHQ6IDE4JTtcbiAgICB9XG4gIH1cbiAgLmxlZnRTaWRlLWNsb3Nle1xuICAgIHdpZHRoOiAxNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yZXN1bHQtd3JhcCB7XG4gICAgcGFkZGluZzogMjRweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmRldGFpbHMge1xuICAgICAgPiBkaXYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tYXNrLXdyYXAge1xuICAgIC5hZHVsdC1tYXNrLXdyYXAsXG4gICAgLmNoaWxkLW1hc2std3JhcCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5udW1iZXIge1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XG4gIC5yZXN1bHQtd3JhcCB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmRldGFpbHMge1xuICAgICAgPiBkaXYge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tYXNrLXdyYXAge1xuICAgIC5hZHVsdC1tYXNrLXdyYXAsXG4gICAgLmNoaWxkLW1hc2std3JhcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5udW1iZXIge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/left-side/left-side.component.ts":
/*!**************************************************!*\
  !*** ./src/app/left-side/left-side.component.ts ***!
  \**************************************************/
/*! exports provided: LeftSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideComponent", function() { return LeftSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/main.service */ "./src/app/service/main.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.service */ "./src/app/map/map.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");






let LeftSideComponent = class LeftSideComponent {
    constructor(mainService, mapService) {
        this.mainService = mainService;
        this.mapService = mapService;
        this.resultList = [];
        this.pharmacyStore = [];
        this.searchValue = '';
        this.maskFilterShow = false;
        this.maskOption = '全部';
        this.currentList = 'all';
        this.onDestroy = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.mainService.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy)).subscribe(res => {
            this.allMaskData = res;
        });
        this.mainService.saveFavorite$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy)).subscribe(res => {
            this.favoriteList = res;
        });
    }
    ngOnInit() {
    }
    maskFilterToggle() {
        this.maskFilterShow = !this.maskFilterShow;
    }
    setMaskOption(type) {
        this.maskOption = type;
        this.maskFilterShow = false;
    }
    startSearch() {
        this.resultList = [];
        this.currentList = 'all';
        this.maskFilterShow = false;
        const result = [];
        this.errorStr = '';
        const cleanValue = this.searchValue.trim();
        if (cleanValue === '') {
            this.errorStr = '請輸入你要尋找的區域';
            return;
        }
        this.allMaskData.forEach(item => {
            if (item.properties.address.includes(cleanValue) ||
                item.properties.name.includes(cleanValue)) {
                if (this.maskOption === '全部') {
                    result.push(item);
                }
                if (item.properties.mask_child !== 0 && this.maskOption === '兒童口罩') {
                    result.push(item);
                }
                if (item.properties.mask_adult !== 0 && this.maskOption === '成人口罩') {
                    result.push(item);
                }
            }
        });
        if (result.length === 0) {
            this.errorStr = '查無資料';
            return;
        }
        this.resultList = result;
    }
    goTarget(lat, lng) {
        this.mapService.changeLocation(lat, lng);
    }
    toggleFavorite(id) {
        event.stopPropagation();
        const index = this.favoriteList.indexOf(id);
        if (index === -1) {
            this.mainService.updateFavorite(id);
        }
        else {
            this.mainService.removeFavorite(index, id);
        }
    }
    favoriteCheck(id) {
        if (this.favoriteList.includes(id)) {
            return 'fas fa-star';
        }
        else {
            return 'far fa-star';
        }
    }
    toggleFavoriteList() {
        if (this.currentList === 'favorite') {
            this.currentList = 'all';
            this.errorStr = '';
        }
        else {
            this.currentList = 'favorite';
            this.favoriteList.length === 0 ? this.errorStr = '無關注的藥局' : this.errorStr = '';
        }
    }
    showFavorite() {
        this.allFavoriteList = this.allMaskData.filter(v => this.favoriteList.includes(v.properties.id));
        this.toggleFavoriteList();
    }
    ngOnDestroy() {
        this.onDestroy.next();
        this.onDestroy.unsubscribe();
    }
};
LeftSideComponent.ctorParameters = () => [
    { type: _service_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
    { type: _map_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] }
];
LeftSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-left-side',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./left-side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-side/left-side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./left-side.component.scss */ "./src/app/left-side/left-side.component.scss")).default]
    })
], LeftSideComponent);



/***/ }),

/***/ "./src/app/loading/loading.component.scss":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".load-wrap {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.7);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\n.line {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border-radius: 15px;\n  background-color: #83C1E9;\n  margin: 0 6px;\n}\n\n.load-3 .line:nth-last-child(1) {\n  -webkit-animation: loadingC 0.6s 0.1s linear infinite;\n          animation: loadingC 0.6s 0.1s linear infinite;\n}\n\n.load-3 .line:nth-last-child(2) {\n  -webkit-animation: loadingC 0.6s 0.2s linear infinite;\n          animation: loadingC 0.6s 0.2s linear infinite;\n}\n\n.load-3 .line:nth-last-child(3) {\n  -webkit-animation: loadingC 0.6s 0.3s linear infinite;\n          animation: loadingC 0.6s 0.3s linear infinite;\n}\n\n@-webkit-keyframes loadingC {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(0, 15px);\n            transform: translate(0, 15px);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n\n@keyframes loadingC {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(0, 15px);\n            transform: translate(0, 15px);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5dHNhaS9wcm9qZWN0L21hc2stbWFwLWFuZHkvc3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ0NGOztBRENBO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ0VGOztBREFBO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ0dGOztBRENBO0VBQ0U7SUFBSSxrQ0FBQTtZQUFBLDBCQUFBO0VDR0o7RURGQTtJQUFLLHFDQUFBO1lBQUEsNkJBQUE7RUNLTDtFREpBO0lBQU0sa0NBQUE7WUFBQSwwQkFBQTtFQ09OO0FBQ0Y7O0FEWEE7RUFDRTtJQUFJLGtDQUFBO1lBQUEsMEJBQUE7RUNHSjtFREZBO0lBQUsscUNBQUE7WUFBQSw2QkFBQTtFQ0tMO0VESkE7SUFBTSxrQ0FBQTtZQUFBLDBCQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkLXdyYXB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4M0MxRTk7XG4gIG1hcmdpbjogMCA2cHg7XG59XG5cbi5sb2FkLTMgLmxpbmU6bnRoLWxhc3QtY2hpbGQoMSkge1xuICBhbmltYXRpb246IGxvYWRpbmdDIDAuNnMgMC4xcyBsaW5lYXIgaW5maW5pdGU7XG59XG4ubG9hZC0zIC5saW5lOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQyAwLjZzIDAuMnMgbGluZWFyIGluZmluaXRlO1xufVxuLmxvYWQtMyAubGluZTpudGgtbGFzdC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbjogbG9hZGluZ0MgMC42cyAwLjNzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmdDIHtcbiAgMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7fVxuICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsMTVweCk7fVxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO31cbn1cbiIsIi5sb2FkLXdyYXAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNDMUU5O1xuICBtYXJnaW46IDAgNnB4O1xufVxuXG4ubG9hZC0zIC5saW5lOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQyAwLjZzIDAuMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubG9hZC0zIC5saW5lOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQyAwLjZzIDAuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubG9hZC0zIC5saW5lOm50aC1sYXN0LWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQyAwLjZzIDAuM3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmdDIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingComponent = class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.scss */ "./src/app/loading/loading.component.scss")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mapWrap {\n  height: 100vh;\n}\n\n::ng-deep .leaflet-top.leaflet-left {\n  display: none;\n}\n\n::ng-deep .leaflet-popup-content {\n  width: -webkit-max-content !important;\n  width: -moz-max-content !important;\n  width: max-content !important;\n}\n\n::ng-deep .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n  bottom: 12px !important;\n}\n\n::ng-deep .leaflet-popup-content {\n  margin: 8px 16px;\n  color: #000000b3;\n}\n\n::ng-deep .leaflet-popup-content .heading {\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n\n::ng-deep .leaflet-popup-content .detail {\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\n::ng-deep .leaflet-popup-content .update-time {\n  margin-top: 8px;\n  font-size: 14px;\n  text-align: center;\n}\n\n::ng-deep .mask-detail-wrap {\n  display: -webkit-box;\n  display: flex;\n}\n\n::ng-deep .mask-detail-wrap .mask-adult,\n::ng-deep .mask-detail-wrap .mask-child {\n  -webkit-box-flex: 1;\n          flex: 1;\n  border-radius: 24px;\n  font-size: 14px;\n  text-align: center;\n  padding: 7px 0;\n}\n\n::ng-deep .mask-detail-wrap .mask-adult {\n  background: #f3cc9a;\n  margin-right: 8px;\n}\n\n::ng-deep .mask-detail-wrap .mask-child {\n  background: #b1e5bb;\n}\n\n::ng-deep .leaflet-marker-icon.leaflet-interactive {\n  color: #10666a;\n}\n\n::ng-deep .marker-cluster-small {\n  background-color: rgba(177, 251, 255, 0.7) !important;\n}\n\n::ng-deep .marker-cluster-small div {\n  background-color: #b1fbff !important;\n}\n\n::ng-deep .marker-cluster-medium {\n  background-color: rgba(64, 246, 255, 0.7) !important;\n}\n\n::ng-deep .marker-cluster-medium div {\n  background-color: #40f6ff !important;\n}\n\n::ng-deep .marker-cluster-large {\n  background-color: rgba(0, 212, 223, 0.7) !important;\n}\n\n::ng-deep .marker-cluster-large div {\n  background-color: #00d4df !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5dHNhaS9wcm9qZWN0L21hc2stbWFwLWFuZHkvc3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREtFO0VBQ0UsYUFBQTtBQ0ZKOztBREtFO0VBQ0UscUNBQUE7RUFBQSxrQ0FBQTtFQUFBLDZCQUFBO0FDSEo7O0FETUU7RUFDRSx1QkFBQTtBQ0pKOztBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRE1JO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDSk47O0FETUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNKTjs7QURNSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKTjs7QURRRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ05KOztBRE9JOztFQUVFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0xOOztBRFFJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ05OOztBRFNJO0VBQ0UsbUJBQUE7QUNQTjs7QURVRTtFQUNFLGNBQUE7QUNSSjs7QURVRTtFQUVFLHFEQUFBO0FDVEo7O0FEV0U7RUFFRSxvQ0FBQTtBQ1ZKOztBRFlFO0VBRUUsb0RBQUE7QUNYSjs7QURhRTtFQUVFLG9DQUFBO0FDWko7O0FEY0U7RUFFRSxtREFBQTtBQ2JKOztBRGVFO0VBRUUsb0NBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwV3JhcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbjo6bmctZGVlcCB7XG4gIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XG4gIH1cbiAgLmxlYWZsZXQtdG9wLmxlYWZsZXQtbGVmdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xuICAgIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LW1hcC1wYW5lIC5sZWFmbGV0LXBvcHVwIHtcbiAgICBib3R0b206IDEycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xuICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gICAgY29sb3I6ICMwMDAwMDBiMztcbiAgICAuaGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5kZXRhaWwge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAudXBkYXRlLXRpbWUge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXNrLWRldGFpbC13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5tYXNrLWFkdWx0LFxuICAgIC5tYXNrLWNoaWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgfVxuXG4gICAgLm1hc2stYWR1bHQge1xuICAgICAgYmFja2dyb3VuZDogI2YzY2M5YTtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgIC5tYXNrLWNoaWxkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNiMWU1YmI7XG4gICAgfVxuICB9XG4gIC5sZWFmbGV0LW1hcmtlci1pY29uLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xuICAgIGNvbG9yOiAjMTA2NjZhO1xuICB9XG4gIC5tYXJrZXItY2x1c3Rlci1zbWFsbCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0IxRkJGRiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAyNTEsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYXJrZXItY2x1c3Rlci1zbWFsbCBkaXYge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNCMUZCRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMjUxLCAyNTUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1hcmtlci1jbHVzdGVyLW1lZGl1bSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzQwRjZGRiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDI0NiwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1hcmtlci1jbHVzdGVyLW1lZGl1bSBkaXYge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM0MEY2RkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCAyNDYsIDI1NSkgIWltcG9ydGFudDtcbiAgfVxuICAubWFya2VyLWNsdXN0ZXItbGFyZ2Uge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMEQ0REYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjIzLCAwLjcpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1hcmtlci1jbHVzdGVyLWxhcmdlIGRpdiB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwRDRERiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjEyLCAyMjMpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIiNtYXBXcmFwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuOjpuZy1kZWVwIC5sZWFmbGV0LXRvcC5sZWFmbGV0LWxlZnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xuICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtbWFwLXBhbmUgLmxlYWZsZXQtcG9wdXAge1xuICBib3R0b206IDEycHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubGVhZmxldC1wb3B1cC1jb250ZW50IHtcbiAgbWFyZ2luOiA4cHggMTZweDtcbiAgY29sb3I6ICMwMDAwMDBiMztcbn1cbjo6bmctZGVlcCAubGVhZmxldC1wb3B1cC1jb250ZW50IC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG46Om5nLWRlZXAgLmxlYWZsZXQtcG9wdXAtY29udGVudCAuZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG46Om5nLWRlZXAgLmxlYWZsZXQtcG9wdXAtY29udGVudCAudXBkYXRlLXRpbWUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5tYXNrLWRldGFpbC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjo6bmctZGVlcCAubWFzay1kZXRhaWwtd3JhcCAubWFzay1hZHVsdCxcbjo6bmctZGVlcCAubWFzay1kZXRhaWwtd3JhcCAubWFzay1jaGlsZCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggMDtcbn1cbjo6bmctZGVlcCAubWFzay1kZXRhaWwtd3JhcCAubWFzay1hZHVsdCB7XG4gIGJhY2tncm91bmQ6ICNmM2NjOWE7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuOjpuZy1kZWVwIC5tYXNrLWRldGFpbC13cmFwIC5tYXNrLWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2IxZTViYjtcbn1cbjo6bmctZGVlcCAubGVhZmxldC1tYXJrZXItaWNvbi5sZWFmbGV0LWludGVyYWN0aXZlIHtcbiAgY29sb3I6ICMxMDY2NmE7XG59XG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLXNtYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDI1MSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLXNtYWxsIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWZiZmYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgMjQ2LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbWVkaXVtIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGY2ZmYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWFya2VyLWNsdXN0ZXItbGFyZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIxMiwgMjIzLCAwLjcpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hcmtlci1jbHVzdGVyLWxhcmdlIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQ0ZGYgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/main.service */ "./src/app/service/main.service.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.service */ "./src/app/map/map.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");






let MapComponent = class MapComponent {
    constructor(mainService, mapService) {
        this.mainService = mainService;
        this.mapService = mapService;
        this.onDestroy = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.mainService.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy)).subscribe(res => {
            this.allMaskData = res;
            this.mapService.generateData(res);
            this.mainService.loading = false;
        });
    }
    ngOnInit() {
        this.mapService.getUserLocation();
    }
    ngOnDestroy() {
        this.onDestroy.next();
        this.onDestroy.unsubscribe();
    }
};
MapComponent.ctorParameters = () => [
    { type: _service_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
    { type: _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/map/map.service.ts":
/*!************************************!*\
  !*** ./src/app/map/map.service.ts ***!
  \************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/main.service */ "./src/app/service/main.service.ts");






let MapService = class MapService {
    constructor(mainService) {
        this.mainService = mainService;
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                })
            ],
            zoom: 16,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(25.043095, 121.533803)
        };
        this.markerClusterData = [];
    }
    generateData(maskData) {
        this.markerClusterData = this.generateMarker(maskData);
    }
    generateMarker(maskData) {
        const data = [];
        const icon = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconSize: [40, 50],
            iconUrl: 'assets/images/icons/maps-and-flags.svg',
        });
        maskData.forEach(item => {
            data.push(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([item.geometry.coordinates[1], item.geometry.coordinates[0]], { icon }).bindPopup(`
            <div class="heading">${item.properties.name}</div>
            <div class="detail">
              <img src="assets/images/icons/map-marker-alt-solid.svg">
              ${item.properties.address}
            </div>
            <div class="detail">
            <img src="assets/images/icons/phone.svg">
              ${item.properties.phone}
            </div>
            <div class="mask-detail-wrap">
              <span class="mask-adult">成人口罩：${item.properties.mask_adult}</span>
              <span class="mask-child">小孩口罩：${item.properties.mask_child}</span>
            </div>
            <div class="detail update-time">
              此資料更新時間：${item.properties.updated}
            </div>
          `));
        });
        return data;
    }
    getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](position.coords.latitude, position.coords.longitude));
            });
        }
    }
    changeLocation(lat, lng) {
        this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](lat, lng));
        this.map.setView([lat, lng], 22);
        if (this.mainService.isMobile) {
            this.mainService.leftSideOpen = false;
        }
    }
    onMapReady(map) {
        this.map = map;
    }
    markerClusterReady(group) {
        this.markerClusterGroup = group;
    }
};
MapService.ctorParameters = () => [
    { type: _service_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }
];
MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MapService);



/***/ }),

/***/ "./src/app/service/main.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/main.service.ts ***!
  \*****************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let MainService = class MainService {
    constructor(http) {
        this.http = http;
        this.maskUrl = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR14CXKVx8AwxOzt1stzo8GVkhT11ek2XpyqFzPhfC695Wf50AFPonuQZ3Q';
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.data$ = this.data.asObservable();
        this.saveFavorite = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.saveFavorite$ = this.saveFavorite.asObservable();
        this.updateTime = Date.now();
        this.loading = true;
    }
    getData() {
        this.http.get(this.maskUrl).subscribe(res => {
            this.loading = true;
            this.updateTime = Date.now();
            this.data.next(res['features']);
            this.autoRefresh();
        }, (error) => this.HandleError(error));
    }
    autoRefresh() {
        clearTimeout(this.autoTimer);
        let that = this;
        this.autoTimer = setTimeout(function () {
            // that.autoRefresh();
            that.refreshMaskData();
            // 10分鐘更新一次
        }, 600000);
    }
    refreshMaskData() {
        this.getData();
    }
    toggleLeftSide() {
        if (this.isMobile) {
            this.leftSideOpen = !this.leftSideOpen;
        }
    }
    // favorite cookie start
    getFavoriteCookie() {
        const tmp = this.getCookie('Favorite_');
        const arr = tmp.split('@');
        const newArray = [];
        console.log(tmp);
        for (let i = 0; i < arr.length; i++) {
            const key = arr[i];
            if (key) {
                newArray.push(key);
            }
        }
        this.saveFavorite.next(newArray);
    }
    getCookie(name) {
        const saveName = name + '=';
        const allCookieArray = document.cookie.split(';');
        let result;
        allCookieArray.forEach(item => {
            while (item.charAt(0) === ' ') {
                item = item.substring(1);
            }
            // 找到favorite cookie
            if (item.indexOf(saveName) === 0) {
                // 只取id部分
                result = item.substring(saveName.length, item.length);
            }
        });
        // for (var i = 0; i < allCookieArray.length; i++) {
        //   let item= allCookieArray[i];
        //   while (item.charAt(0) === ' ') {
        //     item = item.substring(1);
        //   }
        //   // 找到favorite cookie
        //   if (item.includes(saveName)) {
        //     // 只取id部分
        //     return item.substring(saveName.length, c.length);
        //   }
        // }
        // return '';
        return result ? result : '';
    }
    setCookie(key, value) {
        document.cookie = key + '=' + value;
    }
    updateFavorite(id) {
        const favoriteArray = this.saveFavorite.value;
        if (!favoriteArray.includes(id)) {
            favoriteArray.push(id);
            this.saveFavorite.next(favoriteArray);
            this.updateFavoriteCookie();
        }
    }
    updateFavoriteCookie() {
        let str = '';
        this.saveFavorite.value.forEach((item) => {
            str += item + '@';
        });
        this.setCookie('Favorite_', str);
    }
    removeFavorite(index, id) {
        const favoriteArray = this.saveFavorite.value;
        if (favoriteArray.includes(id)) {
            this.saveFavorite.value.splice(index, 1);
            this.saveFavorite.next(favoriteArray);
            this.updateFavoriteCookie();
        }
    }
    // favorite cookie end
    HandleError(e) {
        this.loading = false;
        alert(e.error.error);
    }
};
MainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MainService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andytsai/project/mask-map-andy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map