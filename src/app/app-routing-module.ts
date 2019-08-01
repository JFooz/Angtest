import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeSeanceComponent } from './components/liste-seance/liste-seance.component';
import { EleveDetailComponent } from './components/eleve-detail/eleve-detail.component';
import { FormSeanceComponent } from './components/form-seance/form-seance.component';

const routes: Routes = [

  {path : 'seances', component: ListeSeanceComponent},
  {path : 'eleve', component: EleveDetailComponent},
  {path : 'formulaire', component: FormSeanceComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
