(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<Header></Header>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  Welcome to the Dashboard.... \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-component/header-component.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-component/header-component.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg fixed-top  \" color-on-scroll=\"300\" >\n  <div class=\"container header-container\">\n      <a class=\"navbar-brand\" routerLink=\"/\" rel=\"tooltip\" title=\"Login And Signup\" data-placement=\"bottom\" >\n       Recharge System\n      </a>\n    <div class=\"collapse navbar-collapse justify-content-end\" *ngIf=\"!isUserAvailabe\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLink=\"login\" class=\"nav-link\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/signup\" class=\"nav-link\">SignUp</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"collapse navbar-collapse justify-content-end\" *ngIf=\"isUserAvailabe\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\">{{isUserAvailabe}}</a>\n             </li>\n          <li class=\"nav-item\">\n            <a  (click)=\"logout()\" routerLink=\"/\" class=\"nav-link\">Logout</a>\n          </li>\n       \n        </ul>\n      </div>\n  </div>\n</nav>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-component/login-component.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-component/login-component.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <form [formGroup]=\"loginForm\">\n    <div class=\"row\">\n      <h4>Account Details</h4>\n      <div class=\"input-group input-group-icon\">\n        <input \n        [ngClass]=\"{ 'is-invalid': loginForm.get('email').errors?.required && loginForm.get('email').touched   }\"\n        type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n        <div class=\"input-icon\"><i class=\"fa fa-envelope\"></i></div>\n      </div>\n      <div class=\"input-group input-group-icon\">\n        <input \n        [ngClass]=\"{ 'is-invalid': loginForm.get('password').errors?.required && loginForm.get('password').touched   }\"\n        type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n        <div class=\"input-icon\"><i class=\"fa fa-key\"></i></div>\n      </div>\n      <button style=\" line-height: 1.4;  height: 3.4em;\" class=\"btn btn-info  btn-block btn-round\"\n        (click)=\"login()\">Login</button>\n    </div>\n  </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/payment.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/payment.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <form class=\"credit-card\" [formGroup]=\"paymentForm\">\n    <div class=\"form-header\">\n      <h4 class=\"title\">Credit card detail</h4>\n    </div>\n\n    <div class=\"form-body\">\n      <!-- Card Number -->\n      <input type=\"text\"  numbersOnly \n      [ngClass]=\"checkFieldValid('cardNumber')\"\n      maxlength=\"16\"\n      minlength=\"16\"\n      class=\"card-number\" placeholder=\"Card Number\" formControlName=\"cardNumber\">\n      <span *ngIf=\"checkMinMaxError('cardNumber')\" style=\"color: red\">\n          Card Number should be atleast {{paymentForm.get('cardNumber').errors.minlength.requiredLength}} digits .\n          </span>\n      <!-- Date Field -->\n      <div class=\"date-field\">\n        <div class=\"month\">\n          <select name=\"Month\"\n           [ngClass]=\"checkFieldValid('expiryMonth')\"\n             formControlName=\"expiryMonth\">\n            <option value=\"january\">January</option>\n            <option value=\"february\">February</option>\n            <option value=\"march\">March</option>\n            <option value=\"april\">April</option>\n            <option value=\"may\">May</option>\n            <option value=\"june\">June</option>\n            <option value=\"july\">July</option>\n            <option value=\"august\">August</option>\n            <option value=\"september\">September</option>\n            <option value=\"october\">October</option>\n            <option value=\"november\">November</option>\n            <option value=\"december\">December</option>\n          </select>\n        </div>\n        <div class=\"year\">\n          <select name=\"Year\"\n          [ngClass]=\"checkFieldValid('expiryYear')\"\n            formControlName=\"expiryYear\">\n            <option value=\"2019\">2019</option>\n            <option value=\"2020\">2020</option>\n            <option value=\"2021\">2021</option>\n            <option value=\"2022\">2022</option>\n            <option value=\"2023\">2023</option>\n            <option value=\"2024\">2024</option>\n          </select>\n        </div>\n      </div>\n\n      <!-- Card Verification Field -->\n      <div class=\"card-verification\">\n        <div class=\"cvv-input\">\n          <input type=\"text\" \n          [ngClass]=\"checkFieldValid('cvv')\"\n          minlength=\"3\"\n          maxlength=\"4\"\n          placeholder=\"CVV\" formControlName=\"cvv\">\n          <span *ngIf=\"checkMinMaxError('cvv')\" style=\"color: red\">\n              CVV Number should be atleast {{paymentForm.get('cvv').errors.minlength.requiredLength}} digits .\n              </span>\n        </div>\n        <div class=\"cvv-details\">\n          <p>3 or 4 digits usually found <br> on the signature strip</p>\n        </div>\n      </div>\n\n      <!-- Buttons -->\n      <button type=\"submit\" class=\"proceed-btn\" (click)=\"proceed()\">Proceed</button>\n      <button type=\"button\" class=\"btn btn-danger-lg\" (click)=\"back()\">Back</button>\n      <!-- <button type=\"submit\" class=\"paypal-btn\"><a href=\"#\">Pay With</a></button> -->\n    </div>\n  </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup-component/signup-component.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup-component/signup-component.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container containerWidth\">\n  <form [formGroup]=\"signUpForm\">\n    <div class=\"row\">\n      <h4>Account Details</h4>\n      <div class=\"row\">\n        <div class=\"input-group\">\n          <select [ngClass]=\"checkFieldValid('countryCode')\" class=\"\" id=\"inputGroupSelect02\"\n            formControlName=\"countryCode\" placeholder=\"Select country\" (change)=\"country($event.target.value)\">\n            <option value=\"\" disabled selected>Select Country</option>\n            <ng-container *ngFor=\"let country of countryList;\">\n              <option [value]=\"country.alpha2Code\" *ngIf=\"country.callingCodes[0]\">\n                {{country.name}} (+{{country.callingCodes[0]}})\n              </option>\n            </ng-container>\n          </select>\n        </div>\n        <!-- <input type=\"text\"   numbersOnly\n          [ngClass]=\"{ 'is-invalid': signUpForm.get('mobileNumber').errors?.required && signUpForm.get('mobileNumber').touched   }\"\n          style=\" line-height: 1.4;  height: 3.4em;\" maxlength=\"10\" class=\"form-control\"\n            placeholder=\"Mobile Number\" formControlName=\"mobileNumber\"> -->\n        <div class=\"input-group input-group-icon\">\n          <select formControlName=\"serviceType\"  (change)=\"serviceType($event.target.value)\"\n            [ngClass]=\"checkFieldValid('serviceType')\">\n            <option value=\"\" disabled selected hidden>Select Service Type</option>\n            <option value=\"mobile\">Mobile Recharge</option>\n            <option value=\"prepaid\">Prepaid Electrity</option>\n          </select>\n        </div>\n        <div class=\"input-group input-group-icon\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-icon\">+{{mobileOperator}}</div>\n          </div>\n          <input type=\"text\" numbersOnly  [ngClass]=\"checkFieldValid('mobileNumber')\"\n            style=\" line-height: 1.4;  height: 3.4em;\" minlength=\"{{minLengthDigits}}\" maxlength=\"{{maxLengthDigits}}\" class=\"\"\n            placeholder=\"Mobile Number\" formControlName=\"mobileNumber\">\n            <!-- <ngx-intl-tel-input [ngClass]=\"checkMobileNumber()\"\n            [cssClass]=\"'custom'\" class=\"input-group\" style=\"display: block;width: 100%;\"\n            [preferredCountries]=\"preferredCountries\"\n            [enableAutoCountrySelect]=\"false\" \n            [enablePlaceholder]=\"true\" \n            [searchCountryFlag]=\"true\"\n            [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n            [selectFirstCountry]=\"true\" \n            [selectedCountryISO]=\"CountryISO.India\"\n            [maxLength]=\"15\" \n            [tooltipField]=\"TooltipLabel.Name\" \n            [phoneValidation]=\"true\" \n            [separateDialCode]=\"true\"\n            name=\"mobileNumber\" formControlName=\"mobileNumber\">\n          </ngx-intl-tel-input> -->\n         \n\n            <span style=\"color: red\">\n              <small *ngIf=\"signUpForm.get('mobileNumber').errors?.minlength && signUpForm.get('mobileNumber').touched\">Minimum Digits required: {{minLengthDigits}}</small>\n              <small *ngIf=\"signUpForm.get('mobileNumber').errors?.required && signUpForm.get('mobileNumber').touched\">Mobile Number is Required.</small>\n            </span>\n        </div>\n        <div class=\"input-group\" *ngIf=\"prepaidElec\">\n          <!-- <div class=\"input-group-prepend\">\n            <div class=\"input-icon\">+91</div>\n          </div> -->\n          <input type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('meterNumber')\"\n            style=\" line-height: 1.4;  height: 3.4em;\" class=\"\" placeholder=\"Meter Number\"\n            formControlName=\"meterNumber\" minlength=\"10\" maxlength=\"15\">\n            <span *ngIf=\"checkMinMaxError('meterNumber')\" style=\"color: red\">\n                Meter Number should be atleast {{signUpForm.get('meterNumber').errors.minlength.requiredLength}} digits .\n              </span>\n        </div>\n\n        <div class=\"input-group input-group-icon\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-icon\"><i class=\"fa fa-user\"></i></div>\n          </div>\n          <input type=\"text\" alphabetsOnly [ngClass]=\"checkFieldValid('firstName')\" placeholder=\"Buyers Full Name\"\n            formControlName=\"firstName\">\n          <!-- <input class=\"form-multiple\" type=\"text\"\n          [ngClass]=\"{ 'is-invalid': signUpForm.get('lastName').errors?.required && signUpForm.get('lastName').touched   }\"\n          placeholder=\"Last Name\" formControlName=\"lastName\"> -->\n        </div>\n        <div class=\"input-group input-group-icon\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-icon\"><i class=\"fa fa-user\"></i></div>\n          </div>\n          <!-- <input class=\"form-multiple\" type=\"text\"\n          [ngClass]=\"{ 'is-invalid': signUpForm.get('firstName').errors?.required && signUpForm.get('firstName').touched   }\"\n          placeholder=\"First Name\" formControlName=\"firstName\"> -->\n          <input type=\"text\" alphabetsOnly [ngClass]=\"checkFieldValid('lastName')\" placeholder=\"Beneficiary's Full Name\"\n            formControlName=\"lastName\">\n        </div>\n        <div class=\"input-group input-group-icon\">\n          <input [ngClass]=\"checkFieldValid('email') || signUpForm.get('email').errors?.pattern? 'is-invalid':''\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}\" type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n          <span *ngIf=\"signUpForm.get('email').errors?.pattern\" style=\"color:red\">Please Enter Valid Email Id.</span>\n          <div class=\"input-icon\"><i class=\"fa fa-envelope\"></i></div>\n        </div>\n        <div class=\"input-group input-group-icon\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-icon\"><i class=\"fa fa-dollar\"></i></div>\n          </div>\n          <input type=\"text\"\n          maxlength=\"12\"\n          numbersOnly [ngClass]=\"checkFieldValid('amount')\" min=1 max=999999999999 placeholder=\"Amount\"\n            formControlName=\"amount\">\n          <!-- <div class=\"input-icon\"><i class=\"fa fa-dollar\"></i></div> -->\n        </div>\n      </div>\n\n      <!-- <div class=\"input-group input-group-icon\">\n        <input type=\"text\" \n        [ngClass]=\"{ 'is-invalid': signUpForm.get('mobileOperator').errors?.required && signUpForm.get('mobileOperator').touched   }\"\n        placeholder=\"Mobile Operator\" formControlName=\"mobileOperator\">\n        <div class=\"input-icon\"><i class=\"fa fa-user\"></i></div>\n      </div> -->\n\n    </div>\n    <button style=\"line-height: 1.4;  height: 3.4em;\" class=\"btn btn-info  btn-block btn-round\"\n      (click)=\"register()\">PAY</button>\n  </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_components_signup_component_signup_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/signup-component/signup-component.component */ "./src/app/components/signup-component/signup-component.component.ts");
            /* harmony import */ var _app_components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/components/login-component/login-component.component */ "./src/app/components/login-component/login-component.component.ts");
            /* harmony import */ var _app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _app_components_payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
            /* harmony import */ var _app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
            var routes = [
                { path: '', pathMatch: 'full', redirectTo: 'signup' },
                { path: 'signup', component: _app_components_signup_component_signup_component_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
                { path: 'login', component: _app_components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'payment', component: _app_components_payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"] },
                { path: 'dashboard', component: _app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
                { path: '**', redirectTo: 'signup' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'payment-app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var _components_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header-component/header-component.component */ "./src/app/components/header-component/header-component.component.ts");
            /* harmony import */ var _components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login-component/login-component.component */ "./src/app/components/login-component/login-component.component.ts");
            /* harmony import */ var _components_signup_component_signup_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/signup-component/signup-component.component */ "./src/app/components/signup-component/signup-component.component.ts");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                        _components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                        _components_signup_component_signup_component_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                        _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_17__["PaymentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__["NgxIntlTelInputModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({ timeOut: 3000,
                            positionClass: 'toast-top-right',
                            preventDuplicates: true })
                    ],
                    providers: [
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["HttpInterceptorService"],
                            multi: true
                        }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/dashboard.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/dashboard/dashboard.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/dashboard.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/dashboard/dashboard.component.ts ***!
          \*************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent() {
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                return DashboardComponent;
            }());
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header-component/header-component.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/header-component/header-component.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyLWNvbXBvbmVudC9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/header-component/header-component.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/header-component/header-component.component.ts ***!
          \***************************************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-helper.service */ "./src/app/services/common-helper.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(commonHelper) {
                    var _this = this;
                    this.commonHelper = commonHelper;
                    this.commonHelper.getUserStatus.subscribe(function (res) {
                        _this.isUserAvailabe = res;
                        if (_this.isUserAvailabe)
                            console.log("dfss");
                        console.log("cvxcdfss");
                    });
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                HeaderComponent.prototype.logout = function () {
                    localStorage.clear();
                    this.commonHelper.setUserStatus('');
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_2__["CommonHelperService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'Header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-component/header-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-component.component.css */ "./src/app/components/header-component/header-component.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login-component/login-component.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/login-component/login-component.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tY29tcG9uZW50L2xvZ2luLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/login-component/login-component.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/login-component/login-component.component.ts ***!
          \*************************************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-helper.service */ "./src/app/services/common-helper.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, authenticationService, commonHelper, router) {
                    this.fb = fb;
                    this.authenticationService = authenticationService;
                    this.commonHelper = commonHelper;
                    this.router = router;
                    if (localStorage.getItem('user')) {
                        this.router.navigate(['/dashboard']);
                    }
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.fb.group({
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    if (this.loginForm.valid) {
                        var loginRequest = {
                            email: this.loginForm.get('email').value,
                            password: this.loginForm.get('password').value,
                        };
                        this.authenticationService.register(loginRequest).subscribe(function (response) {
                            _this.commonHelper.showSuccessToast("Registration Success", "Success", 5000);
                            _this.router.navigate(['/dashboard']);
                        });
                    }
                    else {
                        this.commonHelper.validateFormFields(this.loginForm);
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__["CommonHelperService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-component/login-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-component.component.css */ "./src/app/components/login-component/login-component.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/payment/payment.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/payment/payment.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Global */\n* {\n    box-sizing: border-box;\n}\nbody,\nhtml {\n    height: 100%;\n    min-height: 100%;\n}\nbody {\n    font-family: 'Roboto',\n    sans-serif;\n    margin: 0;\n    background-color: #e7e7e7;\n}\n/* Credit Card */\n.credit-card {\n    width: 360px;\n    height: 400px;\n    margin: 60px auto 0;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    background-color: #fff;\n    box-shadow: 1px 2px 3px 0 rgba(0,0,0,.10);\n}\n.form-header {\n    height: 60px;\n    padding: 20px 30px 0;\n    border-bottom: 1px solid #e1e8ee;\n}\n.form-body {\n    height: 340px;\n    padding: 30px 30px 20px;\n}\n/* Title */\n.title {\n    font-size: 18px;\n    margin: 0;\n    color: #5e6977;\n}\n/* Common */\n.card-number,\n.cvv-input input,\n.month select,\n.year select {\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 14px;\n}\n.card-number,\n.month select,\n.year select {\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 14px;\n}\n.card-number,\n.cvv-details,\n.cvv-input input,\n.month select,\n.year select {\n    opacity: .7;\n    color: #86939e;\n}\n/* Card Number */\n.card-number {\n    width: 100%;\n    margin-bottom: 20px;\n    padding-left: 20px;\n    border: 2px solid #e1e8ee;\n    border-radius: 6px;\n}\n/* Date Field */\n.month select,\n.year select {\n    width: 145px;\n    margin-bottom: 20px;\n    padding-left: 20px;\n    border: 2px solid #e1e8ee;\n    border-radius: 6px;\n    /* background: ; */\n    background-position: 85% 50%;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n}\n.month select {\n    float: left;\n}\n.year select {\n    float: right;\n}\n/* Card Verification Field */\n.cvv-input input {\n    float: left;\n    width: 145px;\n    padding-left: 20px;\n    border: 2px solid #e1e8ee;\n    border-radius: 6px;\n    background: #fff;\n}\n/* Buttons Section */\n.paypal-btn,\n.proceed-btn {\n    cursor: pointer;\n    font-size: 16px;\n    width: 100%;\n    border-color: transparent;\n    border-radius: 6px;\n}\n.proceed-btn {\n    margin-bottom: 10px;\n    background: #7dc855;\n}\n.paypal-btn a,\n.proceed-btn a {\n    text-decoration: none;\n}\n.proceed-btn a {\n    color: #fff;\n}\n.paypal-btn a {\n    color: rgba(242, 242, 242, .7);\n}\n.paypal-btn {\n    padding-right: 95px;\n    /* background: url('paypal-logo.svg') no-repeat 65% 56% #009cde; */\n}\n.cvv-details {\n    font-size: 12px;\n    font-weight: 300;\n    line-height: 16px;\n    float: right;\n    margin-bottom: 20px;\n}\n.cvv-details p {\n    margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1g7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSTtjQUNVO0lBQ1YsU0FBUztJQUNULHlCQUF5QjtBQUM3QjtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQSxVQUFVO0FBQ1Y7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7QUFDbEI7QUFDQSxXQUFXO0FBQ1g7Ozs7SUFJSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBOzs7OztJQUtJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBLGVBQWU7QUFDZjs7SUFFSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQSxvQkFBb0I7QUFDcEI7O0lBRUksZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrRUFBa0U7QUFDdEU7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2xvYmFsICovXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIFxuYm9keSxcbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIFxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLFxuICAgIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG5cbi8qIENyZWRpdCBDYXJkICovXG4uY3JlZGl0LWNhcmQge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogNjBweCBhdXRvIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAwIHJnYmEoMCwwLDAsLjEwKTtcbn1cbi5mb3JtLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMzBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlOGVlO1xufVxuIFxuLmZvcm0tYm9keSB7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMjBweDtcbn1cbi8qIFRpdGxlICovXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICM1ZTY5Nzc7XG59XG4vKiBDb21tb24gKi9cbi5jYXJkLW51bWJlcixcbi5jdnYtaW5wdXQgaW5wdXQsXG4ubW9udGggc2VsZWN0LFxuLnllYXIgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbn1cbiBcbi5jYXJkLW51bWJlcixcbi5tb250aCBzZWxlY3QsXG4ueWVhciBzZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuIFxuLmNhcmQtbnVtYmVyLFxuLmN2di1kZXRhaWxzLFxuLmN2di1pbnB1dCBpbnB1dCxcbi5tb250aCBzZWxlY3QsXG4ueWVhciBzZWxlY3Qge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGNvbG9yOiAjODY5MzllO1xufVxuLyogQ2FyZCBOdW1iZXIgKi9cbi5jYXJkLW51bWJlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZThlZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4vKiBEYXRlIEZpZWxkICovXG4ubW9udGggc2VsZWN0LFxuLnllYXIgc2VsZWN0IHtcbiAgICB3aWR0aDogMTQ1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZThlZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgLyogYmFja2dyb3VuZDogOyAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDg1JSA1MCU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbiBcbi5tb250aCBzZWxlY3Qge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuIFxuLnllYXIgc2VsZWN0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4vKiBDYXJkIFZlcmlmaWNhdGlvbiBGaWVsZCAqL1xuLmN2di1pbnB1dCBpbnB1dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDE0NXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlOGVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLyogQnV0dG9ucyBTZWN0aW9uICovXG4ucGF5cGFsLWJ0bixcbi5wcm9jZWVkLWJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbiBcbi5wcm9jZWVkLWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjN2RjODU1O1xufVxuIFxuLnBheXBhbC1idG4gYSxcbi5wcm9jZWVkLWJ0biBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4gXG4ucHJvY2VlZC1idG4gYSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4gXG4ucGF5cGFsLWJ0biBhIHtcbiAgICBjb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAuNyk7XG59XG4gXG4ucGF5cGFsLWJ0biB7XG4gICAgcGFkZGluZy1yaWdodDogOTVweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJ3BheXBhbC1sb2dvLnN2ZycpIG5vLXJlcGVhdCA2NSUgNTYlICMwMDljZGU7ICovXG59XG4gXG4uY3Z2LWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIFxuLmN2di1kZXRhaWxzIHAge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/payment/payment.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/payment/payment.component.ts ***!
          \*********************************************************/
        /*! exports provided: PaymentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () { return PaymentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-helper.service */ "./src/app/services/common-helper.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PaymentComponent = /** @class */ (function () {
                function PaymentComponent(fb, authenticationService, commonHelper, router) {
                    var _this = this;
                    this.fb = fb;
                    this.authenticationService = authenticationService;
                    this.commonHelper = commonHelper;
                    this.router = router;
                    this.commonHelper.getUserDataForPayment.subscribe(function (userData) {
                        _this.userData = userData;
                        if (Object.entries(_this.userData).length === 0 && _this.userData.constructor === Object) {
                            _this.router.navigate(['/signup']);
                        }
                    });
                }
                PaymentComponent.prototype.ngOnInit = function () {
                    this.paymentForm = this.fb.group({
                        cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        expiryMonth: ['january', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        cvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        expiryYear: ['2019', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                PaymentComponent.prototype.proceed = function () {
                    console.log("this.", this.paymentForm);
                    if (this.paymentForm.valid) {
                        var paymentObj = Object.assign({}, this.userData, { number: this.paymentForm.get('cardNumber').value, exp_month: this.paymentForm.get('expiryMonth').value, cvc: this.paymentForm.get('cvv').value, exp_year: this.paymentForm.get('expiryYear').value });
                        alert("seucess");
                        // this.router.navigate(['/payment'])
                        localStorage.setItem('user', paymentObj.firstName);
                        this.commonHelper.setUserStatus(paymentObj.firstName);
                        this.router.navigate(['/dashboard']);
                        //  this.authenticationService.payment(paymentObj).subscribe(response=>{
                        //    console.log("response============>",response)
                        //   localStorage.setItem('user',paymentObj.firstName)
                        // this.commonHelper.setUserStatus(paymentObj.firstName);
                        // this.router.navigate(['/dashboard'])
                        // },err=>{
                        //   localStorage.clear();
                        // this.commonHelper.setUserStatus('');
                        // })
                    }
                    else {
                        this.commonHelper.validateFormFields(this.paymentForm);
                    }
                };
                PaymentComponent.prototype.checkFieldValid = function (formControl) {
                    if (this.paymentForm.get([formControl]).errors && this.paymentForm.get([formControl]).errors.required &&
                        this.paymentForm.get([formControl]).touched) {
                        return 'is-invalid';
                    }
                    else {
                        return this.checkMinMaxError(formControl);
                    }
                };
                PaymentComponent.prototype.checkMinMaxError = function (formControl) {
                    console.log(this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required));
                    if (this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required)) {
                        return 'is-invalid';
                    }
                    else
                        return '';
                };
                PaymentComponent.prototype.back = function () {
                    window.history.go(-1);
                };
                return PaymentComponent;
            }());
            PaymentComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__["CommonHelperService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-payment',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/payment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/components/payment/payment.component.css")).default]
                })
            ], PaymentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/signup-component/signup-component.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/signup-component/signup-component.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".containerWidth {\n    max-width: 35em;\n}\n.intl-tel-input .flag-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    padding: 1px;\n}\n.intl-tel-input {\n    position: relative;\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAtY29tcG9uZW50L3NpZ251cC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAtY29tcG9uZW50L3NpZ251cC1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJXaWR0aCB7XG4gICAgbWF4LXdpZHRoOiAzNWVtO1xufVxuLmludGwtdGVsLWlucHV0IC5mbGFnLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMXB4O1xufVxuLmludGwtdGVsLWlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/signup-component/signup-component.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/signup-component/signup-component.component.ts ***!
          \***************************************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-helper.service */ "./src/app/services/common-helper.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(fb, authenticationService, commonHelper, router) {
                    this.fb = fb;
                    this.authenticationService = authenticationService;
                    this.commonHelper = commonHelper;
                    this.router = router;
                    this.separateDialCode = true;
                    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["SearchCountryField"];
                    this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["TooltipLabel"];
                    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"];
                    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"].UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"].UnitedKingdom];
                    this.prepaidElec = false;
                    this.mobileOperator = "93";
                    if (localStorage.getItem('user')) {
                        this.router.navigate(['/dashboard']);
                    }
                }
                SignupComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.signUpForm = this.fb.group({
                        firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        // mobileOperator:[''],
                        countryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        serviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        meterNumber: ['']
                    });
                    this.commonHelper.getCountry().subscribe(function (res) {
                        console.log(res);
                        _this.countryList = res;
                        // this.signUpForm.get('countryCode').patchValue(this.countryList[0].callingCodes[0])
                    });
                    this.signUpForm.get('countryCode').valueChanges.subscribe(function (data) {
                        console.log(data);
                        if (data) {
                            var mobileData = _this.commonHelper.checkMobileNumber(data)[0];
                            if (mobileData.MaxNumberLengthNoPrefix < _this.maxLengthDigits) {
                                _this.signUpForm.get('mobileNumber').patchValue('');
                            }
                            _this.minLengthDigits = mobileData.MinNumberLengthNoPrefix;
                            _this.maxLengthDigits = mobileData.MaxNumberLengthNoPrefix;
                            console.log(_this.minLengthDigits, _this.maxLengthDigits);
                            _this.signUpForm.get('mobileNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(mobileData.MinNumberLengthNoPrefix), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(mobileData.MaxNumberLengthNoPrefix)]);
                            _this.signUpForm.get('mobileNumber').updateValueAndValidity();
                        }
                        else {
                            _this.signUpForm.get('mobileNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                            _this.signUpForm.get('mobileNumber').updateValueAndValidity();
                        }
                    });
                    this.signUpForm.get('mobileNumber').valueChanges.subscribe(function (data) {
                        console.log(_this.signUpForm.get('mobileNumber'));
                    });
                };
                SignupComponent.prototype.serviceType = function (event) {
                    if (event == 'prepaid') {
                        this.signUpForm.get('meterNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                    }
                    else {
                        this.signUpForm.get('meterNumber').clearValidators();
                    }
                    this.signUpForm.get('meterNumber').updateValueAndValidity();
                    console.log("clicked---------------------->>>", event);
                    event == 'prepaid' ? this.prepaidElec = true : this.prepaidElec = false;
                };
                SignupComponent.prototype.country = function (event) {
                    var countryObj = this.countryList.find(function (obj) { return obj.alpha2Code === event; });
                    this.selctedCountry = countryObj.name;
                    this.mobileOperator = countryObj.callingCodes[0];
                };
                SignupComponent.prototype.register = function () {
                    console.log("this.", this.signUpForm);
                    if (this.signUpForm.valid) {
                        var registerRequest = {
                            firstName: this.signUpForm.get('firstName').value,
                            lastName: this.signUpForm.get('lastName').value,
                            email: this.signUpForm.get('email').value,
                            mobileOperator: this.mobileOperator,
                            country: this.selctedCountry,
                            mobileNumber: this.signUpForm.get('mobileNumber').value,
                            amount: this.signUpForm.get('amount').value,
                            serviceType: this.signUpForm.get('serviceType').value,
                        };
                        console.log("registerRequest=========>>", registerRequest);
                        this.commonHelper.setUserDataForPayment(registerRequest);
                        this.router.navigate(['/payment']);
                        // this.authenticationService.register(registerRequest).subscribe(response=>{
                        //   this.commonHelper.showSuccessToast("Registration Success","Success",5000);
                        //   this.router.navigate(['/payment'])
                        //   localStorage.setItem("user",registerRequest.firstName)
                        //   this.commonHelper.setUserStatus(registerRequest.firstName);
                        // })
                    }
                    else {
                        this.commonHelper.validateFormFields(this.signUpForm);
                    }
                };
                SignupComponent.prototype.checkFieldValid = function (formControl) {
                    if (this.signUpForm.get([formControl]).errors && this.signUpForm.get([formControl]).errors.required &&
                        this.signUpForm.get([formControl]).touched) {
                        return 'is-invalid';
                    }
                    else {
                        return this.checkMinMaxError(formControl);
                    }
                };
                SignupComponent.prototype.checkMinMaxError = function (formControl) {
                    console.log(this.signUpForm.get([formControl]).errors && (this.signUpForm.get([formControl]).errors.minlength && this.signUpForm.get([formControl]).touched && !this.signUpForm.get([formControl]).errors.required));
                    if (this.signUpForm.get([formControl]).errors && (this.signUpForm.get([formControl]).errors.minlength && this.signUpForm.get([formControl]).touched && !this.signUpForm.get([formControl]).errors.required)) {
                        return 'is-invalid';
                    }
                    else
                        return '';
                };
                SignupComponent.prototype.checkMobileNumber = function () {
                    console.log(this.signUpForm.get('mobileNumber'));
                    if (this.signUpForm.get('mobileNumber').status == 'INVALID' && this.signUpForm.get('mobileNumber').touched)
                        return 'is-invalid';
                    else
                        return '';
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__["CommonHelperService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup-component/signup-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-component.component.css */ "./src/app/components/signup-component/signup-component.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/services/auth-guard.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/auth-guard.service.ts ***!
          \************************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService(route) {
                    this.route = route;
                }
                AuthGuardService.prototype.canActivate = function (next, state) {
                    if (!this.isLoggedIn()) {
                        this.route.navigate(['/login']);
                        return false;
                    }
                    return true;
                };
                AuthGuardService.prototype.isLoggedIn = function () {
                    return localStorage.getItem('user');
                };
                return AuthGuardService;
            }());
            AuthGuardService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/services/authentication.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/services/authentication.service.ts ***!
          \****************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    this.http = http;
                }
                AuthenticationService.prototype.register = function (data) {
                    return this.http.post("http://localhost:466", data);
                };
                AuthenticationService.prototype.payment = function (data) {
                    return this.http.post("http://localhost:7000/api/payment", data);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/services/common-helper.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/services/common-helper.service.ts ***!
          \***************************************************/
        /*! exports provided: CommonHelperService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHelperService", function () { return CommonHelperService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var CommonHelperService = /** @class */ (function () {
                function CommonHelperService(toastr, http) {
                    this.toastr = toastr;
                    this.http = http;
                    this.userStatus = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](localStorage.getItem('user'));
                    this.getUserStatus = this.userStatus.asObservable();
                    this.userDataForPayment = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
                    this.getUserDataForPayment = this.userDataForPayment.asObservable();
                    this.mockMobileData = [
                        {
                            "Name": "Afghanistan",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^930?([0-9]{9})$",
                            "CountryIso": "AF",
                            "PhoneNumberFormat": {
                                "Prefix": "93",
                                "FormatString": "{0:+ (##)-###-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^930?([0-9]{9})$",
                                "^930?(74[0-9]{7})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Aland Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "AX",
                            "PhoneNumberFormat": {
                                "Prefix": "358",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Albania",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^355[0-9]{9,9}$",
                            "CountryIso": "AL",
                            "PhoneNumberFormat": {
                                "Prefix": "355",
                                "FormatString": "{0:+(###)-####-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^355[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Algeria",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^213[0-9]{9}$",
                            "CountryIso": "DZ",
                            "PhoneNumberFormat": {
                                "Prefix": "213",
                                "FormatString": "{0:+ (###)-#####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^213[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "American Samoa",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "AS",
                            "PhoneNumberFormat": {
                                "Prefix": "1684",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Andorra",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "AD",
                            "PhoneNumberFormat": {
                                "Prefix": "376",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Angola",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "AO",
                            "PhoneNumberFormat": {
                                "Prefix": "244",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Anguilla",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1264[0-9]{7,7}$",
                            "CountryIso": "AI",
                            "PhoneNumberFormat": {
                                "Prefix": "1264",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1264[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Antarctica",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "AQ",
                            "PhoneNumberFormat": {
                                "Prefix": "672",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Antigua & Barbuda",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1268[0-9]{7,7}$",
                            "CountryIso": "AG",
                            "PhoneNumberFormat": {
                                "Prefix": "1268",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1268[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Argentina",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^549?([0-9]{10})$",
                            "CountryIso": "AR",
                            "PhoneNumberFormat": {
                                "Prefix": "54",
                                "FormatString": "{0:+(##)-##-###-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^549?([0-9]{10})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Armenia",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^374[0-9]{8,8}$",
                            "CountryIso": "AM",
                            "PhoneNumberFormat": {
                                "Prefix": "374",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^374[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Aruba",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^297[0-9]{7,7}$",
                            "CountryIso": "AW",
                            "PhoneNumberFormat": {
                                "Prefix": "297",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^297[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Australia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "AU",
                            "PhoneNumberFormat": {
                                "Prefix": "61",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Austria",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "AT",
                            "PhoneNumberFormat": {
                                "Prefix": "43",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Azerbaijan",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^994([0-9]{9})$",
                            "CountryIso": "AZ",
                            "PhoneNumberFormat": {
                                "Prefix": "994",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^994([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Bahamas",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1242([0-9]{7})$",
                            "CountryIso": "BS",
                            "PhoneNumberFormat": {
                                "Prefix": "1242",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1242([0-9]{7})$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Bahrain",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^973[0-9]{7,8}$|^0000000000$",
                            "CountryIso": "BH",
                            "PhoneNumberFormat": {
                                "Prefix": "973",
                                "FormatString": "{0:+ (###) ####-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^973[0-9]{7,8}$|^0000000000$",
                                "^973[0-9]{7,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Bangladesh",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^8800?(17[0-9]{8})$",
                            "CountryIso": "BD",
                            "PhoneNumberFormat": {
                                "Prefix": "880",
                                "FormatString": "{0:+ (###)-###-########}",
                                "PhoneNumberMinLength": 13,
                                "PhoneNumberMaxLength": 14,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^8800?(17[0-9]{8})$",
                                "^8800?([0-9]{10})$",
                                "^8800?(19[0-9]{8})$",
                                "^8800?(18[0-9]{8})$",
                                "^8800?(15[0-9]{8})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Barbados",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1246[0-9]{7,7}$",
                            "CountryIso": "BB",
                            "PhoneNumberFormat": {
                                "Prefix": "1246",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1246[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Belarus",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^375[0-9]{9}$",
                            "CountryIso": "BY",
                            "PhoneNumberFormat": {
                                "Prefix": "375",
                                "FormatString": "{0:+ (###)-##-###### }",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^375[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Belgium",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "324[0-9]{8}$|^0000000000$",
                            "CountryIso": "BE",
                            "PhoneNumberFormat": {
                                "Prefix": "32",
                                "FormatString": "{0:+ ## (###)-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "324[0-9]{8}$|^0000000000$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Belize",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^501[0-9]{7,7}$",
                            "CountryIso": "BZ",
                            "PhoneNumberFormat": {
                                "Prefix": "501",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^501[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Benin",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^229[0-9]{8,8}$",
                            "CountryIso": "BJ",
                            "PhoneNumberFormat": {
                                "Prefix": "229",
                                "FormatString": "{0:+ (###)-####-#### }",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^229[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Bermuda",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1441[0-9]{7,7}$",
                            "CountryIso": "BM",
                            "PhoneNumberFormat": {
                                "Prefix": "1441",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1441[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Bhutan",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^975[0-9]{8,8}$",
                            "CountryIso": "BT",
                            "PhoneNumberFormat": {
                                "Prefix": "975",
                                "FormatString": "{0:+ (###)-###-#####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^975[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Bolivia",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^591[0-9]{8,8}$",
                            "CountryIso": "BO",
                            "PhoneNumberFormat": {
                                "Prefix": "591",
                                "FormatString": "{0:+(###)-#-#######}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^591[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Bonaire, Sint Eustatius & Saba",
                            "MinNumberLengthNoPrefix": 6,
                            "MaxNumberLengthNoPrefix": 6,
                            "MobileRechargeValidator": "^5997[0-9]{6,6}$",
                            "CountryIso": "BQ",
                            "PhoneNumberFormat": {
                                "Prefix": "5997",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^5997[0-9]{6,6}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Bosnia & Herzegovina",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "BA",
                            "PhoneNumberFormat": {
                                "Prefix": "387",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Botswana",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^267[0-9]{8}$",
                            "CountryIso": "BW",
                            "PhoneNumberFormat": {
                                "Prefix": "267",
                                "FormatString": "{0:+ ### (##)-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^267[0-9]{8}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Bouvet Island",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "BV",
                            "PhoneNumberFormat": {
                                "Prefix": "47",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Brazil",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^55[0-9]{10,11}$",
                            "CountryIso": "BR",
                            "PhoneNumberFormat": {
                                "Prefix": "55",
                                "FormatString": "{0:+(##)-##-########}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^55[0-9]{10,11}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "British Indian Ocean Territory",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "IO",
                            "PhoneNumberFormat": {
                                "Prefix": "246",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "British Virgin Islands",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1284[0-9]{7,7}$",
                            "CountryIso": "VG",
                            "PhoneNumberFormat": {
                                "Prefix": "1284",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1284[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Brunei Darussalam",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "BN",
                            "PhoneNumberFormat": {
                                "Prefix": "673",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Bulgaria",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "BG",
                            "PhoneNumberFormat": {
                                "Prefix": "359",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Burkina Faso",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^226[0-9]{8}$",
                            "CountryIso": "BF",
                            "PhoneNumberFormat": {
                                "Prefix": "226",
                                "FormatString": "{0:+ (###)-##-##-##-##}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^226[0-9]{8}$",
                                "^226[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Burundi",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^257[0-9]{8,8}$",
                            "CountryIso": "BI",
                            "PhoneNumberFormat": {
                                "Prefix": "257",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^257[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Cambodia",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^855[0-9]{8,9}$",
                            "CountryIso": "KH",
                            "PhoneNumberFormat": {
                                "Prefix": "855",
                                "FormatString": "{0:+(###)-##-#######}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^855[0-9]{8,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Cameroon",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^237[0-9]{8,8}$",
                            "CountryIso": "CM",
                            "PhoneNumberFormat": {
                                "Prefix": "237",
                                "FormatString": "{0:+(###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^237[0-9]{8,8}$",
                                "^237[0-9]{8,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Canada",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^1([0-9]{10})$|^0000000000$",
                            "CountryIso": "CA",
                            "PhoneNumberFormat": {
                                "Prefix": "1",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1([0-9]{10})$|^0000000000$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Cape Verde",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^238[0-9]{7}$",
                            "CountryIso": "CV",
                            "PhoneNumberFormat": {
                                "Prefix": "238",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^238[0-9]{7}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Cayman Islands",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1345[0-9]{7,7}$",
                            "CountryIso": "KY",
                            "PhoneNumberFormat": {
                                "Prefix": "1345",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1345[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Central African Republic",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^236[0-9]{8,8}$",
                            "CountryIso": "CF",
                            "PhoneNumberFormat": {
                                "Prefix": "236",
                                "FormatString": "{0:+(###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^236[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Chad",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TD",
                            "PhoneNumberFormat": {
                                "Prefix": "235",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Chile",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^56[0-9]{8,9}$",
                            "CountryIso": "CL",
                            "PhoneNumberFormat": {
                                "Prefix": "56",
                                "FormatString": "{0:+ (##)-###-###-###}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^56[0-9]{8,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "China",
                            "MinNumberLengthNoPrefix": 11,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^86[0-9]{11,11}$",
                            "CountryIso": "CN",
                            "PhoneNumberFormat": {
                                "Prefix": "86",
                                "FormatString": "{0:+(##)-###-###-##### }",
                                "PhoneNumberMinLength": 13,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^86[0-9]{11,11}$",
                                "^86[0-9]{11}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Christmas Island",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "CX",
                            "PhoneNumberFormat": {
                                "Prefix": "61",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Cocos (Keeling) Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "CC",
                            "PhoneNumberFormat": {
                                "Prefix": "61",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Colombia",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^57[0-9]{10,10}$",
                            "CountryIso": "CO",
                            "PhoneNumberFormat": {
                                "Prefix": "57",
                                "FormatString": "{0:+ (##)-###-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^57[0-9]{10,10}$",
                                "^57([0-9]{10})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Comoros",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^269[0-9]{7}$",
                            "CountryIso": "KM",
                            "PhoneNumberFormat": {
                                "Prefix": "269",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^269[0-9]{7}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Congo",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^242[0-9]{9,9}$",
                            "CountryIso": "CG",
                            "PhoneNumberFormat": {
                                "Prefix": "242",
                                "FormatString": "{0:+ (###)-####-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^242[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Congo, The Democratic Republic Of The",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^243[0-9]{9,9}$",
                            "CountryIso": "CD",
                            "PhoneNumberFormat": {
                                "Prefix": "243",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^243[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Cook Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "CK",
                            "PhoneNumberFormat": {
                                "Prefix": "682",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Costa Rica",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^506[0-9]{8,8}$",
                            "CountryIso": "CR",
                            "PhoneNumberFormat": {
                                "Prefix": "506",
                                "FormatString": "{0:+(###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "Data",
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^506[0-9]{8}$",
                                "^506[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Côte d'Ivoire",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^225[0-9]{8,8}$",
                            "CountryIso": "CI",
                            "PhoneNumberFormat": {
                                "Prefix": "225",
                                "FormatString": "{0:+(###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^225[0-9]{8,8}$",
                                "^225[0-9]{8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Croatia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "HR",
                            "PhoneNumberFormat": {
                                "Prefix": "385",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Cuba",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^0?53([0-9]{8})$",
                            "CountryIso": "CU",
                            "PhoneNumberFormat": {
                                "Prefix": "53",
                                "FormatString": "{0:+(##)-####-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Electronics",
                                "InternetAccessTopup"
                            ],
                            "AccountRegexes": [
                                "^0?53([0-9]{8})$",
                                "^0?53(?!5)([0-9]{8})$",
                                "^530000000[0-9]{1}$|^0000000000$",
                                "^[\\w\\._%+-]+@nauta\\.(com|co)\\.cu$",
                                "^53[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Curacao",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^5999[0-9]{7,7}$",
                            "CountryIso": "CW",
                            "PhoneNumberFormat": {
                                "Prefix": "5999",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^5999[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Cyprus",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^357[0-9]{8,8}$",
                            "CountryIso": "CY",
                            "PhoneNumberFormat": {
                                "Prefix": "357",
                                "FormatString": "{0:+(###)-##-######}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^357[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Czech Republic",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "CZ",
                            "PhoneNumberFormat": {
                                "Prefix": "420",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Denmark",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "DK",
                            "PhoneNumberFormat": {
                                "Prefix": "45",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Djibouti",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "DJ",
                            "PhoneNumberFormat": {
                                "Prefix": "253",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Dominica",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1767[0-9]{7,7}$",
                            "CountryIso": "DM",
                            "PhoneNumberFormat": {
                                "Prefix": "1767",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1767[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Dominican Republic",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^18[0-9]{9,9}$",
                            "CountryIso": "DO",
                            "PhoneNumberFormat": {
                                "Prefix": "18",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": [
                                    "09",
                                    "29",
                                    "49",
                                    "88"
                                ]
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^18[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Ecuador",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^5930?(?:9)([0-9]{8})$",
                            "CountryIso": "EC",
                            "PhoneNumberFormat": {
                                "Prefix": "593",
                                "FormatString": "{0:+ (###)-#####-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^5930?(?:9)([0-9]{8})$",
                                "^(?:593)?0?9?([0-9]{8})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Egypt",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^20[0-9]{9,10}$",
                            "CountryIso": "EG",
                            "PhoneNumberFormat": {
                                "Prefix": "20",
                                "FormatString": "{0:+(##)-##-########}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^20[0-9]{9,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "El Salvador",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^503[0-9]{8,8}$",
                            "CountryIso": "SV",
                            "PhoneNumberFormat": {
                                "Prefix": "503",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^503[0-9]{8,8}$",
                                "^503([0-9]{8})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Equatorial Guinea",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "GQ",
                            "PhoneNumberFormat": {
                                "Prefix": "240",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Eritrea",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "ER",
                            "PhoneNumberFormat": {
                                "Prefix": "291",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Estonia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "EE",
                            "PhoneNumberFormat": {
                                "Prefix": "372",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Ethiopia",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^251[0-9]{9}$",
                            "CountryIso": "ET",
                            "PhoneNumberFormat": {
                                "Prefix": "251",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^251[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Falkland Islands (Malvinas)",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "FK",
                            "PhoneNumberFormat": {
                                "Prefix": "500",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Faroe Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "FO",
                            "PhoneNumberFormat": {
                                "Prefix": "298",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Fiji",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^679[0-9]{7,7}$",
                            "CountryIso": "FJ",
                            "PhoneNumberFormat": {
                                "Prefix": "679",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^679[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Finland",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "FI",
                            "PhoneNumberFormat": {
                                "Prefix": "358",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "France",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^330?([0-9]{9})$",
                            "CountryIso": "FR",
                            "PhoneNumberFormat": {
                                "Prefix": "33",
                                "FormatString": "{0:+ (##)-####-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Voucher"
                            ],
                            "AccountRegexes": [
                                "^330?([0-9]{9})$",
                                "^0{8,12}$|^33[0-9]{9}$",
                                "^33[0-9]{9}$|0000000000",
                                "^33[0-9]{9}$",
                                "^33[0-9]{9}$|^0000000000$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "French Guiana",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^594[0-9]{9,9}$",
                            "CountryIso": "GF",
                            "PhoneNumberFormat": {
                                "Prefix": "594",
                                "FormatString": "{0:+ (###)-###-###-###}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^594[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "French Polynesia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "PF",
                            "PhoneNumberFormat": {
                                "Prefix": "689",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "French Southern Territories",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TF",
                            "PhoneNumberFormat": {
                                "Prefix": "262",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Gabon",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "GA",
                            "PhoneNumberFormat": {
                                "Prefix": "241",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Gambia",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^220[0-9]{7}$",
                            "CountryIso": "GM",
                            "PhoneNumberFormat": {
                                "Prefix": "220",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^220[0-9]{7}$",
                                "^220[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Georgia",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^995[0-9]{8,9}$",
                            "CountryIso": "GE",
                            "PhoneNumberFormat": {
                                "Prefix": "995",
                                "FormatString": "{0:+ (###)-###-######}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^995[0-9]{8,9}$",
                                "^995[0-9]{8,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Germany",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 12,
                            "MobileRechargeValidator": "^490?([0-9]{10,11})$",
                            "CountryIso": "DE",
                            "PhoneNumberFormat": {
                                "Prefix": "49",
                                "FormatString": "{0:+ (##)-#####-#######}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 14,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^490?([0-9]{10,11})$",
                                "^490?([0-9]{10,11})$|^0000000000$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Ghana",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^2330?([0-9]{9})$",
                            "CountryIso": "GH",
                            "PhoneNumberFormat": {
                                "Prefix": "233",
                                "FormatString": "{0:+ (###)-####-######}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^2330?([0-9]{9})$",
                                "^2330?([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Gibraltar",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "GI",
                            "PhoneNumberFormat": {
                                "Prefix": "350",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Greece",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^30[0-9]{10}$|^0000000000$",
                            "CountryIso": "GR",
                            "PhoneNumberFormat": {
                                "Prefix": "30",
                                "FormatString": "{0:+ ## (###)-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^30[0-9]{10}$|^0000000000$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Greenland",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "GL",
                            "PhoneNumberFormat": {
                                "Prefix": "299",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Grenada",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1473[0-9]{7,7}$",
                            "CountryIso": "GD",
                            "PhoneNumberFormat": {
                                "Prefix": "1473",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1473[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Guadeloupe",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^590[0-9]{9,9}$",
                            "CountryIso": "GP",
                            "PhoneNumberFormat": {
                                "Prefix": "590",
                                "FormatString": "{0:+ (###)-###-###-###}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^590[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Guam",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "GU",
                            "PhoneNumberFormat": {
                                "Prefix": "1671",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Guatemala",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^502[0-9]{8,8}$",
                            "CountryIso": "GT",
                            "PhoneNumberFormat": {
                                "Prefix": "502",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "Data",
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^502([0-9]{8})$",
                                "^502[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Guernsey",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "GG",
                            "PhoneNumberFormat": {
                                "Prefix": "44",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Guinea",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^224[0-9]{8,9}$",
                            "CountryIso": "GN",
                            "PhoneNumberFormat": {
                                "Prefix": "224",
                                "FormatString": "{0:+ (###)-##-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^224[0-9]{8,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Guinea-Bissau",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^245[0-9]{7,7}$",
                            "CountryIso": "GW",
                            "PhoneNumberFormat": {
                                "Prefix": "245",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^245[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Guyana",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^592[0-9]{7,7}$",
                            "CountryIso": "GY",
                            "PhoneNumberFormat": {
                                "Prefix": "592",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^592[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Haiti",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^509[0-9]{8,8}$",
                            "CountryIso": "HT",
                            "PhoneNumberFormat": {
                                "Prefix": "509",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^509[0-9]{8,8}$",
                                "^509([0-9]{8})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Heard Island & Mcdonald Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "HM",
                            "PhoneNumberFormat": {
                                "Prefix": "0",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Holy See (Vatican City State)",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "VA",
                            "PhoneNumberFormat": {
                                "Prefix": "39",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Honduras",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^504([0-9]{8})$",
                            "CountryIso": "HN",
                            "PhoneNumberFormat": {
                                "Prefix": "504",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^504([0-9]{8})$",
                                "^504[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Hong Kong",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "HK",
                            "PhoneNumberFormat": {
                                "Prefix": "852",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Hungary",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "HU",
                            "PhoneNumberFormat": {
                                "Prefix": "36",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Iceland",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "IS",
                            "PhoneNumberFormat": {
                                "Prefix": "354",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "India",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^91[0-9]{10,10}$",
                            "CountryIso": "IN",
                            "PhoneNumberFormat": {
                                "Prefix": "91",
                                "FormatString": "{0:+ (##)-##-###-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^91[0-9]{10,10}$",
                                "^91[0-9]{10,11}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Indonesia",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 12,
                            "MobileRechargeValidator": "^62[0-9]{9,12}$",
                            "CountryIso": "ID",
                            "PhoneNumberFormat": {
                                "Prefix": "62",
                                "FormatString": "{0:+ (##)-######-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 14,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^62[0-9]{9,12}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Iran",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "IR",
                            "PhoneNumberFormat": {
                                "Prefix": "98",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Iraq",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^964[0-9]{10,10}$",
                            "CountryIso": "IQ",
                            "PhoneNumberFormat": {
                                "Prefix": "964",
                                "FormatString": "{0:+ (###)-###-###-####}",
                                "PhoneNumberMinLength": 13,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^964[0-9]{10,10}$",
                                "^964[0-9]{10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Ireland",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^3530?([0-9]{9})$",
                            "CountryIso": "IE",
                            "PhoneNumberFormat": {
                                "Prefix": "353",
                                "FormatString": "{0:+ ### (##)-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^3530?([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Isle Of Man",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "IM",
                            "PhoneNumberFormat": {
                                "Prefix": "44",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Israel",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "IL",
                            "PhoneNumberFormat": {
                                "Prefix": "972",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Italy",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^39[0-9]{10}$",
                            "CountryIso": "IT",
                            "PhoneNumberFormat": {
                                "Prefix": "39",
                                "FormatString": "{0:+ (##)-##-####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^39[0-9]{10}$",
                                "^39[0-9]{9,10}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Jamaica",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1?((?:876|658)[0-9]{7})$|^1(?:101|102|020)[0-9]{7}$",
                            "CountryIso": "JM",
                            "PhoneNumberFormat": {
                                "Prefix": "1876",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^1?((?:876|658)[0-9]{7})$|^1(?:101|102|020)[0-9]{7}$",
                                "^1?((?:876|658)[0-9]{7})$|^1(?:101|102|020)[0-9]{7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Japan",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "JP",
                            "PhoneNumberFormat": {
                                "Prefix": "81",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Jersey",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "JE",
                            "PhoneNumberFormat": {
                                "Prefix": "44",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Jordan",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^962[0-9]{9}$|^0000000000$",
                            "CountryIso": "JO",
                            "PhoneNumberFormat": {
                                "Prefix": "962",
                                "FormatString": "{0:+ (###)-#-###-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^962[0-9]{9}$|^0000000000$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Kazakhstan",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^77([0-9]{9})$",
                            "CountryIso": "KZ",
                            "PhoneNumberFormat": {
                                "Prefix": "77",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^77([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Kenya",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^254[0-9]{9,9}$",
                            "CountryIso": "KE",
                            "PhoneNumberFormat": {
                                "Prefix": "254",
                                "FormatString": "{0:+ (###)-###-#######}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^254[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Kiribati",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "KI",
                            "PhoneNumberFormat": {
                                "Prefix": "686",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Kosovo",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^383[0-9]{8}$",
                            "CountryIso": "XK",
                            "PhoneNumberFormat": {
                                "Prefix": "383",
                                "FormatString": "{0:+ (###)-##-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^383[0-9]{8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Kuwait",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^965[0-9]{8,8}$",
                            "CountryIso": "KW",
                            "PhoneNumberFormat": {
                                "Prefix": "965",
                                "FormatString": "{0:+ (###) ####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^965[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Kyrgyzstan",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^996[0-9]{9}$",
                            "CountryIso": "KG",
                            "PhoneNumberFormat": {
                                "Prefix": "996",
                                "FormatString": "{0:+ (###)-###-###-###}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^996[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Latvia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "LV",
                            "PhoneNumberFormat": {
                                "Prefix": "371",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Lebanon",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "LB",
                            "PhoneNumberFormat": {
                                "Prefix": "961",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Lesotho",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "LS",
                            "PhoneNumberFormat": {
                                "Prefix": "266",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Liberia",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^231[0-9]{7,9}$",
                            "CountryIso": "LR",
                            "PhoneNumberFormat": {
                                "Prefix": "231",
                                "FormatString": "{0:+ (###)-#####-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^231[0-9]{7,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Libyan Arab Jamahiriya",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "LY",
                            "PhoneNumberFormat": {
                                "Prefix": "218",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Liechtenstein",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "LI",
                            "PhoneNumberFormat": {
                                "Prefix": "423",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Lithuania",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^370[0-9]{8,8}$",
                            "CountryIso": "LT",
                            "PhoneNumberFormat": {
                                "Prefix": "370",
                                "FormatString": "{0:+ (###)-###-##-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^370[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Luxembourg",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^352([0-9]{9})$|^0000000000$",
                            "CountryIso": "LU",
                            "PhoneNumberFormat": {
                                "Prefix": "352",
                                "FormatString": "{0:+ ### #-####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^352([0-9]{9})$|^0000000000$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Macao",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MO",
                            "PhoneNumberFormat": {
                                "Prefix": "853",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Macedonia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MK",
                            "PhoneNumberFormat": {
                                "Prefix": "389",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Madagascar",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^261[0-9]{9,9}$",
                            "CountryIso": "MG",
                            "PhoneNumberFormat": {
                                "Prefix": "261",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^261[0-9]{9,9}$",
                                "^261[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Malawi",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^265[0-9]{7,9}$",
                            "CountryIso": "MW",
                            "PhoneNumberFormat": {
                                "Prefix": "265",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^265[0-9]{7,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Malaysia",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^600?([0-9]{9,10})$",
                            "CountryIso": "MY",
                            "PhoneNumberFormat": {
                                "Prefix": "60",
                                "FormatString": "{0:+ (##)-#####-#####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^600?([0-9]{9,10})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Maldives",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MV",
                            "PhoneNumberFormat": {
                                "Prefix": "960",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Mali",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^223[0-9]{8}$",
                            "CountryIso": "ML",
                            "PhoneNumberFormat": {
                                "Prefix": "223",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^223[0-9]{8}$",
                                "^223[0-9]{8}$|^0000000000$",
                                "^223[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Malta",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MT",
                            "PhoneNumberFormat": {
                                "Prefix": "356",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Marshall Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MH",
                            "PhoneNumberFormat": {
                                "Prefix": "692",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Martinique",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^596[0-9]{9,9}$",
                            "CountryIso": "MQ",
                            "PhoneNumberFormat": {
                                "Prefix": "596",
                                "FormatString": "{0:+ (###)-###-###-###}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^596[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Mauritania",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MR",
                            "PhoneNumberFormat": {
                                "Prefix": "222",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Mauritius",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MU",
                            "PhoneNumberFormat": {
                                "Prefix": "230",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Mayotte",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "YT",
                            "PhoneNumberFormat": {
                                "Prefix": "262",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Mexico",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^521?([2-9][0-9]{9})$",
                            "CountryIso": "MX",
                            "PhoneNumberFormat": {
                                "Prefix": "52",
                                "FormatString": "{0:+ (##)-#####-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^521?([2-9][0-9]{9})$",
                                "^52[0-9]{10,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Micronesia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "FM",
                            "PhoneNumberFormat": {
                                "Prefix": "691",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Moldova",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^373[0-9]{8,8}$",
                            "CountryIso": "MD",
                            "PhoneNumberFormat": {
                                "Prefix": "373",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^373[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Monaco",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MC",
                            "PhoneNumberFormat": {
                                "Prefix": "377",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Mongolia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MN",
                            "PhoneNumberFormat": {
                                "Prefix": "976",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Montenegro",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "ME",
                            "PhoneNumberFormat": {
                                "Prefix": "382",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Montserrat",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1664[0-9]{7,7}$",
                            "CountryIso": "MS",
                            "PhoneNumberFormat": {
                                "Prefix": "1664",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1664[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Morocco",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^212[0-9]{9,9}$",
                            "CountryIso": "MA",
                            "PhoneNumberFormat": {
                                "Prefix": "212",
                                "FormatString": "{0:+ (###)-###-##-##-##}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^212[0-9]{9,9}$",
                                "^212([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Mozambique",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^258[0-9]{9,9}$",
                            "CountryIso": "MZ",
                            "PhoneNumberFormat": {
                                "Prefix": "258",
                                "FormatString": "{0:+ (###)-###-###-###}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^258[0-9]{9,9}$",
                                "^258[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Myanmar",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^95[0-9]{10}$",
                            "CountryIso": "MM",
                            "PhoneNumberFormat": {
                                "Prefix": "95",
                                "FormatString": "{0:+ (##)-###-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^95[0-9]{10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Namibia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "NA",
                            "PhoneNumberFormat": {
                                "Prefix": "264",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Nauru",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^674[0-9]{7,7}$",
                            "CountryIso": "NR",
                            "PhoneNumberFormat": {
                                "Prefix": "674",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^674[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Nepal",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^977(9(?:88|6)[0-9]{7,8})$",
                            "CountryIso": "NP",
                            "PhoneNumberFormat": {
                                "Prefix": "977",
                                "FormatString": "{0:+ (###)-##########}",
                                "PhoneNumberMinLength": 13,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": [
                                    "7"
                                ]
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^977(9(?:88|6)[0-9]{7,8})$",
                                "^977(9(?:80|81|82)[0-9]{7})$",
                                "^977(9(?:84|85|86)[0-9]{7})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Netherlands",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^31([0-9]{9})$|^0000000000$",
                            "CountryIso": "NL",
                            "PhoneNumberFormat": {
                                "Prefix": "31",
                                "FormatString": "{0:+ ## #-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^31([0-9]{9})$|^0000000000$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "New Caledonia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "NC",
                            "PhoneNumberFormat": {
                                "Prefix": "687",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "New Zealand",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "NZ",
                            "PhoneNumberFormat": {
                                "Prefix": "64",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Nicaragua",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^505([0-9]{8})$",
                            "CountryIso": "NI",
                            "PhoneNumberFormat": {
                                "Prefix": "505",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "Data",
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^505([0-9]{8})$",
                                "^505([0-9]{8})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Niger",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^227[0-9]{8,8}$",
                            "CountryIso": "NE",
                            "PhoneNumberFormat": {
                                "Prefix": "227",
                                "FormatString": "{0:+ (###)-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^227[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Nigeria",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^2340?([0-9]{10})$",
                            "CountryIso": "NG",
                            "PhoneNumberFormat": {
                                "Prefix": "234",
                                "FormatString": "{0:+ (###)-###-####-####}",
                                "PhoneNumberMinLength": 13,
                                "PhoneNumberMaxLength": 14,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^2340?([0-9]{10})$",
                                "^2340?([0-9]{10})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Niue",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "NU",
                            "PhoneNumberFormat": {
                                "Prefix": "683",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Norfolk Island",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "NF",
                            "PhoneNumberFormat": {
                                "Prefix": "672",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "North Korea",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "KP",
                            "PhoneNumberFormat": {
                                "Prefix": "850",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Northern Mariana Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MP",
                            "PhoneNumberFormat": {
                                "Prefix": "1671",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Norway",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "NO",
                            "PhoneNumberFormat": {
                                "Prefix": "47",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Oman",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^968[0-9]{8}$|^0000000000$",
                            "CountryIso": "OM",
                            "PhoneNumberFormat": {
                                "Prefix": "968",
                                "FormatString": "{0:+ ### ####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^968[0-9]{8}$|^0000000000$",
                                "^968[0-9]{8}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Pakistan",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^92[0-9]{10,10}$",
                            "CountryIso": "PK",
                            "PhoneNumberFormat": {
                                "Prefix": "92",
                                "FormatString": "{0:+ (##)-###-#######}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^92[0-9]{10,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Palau",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "PW",
                            "PhoneNumberFormat": {
                                "Prefix": "680",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Palestine",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^97[0-9]{10,10}$",
                            "CountryIso": "PS",
                            "PhoneNumberFormat": {
                                "Prefix": "97",
                                "FormatString": "{0:+ (##)-#####-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": [
                                    "0",
                                    "2"
                                ]
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^97[0-9]{10,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Panama",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^507[0-9]{8,8}$",
                            "CountryIso": "PA",
                            "PhoneNumberFormat": {
                                "Prefix": "507",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^507[0-9]{8,8}$",
                                "^507[0-9]{8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Papua New Guinea",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^675[0-9]{8,8}$",
                            "CountryIso": "PG",
                            "PhoneNumberFormat": {
                                "Prefix": "675",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^675[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Paraguay",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^595[0-9]{8,9}$",
                            "CountryIso": "PY",
                            "PhoneNumberFormat": {
                                "Prefix": "595",
                                "FormatString": "{0:+ (###)-###-###-### }",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^595[0-9]{8,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Peru",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^51[0-9]{9,9}$",
                            "CountryIso": "PE",
                            "PhoneNumberFormat": {
                                "Prefix": "51",
                                "FormatString": "{0:+ (##)-#-#########}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^51[0-9]{9,9}$",
                                "^51([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Philippines",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^630?([0-9]{10})$",
                            "CountryIso": "PH",
                            "PhoneNumberFormat": {
                                "Prefix": "63",
                                "FormatString": "{0:+ (##)-####-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data"
                            ],
                            "AccountRegexes": [
                                "^630?([0-9]{10})$",
                                "^630?([0-9]{10})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Pitcairn",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "PN",
                            "PhoneNumberFormat": {
                                "Prefix": "870",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Poland",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^48[0-9]{9,9}$",
                            "CountryIso": "PL",
                            "PhoneNumberFormat": {
                                "Prefix": "48",
                                "FormatString": "{0:+ (##)-####-#####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^48[0-9]{9,9}$",
                                "^48[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Portugal",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^351?(9[0-9]{8})$",
                            "CountryIso": "PT",
                            "PhoneNumberFormat": {
                                "Prefix": "351",
                                "FormatString": "{0:+ (###)-#-####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^351?(9[0-9]{8})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Puerto Rico",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^1[0-9]{10,10}$",
                            "CountryIso": "PR",
                            "PhoneNumberFormat": {
                                "Prefix": "1",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": [
                                    "787",
                                    "939"
                                ]
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1[0-9]{10,10}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Qatar",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^974[0-9]{8}$|^0000000000$",
                            "CountryIso": "QA",
                            "PhoneNumberFormat": {
                                "Prefix": "974",
                                "FormatString": "{0:+ (###)-##-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^974[0-9]{8}$|^0000000000$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Reunion",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "RE",
                            "PhoneNumberFormat": {
                                "Prefix": "262",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Romania",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^407[0-9]{8,8}$",
                            "CountryIso": "RO",
                            "PhoneNumberFormat": {
                                "Prefix": "40",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^407[0-9]{8,8}$",
                                "^40[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Russia",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^7[0-9]{10,10}$",
                            "CountryIso": "RU",
                            "PhoneNumberFormat": {
                                "Prefix": "7",
                                "FormatString": "{0:+ (#)-###-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": [
                                    "9",
                                    "901",
                                    "902",
                                    "903",
                                    "904",
                                    "905",
                                    "906",
                                    "908",
                                    "909",
                                    "910",
                                    "911",
                                    "912",
                                    "913",
                                    "914",
                                    "915",
                                    "916",
                                    "917",
                                    "918",
                                    "919",
                                    "920",
                                    "921",
                                    "922",
                                    "923",
                                    "924",
                                    "925",
                                    "926",
                                    "927",
                                    "928",
                                    "929",
                                    "930",
                                    "931",
                                    "932",
                                    "933",
                                    "934",
                                    "936",
                                    "937",
                                    "938",
                                    "940",
                                    "950",
                                    "951",
                                    "952",
                                    "953",
                                    "960",
                                    "961",
                                    "962",
                                    "963",
                                    "964",
                                    "965",
                                    "967",
                                    "968",
                                    "980",
                                    "981",
                                    "982",
                                    "983",
                                    "984",
                                    "985",
                                    "987",
                                    "988",
                                    "989",
                                    "997"
                                ]
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^7[0-9]{10,10}$",
                                "^7[0-9]{10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Rwanda",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^250[0-9]{9,9}$",
                            "CountryIso": "RW",
                            "PhoneNumberFormat": {
                                "Prefix": "250",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^250[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Saint Martin",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "MF",
                            "PhoneNumberFormat": {
                                "Prefix": "721",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Samoa",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^685[0-9]{7,7}$",
                            "CountryIso": "WS",
                            "PhoneNumberFormat": {
                                "Prefix": "685",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^685[0-9]{7,7}$",
                                "^685[0-9]{7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "San Marino",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SM",
                            "PhoneNumberFormat": {
                                "Prefix": "378",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Sao Tome & Principe",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "ST",
                            "PhoneNumberFormat": {
                                "Prefix": "239",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Saudi Arabia",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^966[0-9]{9}$|^0000000000$",
                            "CountryIso": "SA",
                            "PhoneNumberFormat": {
                                "Prefix": "966",
                                "FormatString": "{0:+ (###)-#-####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Voucher"
                            ],
                            "AccountRegexes": [
                                "^966[0-9]{9}$|^0000000000$",
                                "^966[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Senegal",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^221[0-9]{9,9}$",
                            "CountryIso": "SN",
                            "PhoneNumberFormat": {
                                "Prefix": "221",
                                "FormatString": "{0:+ (###)-####-#####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^221[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Seychelles",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SC",
                            "PhoneNumberFormat": {
                                "Prefix": "248",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Sierra Leone",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^232([0-9]{8,9})$",
                            "CountryIso": "SL",
                            "PhoneNumberFormat": {
                                "Prefix": "232",
                                "FormatString": "{0:+ (###)-##-#-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^232([0-9]{8,9})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Singapore",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^65[0-9]{8}$",
                            "CountryIso": "SG",
                            "PhoneNumberFormat": {
                                "Prefix": "65",
                                "FormatString": "{0:+ (##)-####-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^65[0-9]{8}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Sint Maarten (Dutch part)",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SX",
                            "PhoneNumberFormat": {
                                "Prefix": "1",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Slovakia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SK",
                            "PhoneNumberFormat": {
                                "Prefix": "421",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Slovenia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SI",
                            "PhoneNumberFormat": {
                                "Prefix": "386",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Solomon Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SB",
                            "PhoneNumberFormat": {
                                "Prefix": "677",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Somalia",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SO",
                            "PhoneNumberFormat": {
                                "Prefix": "252",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "South Africa",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^27[0-9]{9,9}$",
                            "CountryIso": "ZA",
                            "PhoneNumberFormat": {
                                "Prefix": "27",
                                "FormatString": "{0:+ (##)-##-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^27[0-9]{9,9}$",
                                "^27[0-9]{10,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "South Georgia & The South Sandwich Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "GS",
                            "PhoneNumberFormat": {
                                "Prefix": "500",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "South Korea",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "KR",
                            "PhoneNumberFormat": {
                                "Prefix": "82",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "South Sudan",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SS",
                            "PhoneNumberFormat": {
                                "Prefix": "211",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Spain",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^34[0-9]{9,9}$",
                            "CountryIso": "ES",
                            "PhoneNumberFormat": {
                                "Prefix": "34",
                                "FormatString": "{0:+ (##)-###-###-###}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^34[0-9]{9,9}$",
                                "^34[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Sri Lanka",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^940?([0-9]{9})$",
                            "CountryIso": "LK",
                            "PhoneNumberFormat": {
                                "Prefix": "94",
                                "FormatString": "{0:+ (##)-####-######}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^940?([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "St. Helena",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SH",
                            "PhoneNumberFormat": {
                                "Prefix": "290",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "St. Kitts & Nevis",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1869[0-9]{7,7}$",
                            "CountryIso": "KN",
                            "PhoneNumberFormat": {
                                "Prefix": "1869",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1869[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "St. Lucia",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1758[0-9]{7,7}$",
                            "CountryIso": "LC",
                            "PhoneNumberFormat": {
                                "Prefix": "1758",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1758[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "St. Pierre & Miquelon",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "PM",
                            "PhoneNumberFormat": {
                                "Prefix": "508",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "St. Vincent & The Grenadines",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1784[0-9]{7,7}$",
                            "CountryIso": "VC",
                            "PhoneNumberFormat": {
                                "Prefix": "1784",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1784[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Sudan",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SD",
                            "PhoneNumberFormat": {
                                "Prefix": "249",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Suriname",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^597[0-9]{7,7}$",
                            "CountryIso": "SR",
                            "PhoneNumberFormat": {
                                "Prefix": "597",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^597[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Svalbard & Jan Mayen",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SJ",
                            "PhoneNumberFormat": {
                                "Prefix": "47",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Swaziland",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^268[0-9]{8,8}$",
                            "CountryIso": "SZ",
                            "PhoneNumberFormat": {
                                "Prefix": "268",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^268[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Sweden",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SE",
                            "PhoneNumberFormat": {
                                "Prefix": "46",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Switzerland",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^41[0-9]{9}$",
                            "CountryIso": "CH",
                            "PhoneNumberFormat": {
                                "Prefix": "41",
                                "FormatString": "{0:+ ## (##)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^41[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Syrian Arab Republic",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "SY",
                            "PhoneNumberFormat": {
                                "Prefix": "963",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Taiwan",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TW",
                            "PhoneNumberFormat": {
                                "Prefix": "886",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Tajikistan",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^992[0-9]{9,9}$",
                            "CountryIso": "TJ",
                            "PhoneNumberFormat": {
                                "Prefix": "992",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^992[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Tanzania",
                            "MinNumberLengthNoPrefix": 6,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^255[0-9]{9,9}$",
                            "CountryIso": "TZ",
                            "PhoneNumberFormat": {
                                "Prefix": "255",
                                "FormatString": "{0:+ (##)-##-###-#####}",
                                "PhoneNumberMinLength": 9,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^255[0-9]{9,9}$",
                                "^255[0-9]{9}$",
                                "^255[0-9]{6,6}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Thailand",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^660?([0-9]{9})$",
                            "CountryIso": "TH",
                            "PhoneNumberFormat": {
                                "Prefix": "66",
                                "FormatString": "{0:+ (##)-###-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^660?([0-9]{9})$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Timor-Leste",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TL",
                            "PhoneNumberFormat": {
                                "Prefix": "670",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Togo",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TG",
                            "PhoneNumberFormat": {
                                "Prefix": "228",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Tokelau",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TK",
                            "PhoneNumberFormat": {
                                "Prefix": "690",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Tonga",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^676[0-9]{7,7}$",
                            "CountryIso": "TO",
                            "PhoneNumberFormat": {
                                "Prefix": "676",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 10,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^676[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Trinidad & Tobago",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1868[0-9]{7,7}$",
                            "CountryIso": "TT",
                            "PhoneNumberFormat": {
                                "Prefix": "1868",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "Data",
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1?868([0-9]{7})$",
                                "^1868[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Tunisia",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^216[0-9]{8,8}$",
                            "CountryIso": "TN",
                            "PhoneNumberFormat": {
                                "Prefix": "216",
                                "FormatString": "{0:+ (###)-####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^216[0-9]{8,8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Turkey",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^90[0-9]{10,10}$",
                            "CountryIso": "TR",
                            "PhoneNumberFormat": {
                                "Prefix": "90",
                                "FormatString": "{0:+ (##)-####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^90[0-9]{10,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Turkmenistan",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TM",
                            "PhoneNumberFormat": {
                                "Prefix": "993",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Turks & Caicos Islands",
                            "MinNumberLengthNoPrefix": 7,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^1649[0-9]{7,7}$",
                            "CountryIso": "TC",
                            "PhoneNumberFormat": {
                                "Prefix": "1649",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^1649[0-9]{7,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Tuvalu",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "TV",
                            "PhoneNumberFormat": {
                                "Prefix": "688",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "U.S. Virgin Islands",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "VI",
                            "PhoneNumberFormat": {
                                "Prefix": "1340",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Uganda",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^256[0-9]{9,9}$",
                            "CountryIso": "UG",
                            "PhoneNumberFormat": {
                                "Prefix": "256",
                                "FormatString": "{0:+ (###)-###-###-###}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^256[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Ukraine",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^380[0-9]{9,9}$",
                            "CountryIso": "UA",
                            "PhoneNumberFormat": {
                                "Prefix": "380",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^380[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "United Arab Emirates",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^9710?(?:5)([0-9]{8})$",
                            "CountryIso": "AE",
                            "PhoneNumberFormat": {
                                "Prefix": "971",
                                "FormatString": "{0:+ (###)-###-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Data",
                                "Voucher"
                            ],
                            "AccountRegexes": [
                                "^9710?(?:5)([0-9]{8})$",
                                "^971([0-9]{9})$|0000000000",
                                "^9710?(?:5)([0-9]{8})$|^0000000000$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "United Kingdom",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 11,
                            "MobileRechargeValidator": "^440?([0-9]{10})$",
                            "CountryIso": "GB",
                            "PhoneNumberFormat": {
                                "Prefix": "44",
                                "FormatString": "{0:+ ## (###)-####-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 13,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Voucher"
                            ],
                            "AccountRegexes": [
                                "^440?([0-9]{10})$",
                                "^0000000000$|^440?([0-9]{10})$",
                                "^0000000000$|^1000000000[0-9]$",
                                "^440?([0-9]{10})$|0000000000",
                                "^44[0-9]{10}$|0000000000"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Uruguay",
                            "MinNumberLengthNoPrefix": 8,
                            "MaxNumberLengthNoPrefix": 8,
                            "MobileRechargeValidator": "^598[0-9]{8,8}$",
                            "CountryIso": "UY",
                            "PhoneNumberFormat": {
                                "Prefix": "598",
                                "FormatString": "{0:+ (###)-##-######}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^598[0-9]{8,8}$",
                                "^598[0-9]{8}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "USA",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^1[0-9]{10,10}$",
                            "CountryIso": "US",
                            "PhoneNumberFormat": {
                                "Prefix": "1",
                                "FormatString": "{0:+ # (###)-###-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 11,
                                "NationalDestinationCodes": [
                                    "201",
                                    "202",
                                    "203",
                                    "205",
                                    "206",
                                    "207",
                                    "208",
                                    "209",
                                    "210",
                                    "212",
                                    "213",
                                    "214",
                                    "215",
                                    "216",
                                    "217",
                                    "218",
                                    "219",
                                    "224",
                                    "225",
                                    "228",
                                    "229",
                                    "231",
                                    "234",
                                    "239",
                                    "240",
                                    "248",
                                    "251",
                                    "252",
                                    "253",
                                    "254",
                                    "256",
                                    "260",
                                    "262",
                                    "267",
                                    "269",
                                    "270",
                                    "276",
                                    "281",
                                    "301",
                                    "302",
                                    "303",
                                    "304",
                                    "305",
                                    "307",
                                    "308",
                                    "309",
                                    "310",
                                    "312",
                                    "313",
                                    "314",
                                    "315",
                                    "316",
                                    "317",
                                    "318",
                                    "319",
                                    "320",
                                    "321",
                                    "323",
                                    "325",
                                    "330",
                                    "331",
                                    "334",
                                    "336",
                                    "337",
                                    "339",
                                    "347",
                                    "351",
                                    "352",
                                    "360",
                                    "361",
                                    "385",
                                    "386",
                                    "401",
                                    "402",
                                    "404",
                                    "405",
                                    "406",
                                    "407",
                                    "408",
                                    "409",
                                    "410",
                                    "412",
                                    "413",
                                    "414",
                                    "415",
                                    "417",
                                    "419",
                                    "423",
                                    "424",
                                    "425",
                                    "430",
                                    "432",
                                    "434",
                                    "435",
                                    "440",
                                    "443",
                                    "469",
                                    "470",
                                    "475",
                                    "478",
                                    "479",
                                    "480",
                                    "484",
                                    "501",
                                    "502",
                                    "503",
                                    "504",
                                    "505",
                                    "507",
                                    "508",
                                    "509",
                                    "510",
                                    "512",
                                    "513",
                                    "515",
                                    "516",
                                    "517",
                                    "518",
                                    "520",
                                    "530",
                                    "531",
                                    "534",
                                    "539",
                                    "540",
                                    "541",
                                    "551",
                                    "559",
                                    "561",
                                    "562",
                                    "563",
                                    "567",
                                    "570",
                                    "571",
                                    "573",
                                    "574",
                                    "575",
                                    "580",
                                    "585",
                                    "586",
                                    "587",
                                    "601",
                                    "602",
                                    "603",
                                    "605",
                                    "606",
                                    "607",
                                    "608",
                                    "609",
                                    "610",
                                    "612",
                                    "614",
                                    "615",
                                    "616",
                                    "617",
                                    "618",
                                    "619",
                                    "620",
                                    "623",
                                    "626",
                                    "630",
                                    "631",
                                    "636",
                                    "641",
                                    "646",
                                    "650",
                                    "651",
                                    "657",
                                    "660",
                                    "661",
                                    "662",
                                    "678",
                                    "681",
                                    "682",
                                    "701",
                                    "702",
                                    "703",
                                    "704",
                                    "706",
                                    "707",
                                    "708",
                                    "712",
                                    "713",
                                    "714",
                                    "715",
                                    "716",
                                    "717",
                                    "718",
                                    "719",
                                    "720",
                                    "724",
                                    "727",
                                    "731",
                                    "732",
                                    "734",
                                    "740",
                                    "747",
                                    "754",
                                    "757",
                                    "760",
                                    "762",
                                    "763",
                                    "765",
                                    "769",
                                    "770",
                                    "772",
                                    "773",
                                    "774",
                                    "775",
                                    "779",
                                    "781",
                                    "785",
                                    "786",
                                    "801",
                                    "802",
                                    "803",
                                    "804",
                                    "805",
                                    "806",
                                    "808",
                                    "810",
                                    "812",
                                    "813",
                                    "814",
                                    "815",
                                    "816",
                                    "817",
                                    "818",
                                    "828",
                                    "830",
                                    "831",
                                    "832",
                                    "843",
                                    "845",
                                    "847",
                                    "848",
                                    "850",
                                    "856",
                                    "857",
                                    "858",
                                    "859",
                                    "860",
                                    "862",
                                    "863",
                                    "864",
                                    "865",
                                    "870",
                                    "872",
                                    "878",
                                    "901",
                                    "903",
                                    "904",
                                    "906",
                                    "907",
                                    "908",
                                    "909",
                                    "910",
                                    "912",
                                    "913",
                                    "914",
                                    "915",
                                    "916",
                                    "917",
                                    "918",
                                    "919",
                                    "920",
                                    "925",
                                    "928",
                                    "931",
                                    "936",
                                    "937",
                                    "940",
                                    "941",
                                    "947",
                                    "949",
                                    "951",
                                    "952",
                                    "954",
                                    "956",
                                    "970",
                                    "971",
                                    "972",
                                    "973",
                                    "978",
                                    "979",
                                    "980",
                                    "985",
                                    "989"
                                ]
                            },
                            "ProductTypes": [
                                "MobileRecharge",
                                "Voucher"
                            ],
                            "AccountRegexes": [
                                "^1[0-9]{10,10}$",
                                "^1([0-9]{10})$",
                                "^0000000000$|^1000000000[0-9]$",
                                "^1([0-9]{10})$|^0000000000$",
                                "0000000000|^1([0-9]{10})$",
                                "^1([0-9]{10})$|0000000000",
                                "^1000000000[0-9]$|^0000000000$"
                            ],
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Uzbekistan",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^998[0-9]{9,9}$",
                            "CountryIso": "UZ",
                            "PhoneNumberFormat": {
                                "Prefix": "998",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^998[0-9]{9,9}$",
                                "^998[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Vanuatu",
                            "MinNumberLengthNoPrefix": 5,
                            "MaxNumberLengthNoPrefix": 7,
                            "MobileRechargeValidator": "^678[0-9]{5,7}$",
                            "CountryIso": "VU",
                            "PhoneNumberFormat": {
                                "Prefix": "678",
                                "FormatString": "{0:+ (###)-###-####}",
                                "PhoneNumberMinLength": 8,
                                "PhoneNumberMaxLength": 10,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^678[0-9]{5,7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Venezuela",
                            "MinNumberLengthNoPrefix": 10,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^58(?:414|424)[0-9]{7}$",
                            "CountryIso": "VE",
                            "PhoneNumberFormat": {
                                "Prefix": "58",
                                "FormatString": "{0:+ (##)-###-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^58(?:414|424)[0-9]{7}$",
                                "^58[0-9]{10}$",
                                "^58(?:416|426)[0-9]{7}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Vietnam",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 10,
                            "MobileRechargeValidator": "^84[0-9]{9,10}$",
                            "CountryIso": "VN",
                            "PhoneNumberFormat": {
                                "Prefix": "84",
                                "FormatString": "{0:+ (##)-#####-####}",
                                "PhoneNumberMinLength": 11,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^84[0-9]{9,10}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Wallis & Futuna",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "WF",
                            "PhoneNumberFormat": {
                                "Prefix": "681",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Western Sahara",
                            "MinNumberLengthNoPrefix": 0,
                            "MaxNumberLengthNoPrefix": 0,
                            "MobileRechargeValidator": null,
                            "CountryIso": "EH",
                            "PhoneNumberFormat": {
                                "Prefix": "212",
                                "FormatString": null,
                                "PhoneNumberMinLength": 0,
                                "PhoneNumberMaxLength": 0,
                                "NationalDestinationCodes": null
                            },
                            "ProductTypes": null,
                            "AccountRegexes": null,
                            "OperatorLookupSupported": false
                        },
                        {
                            "Name": "Yemen",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^967[0-9]{9,9}$",
                            "CountryIso": "YE",
                            "PhoneNumberFormat": {
                                "Prefix": "967",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^967[0-9]{9,9}$",
                                "^967[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Zambia",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^260[0-9]{9,9}$",
                            "CountryIso": "ZM",
                            "PhoneNumberFormat": {
                                "Prefix": "260",
                                "FormatString": "{0:+ (###)-##-###-####}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^260[0-9]{9,9}$",
                                "^260[0-9]{9}$"
                            ],
                            "OperatorLookupSupported": true
                        },
                        {
                            "Name": "Zimbabwe",
                            "MinNumberLengthNoPrefix": 9,
                            "MaxNumberLengthNoPrefix": 9,
                            "MobileRechargeValidator": "^263[0-9]{9,9}$",
                            "CountryIso": "ZW",
                            "PhoneNumberFormat": {
                                "Prefix": "263",
                                "FormatString": "{0:+ (###)-###-###-###}",
                                "PhoneNumberMinLength": 12,
                                "PhoneNumberMaxLength": 12,
                                "NationalDestinationCodes": []
                            },
                            "ProductTypes": [
                                "MobileRecharge"
                            ],
                            "AccountRegexes": [
                                "^263[0-9]{9,9}$"
                            ],
                            "OperatorLookupSupported": true
                        }
                    ];
                }
                CommonHelperService.prototype.showErrorToast = function (errorTitle, message, time) {
                    this.toastr.error(errorTitle, message, { timeOut: time });
                };
                CommonHelperService.prototype.showSuccessToast = function (message, errorTitle, time) {
                    this.toastr.success(message, errorTitle, { timeOut: time });
                };
                CommonHelperService.prototype.validateFormFields = function (formGroup) {
                    var _this = this;
                    Object.keys(formGroup.controls).forEach(function (field) {
                        var control = formGroup.get(field);
                        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
                            control.markAsDirty({ onlySelf: true });
                            control.markAsTouched({ onlySelf: true });
                            if (control.errors && control.errors.required) {
                                _this.showErrorToast("Field is Required", "Error", 3000);
                            }
                        }
                        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                            _this.validateFormFields(control);
                        }
                    });
                };
                CommonHelperService.prototype.getCountry = function () {
                    return this.http.get("https://restcountries.eu/rest/v2/all");
                };
                CommonHelperService.prototype.setUserStatus = function (data) {
                    this.userStatus.next(data);
                };
                CommonHelperService.prototype.setUserDataForPayment = function (data) {
                    this.userDataForPayment.next(data);
                };
                CommonHelperService.prototype.checkMobileNumber = function (code) {
                    return this.mockMobileData.filter(function (data) { return data.CountryIso == code; });
                };
                return CommonHelperService;
            }());
            CommonHelperService.ctorParameters = function () { return [
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            CommonHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CommonHelperService);
            /***/ 
        }),
        /***/ "./src/app/services/http-interceptor.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/services/http-interceptor.service.ts ***!
          \******************************************************/
        /*! exports provided: HttpInterceptorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () { return HttpInterceptorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _common_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-helper.service */ "./src/app/services/common-helper.service.ts");
            var HttpInterceptorService = /** @class */ (function () {
                function HttpInterceptorService(commonHelper) {
                    this.commonHelper = commonHelper;
                }
                HttpInterceptorService.prototype.intercept = function (request, next) {
                    var _this = this;
                    return next.handle(request)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                        var errorMessage = '';
                        if (error.error instanceof ErrorEvent) {
                            // client-side error
                            errorMessage = "Error: " + error.error.message;
                        }
                        else {
                            // server-side error
                            errorMessage = "Error Status: " + error.status + "\nMessage: " + error.message;
                            _this.commonHelper.showErrorToast("Error", errorMessage, 5000);
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
                    }));
                };
                return HttpInterceptorService;
            }());
            HttpInterceptorService.ctorParameters = function () { return [
                { type: _common_helper_service__WEBPACK_IMPORTED_MODULE_4__["CommonHelperService"] }
            ]; };
            HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HttpInterceptorService);
            /***/ 
        }),
        /***/ "./src/app/shared/directives/alphabets-only.directive.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/shared/directives/alphabets-only.directive.ts ***!
          \***************************************************************/
        /*! exports provided: AlphabetsOnlyDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetsOnlyDirective", function () { return AlphabetsOnlyDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AlphabetsOnlyDirective = /** @class */ (function () {
                function AlphabetsOnlyDirective(_el) {
                    this._el = _el;
                }
                AlphabetsOnlyDirective.prototype.onInputChange = function (event) {
                    console.log("dsfsdf");
                    var initalValue = this._el.nativeElement.value;
                    this._el.nativeElement.value = initalValue.replace(/[^A-Za-z]+$/g, '');
                    if (initalValue !== this._el.nativeElement.value) {
                        event.stopPropagation();
                    }
                };
                return AlphabetsOnlyDirective;
            }());
            AlphabetsOnlyDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
            ], AlphabetsOnlyDirective.prototype, "onInputChange", null);
            AlphabetsOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'input[alphabetsOnly]'
                })
            ], AlphabetsOnlyDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/directives/number-only.directive.ts": 
        /*!************************************************************!*\
          !*** ./src/app/shared/directives/number-only.directive.ts ***!
          \************************************************************/
        /*! exports provided: NumberOnlyDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function () { return NumberOnlyDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NumberOnlyDirective = /** @class */ (function () {
                function NumberOnlyDirective(_el) {
                    this._el = _el;
                }
                NumberOnlyDirective.prototype.onInputChange = function (event) {
                    console.log("dsfsdf");
                    var initalValue = this._el.nativeElement.value;
                    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
                    if (initalValue !== this._el.nativeElement.value) {
                        event.stopPropagation();
                    }
                };
                return NumberOnlyDirective;
            }());
            NumberOnlyDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
            ], NumberOnlyDirective.prototype, "onInputChange", null);
            NumberOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'input[numbersOnly]'
                })
            ], NumberOnlyDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _directives_number_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/number-only.directive */ "./src/app/shared/directives/number-only.directive.ts");
            /* harmony import */ var _directives_alphabets_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/alphabets-only.directive */ "./src/app/shared/directives/alphabets-only.directive.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [_directives_number_only_directive__WEBPACK_IMPORTED_MODULE_3__["NumberOnlyDirective"], _directives_alphabets_only_directive__WEBPACK_IMPORTED_MODULE_4__["AlphabetsOnlyDirective"]],
                    declarations: [_directives_number_only_directive__WEBPACK_IMPORTED_MODULE_3__["NumberOnlyDirective"], _directives_alphabets_only_directive__WEBPACK_IMPORTED_MODULE_4__["AlphabetsOnlyDirective"]]
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/user/Desktop/Dimbaya/DimbayaFrontend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map