import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { TestandoDirective } from './shared/testando.directive';
import { OnlyMyBaconDirective } from './shared/only-my-bacon.directive';
import { BindingHostDirective } from './shared/binding-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    FundoAmareloDirective,
    TestandoDirective,
    OnlyMyBaconDirective,
    BindingHostDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
