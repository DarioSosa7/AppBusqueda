import { Component } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuario.models';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios: any [] ;
  textoBuscar = '';
  compañia: any [];

  constructor (private usuariosService: UsuariosService) {

  this.usuariosService.getUsuarios()
  .subscribe (respuesta => this.usuarios = respuesta);

  }

  buscarUsuario (event) {
  const texto = event.target.value;
  this.textoBuscar = texto;

}
}
