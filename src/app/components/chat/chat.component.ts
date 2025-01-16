import { Component } from '@angular/core';
import { ChatgptService } from '../../services/chatgpt.service';
import { FormsModule } from '@angular/Forms';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  userMessage: string = '';
  botResponse: string = '';

  constructor(private chatgptService: ChatgptService) { }

  sendMessage() {
    if (!this.userMessage || this.userMessage.trim() === '') {
      this.botResponse = 'Por favor, escribe un mensaje antes de enviar.';
      return;
    }

    this.chatgptService.getMessageChatGPT(this.userMessage).subscribe({
      next: (response: string) => {
        this.botResponse = response; 
      },
      error: (error) => {
        console.error('Error al obtener la respuesta:', error);
        this.botResponse = 'Ocurrió un error al comunicarse con el servidor.';
      },
      complete: () => {
        console.log('Comunicación con el servidor completada.');
      },
    });
  }

}