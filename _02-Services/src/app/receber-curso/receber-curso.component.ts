import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.css']
})
export class ReceberCursoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.emitirCursoCriado.subscribe(
      (cursoCriado) => this.curso = cursoCriado
    )
  }
}

