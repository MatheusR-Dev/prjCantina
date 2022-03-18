import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdHotDog: number = 0;
  qtdRefri: number = 0;
  qtdBala: number = 0;
  qtdChocolate: number = 0;
  resultado:number = 0;

  constructor() {}

  calcularTotal(){
    this.resultado = this.qtdHotDog * 5;
    this.resultado += this.qtdRefri * 3.5;
    this.resultado += this.qtdBala * 0.25;
    this.resultado += this.qtdChocolate * 2;
  }

  addHotDog(){
    this.qtdHotDog++;
    this.calcularTotal();
  }

  addRefri(){
    this.qtdRefri++;
    this.calcularTotal();
  }

  addBala(){
    this.qtdBala++;
    this.calcularTotal();
  }

  addChocolate(){
    this.qtdChocolate++;
    this.calcularTotal();
  }

  removeHotDog(){
    if (this.qtdHotDog > 0)
    this.qtdHotDog--;
    this.calcularTotal();
  }

  removeRefri(){
    if (this.qtdRefri > 0)
    this.qtdRefri--;
    this.calcularTotal();
  }

  removeBala(){
    if (this.qtdBala > 0)
    this.qtdBala--;
    this.calcularTotal();
  }

  removeChocolate(){
    if (this.qtdChocolate > 0)
    this.qtdChocolate--;
    this.calcularTotal();
  }

  limpar(){
    this.qtdBala = 0;
    this.qtdChocolate = 0;
    this.qtdHotDog = 0;
    this.qtdRefri = 0;
    this.resultado = 0;
  }
}


