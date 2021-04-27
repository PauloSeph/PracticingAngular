import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[BindingHost]'
})
export class BindingHostDirective {

  @HostBinding('style.backgroundColor') qualquerCoisa: string = 'pink'

}
