import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public message = '';
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  public openDialog(){
    const dialogRef = this.dialog.open(DialogModalComponent,{
      data:'Bazinga',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms'
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log(result)
     this.message = result != undefined ? result : '';
    })
    }
}
