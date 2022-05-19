import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    },
   {
    path: "cuentas",
      loadChildren: () => import("./cuentas/cuentas.module").then((m) => m.CuentasModule)
    },
    {
    path: "nuevacuenta",
    loadChildren: () => import("./nuevacuenta/nuevacuenta.module").then((m) => m.NuevacuentaModule)
    },
    {
    path: "miscuentas",
    loadChildren: () => import("./miscuentas/miscuentas.module").then((m) => m.MiscuentasModule)
    },
    {
    path: "not-found",
    component: NotFoundComponent,
    },
    {
    path: "**",
    redirectTo: "not-found",
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
