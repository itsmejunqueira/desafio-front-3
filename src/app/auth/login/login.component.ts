import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public show_eye: boolean = false;

  public formLogin = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private _authService: AuthService,
    private _spinnerService: NgxSpinnerService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  public async submit() {
    if (this.formLogin.invalid) {
      return;
    }
    await this._authService.login(this.formLogin.value);
  }
}
