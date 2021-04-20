import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNovo]'
})
export class NovoDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.background = this.corDestaque;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.background = this.corPadrao;
  }

  @HostBinding('style.backgroundColor') background: string;


  @Input() corPadrao: string = 'white';
  @Input('appNovo') corDestaque: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.background = this.corPadrao
  }
}

