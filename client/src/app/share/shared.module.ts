import { CampoControlErroModule } from './components/campo-control-erro/campo-control-erro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    CampoControlErroModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }