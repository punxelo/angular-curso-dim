import { Component, Input, OnInit } from '@angular/core';
import { MiCuentaImpl } from '../models/micuenta-impl';
import { Micuenta } from '../models/micuenta';

@Component({
  selector: 'app-micuenta-item',
  templateUrl: './micuenta-item.component.html',
  styleUrls: ['./micuenta-item.component.css']
})
export class MicuentaItemComponent implements OnInit {
  @Input() micuenta!: Micuenta;

  constructor() { }

  ngOnInit(): void {
  }

}
