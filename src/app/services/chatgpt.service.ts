/**
 * Servicio encargado de manejar la comunicación con el backend
 * para interactuar con la API de OpenAI.
 * 
 * Este servicio se utiliza para enviar mensajes al backend y recibir respuestas
 * procesadas por OpenAI.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

/**
 * Servicio para gestionar las consultas hacia OpenAI
 */
@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible de manera global en la aplicación
})
export class ChatgptService {
  /**
   * URL del backend para manejar solicitudes a OpenAI.
   * 
   * Esta URL apunta al servidor Node.js que actúa como intermediario
   * entre el cliente Angular y la API de OpenAI.
   */
  private apiUrl = 'http://localhost:3000/api/chat';

  /**
   * Constructor del servicio.
   * 
   * @param http - Cliente HTTP de Angular utilizado para realizar solicitudes HTTP.
   */
  constructor(private http: HttpClient) { }

  /**
   * Envía un mensaje al backend para obtener una respuesta de OpenAI.
   * 
   * @param prompt - Pregunta o entrada del usuario que será enviada a OpenAI.
   * @returns Un `Observable` que emite la respuesta como una cadena de texto.
   */
  getMessageChatGPT(prompt: string): Observable<string> {
    return this.http.post<{ response: string }>(this.apiUrl, { prompt }).pipe(
      map(response => response.response) // Extrae la respuesta del backend
    );
  }
}
