import { Component } from '@angular/core';

@Component({
  selector: 'app-pym',
  templateUrl: './pym.component.html',
  styleUrls: ['./pym.component.scss']
})
export class PymComponent {
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
