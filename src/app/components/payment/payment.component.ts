import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  userData;
  constructor(private fb:FormBuilder,
              private authenticationService:AuthenticationService,
              private commonHelper:CommonHelperService,
              private router:Router
    ) { 
      this.commonHelper.getUserDataForPayment.subscribe(userData=>{
        this.userData=userData
        if(Object.entries(this.userData).length === 0 && this.userData.constructor === Object ){
          this.router.navigate(['/signup'])
        }
      })
    }

  ngOnInit() {
    
    this.paymentForm = this.fb.group({
      cardNumber:['',Validators.required],
      expiryMonth:['january',Validators.required],
      cvv:['',Validators.required],
      expiryYear:['2019',Validators.required]
    })
  }

  proceed(){
    console.log("this.",this.paymentForm)
    if(this.paymentForm.valid){
      const paymentObj ={
        ...this.userData,
        number: this.paymentForm.get('cardNumber').value,
        exp_month: this.paymentForm.get('expiryMonth').value,
        cvc: this.paymentForm.get('cvv').value,
        exp_year: this.paymentForm.get('expiryYear').value,
      }
      alert("seucess")
      // this.router.navigate(['/payment'])
      localStorage.setItem('user',paymentObj.firstName)
      this.commonHelper.setUserStatus(paymentObj.firstName);
      this.router.navigate(['/dashboard'])

      
      //  this.authenticationService.payment(paymentObj).subscribe(response=>{
      //    console.log("response============>",response)
      //   localStorage.setItem('user',paymentObj.firstName)
      // this.commonHelper.setUserStatus(paymentObj.firstName);
      // this.router.navigate(['/dashboard'])
      // },err=>{
      //   localStorage.clear();
      // this.commonHelper.setUserStatus('');
      // })
    }else{
      this.commonHelper.validateFormFields(this.paymentForm)
    }
  }


   checkFieldValid(formControl){
    if(this.paymentForm.get([formControl]).errors && this.paymentForm.get([formControl]).errors.required &&
       this.paymentForm.get([formControl]).touched) {
        return 'is-invalid';
       }else{
        return  this.checkMinMaxError(formControl);
       }
    }
    checkMinMaxError(formControl){
      console.log(this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required ))
     if(this.paymentForm.get([formControl]).errors && (this.paymentForm.get([formControl]).errors.minlength && this.paymentForm.get([formControl]).touched && !this.paymentForm.get([formControl]).errors.required )){
      return 'is-invalid';
     }else return '';
    }

      back(){
        window.history.go(-1);
      }
}
