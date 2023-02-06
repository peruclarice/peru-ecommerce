import { Component, OnInit } from '@angular/core';
// import { ProductApiService } from 'src/app/service/network-calls/product-api.service';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';

interface Product {
  title: string
  img: string
  description: string
  price: number
  duration: string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})



export class ProductListComponent implements OnInit {
  // products = [];

  // constructor(
  //   private productApiService: ProductApiService
  // ) {}
  // ngOnInit(): void {
  //   this.getProducts();
  // }

  // private getProducts() {
  //   this.productApiService.getProducts().subscribe((response: any) => {
  //     this.products = response.products;
  //     console.log(this.products[0]);
  //   });
  // }

  products : Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;

  constructor(appstore: AngularFirestore) {
    this.productsCollection = appstore.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }
  onAddToCart(){
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
