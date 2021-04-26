import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myTestando][myTestandoNada]'
})
export class TestandoDirective implements OnInit{

  @Input() myTestandoNada: number[] = [];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for(let valores of this.myTestandoNada) {
      this.container.createEmbeddedView(
        this.template,
        {$implicit: valores})
    }
  }

}
