import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Usuario } from '../login/usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public usuario: Usuario

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
