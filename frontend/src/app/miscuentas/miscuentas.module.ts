import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscuentasRoutingModule } from './miscuentas-routing.module';
import { MiscuentasComponent } from './miscuentas/miscuentas.component';
import { MicuentaItemComponent } from './micuenta-item/micuenta-item.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { MicuentaConsultarComponent } from './miscuentas/micuenta-consultar/micuenta-consultar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { IngresoItemComponent } from './movimientos/ingreso-item/ingreso-item.component';
import { GastoItemComponent } from './movimientos/gasto-item/gasto-item.component';


@NgModule({
  declarations: [
    MiscuentasComponent,
    MicuentaItemComponent,
    MicuentaConsultarComponent,
    MovimientosComponent,
    IngresoItemComponent,
    GastoItemComponent
  ],
  imports: [
    CommonModule,
    MiscuentasRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [AuxiliarService]
})
export class MiscuentasModule { }
