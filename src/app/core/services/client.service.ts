import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TClients } from '../models/clients.models';

@Injectable()
export class ClientService {

  public getTableHeaderValue() { 
     return [
    {
      canSort: true,
      isSorted: false,
      isAsc: false,
      label: 'Gerenciar',
      property: '',
    },
    {
      canSort: true,
      isSorted: false,
      isAsc: false,
      label: 'Código',
      property: 'id',
    },
    {
      canSort: true,
      isSorted: false,
      isAsc: false,
      label: 'Nome',
      property: 'name',
    },
    {
      canSort: true,
      isSorted: false,
      isAsc: false,
      label: 'Telefone',
      property: 'phone',
    },
    {
      canSort: true,
      isSorted: false,
      isAsc: false,
      label: 'Data De Cadastro',
      property: 'date',
    },
    {
      canSort: true,
      isSorted: false,
      isAsc: false,
      label: 'Atualizar',
      property: '',
    },
    {
      canSort: false,
      isSorted: false,
      isAsc: false,
      label: '',
      property: '',
    }
  ];}

  clientList: TClients[] = [
    {
      id: 31990,
      name: "Anderson Da Silva'",
      phone: "55 9 9648 9321",
      date: "16/06/21 - 16:41:21"
    },
    {
      id: 31991,
      name: "Bruno Almeida",
      phone: "55 9 9898 9891",
      date: "17/06/21 - 12:21:53"
    },
    {
      id: 31992,
      name: "Carlos Andrade",
    phone: "55 9 9029 9792",
      date: "17/06/21 - 21:54:10"
    },
    {
      id: 31993,
      name: "Denilson Ferreira",
      phone: "55 9 9843 1983",
      date: "16/06/21 - 16:41:21"
    },
    {
      id: 31994,
      name: "Emerson Medeiros",
      phone: "55 9 9613 0231",
      date: "11/03/21 - 07:23:31"
    },
    {
      id: 31993,
      name: "Felipe Agosto",
      phone: "55 9 8230 2341",
      date: "02/01/21 - 09:33:43"
    },
    {
      id: 31993,
      name: "Gabriel Luz",
      phone: "55 9 9838 0182",
      date: "14/06/21 - 12:32:44"
    },
    {
      id: 31993,
      name: "Helton Pires",
      phone: "55 9 9954 8349",
      date: "19/09/21 - 17:50:00"
    },
    {
      id: 31993,
      name: "Ivan Fernandes",
      phone: "55 9 9153 5132",
      date: "30/02/21 - 14:44:24"
    },
    {
      id: 31993,
      name: "Jõao Paulo",
      phone: "55 9 9563 3346",
      date: "16/06/21 - 15:41:22"
    },
  ]

  constructor() { }


  public getAllclients(): Observable<TClients[]> {
    return of(this.clientList);
  }
}
