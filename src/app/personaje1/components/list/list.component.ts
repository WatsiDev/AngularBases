import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icaracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-personaje1-list',
  standalone: false,
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input()
  public caracterList: Icaracter[] = [{
    nombre: 'Messi',
    dorsal: 10
  }]

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCaracterH(id?: string): void {
    if (!id) return;
    console.log({ id });
    this.OnDelete.emit(id);
  }
}
