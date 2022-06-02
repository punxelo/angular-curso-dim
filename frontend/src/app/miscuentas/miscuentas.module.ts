import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscuentasRoutingModule } from './miscuentas-routing.module';
import { MiscuentasComponent } from './miscuentas/miscuentas.component';
import { MicuentaItemComponent } from './micuenta-item/micuenta-item.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';


@NgModule({
  declarations: [
    MiscuentasComponent,
    MicuentaItemComponent
  ],
  imports: [
    CommonModule,
    MiscuentasRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class MiscuentasModule { }
