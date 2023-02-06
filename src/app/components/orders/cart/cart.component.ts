import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CollectionTwoComponent } from '../../marketplace/product-collections/collection-two/collection-two.component';

interface Product {
  title: string
  img: string
  description: string
  price: number
  duration: string
}

@Component({
  selector: 'app-cart',
  // standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {

  faCartPlus = faCartPlus;
  faLayerGroup = faLayerGroup;
  faTrash = faTrash;
  faCreditCard = faCreditCard;
  faTriangleExclamation = faTriangleExclamation;

  closeResult: string | undefined;

  constructor(private offcanvasService: NgbOffcanvas, appstore: AngularFirestore, collectionTwoComponent: CollectionTwoComponent) {
    this.productsCollection = appstore.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
	
  }

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end', scroll: true });
	}

	openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

	openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

	openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: false });
	}

	openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

	openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}

	openNoKeyboard(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { keyboard: false });
	}

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { animation: false });
	}

	openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-info' });
	}

	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
	}

  products : Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;

  quantity = 2;
  itemsInCartCount = 1;

  ngOnInit(): void {
      const cartItem = JSON.parse(localStorage.getItem('cartItem') || '');
	// const cartItem = JSON.parse(localStorage.getItem('cartItem')!);
	  console.log('got this value', cartItem.quantity);
  }

}
