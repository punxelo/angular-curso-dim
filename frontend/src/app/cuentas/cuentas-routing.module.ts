import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './cuentas/cuentas.component';

const routes: Routes = [{
  path: '',
  component: CuentasComponent
},
{
  path: 'cuentas',
  component: CuentasComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasRoutingModule { }
