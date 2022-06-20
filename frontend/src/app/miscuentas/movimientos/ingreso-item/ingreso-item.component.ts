import { Component, Input, OnInit, Output } from '@angular/core';
import { IngresoImpl } from '../../models/ingreso-impl';

@Component({
  selector: 'app-ingreso-item',
  templateUrl: './ingreso-item.component.html',
  styleUrls: ['./ingreso-item.component.css']
})
export class IngresoItemComponent implements OnInit {

  @Input() ingreso: IngresoImpl = new IngresoImpl();
  // @Output() actividadOperativaEliminar = new EventEmitter<ActividadoperativaImpl>();
  // @Output() actividadOperativaEditar = new EventEmitter<ActividadoperativaImpl>();

  constructor() { }

  ngOnInit(): void {
  }

}
