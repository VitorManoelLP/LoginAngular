import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { R_Usuario, Usuario} from '../login/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public usuario: Usuario = new Usuario();

  private usuarioRegistrado: boolean = false;

  constructor(private router: Router) {  }

  register(R_usuario: R_Usuario){
    if(R_usuario.email === "usuario@email.com" && R_usuario.senha === "123" && R_usuario.nome === "teste" && R_usuario.confirmSenha === R_usuario.senha){

      this.usuarioRegistrado = true;

      this.router.navigate(['/form']);
    } else {
      this.usuarioRegistrado = false;
    }
  }
}
