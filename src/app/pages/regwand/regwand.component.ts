import { Component } from '@angular/core';

@Component({
  selector: 'app-regwand',
  templateUrl: './regwand.component.html',
  styleUrls: ['./regwand.component.scss']
})
export class RegwandComponent {
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
