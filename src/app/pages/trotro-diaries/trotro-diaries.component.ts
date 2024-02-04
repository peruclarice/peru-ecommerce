import { Component } from '@angular/core';

@Component({
  selector: 'app-trotro-diaries',
  templateUrl: './trotro-diaries.component.html',
  styleUrls: ['./trotro-diaries.component.scss']
})
export class TrotroDiariesComponent {
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
