import { Component, OnInit } from '@angular/core';
import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
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
      // if (result == 'reset') {
      //   this._userLogin.forceResetPassword(obj).subscribe(response => {
      //     console.log(response);
      //     if (response.status == 200) {
      //       this._snackbar.openSnackBar("Password reset successful!", "");
      //     }
      //   })
      // }
    })
  }

}
