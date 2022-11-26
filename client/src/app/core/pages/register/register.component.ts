import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegistration: FormGroup;

  constructor(private _fb: FormBuilder,
              private _registerService: RegisterService,
              private _router: Router) { }

  ngOnInit(): void {
    this.registerForm();
  }

  onSubmit(): void {
    if(this.formRegistration.valid) {
      delete this.formRegistration.value.repeatPassword;
      this._registerService.save(this.formRegistration.getRawValue()).subscribe({
        next: register => {
          if(!!register) {
            alert(register)
            this._router.navigate([`login`]);
          }
        },
        error: err => {
          if(!!err?.statusText) {
            alert(err.statusText);
          }
        }
      });
    }
  }

  verificaValidTouched(campo: string) {
    return !this.formRegistration.get(campo)?.valid
    && this.formRegistration.get(campo)?.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  public registerForm(): void {
    this.formRegistration = this._fb.group({
      name: ['',  Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ],
      email: ['',  Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      password: ['',  Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ],
      repeatPassword: ['',  Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ],
    })
  }

  public verificaValidTouchedAndIfAreSamePasswords(field: string): boolean | undefined {
    let password = this.formRegistration.get('password')?.value;
    let repeatPassword = this.formRegistration.get('repeatPassword')?.value;
    return password !== repeatPassword;
  }
}
