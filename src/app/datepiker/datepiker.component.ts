import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform'
@Component({
  selector: 'app-datepiker',
  templateUrl: './datepiker.component.html',
  styleUrls: ['./datepiker.component.css']
})
export class DatepikerComponent implements OnInit {
  public picker = new Date();
  public mindate: Date = new Date(2024,8,28);
  public maxdate: Date = new Date(2024,10,28);
  public startDate: Date = new Date(2024,9,28);
  
  constructor(private plataform : Platform) { }

  ngOnInit() {
  }

  get IsTouchDevice(){
    return this.plataform.ANDROID || this.plataform.IOS;
  }
}
