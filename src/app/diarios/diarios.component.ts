import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diarios',
  templateUrl: './diarios.component.html',
  styleUrls: ['./diarios.component.css']
})
export class DiariosComponent implements OnInit {

  diarios: string[] = [];

  salvos: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

}
