import { Component } from '@angular/core';

@Component({
  selector: 'app-iphero',
  templateUrl: './iphero.component.html',
  styleUrls: ['./iphero.component.scss']
})
export class IpheroComponent {
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
