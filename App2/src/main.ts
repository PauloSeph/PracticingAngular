import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { } from 'node_modules/bootstrap/dist/js/bootstrap.min.js'
// import { } from 'node_modules/jquery/dist/jquery.min.js'
// import { } from 'node_modules/tether/dist/js/tether.min.js'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
