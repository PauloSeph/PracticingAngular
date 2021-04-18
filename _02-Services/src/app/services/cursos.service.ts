import { Injectable } from "@angular/core";
import { LogService } from "./log.service";



@Injectable()
export class CursosService {
  constructor (private readonly logService: LogService) {
    console.log('CursosService')
  }


}

