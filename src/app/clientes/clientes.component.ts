import { Component } from '@angular/core';
import { TClients, THeader } from '../core/models/clients.models';
import { ClientService } from '../core/services/client.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent {
  public clientList: TClients[] = [];
  public selectedHeaderItems: THeader[] =
    this._clientService.getTableHeaderValue();

  constructor(private _clientService: ClientService) {}
  ngOnInit(): void {
    this.loadclients();
  }
  loadclients() {
    this._clientService.getAllclients().subscribe((clientsResult) => {
      this.clientList = clientsResult;
    });
  }
}
