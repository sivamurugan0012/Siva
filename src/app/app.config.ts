import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { library } from '@fortawesome/fontawesome-svg-core';

import { bootstrapApplication } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
// bootstrapApplication(FooterComponent);
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]

  
};
