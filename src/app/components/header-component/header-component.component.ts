import { Component, OnInit } from '@angular/core';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'Header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {
  isUserAvailabe;
  constructor(private commonHelper:CommonHelperService,
    private router:Router,private authService:AuthService) { 
    this.commonHelper.getUserStatus.subscribe(res=>{
      this.isUserAvailabe=res;
      if(this.isUserAvailabe)
      console.log("dfss")
      console.log("cvxcdfss")
      
    })
  }

  ngOnInit() {
  
  }
  logout(){
    localStorage.clear();
    this.commonHelper.setUserStatus('');
    this.router.navigate([''])
    this.authService.signOut();
  }

  login(){
   
    this.router.navigate(['login'])
  }
}
