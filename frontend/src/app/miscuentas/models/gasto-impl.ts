import { Gasto } from "./gasto";
import { MovimientoImpl } from "./movimiento-impl";

export class GastoImpl extends MovimientoImpl implements Gasto{

  usuario: string = '';

  constructor(){
    super();
  };
}
