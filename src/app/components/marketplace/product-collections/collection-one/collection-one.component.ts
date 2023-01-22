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
  selector: 'app-collection-one',
  templateUrl: './collection-one.component.html',
  styleUrls: ['./collection-one.component.scss']
})
export class CollectionOneComponent {

  products : Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;

  constructor(appstore: AngularFirestore) {
    this.productsCollection = appstore.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
