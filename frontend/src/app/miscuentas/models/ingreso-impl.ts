import { Ingreso } from "./ingreso";
import { MovimientoImpl } from "./movimiento-impl";

export class IngresoImpl extends MovimientoImpl implements Ingreso{

  estado: string ='';

  constructor() {
    super();
  };
}
