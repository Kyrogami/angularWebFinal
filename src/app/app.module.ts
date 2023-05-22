import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PerfilAlumnoComponent } from './components/perfil-alumno/perfil-alumno.component';
import { BackNotasComponent } from './components/back-notas/back-notas.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';
import { InicioAlumnoComponent } from './components/inicio-alumno/inicio-alumno.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './components/parent/parent.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//import{NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    
    AppComponent,
    LogginComponent,
    PerfilAlumnoComponent,
    BackNotasComponent,
    UsuarioDetallesComponent,
    InicioAlumnoComponent,
    MensajeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, 
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class UsuarioDetallesModule { }

