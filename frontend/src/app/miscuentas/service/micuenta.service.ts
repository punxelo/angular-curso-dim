import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { MiCuentaImpl } from '../models/micuenta-impl';
import { Micuenta } from '../models/micuenta';

@Injectable({
  providedIn: 'root'
})
export class MicuentaService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}cuentas`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

  getMisCuentas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
    }

  extraerMisCuentas(respuestaApi: any): Micuenta[] {
      const miscuentas: Micuenta[] = [];
      respuestaApi._embedded.cuentas.forEach((p: any) => {
      miscuentas.push(this.mapearMiCuenta(p));
    });
    return miscuentas;
    }

    mapearMiCuenta(micuentaApi: any): MiCuentaImpl {
    return new MiCuentaImpl(
    micuentaApi.nombreCuenta);
    }

    create(micuenta: Micuenta): void {
    console.log(`Se ha creado una nueva cuenta: ${JSON.stringify(micuenta)}`);
    }

    getMisCuentasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
    }
    }
