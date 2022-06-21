import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GastoImpl } from '../models/gasto-impl';
import { IngresoImpl } from '../models/ingreso-impl';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}cuentas`
  private urlEndPointIngresos: string = `${this.host}ingresos`
  private urlEndPointGastos: string = `${this.host}gastos`

  constructor(private http: HttpClient) { }

  getMovimientosCuenta(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}/movimientos`).pipe(
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

  extraerIngresos(respuestaApi: any): IngresoImpl[] {
    const ingresos: IngresoImpl[] = [];
    respuestaApi._embedded.ingresos.forEach((p: any) => {
      ingresos.push(this.mapearIngresos(p));
    });
    return ingresos;
  }

  extraerGastos(respuestaApi: any): GastoImpl[] {
    const gastos: GastoImpl[] = [];
    respuestaApi._embedded.gastos.forEach((p: any) => {
      gastos.push(this.mapearGastos(p));
    });
    return gastos;
  }

  mapearIngresos(ingresoAPI: any): IngresoImpl {
    let ingreso: IngresoImpl = new IngresoImpl();
    ingreso.movimientoId = this.getId(ingresoAPI._links.ingreso.href);
    ingreso.concepto = ingresoAPI.concepto;
    ingreso.importe = ingresoAPI.importe;
    ingreso.fecha = ingresoAPI.fecha;
    ingreso.estado = ingresoAPI.estado;
    return ingreso;
  }

  mapearGastos(gastoAPI: any): GastoImpl {
    let gasto: GastoImpl = new GastoImpl();
    gasto.movimientoId = this.getId(gastoAPI._links.gasto.href);
    gasto.concepto = gastoAPI.concepto;
    gasto.importe = gastoAPI.importe;
    gasto.fecha = gastoAPI.fecha;
    gasto.usuario = gastoAPI.usario;
    return gasto;
  }

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  deleteIngreso(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPointIngresos}/${id}`).pipe(
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

  deleteGasto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPointGastos}/${id}`).pipe(
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
}
