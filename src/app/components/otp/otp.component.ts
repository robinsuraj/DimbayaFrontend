import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otpForm:FormGroup;
  mobileNumber;
  countryCode;
  constructor(private fb:FormBuilder,
              private commonHelper:CommonHelperService,private authService:AuthenticationService,
              private router:Router) {
                this.commonHelper.getMobileNumber.subscribe(res=>{
                  this.mobileNumber=res;
                })
                this.commonHelper.getSelectedCountry.subscribe(res=>{
                  this.countryCode=res;
                })
               }

  ngOnInit() {

    this.otpForm = this.fb.group({
      key1:['',Validators.required],
      key2:['',Validators.required],
      key3:['',Validators.required],
      key4:['',Validators.required],
    })
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
        mobile:this.mobileNumber,
        mobileOperator:this.countryCode,
        otp:this.otpForm.get('key1').value+this.otpForm.get('key2').value+this.otpForm.get('key3').value+this.otpForm.get('key4').value
      }

      // this.router.navigate(['/pay'])
     this.authService.loginUserVerify(req).subscribe(res=>{
        // let res={"error":false,"message":"Verified successfully!","data":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZmOTllZWUyMDg0MTQwY2MwZjEyYWMiLCJyb2xlIjoiYnV5ZXIiLCJpYXQiOjE1NzcwMzUxNTB9.-O9GhAR2nQzLkM2P9X_WxQV4F1DmG457wMz_GdJq--Q","user":{"role":"buyer","isActive":true,"hasSetPassword":false,"activities":["****Users****","can_view_activity","can_update_user_activity","can_view_user","can_delete_user","can_create_user","can_create_payment"],"deleted":false,"_id":"5dff99eee2084140cc0f12ac","mobileOperator":"91","mobile":"9871373297","otp":"7906","expiryDate":"2019-12-22T17:22:07.406Z","updatedAt":"2019-12-22T17:19:07.406Z","createdAt":"2019-12-22T16:29:34.117Z","__v":0}}};
        this.commonHelper.showSuccessToast(res.message,"Success",5000);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('userActivities',res.data.user.activities);
        this.router.navigate(['/pay'])
      },err=>{
        this.commonHelper.showErrorToast(err.error.message,'Error',5000);
      })
    }else{
      this.commonHelper.validateFormFields(this.otpForm)
    }
  }
}
