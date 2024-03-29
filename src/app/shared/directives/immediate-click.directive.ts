import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetector: PlatformDetectorService,
  ) {
  }
  ngOnInit(): void {
    if (this.platformDetector.isBrowser)
      this.element.nativeElement.click();
  }
}
