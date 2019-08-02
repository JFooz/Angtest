import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EleveDetailComponent } from './components/eleve-detail/eleve-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListeSeanceComponent } from './components/liste-seance/liste-seance.component';
import { FormSeanceComponent } from './components/form-seance/form-seance.component';
import { AppRoutingModule } from './app-routing-module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EleveDetailComponent,
    MenuComponent,
    ListeSeanceComponent,
    FormSeanceComponent,
    ErrorPageComponent,
    AccueilComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
