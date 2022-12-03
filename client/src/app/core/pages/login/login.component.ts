import { LocalStorageService } from './../../../services/local-storage.service';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('notification') notificationTemplate: any;

  loginForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _loginService: LoginService,
              private _router: Router,
              private _storage: LocalStorageService,
              private _notifierService: NotifierService) {
    this._notifierService = _notifierService;
  }

  ngOnInit(): void {
    this.formLogin();
  }

  onSubmit(): void {
    if(this.loginForm.valid) {
      this._loginService.save(this.loginForm.getRawValue()).subscribe({
        next: resp => {
          if(!!resp) {
            this._storage.save(resp);
            this._router.navigate([`/home`]);
          }
        },
        error: err => {
          if(!!err?.statusText) {
            this._notifierService.notify('error', err.statusText);
          }
        }
      });
    }
  }

  verificaValidTouched(campo: string) {
    return !this.loginForm.get(campo)?.valid
    && this.loginForm.get(campo)?.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  public formLogin(): void {
    this.loginForm = this._fb.group({
      email: ['',  Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['',  Validators.required]
    })
  }
}
