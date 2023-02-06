import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor( private http: HttpClient ) { }

  createUrl(url: string, reqBody: any) {
    return this.http.post(url, reqBody);
  }
}
