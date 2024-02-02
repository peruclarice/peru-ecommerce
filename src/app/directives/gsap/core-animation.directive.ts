import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
// import {TimelineMax} from 'gsap';
import "gsap";

@Component({
    template: ''
    })

export class CoreAnimationDirective {
  @Input() duration = 1;
  @Input() delay = 0;

  @Output() complete: EventEmitter<null> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
  //protected timeline: TimelineMax;
  protected tl= gsap.timeline();

  constructor(protected element: ElementRef) {
    // this.timeline = new TimelineMax({
    //   onComplete: _ => this.complete.emit(),
    //   onReverseComplete: _ => this.reverseComplete.emit(),
    //   paused:true,
    //   reversed:true
    // });

    this.tl = gsap.timeline({
        onComplete: _ => this.complete.emit(),
      onReverseComplete: _ => this.reverseComplete.emit(),
      paused:true,
      reversed:true
    });
  }

  protected animateIn() {
    if(this.tl.isActive()) {
      this.tl.kill();
    }
    this.tl.play();
  }

}
