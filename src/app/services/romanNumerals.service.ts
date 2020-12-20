import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumerals {

  constructor() { }

  traducir(numero) {
    let lista = numero.split("");
    return this.convertirRomano(lista)
  }

  convertirRomano(lista) {
    switch (lista.length) {
      case 1:
        return `${this.convertirUnidadRomano(lista[0])}`;
      case 2:
        return `${this.convertirDecimaRomano(lista[0])}${this.convertirUnidadRomano(lista[1])}`;
      case 3:
        return `${this.convertirCentecimaRomano(lista[0])}${this.convertirDecimaRomano(lista[1])}${this.convertirUnidadRomano(lista[2])}`;
      case 4:
        return `${this.convertirMilesimaRomano(lista[0])}${this.convertirCentecimaRomano(lista[1])}${this.convertirDecimaRomano(lista[2])}${this.convertirUnidadRomano(lista[3])}`;
      default:
        return 'error';
    }
  }

  convertirUnidadRomano(num) {
    let array1 = {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX'
    }
    return array1[num];
  }

  convertirDecimaRomano(num) {
    let array1 = {
      0: '',
      1: 'X',
      2: 'XX',
      3: 'XXX',
      4: 'XL',
      5: 'L',
      6: 'LX',
      7: 'LXX',
      8: 'LXXX',
      9: 'XC'
    }
    return array1[num];
  }

  convertirCentecimaRomano(num) {
    let array1 = {
      0: '',
      1: 'C',
      2: 'CC',
      3: 'CCC',
      4: 'CD',
      5: 'D',
      6: 'DC',
      7: 'DCC',
      8: 'DCCC',
      9: 'CM'
    }
    return array1[num];
  }

  convertirMilesimaRomano(num) {
    let array1 = {
      0: '',
      1: 'M',
      2: 'MM',
      3: 'MMM'
    }
    return array1[num];
  }
}