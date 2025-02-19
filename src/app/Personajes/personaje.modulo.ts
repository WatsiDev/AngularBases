import { NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PersonajeComponent } from "./personaje/personaje.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        PersonajeComponent,
    ],

    exports:[
        PersonajeComponent,
    ],
    imports:[
        CommonModule
    ]

})
export class persoanjeModulo{
    
}