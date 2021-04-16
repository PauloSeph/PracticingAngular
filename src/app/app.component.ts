import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarCursos: boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
