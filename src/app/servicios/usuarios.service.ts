import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.models';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {} 


getUsuarios(){

  return this.http.get<Usuario[]>( 'https://jsonplaceholder.typicode.com/users')

  }
  
}

