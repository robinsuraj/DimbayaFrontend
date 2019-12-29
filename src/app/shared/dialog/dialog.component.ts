import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// MDB Angular Free
import {MatCheckboxModule} from '@angular/material/checkbox';

import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './login.component.html',
  styleUrls: ['dialog.component.css']
})

export class DialogComponent implements OnInit {
  loginModalForm:FormGroup;
  otpForm:FormGroup;
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  

  otpSend:Boolean = false;
  constructor(private fb:FormBuilder,
              private commonHelper:CommonHelperService,
              private authService:AuthenticationService,
              private router:Router,
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data
  ) { }

  countryCode="";
  ngOnInit() {

    this.loginModalForm = this.fb.group({
      mobileNumber:['',Validators.required]
    })

    this.otpForm = this.fb.group({
      key1:['',Validators.required],
      key2:['',Validators.required],
      key3:['',Validators.required],
      key4:['',Validators.required],
    })
    let mobileData=this.commonHelper.checkMobileNumber("")[0];
      console.log(this.data);

      this.loginModalForm.get('mobileNumber').valueChanges.subscribe(res=>{
        console.log(res)
        if(res && res.countryCode != this.countryCode){
          this.ddd(res.countryCode);
          this.countryCode=res.countryCode;
        }
      })
  }

  closeDialog(msg) {
    this.dialogRef.close(msg);
    console.log(this.dialogRef,msg)
  }

  
  // country(event){
  //   console.log(event)
  //   let countryObj = this.countryList.find(obj => obj.alpha2Code === event.alpha2Code);
  //   this.selctedCountry = countryObj;
  //   this.mobileOperator= countryObj.callingCodes[0];
  //   this.loginModalForm.get('countryCode').patchValue(event.alpha2Code);
  // }
  maxLengthDigits;
  minLengthDigits;
  ddd(event){
       let mobileData=this.commonHelper.checkMobileNumber(event)[0];
       this.minLengthDigits=mobileData.MinNumberLengthNoPrefix;
       this.maxLengthDigits=mobileData.MaxNumberLengthNoPrefix;
       if(mobileData.MaxNumberLengthNoPrefix<this.maxLengthDigits){
         this.loginModalForm.get('mobileNumber').patchValue('');
       }
       
      //  console.log(this.minLengthDigits,this.maxLengthDigits)
      //  this.loginModalForm.get('mobileNumber').setValidators([Validators.required,Validators.minLength(mobileData.MinNumberLengthNoPrefix),Validators.maxLength(mobileData.MaxNumberLengthNoPrefix)])
      //  this.loginModalForm.get('mobileNumber').updateValueAndValidity({emitEvent:false});
       
 }

  loggedIn(){

    console.log(this.loginModalForm)
    if(this.loginModalForm.valid ){
      const req = {
        mobile:this.loginModalForm.get('mobileNumber').value.number,
        mobileOperator:this.loginModalForm.get('mobileNumber').value.dialCode.replace('+',''),
        role:'buyer'
      }
      console.log(req)
      this.authService.loginUser(req).subscribe(res=>{
        this.commonHelper.showSuccessToast(res.message,"Success",5000);
        this.otpSend = true;
      })

      // this.otpSend = true;
     
    }
  }
  moveCursor(event){

    let element = event.srcElement.nextElementSibling; // get the sibling element

    if(element == null)  // check if its null
        return;
    else

        element.focus(); 
        element.select();
  }

  validLogin(){
    if(this.otpForm.valid ){
      const req = {
        mobile:this.loginModalForm.get('mobileNumber').value.number,
        mobileOperator:this.loginModalForm.get('mobileNumber').value.dialCode.replace('+',''),
        otp:this.otpForm.get('key1').value+this.otpForm.get('key2').value+this.otpForm.get('key3').value+this.otpForm.get('key4').value
      }
      this.authService.loginUserVerify(req).subscribe(res=>{
        // let res={"error":false,"message":"Verified successfully!","data":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZmOTllZWUyMDg0MTQwY2MwZjEyYWMiLCJyb2xlIjoiYnV5ZXIiLCJpYXQiOjE1NzcwMzUxNTB9.-O9GhAR2nQzLkM2P9X_WxQV4F1DmG457wMz_GdJq--Q","user":{"role":"buyer","isActive":true,"hasSetPassword":false,"activities":["****Users****","can_view_activity","can_update_user_activity","can_view_user","can_delete_user","can_create_user","can_create_payment"],"deleted":false,"_id":"5dff99eee2084140cc0f12ac","mobileOperator":"91","mobile":"9871373297","otp":"7906","expiryDate":"2019-12-22T17:22:07.406Z","updatedAt":"2019-12-22T17:19:07.406Z","createdAt":"2019-12-22T16:29:34.117Z","__v":0}}};
        this.commonHelper.showSuccessToast(res.message,"Success",5000);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('userActivities',res.data.user.activities);
        this.dialogRef.close();
        this.router.navigate(['/pay'])
      },err=>{
        this.commonHelper.showErrorToast(err.error.message,'Error',5000);
      })
    }

  }
}
