import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiCuentaImpl } from '../models/micuenta-impl';
import { Micuenta } from '../models/micuenta';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-micuenta-item',
  templateUrl: './micuenta-item.component.html',
  styleUrls: ['./micuenta-item.component.css']
})
export class MicuentaItemComponent implements OnInit {
  @Input() micuenta: Micuenta = new MiCuentaImpl();
  @Output() micuentaConsultar = new EventEmitter<MiCuentaImpl>();
  @Output() micuentaEditar = new EventEmitter<Micuenta>();

  faArrow = faArrowRightToBracket;

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.micuentaConsultar.emit(this.micuenta);
  }

  editar(): void {
    this.micuentaEditar.emit(this.micuenta);
  }

}
