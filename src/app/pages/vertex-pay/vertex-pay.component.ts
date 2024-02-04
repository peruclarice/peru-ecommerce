import { Component } from '@angular/core';

@Component({
  selector: 'app-vertex-pay',
  templateUrl: './vertex-pay.component.html',
  styleUrls: ['./vertex-pay.component.scss']
})
export class VertexPayComponent {
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
