import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-credit-card-details',
  templateUrl: './pay-credit-card-details.component.html',
  styleUrls: ['./pay-credit-card-details.component.scss']
})
export class PayCreditCardDetailsComponent implements OnInit {
  paymentForm: FormGroup;
  userData;
  cardSelect: boolean = false;
  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private commonHelper: CommonHelperService,
    private router: Router
  ) {

    if(!this.commonHelper.handleNextAndPreviousPage.getValue()){
      localStorage.removeItem('mobile');
      this.router.navigate(['/services/mobile_recharge'])
  }

    this.commonHelper.getUserDataForPayment.subscribe(userData => {
      this.userData = userData
      console.log("this.userData", this.userData)
      // if(Object.entries(this.userData).length === 0 && this.userData.constructor === Object ){
      //   this.router.navigate(['/signup'])
      // }
    })
  }
  private selectedLink: string = "Card";

  setradio(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }
  ngOnInit() {

    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expiryMonth: ['january', Validators.required],
      cvv: ['', Validators.required],
      expiryYear: ['2019', Validators.required]
    })
  }

  proceed() {
    console.log("this.", this.paymentForm)
    if (this.paymentForm.valid) {
      const paymentObj = {
        ...this.userData,
        number: this.paymentForm.get('cardNumber').value,
        exp_month: this.paymentForm.get('expiryMonth').value,
        cvc: this.paymentForm.get('cvv').value,
        exp_year: this.paymentForm.get('expiryYear').value,
      }
      // alert("seucess")
      // this.router.navigate(['/payment'])
      // localStorage.setItem('user',paymentObj.buyerName)
      // this.commonHelper.setUserStatus(paymentObj.buyerName);
      // this.router.navigate(['/dashboard'])


      this.authenticationService.payment(paymentObj).subscribe(response => {
        console.log("response============>", response)
        localStorage.setItem('user', paymentObj.buyerName)
        this.commonHelper.setUserStatus(paymentObj.buyerName);
        this.router.navigate(['/dashboard'])
      }, err => {
        this.commonHelper.showErrorToast(err.error.message, 'Error', 5000);
        // localStorage.clear();
        // this.commonHelper.setUserStatus('');
      })
    } else {
      this.commonHelper.validateFormFields(this.paymentForm)
    }
  }


  checkFieldValid(formControl) {
    if (this.paymentForm.get([formControl]).errors && this.paymentForm.get([formControl]).errors.required &&
      this.paymentForm.get([formControl]).touched) {
      return 'is-invalid';
    } else {
      return this.checkMinMaxError(formControl);
    }
  }
  checkMinMaxError(formControl) {
    // console.log(this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required ))
    if (this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required)) {
      return 'is-invalid';
    } else return '';
  }

  back() {
    this.cardSelect = false;
  }

  home() {
    localStorage.setItem('mobile',this.userData.mobile);
    localStorage.setItem('buyerName',this.userData.buyerName);
    localStorage.setItem('benificiaryName',this.userData.benificiaryName);
    localStorage.setItem('email',this.userData.email);
    localStorage.setItem('amount',this.userData.amount);
    localStorage.setItem('currency',this.userData.currency);
    window.history.back();
  }
  cardProceed() {
      const paymentObj = {
        ...this.userData
      }
      // alert("seucess")
      // this.router.navigate(['/payment'])
      // localStorage.setItem('user',paymentObj.buyerName)
      // this.commonHelper.setUserStatus(paymentObj.buyerName);
      // this.router.navigate(['/dashboard'])


      this.authenticationService.paypal(paymentObj).subscribe(response => {
        console.log("response============>", response)
      
        // localStorage.setItem('user', paymentObj.buyerName)
        // this.commonHelper.setUserStatus(paymentObj.buyerName);
        window.open(response.data)
      }, err => {
        console.log("err============>", err)
        this.commonHelper.showErrorToast(err.error.message, 'Error', 5000);
        // localStorage.clear();
        // this.commonHelper.setUserStatus('');
      })
    
  }
}
