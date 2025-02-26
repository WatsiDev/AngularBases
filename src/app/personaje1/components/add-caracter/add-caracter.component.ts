import { Component, EventEmitter, Output } from '@angular/core';
import { Icaracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-add-caracter',
  standalone: false,
  templateUrl: './add-caracter.component.html',
  styleUrl: './add-caracter.component.css'
})
export class AddCaracterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Icaracter> = new EventEmitter();

  public character: Icaracter = {
    nombre: "",
    numero: 0,
    equipo: '',
    posicion: ""
  }

  enviarCaracteres(): void {
    console.log(this.character)
    if (this.character.nombre.length === 0) return;
    this.onNewCharacter.emit({...this.character});

    this.character.nombre = '';
    this.character.numero = 0;
    this.character.equipo = '';
    this.character.posicion = ""
    this.character={nombre:'', numero:0, equipo:'', posicion:""};
  }


}
