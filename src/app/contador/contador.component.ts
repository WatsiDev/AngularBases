import { Component } from '@angular/core';

@Component({
    selector: 'app-contador1',
    template: `
        <h1>{{ title }}</h1>
        <hr>
        <h3>Contador: {{ contador }}</h3>
        
        <button (click)="incrementarValor(2)">+2</button>
        <button (click)="reiniciar()">Reset</button>
        <button (click)="incrementarValor(-2)">-2</button>
    `
})
export class ContadorComponent1 {
    public title: string = 'Mi primera app de Angular módulo contador';
    public contador: number = 10;

    public incrementarValor(valor: number): void {
        this.contador += valor;
    }

    public reiniciar(): void {
        this.contador = 10;
    }
}
