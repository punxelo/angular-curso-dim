import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevacuentaRoutingModule } from './nuevacuenta-routing.module';
import { NuevacuentaComponent } from './nuevacuenta/nuevacuenta.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NuevacuentaComponent
  ],
  imports: [
    CommonModule,
    NuevacuentaRoutingModule,
    FormsModule
  ]
})
export class NuevacuentaModule { }
