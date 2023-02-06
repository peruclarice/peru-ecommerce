import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlsService } from '../urls.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient,
    private url: UrlsService
  ) { }

  getProducts() {
    return this.http.get(this.url.GET_PRODUCTS_ENDPOINT);
  }
  getProductsById() {
    return this.http.get(this.url.GET_PRODUCTS_ENDPOINT + 'id');
  }
}
