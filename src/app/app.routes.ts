import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'inspect',
    loadComponent: () => import('./tab2/inspect/inspect.page').then( m => m.InspectPage)
  },
];
