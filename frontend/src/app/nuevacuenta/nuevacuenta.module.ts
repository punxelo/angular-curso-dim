import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevacuentaRoutingModule } from './nuevacuenta-routing.module';
import { NuevacuentaComponent } from './nuevacuenta/nuevacuenta.component';


@NgModule({
  declarations: [
    NuevacuentaComponent
  ],
  imports: [
    CommonModule,
    NuevacuentaRoutingModule
  ]
})
export class NuevacuentaModule { }
