import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GastoImpl } from '../models/gasto-impl';
import { IngresoImpl } from '../models/ingreso-impl';
import { MovimientoImpl } from '../models/movimiento-impl';
import { MovimientoService } from '../service/movimiento.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  movimientoSeleccionado: any = new MovimientoImpl();
  ingresos: IngresoImpl[] = [];
  gastos: GastoImpl[] = [];
  ingresosVerDatos: IngresoImpl = new IngresoImpl();
  gastosVerDatos: GastoImpl = new GastoImpl();
  gastosNuevos: GastoImpl = new GastoImpl();
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}cuentas`
  @ViewChild('addFormIngreso') addFormIngreso?: NgForm;
  @ViewChild('addFormGasto') addFormGasto?: NgForm;
  @ViewChild('cancelar', { static: false }) botonCancelar: ElementRef | undefined;
  @ViewChild('nuevo', { static: false }) botonNuevoIngreso: ElementRef | undefined;
  @ViewChild('nuevoGasto', { static: false }) botonNuevoGasto: ElementRef | undefined;
  id:string='';

  constructor(private activatedRoute: ActivatedRoute,
    private router : Router,
    private movimientoService: MovimientoService) { }

  ngOnInit(): void {
    debugger;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.listarMovimientos();

    this.ingresosVerDatos.estado = `${this.urlEndPoint}/${this.id}`;
    this.gastosVerDatos.cuenta = `${this.urlEndPoint}/${this.id}`;
  }

  listarMovimientos(){
    this.movimientoService.getMovimientosCuenta(this.id).subscribe((res) =>
    this.ingresos = this.movimientoService.extraerIngresos(res));
    this.movimientoService.getMovimientosCuenta(this.id).subscribe((res) =>
    this.gastos = this.movimientoService.extraerGastos(res));
  }

  onIngresoEliminar(ingreso: IngresoImpl){
    this.movimientoService.deleteIngreso(ingreso.movimientoId).subscribe(
      () => {this.listarMovimientos();}
    );
  }

  onGastoEliminar(gasto: GastoImpl){
    this.movimientoService.deleteGasto(gasto.movimientoId).subscribe(
      () => {this.listarMovimientos();}
    );
  }

  onAddIngreso(addFormIngreso: NgForm) {
    debugger;
    this.movimientoSeleccionado.cuenta = `${this.urlEndPoint}/${this.id}`
    if(!this.movimientoSeleccionado.movimientoId){
      this.movimientoService.addIngreso(this.movimientoSeleccionado).subscribe(
        (response) =>{
          debugger;
          const ing = this.movimientoService.mapearIngresos(response);
          this.movimientoSeleccionado = new MovimientoImpl();
          this.botonCancelar?.nativeElement.click();
          this.listarMovimientos();
        } );
    }else{
      this.movimientoService.updateIngreso(this.movimientoSeleccionado).subscribe(
        (response) =>{
          debugger;
          const ing = this.movimientoService.mapearIngresos(response);
          this.movimientoSeleccionado = new MovimientoImpl();
          this.botonCancelar?.nativeElement.click();
          this.listarMovimientos();
        } );
    }
  }

  onAddGasto(addFormGasto: NgForm) {
    debugger;
    this.movimientoSeleccionado.cuenta = `${this.urlEndPoint}/${this.id}`
    if(!this.movimientoSeleccionado.movimientoId){
      this.movimientoService.addGasto(this.movimientoSeleccionado).subscribe(
        (response) =>{
          debugger;
          const ing = this.movimientoService.mapearGastos(response);
          this.movimientoSeleccionado = new MovimientoImpl();
          this.botonCancelar?.nativeElement.click();
          this.listarMovimientos();
        } );
    }else{
      this.movimientoService.updateGasto(this.movimientoSeleccionado).subscribe(
        (response) =>{
          debugger;
          const ing = this.movimientoService.mapearGastos(response);
          this.movimientoSeleccionado = new MovimientoImpl();
          this.botonCancelar?.nativeElement.click();
          this.listarMovimientos();
        } );
    }
  }

  onClear() {
    debugger;
    this.movimientoSeleccionado = new MovimientoImpl();
    this.addFormGasto?.reset();
    this.addFormIngreso?.reset();

  }

  onIngresoEditar(movimiento: any) {
    debugger;
    this.movimientoSeleccionado = movimiento;
    this.botonNuevoIngreso?.nativeElement.click();
  }

  onGastoEditar(movimiento: any) {
    debugger;
    this.movimientoSeleccionado = movimiento;
    this.botonNuevoGasto?.nativeElement.click();
  }


}
