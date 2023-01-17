import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
})
export class MenuDropdownComponent implements OnInit {
  isMobile = false;
  constructor() {}

  
  ngOnInit(): void {
    this.onResize();
  }

  @HostListener("window:resize", ["$event"])
    public onResize(evt?: any): void {
        if (window.innerWidth < 480) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
     } 
}
  
