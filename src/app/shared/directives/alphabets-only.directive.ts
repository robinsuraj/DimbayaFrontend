import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[alphabetsOnly]'
})
export class AlphabetsOnlyDirective {
  constructor(private _el: ElementRef ) { }
  
  @HostListener('input', ['$event']) onInputChange(event) {
    console.log("dsfsdf")
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^A-Za-z ]+$/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}

