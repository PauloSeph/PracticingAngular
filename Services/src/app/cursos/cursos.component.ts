'use strict'

import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent {

  cursos: string[] = [];
  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosService.criarNovoCurso.subscribe(
      (curso) => this.cursos.push(curso)
    );
  }
}


