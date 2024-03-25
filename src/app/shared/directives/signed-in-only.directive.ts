import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[signedin-only]'
})
export class SignedInOnlyDirective implements OnInit {
  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer,
    private readonly auth: AuthService
  ) {
  }
  ngOnInit(): void {
    !this.auth.isSigned() &&
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');

  }
}
