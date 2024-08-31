import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-msn',
  templateUrl: './snackbar-msn.component.html',
  styleUrls: ['./snackbar-msn.component.css']
})
export class SnackbarMsnComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string,
    public matSanckBarRef: MatSnackBarRef<SnackbarMsnComponent>) { }

  ngOnInit() {
  }
  closeSnackBar(){
    this.matSanckBarRef.dismiss();
  }

}
