import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
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
  },
  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then(m => m.AccueilPage)
  }
];