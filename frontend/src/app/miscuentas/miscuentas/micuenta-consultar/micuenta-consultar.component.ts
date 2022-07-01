import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Micuenta } from '../../models/micuenta';
import { MiCuentaImpl } from '../../models/micuenta-impl';
import { MicuentaService } from '../../service/micuenta.service';

@Component({
  selector: 'app-micuenta-consultar',
  templateUrl: './micuenta-consultar.component.html',
  styleUrls: ['./micuenta-consultar.component.css']
})
export class MicuentaConsultarComponent implements OnInit {

  micuenta: Micuenta = new MiCuentaImpl();

  constructor(private micuentaService: MicuentaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarMicuenta();
    this.micuentaService.getMiCuenta(id).subscribe(response =>
      this.micuenta = this.micuentaService.mapearMiCuenta(response));
  }

  cargarMicuenta(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onConsultarMicuenta(): void {
    this.micuentaService.updateMiCuenta(this.micuenta).subscribe();
    this.router.navigate(['/cuentas']);
  }

  verDatos(micuenta: Micuenta): void {
    this.micuenta = micuenta;
  }
}
