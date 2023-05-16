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
  usuario:any;
  perfilFotoUrl: string = '../../../assets/imagenesCSS/main.png';
  titulo: string ="Bienvenido a perfil"
  tittle = 'SOY PERFIL-ALUMNO';

    

  

  constructor() { }

  editarCampos() {
    const fotoInput = document.getElementById('foto') as HTMLInputElement;
    fotoInput.addEventListener('change', (event) => {
      const files = fotoInput.files;
      if (files && files.length > 0) {
        const foto = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.perfilFotoUrl = e.target?.result as string;
        };
        reader.readAsDataURL(foto);
      }
    });
  }
  
  cambiarFoto(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const foto = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.perfilFotoUrl = e.target.result;
      };
      reader.readAsDataURL(foto);
    }
  }


  ngOnInit() {
  }

  onSelect(selectedUsuario: interfazUsuario): void {
    this.selectedUsuario = selectedUsuario;
    
  }
}

