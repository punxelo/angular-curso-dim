import { Component, Input, OnInit } from '@angular/core';
import { GastoImpl } from '../../models/gasto-impl';

@Component({
  selector: 'app-gasto-item',
  templateUrl: './gasto-item.component.html',
  styleUrls: ['./gasto-item.component.css']
})
export class GastoItemComponent implements OnInit {

  @Input() gasto: GastoImpl = new GastoImpl();
  // @Output() actividadOperativaEliminar = new EventEmitter<ActividadoperativaImpl>();
  // @Output() actividadOperativaEditar = new EventEmitter<ActividadoperativaImpl>();

  constructor() { }

  ngOnInit(): void {
  }

}
