import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent1 } from './contador/contador.component';
import { persoanjeModulo } from './Personajes/personaje.modulo';
import { Personaje1Module } from './personaje1/personaje1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorComponent1,
    persoanjeModulo,
    Personaje1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
