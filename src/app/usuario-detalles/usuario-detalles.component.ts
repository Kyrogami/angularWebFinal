import { Component, Input } from '@angular/core';
//import { interfazUsuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
import { USUARIOS } from '../listaUsuarios';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent {

listaUsuarios: any = [];

getUsuarios():void{
  //const listaObservableUsuarios = of (USUARIOS);
  //this.UsuariosService.getUsuarios();
  .subscribe(listaUsuarios => this.listaUsuarios = this.USUARIOS);
}
// lanza como inicializador del objeto
ngOnInit(): void{
  this.USUARIOS = this.UsuariosService()this.getUsuarios;

}
  // le damos un constructor  
  constructor(private UsuariosService : UsuariosService){

  }
}

//hemos sustituido dinámico por estático. como? comentando la lista de interfaz 
// añadiendo USUARIOS SERVICE para conectar nuestro servicio
