import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SpinnerVisibilityService } from 'ng-http-loader';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  countrys = this.commonHelper.mockCountryData
  countryCode;

  @ViewChild('myselect', { static: true }) myselect: ElementRef;
  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private commonHelper: CommonHelperService,
    private router: Router, private socialAuthService: AuthService,private spinner: SpinnerVisibilityService ) {

    this.commonHelper.getSelectedCountry.subscribe(res => {
      console.log(res)
      this.countryCode = res;
    })

    if (localStorage.getItem('token')) {
      this.router.navigate(['/services'])
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      countryCode: [this.countryCode?this.countryCode:'+'+this.countrys[0].callingCodes[0], Validators.required],
      mobileNumber: [localStorage.getItem('mobile'), Validators.required]
    })

    localStorage.removeItem('mobile');
  }

  clickDiv() {
    let a = this.myselect.nativeElement as HTMLElement;
    a.focus();
    a.click();
  }

  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
       //on success
       console.log(userData)
       localStorage.setItem('token',userData.authToken);
       this.commonHelper.setUserStatus(true)
     this.router.navigate(['/services/mobile_recharge'])
       //this will return user data from google. What you need is a user token which you will send it to the server
       this.authService.sendToRestApiMethod(userData);
    });
 }

 public signinWithFB () {
  let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  this.socialAuthService.signIn(socialPlatformProvider)
  .then((userData) => {
     //on success
     console.log(userData)
     localStorage.setItem('token',userData.authToken);
     this.commonHelper.setUserStatus(true)
     this.router.navigate(['/services/mobile_recharge'])
     //this will return user data from google. What you need is a user token which you will send it to the server
     this.authService.sendToRestApiMethod(userData);
  });
}

  setCountry(event) {
    console.log(event.target.value)
    this.commonHelper.setCountry(event.target.value)
  }
  login() {
    if (this.loginForm.valid) {
      const req = {
        mobile: this.loginForm.get('mobileNumber').value,
        mobileOperator: this.loginForm.get('countryCode').value,
        role: 'buyer'
      }
      this.commonHelper.setCountry(this.loginForm.get('countryCode').value)
      this.commonHelper.setMobileNumber(req.mobile);
      console.log(req)
      this.authService.loginUser(req).subscribe(res => {
        this.commonHelper.showSuccessToast(res.message, "Success", 5000);
        this.router.navigate(['otp'])
      },err=>{
        this.commonHelper.showErrorToast(err.error.message,"Error",5000);
      })

    } else {
      this.commonHelper.validateFormFields(this.loginForm)
    }
  }

  moveBackPage(){
      window.history.back();
      localStorage.removeItem('mobile');

  }

}

