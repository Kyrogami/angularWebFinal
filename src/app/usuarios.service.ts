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
  private usuariosUrl = 'api/usuario'; 
  private log(message: string) {
    this.mensaje.add(`UsuariosService: ${message}`);
  }



  // Llamo al interfazUsuario y devuelve usuarios
  getUsuarios(): Observable<interfazUsuario[]> {
    const observableUsuario = of(USUARIOS);

    //cambiamos la llamada de la lista de users locales por llamada HTTTP


    // Llamada para que los mensajes se completen
    this.mensaje.add('Servicios de usuarios: usuarios recuperados');
    //return observableUsuario;
    return this.http.get<interfazUsuario[]>(this.usuariosUrl)
  }

  constructor(private http: HttpClient,

    private mensaje: MensajeService) //nombre de la variable. Llamamos a MensajeService
  
  { }
  
  // Aquí puedes agregar más funciones y lógica relacionada con el servicio de usuarios
}



