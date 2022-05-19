import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuevacuentaComponent } from './nuevacuenta/nuevacuenta.component';

const routes: Routes = [
  {
    path: '',
    component: NuevacuentaComponent
  },
  {
    path: 'nuevacuenta',
    component: NuevacuentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevacuentaRoutingModule { }
