import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from '../cuentas/cuentas/cuentas.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscuentasRoutingModule { }
