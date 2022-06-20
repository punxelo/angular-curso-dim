import { Movimiento } from "./movimiento";

export class MovimientoImpl implements Movimiento{
    movimientoId: string = '';
    concepto: string = '';
    importe: number = 0;
    fecha: string = '';
    cuenta: string = '';

    constructor() {};
}
