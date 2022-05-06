import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.models';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], texto: string ): Usuario[] {
  
    if (texto.length===0 ) {return usuarios;}

    texto = texto.toLocaleLowerCase();


    return usuarios.filter( usuario => {
    return usuario.name.toLocaleLowerCase().includes (texto)

      ||usuario.email.toLocaleLowerCase().includes(texto)
  
      ||usuario.website.toLocaleLowerCase().includes(texto)

      ||usuario.username.toLocaleLowerCase().includes(texto);
    });


  }

}
