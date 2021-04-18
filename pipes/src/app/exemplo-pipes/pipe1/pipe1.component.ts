import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component implements OnInit {

  livro: any = {
    titulo: "Learning Javascript Data Structures",
    rating: 4.5332,
    numeroPaginas: 314,
    preco: 44.33,
    dataLancamento: new Date(2016, 5, 23),
    url: 'httt://localhost'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
