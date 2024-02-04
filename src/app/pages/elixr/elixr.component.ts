import { Component } from '@angular/core';

@Component({
  selector: 'app-elixr',
  templateUrl: './elixr.component.html',
  styleUrls: ['./elixr.component.scss']
})
export class ElixrComponent {
  
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
