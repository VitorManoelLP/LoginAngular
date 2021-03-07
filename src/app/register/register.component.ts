import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { R_Usuario } from '../login/usuario';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public R_usuario: R_Usuario = new R_Usuario();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  registrar(){
    this.registerService.register(this.R_usuario)
  }
}
