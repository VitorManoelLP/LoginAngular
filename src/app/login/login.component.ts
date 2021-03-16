import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  insertsLogin: FormGroup;

  exibirValidacao = false;

  public usuario: Usuario = new Usuario( );

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.insertsLogin = this.formBuilder.group({
      email: [null, Validators.compose([Validators.email])],
      senha: [null, Validators.compose([Validators.required])],
    });
  }

  fazerLogin(){
    const login = this.authService.autenticarLogin(this.usuario);
    return login
  }

  validacao(campo:any){
    if((this.insertsLogin.get(campo) as FormGroup).touched){
      this.exibirValidacao = true;
    }
  }
};
