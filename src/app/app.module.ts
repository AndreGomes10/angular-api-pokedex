import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

// importar para o projeto
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { TransformadorPipe } from './pipes/transformador.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TransformadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // adicionado para o projeto
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
