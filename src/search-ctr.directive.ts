import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[npp-search-dir]'
})
export class SearchCtrDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }


}
