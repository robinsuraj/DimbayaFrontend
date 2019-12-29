import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn;
  @ViewChild('payment',{static: false}) private paymentPage: ElementRef;
  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
    this.isLoggedIn=localStorage.getItem('token');
  
  }
  login(){
    const dialogRef = this._dialog.open(DialogComponent, {
      width: 'auto',
      height: '390',
      disableClose: true,
      data: {
        type: 'resetPassword',
        title: 'Reset Password',
        body: 'Are you sure you want to reset the password?'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this._userLogin.forceResetPassword(obj).subscribe(response => {
        //   console.log(response);
        //   if (response.status == 200) {
        //     this._snackbar.openSnackBar("Password reset successful!", "");
        //   }
        // })
        this.isLoggedIn=true;

        // this.paymentPage.nativeElement.scrollTo({left: 0 , top: 900, behavior: 'smooth'});
        // this.paymentPage.nativeElement.scrollTop = this.paymentPage.nativeElement.scrollHeight;
        window.scrollTo(0, this.paymentPage.nativeElement.scrollHeight-200);
        // this.paymentPage.nativeElement.scrollTo({left: 0 , top: this.paymentPage.nativeElement.scrollHeight, behavior: 'smooth'});

      }
    })
  }

}
