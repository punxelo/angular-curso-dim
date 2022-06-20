import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from '../cuentas/cuentas/cuentas.component';
import { MicuentaConsultarComponent } from './miscuentas/micuenta-consultar/micuenta-consultar.component';
import { MiscuentasComponent } from './miscuentas/miscuentas.component';

const routes: Routes = [
  {
    path: '',
    component: MiscuentasComponent
  },
  {
    path: 'miscuentas',
    component: MiscuentasComponent
  },
  {
    path: 'cuentas',
    component: CuentasComponent
  },
  {
    path: 'consultar/:id',
    component: MicuentaConsultarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscuentasRoutingModule { }
