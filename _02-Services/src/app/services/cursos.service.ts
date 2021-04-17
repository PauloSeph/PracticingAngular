import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "./log.service";



@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criarNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Csharp']

  constructor (private readonly logService: LogService) {
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso)
    CursosService.criarNovoCurso.emit(curso);
  }
}

