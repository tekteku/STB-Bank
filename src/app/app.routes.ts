
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then(m => m.ProfilPage)
  },
  {
    path: 'depot',
    loadComponent: () => import('./pages/depot/depot.page').then(m => m.DepotPage)
  },
  {
    path: 'retrait',
    loadComponent: () => import('./pages/retrait/retrait.page').then(m => m.RetraitPage)
  },
  {
    path: 'transfert',
    loadComponent: () => import('./pages/transfert/transfert.page').then(m => m.TransfertPage)
  }
];