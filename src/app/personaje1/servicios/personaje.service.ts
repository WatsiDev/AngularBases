import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { Icaracter } from '../interfaces/caracter.interface';

@Injectable({providedIn: 'root'})
export class PersonajeService {
  public caracterV: Icaracter[] = [{
    id: v4(),
    nombre: "Messi"
    ,dorsal: 10
  }, {
    id: v4(),
    nombre: "Lamine Yamal",
    dorsal: 19
  }, {
    id: v4(),
    nombre: "Lewandowski",
    dorsal: 9
  }]

  AddCaracterP(caracter: Icaracter): void {
    console.log('MainPage');
    console.log(caracter);
    const newCaracter: Icaracter={id:v4(),... caracter};
    this.caracterV.push(newCaracter);
  }

  deleteCaracterID(id: string){
    this.caracterV=this.caracterV.filter(carac => carac.id!==id);
  }
}
