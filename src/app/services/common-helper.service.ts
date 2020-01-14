import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHelperService {

  constructor(private toastr: ToastrService, private http: HttpClient) { }

  showErrorToast(errorTitle, message, time) {
    this.toastr.error(errorTitle, message, { timeOut: time })
  }

  showSuccessToast(message, errorTitle, time) {
    this.toastr.success(message, errorTitle, { timeOut: time })
  }

  validateFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field)
        if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
        control.markAsTouched({ onlySelf: true });
        if (control.errors && control.errors.required) {
          this.showErrorToast("Field is Required", "Error", 3000);
         }
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    });
  }

  getCountry() {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

  private userStatus = new BehaviorSubject(localStorage.getItem('user'));
  getUserStatus = this.userStatus.asObservable();
  setUserStatus(data) {
    this.userStatus.next(data);
  }


  private userDataForPayment = new BehaviorSubject({});
  getUserDataForPayment = this.userDataForPayment.asObservable();
  setUserDataForPayment(data){
    this.userDataForPayment.next(data);
  }


 mockMobileData= [
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
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
      "NationalDestinationCodes": [
        
      ]
    },
    "ProductTypes": [
      "MobileRecharge"
    ],
    "AccountRegexes": [
      "^263[0-9]{9,9}$"
    ],
    "OperatorLookupSupported": true
  }
]

mockCountryData=[
  {
    "name": "Benin",
    "alpha2Code": "BJ",
    "alpha3Code": "BEN",
    "callingCodes": [
      "229"
    ],
    "capital": "Porto-Novo",
    "region": "Africa",
    "subregion": "Western Africa",
    "numericCode": "204",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/bj.svg",
    "cioc": "BEN"
  },{
    "name": "Burkina Faso",
    "alpha2Code": "BF",
    "alpha3Code": "BFA",
    "callingCodes": [
      "226"
    ],
    "capital": "Ouagadougou",
    "region": "Africa",
    "subregion": "Western Africa",
    "numericCode": "854",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/bf.svg",
    "cioc": "BUR"
  },{
    "name": "Cabo Verde",
    "alpha2Code": "CV",
    "alpha3Code": "CPV",
    "callingCodes": [
      "238"
    ],
    "capital": "Praia",
    "region": "Africa",
    "subregion": "Western Africa",
    "numericCode": "132",
    "currencies": [
      {
        "code": "CVE",
        "name": "Cape Verdean escudo",
        "symbol": "Esc"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/cv.svg",
    "cioc": "CPV"
  },
  {
    "name": "Gambia",
    "alpha2Code": "GM",
    "alpha3Code": "GMB",
    "callingCodes": [
      "220"
    ],
    "capital": "Banjul",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Gambia",
    "numericCode": "270",
    "currencies": [
      {
        "code": "GMD",
        "name": "Gambian dalasi",
        "symbol": "D"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/gm.svg",
    "cioc": "GAM"
  },
  {
    "name": "Ghana",
    "alpha2Code": "GH",
    "alpha3Code": "GHA",
    "callingCodes": [
      "233"
    ],
    "capital": "Accra",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Ghana",
    "numericCode": "288",
    "currencies": [
      {
        "code": "GHS",
        "name": "Ghanaian cedi",
        "symbol": "₵"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/gh.svg",
    "cioc": "GHA"
  },
  {
    "name": "Guinea",
    "alpha2Code": "GN",
    "alpha3Code": "GIN",
    "callingCodes": [
      "224"
    ],
    "capital": "Conakry",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Guinée",
    "numericCode": "324",
    "currencies": [
      {
        "code": "GNF",
        "name": "Guinean franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/gn.svg",
    "cioc": "GUI"
  },
  {
    "name": "Guinea-Bissau",
    "alpha2Code": "GW",
    "alpha3Code": "GNB",
    "callingCodes": [
      "245"
    ],
    "capital": "Bissau",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Guiné-Bissau",
    "numericCode": "624",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/gw.svg",
    "cioc": "GBS"
  },{
    "name": "Liberia",
    "alpha2Code": "LR",
    "alpha3Code": "LBR",
    "callingCodes": [
      "231"
    ],
    "capital": "Monrovia",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Liberia",
    "numericCode": "430",
    "currencies": [
      {
        "code": "LRD",
        "name": "Liberian dollar",
        "symbol": "$"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/lr.svg",
    "cioc": "LBR"
  },
  {
    "name": "Mali",
    "alpha2Code": "ML",
    "alpha3Code": "MLI",
    "callingCodes": [
      "223"
    ],
    "capital": "Bamako",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Mali",
    "numericCode": "466",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/ml.svg",
    "cioc": "MLI"
  },
  {
    "name": "Mauritania",
    "alpha2Code": "MR",
    "alpha3Code": "MRT",
    "callingCodes": [
      "222"
    ],
    "capital": "Nouakchott",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "موريتانيا",
    "numericCode": "478",
    "currencies": [
      {
        "code": "MRO",
        "name": "Mauritanian ouguiya",
        "symbol": "UM"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/mr.svg",
    "cioc": "MTN"
  },
  {
    "name": "Niger",
    "alpha2Code": "NE",
    "alpha3Code": "NER",
    "callingCodes": [
      "227"
    ],
    "capital": "Niamey",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Niger",
    "numericCode": "562",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/ne.svg",
    "cioc": "NIG"
  },
  {
    "name": "Nigeria",
    "alpha2Code": "NG",
    "alpha3Code": "NGA",
    "callingCodes": [
      "234"
    ],
    "capital": "Abuja",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Nigeria",
    "numericCode": "566",
    "currencies": [
      {
        "code": "NGN",
        "name": "Nigerian naira",
        "symbol": "₦"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/ng.svg",
    "cioc": "NGR"
  },
  {
    "name": "Senegal",
    "alpha2Code": "SN",
    "alpha3Code": "SEN",
    "callingCodes": [
      "221"
    ],
    "capital": "Dakar",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Sénégal",
    "numericCode": "686",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/sn.svg",
    "cioc": "SEN"
  },
  {
    "name": "Sierra Leone",
    "alpha2Code": "SL",
    "alpha3Code": "SLE",
    "callingCodes": [
      "232"
    ],
    "capital": "Freetown",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Sierra Leone",
    "numericCode": "694",
    "currencies": [
      {
        "code": "SLL",
        "name": "Sierra Leonean leone",
        "symbol": "Le"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/sl.svg",
    "cioc": "SLE"
  },
  {
    "name": "Togo",
    "topLevelDomain": [
      ".tg"
    ],
    "alpha2Code": "TG",
    "alpha3Code": "TGO",
    "callingCodes": [
      "228"
    ],
    "capital": "Lomé",
    "altSpellings": [
      "TG",
      "Togolese",
      "Togolese Republic",
      "République Togolaise"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 7143000,
    "latlng": [
      8.0,
      1.16666666
    ],
    "demonym": "Togolese",
    "area": 56785.0,
    "gini": 34.4,
    "timezones": [
      "UTC"
    ],
    "borders": [
      "BEN",
      "BFA",
      "GHA"
    ],
    "nativeName": "Togo",
    "numericCode": "768",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "translations": {
      "de": "Togo",
      "es": "Togo",
      "fr": "Togo",
      "ja": "トーゴ",
      "it": "Togo",
      "br": "Togo",
      "pt": "Togo",
      "nl": "Togo",
      "hr": "Togo",
      "fa": "توگو"
    },
    "flag": "../../../assets/svg-country-flags/svg/tg.svg",
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [
          
        ],
        "otherNames": [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      }
    ],
    "cioc": "TOG"
  },
  {
    "name": "Tokelau",
    "alpha2Code": "TK",
    "alpha3Code": "TKL",
    "callingCodes": [
      "690"
    ],
    "capital": "Fakaofo",
    "region": "Oceania",
    "subregion": "Polynesia",
    "nativeName": "Tokelau",
    "numericCode": "772",
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/tk.svg",
    "cioc": ""
  },{
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "alpha2Code": "SH",
    "alpha3Code": "SHN",
    "callingCodes": [
      "290"
    ],
    "capital": "Jamestown",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Saint Helena",
    "numericCode": "654",
    "currencies": [
      {
        "code": "SHP",
        "name": "Saint Helena pound",
        "symbol": "£"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/sn.svg",
    "cioc": null
  },
  {
    "name": "Côte d'Ivoire",
    "alpha2Code": "CI",
    "alpha3Code": "CIV",
    "callingCodes": [
      "225"
    ],
    "capital": "Yamoussoukro",
    "region": "Africa",
    "subregion": "Western Africa",
    "nativeName": "Côte d'Ivoire",
    "numericCode": "384",
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "flag": "../../../assets/svg-country-flags/svg/ci.svg",
    "cioc": "CIV"
  }
]

  country = new BehaviorSubject('')
  getSelectedCountry = this.country.asObservable();
setCountry(data){
  this.country.next(data);
}

  checkMobileNumber(code){
    return this.mockMobileData.filter(data=>data.CountryIso==code)
  }
  mobileNumber = new BehaviorSubject('');
  getMobileNumber = this.mobileNumber.asObservable();

  setMobileNumber(data){
    this.mobileNumber.next(data)
  }

}
