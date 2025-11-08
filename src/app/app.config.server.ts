// src/app/app.config.server.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { serverRoutes } from './app.routes.server';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const appConfigServer: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideRouter(serverRoutes)
  ]
};
export const config = appConfigServer;
