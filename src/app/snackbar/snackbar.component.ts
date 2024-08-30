import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {


  }

  public openSnackBar() {
    const snackbar = this.snackbar.open('Hellow word!', 'Close', {
      duration: 5000
    })
    snackbar.afterDismissed().subscribe(_ => {
      console.log('Dismissed')
    })
    snackbar.onAction().subscribe(_ => {
      console.log('After Action')
    })
  }


  // public openFromComp() {
  //   this.snackbar.openFromComponent(SanckbarMsnComponent, {
  //     data: "Hellow world"

  //   })
  // }
}
