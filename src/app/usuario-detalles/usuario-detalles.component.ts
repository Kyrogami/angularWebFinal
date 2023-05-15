import { Component, Input } from '@angular/core';
import { interfazUsuario } from '../usuarios';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent {
  @Input() usuario?: interfazUsuario;
}
