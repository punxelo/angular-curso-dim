import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IngresoImpl } from '../../models/ingreso-impl';
import { FaDuotoneIconComponent } from '@fortawesome/angular-fontawesome/icon/duotone-icon.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { UpperCasePipe } from '@angular/common';

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

  constructor() { }

  ngOnInit(): void {
  }

  eliminarIngreso(): void{
    if (confirm(`Eliminar el siguiente ingreso:  ${this.ingreso.concepto}`)){
      this.ingresoEliminar.emit(this.ingreso);
    }
  }

  editarIngreso(): void{
    this.ingresoEditar.emit(this.ingreso);
  }
}
