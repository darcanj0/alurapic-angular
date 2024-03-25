import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';
import { PhotoProps } from '../../model/photo';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input()
  ownedPhoto: PhotoProps;

  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer,
    private readonly auth: AuthService
  ) {
  }
  ngOnInit(): void {
    this.auth.userChanges()
      .subscribe(user => {
        console.log(this.ownedPhoto);
        if (user.id != this.ownedPhoto.userId) {
          this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
        }
      });
  }
}
