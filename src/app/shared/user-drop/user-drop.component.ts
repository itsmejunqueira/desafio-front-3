
import { Component, HostListener } from "@angular/core";

@Component({
  selector: 'app-user-drop',
  templateUrl: './user-drop.component.html',
  styleUrls: ['./user-drop.component.scss'],
})
export class UserDropComponent  {
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
