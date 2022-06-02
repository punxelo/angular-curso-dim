import { Micuenta } from "./micuenta";

export class CuentaImpl implements Micuenta{
  nombre: string;

constructor(nombre: any){
  this.nombre = nombre;
}

getIdMundo(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}
}
