import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PerfilAlumnoComponent } from './components/perfil-alumno/perfil-alumno.component';
import { BackNotasComponent } from './components/back-notas/back-notas.component';
import { AppRoutingModule } from './app-routing.module';
//import{NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PerfilAlumnoComponent,
    BackNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface usuarios{
  id:number;
  nombre:String;
  apellidos:String;
  contraseña:String;
  foto:String;
  direccion:String;
  telefono:number;
  tipo_usuario:String;
  activo:boolean;
}
