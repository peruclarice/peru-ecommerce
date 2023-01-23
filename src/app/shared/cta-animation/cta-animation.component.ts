import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-cta-animation',
  templateUrl: './cta-animation.component.html',
  styleUrls: ['./cta-animation.component.scss']
})
export class CtaAnimationComponent {

  // This is the option that uses the package's AnimationOption interface  
  options: AnimationOptions = {     
    path: '/assets/lottie/cta-animation.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

//   // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

}
