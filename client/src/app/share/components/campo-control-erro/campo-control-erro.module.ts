import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CampoControlErroComponent
  ]
})
export class CampoControlErroModule { }