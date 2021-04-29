import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string = ''


  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params.subscribe( (params: any) => {
      this.id = params['id'];
    });
  }



}
