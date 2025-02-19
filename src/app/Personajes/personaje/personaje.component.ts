import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes-personaje',
  standalone: false,
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'] // ✅ Corrección aquí
})
export class PersonajeComponent {
  public nombre: string = 'Jair';
  public edad: number = 22;

  get mensaje(): string {
    return this.nombre.toUpperCase();
  }

  getConcatenar(): string {
    return `${this.nombre}-`; 
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 25;
  }

  resetear(): void {
    this.nombre = 'Jair';
    this.edad = 22;
  }
}
