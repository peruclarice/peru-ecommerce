import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilsService } from '../http-utils.service';
import { UrlsService } from '../urls.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient, 
    private url: UrlsService, 
    private httpUtils: HttpUtilsService
    ) {}

  login(authData: any) {
    return this.httpUtils.createUrl(this.url.LOGIN_ENDPOINT, JSON.stringify(authData));
  }
}
