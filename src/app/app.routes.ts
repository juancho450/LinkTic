import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        loadComponent: () =>
          import('./feature/list-linktic/list-linktic.component').then((m) => m.ListLinkticComponent),
    },
    {
        path: 'form',
        loadComponent: () =>
          import('./feature/form-linktic/form-linktic.component').then((m) => m.FormLinkticComponent),
    },
];
