import { Component, Input, OnInit } from '@angular/core';
import { interfazUsuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
//import { USUARIOS } from '../listaUsuarios';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MensajeService } from '../mensaje.service';
@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {   //añadimos onInit

  selectedUsuario?: interfazUsuario;

  usuarios: interfazUsuario[] = [];

  listaUsuarios: any = []; //esta era la declaracion anterior antes de suscriirnos ANY : POR SI ACASO.

  //creo variable lista usuarios y llamamos a usuarios servicios getUsuarios

  // lanza como inicializador del objeto SINO LO LLAMAS (); NO VA  
  // le damos un constructor  
 

  getUsuarios(): void {
    this.UsuariosService.getUsuarios()
      .subscribe(listaUsuarios => this.listaUsuarios = listaUsuarios); // NO LO ENTIENDO ES IGUALAR UN PUNTERO A UN PUNTERO (no lo entiendo)
  }

  onSelect(usuario: interfazUsuario): void {
    this.selectedUsuario = usuario;
    this.mensajeService.add(`interfazUsuario: Selected user id=${usuario.id}`);
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  constructor(private UsuariosService: UsuariosService, private mensajeService: MensajeService) { }

}

//hemos sustituido dinámico por estático. como? comentando la lista de interfaz 
// añadiendo USUARIOS SERVICE para conectar nuestro servicio