import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CartComponent } from 'src/app/components/orders/cart/cart.component';

interface UiProduct {
  title: string
  img: string
  description: string
  price: number
  duration: string
  url: string
}

@Component({
  selector: 'app-collection-two',
  templateUrl: './collection-two.component.html',
  styleUrls: ['./collection-two.component.scss']
})
export class CollectionTwoComponent {

  products : Observable<UiProduct[]>;
  productsCollection: AngularFirestoreCollection<UiProduct>;


  constructor(appstore: AngularFirestore, 
    private route: Router,
    private offcanvasService: NgbOffcanvas) {
    this.productsCollection = appstore.collection<UiProduct>('ui-ux-products');
    console.log(this.productsCollection);
    this.products = this.productsCollection.valueChanges();
    console.log('data', this.products);
  }
  onAddToCart(product: UiProduct){
    // console.log(product);
    const cartItem = {
      product: product,
      quantity: 1,
      unitPrice: product.price,
      sub_total: 1 * product.price
    };
    // this.products.push(product);
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    // this.route.navigate(['/cart']);
    this.offcanvasService.open(CartComponent, { position: 'end', scroll: true });
  }

  getItems(product: UiProduct){
    console.log(product);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // const cartItem =JSON.parse(localStorage.getItem('cartItem')) ;
  }
}
