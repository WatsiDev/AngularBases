import { NgModule } from "@angular/core";
import { MainPageComponent } from "./paginas/main-pagina.component";
import { ListComponent } from "./components/list/list.component";
import { AddCaracterComponent } from "./components/add-caracter/add-caracter.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    MainPageComponent,
    ListComponent,
    AddCaracterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class Personaje1Module {

}
