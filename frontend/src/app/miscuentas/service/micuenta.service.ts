import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

  getId(url: string): string {
      let posicionFinal: number = url.lastIndexOf('/');
      let numId: string = url.slice(posicionFinal + 1, url.length);
      return numId;
  }

  getMisCuentas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  getMiCuenta(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  updateMiCuenta(micuenta: Micuenta): Observable<any> {
    return this.http.patch(`${this.urlEndPoint}/${micuenta.micuentaId}`, micuenta).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  extraerMisCuentas(respuestaApi: any): Micuenta[] {
      const miscuentas: Micuenta[] = [];
      respuestaApi._embedded.cuentas.forEach((p: any) => {
      miscuentas.push(this.mapearMiCuenta(p));
    });
    return miscuentas;
    }

  mapearMiCuenta(micuentaApi: any): MiCuentaImpl {
    let micuenta: Micuenta = new MiCuentaImpl();
    micuenta.micuentaId = this.getId(micuentaApi._links.cuenta.href);
    micuenta.nombre = micuentaApi.nombreCuenta;
    micuenta.urlMicuenta = micuentaApi._links.cuenta.href;
    return micuenta;
  }

    // mapearMiCuenta(micuentaApi: any): MiCuentaImpl {
    //   let micuenta: Micuenta = new MiCuentaImpl("");
    //   micuenta.micuentaId = this.getId(micuentaApi._links.cuenta.href);
    //   micuenta.nombre = micuentaApi.nombre;
    //   micuenta.urlMicuenta = micuentaApi._links.cuenta.href;
    //   return micuenta;
    // }

    create(micuenta: Micuenta): void {
    console.log(`Se ha creado una nueva cuenta: ${JSON.stringify(micuenta)}`);
    }

    getMisCuentasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
    }
    }
