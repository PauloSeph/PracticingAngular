import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundoAmareloDirective } from './fundo-amarelo.directive';
import { TestandoDirective } from './testando.directive';
import { OnlyMyBaconDirective } from './only-my-bacon.directive';

@NgModule({
  declarations: [
    AppComponent,
    FundoAmareloDirective,
    TestandoDirective,
    OnlyMyBaconDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
