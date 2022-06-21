import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { GastoImpl } from '../../models/gasto-impl';

@Component({
  selector: 'app-gasto-item',
  templateUrl: './gasto-item.component.html',
  styleUrls: ['./gasto-item.component.css']
})
export class GastoItemComponent implements OnInit {


  faEditPen = faPenToSquare;
  faBorrarTrash = faTrashCan;

  @Input() gasto: GastoImpl = new GastoImpl();
  @Output() gastoEliminar = new EventEmitter<GastoImpl>();
  @Output() gastoEditar = new EventEmitter<GastoImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarIngreso(): void{
    if (confirm(`Eliminar el siguiente gasto:  ${this.gasto.concepto}`)){
      this.gastoEliminar.emit(this.gasto);
    }
  }

  editarIngreso(): void{
    this.gastoEditar.emit(this.gasto);
  }
}
