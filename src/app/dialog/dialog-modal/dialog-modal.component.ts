import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  constructor(public matDialogRef : MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data :string
  ) { }

  ngOnInit() {
  }

    public closeDialog(){
      this.matDialogRef.close('returned bazinga');
    }

}
