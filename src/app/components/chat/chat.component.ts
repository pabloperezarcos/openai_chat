/**
 * Componente del chat principal.
 * 
 * Este componente permite la interacción entre el usuario y el chatbot
 * utilizando la API de OpenAI a través del servicio `ChatgptService`.
 */
import { Component } from '@angular/core';
import { ChatgptService } from '../../services/chatgpt.service';
import { FormsModule } from '@angular/Forms';

/**
 * Este componente maneja la interaccion de usuario y chatbot.
 */
@Component({
  selector: 'app-chat', // Selector del componente para su uso en plantillas HTML
  standalone: true, // Configuración para componentes independientes
  imports: [FormsModule], // Módulos necesarios para manejar formularios
  templateUrl: './chat.component.html', // Ruta de la plantilla HTML
  styleUrl: './chat.component.scss' // Ruta de los estilos asociados
})
export class ChatComponent {
  /**
   * Mensaje ingresado por el usuario en el campo de texto.
   */
  userMessage: string = '';

  /**
   * Respuesta generada por el chatbot y mostrada al usuario.
   */
  botResponse: string = '';

  /**
   * Constructor del componente.
   * 
   * @param chatgptService - Servicio que se utiliza para enviar y recibir mensajes desde la API de OpenAI.
   */
  constructor(private chatgptService: ChatgptService) { }

  /**
   * Envía el mensaje del usuario al servicio `ChatgptService` para obtener una respuesta.
   * 
   * - Verifica que el mensaje no esté vacío antes de enviarlo.
   * - Actualiza `botResponse` con la respuesta del chatbot o con un mensaje de error.
   */
  sendMessage() {
    // Validación de entrada del usuario
    if (!this.userMessage || this.userMessage.trim() === '') {
      this.botResponse = 'Por favor, escribe un mensaje antes de enviar.';
      return;
    }

    // Comunicación con el servicio
    this.chatgptService.getMessageChatGPT(this.userMessage).subscribe({
      /**
       * Maneja la respuesta exitosa del servicio.
       * 
       * @param response - Respuesta generada por el chatbot.
       */
      next: (response: string) => {
        this.botResponse = response;
      },
      /**
       * Maneja los errores durante la solicitud al servidor.
       * 
       * @param error - Información del error generado.
       */
      error: (error) => {
        console.error('Error al obtener la respuesta:', error);
        this.botResponse = 'Ocurrió un error al comunicarse con el servidor.';
      },
      /**
       * Se ejecuta cuando la comunicación con el servidor se completa.
       */
      complete: () => {
        console.log('Comunicación con el servidor completada.');
      },
    });
  }
}