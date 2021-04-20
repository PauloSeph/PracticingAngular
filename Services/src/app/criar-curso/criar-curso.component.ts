import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {

  }

  addCurso(curso: string) {

  }
}
