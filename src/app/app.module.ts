import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared/shared.module';
//tout ce qui est declare ici peut etre utiliser partout dans l'application
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
