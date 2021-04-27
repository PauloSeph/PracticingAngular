import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyMyBacon]'
})
export class OnlyMyBaconDirective {

  @HostListener('mouseenter') onMouseEnter () {
    alert( "Não toque no meu bacon!") ;
  }
}


