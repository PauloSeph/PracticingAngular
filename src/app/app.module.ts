import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowDirective } from './shared/highlight-mouse.directive';
import { NovoDirective } from './shared/novo.directive';
import { ElsePersonalizadoDirective } from './else-personalizado.directive';

@NgModule({
  declarations: [
    AppComponent,
    RainbowDirective,
    NovoDirective,
    ElsePersonalizadoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
