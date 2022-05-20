import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiscuentasComponent } from './miscuentas/miscuentas.component';

const routes: Routes = [
  {
    path: '',
    component: MiscuentasComponent
  },
  {
    path: 'miscuentas',
    component: MiscuentasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscuentasRoutingModule { }