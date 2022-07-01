import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IngresoImpl } from '../../models/ingreso-impl';
import { UpperCasePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Ingreso } from '../../models/ingreso';

@Component({
  selector: 'app-ingreso-item',
  templateUrl: './ingreso-item.component.html',
  styleUrls: ['./ingreso-item.component.css']
})
export class IngresoItemComponent implements OnInit {

  faEditPen = faPenToSquare;
  faBorrarTrash = faTrashCan;


  @Input() ingreso: IngresoImpl = new IngresoImpl();
  @Output() ingresoEliminar = new EventEmitter<IngresoImpl>();
  @Output() ingresoEditar = new EventEmitter<IngresoImpl>();
  @ViewChild('updateForm', { static: false }) updateForm: NgForm | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  eliminarIngreso(): void{
    if (confirm(`Eliminar el siguiente ingreso:  ${this.ingreso.concepto}`)){
      this.ingresoEliminar.emit(this.ingreso);
    }
  }

  editarIngreso(updateForm: any): void{
   // updateForm.value.id = this.ingreso.movimientoId;
    debugger;
    this.ingresoEditar.emit(this.ingreso);
  }

  onClear() {
    this.updateForm?.reset();
  }
}
