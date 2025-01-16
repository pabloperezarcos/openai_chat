/**
 * Punto de entrada principal para la aplicación Angular.
 * Configura y arranca la aplicación utilizando Angular Standalone APIs.
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Inicializa la aplicación Angular.
 * 
 * Utiliza la configuración definida en `app.config.server.ts` para registrar
 * los proveedores y configuraciones necesarias al arrancar la aplicación.
 *
 * @returns {Promise<ApplicationRef>} Promesa que se resuelve cuando la aplicación se ha inicializado correctamente.
 */
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
