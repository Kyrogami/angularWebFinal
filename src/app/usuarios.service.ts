import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensajeService } from './mensaje.service';
import { Observabl, of } from 'rxjs';
import { interfazUsuario } from './usuarios';
import { interfazCursos } from './cursos';
import { interfazNotas } from './notas';
import { USUARIOS } from './listaUsuarios';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

getUsuarios():interfazUsuario[]{  //llamo al interfazUsuario y me devuelve usuarios
  const listaObservableUsuarios = of(USUARIOS);
  return listaObservableUsuarios;
}

  constructor(
    private http: HttpClient,
    private MensajeService: MensajeService) { }
}
