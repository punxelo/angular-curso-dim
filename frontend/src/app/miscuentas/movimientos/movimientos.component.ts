import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoImpl } from '../models/gasto-impl';
import { IngresoImpl } from '../models/ingreso-impl';
import { MovimientoService } from '../service/movimiento.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  ingresos: IngresoImpl[] = [];
  gastos: GastoImpl[] = [];
  ingresosVerDatos: IngresoImpl = new IngresoImpl();
  gastosVerDatos: GastoImpl = new GastoImpl();
  constructor(private activatedRoute: ActivatedRoute,
    private router : Router,
    private movimientoService: MovimientoService) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.movimientoService.getMovimientosCuenta(id).subscribe((res) =>
    this.ingresos = this.movimientoService.extraerIngresos(res));
    this.movimientoService.getMovimientosCuenta(id).subscribe((res) =>
    this.gastos = this.movimientoService.extraerGastos(res));
  }

  onIngresoEliminar(ingreso: IngresoImpl){
    this.movimientoService.deleteIngreso(ingreso.movimientoId).subscribe();
  }

  onGastoEliminar(gasto: GastoImpl){
    this.movimientoService.deleteGasto(gasto.movimientoId).subscribe();
  }

  // onActividadOperativaEditar(actividadoperativa: ActividadoperativaImpl){
  //   this.actividadoperativaVerDatos = actividadoperativa;
  //   let url = `operaciones/actividadesoperativas/editar/${actividadoperativa.eventoId}`;
  //   this.router.navigate([url])
  // }

  // onGestionJudicialEliminar(gestionjudicial: GestionjudicialImpl){
  //   this.eventoService.deleteGestionJudicial(gestionjudicial.eventoId).subscribe();
  // }

  // onGestionJudicialEditar(gestionjudicial: GestionjudicialImpl){
  //   this.gestionjudicialVerDatos = gestionjudicial;
  //   let url = `operaciones/gestionesjudiciales/editar/${gestionjudicial.eventoId}`;
  //   this.router.navigate([url])
  // }
}
