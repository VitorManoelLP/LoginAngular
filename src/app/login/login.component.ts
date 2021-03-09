import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  insertsLogin: FormGroup;

  public usuario: Usuario = new Usuario( );

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.insertsLogin = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }

  verifyValidTouched(campo: string){
    return ! ((this.insertsLogin.get(campo) as FormControl).valid) &&  (this.insertsLogin.get(campo) as FormControl).touched;
  }

  AplicaCssErro(campo:any){
    return {
      'has-error': this.verifyValidTouched(campo),
      'has-feedback': this.verifyValidTouched(campo)
    }
  }


}
