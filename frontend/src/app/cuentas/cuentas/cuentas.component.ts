import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {
  public nombreCuenta = 'Cuentas';
  public nombreUsuario = 'Usuario'

  constructor() { }

  ngOnInit(): void {
  }

}
