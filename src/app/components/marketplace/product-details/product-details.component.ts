import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/service/network-calls/product-api.service';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  faFacebookF = faFacebookF;
  faClock = faClock;
  faMedal = faMedal;
  
  products = [];

  constructor(
    private productApiService: ProductApiService
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productApiService.getProducts().subscribe((response: any) => {
      this.products = response.products;
      console.log(this.products[0]);
    });
  }
}
