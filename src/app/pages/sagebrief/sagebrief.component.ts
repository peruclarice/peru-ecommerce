import { Component } from '@angular/core';

@Component({
  selector: 'app-sagebrief',
  templateUrl: './sagebrief.component.html',
  styleUrls: ['./sagebrief.component.scss']
})
export class SagebriefComponent {
  
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
