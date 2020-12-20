import { Component, OnInit } from '@angular/core';
import { RomanNumerals } from '../services/romanNumerals.service';

@Component({
  selector: 'app-romanos',
  templateUrl: './romanos.component.html',
  styleUrls: ['./romanos.component.css']
})

export class RomanosComponent implements OnInit {

  constructor(private servicioRomano: RomanNumerals) { }
  respuesta = "Ingrese un numero arábigo"
  numero = ""
  error = false
  ngOnInit(): void {
  }
  calcular() {
    if (this.numero.match("[a-zA-Z]+")) {
      this.respuesta = "Ingrese un numero arábigo, sin letras"
      this.error = false;
    }
    else if (this.numero.match(".*\\s.*")) {
      this.respuesta = "Ingrese el numero sin espacios"
      this.error = false;
    }
    else if (this.numero == "") {
      this.respuesta = "Ingrese un numero arábigo"
      this.error = false;
    }
    else if (this.numero.length > 4 || parseInt(this.numero) > 1000) {
      this.respuesta = "Debe ser menor a 4 digitos y menor que 1001"
      this.error = false;
    }
    else {
      this.respuesta = this.servicioRomano.traducir(this.numero);
      this.error = true;
    }
  }

}
