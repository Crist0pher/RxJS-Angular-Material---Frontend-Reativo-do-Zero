import { Component, OnInit, AfterContentInit, HostListener } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {  fromEvent, map } from 'rxjs';

export const SCROLL_CONTENT = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {

  public isSmallScreen: boolean = false;
  title = 'Angular-Material';
  popText = false;
  applyShadow = false;
  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop =  document.documentElement.scrollTop;
    this.determineHeader(scrollTop)
    console.log('ScrollTop:', scrollTop);
  }
  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.breakpointObserver.observe('(max-width: 800px)')
      .subscribe((res) => this.isSmallScreen = res.matches);
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

  determineHeader(scrollTop: number): void {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;

  }
}
