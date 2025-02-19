import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../servicios/personaje.service';
import { Icaracter } from '../interfaces/caracter.interface';

@Component({
  selector: 'selector-name',
  standalone: false,
  templateUrl: './main-pagina.component.html'
})

export class MainPageComponent {
  constructor(private perService: PersonajeService) { }

  get caracterV(): Icaracter[]{
    return [...this.perService.caracterV];
  }

  onDeleteCaracter(id:string):void{
    this.perService.deleteCaracterID(id);
  }

  onNewCaracter(caracter: Icaracter): void{
    this.perService.AddCaracterP(caracter);
  }
}
