import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevacuenta',
  templateUrl: './nuevacuenta.component.html',
  styleUrls: ['./nuevacuenta.component.css']
})
export class NuevacuentaComponent implements OnInit {

  public nuevacuenta = {
   nombre: '',
   descripcion: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
