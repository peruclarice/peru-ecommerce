import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }
  LOGIN_ENDPOINT = environment.baseUrl + 'auth.login'
  GET_PRODUCTS_ENDPOINT = environment.baseUrl + 'products'
}
