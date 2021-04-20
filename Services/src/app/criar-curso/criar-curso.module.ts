import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReceberCursoComponent } from '../receber-curso/receber-curso.component';

import { CursosService } from '../services/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';


@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CriarCursoComponent
  ],
  providers: [CursosService],
})
export class CriarCursoModule { }

