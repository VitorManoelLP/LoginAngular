import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../login/auth.service';

import { DiarioUsuario, Usuario } from '../login/usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  texto: FormGroup;

  public usuario: Usuario = new Usuario();

  public DiarioUsuario: DiarioUsuario = new DiarioUsuario();

  constructor(private authService: AuthService, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.texto = this.FormBuilder.group({
      diario: []
    });
  }


}
