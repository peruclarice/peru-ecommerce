import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faShopLock } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../../orders/cart/cart.component';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

faHeart = faHeart;
faLock = faLock;
faShopLock = faShopLock;
faCartPlus = faCartPlus;
faLinkedIn = faLinkedin;
// offcanvasService: any;

constructor(
  private offcanvasService: NgbOffcanvas
){}

showCart(){
  this.offcanvasService.open(CartComponent, { position: 'end', scroll: true });
}

}
