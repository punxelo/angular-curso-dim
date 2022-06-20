import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { MiCuentaImpl } from '../models/micuenta-impl';
import { Micuenta } from '../models/micuenta';
import { MicuentaService } from '../service/micuenta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miscuentas',
  templateUrl: './miscuentas.component.html',
  styleUrls: ['./miscuentas.component.css']
})
export class MiscuentasComponent implements OnInit {
  miscuentas: Micuenta[] = [];
  todasMiscuentas: Micuenta[] = [];
  micuentaVerDatos: Micuenta = new MiCuentaImpl();
  numPaginas: number = 0;

  constructor(
  private micuentaService: MicuentaService,
  private auxService: AuxiliarService,
  private router : Router) { }

  ngOnInit(): void {
  this.micuentaService.getMisCuentas().subscribe((response) => this.miscuentas = this.micuentaService.extraerMisCuentas(response));
  this.getTodasMisCuentas();
  }

  verDatos(micuenta: Micuenta): void {
  this.micuentaVerDatos = micuenta;
  }

  onMiCuentaEliminar(micuenta: Micuenta): void {
  console.log(`La cuenta "${micuenta.nombre}" ha sido eliminada`);
  this.miscuentas = this.miscuentas.filter(p => micuenta !== p)
  }

  onMiCuentaConsultar(micuenta: Micuenta){
    this.verDatos(micuenta);
    let url = `miscuentas/consultar/${micuenta.micuentaId}`;
    this.router.navigate([url])
  }

  getTodasMisCuentas(): void {
  this.micuentaService.getMisCuentas().subscribe(r => {
  this.numPaginas = this.auxService.getPaginasResponse(r);
  for (let index = 1; index <= this.numPaginas; index++) {
  this.micuentaService.getMisCuentasPagina(index)
  .subscribe(response => {
  this.todasMiscuentas.push(...this.micuentaService.extraerMisCuentas(response));
  });
  }
  });
  }
  }
