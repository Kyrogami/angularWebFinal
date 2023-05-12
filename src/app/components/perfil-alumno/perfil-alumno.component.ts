import { Component, OnInit } from '@angular/core';
import { interfazUsuario } from '../../usuarios';
import
@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {
  usuario: interfazUsuario = {
    id: 1,
    nombre: 'adrian',
    apellidos: 'Sánchez',
    contraseña: 'Martínez',
    foto: 'foto.jpg',
    direccion: 'Calle de la inquisición',
    telefono: 123456789,
    tipo_usuario: 'alumno',
    activo: true
  };

  

  

  constructor() { }

  ngOnInit() {
  }
}
