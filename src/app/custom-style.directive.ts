import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color = 'red'
  }
  @HostListener('mouseenter')  onmouseenter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')  onmouseleave() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

}
