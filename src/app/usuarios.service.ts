import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensajeService } from './mensaje.service';
import { Observable, of } from 'rxjs';
import { interfazUsuario } from './usuarios';
import { USUARIOS } from './listaUsuarios';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  // Llamo al interfazUsuario y devuelve usuarios
  getUsuarios(): Observable<interfazUsuario[]> {
    const observableUsuario = of(USUARIOS);

    // Llamada para que los mensajes se completen
    this.mensaje.add('Servicios de usuarios: usuarios recuperados');
    return observableUsuario;
  }

  constructor(private mensaje: MensajeService) { }
  
  // Aquí puedes agregar más funciones y lógica relacionada con el servicio de usuarios
}



