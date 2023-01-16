import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
  
}
// export class SplashScreenComponent implements OnInit {

//   // This is the option that uses the package's AnimationOption interface  
//   options: AnimationOptions = {    
//     path: '/assets/lottie/piggy-bank.json'  
//   };  

//   constructor() { }  

//   ngOnInit(): void {  }

//   // This is the component function that binds to the animationCreated event from the package  
//   onAnimate(animationItem: AnimationItem): void {    
//     console.log(animationItem);  
//   }
// }
