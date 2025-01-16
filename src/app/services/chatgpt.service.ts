import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ChatgptService {
  private apiUrl = 'http://localhost:3000/api/chat'; // URL del backend

  constructor(private http: HttpClient) { }

  getMessageChatGPT(prompt: string): Observable<string> {
    return this.http.post<{ response: string }>(this.apiUrl, { prompt }).pipe(
      map(response => response.response) 
    );
  }
  
}
