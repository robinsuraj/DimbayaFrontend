(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-contact100\">\n    <div *ngIf=\"!cardSelect\" class=\"wrap-contact100\">\n      <form class=\"contact100-form validate-form\">\n        <!-- <div class=\"wrap-input100 validate-input bg1\">\n          <mat-radio-button value=\"1\">\n            \n            <img src=\"../../../assets/images/visa.png\" width=\"35px;\" style=\"margin-right:10px;\"></mat-radio-button>\n          <input type=\"radio\"> <span class=\"label-input100 border-ri\">\n            <img src=\"../../../assets/images/visa.png\" width=\"35px;\" style=\"margin-right:10px;\"></span>\n          <div class=\"right-side\">\n            <i class=\"fa fa-cc-visa\" aria-hidden=\"true\" style=\"padding-right:25px;\"></i>\n          <i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-size: 20px;color: #ff5ed9;\"></i></div>\n        </div>\n  \n  \n        <span class=\"contact100-form-title\">\n          <p>or</p>\n        </span> -->\n        <div class=\"card\" style=\"width: 100%;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Summary</h5>\n            <br>\n            <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Payment Details:</h6> -->\n            <div class=\"row\">\n              <div class=\"col\">\n                <p class=\"card-text\">Top Up Amount:</p>\n              </div>\n              <div class=\"col\">\n                <p class=\"card-text\"> {{userData.amount}} {{userData.currencySymbol}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\">\n                <p class=\"card-text\">Processing fee:</p>\n              </div>\n              <div class=\"col\">\n                <p class=\"card-text\">0 {{userData.currencySymbol}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\">\n                <p class=\"card-text\">Total:</p>\n              </div>\n              <div class=\"col\">\n                <p class=\"card-text\">{{userData.amount}} {{userData.currencySymbol}}</p>\n              </div>\n            </div>\n       \n          </div>\n        </div>\n        <br>\n        <hr> \n        <!-- <h2>Payment Methods</h2> -->\n        <div style=\"width: 100%; margin-top: 10px;\">\n          <h5 class=\"card-title\" style=\"padding: 1.25rem;\">Payment Methods</h5>\n        <div class=\"wrap-input100 validate-input bg1\">\n          <!-- <mat-radio-button value=\"1\">Card</mat-radio-button> -->\n          <input type=\"radio\" (click)=\"setradio('Card')\" [checked]=\"isSelected('Card')\"> <span class=\"label-input100\">Card</span>\n          <div class=\"right-side\">\n            <i class=\"fa fa-cc-visa\" aria-hidden=\"true\" style=\"padding-right:25px;\"></i>\n          <i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i>\n            <img src=\"../../../assets/images/visa.png\" width=\"35px;\" style=\"margin-right:10px;\"><img\n              src=\"../../../assets/images/Master.png\" width=\"30px;\"></div>\n        </div>\n        <div *ngIf=\"isSelected('Card')\">\n          <form class=\"credit-card-de\" [formGroup]=\"paymentForm\">\n            <div class=\"form-header\">\n              <h4 class=\"title\">CREDIT/ DEBIT CARD</h4>\n            </div>\n        \n        \n            <div class=\"form-body\">\n              <!-- Card Number -->\n    \n    \n              <div class=\"input-group input-group-lg\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-credit-card\"></i></div>\n                </div>\n                <input  class=\"form-control\" type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('cardNumber')\" maxlength=\"16\" minlength=\"16\"\n                placeholder=\"Card Number\" formControlName=\"cardNumber\">           \n              </div>\n    \n              <span *ngIf=\"checkMinMaxError('cardNumber')\" style=\"color: red\">\n                Card Number should be atleast {{paymentForm.get('cardNumber').errors.minlength.requiredLength}} digits .\n              </span>\n              <!-- Date Field -->\n              <div class=\"date-field\">\n                <div class=\"month\">\n                  <select name=\"Month\" [ngClass]=\"checkFieldValid('expiryMonth')\" formControlName=\"expiryMonth\">\n                    <option value=\"january\">January</option>\n                    <option value=\"february\">February</option>\n                    <option value=\"march\">March</option>\n                    <option value=\"april\">April</option>\n                    <option value=\"may\">May</option>\n                    <option value=\"june\">June</option>\n                    <option value=\"july\">July</option>\n                    <option value=\"august\">August</option>\n                    <option value=\"september\">September</option>\n                    <option value=\"october\">October</option>\n                    <option value=\"november\">November</option>\n                    <option value=\"december\">December</option>\n                  </select>\n                </div>\n                <div class=\"year\">\n                  <select name=\"Year\" [ngClass]=\"checkFieldValid('expiryYear')\" formControlName=\"expiryYear\">\n                    <option value=\"2019\">2019</option>\n                    <option value=\"2020\">2020</option>\n                    <option value=\"2021\">2021</option>\n                    <option value=\"2022\">2022</option>\n                    <option value=\"2023\">2023</option>\n                    <option value=\"2024\">2024</option>\n                  </select>\n                </div>\n              </div>\n        \n              <!-- Card Verification Field -->\n              <div class=\"card-verification\">\n                <div class=\"cvv-input\">\n                  <input style=\"line-height: 40px\" type=\"text\" [ngClass]=\"checkFieldValid('cvv')\" minlength=\"3\" maxlength=\"4\" placeholder=\"CVV\"\n                    formControlName=\"cvv\">\n                  <span *ngIf=\"checkMinMaxError('cvv')\" style=\"color: red\">\n                    CVV Number should be atleast {{paymentForm.get('cvv').errors.minlength.requiredLength}} digits .\n                  </span>\n                </div>\n                <div class=\"cvv-details\">\n                  <p>3 or 4 digits usually found <br> on the signature strip</p>\n                </div>\n              </div>\n              <div class=\"savedCrad\">\n                <!-- <mat-checkbox>Save this card for faster payments<i class=\"material-icons\" style=\"font-size: 15px;\" \n                  matTooltip=\"Save your credit card information and make your next purchase quick. Your card information is encrypted and safe with us. We dont store cvv number.\">\n                  info\n                  </i></mat-checkbox> -->\n              </div>\n              \n              <!-- Buttons -->\n              <button style=\"line-height: 35px;\"type=\"submit\" class=\"proceed-btn\" (click)=\"proceed()\">Proceed</button>\n              <!-- <mat-divider></mat-divider> -->\n              <!-- <div style=\"padding-top: 21px;\">\n        \n                <a class=\"paypal-button\"\n                  href=\"http://ec2-3-136-169-121.us-east-2.compute.amazonaws.com:7000/api/payment/paypal\">\n                  <span class=\"paypal-button-title\">\n                    Pay with\n                  </span>\n                  <span class=\"paypal-logo\">\n                    <i>Pay</i><i>Pal</i>\n                  </span>\n                </a>\n              </div> -->\n              <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"back()\">Back</button> -->\n        \n            </div>\n          </form>\n        </div>\n        <div class=\"wrap-input100 validate-input bg1\">\n          <!-- <mat-radio-button value=\"1\">PayPal</mat-radio-button> -->\n          <input type=\"radio\" (click)=\"setradio('Paypal')\" [checked]=\"isSelected('Paypal')\"> <span class=\"label-input100\">PayPal</span>\n          <div class=\"right-side\">\n            <img src=\"../../../assets/images/paypal.png\" width=\"30px;\"></div>\n        </div>\n        <div class=\"wrap-input100 validate-input bg1\">\n          <!-- <mat-radio-button value=\"1\">American Express</mat-radio-button> -->\n          <input type=\"radio\"> <span class=\"label-input100\">American Express</span>\n          <div class=\"right-side\">\n            <img src=\"../../../assets/images/american.png\" width=\"30px;\"></div>\n        </div>\n        <div class=\"wrap-input100 validate-input bg1\">\n          <!-- <mat-radio-button value=\"1\">AliPay</mat-radio-button> -->\n          <input type=\"radio\"> <span class=\"label-input100\">AliPay</span>\n          <div class=\"right-side\">\n            <img src=\"../../../assets/images/alipay.png\" width=\"55px;\"></div>\n        </div>\n        <div *ngIf=\"isSelected('Paypal')\" class=\"wrap-input100 validate-input bg1 text-center\" style=\"cursor:pointer\" (click)=\"cardProceed()\">\n          <p>Continue</p>\n        </div>\n      </div>\n      </form>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"home()\">Back</button>\n    \n    </div>\n  \n    <div *ngIf=\"cardSelect\" class=\"containerPayment\">\n      <form class=\"credit-card\" [formGroup]=\"paymentForm\">\n        <div class=\"form-header\">\n          <h4 class=\"title\">CREDIT/ DEBIT CARD</h4>\n        </div>\n    \n    \n        <div class=\"form-body\">\n          <!-- Card Number -->\n\n\n          <div class=\"input-group input-group-lg\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\"><i class=\"fa fa-credit-card\"></i></div>\n            </div>\n            <input  class=\"form-control\" type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('cardNumber')\" maxlength=\"16\" minlength=\"16\"\n            placeholder=\"Card Number\" formControlName=\"cardNumber\">           \n          </div>\n\n          <span *ngIf=\"checkMinMaxError('cardNumber')\" style=\"color: red\">\n            Card Number should be atleast {{paymentForm.get('cardNumber').errors.minlength.requiredLength}} digits .\n          </span>\n          <!-- Date Field -->\n          <div class=\"date-field\">\n            <div class=\"month\">\n              <select name=\"Month\" [ngClass]=\"checkFieldValid('expiryMonth')\" formControlName=\"expiryMonth\">\n                <option value=\"january\">January</option>\n                <option value=\"february\">February</option>\n                <option value=\"march\">March</option>\n                <option value=\"april\">April</option>\n                <option value=\"may\">May</option>\n                <option value=\"june\">June</option>\n                <option value=\"july\">July</option>\n                <option value=\"august\">August</option>\n                <option value=\"september\">September</option>\n                <option value=\"october\">October</option>\n                <option value=\"november\">November</option>\n                <option value=\"december\">December</option>\n              </select>\n            </div>\n            <div class=\"year\">\n              <select name=\"Year\" [ngClass]=\"checkFieldValid('expiryYear')\" formControlName=\"expiryYear\">\n                <option value=\"2019\">2019</option>\n                <option value=\"2020\">2020</option>\n                <option value=\"2021\">2021</option>\n                <option value=\"2022\">2022</option>\n                <option value=\"2023\">2023</option>\n                <option value=\"2024\">2024</option>\n              </select>\n            </div>\n          </div>\n    \n          <!-- Card Verification Field -->\n          <div class=\"card-verification\">\n            <div class=\"cvv-input\">\n              <input style=\"line-height: 40px\" type=\"text\" [ngClass]=\"checkFieldValid('cvv')\" minlength=\"3\" maxlength=\"4\" placeholder=\"CVV\"\n                formControlName=\"cvv\">\n              <span *ngIf=\"checkMinMaxError('cvv')\" style=\"color: red\">\n                CVV Number should be atleast {{paymentForm.get('cvv').errors.minlength.requiredLength}} digits .\n              </span>\n            </div>\n            <div class=\"cvv-details\">\n              <p>3 or 4 digits usually found <br> on the signature strip</p>\n            </div>\n          </div>\n          <div class=\"savedCrad\">\n            <!-- <mat-checkbox>Save this card for faster payments<i class=\"material-icons\" style=\"font-size: 15px;\" \n              matTooltip=\"Save your credit card information and make your next purchase quick. Your card information is encrypted and safe with us. We dont store cvv number.\">\n              info\n              </i></mat-checkbox> -->\n          </div>\n          \n          <!-- Buttons -->\n          <button style=\"line-height: 35px;\"type=\"submit\" class=\"proceed-btn\" (click)=\"proceed()\">Proceed</button>\n          <!-- <mat-divider></mat-divider> -->\n          <div style=\"padding-top: 21px;\">\n    \n            <a class=\"paypal-button\"\n              href=\"http://ec2-3-136-169-121.us-east-2.compute.amazonaws.com:7000/api/payment/paypal\">\n              <span class=\"paypal-button-title\">\n                Pay with\n              </span>\n              <span class=\"paypal-logo\">\n                <i>Pay</i><i>Pal</i>\n              </span>\n            </a>\n          </div>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"back()\">Back</button>\n    \n        </div>\n      </form>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment/payment.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment/payment.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"resp-tabs-list\">\n        <span class=\"custom-dropdown active\">\n          <a href=\"\">\n            <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n            Mobile\n          </a>\n        </span>\n        <ul>\n          <li class=\"active\">\n            <a href=\"\">\n              <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n              Mobile\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              <i class=\"fa fa-lightbulb-o\" aria-hidden=\"true\"></i>\n              Electricity\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n              Land Line\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              <i class=\"fa fa-connectdevelop\" aria-hidden=\"true\"></i>\n              Broad Band\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              <i class=\"fa fa-flask\" aria-hidden=\"true\"></i>\n              Gas\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              <i class=\"fa fa-tint\" aria-hidden=\"true\"></i>\n              Water\n            </a>\n          </li>\n          <li>\n            <a href=\"\">\n              <i class=\"fa fa-subway\" aria-hidden=\"true\"></i>\n              Metro\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n          <form [formGroup]=\"signUpForm\">\n            <div class=\"row\">\n             <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\">  \n                  <img class=\"country-flag\"  *ngIf=\"flag\" src={{flag}}/> </div>\n                </div>\n              <datalist id=\"suggestions\" >\n                <ng-container *ngFor=\"let country of countrys\">\n                  <option>{{country.name}} (+{{country.callingCodes[0]}})</option>\n                </ng-container>\n              </datalist>\n              <input  class=\"form-control\" [ngClass]=\"checkFieldValid('countryCode')\" formControlName=\"countryCode\" (change)=\"onCountryChange($event)\" placeholder=\"Select Country\"\n                type=\"text\" autoComplete=\"on\" list=\"suggestions\">\n            </div>\n            <!-- <div class=\" row\">\n              <select formControlName=\"serviceType\" (change)=\"serviceType($event.target.value)\"\n                [ngClass]=\"checkFieldValid('serviceType')\">\n                <option value=\"\" disabled selected hidden>Select Service Type</option>\n                <option value=\"mobile\">Mobile Recharge</option>\n                <option value=\"prepaid\">Prepaid Electrity</option>\n              </select>\n            </div> -->\n            <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\">  \n                  {{countryCode}} </div>\n              </div>\n              \n              <input  numbersOnly type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('mobileNumber')\"\n                minlength=\"{{minLengthDigits}}\" class=\"form-control\"\n                maxlength=\"{{maxLengthDigits}}\"  placeholder=\"Mobile Number\" formControlName=\"mobileNumber\">\n            </div>\n            <div class=\"input-group input-group-lg\" *ngIf=\"prepaidElec\">\n              <input class=\"form-control\" type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('meterNumber')\"\n                 placeholder=\"Meter Number\"\n                formControlName=\"meterNumber\" minlength=\"10\" maxlength=\"15\">\n              <span *ngIf=\"checkMinMaxError('meterNumber')\" style=\"color: red\">\n                Meter Number should be atleast {{signUpForm.get('meterNumber').errors.minlength.requiredLength}} digits.\n              </span>\n            </div>\n            <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user\"></i></div>\n              </div>\n              <input class=\"form-control\" type=\"text\" alphabetsOnly [ngClass]=\"checkFieldValid('firstName')\" placeholder=\"Buyers Full Name\"\n                formControlName=\"firstName\">\n            </div>\n\n            <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user\"></i></div>\n              </div>\n              <input class=\"form-control\" type=\"text\" alphabetsOnly [ngClass]=\"checkFieldValid('lastName')\"\n                placeholder=\"Beneficiary's Full Name\" formControlName=\"lastName\">\n            </div>\n\n            <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></div>\n              </div>\n              <input class=\"form-control\" [ngClass]=\"checkFieldValid('email') || signUpForm.get('email').errors?.pattern? 'is-invalid':''\"\n                pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}\" type=\"email\" placeholder=\"Email\"\n                formControlName=\"email\">\n             \n            </div>\n            <span *ngIf=\"signUpForm.get('email').errors?.pattern\" style=\"color:red;margin-top:-10px\">Please Enter Valid Email\n              Id.</span>\n            <div class=\"input-group input-group-lg\">\n              <div class=\"input-group-prepend \">\n                <div class=\"input-group input-group-lg\" >  \n                  <select class=\"form-control\" formControlName=\"currencyCode\" style=\"background-color: #e9ecef;\">\n                    <ng-container *ngFor=\"let currency of currencyList;let i=index;\">\n                      <option [value]=\"currency.code\">{{currency.symbol}}</option>\n                    </ng-container>\n                  </select>\n                </div>\n              </div>\n         \n              <input class=\"form-control\" type=\"text\" maxlength=\"12\" numbersOnly [ngClass]=\"checkFieldValid('amount')\" min=1 max=999999999999\n                placeholder=\"Amount\" formControlName=\"amount\">\n            </div>\n\n            <button style=\"line-height: 1.4;  height: 3.4em;\" class=\"btn btn-primary  btn-block btn-round\"\n              (click)=\"register()\">PAY</button>\n          </div>\n          </form>\n       \n        <div class=\"resp-tabs-tab\"></div>\n        <div class=\"resp-tabs-tab\"></div>\n        <div class=\"resp-tabs-tab\"></div>\n        <div class=\"resp-tabs-tab\"></div>\n        <div class=\"resp-tabs-tab\"></div>\n        <div class=\"resp-tabs-tab\"></div>\n      </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Credit Card */\n.credit-card {\n  width: 360px;\n  height: 454px;\n  margin: 60px auto 0;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  background-color: #fff;\n  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.credit-card-de {\n  width: 360px;\n  height: 340px;\n  margin: 16px auto 16px;\n  border: 1px solid #ddd;\n}\n.form-header {\n  height: 60px;\n  padding: 20px 30px 0;\n  border-bottom: 1px solid #e1e8ee;\n}\n.form-body {\n  height: 340px;\n  padding: 13px 29px 13px 29px;\n}\n/* Title */\n.title {\n  font-size: 16px;\n  margin: 0;\n  color: #5e6977;\n}\n.savedCrad {\n  font-size: 12px;\n  color: #666666;\n}\n/* Common */\n.card-number,\n.cvv-input input,\n.month select,\n.year select {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 14px;\n}\n.card-number,\n.month select,\n.year select {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 14px;\n}\n.card-number,\n.cvv-details,\n.cvv-input input,\n.month select,\n.year select {\n  opacity: 0.7;\n  color: #86939e;\n}\n/* Card Number */\n.card-number {\n  width: 100%;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border: 2px solid #e1e8ee;\n  border-radius: 6px;\n}\n/* Date Field */\n.month select,\n.year select {\n  width: 145px;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border: 2px solid #e1e8ee;\n  border-radius: 6px;\n  /* background: ; */\n  background-position: 85% 50%;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.month select {\n  float: left;\n}\n.year select {\n  float: right;\n}\n/* Card Verification Field */\n.cvv-input input {\n  float: left;\n  width: 145px;\n  padding-left: 20px;\n  border: 2px solid #e1e8ee;\n  border-radius: 6px;\n  background: #fff;\n}\n/* Buttons Section */\n.paypal-btn,\n.proceed-btn {\n  cursor: pointer;\n  font-size: 16px;\n  width: 100%;\n  border-color: transparent;\n  border-radius: 6px;\n}\n.proceed-btn {\n  margin-bottom: 10px;\n  background: #7dc855;\n}\n.btn-danger {\n  float: right;\n  background-color: red;\n  margin: 5px;\n}\n.paypal-btn a,\n.proceed-btn a {\n  text-decoration: none;\n}\n.proceed-btn a {\n  color: #fff;\n}\n.paypal-btn a {\n  color: rgba(242, 242, 242, 0.7);\n}\n.paypal-btn {\n  padding-right: 95px;\n  /* background: url('paypal-logo.svg') no-repeat 65% 56% #009cde; */\n}\n.cvv-details {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 16px;\n  float: right;\n  margin-bottom: 20px;\n}\n.cvv-details p {\n  margin-top: 6px;\n}\n.containerPayment {\n  max-width: 50em;\n  padding: 1em 0em 1em 0em;\n  margin: 5em auto;\n}\n/* \n\n.form-body[_ngcontent-gbm-c3] {\n    height: 340px;\n    padding: 13px 29px 13px 29px;\n} */\n.credit-card[_ngcontent-rry-c2] {\n  /* width: 381px; */\n  /* height: 400px; */\n  margin: 0px 7px 0px 0px;\n  border: 1px 0px 0px 0px solid #ddd;\n  /* border-radius: 6px; */\n  /* background-color: #fff; */\n  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.paypal-logo {\n  font-family: Verdana, Tahoma;\n  font-weight: bold;\n  font-size: 26px;\n}\n.paypal-logo i:first-child {\n  color: #253b80;\n}\n.paypal-logo i:last-child {\n  color: #179bd7;\n}\n.paypal-button {\n  padding: 5px 21px;\n  border: 1px solid #FF9933;\n  border-radius: 5px;\n  background-image: linear-gradient(#FFF0A8, #F9B421);\n  margin: 0 auto;\n  display: block;\n  min-width: 138px;\n  position: relative;\n}\n.paypal-title {\n  font-size: 14px;\n  color: #505050;\n  vertical-align: baseline;\n  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n}\n.paypal-logo {\n  display: inline-block;\n  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n  font-size: 20px;\n}\n/* * {\n    margin: 0px; \n    padding: 0px; \n    box-sizing: border-box;\n}\n\nbody, html {\n    height: 100%;\n    font-family: Poppins-Regular, sans-serif;\n} */\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n}\n/*---------------------------------------------*/\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\n/*---------------------------------------------*/\n.container {\n  max-width: 1200px;\n}\n/*//////////////////////////////////////////////////////////////////\n[ Utility ]*/\n.bg0 {\n  background-color: #fff;\n}\n/*//////////////////////////////////////////////////////////////////\n[ Contact ]*/\n.container-contact100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #e6e6e6;\n}\n.wrap-contact100 {\n  width: 625px;\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 62px 55px 90px 55px;\n}\n/*------------------------------------------------------------------\n[  ]*/\n.contact100-form {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.contact100-form-title {\n  display: block;\n  width: 100%;\n  font-size: 15px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n  padding-bottom: 15px;\n}\n.contact100-form-title p::after {\n  content: \"\";\n  background-color: #c0a067;\n  width: 30px;\n  height: 1px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.contact100-form-title p::after {\n  margin-left: 10px;\n}\n.contact100-form-title p::before {\n  content: \"\";\n  background-color: #c0a067;\n  width: 30px;\n  height: 1px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.contact100-form-title p::before {\n  margin-right: 10px;\n}\n.wrap-input100 p {\n  color: #f15656;\n  font-weight: 600;\n  font-family: Poppins-Regular;\n}\n/*------------------------------------------------------------------\n[  ]*/\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border: 1px solid #e6e6e6;\n  border-radius: 3px;\n  padding: 10px 30px 9px 22px;\n  margin-bottom: 20px;\n}\n.rs1-wrap-input100 {\n  width: calc((100% - 30px) / 2);\n}\n.label-input100 {\n  font-size: 15px;\n  color: #393939;\n  line-height: 1.5;\n}\n/* .input100 {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n  padding-right: 15px;\n} */\n/*---------------------------------------------*/\n/* input.input100 {\n  height: 40px;\n}\n */\n/* textarea.input100 {\n  min-height: 120px;\n  padding-top: 9px;\n  padding-bottom: 13px;\n} */\n/* .input100:focus + .focus-input100::before {\n  width: 100%;\n} */\n.has-val.input100 + .focus-input100::before {\n  width: 100%;\n}\n/*------------------------------------------------------------------\n[ Responsive ]*/\n@media (max-width: 768px) {\n  .rs1-wrap-input100 {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .wrap-contact100 {\n    padding: 62px 15px 90px 15px;\n  }\n\n  .wrap-input100 {\n    padding: 10px 10px 9px 10px;\n  }\n}\n/*---------------------------------------------*/\n@media (max-width: 576px) {\n  .alert-validate::before {\n    padding: 0 10px 0 10px;\n  }\n\n  .true-validate::after,\n.btn-hide-validate {\n    right: 0px;\n    width: 30px;\n  }\n}\n/*------------------------------------------------------------------\n[ Restyle Radio ]*/\n.wrap-contact100-form-radio {\n  width: 100%;\n  padding: 15px 25px 0 25px;\n}\n.contact100-form-radio {\n  padding-bottom: 5px;\n}\n/* .input-radio100 {\n  display: none;\n}\n */\n.label-radio100 {\n  display: block;\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n}\n.label-radio100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #cdcdcd;\n  background: #fff;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.label-radio100::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 6px solid transparent;\n  background: #00ad5f;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  display: none;\n}\n/* .input-radio100:checked + .label-radio100::after {\n  display: block;\n} */\n/*==================================================================\n[ rs NoUI ]*/\n.wrap-contact100-form-range {\n  width: 100%;\n  padding: 20px 25px 57px 25px;\n}\n.contact100-form-range-value {\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n  padding-top: 10px;\n  padding-bottom: 30px;\n}\n.contact100-form-range-value input {\n  display: none;\n}\n@media (max-width: 576px) {\n  .wrap-contact100-form-range {\n    padding: 20px 0px 57px 0px;\n  }\n\n  .wrap-contact100-form-radio {\n    padding: 15px 0px 0 0px;\n  }\n}\n.right-side {\n  float: right;\n}\n.border-ri {\n  border-right: 1px solid #b3aaaa;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plZXQvRGltYmF5YUZyb250ZW5kL3NyYy9hcHAvcGF5bWVudC9wYXktY3JlZGl0LWNhcmQtZGV0YWlscy9wYXktY3JlZGl0LWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGF5bWVudC9wYXktY3JlZGl0LWNhcmQtZGV0YWlscy9wYXktY3JlZGl0LWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxnQkFBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0FDQUo7QURHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0FGO0FES0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ0ZKO0FES0E7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7QUNGSjtBRElBLFVBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RGO0FER0EsV0FBQTtBQUNBOzs7O0VBSUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdBOzs7RUFHSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7Ozs7O0VBS0ksWUFBQTtFQUNBLGNBQUE7QUNBSjtBREVBLGdCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENBLGVBQUE7QUFDQTs7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQ0VKO0FEQ0E7RUFDSSxXQUFBO0FDRUo7QURDQTtFQUNJLFlBQUE7QUNFSjtBREFBLDRCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0o7QUREQSxvQkFBQTtBQUNBOztFQUVJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBRERBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0lKO0FEREE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDSUo7QURBQTs7RUFFSSxxQkFBQTtBQ0dKO0FEQUE7RUFDSSxXQUFBO0FDR0o7QURBQTtFQUNJLCtCQUFBO0FDR0o7QURBQTtFQUNJLG1CQUFBO0VBQ0Esa0VBQUE7QUNHSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNHSjtBREFBO0VBQ0ksZUFBQTtBQ0dKO0FEQUE7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEREE7Ozs7O0dBQUE7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRDQUFBO0FDR0o7QURDQTtFQUNNLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRU47QURFSTtFQUNJLGNBQUE7QUNDUjtBREVNO0VBQ0UsY0FBQTtBQ0NSO0FER007RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FOO0FER0s7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsaURBQUE7QUNBUjtBREdNO0VBQ0UscUJBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7QUNBUjtBRElNOzs7Ozs7Ozs7R0FBQTtBQVdGLGdEQUFBO0FBQ0E7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNGLHVCQUFBO0VBQ0EseUJBQUE7QUNGTjtBREtJO0VBQ0ksd0JBQUE7QUNGUjtBREtJO0VBQ0kscUJBQUE7QUNGUjtBREtJLGdEQUFBO0FBQ0E7RUFDSSxXQUFBO0FDRlI7QURLSTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNGUjtBRE9JLGdEQUFBO0FBQ0E7RUFDSSxpQkFBQTtBQ0pSO0FEUUk7WUFBQTtBQUdBO0VBQU0sc0JBQUE7QUNMVjtBRFNJO1lBQUE7QUFHQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUtBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1BOO0FEV0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNSTjtBRFlJO0tBQUE7QUFHQTtFQUNFLFdBQUE7RUFLQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDVk47QURhSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNWTjtBRFlJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDVFI7QURXSTtFQUNJLGlCQUFBO0FDUlI7QURVSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ1BSO0FEU0k7RUFDSSxrQkFBQTtBQ05SO0FEUUk7RUFDUSxjQUFBO0VBQ0osZ0JBQUE7RUFDRCw0QkFBQTtBQ0xQO0FEU0k7S0FBQTtBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNQTjtBRFVJO0VBQ0UsOEJBQUE7QUNQTjtBRFVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1BOO0FEV0k7Ozs7Ozs7OztHQUFBO0FBWUEsZ0RBQUE7QUFDQTs7O0VBQUE7QUFLQTs7OztHQUFBO0FBT0E7O0dBQUE7QUFJQTtFQUNFLFdBQUE7QUNkTjtBRGlCSTtlQUFBO0FBR0E7RUFDRTtJQUNFLFdBQUE7RUNmTjtBQUNGO0FEbUJJO0VBQ0U7SUFDRSw0QkFBQTtFQ2pCTjs7RURvQkk7SUFDRSwyQkFBQTtFQ2pCTjtBQUNGO0FEc0JJLGdEQUFBO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0VDcEJOOztFRHVCSTs7SUFFRSxVQUFBO0lBQ0EsV0FBQTtFQ3BCTjtBQUNGO0FEc0JJO2tCQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNwQk47QUR1Qkk7RUFDRSxtQkFBQTtBQ3BCTjtBRHVCSTs7O0VBQUE7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3BCTjtBRHVCSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBS0EsMkJBQUE7QUNwQk47QUR1Qkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUtBLDJCQUFBO0VBQ0EsYUFBQTtBQ3BCTjtBRHdCSTs7R0FBQTtBQUtBO1lBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtBQ3ZCTjtBRDBCSTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUN2Qk47QUQwQkk7RUFDRSxhQUFBO0FDdkJOO0FEMkJJO0VBQ0U7SUFDRSwwQkFBQTtFQ3hCTjs7RUQyQkk7SUFDRSx1QkFBQTtFQ3hCTjtBQUNGO0FEMEJJO0VBQ0ksWUFBQTtBQ3hCUjtBRDBCSTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQ3ZCUiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5LWNyZWRpdC1jYXJkLWRldGFpbHMvcGF5LWNyZWRpdC1jYXJkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIENyZWRpdCBDYXJkICovXG4uY3JlZGl0LWNhcmQge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBoZWlnaHQ6IDQ1NHB4O1xuICAgIG1hcmdpbjogNjBweCBhdXRvIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAwIHJnYmEoMCwwLDAsLjEwKTtcbn1cblxuLmNyZWRpdC1jYXJkLWRlIHtcbiAgd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICBtYXJnaW46IDE2cHggYXV0byAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAvLyBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC8vIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDAgcmdiYSgwLDAsMCwuMTApO1xufVxuLmZvcm0taGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZzogMjBweCAzMHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWU4ZWU7XG59XG4gXG4uZm9ybS1ib2R5IHtcbiAgICBoZWlnaHQ6IDM0MHB4O1xuICAgIHBhZGRpbmc6IDEzcHggMjlweCAxM3B4IDI5cHg7XG59XG4vKiBUaXRsZSAqL1xuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNWU2OTc3O1xufVxuXG4uc2F2ZWRDcmFke1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuLyogQ29tbW9uICovXG4uY2FyZC1udW1iZXIsXG4uY3Z2LWlucHV0IGlucHV0LFxuLm1vbnRoIHNlbGVjdCxcbi55ZWFyIHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4gXG4uY2FyZC1udW1iZXIsXG4ubW9udGggc2VsZWN0LFxuLnllYXIgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbn1cbiBcbi5jYXJkLW51bWJlcixcbi5jdnYtZGV0YWlscyxcbi5jdnYtaW5wdXQgaW5wdXQsXG4ubW9udGggc2VsZWN0LFxuLnllYXIgc2VsZWN0IHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICBjb2xvcjogIzg2OTM5ZTtcbn1cbi8qIENhcmQgTnVtYmVyICovXG4uY2FyZC1udW1iZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU4ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLyogRGF0ZSBGaWVsZCAqL1xuLm1vbnRoIHNlbGVjdCxcbi55ZWFyIHNlbGVjdCB7XG4gICAgd2lkdGg6IDE0NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU4ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIC8qIGJhY2tncm91bmQ6IDsgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4NSUgNTAlO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4gXG4ubW9udGggc2VsZWN0IHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiBcbi55ZWFyIHNlbGVjdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLyogQ2FyZCBWZXJpZmljYXRpb24gRmllbGQgKi9cbi5jdnYtaW5wdXQgaW5wdXQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxNDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZThlZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi8qIEJ1dHRvbnMgU2VjdGlvbiAqL1xuLnBheXBhbC1idG4sXG4ucHJvY2VlZC1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4gXG4ucHJvY2VlZC1idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzdkYzg1NTtcbn1cblxuLmJ0bi1kYW5nZXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBtYXJnaW46IDVweDtcblxufVxuIFxuLnBheXBhbC1idG4gYSxcbi5wcm9jZWVkLWJ0biBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4gXG4ucHJvY2VlZC1idG4gYSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4gXG4ucGF5cGFsLWJ0biBhIHtcbiAgICBjb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAuNyk7XG59XG4gXG4ucGF5cGFsLWJ0biB7XG4gICAgcGFkZGluZy1yaWdodDogOTVweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJ3BheXBhbC1sb2dvLnN2ZycpIG5vLXJlcGVhdCA2NSUgNTYlICMwMDljZGU7ICovXG59XG4gXG4uY3Z2LWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIFxuLmN2di1kZXRhaWxzIHAge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmNvbnRhaW5lclBheW1lbnQge1xuICAgIG1heC13aWR0aDogNTBlbTtcbiAgICBwYWRkaW5nOiAxZW0gMGVtIDFlbSAwZW07XG4gICAgbWFyZ2luOiA1ZW0gYXV0bztcbn1cbi8qIFxuXG4uZm9ybS1ib2R5W19uZ2NvbnRlbnQtZ2JtLWMzXSB7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICBwYWRkaW5nOiAxM3B4IDI5cHggMTNweCAyOXB4O1xufSAqL1xuXG4uY3JlZGl0LWNhcmRbX25nY29udGVudC1ycnktYzJdIHtcbiAgICAvKiB3aWR0aDogMzgxcHg7ICovXG4gICAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgICBtYXJnaW46IDBweCA3cHggMHB4IDBweDtcbiAgICBib3JkZXI6IDFweCAwcHggMHB4IDBweCBzb2xpZCAjZGRkO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDAgcmdiYSgwLDAsMCwuMTApO1xufVxuXG5cbi5wYXlwYWwtbG9nbyB7XG4gICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgVGFob21hO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gIFxuICAgICAgXG4gICAgfVxuICAgIC5wYXlwYWwtbG9nbyBpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICMyNTNiODA7XG4gICAgICB9XG4gIFxuICAgICAgLnBheXBhbC1sb2dvIGk6bGFzdC1jaGlsZCB7XG4gICAgICAgIGNvbG9yOiAjMTc5YmQ3O1xuICAgICAgfVxuXG4gICAgXG4gICAgICAucGF5cGFsLWJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA1cHggMjFweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjk5MzM7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0ZGRjBBOCwgI0Y5QjQyMSk7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWluLXdpZHRoOiAxMzhweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAucGF5cGFsLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzUwNTA1MDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucGF5cGFsLWxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgXG5cbiAgICAgIC8qICoge1xuICAgICAgICBtYXJnaW46IDBweDsgXG4gICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIFxuICAgIGJvZHksIGh0bWwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXIsIHNhbnMtc2VyaWY7XG4gICAgfSAqL1xuICAgIFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIH1cbiAgICBcbiAgICBhOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICBhOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaDEsaDIsaDMsaDQsaDUsaDYge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIFsgVXRpbGl0eSBdKi9cbiAgICBcbiAgICAuYmcwIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cbiAgICBcbiAgICBcbiAgICBcbiAgICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIFsgQ29udGFjdCBdKi9cbiAgICBcbiAgICAuY29udGFpbmVyLWNvbnRhY3QxMDAge1xuICAgICAgd2lkdGg6IDEwMCU7ICBcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgICAgXG4gICAgfVxuICAgIFxuICAgIC53cmFwLWNvbnRhY3QxMDAge1xuICAgICAgd2lkdGg6IDYyNXB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogNjJweCA1NXB4IDkwcHggNTVweDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBbICBdKi9cbiAgICBcbiAgICAuY29udGFjdDEwMC1mb3JtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhY3QxMDAtZm9ybS10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC5jb250YWN0MTAwLWZvcm0tdGl0bGUgcDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwYTA2NztcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC5jb250YWN0MTAwLWZvcm0tdGl0bGUgcDo6YWZ0ZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgLmNvbnRhY3QxMDAtZm9ybS10aXRsZSBwOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwYTA2NztcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC5jb250YWN0MTAwLWZvcm0tdGl0bGUgcDo6YmVmb3Jle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC53cmFwLWlucHV0MTAwIHB7XG4gICAgICAgICAgICBjb2xvcjogI2YxNTY1NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFsgIF0qL1xuICAgIFxuICAgIC53cmFwLWlucHV0MTAwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweCA5cHggMjJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5yczEtd3JhcC1pbnB1dDEwMCB7XG4gICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7XG4gICAgfVxuICAgIFxuICAgIC5sYWJlbC1pbnB1dDEwMCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzM5MzkzOTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgLyogLmlucHV0MTAwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVNlbWlCb2xkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6ICM1NTU1NTU7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9ICovXG4gICAgXG4gICAgXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC8qIGlucHV0LmlucHV0MTAwIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgICovXG4gICAgXG4gICAgLyogdGV4dGFyZWEuaW5wdXQxMDAge1xuICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogOXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgfSAqL1xuICAgIFxuICAgIFxuICAgIC8qIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH0gKi9cbiAgICBcbiAgICAuaGFzLXZhbC5pbnB1dDEwMCArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFsgUmVzcG9uc2l2ZSBdKi9cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5yczEtd3JhcC1pbnB1dDEwMCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIFxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIC53cmFwLWNvbnRhY3QxMDAge1xuICAgICAgICBwYWRkaW5nOiA2MnB4IDE1cHggOTBweCAxNXB4O1xuICAgICAgfVxuICAgIFxuICAgICAgLndyYXAtaW5wdXQxMDAge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggOXB4IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC50cnVlLXZhbGlkYXRlOjphZnRlcixcbiAgICAgIC5idG4taGlkZS12YWxpZGF0ZSB7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFsgUmVzdHlsZSBSYWRpbyBdKi9cbiAgICAud3JhcC1jb250YWN0MTAwLWZvcm0tcmFkaW8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxNXB4IDI1cHggMCAyNXB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGFjdDEwMC1mb3JtLXJhZGlvIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC8qIC5pbnB1dC1yYWRpbzEwMCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAgKi9cbiAgICAubGFiZWwtcmFkaW8xMDAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gICAgXG4gICAgLmxhYmVsLXJhZGlvMTAwOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbiAgICBcbiAgICAubGFiZWwtcmFkaW8xMDA6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDBhZDVmO1xuICAgICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7ICAgICBcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nOyAgXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyBcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLyogLmlucHV0LXJhZGlvMTAwOmNoZWNrZWQgKyAubGFiZWwtcmFkaW8xMDA6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH0gKi9cbiAgICBcbiAgICBcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIFsgcnMgTm9VSSBdKi9cbiAgICAud3JhcC1jb250YWN0MTAwLWZvcm0tcmFuZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyMHB4IDI1cHggNTdweCAyNXB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGFjdDEwMC1mb3JtLXJhbmdlLXZhbHVlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVNlbWlCb2xkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6ICM1NTU1NTU7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhY3QxMDAtZm9ybS1yYW5nZS12YWx1ZSBpbnB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIC53cmFwLWNvbnRhY3QxMDAtZm9ybS1yYW5nZSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDU3cHggMHB4O1xuICAgICAgfVxuICAgIFxuICAgICAgLndyYXAtY29udGFjdDEwMC1mb3JtLXJhZGlvIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAwcHggMCAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1zaWRle1xuICAgICAgICBmbG9hdDpyaWdodDtcbiAgICB9XG4gICAgLmJvcmRlci1yaXtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2IzYWFhYTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiIsIi8qIENyZWRpdCBDYXJkICovXG4uY3JlZGl0LWNhcmQge1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogNDU0cHg7XG4gIG1hcmdpbjogNjBweCBhdXRvIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jcmVkaXQtY2FyZC1kZSB7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiAzNDBweDtcbiAgbWFyZ2luOiAxNnB4IGF1dG8gMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAyMHB4IDMwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWU4ZWU7XG59XG5cbi5mb3JtLWJvZHkge1xuICBoZWlnaHQ6IDM0MHB4O1xuICBwYWRkaW5nOiAxM3B4IDI5cHggMTNweCAyOXB4O1xufVxuXG4vKiBUaXRsZSAqL1xuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNWU2OTc3O1xufVxuXG4uc2F2ZWRDcmFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLyogQ29tbW9uICovXG4uY2FyZC1udW1iZXIsXG4uY3Z2LWlucHV0IGlucHV0LFxuLm1vbnRoIHNlbGVjdCxcbi55ZWFyIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5jYXJkLW51bWJlcixcbi5tb250aCBzZWxlY3QsXG4ueWVhciBzZWxlY3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uY2FyZC1udW1iZXIsXG4uY3Z2LWRldGFpbHMsXG4uY3Z2LWlucHV0IGlucHV0LFxuLm1vbnRoIHNlbGVjdCxcbi55ZWFyIHNlbGVjdCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY29sb3I6ICM4NjkzOWU7XG59XG5cbi8qIENhcmQgTnVtYmVyICovXG4uY2FyZC1udW1iZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTFlOGVlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi8qIERhdGUgRmllbGQgKi9cbi5tb250aCBzZWxlY3QsXG4ueWVhciBzZWxlY3Qge1xuICB3aWR0aDogMTQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UxZThlZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAvKiBiYWNrZ3JvdW5kOiA7ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDg1JSA1MCU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4ubW9udGggc2VsZWN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi55ZWFyIHNlbGVjdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogQ2FyZCBWZXJpZmljYXRpb24gRmllbGQgKi9cbi5jdnYtaW5wdXQgaW5wdXQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE0NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMWU4ZWU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLyogQnV0dG9ucyBTZWN0aW9uICovXG4ucGF5cGFsLWJ0bixcbi5wcm9jZWVkLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucHJvY2VlZC1idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjN2RjODU1O1xufVxuXG4uYnRuLWRhbmdlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnBheXBhbC1idG4gYSxcbi5wcm9jZWVkLWJ0biBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucHJvY2VlZC1idG4gYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucGF5cGFsLWJ0biBhIHtcbiAgY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC43KTtcbn1cblxuLnBheXBhbC1idG4ge1xuICBwYWRkaW5nLXJpZ2h0OiA5NXB4O1xuICAvKiBiYWNrZ3JvdW5kOiB1cmwoJ3BheXBhbC1sb2dvLnN2ZycpIG5vLXJlcGVhdCA2NSUgNTYlICMwMDljZGU7ICovXG59XG5cbi5jdnYtZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmN2di1kZXRhaWxzIHAge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5jb250YWluZXJQYXltZW50IHtcbiAgbWF4LXdpZHRoOiA1MGVtO1xuICBwYWRkaW5nOiAxZW0gMGVtIDFlbSAwZW07XG4gIG1hcmdpbjogNWVtIGF1dG87XG59XG5cbi8qIFxuXG4uZm9ybS1ib2R5W19uZ2NvbnRlbnQtZ2JtLWMzXSB7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICBwYWRkaW5nOiAxM3B4IDI5cHggMTNweCAyOXB4O1xufSAqL1xuLmNyZWRpdC1jYXJkW19uZ2NvbnRlbnQtcnJ5LWMyXSB7XG4gIC8qIHdpZHRoOiAzODFweDsgKi9cbiAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgbWFyZ2luOiAwcHggN3B4IDBweCAwcHg7XG4gIGJvcmRlcjogMXB4IDBweCAwcHggMHB4IHNvbGlkICNkZGQ7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5wYXlwYWwtbG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBUYWhvbWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5wYXlwYWwtbG9nbyBpOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICMyNTNiODA7XG59XG5cbi5wYXlwYWwtbG9nbyBpOmxhc3QtY2hpbGQge1xuICBjb2xvcjogIzE3OWJkNztcbn1cblxuLnBheXBhbC1idXR0b24ge1xuICBwYWRkaW5nOiA1cHggMjFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGOTkzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0ZGRjBBOCwgI0Y5QjQyMSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAxMzhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGF5cGFsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzUwNTA1MDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4ucGF5cGFsLWxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLyogKiB7XG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIHBhZGRpbmc6IDBweDsgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSwgaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXIsIHNhbnMtc2VyaWY7XG59ICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgVXRpbGl0eSBdKi9cbi5iZzAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBDb250YWN0IF0qL1xuLmNvbnRhaW5lci1jb250YWN0MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbi53cmFwLWNvbnRhY3QxMDAge1xuICB3aWR0aDogNjI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDYycHggNTVweCA5MHB4IDU1cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bICBdKi9cbi5jb250YWN0MTAwLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhY3QxMDAtZm9ybS10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhY3QxMDAtZm9ybS10aXRsZSBwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGEwNjc7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlIHA6OmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250YWN0MTAwLWZvcm0tdGl0bGUgcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYTA2NztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb250YWN0MTAwLWZvcm0tdGl0bGUgcDo6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ud3JhcC1pbnB1dDEwMCBwIHtcbiAgY29sb3I6ICNmMTU2NTY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bICBdKi9cbi53cmFwLWlucHV0MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHggOXB4IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yczEtd3JhcC1pbnB1dDEwMCB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcbn1cblxuLmxhYmVsLWlucHV0MTAwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzM5MzkzOTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogLmlucHV0MTAwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59ICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiBpbnB1dC5pbnB1dDEwMCB7XG4gIGhlaWdodDogNDBweDtcbn1cbiAqL1xuLyogdGV4dGFyZWEuaW5wdXQxMDAge1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG59ICovXG4vKiAuaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDA6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xufSAqL1xuLmhhcy12YWwuaW5wdXQxMDAgKyAuZm9jdXMtaW5wdXQxMDA6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBSZXNwb25zaXZlIF0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yczEtd3JhcC1pbnB1dDEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAud3JhcC1jb250YWN0MTAwIHtcbiAgICBwYWRkaW5nOiA2MnB4IDE1cHggOTBweCAxNXB4O1xuICB9XG5cbiAgLndyYXAtaW5wdXQxMDAge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCA5cHggMTBweDtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICB9XG5cbiAgLnRydWUtdmFsaWRhdGU6OmFmdGVyLFxuLmJ0bi1oaWRlLXZhbGlkYXRlIHtcbiAgICByaWdodDogMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBSZXN0eWxlIFJhZGlvIF0qL1xuLndyYXAtY29udGFjdDEwMC1mb3JtLXJhZGlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAwIDI1cHg7XG59XG5cbi5jb250YWN0MTAwLWZvcm0tcmFkaW8ge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4vKiAuaW5wdXQtcmFkaW8xMDAge1xuICBkaXNwbGF5OiBub25lO1xufVxuICovXG4ubGFiZWwtcmFkaW8xMDAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5sYWJlbC1yYWRpbzEwMDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmxhYmVsLXJhZGlvMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICMwMGFkNWY7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIC5pbnB1dC1yYWRpbzEwMDpjaGVja2VkICsgLmxhYmVsLXJhZGlvMTAwOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSAqL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgcnMgTm9VSSBdKi9cbi53cmFwLWNvbnRhY3QxMDAtZm9ybS1yYW5nZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDI1cHggNTdweCAyNXB4O1xufVxuXG4uY29udGFjdDEwMC1mb3JtLXJhbmdlLXZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmNvbnRhY3QxMDAtZm9ybS1yYW5nZS12YWx1ZSBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAud3JhcC1jb250YWN0MTAwLWZvcm0tcmFuZ2Uge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4IDU3cHggMHB4O1xuICB9XG5cbiAgLndyYXAtY29udGFjdDEwMC1mb3JtLXJhZGlvIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAwIDBweDtcbiAgfVxufVxuLnJpZ2h0LXNpZGUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ib3JkZXItcmkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjNhYWFhO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PayCreditCardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayCreditCardDetailsComponent", function() { return PayCreditCardDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-helper.service */ "./src/app/services/common-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PayCreditCardDetailsComponent = class PayCreditCardDetailsComponent {
    constructor(fb, authenticationService, commonHelper, router) {
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.commonHelper = commonHelper;
        this.router = router;
        this.cardSelect = false;
        this.selectedLink = "Card";
        this.commonHelper.getUserDataForPayment.subscribe(userData => {
            this.userData = userData;
            console.log("this.userData", this.userData);
            // if(Object.entries(this.userData).length === 0 && this.userData.constructor === Object ){
            //   this.router.navigate(['/signup'])
            // }
        });
    }
    setradio(e) {
        this.selectedLink = e;
    }
    isSelected(name) {
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;
        }
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }
    ngOnInit() {
        this.paymentForm = this.fb.group({
            cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            expiryMonth: ['january', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            expiryYear: ['2019', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    proceed() {
        console.log("this.", this.paymentForm);
        if (this.paymentForm.valid) {
            const paymentObj = Object.assign({}, this.userData, { number: this.paymentForm.get('cardNumber').value, exp_month: this.paymentForm.get('expiryMonth').value, cvc: this.paymentForm.get('cvv').value, exp_year: this.paymentForm.get('expiryYear').value });
            // alert("seucess")
            // this.router.navigate(['/payment'])
            // localStorage.setItem('user',paymentObj.buyerName)
            // this.commonHelper.setUserStatus(paymentObj.buyerName);
            // this.router.navigate(['/dashboard'])
            this.authenticationService.payment(paymentObj).subscribe(response => {
                console.log("response============>", response);
                localStorage.setItem('user', paymentObj.buyerName);
                this.commonHelper.setUserStatus(paymentObj.buyerName);
                this.router.navigate(['/dashboard']);
            }, err => {
                this.commonHelper.showErrorToast(err.error.message, 'Error', 5000);
                // localStorage.clear();
                // this.commonHelper.setUserStatus('');
            });
        }
        else {
            this.commonHelper.validateFormFields(this.paymentForm);
        }
    }
    checkFieldValid(formControl) {
        if (this.paymentForm.get([formControl]).errors && this.paymentForm.get([formControl]).errors.required &&
            this.paymentForm.get([formControl]).touched) {
            return 'is-invalid';
        }
        else {
            return this.checkMinMaxError(formControl);
        }
    }
    checkMinMaxError(formControl) {
        // console.log(this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required ))
        if (this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required)) {
            return 'is-invalid';
        }
        else
            return '';
    }
    back() {
        this.cardSelect = false;
    }
    home() {
        localStorage.setItem('mobile', this.userData.mobile);
        localStorage.setItem('buyerName', this.userData.buyerName);
        localStorage.setItem('benificiaryName', this.userData.benificiaryName);
        localStorage.setItem('email', this.userData.email);
        localStorage.setItem('amount', this.userData.amount);
        localStorage.setItem('currency', this.userData.currency);
        window.history.back();
    }
    cardProceed() {
        const paymentObj = Object.assign({}, this.userData);
        // alert("seucess")
        // this.router.navigate(['/payment'])
        // localStorage.setItem('user',paymentObj.buyerName)
        // this.commonHelper.setUserStatus(paymentObj.buyerName);
        // this.router.navigate(['/dashboard'])
        this.authenticationService.paypal(paymentObj).subscribe(response => {
            console.log("response============>", response);
            // localStorage.setItem('user', paymentObj.buyerName)
            // this.commonHelper.setUserStatus(paymentObj.buyerName);
            window.open(response.data);
        }, err => {
            console.log("err============>", err);
            this.commonHelper.showErrorToast(err.error.message, 'Error', 5000);
            // localStorage.clear();
            // this.commonHelper.setUserStatus('');
        });
    }
};
PayCreditCardDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__["CommonHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PayCreditCardDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pay-credit-card-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pay-credit-card-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pay-credit-card-details.component.scss */ "./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.scss")).default]
    })
], PayCreditCardDetailsComponent);



/***/ }),

/***/ "./src/app/payment/payment-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment/payment.component.ts");
/* harmony import */ var _pay_credit_card_details_pay_credit_card_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pay-credit-card-details/pay-credit-card-details.component */ "./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.ts");





const routes = [
    { path: '', redirectTo: 'mobile_recharge' },
    { path: 'mobile_recharge', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"] },
    { path: 'payment_details', component: _pay_credit_card_details_pay_credit_card_details_component__WEBPACK_IMPORTED_MODULE_4__["PayCreditCardDetailsComponent"] },
];
let PaymentRoutingModule = class PaymentRoutingModule {
};
PaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentRoutingModule);



/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/payment/payment-routing.module.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment/payment.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pay_credit_card_details_pay_credit_card_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay-credit-card-details/pay-credit-card-details.component */ "./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let PaymentModule = class PaymentModule {
};
PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"], _pay_credit_card_details_pay_credit_card_details_component__WEBPACK_IMPORTED_MODULE_6__["PayCreditCardDetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]
    })
], PaymentModule);



/***/ }),

/***/ "./src/app/payment/payment/payment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/payment/payment/payment.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-group>.input-group-prepend {\n    min-width:15%;\n    text-align:center;\n}\n\n.input-group .input-group-text {\n    min-width:100%;\n    text-align:center;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cD4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XG4gICAgbWluLXdpZHRoOjE1JTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBtaW4td2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/payment/payment/payment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/payment/payment/payment.component.ts ***!
  \******************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-helper.service */ "./src/app/services/common-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");







let PaymentComponent = class PaymentComponent {
    constructor(fb, authenticationService, commonHelper, router) {
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.commonHelper = commonHelper;
        this.router = router;
        this.countrys = this.commonHelper.mockCountryData;
        this.separateDialCode = true;
        this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["SearchCountryField"];
        this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["TooltipLabel"];
        this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"];
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"].UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"].UnitedKingdom];
        this.prepaidElec = false;
        this.mobileOperator = "93";
        this.currencyList = [];
        this.commonHelper.getSelectedCountry.subscribe(res => {
            if (res) {
                let country = this.countrys.filter(x => x.callingCodes[0] == res.split('+').join(''));
                this.countryCode = '+' + country[0].callingCodes[0];
                this.countryName = country[0].name;
                this.country = this.countryName + '(' + this.countryCode + ')';
                this.flag = country[0].flag;
            }
            else {
                this.countryName = this.countrys[0].name;
                this.country = this.countryName + '(+' + this.countrys[0].callingCodes[0] + ')';
                this.countryCode = '+' + this.countrys[0].callingCodes[0] + '';
                this.flag = this.countrys[0].flag;
            }
        });
    }
    ngOnInit() {
        this.currencyList = this.countrys.map(x => x.currencies[0]);
        let newset = new Set(this.currencyList.map(x => JSON.stringify(x)));
        this.currencyList = Array.from(newset).map(x => JSON.parse(x));
        this.signUpForm = this.fb.group({
            firstName: [localStorage.getItem('buyerName')],
            lastName: [localStorage.getItem('benificiaryName')],
            email: [localStorage.getItem('email'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            // mobileOperator:[''],
            countryCode: [this.country, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobileNumber: [localStorage.getItem('mobile'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: [localStorage.getItem('amount'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // serviceType:['',Validators.required],
            meterNumber: [''],
            currencyCode: [localStorage.getItem('currency') ? localStorage.getItem('currency') : this.currencyList[0].code, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        localStorage.removeItem('buyerName');
        localStorage.removeItem('mobile');
        localStorage.removeItem('buyerName');
        localStorage.removeItem('benificiaryName');
        localStorage.removeItem('email');
        localStorage.removeItem('amount');
        localStorage.removeItem('currency');
        // console.log(this.currencyList)
        this.commonHelper.getCountry().subscribe(res => {
            // console.log(res)
            this.countryList = res;
            // this.signUpForm.get('countryCode').patchValue(this.countryList[0].callingCodes[0])
        });
        // this.signUpForm.get('countryCode').valueChanges.subscribe(data=>{
        //   console.log(data)
        //   if(data){
        //     let mobileData=this.commonHelper.checkMobileNumber(data)[0];
        //     if(mobileData.MaxNumberLengthNoPrefix<this.maxLengthDigits){
        //       this.signUpForm.get('mobileNumber').patchValue('');
        //     }
        //     this.minLengthDigits=mobileData.MinNumberLengthNoPrefix;
        //     this.maxLengthDigits=mobileData.MaxNumberLengthNoPrefix;
        //     console.log(this.minLengthDigits,this.maxLengthDigits)
        //     this.signUpForm.get('mobileNumber').setValidators([Validators.required,Validators.minLength(mobileData.MinNumberLengthNoPrefix),Validators.maxLength(mobileData.MaxNumberLengthNoPrefix)])
        //     this.signUpForm.get('mobileNumber').updateValueAndValidity();
        //   }else{
        //     this.signUpForm.get('mobileNumber').setValidators([Validators.required])
        //     this.signUpForm.get('mobileNumber').updateValueAndValidity(); 
        //   }
        // })
        this.signUpForm.get('mobileNumber').valueChanges.subscribe(data => {
            // console.log(this.signUpForm.get('mobileNumber'))
        });
    }
    onCountryChange(event) {
        if (event.target.value) {
            let country = this.countrys.filter(x => event.target.value.split('(')[0].trim() == x.name);
            if (country.length) {
                this.countryName = country[0].name;
                this.countryCode = '+' + country[0].callingCodes[0];
                this.flag = country[0].flag;
                this.commonHelper.setCountry(this.countryCode);
            }
            else {
                this.signUpForm.get('countryCode').patchValue('');
            }
        }
        else {
            this.commonHelper.setCountry('');
            this.flag = "";
        }
    }
    serviceType(event) {
        if (event == 'prepaid') {
            this.signUpForm.get('meterNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            this.signUpForm.get('meterNumber').clearValidators();
        }
        this.signUpForm.get('meterNumber').updateValueAndValidity();
        event == 'prepaid' ? this.prepaidElec = true : this.prepaidElec = false;
    }
    // country(event){
    //   console.log(event)
    //   let countryObj = this.countryList.find(obj => obj.alpha2Code === event.alpha2Code);
    //   this.selctedCountry = countryObj;
    //   this.mobileOperator= countryObj.callingCodes[0];
    //   this.signUpForm.get('countryCode').patchValue(event.alpha2Code);
    //   this.signUpForm.get('currencyCode').patchValue(this.selctedCountry.currencies[0].code);
    // }
    register() {
        // console.log("this.",this.signUpForm)
        if (this.signUpForm.valid) {
            let currencySymbolFilter = this.currencyList.find(s => s.code == this.signUpForm.get('currencyCode').value);
            console.log(currencySymbolFilter);
            console.log(this.currencyList);
            // console.log("this.signUpForm.get('firstName').value",this.signUpForm.get('firstName').value)
            const registerRequest = {
                buyerName: this.signUpForm.get('firstName').value,
                benificiaryName: this.signUpForm.get('lastName').value,
                email: this.signUpForm.get('email').value,
                mobileOperator: this.countryCode,
                country: this.country.split('(')[0],
                mobile: this.signUpForm.get('mobileNumber').value,
                amount: this.signUpForm.get('amount').value,
                serviceType: 'mobile',
                currency: this.signUpForm.get('currencyCode').value,
                currencySymbol: currencySymbolFilter.symbol
                // meterNumber:this.signUpForm.get('meterNumber').value,
            };
            this.commonHelper.setUserDataForPayment(registerRequest);
            this.router.navigate(['services/payment_details']);
            // this.authenticationService.register(registerRequest).subscribe(response=>{
            //   this.commonHelper.showSuccessToast("Registration Success","Success",5000);
            //   this.router.navigate(['/payment'])
            //   localStorage.setItem("user",registerRequest.buyerName)
            //   this.commonHelper.setUserStatus(registerRequest.buyerName);
            // })
        }
        else {
            this.commonHelper.validateFormFields(this.signUpForm);
        }
    }
    checkFieldValid(formControl) {
        if (this.signUpForm.get([formControl]).errors && this.signUpForm.get([formControl]).errors.required &&
            this.signUpForm.get([formControl]).touched) {
            return 'is-invalid';
        }
        else {
            return this.checkMinMaxError(formControl);
        }
    }
    checkMinMaxError(formControl) {
        if (this.signUpForm.get([formControl]).errors && (this.signUpForm.get([formControl]).errors.minlength && this.signUpForm.get([formControl]).touched && !this.signUpForm.get([formControl]).errors.required)) {
            return 'is-invalid';
        }
        else
            return '';
    }
    checkMobileNumber() {
        if (this.signUpForm.get('mobileNumber').status == 'INVALID' && this.signUpForm.get('mobileNumber').touched)
            return 'is-invalid';
        else
            return '';
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_services_common_helper_service__WEBPACK_IMPORTED_MODULE_4__["CommonHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment/payment.component.css")).default]
    })
], PaymentComponent);



/***/ })

}]);
//# sourceMappingURL=payment-payment-module-es2015.js.map