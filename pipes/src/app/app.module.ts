import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pipe1Component } from './exemplo-pipes/pipe1/pipe1.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    Pipe1Component,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SettingsService,
    // {
    //    provide: LOCALE_ID,
    //    deps: [SettingsService],
    //   useFactory: (settingsService) => settingsService.getLocale()
    // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
