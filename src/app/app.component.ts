import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peru-ecommerce';
  faCoffee = faCoffee;
  faArrowUp = faArrowUp;

  // constructor(private dialog: MatDialog, private store: AngularFirestore) {}
}
