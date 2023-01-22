import { Component, OnInit } from '@angular/core';
// import { ProductApiService } from 'src/app/service/network-calls/product-api.service';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ProductListComponent } from '../product-list/product-list.component';

interface Product {
  title: string;
  img: string;
  description: string;
  price: number;
  duration: string;
  summary: string;
  // string: moduleTitles[]
  // arr: moduleTitles[]=[]
  // any moduleTitles: moduleTitles[]
  [moduleTitles: string]: any;

}

// interface MyArray {
//   data: Product[]
// }

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products : Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;
  productDisplay: Product[] = [];
   
  constructor(private appstore: AngularFirestore){
    this.productsCollection = this.appstore.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.products.subscribe((data) => {
      this.productDisplay = data;
    });
  }
  
  faFacebookF = faFacebookF;
  faClock = faClock;
  faMedal = faMedal;
  

  
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
  
}
