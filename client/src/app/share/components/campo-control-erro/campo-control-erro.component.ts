import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean | undefined;

  constructor() { }
}