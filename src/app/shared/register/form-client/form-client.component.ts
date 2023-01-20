
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent {
  form: FormGroup ;
  
  constructor( private fb: FormBuilder,private dialogRef: MatDialogRef<FormClientComponent>) {}


  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      repetEmail: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      repetPassword: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      cpf: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      cell: ['', Validators.compose([Validators.required])],
      birth: ['', Validators.compose([Validators.required])],
      cep: ['', Validators.compose([Validators.required])],
      street: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
      complement: ['', Validators.compose([Validators.required])],
      reference: ['', Validators.compose([Validators.required])],
      neighborhood: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
    });
  }
  close(){
    this.dialogRef.close();
  }
  }
