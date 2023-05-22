import { Component } from '@angular/core';
import { MensajeService } from '../mensaje.service';
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  constructor(public MensajeService: MensajeService) {}
  
}
