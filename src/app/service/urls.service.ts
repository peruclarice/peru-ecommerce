import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  private nollaBankUrl = 'assets/json-data/nolla-bank.json';

  constructor(private http: HttpClient) { }
  
  LOGIN_ENDPOINT = environment.baseUrl + 'auth.login'
  GET_PRODUCTS_ENDPOINT = environment.baseUrl + 'products'

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.nollaBankUrl);
  }

}
