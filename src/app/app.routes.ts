import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/chat/chat.component').then(c=>c.ChatComponent)
    }

];
