import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  // This is the option that uses the package's AnimationOption interface  
  options: AnimationOptions = {    
    path: '/assets/lottie/sleep-cat.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

//   // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }
}
function constructor() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function onAnimate(animationItem: any, AnimationItem: any) {
  throw new Error('Function not implemented.');
}

