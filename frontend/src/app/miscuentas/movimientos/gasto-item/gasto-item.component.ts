import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @Input() index: number=0;

  @Input() gasto: GastoImpl = new GastoImpl();
  @Output() gastoEliminar = new EventEmitter<GastoImpl>();
  @Output() gastoEditar = new EventEmitter<GastoImpl>();
  @ViewChild('updateFormGasto', { static: false }) updateFormGasto: NgForm | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.index);
  }

  eliminarGasto(): void{
    // if (confirm(`Eliminar el siguiente gasto:  ${this.gasto.concepto}`)){
      this.gastoEliminar.emit(this.gasto);
    // }
  }

  editarGasto(updateFormGasto: any): void{
       // updateFormGasto.value.id = this.ingreso.movimientoId;
    debugger;
    this.gastoEditar.emit(this.gasto);
  }

  onClear() {
    this.updateFormGasto?.reset();
  }
}
