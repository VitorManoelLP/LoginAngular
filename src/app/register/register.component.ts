import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterService } from './register.service';

import { R_Usuario } from '../login/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  insertRegister: FormGroup;

  public R_usuario: R_Usuario = new R_Usuario();

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.insertRegister = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      confirmSenha: [null, Validators.required],
    })

  }

  registrar(){
    this.registerService.register(this.R_usuario)
  }
}
