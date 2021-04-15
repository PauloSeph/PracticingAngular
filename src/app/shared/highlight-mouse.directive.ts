import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[AppRainbow]'
})
export class RainbowDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }



  @HostBinding('class.lala') toggle: boolean;

}


