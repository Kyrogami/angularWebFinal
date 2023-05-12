import { Component, OnInit } from '@angular/core';
import { interfazUsuario } from '../../usuarios';
import { interfazCursos } from 'src/app/cursos';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {
  usuario: interfazUsuario = {
    id: 1, 
    nombre: 'Adri', 
    dni: "48685511-X",
    apellidos: "sanchez martinez", 
    usuario: "adrijaja", 
    contraseña: "jaja1234", 
    foto: "png1", 
    direccion: "Calle de la Inquisición 1", 
    telefono: 123456789, 
    tipo_usuario: "alumno", 
    activo: true
  };

  constructor() { }

  ngOnInit() {
  }
}
