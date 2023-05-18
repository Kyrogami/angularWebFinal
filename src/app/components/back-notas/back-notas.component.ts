import { Component, OnInit } from '@angular/core';
import { interfazUsuario } from '../../usuarios';
import { USUARIOS } from 'src/app/listaUsuarios';


@Component({
  selector: 'app-back-notas',
  templateUrl: './back-notas.component.html',
  styleUrls: ['./back-notas.component.css']
})
export class BackNotasComponent {
  listaUsuarios: interfazUsuario[] = USUARIOS;
  selectedUsuario?: interfazUsuario;
  usuario:any;

  

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedUsuario: interfazUsuario): void {
    this.selectedUsuario = selectedUsuario;
    
  }

  
}
