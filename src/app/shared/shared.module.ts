import { NgModule } from "@angular/core";
import { MenuDropdownComponent } from "./menu-dropdown/menu-dropdown.component";
import { UserDropComponent } from "./user-drop/user-drop.component";

@NgModule({
    declarations: [
        MenuDropdownComponent,
        UserDropComponent     
    ],
    imports: [],
    exports:[
      MenuDropdownComponent,
      UserDropComponent     
    ]
  })
export class SharedModule {}