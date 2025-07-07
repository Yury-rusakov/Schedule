//    import { AppComponent } from './app/app.component';

//    bootstrapApplication(AppComponent) // Correct component to bootstrap
//      .catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));