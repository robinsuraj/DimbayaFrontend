import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponent implements OnInit {

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  
  signUpForm: FormGroup;
  countryList;
  prepaidElec:Boolean = false;
  mobileOperator:String="93";
  selctedCountry;
  maxLengthDigits;
  minLengthDigits;
  constructor(private fb:FormBuilder,
              private authenticationService:AuthenticationService,
              private commonHelper:CommonHelperService,
              private router:Router
    ) { 

      if(localStorage.getItem('user')){
        this.router.navigate(['/dashboard'])
      }
    }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      // mobileOperator:[''],
      countryCode:['',Validators.required],
      mobileNumber:['',Validators.required],
      amount:['',Validators.required],
      serviceType:['',Validators.required],
      meterNumber:['']
    })
    this.commonHelper.getCountry().subscribe(res=>{
      console.log(res)
      this.countryList=res;
      // this.signUpForm.get('countryCode').patchValue(this.countryList[0].callingCodes[0])
    })
    this.signUpForm.get('countryCode').valueChanges.subscribe(data=>{
      console.log(data)
      if(data){
        let mobileData=this.commonHelper.checkMobileNumber(data)[0];
        if(mobileData.MaxNumberLengthNoPrefix<this.maxLengthDigits){
          this.signUpForm.get('mobileNumber').patchValue('');
        }
        this.minLengthDigits=mobileData.MinNumberLengthNoPrefix;
        this.maxLengthDigits=mobileData.MaxNumberLengthNoPrefix;
        console.log(this.minLengthDigits,this.maxLengthDigits)
        this.signUpForm.get('mobileNumber').setValidators([Validators.required,Validators.minLength(mobileData.MinNumberLengthNoPrefix),Validators.maxLength(mobileData.MaxNumberLengthNoPrefix)])
        this.signUpForm.get('mobileNumber').updateValueAndValidity();
      }else{
        this.signUpForm.get('mobileNumber').setValidators([Validators.required])
        this.signUpForm.get('mobileNumber').updateValueAndValidity(); 
      }
    })
    this.signUpForm.get('mobileNumber').valueChanges.subscribe(data=>{
      console.log(this.signUpForm.get('mobileNumber'))
    });
  }
  
  serviceType(event){
    if(event=='prepaid'){
      this.signUpForm.get('meterNumber').setValidators([Validators.required]);
     }else{
      this.signUpForm.get('meterNumber').clearValidators();
    }
    this.signUpForm.get('meterNumber').updateValueAndValidity();
 
    event == 'prepaid'?this.prepaidElec=true:this.prepaidElec= false;
  }

  country(event){
    console.log(event)
    let countryObj = this.countryList.find(obj => obj.alpha2Code === event.alpha2Code);
    this.selctedCountry = countryObj;
    this.mobileOperator= countryObj.callingCodes[0];
    this.signUpForm.get('countryCode').patchValue(event.alpha2Code);
  }


  register(){
    console.log("this.",this.signUpForm)
    if(this.signUpForm.valid){
      const registerRequest ={
        firstName: this.signUpForm.get('firstName').value,
        lastName: this.signUpForm.get('lastName').value,
        email: this.signUpForm.get('email').value,
        mobileOperator: this.mobileOperator,
        country:this.selctedCountry.name,
        mobileNumber: this.signUpForm.get('mobileNumber').value,
        amount: this.signUpForm.get('amount').value,
        serviceType: this.signUpForm.get('serviceType').value,
       // meterNumber:this.signUpForm.get('meterNumber').value,
      }
      this.commonHelper.setUserDataForPayment(registerRequest);
      // this.router.navigate(['/payment'])

      this.authenticationService.register(registerRequest).subscribe(response=>{
        this.commonHelper.showSuccessToast("Registration Success","Success",5000);
        this.router.navigate(['/payment'])
        localStorage.setItem("user",registerRequest.firstName)
        this.commonHelper.setUserStatus(registerRequest.firstName);
      })
    }else{
      this.commonHelper.validateFormFields(this.signUpForm)
    }
  }

  checkFieldValid(formControl){
  if(this.signUpForm.get([formControl]).errors && this.signUpForm.get([formControl]).errors.required &&
     this.signUpForm.get([formControl]).touched) {
      return 'is-invalid';
     }else{
      return  this.checkMinMaxError(formControl);
     }
  }
  checkMinMaxError(formControl){
    if(this.signUpForm.get([formControl]).errors && (this.signUpForm.get([formControl]).errors.minlength && this.signUpForm.get([formControl]).touched && !this.signUpForm.get([formControl]).errors.required )){
    return 'is-invalid';
   }else return '';
  }

  checkMobileNumber(){
    if(this.signUpForm.get('mobileNumber').status =='INVALID' &&this.signUpForm.get('mobileNumber').touched)
      return 'is-invalid';
    else return '';
    
  }

  
}


