import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn;
  countryData;
  countrys=this.commonHelper.mockCountryData;
  flag;
  @ViewChild('payment',{static: false}) private paymentPage: ElementRef;
  constructor(
    private router:Router,
    private commonHelper:CommonHelperService) { }

  ngOnInit() {
    this.isLoggedIn=localStorage.getItem('token');
  
  }

  onCountryChange(event){
    let country =this.countrys.filter(x=> event.target.value.split('(')[0].trim() == x.name);
    this.flag=country[0].flag
    this.commonHelper.setCountry('+'+country[0].callingCodes[0])

   console.table(country)
  }

  country(event){
    this.countryData=event;
  }

  login(){

   

    this.router.navigate(['login'])
    this.countryData
   
   
  }

}
