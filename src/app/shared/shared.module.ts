import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { UserDropComponent } from './user-drop/user-drop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormClientComponent } from './register/form-client/form-client.component';
import { ClientService } from '../core/services/client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesComponent } from '../pages/clientes/clientes.component';


@NgModule({
  declarations: [
    LayoutComponent,
    UserDropComponent,
    MenuDropdownComponent,
    FormClientComponent,
    ClientesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ClientService]
})
export class SharedModule {}