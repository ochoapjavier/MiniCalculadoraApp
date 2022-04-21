import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  operando1:number=0;
  operando2:number=0;
  resultado:number=0;

  sumar():void{
    this.resultado = this.operando1 + this.operando2;
  }

  restar():void{
    this.resultado = this.operando1 - this.operando2;
  }

  multiplicar():void{
    this.resultado = this.operando1 * this.operando2;
  }
}
