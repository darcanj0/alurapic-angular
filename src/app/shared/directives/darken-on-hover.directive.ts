import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
  ) {
  }

  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'filter', 'brightness(100%)');
  }
}

