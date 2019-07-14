import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevocmp/nuevo.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

//Constantes que haran el rol de contener nuestras URLs

const appRoutes:Routes=[
{path:'', redirectTo:'/index', pathMatch:'full'}, //es la pagina principal donde se redireccionara al usuario apenas ingrese a la web
{path:'index', component:HomeComponent},
{path:'nuevo', component:NuevoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Modulos de firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    //Modulo de las rutas
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
