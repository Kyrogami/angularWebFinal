import { Component, OnInit } from '@angular/core';
import { interfazUsuario } from '../../usuarios';
import { USUARIOS } from 'src/app/listaUsuarios';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {
  listaUsuarios: interfazUsuario[] = USUARIOS;
  selectedUsuario?: interfazUsuario;

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedUsuario: interfazUsuario): void {
    this.selectedUsuario = selectedUsuario;
  }
}
