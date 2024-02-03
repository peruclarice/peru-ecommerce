import { Component } from '@angular/core';

@Component({
  selector: 'app-qxp',
  templateUrl: './qxp.component.html',
  styleUrls: ['./qxp.component.scss']
})
export class QxpComponent {

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

}
