import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimientosComponent } from '../movimientos/movimientos.component';
import { CuentasComponent } from './cuentas/cuentas.component';

const routes: Routes = [{
  path: '',
  component: CuentasComponent
},
{
  path: 'cuentas',
  component: CuentasComponent
},
{
  path: 'movimientos',
  component: MovimientosComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasRoutingModule { }
