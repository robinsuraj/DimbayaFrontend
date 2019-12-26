import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// MDB Angular Free
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-dialog',
  templateUrl: './login.component.html',
  styleUrls: ['dialog.component.css']
})

export class DialogComponent implements OnInit {
  otpSend:Boolean = false;
  constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
      console.log(this.data);
  }

  closeDialog(msg) {
    this.dialogRef.close(msg);
  }

  loggedIn(){
    this.otpSend = true;
  }

}
