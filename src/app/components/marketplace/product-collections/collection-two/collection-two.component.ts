import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Product {
  title: string
  img: string
  description: string
  price: number
  duration: string
}

@Component({
  selector: 'app-collection-two',
  templateUrl: './collection-two.component.html',
  styleUrls: ['./collection-two.component.scss']
})
export class CollectionTwoComponent {

  products : Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;

  constructor(appstore: AngularFirestore) {
    this.productsCollection = appstore.collection<Product>('ui-ux-products');
    this.products = this.productsCollection.valueChanges();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
