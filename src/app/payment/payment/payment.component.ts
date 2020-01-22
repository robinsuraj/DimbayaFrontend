import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
declare var $: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  countrys=this.commonHelper.mockCountryData;
 
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
  countryCode;
  country;
  countryName;
  currencyList=[];
  constructor(private fb:FormBuilder,
              private authenticationService:AuthenticationService,
              private commonHelper:CommonHelperService,
              private router:Router) { 
                this.commonHelper.handleNextAndPreviousPage.next(false)
                this.commonHelper.getSelectedCountry.subscribe(res => {
                  if(res){
              let country=  this.countrys.filter(x=>x.callingCodes[0] == res.split('+').join(''))
              this.countryCode='+'+country[0].callingCodes[0]
              this.countryName=country[0].name
              this.country =  this.countryName +'('+this.countryCode+')'
              this.flag=country[0].flag
            }else{
              this.countryName=this.countrys[0].name 
              this.country= this.countryName +'(+'+this.countrys[0].callingCodes[0]+')';
              this.countryCode='+'+this.countrys[0].callingCodes[0]+''
              this.flag=this.countrys[0].flag
            }
                })
   
    }

  ngOnInit() {
    this.currencyList= this.countrys.map(x=>x.currencies[0]);
    let newset= new Set(this.currencyList.map(x=>JSON.stringify(x)));
    this.currencyList =Array.from(newset).map(x=>JSON.parse(x))
    this.signUpForm = this.fb.group({
      firstName:[localStorage.getItem('buyerName')? localStorage.getItem('buyerName'):''],
      lastName:[localStorage.getItem('benificiaryName') ? localStorage.getItem('benificiaryName'):''],
      // email:[localStorage.getItem('email'),[Validators.required,Validators.email]],
      // mobileOperator:[''],
      countryCode:[this.country,Validators.required],
      mobileNumber:[localStorage.getItem('mobile'),Validators.required],
      amount:[localStorage.getItem('amount'),Validators.required],
      // serviceType:['',Validators.required],
      meterNumber:[''],
      currencyCode:[localStorage.getItem('currency')? localStorage.getItem('currency'):this.currencyList[0].code,Validators.required]
    })

    localStorage.removeItem('buyerName')
    localStorage.removeItem('mobile')
    localStorage.removeItem('buyerName');
    localStorage.removeItem('benificiaryName');
    localStorage.removeItem('email');
    localStorage.removeItem('amount');
    localStorage.removeItem('currency');
   
    // console.log(this.currencyList)
    this.commonHelper.getCountry().subscribe(res=>{
      // console.log(res)
      this.countryList=res;
      // this.signUpForm.get('countryCode').patchValue(this.countryList[0].callingCodes[0])
    })
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
    this.signUpForm.get('mobileNumber').valueChanges.subscribe(data=>{
      // console.log(this.signUpForm.get('mobileNumber'))
    });
  }
  

  onCountryChange(event){
    if(event.target.value){
      let country =this.countrys.filter(x=> event.target.value.split('(')[0].trim() == x.name);
      if(country.length){
        this.countryName=country[0].name;
        this.countryCode='+'+country[0].callingCodes[0];
        this.flag=country[0].flag
        this.commonHelper.setCountry(this.countryCode)
      }else{
        this.signUpForm.get('countryCode').patchValue('');
      }
    }else{
      this.commonHelper.setCountry('');
      this.flag="";
    }
   
  
  }
  flag;

  serviceType(event){
    if(event=='prepaid'){
      this.signUpForm.get('meterNumber').setValidators([Validators.required]);
     }else{
      this.signUpForm.get('meterNumber').clearValidators();
    }
    this.signUpForm.get('meterNumber').updateValueAndValidity();
 
    event == 'prepaid'?this.prepaidElec=true:this.prepaidElec= false;
  }

  // country(event){
  //   console.log(event)
  //   let countryObj = this.countryList.find(obj => obj.alpha2Code === event.alpha2Code);
  //   this.selctedCountry = countryObj;
  //   this.mobileOperator= countryObj.callingCodes[0];
  //   this.signUpForm.get('countryCode').patchValue(event.alpha2Code);
  //   this.signUpForm.get('currencyCode').patchValue(this.selctedCountry.currencies[0].code);
  // }


  register(){
    // console.log("this.",this.signUpForm)
    if(this.signUpForm.valid){
      let currencySymbolFilter = this.currencyList.find(s=>s.code == this.signUpForm.get('currencyCode').value)
      console.log(currencySymbolFilter)
      console.log(this.currencyList)
      // console.log("this.signUpForm.get('firstName').value",this.signUpForm.get('firstName').value)
      const registerRequest ={
        // buyerName: this.signUpForm.get('firstName').value,
        // benificiaryName: this.signUpForm.get('lastName').value,
        // email: this.signUpForm.get('email').value,
        mobileOperator: this.countryCode,
        country:this.country.split('(')[0],
        mobile: this.signUpForm.get('mobileNumber').value,
        amount: this.signUpForm.get('amount').value,
        serviceType: this.showDiv,
        currency:this.signUpForm.get('currencyCode').value,
        currencySymbol:currencySymbolFilter.symbol
       // meterNumber:this.signUpForm.get('meterNumber').value,
      }
      this.commonHelper.setUserDataForPayment(registerRequest);
      this.commonHelper.handleNextAndPreviousPage.next(true)
      if(localStorage.getItem('token'))
      this.router.navigate(['services/payment_details'])
      else this.router.navigate(['login'])
       
      // this.authenticationService.register(registerRequest).subscribe(response=>{
      //   this.commonHelper.showSuccessToast("Registration Success","Success",5000);
      //   this.router.navigate(['/payment'])
      //   localStorage.setItem("user",registerRequest.buyerName)
      //   this.commonHelper.setUserStatus(registerRequest.buyerName);
      // })
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
showDiv ='mobile';
  selectDivToShow(value){

    $('.resp-tabs-list').on('click', '.custom-dropdown > a', function(){
      $(this).parent().next('ul').fadeToggle(350);
      $(this).parent().html($(this).parent().next('ul').children('li.active').html());
      return false;
  });
  $('.resp-tabs-list ul li a').click(function(){
      $(this).parent().addClass('active').siblings().removeClass('active');
      $('.custom-dropdown').html($(this).parent().html());
      return false;
  });

    this.showDiv=value;
    // Object.keys(this.signUpForm.controls).forEach(field => {
    //     const control = this.signUpForm.get(field)
    //       if (control instanceof FormControl && value==field) {
    //       control.setValidators([Validators.required]);
    //       control.updateValueAndValidity();    
    //     }else{
    //       control.clearValidators();
    //       control.updateValueAndValidity(); 
    //     }
    //   });
    if(value=='mobile'){
      this.signUpForm.get('meterNumber').clearValidators();
      this.signUpForm.get('meterNumber').updateValueAndValidity(); 
      this.signUpForm.get('mobileNumber').setValidators([Validators.required]);
      this.signUpForm.get('mobileNumber').updateValueAndValidity(); 
    }else{
      this.signUpForm.get('meterNumber').setValidators([Validators.required]);
      this.signUpForm.get('meterNumber').updateValueAndValidity(); 
      this.signUpForm.get('mobileNumber').clearValidators();
      this.signUpForm.get('mobileNumber').updateValueAndValidity();
    }
  }
}


