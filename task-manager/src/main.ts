    import { bootstrapApplication } from '@angular/platform-browser';
    import { AppComponent } from './app/app.component';

    bootstrapApplication(AppComponent) // Correct component to bootstrap
      .catch(err => console.error(err));
