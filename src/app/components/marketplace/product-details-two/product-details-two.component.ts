import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

interface UiUxProduct {
  title: string;
  img: string;
  description: string;
  price: number;
  duration: string;
  summary: string;
  url: string
  // string: moduleTitles[]
  // arr: moduleTitles[]=[]
  // any moduleTitles: moduleTitles[]
  // [moduleTitles: string]: any;

}

@Component({
  selector: 'app-product-details-two',
  templateUrl: './product-details-two.component.html',
  styleUrls: ['./product-details-two.component.scss']
})
export class ProductDetailsTwoComponent implements OnInit {

  products : Observable<UiUxProduct[]>;
  productsCollection: AngularFirestoreCollection<UiUxProduct>;
  productDisplay: UiUxProduct | undefined;
   
  constructor(private appstore: AngularFirestore, private route: ActivatedRoute){
    this.productsCollection = this.appstore.collection<UiUxProduct>('ui-ux-products');
    this.products = this.productsCollection.valueChanges();
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.products.subscribe((data) => {
      this.route.params.subscribe((params) => {
      
        this.productDisplay = data.filter(product => product.title === params['id'])[0];
      });
    });
  }
  
  faFacebookF = faFacebookF;
  faClock = faClock;
  faMedal = faMedal;

}
