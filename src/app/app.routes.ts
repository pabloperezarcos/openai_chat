import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/chat/chat.component').then(c => c.ChatComponent)
    },
    {
        path: 'chatbot_openai',
        loadComponent: () => import('./components/chat/chat.component').then(c => c.ChatComponent)
    },
    {
        path: 'historial',
        loadComponent: () => import('./components/historial/historial.component').then(c => c.HistorialComponent)
    }
];
