import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { R_Usuario, Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.email == "usuario@email.com" && usuario.senha == "123") {

      this.usuarioAutenticado = true;

      this.router.navigate(['/form']);
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
