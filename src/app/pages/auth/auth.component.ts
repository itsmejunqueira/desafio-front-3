import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isMobile = true;



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
