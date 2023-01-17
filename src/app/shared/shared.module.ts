import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { UserDropComponent } from './user-drop/user-drop.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    UserDropComponent,
    MenuDropdownComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class SharedModule {}