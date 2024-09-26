import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('focus') onFocus(event: FocusEvent) {
    this.highlight()
  }

  @HostListener('blur') onBlur(event: FocusEvent) {
    this.highlight(2)
  }

  private highlight( op = 1) {
    let color: string = 'rgba(0,51,171  ,.2)';
    if(op != 1){
      color = '#fff';
    }

    this.el.nativeElement.style.background = color;
  }
}
