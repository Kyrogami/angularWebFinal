import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USUARIOS } from './listaUsuarios';
import { interfazUsuario } from './usuarios';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuarios = [
      { id: 1, nombre: 'Adri',dni:"48685511-X",apellidos:"sanchez martinez",usuario:"adrijaja",password:"jaja1234",foto:"png1",direccion:"Calle de la Inquisición 1",telefono:123456789,tipo_usuario:"alumno",activo:true },

      { id: 2, 
        nombre: 'Jose',
        dni:"11685511-X",
        apellidos:"gonzález pérez",
        usuario:"JosePego",
        password:"jiji1234",
        foto:"png2",
        direccion:"Calle de la Anarquia 2",
        telefono:823456789,
        tipo_usuario:"alumno,",
        activo:true },
        
      { id: 3, 
        nombre: 'Fernando',
        dni:"88685511-X",
        apellidos:"sánchez pérez",
        usuario:"ferjustice",
        password:"jiji1234",
        foto:"png2",
        direccion:"Calle de la Justicia 3",
        telefono:825856789,
        tipo_usuario:"alumno",
        activo:true },
    ];
    return {usuarios};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(usuariosDb: interfazUsuario[]): number {
    return usuariosDb.length > 0 ? Math.max(...usuariosDb.map(usuariosDb => usuariosDb.id)) + 1 : 11; // devuelve 4
  }
}