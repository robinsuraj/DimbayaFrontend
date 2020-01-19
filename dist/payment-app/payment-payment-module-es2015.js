(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-contact100\">\r\n    <div *ngIf=\"!cardSelect\" class=\"wrap-contact100\">\r\n      <form class=\"contact100-form validate-form\">\r\n        <!-- <div class=\"wrap-input100 validate-input bg1\">\r\n          <mat-radio-button value=\"1\">\r\n            \r\n            <img src=\"../../../assets/images/visa.png\" width=\"35px;\" style=\"margin-right:10px;\"></mat-radio-button>\r\n          <input type=\"radio\"> <span class=\"label-input100 border-ri\">\r\n            <img src=\"../../../assets/images/visa.png\" width=\"35px;\" style=\"margin-right:10px;\"></span>\r\n          <div class=\"right-side\">\r\n            <i class=\"fa fa-cc-visa\" aria-hidden=\"true\" style=\"padding-right:25px;\"></i>\r\n          <i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-size: 20px;color: #ff5ed9;\"></i></div>\r\n        </div>\r\n  \r\n  \r\n        <span class=\"contact100-form-title\">\r\n          <p>or</p>\r\n        </span> -->\r\n        <div class=\"card\" style=\"width: 100%;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Summary</h5>\r\n            <br>\r\n            <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Payment Details:</h6> -->\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <p class=\"card-text\">Top Up Amount:</p>\r\n              </div>\r\n              <div class=\"col\">\r\n                <p class=\"card-text\"> {{userData.amount}} {{userData.currencySymbol}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <p class=\"card-text\">Processing fee:</p>\r\n              </div>\r\n              <div class=\"col\">\r\n                <p class=\"card-text\">0 {{userData.currencySymbol}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <p class=\"card-text\">Total:</p>\r\n              </div>\r\n              <div class=\"col\">\r\n                <p class=\"card-text\">{{userData.amount}} {{userData.currencySymbol}}</p>\r\n              </div>\r\n            </div>\r\n       \r\n          </div>\r\n        </div>\r\n        <br>\r\n        <hr> \r\n        <!-- <h2>Payment Methods</h2> -->\r\n        <div style=\"width: 100%; margin-top: 10px;\">\r\n          <h5 class=\"card-title\" style=\"padding: 1.25rem;\">Payment Methods</h5>\r\n        <div class=\"wrap-input100 validate-input bg1\">\r\n          <!-- <mat-radio-button value=\"1\">Card</mat-radio-button> -->\r\n          <input type=\"radio\" (click)=\"setradio('Card')\" [checked]=\"isSelected('Card')\"> <span class=\"label-input100\">Card</span>\r\n          <div class=\"right-side\">\r\n            <i class=\"fa fa-cc-visa\" aria-hidden=\"true\" style=\"padding-right:25px;\"></i>\r\n          <i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i>\r\n            <img src=\"../../../assets/images/visa.png\" width=\"35px;\" style=\"margin-right:10px;\"><img\r\n              src=\"../../../assets/images/Master.png\" width=\"30px;\"></div>\r\n        </div>\r\n        <div *ngIf=\"isSelected('Card')\">\r\n          <form class=\"credit-card-de\" [formGroup]=\"paymentForm\">\r\n            <div class=\"form-header\">\r\n              <h4 class=\"title\">CREDIT/ DEBIT CARD</h4>\r\n            </div>\r\n        \r\n        \r\n            <div class=\"form-body\">\r\n              <!-- Card Number -->\r\n    \r\n    \r\n              <div class=\"input-group input-group-lg\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-credit-card\"></i></div>\r\n                </div>\r\n                <input  class=\"form-control\" type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('cardNumber')\" maxlength=\"16\" minlength=\"16\"\r\n                placeholder=\"Card Number\" formControlName=\"cardNumber\">           \r\n              </div>\r\n    \r\n              <span *ngIf=\"checkMinMaxError('cardNumber')\" style=\"color: red\">\r\n                Card Number should be atleast {{paymentForm.get('cardNumber').errors.minlength.requiredLength}} digits .\r\n              </span>\r\n              <!-- Date Field -->\r\n              <div class=\"date-field\">\r\n                <div class=\"month\">\r\n                  <select name=\"Month\" [ngClass]=\"checkFieldValid('expiryMonth')\" formControlName=\"expiryMonth\">\r\n                    <option value=\"january\">January</option>\r\n                    <option value=\"february\">February</option>\r\n                    <option value=\"march\">March</option>\r\n                    <option value=\"april\">April</option>\r\n                    <option value=\"may\">May</option>\r\n                    <option value=\"june\">June</option>\r\n                    <option value=\"july\">July</option>\r\n                    <option value=\"august\">August</option>\r\n                    <option value=\"september\">September</option>\r\n                    <option value=\"october\">October</option>\r\n                    <option value=\"november\">November</option>\r\n                    <option value=\"december\">December</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"year\">\r\n                  <select name=\"Year\" [ngClass]=\"checkFieldValid('expiryYear')\" formControlName=\"expiryYear\">\r\n                    <option value=\"2019\">2019</option>\r\n                    <option value=\"2020\">2020</option>\r\n                    <option value=\"2021\">2021</option>\r\n                    <option value=\"2022\">2022</option>\r\n                    <option value=\"2023\">2023</option>\r\n                    <option value=\"2024\">2024</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n        \r\n              <!-- Card Verification Field -->\r\n              <div class=\"card-verification\">\r\n                <div class=\"cvv-input\">\r\n                  <input style=\"line-height: 40px\" type=\"text\" [ngClass]=\"checkFieldValid('cvv')\" minlength=\"3\" maxlength=\"4\" placeholder=\"CVV\"\r\n                    formControlName=\"cvv\">\r\n                  <span *ngIf=\"checkMinMaxError('cvv')\" style=\"color: red\">\r\n                    CVV Number should be atleast {{paymentForm.get('cvv').errors.minlength.requiredLength}} digits .\r\n                  </span>\r\n                </div>\r\n                <div class=\"cvv-details\">\r\n                  <p>3 or 4 digits usually found <br> on the signature strip</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"savedCrad\">\r\n                <!-- <mat-checkbox>Save this card for faster payments<i class=\"material-icons\" style=\"font-size: 15px;\" \r\n                  matTooltip=\"Save your credit card information and make your next purchase quick. Your card information is encrypted and safe with us. We dont store cvv number.\">\r\n                  info\r\n                  </i></mat-checkbox> -->\r\n              </div>\r\n              \r\n              <!-- Buttons -->\r\n              <button style=\"line-height: 35px;\"type=\"submit\" class=\"proceed-btn\" (click)=\"proceed()\">Proceed</button>\r\n              <!-- <mat-divider></mat-divider> -->\r\n              <!-- <div style=\"padding-top: 21px;\">\r\n        \r\n                <a class=\"paypal-button\"\r\n                  href=\"http://ec2-3-136-169-121.us-east-2.compute.amazonaws.com:7000/api/payment/paypal\">\r\n                  <span class=\"paypal-button-title\">\r\n                    Pay with\r\n                  </span>\r\n                  <span class=\"paypal-logo\">\r\n                    <i>Pay</i><i>Pal</i>\r\n                  </span>\r\n                </a>\r\n              </div> -->\r\n              <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"back()\">Back</button> -->\r\n        \r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"wrap-input100 validate-input bg1\">\r\n          <!-- <mat-radio-button value=\"1\">PayPal</mat-radio-button> -->\r\n          <input type=\"radio\" (click)=\"setradio('Paypal')\" [checked]=\"isSelected('Paypal')\"> <span class=\"label-input100\">PayPal</span>\r\n          <div class=\"right-side\">\r\n            <img src=\"../../../assets/images/paypal.png\" width=\"30px;\"></div>\r\n        </div>\r\n        <div class=\"wrap-input100 validate-input bg1\">\r\n          <!-- <mat-radio-button value=\"1\">American Express</mat-radio-button> -->\r\n          <input type=\"radio\"> <span class=\"label-input100\">American Express</span>\r\n          <div class=\"right-side\">\r\n            <img src=\"../../../assets/images/american.png\" width=\"30px;\"></div>\r\n        </div>\r\n        <div class=\"wrap-input100 validate-input bg1\">\r\n          <!-- <mat-radio-button value=\"1\">AliPay</mat-radio-button> -->\r\n          <input type=\"radio\"> <span class=\"label-input100\">AliPay</span>\r\n          <div class=\"right-side\">\r\n            <img src=\"../../../assets/images/alipay.png\" width=\"55px;\"></div>\r\n        </div>\r\n        <div *ngIf=\"isSelected('Paypal')\" class=\"wrap-input100 validate-input bg1 text-center\" style=\"cursor:pointer\" (click)=\"cardProceed()\">\r\n          <p>Continue</p>\r\n        </div>\r\n      </div>\r\n      </form>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"home()\">Back</button>\r\n    \r\n    </div>\r\n  \r\n    <div *ngIf=\"cardSelect\" class=\"containerPayment\">\r\n      <form class=\"credit-card\" [formGroup]=\"paymentForm\">\r\n        <div class=\"form-header\">\r\n          <h4 class=\"title\">CREDIT/ DEBIT CARD</h4>\r\n        </div>\r\n    \r\n    \r\n        <div class=\"form-body\">\r\n          <!-- Card Number -->\r\n\r\n\r\n          <div class=\"input-group input-group-lg\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><i class=\"fa fa-credit-card\"></i></div>\r\n            </div>\r\n            <input  class=\"form-control\" type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('cardNumber')\" maxlength=\"16\" minlength=\"16\"\r\n            placeholder=\"Card Number\" formControlName=\"cardNumber\">           \r\n          </div>\r\n\r\n          <span *ngIf=\"checkMinMaxError('cardNumber')\" style=\"color: red\">\r\n            Card Number should be atleast {{paymentForm.get('cardNumber').errors.minlength.requiredLength}} digits .\r\n          </span>\r\n          <!-- Date Field -->\r\n          <div class=\"date-field\">\r\n            <div class=\"month\">\r\n              <select name=\"Month\" [ngClass]=\"checkFieldValid('expiryMonth')\" formControlName=\"expiryMonth\">\r\n                <option value=\"january\">January</option>\r\n                <option value=\"february\">February</option>\r\n                <option value=\"march\">March</option>\r\n                <option value=\"april\">April</option>\r\n                <option value=\"may\">May</option>\r\n                <option value=\"june\">June</option>\r\n                <option value=\"july\">July</option>\r\n                <option value=\"august\">August</option>\r\n                <option value=\"september\">September</option>\r\n                <option value=\"october\">October</option>\r\n                <option value=\"november\">November</option>\r\n                <option value=\"december\">December</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"year\">\r\n              <select name=\"Year\" [ngClass]=\"checkFieldValid('expiryYear')\" formControlName=\"expiryYear\">\r\n                <option value=\"2019\">2019</option>\r\n                <option value=\"2020\">2020</option>\r\n                <option value=\"2021\">2021</option>\r\n                <option value=\"2022\">2022</option>\r\n                <option value=\"2023\">2023</option>\r\n                <option value=\"2024\">2024</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n    \r\n          <!-- Card Verification Field -->\r\n          <div class=\"card-verification\">\r\n            <div class=\"cvv-input\">\r\n              <input style=\"line-height: 40px\" type=\"text\" [ngClass]=\"checkFieldValid('cvv')\" minlength=\"3\" maxlength=\"4\" placeholder=\"CVV\"\r\n                formControlName=\"cvv\">\r\n              <span *ngIf=\"checkMinMaxError('cvv')\" style=\"color: red\">\r\n                CVV Number should be atleast {{paymentForm.get('cvv').errors.minlength.requiredLength}} digits .\r\n              </span>\r\n            </div>\r\n            <div class=\"cvv-details\">\r\n              <p>3 or 4 digits usually found <br> on the signature strip</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"savedCrad\">\r\n            <!-- <mat-checkbox>Save this card for faster payments<i class=\"material-icons\" style=\"font-size: 15px;\" \r\n              matTooltip=\"Save your credit card information and make your next purchase quick. Your card information is encrypted and safe with us. We dont store cvv number.\">\r\n              info\r\n              </i></mat-checkbox> -->\r\n          </div>\r\n          \r\n          <!-- Buttons -->\r\n          <button style=\"line-height: 35px;\"type=\"submit\" class=\"proceed-btn\" (click)=\"proceed()\">Proceed</button>\r\n          <!-- <mat-divider></mat-divider> -->\r\n          <div style=\"padding-top: 21px;\">\r\n    \r\n            <a class=\"paypal-button\"\r\n              href=\"http://ec2-3-136-169-121.us-east-2.compute.amazonaws.com:7000/api/payment/paypal\">\r\n              <span class=\"paypal-button-title\">\r\n                Pay with\r\n              </span>\r\n              <span class=\"paypal-logo\">\r\n                <i>Pay</i><i>Pal</i>\r\n              </span>\r\n            </a>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"back()\">Back</button>\r\n    \r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment/payment.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment/payment.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"resp-tabs-list\">\r\n        <span class=\"custom-dropdown active\">\r\n          <a href=\"\">\r\n            <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\r\n            Mobile\r\n          </a>\r\n        </span>\r\n        <ul>\r\n          <li class=\"active\">\r\n            <a href=\"\">\r\n              <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\r\n              Mobile\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-lightbulb-o\" aria-hidden=\"true\"></i>\r\n              Electricity\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n              Land Line\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-connectdevelop\" aria-hidden=\"true\"></i>\r\n              Broad Band\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-flask\" aria-hidden=\"true\"></i>\r\n              Gas\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-tint\" aria-hidden=\"true\"></i>\r\n              Water\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-subway\" aria-hidden=\"true\"></i>\r\n              Metro\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n          <form [formGroup]=\"signUpForm\">\r\n            <div class=\"row\">\r\n             <div class=\"input-group input-group-lg\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\">  \r\n                  <img class=\"country-flag\"  *ngIf=\"flag\" src={{flag}}/> </div>\r\n                </div>\r\n              <datalist id=\"suggestions\" >\r\n                <ng-container *ngFor=\"let country of countrys\">\r\n                  <option>{{country.name}} (+{{country.callingCodes[0]}})</option>\r\n                </ng-container>\r\n              </datalist>\r\n              <input  class=\"form-control\" [ngClass]=\"checkFieldValid('countryCode')\" formControlName=\"countryCode\" (change)=\"onCountryChange($event)\" placeholder=\"Select Country\"\r\n                type=\"text\" autoComplete=\"on\" list=\"suggestions\">\r\n            </div>\r\n            <!-- <div class=\" row\">\r\n              <select formControlName=\"serviceType\" (change)=\"serviceType($event.target.value)\"\r\n                [ngClass]=\"checkFieldValid('serviceType')\">\r\n                <option value=\"\" disabled selected hidden>Select Service Type</option>\r\n                <option value=\"mobile\">Mobile Recharge</option>\r\n                <option value=\"prepaid\">Prepaid Electrity</option>\r\n              </select>\r\n            </div> -->\r\n            <div class=\"input-group input-group-lg\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\">  \r\n                  {{countryCode}} </div>\r\n              </div>\r\n              \r\n              <input  numbersOnly type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('mobileNumber')\"\r\n                minlength=\"{{minLengthDigits}}\" class=\"form-control\"\r\n                maxlength=\"{{maxLengthDigits}}\"  placeholder=\"Mobile Number\" formControlName=\"mobileNumber\">\r\n            </div>\r\n            <div class=\"input-group input-group-lg\" *ngIf=\"prepaidElec\">\r\n              <input class=\"form-control\" type=\"text\" numbersOnly [ngClass]=\"checkFieldValid('meterNumber')\"\r\n                 placeholder=\"Meter Number\"\r\n                formControlName=\"meterNumber\" minlength=\"10\" maxlength=\"15\">\r\n              <span *ngIf=\"checkMinMaxError('meterNumber')\" style=\"color: red\">\r\n                Meter Number should be atleast {{signUpForm.get('meterNumber').errors.minlength.requiredLength}} digits.\r\n              </span>\r\n            </div>\r\n            <div class=\"input-group input-group-lg\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user\"></i></div>\r\n              </div>\r\n              <input class=\"form-control\" type=\"text\" alphabetsOnly [ngClass]=\"checkFieldValid('firstName')\" placeholder=\"Buyers Full Name\"\r\n                formControlName=\"firstName\">\r\n            </div>\r\n\r\n            <div class=\"input-group input-group-lg\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user\"></i></div>\r\n              </div>\r\n              <input class=\"form-control\" type=\"text\" alphabetsOnly [ngClass]=\"checkFieldValid('lastName')\"\r\n                placeholder=\"Beneficiary's Full Name\" formControlName=\"lastName\">\r\n            </div>\r\n\r\n            <div class=\"input-group input-group-lg\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></div>\r\n              </div>\r\n              <input class=\"form-control\" [ngClass]=\"checkFieldValid('email') || signUpForm.get('email').errors?.pattern? 'is-invalid':''\"\r\n                pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}\" type=\"email\" placeholder=\"Email\"\r\n                formControlName=\"email\">\r\n             \r\n            </div>\r\n            <span *ngIf=\"signUpForm.get('email').errors?.pattern\" style=\"color:red;margin-top:-10px\">Please Enter Valid Email\r\n              Id.</span>\r\n            <div class=\"input-group input-group-lg\">\r\n              <div class=\"input-group-prepend \">\r\n                <div class=\"input-group input-group-lg\" >  \r\n                  <select class=\"form-control\" formControlName=\"currencyCode\" style=\"background-color: #e9ecef;\">\r\n                    <ng-container *ngFor=\"let currency of currencyList;let i=index;\">\r\n                      <option [value]=\"currency.code\">{{currency.symbol}}</option>\r\n                    </ng-container>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n         \r\n              <input class=\"form-control\" type=\"text\" maxlength=\"12\" numbersOnly [ngClass]=\"checkFieldValid('amount')\" min=1 max=999999999999\r\n                placeholder=\"Amount\" formControlName=\"amount\">\r\n            </div>\r\n\r\n            <button style=\"line-height: 1.4;  height: 3.4em;\" class=\"btn btn-primary  btn-block btn-round\"\r\n              (click)=\"register()\">PAY</button>\r\n          </div>\r\n          </form>\r\n       \r\n        <div class=\"resp-tabs-tab\"></div>\r\n        <div class=\"resp-tabs-tab\"></div>\r\n        <div class=\"resp-tabs-tab\"></div>\r\n        <div class=\"resp-tabs-tab\"></div>\r\n        <div class=\"resp-tabs-tab\"></div>\r\n        <div class=\"resp-tabs-tab\"></div>\r\n      </div>\r\n\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/payment/pay-credit-card-details/pay-credit-card-details.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Credit Card */\n.credit-card {\n  width: 360px;\n  height: 454px;\n  margin: 60px auto 0;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  background-color: #fff;\n  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.credit-card-de {\n  width: 360px;\n  height: 340px;\n  margin: 16px auto 16px;\n  border: 1px solid #ddd;\n}\n.form-header {\n  height: 60px;\n  padding: 20px 30px 0;\n  border-bottom: 1px solid #e1e8ee;\n}\n.form-body {\n  height: 340px;\n  padding: 13px 29px 13px 29px;\n}\n/* Title */\n.title {\n  font-size: 16px;\n  margin: 0;\n  color: #5e6977;\n}\n.savedCrad {\n  font-size: 12px;\n  color: #666666;\n}\n/* Common */\n.card-number,\n.cvv-input input,\n.month select,\n.year select {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 14px;\n}\n.card-number,\n.month select,\n.year select {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 14px;\n}\n.card-number,\n.cvv-details,\n.cvv-input input,\n.month select,\n.year select {\n  opacity: 0.7;\n  color: #86939e;\n}\n/* Card Number */\n.card-number {\n  width: 100%;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border: 2px solid #e1e8ee;\n  border-radius: 6px;\n}\n/* Date Field */\n.month select,\n.year select {\n  width: 145px;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border: 2px solid #e1e8ee;\n  border-radius: 6px;\n  /* background: ; */\n  background-position: 85% 50%;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.month select {\n  float: left;\n}\n.year select {\n  float: right;\n}\n/* Card Verification Field */\n.cvv-input input {\n  float: left;\n  width: 145px;\n  padding-left: 20px;\n  border: 2px solid #e1e8ee;\n  border-radius: 6px;\n  background: #fff;\n}\n/* Buttons Section */\n.paypal-btn,\n.proceed-btn {\n  cursor: pointer;\n  font-size: 16px;\n  width: 100%;\n  border-color: transparent;\n  border-radius: 6px;\n}\n.proceed-btn {\n  margin-bottom: 10px;\n  background: #7dc855;\n}\n.btn-danger {\n  float: right;\n  background-color: red;\n  margin: 5px;\n}\n.paypal-btn a,\n.proceed-btn a {\n  text-decoration: none;\n}\n.proceed-btn a {\n  color: #fff;\n}\n.paypal-btn a {\n  color: rgba(242, 242, 242, 0.7);\n}\n.paypal-btn {\n  padding-right: 95px;\n  /* background: url('paypal-logo.svg') no-repeat 65% 56% #009cde; */\n}\n.cvv-details {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 16px;\n  float: right;\n  margin-bottom: 20px;\n}\n.cvv-details p {\n  margin-top: 6px;\n}\n.containerPayment {\n  max-width: 50em;\n  padding: 1em 0em 1em 0em;\n  margin: 5em auto;\n}\n/* \n\n.form-body[_ngcontent-gbm-c3] {\n    height: 340px;\n    padding: 13px 29px 13px 29px;\n} */\n.credit-card[_ngcontent-rry-c2] {\n  /* width: 381px; */\n  /* height: 400px; */\n  margin: 0px 7px 0px 0px;\n  border: 1px 0px 0px 0px solid #ddd;\n  /* border-radius: 6px; */\n  /* background-color: #fff; */\n  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.paypal-logo {\n  font-family: Verdana, Tahoma;\n  font-weight: bold;\n  font-size: 26px;\n}\n.paypal-logo i:first-child {\n  color: #253b80;\n}\n.paypal-logo i:last-child {\n  color: #179bd7;\n}\n.paypal-button {\n  padding: 5px 21px;\n  border: 1px solid #FF9933;\n  border-radius: 5px;\n  background-image: linear-gradient(#FFF0A8, #F9B421);\n  margin: 0 auto;\n  display: block;\n  min-width: 138px;\n  position: relative;\n}\n.paypal-title {\n  font-size: 14px;\n  color: #505050;\n  vertical-align: baseline;\n  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n}\n.paypal-logo {\n  display: inline-block;\n  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n  font-size: 20px;\n}\n/* * {\n    margin: 0px; \n    padding: 0px; \n    box-sizing: border-box;\n}\n\nbody, html {\n    height: 100%;\n    font-family: Poppins-Regular, sans-serif;\n} */\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n}\n/*---------------------------------------------*/\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\n/*---------------------------------------------*/\n.container {\n  max-width: 1200px;\n}\n/*//////////////////////////////////////////////////////////////////\n[ Utility ]*/\n.bg0 {\n  background-color: #fff;\n}\n/*//////////////////////////////////////////////////////////////////\n[ Contact ]*/\n.container-contact100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #e6e6e6;\n}\n.wrap-contact100 {\n  width: 625px;\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 62px 55px 90px 55px;\n}\n/*------------------------------------------------------------------\n[  ]*/\n.contact100-form {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.contact100-form-title {\n  display: block;\n  width: 100%;\n  font-size: 15px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n  padding-bottom: 15px;\n}\n.contact100-form-title p::after {\n  content: \"\";\n  background-color: #c0a067;\n  width: 30px;\n  height: 1px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.contact100-form-title p::after {\n  margin-left: 10px;\n}\n.contact100-form-title p::before {\n  content: \"\";\n  background-color: #c0a067;\n  width: 30px;\n  height: 1px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.contact100-form-title p::before {\n  margin-right: 10px;\n}\n.wrap-input100 p {\n  color: #f15656;\n  font-weight: 600;\n  font-family: Poppins-Regular;\n}\n/*------------------------------------------------------------------\n[  ]*/\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border: 1px solid #e6e6e6;\n  border-radius: 3px;\n  padding: 10px 30px 9px 22px;\n  margin-bottom: 20px;\n}\n.rs1-wrap-input100 {\n  width: calc((100% - 30px) / 2);\n}\n.label-input100 {\n  font-size: 15px;\n  color: #393939;\n  line-height: 1.5;\n}\n/* .input100 {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n  padding-right: 15px;\n} */\n/*---------------------------------------------*/\n/* input.input100 {\n  height: 40px;\n}\n */\n/* textarea.input100 {\n  min-height: 120px;\n  padding-top: 9px;\n  padding-bottom: 13px;\n} */\n/* .input100:focus + .focus-input100::before {\n  width: 100%;\n} */\n.has-val.input100 + .focus-input100::before {\n  width: 100%;\n}\n/*------------------------------------------------------------------\n[ Responsive ]*/\n@media (max-width: 768px) {\n  .rs1-wrap-input100 {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .wrap-contact100 {\n    padding: 62px 15px 90px 15px;\n  }\n\n  .wrap-input100 {\n    padding: 10px 10px 9px 10px;\n  }\n}\n/*---------------------------------------------*/\n@media (max-width: 576px) {\n  .alert-validate::before {\n    padding: 0 10px 0 10px;\n  }\n\n  .true-validate::after,\n.btn-hide-validate {\n    right: 0px;\n    width: 30px;\n  }\n}\n/*------------------------------------------------------------------\n[ Restyle Radio ]*/\n.wrap-contact100-form-radio {\n  width: 100%;\n  padding: 15px 25px 0 25px;\n}\n.contact100-form-radio {\n  padding-bottom: 5px;\n}\n/* .input-radio100 {\n  display: none;\n}\n */\n.label-radio100 {\n  display: block;\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n}\n.label-radio100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #cdcdcd;\n  background: #fff;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.label-radio100::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 6px solid transparent;\n  background: #00ad5f;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  display: none;\n}\n/* .input-radio100:checked + .label-radio100::after {\n  display: block;\n} */\n/*==================================================================\n[ rs NoUI ]*/\n.wrap-contact100-form-range {\n  width: 100%;\n  padding: 20px 25px 57px 25px;\n}\n.contact100-form-range-value {\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n  padding-top: 10px;\n  padding-bottom: 30px;\n}\n.contact100-form-range-value input {\n  display: none;\n}\n@media (max-width: 576px) {\n  .wrap-contact100-form-range {\n    padding: 20px 0px 57px 0px;\n  }\n\n  .wrap-contact100-form-radio {\n    padding: 15px 0px 0 0px;\n  }\n}\n.right-side {\n  float: right;\n}\n.border-ri {\n  border-right: 1px solid #b3aaaa;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXktY3JlZGl0LWNhcmQtZGV0YWlscy9DOlxcVXNlcnNcXDkxOTg3XFxPbmVEcml2ZVxcRGV2ZWxvcG1lbnRcXERpbWJheWFGcm9udGVuZC9zcmNcXGFwcFxccGF5bWVudFxccGF5LWNyZWRpdC1jYXJkLWRldGFpbHNcXHBheS1jcmVkaXQtY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50L3BheS1jcmVkaXQtY2FyZC1kZXRhaWxzL3BheS1jcmVkaXQtY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLGdCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7QUNBSjtBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDQUY7QURLQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDRko7QURLQTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FESUEsVUFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDREo7QURJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDREY7QURHQSxXQUFBO0FBQ0E7Ozs7RUFJSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7OztFQUdJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTs7Ozs7RUFLSSxZQUFBO0VBQ0EsY0FBQTtBQ0FKO0FERUEsZ0JBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0EsZUFBQTtBQUNBOztFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDRUo7QURDQTtFQUNJLFdBQUE7QUNFSjtBRENBO0VBQ0ksWUFBQTtBQ0VKO0FEQUEsNEJBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBRERBLG9CQUFBO0FBQ0E7O0VBRUksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0lKO0FEREE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDSUo7QUREQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNJSjtBREFBOztFQUVJLHFCQUFBO0FDR0o7QURBQTtFQUNJLFdBQUE7QUNHSjtBREFBO0VBQ0ksK0JBQUE7QUNHSjtBREFBO0VBQ0ksbUJBQUE7RUFDQSxrRUFBQTtBQ0dKO0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEQUE7RUFDSSxlQUFBO0FDR0o7QURBQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDR0o7QUREQTs7Ozs7R0FBQTtBQU9BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7QUNHSjtBRENBO0VBQ00sNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFTjtBREVJO0VBQ0ksY0FBQTtBQ0NSO0FERU07RUFDRSxjQUFBO0FDQ1I7QURHTTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQU47QURHSztFQUNHLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxpREFBQTtBQ0FSO0FER007RUFDRSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtBQ0FSO0FESU07Ozs7Ozs7OztHQUFBO0FBV0YsZ0RBQUE7QUFDQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0YsdUJBQUE7RUFDQSx5QkFBQTtBQ0ZOO0FES0k7RUFDSSx3QkFBQTtBQ0ZSO0FES0k7RUFDSSxxQkFBQTtBQ0ZSO0FES0ksZ0RBQUE7QUFDQTtFQUNJLFdBQUE7QUNGUjtBREtJO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FET0ksZ0RBQUE7QUFDQTtFQUNJLGlCQUFBO0FDSlI7QURRSTtZQUFBO0FBR0E7RUFBTSxzQkFBQTtBQ0xWO0FEU0k7WUFBQTtBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBS0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUE47QURXSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ1JOO0FEWUk7S0FBQTtBQUdBO0VBQ0UsV0FBQTtFQUtBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNWTjtBRGFJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1ZOO0FEWUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNUUjtBRFdJO0VBQ0ksaUJBQUE7QUNSUjtBRFVJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDUFI7QURTSTtFQUNJLGtCQUFBO0FDTlI7QURRSTtFQUNRLGNBQUE7RUFDSixnQkFBQTtFQUNELDRCQUFBO0FDTFA7QURTSTtLQUFBO0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ1BOO0FEVUk7RUFDRSw4QkFBQTtBQ1BOO0FEVUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUE47QURXSTs7Ozs7Ozs7O0dBQUE7QUFZQSxnREFBQTtBQUNBOzs7RUFBQTtBQUtBOzs7O0dBQUE7QUFPQTs7R0FBQTtBQUlBO0VBQ0UsV0FBQTtBQ2ROO0FEaUJJO2VBQUE7QUFHQTtFQUNFO0lBQ0UsV0FBQTtFQ2ZOO0FBQ0Y7QURtQkk7RUFDRTtJQUNFLDRCQUFBO0VDakJOOztFRG9CSTtJQUNFLDJCQUFBO0VDakJOO0FBQ0Y7QURzQkksZ0RBQUE7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7RUNwQk47O0VEdUJJOztJQUVFLFVBQUE7SUFDQSxXQUFBO0VDcEJOO0FBQ0Y7QURzQkk7a0JBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ3BCTjtBRHVCSTtFQUNFLG1CQUFBO0FDcEJOO0FEdUJJOzs7RUFBQTtBQUlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDcEJOO0FEdUJJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFLQSwyQkFBQTtBQ3BCTjtBRHVCSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBS0EsMkJBQUE7RUFDQSxhQUFBO0FDcEJOO0FEd0JJOztHQUFBO0FBS0E7WUFBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FDdkJOO0FEMEJJO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3ZCTjtBRDBCSTtFQUNFLGFBQUE7QUN2Qk47QUQyQkk7RUFDRTtJQUNFLDBCQUFBO0VDeEJOOztFRDJCSTtJQUNFLHVCQUFBO0VDeEJOO0FBQ0Y7QUQwQkk7RUFDSSxZQUFBO0FDeEJSO0FEMEJJO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0FDdkJSIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXktY3JlZGl0LWNhcmQtZGV0YWlscy9wYXktY3JlZGl0LWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBDcmVkaXQgQ2FyZCAqL1xyXG4uY3JlZGl0LWNhcmQge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgaGVpZ2h0OiA0NTRweDtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvIDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDAgcmdiYSgwLDAsMCwuMTApO1xyXG59XHJcblxyXG4uY3JlZGl0LWNhcmQtZGUge1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBoZWlnaHQ6IDM0MHB4O1xyXG4gIG1hcmdpbjogMTZweCBhdXRvIDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAvLyBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAvLyBib3gtc2hhZG93OiAxcHggMnB4IDNweCAwIHJnYmEoMCwwLDAsLjEwKTtcclxufVxyXG4uZm9ybS1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZThlZTtcclxufVxyXG4gXHJcbi5mb3JtLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIHBhZGRpbmc6IDEzcHggMjlweCAxM3B4IDI5cHg7XHJcbn1cclxuLyogVGl0bGUgKi9cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNWU2OTc3O1xyXG59XHJcblxyXG4uc2F2ZWRDcmFke1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG4vKiBDb21tb24gKi9cclxuLmNhcmQtbnVtYmVyLFxyXG4uY3Z2LWlucHV0IGlucHV0LFxyXG4ubW9udGggc2VsZWN0LFxyXG4ueWVhciBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiBcclxuLmNhcmQtbnVtYmVyLFxyXG4ubW9udGggc2VsZWN0LFxyXG4ueWVhciBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiBcclxuLmNhcmQtbnVtYmVyLFxyXG4uY3Z2LWRldGFpbHMsXHJcbi5jdnYtaW5wdXQgaW5wdXQsXHJcbi5tb250aCBzZWxlY3QsXHJcbi55ZWFyIHNlbGVjdCB7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGNvbG9yOiAjODY5MzllO1xyXG59XHJcbi8qIENhcmQgTnVtYmVyICovXHJcbi5jYXJkLW51bWJlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlOGVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi8qIERhdGUgRmllbGQgKi9cclxuLm1vbnRoIHNlbGVjdCxcclxuLnllYXIgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlOGVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogOyAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODUlIDUwJTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4gXHJcbi5tb250aCBzZWxlY3Qge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIFxyXG4ueWVhciBzZWxlY3Qge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi8qIENhcmQgVmVyaWZpY2F0aW9uIEZpZWxkICovXHJcbi5jdnYtaW5wdXQgaW5wdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlOGVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4vKiBCdXR0b25zIFNlY3Rpb24gKi9cclxuLnBheXBhbC1idG4sXHJcbi5wcm9jZWVkLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuIFxyXG4ucHJvY2VlZC1idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM3ZGM4NTU7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2Vye1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblxyXG59XHJcbiBcclxuLnBheXBhbC1idG4gYSxcclxuLnByb2NlZWQtYnRuIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiBcclxuLnByb2NlZWQtYnRuIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4ucGF5cGFsLWJ0biBhIHtcclxuICAgIGNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIC43KTtcclxufVxyXG4gXHJcbi5wYXlwYWwtYnRuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDk1cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJ3BheXBhbC1sb2dvLnN2ZycpIG5vLXJlcGVhdCA2NSUgNTYlICMwMDljZGU7ICovXHJcbn1cclxuIFxyXG4uY3Z2LWRldGFpbHMge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4gXHJcbi5jdnYtZGV0YWlscyBwIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLmNvbnRhaW5lclBheW1lbnQge1xyXG4gICAgbWF4LXdpZHRoOiA1MGVtO1xyXG4gICAgcGFkZGluZzogMWVtIDBlbSAxZW0gMGVtO1xyXG4gICAgbWFyZ2luOiA1ZW0gYXV0bztcclxufVxyXG4vKiBcclxuXHJcbi5mb3JtLWJvZHlbX25nY29udGVudC1nYm0tYzNdIHtcclxuICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDI5cHggMTNweCAyOXB4O1xyXG59ICovXHJcblxyXG4uY3JlZGl0LWNhcmRbX25nY29udGVudC1ycnktYzJdIHtcclxuICAgIC8qIHdpZHRoOiAzODFweDsgKi9cclxuICAgIC8qIGhlaWdodDogNDAwcHg7ICovXHJcbiAgICBtYXJnaW46IDBweCA3cHggMHB4IDBweDtcclxuICAgIGJvcmRlcjogMXB4IDBweCAwcHggMHB4IHNvbGlkICNkZGQ7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMCByZ2JhKDAsMCwwLC4xMCk7XHJcbn1cclxuXHJcblxyXG4ucGF5cGFsLWxvZ28ge1xyXG4gICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgVGFob21hO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5wYXlwYWwtbG9nbyBpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogIzI1M2I4MDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucGF5cGFsLWxvZ28gaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogIzE3OWJkNztcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICAucGF5cGFsLWJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAyMXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY5OTMzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjRkZGMEE4LCAjRjlCNDIxKTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtaW4td2lkdGg6IDEzOHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgLnBheXBhbC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTA1MDUwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucGF5cGFsLWxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gIFxyXG5cclxuICAgICAgLyogKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7IFxyXG4gICAgICAgIHBhZGRpbmc6IDBweDsgXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYm9keSwgaHRtbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXIsIHNhbnMtc2VyaWY7XHJcbiAgICB9ICovXHJcbiAgICBcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGE6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBoMSxoMixoMyxoNCxoNSxoNiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgWyBVdGlsaXR5IF0qL1xyXG4gICAgXHJcbiAgICAuYmcwIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBbIENvbnRhY3QgXSovXHJcbiAgICBcclxuICAgIC5jb250YWluZXItY29udGFjdDEwMCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud3JhcC1jb250YWN0MTAwIHtcclxuICAgICAgd2lkdGg6IDYyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiA2MnB4IDU1cHggOTBweCA1NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBbICBdKi9cclxuICAgIFxyXG4gICAgLmNvbnRhY3QxMDAtZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFjdDEwMC1mb3JtLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QxMDAtZm9ybS10aXRsZSBwOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwYTA2NztcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgIC5jb250YWN0MTAwLWZvcm0tdGl0bGUgcDo6YWZ0ZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QxMDAtZm9ybS10aXRsZSBwOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGEwNjc7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdDEwMC1mb3JtLXRpdGxlIHA6OmJlZm9yZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAud3JhcC1pbnB1dDEwMCBwe1xyXG4gICAgICAgICAgICBjb2xvcjogI2YxNTY1NjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgWyAgXSovXHJcbiAgICBcclxuICAgIC53cmFwLWlucHV0MTAwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHggOXB4IDIycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yczEtd3JhcC1pbnB1dDEwMCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxhYmVsLWlucHV0MTAwIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIC5pbnB1dDEwMCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVNlbWlCb2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfSAqL1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qIGlucHV0LmlucHV0MTAwIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICBcclxuICAgIC8qIHRleHRhcmVhLmlucHV0MTAwIHtcclxuICAgICAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgfSAqL1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8qIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9ICovXHJcbiAgICBcclxuICAgIC5oYXMtdmFsLmlucHV0MTAwICsgLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFsgUmVzcG9uc2l2ZSBdKi9cclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC5yczEtd3JhcC1pbnB1dDEwMCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgLndyYXAtY29udGFjdDEwMCB7XHJcbiAgICAgICAgcGFkZGluZzogNjJweCAxNXB4IDkwcHggMTVweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC53cmFwLWlucHV0MTAwIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggOXB4IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAuYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC50cnVlLXZhbGlkYXRlOjphZnRlcixcclxuICAgICAgLmJ0bi1oaWRlLXZhbGlkYXRlIHtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgWyBSZXN0eWxlIFJhZGlvIF0qL1xyXG4gICAgLndyYXAtY29udGFjdDEwMC1mb3JtLXJhZGlvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjVweCAwIDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWN0MTAwLWZvcm0tcmFkaW8ge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiAuaW5wdXQtcmFkaW8xMDAge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICAubGFiZWwtcmFkaW8xMDAge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtU2VtaUJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sYWJlbC1yYWRpbzEwMDo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxhYmVsLXJhZGlvMTAwOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMGFkNWY7XHJcbiAgICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nOyAgICAgXHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nOyAgXHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IFxyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiAuaW5wdXQtcmFkaW8xMDA6Y2hlY2tlZCArIC5sYWJlbC1yYWRpbzEwMDo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH0gKi9cclxuICAgIFxyXG4gICAgXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgWyBycyBOb1VJIF0qL1xyXG4gICAgLndyYXAtY29udGFjdDEwMC1mb3JtLXJhbmdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjVweCA1N3B4IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWN0MTAwLWZvcm0tcmFuZ2UtdmFsdWUge1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFjdDEwMC1mb3JtLXJhbmdlLXZhbHVlIGlucHV0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgLndyYXAtY29udGFjdDEwMC1mb3JtLXJhbmdlIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCA1N3B4IDBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC53cmFwLWNvbnRhY3QxMDAtZm9ybS1yYWRpbyB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwcHggMCAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodC1zaWRle1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1yaXtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjNhYWFhO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuIiwiLyogQ3JlZGl0IENhcmQgKi9cbi5jcmVkaXQtY2FyZCB7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiA0NTRweDtcbiAgbWFyZ2luOiA2MHB4IGF1dG8gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNyZWRpdC1jYXJkLWRlIHtcbiAgd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICBtYXJnaW46IDE2cHggYXV0byAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZm9ybS1oZWFkZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZThlZTtcbn1cblxuLmZvcm0tYm9keSB7XG4gIGhlaWdodDogMzQwcHg7XG4gIHBhZGRpbmc6IDEzcHggMjlweCAxM3B4IDI5cHg7XG59XG5cbi8qIFRpdGxlICovXG4udGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM1ZTY5Nzc7XG59XG5cbi5zYXZlZENyYWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG4vKiBDb21tb24gKi9cbi5jYXJkLW51bWJlcixcbi5jdnYtaW5wdXQgaW5wdXQsXG4ubW9udGggc2VsZWN0LFxuLnllYXIgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cblxuLmNhcmQtbnVtYmVyLFxuLm1vbnRoIHNlbGVjdCxcbi55ZWFyIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5jYXJkLW51bWJlcixcbi5jdnYtZGV0YWlscyxcbi5jdnYtaW5wdXQgaW5wdXQsXG4ubW9udGggc2VsZWN0LFxuLnllYXIgc2VsZWN0IHtcbiAgb3BhY2l0eTogMC43O1xuICBjb2xvcjogIzg2OTM5ZTtcbn1cblxuLyogQ2FyZCBOdW1iZXIgKi9cbi5jYXJkLW51bWJlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMWU4ZWU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLyogRGF0ZSBGaWVsZCAqL1xuLm1vbnRoIHNlbGVjdCxcbi55ZWFyIHNlbGVjdCB7XG4gIHdpZHRoOiAxNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTFlOGVlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC8qIGJhY2tncm91bmQ6IDsgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogODUlIDUwJTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5tb250aCBzZWxlY3Qge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnllYXIgc2VsZWN0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vKiBDYXJkIFZlcmlmaWNhdGlvbiBGaWVsZCAqL1xuLmN2di1pbnB1dCBpbnB1dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTQ1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UxZThlZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4vKiBCdXR0b25zIFNlY3Rpb24gKi9cbi5wYXlwYWwtYnRuLFxuLnByb2NlZWQtYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5wcm9jZWVkLWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM3ZGM4NTU7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucGF5cGFsLWJ0biBhLFxuLnByb2NlZWQtYnRuIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9jZWVkLWJ0biBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYXlwYWwtYnRuIGEge1xuICBjb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjcpO1xufVxuXG4ucGF5cGFsLWJ0biB7XG4gIHBhZGRpbmctcmlnaHQ6IDk1cHg7XG4gIC8qIGJhY2tncm91bmQ6IHVybCgncGF5cGFsLWxvZ28uc3ZnJykgbm8tcmVwZWF0IDY1JSA1NiUgIzAwOWNkZTsgKi9cbn1cblxuLmN2di1kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY3Z2LWRldGFpbHMgcCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmNvbnRhaW5lclBheW1lbnQge1xuICBtYXgtd2lkdGg6IDUwZW07XG4gIHBhZGRpbmc6IDFlbSAwZW0gMWVtIDBlbTtcbiAgbWFyZ2luOiA1ZW0gYXV0bztcbn1cblxuLyogXG5cbi5mb3JtLWJvZHlbX25nY29udGVudC1nYm0tYzNdIHtcbiAgICBoZWlnaHQ6IDM0MHB4O1xuICAgIHBhZGRpbmc6IDEzcHggMjlweCAxM3B4IDI5cHg7XG59ICovXG4uY3JlZGl0LWNhcmRbX25nY29udGVudC1ycnktYzJdIHtcbiAgLyogd2lkdGg6IDM4MXB4OyAqL1xuICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xuICBtYXJnaW46IDBweCA3cHggMHB4IDBweDtcbiAgYm9yZGVyOiAxcHggMHB4IDBweCAwcHggc29saWQgI2RkZDtcbiAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnBheXBhbC1sb2dvIHtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnBheXBhbC1sb2dvIGk6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzI1M2I4MDtcbn1cblxuLnBheXBhbC1sb2dvIGk6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMTc5YmQ3O1xufVxuXG4ucGF5cGFsLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAyMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkY5OTMzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjRkZGMEE4LCAjRjlCNDIxKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDEzOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYXlwYWwtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTA1MDUwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi5wYXlwYWwtbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiAqIHtcbiAgICBtYXJnaW46IDBweDsgXG4gICAgcGFkZGluZzogMHB4OyBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LCBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbn0gKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmEge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXJnaW46IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXJnaW46IDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBVdGlsaXR5IF0qL1xuLmJnMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5bIENvbnRhY3QgXSovXG4uY29udGFpbmVyLWNvbnRhY3QxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxuLndyYXAtY29udGFjdDEwMCB7XG4gIHdpZHRoOiA2MjVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNjJweCA1NXB4IDkwcHggNTVweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgIF0qL1xuLmNvbnRhY3QxMDAtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlIHA6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYTA2NztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb250YWN0MTAwLWZvcm0tdGl0bGUgcDo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNvbnRhY3QxMDAtZm9ybS10aXRsZSBwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBhMDY3O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRhY3QxMDAtZm9ybS10aXRsZSBwOjpiZWZvcmUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi53cmFwLWlucHV0MTAwIHAge1xuICBjb2xvcjogI2YxNTY1NjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgIF0qL1xuLndyYXAtaW5wdXQxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHggMzBweCA5cHggMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJzMS13cmFwLWlucHV0MTAwIHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xufVxuXG4ubGFiZWwtaW5wdXQxMDAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiAuaW5wdXQxMDAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn0gKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIGlucHV0LmlucHV0MTAwIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuICovXG4vKiB0ZXh0YXJlYS5pbnB1dDEwMCB7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbn0gKi9cbi8qIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59ICovXG4uaGFzLXZhbC5pbnB1dDEwMCArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIFJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJzMS13cmFwLWlucHV0MTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53cmFwLWNvbnRhY3QxMDAge1xuICAgIHBhZGRpbmc6IDYycHggMTVweCA5MHB4IDE1cHg7XG4gIH1cblxuICAud3JhcC1pbnB1dDEwMCB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDlweCAxMHB4O1xuICB9XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gIH1cblxuICAudHJ1ZS12YWxpZGF0ZTo6YWZ0ZXIsXG4uYnRuLWhpZGUtdmFsaWRhdGUge1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIFJlc3R5bGUgUmFkaW8gXSovXG4ud3JhcC1jb250YWN0MTAwLWZvcm0tcmFkaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyNXB4IDAgMjVweDtcbn1cblxuLmNvbnRhY3QxMDAtZm9ybS1yYWRpbyB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi8qIC5pbnB1dC1yYWRpbzEwMCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4gKi9cbi5sYWJlbC1yYWRpbzEwMCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmxhYmVsLXJhZGlvMTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNkY2Q7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubGFiZWwtcmFkaW8xMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogIzAwYWQ1ZjtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogLmlucHV0LXJhZGlvMTAwOmNoZWNrZWQgKyAubGFiZWwtcmFkaW8xMDA6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59ICovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBycyBOb1VJIF0qL1xuLndyYXAtY29udGFjdDEwMC1mb3JtLXJhbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMjVweCA1N3B4IDI1cHg7XG59XG5cbi5jb250YWN0MTAwLWZvcm0tcmFuZ2UtdmFsdWUge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uY29udGFjdDEwMC1mb3JtLXJhbmdlLXZhbHVlIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53cmFwLWNvbnRhY3QxMDAtZm9ybS1yYW5nZSB7XG4gICAgcGFkZGluZzogMjBweCAwcHggNTdweCAwcHg7XG4gIH1cblxuICAud3JhcC1jb250YWN0MTAwLWZvcm0tcmFkaW8ge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4IDAgMHB4O1xuICB9XG59XG4ucmlnaHQtc2lkZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJvcmRlci1yaSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiM2FhYWE7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".input-group>.input-group-prepend {\r\n    min-width:15%;\r\n    text-align:center;\r\n}\r\n\r\n.input-group .input-group-text {\r\n    min-width:100%;\r\n    text-align:center;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cD4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgICBtaW4td2lkdGg6MTUlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */");

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