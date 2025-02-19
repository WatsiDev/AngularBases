import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent1 } from './contador/contador.component';
import { persoanjeModulo } from './Personajes/personaje.modulo';
import { AddCaracterComponent } from './personajes/components/add-caracter/add-caracter.component';
import { ListComponent } from './personaje1/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCaracterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorComponent1,
    persoanjeModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
