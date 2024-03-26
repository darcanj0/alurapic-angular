import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[signedin-only]'
})
export class SignedInOnlyDirective implements OnInit {
  currentDisplay: string;

  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer,
    private readonly auth: AuthService
  ) { }


  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;

    this.auth.userChanges().subscribe(user => {
      if (user) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', this.currentDisplay);
      } else {
        this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
      }
    });
  }
}
