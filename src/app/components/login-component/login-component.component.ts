import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';

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
    private router: Router) {

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
      mobileNumber: ['', Validators.required]
    })
  }

  clickDiv() {
    let a = this.myselect.nativeElement as HTMLElement;
    a.focus();
    a.click();
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
      })

    } else {
      this.commonHelper.validateFormFields(this.loginForm)
    }
  }

  moveBackPage(){
      window.history.back();
  }

}

