import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscuentasRoutingModule } from './miscuentas-routing.module';
import { MiscuentasComponent } from './miscuentas/miscuentas.component';


@NgModule({
  declarations: [
    MiscuentasComponent
  ],
  imports: [
    CommonModule,
    MiscuentasRoutingModule
  ]
})
export class MiscuentasModule { }
