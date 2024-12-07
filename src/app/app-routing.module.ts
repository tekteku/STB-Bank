import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Re-import LoginComponent
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
 
  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then(m => m.AccueilPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'transfert',
    loadComponent: () => import('./pages/transfert/transfert.page').then(m => m.TransfertPage)
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
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then(m => m.ProfilPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }