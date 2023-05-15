// importo componentes
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { BackNotasComponent } from './components/back-notas/back-notas.component';
import { PerfilAlumnoComponent } from './components/perfil-alumno/perfil-alumno.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

// RUTAS y con<router-outlet></router-outlet> lo saca.
const routes: Routes = [
  {path: 'loggin', component: LogginComponent},
  {path: 'inicio', component: PerfilAlumnoComponent},
  {path:'back', component: BackNotasComponent },
  {path:'perfil',component:PerfilAlumnoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
   })
export class AppRoutingModule { }
