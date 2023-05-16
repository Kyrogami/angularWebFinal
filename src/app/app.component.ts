import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfilAlumnoComponent } from './components/perfil-alumno/perfil-alumno.component';
import { BackNotasComponent } from './components/back-notas/back-notas.component';
import { LogginComponent } from './components/loggin/loggin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SOY GLOBAL';
  cosita = "soy una cosita";
  
}
