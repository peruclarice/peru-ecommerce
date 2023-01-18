import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/service/network-calls/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
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
