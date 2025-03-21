import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter } from '@angular/core';
import { TimelineMax } from 'gsap';
import "gsap";
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[fadeInAnimation]'
})
export class FadeInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected override element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected override animateIn() {
    this.tl.from(this.element.nativeElement, this.duration, {opacity:'0', ease:"Expo.easeInOut"}, this.delay);
    // this.tl.duration()
    super.animateIn();
  }
}
