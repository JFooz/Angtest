import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeSeanceComponent } from './components/liste-seance/liste-seance.component';
import { EleveDetailComponent } from './components/eleve-detail/eleve-detail.component';
import { FormSeanceComponent } from './components/form-seance/form-seance.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: '/seances' },
  {path : 'accueil', component: AccueilComponent},
  {path : 'seances', component: ListeSeanceComponent},
  {path : 'eleve', component: EleveDetailComponent},
  {path : 'user-list', component: UserListComponent},
  {path : 'eleve/:id', component: EleveDetailComponent},
  {path : 'formulaire', component: FormSeanceComponent},
  {path: 'ressources-indisponibles', component: ErrorPageComponent},
  {path : '**', redirectTo: '/ressources-indisponibles'}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
