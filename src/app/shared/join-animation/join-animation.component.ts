import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-join-animation',
  templateUrl: './join-animation.component.html',
  styleUrls: ['./join-animation.component.scss']
})
export class JoinAnimationComponent {

  // This is the option that uses the package's AnimationOption interface  
  options: AnimationOptions = {    
    path: '/assets/lottie/join-chat.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

//   // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

}
