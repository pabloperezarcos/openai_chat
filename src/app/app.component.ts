import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente raíz de la aplicación Angular.
 * 
 * Este componente actúa como el punto de entrada principal para la estructura de la aplicación.
 * Define la plantilla base y configura el enrutamiento principal a través de `RouterOutlet`.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /**
   * Título de la aplicación.
   * 
   * Este valor se utiliza como identificador o referencia en la aplicación.
   */
  title = 'OpenAI - CHAT TEST con ANGULAR';
}
