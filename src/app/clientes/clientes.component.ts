import { Component } from '@angular/core';
import { TClients, THeader } from '../core/models/clients.models';
import { ClientService } from '../core/services/client.service';
import { FormClientComponent } from '../shared/register/form-client/form-client.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent {
  public clientList: TClients[] = [];
  public selectedHeaderItems: THeader[] =
    this._clientService.getTableHeaderValue();


  constructor(private _clientService: ClientService,
    public dialog: MatDialog,) {}
  ngOnInit(): void {
    this.loadclients();
  }
  loadclients() {
    this._clientService.getAllclients().subscribe((clientsResult) => {
      this.clientList = clientsResult;
    });
  }

  public async createClient(item?: any): Promise<void> {
    const dialogRef = this.dialog.open(FormClientComponent, { panelClass: 'modal-rounded' });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
     
    });
  }

}