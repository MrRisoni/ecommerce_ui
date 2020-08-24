import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  constructor(private http: HttpClient) { }


  getProductDetails(): Observable<any> {
    console.log(environment.api_url + 'api/product');
    return this.http.get<any>(environment.api_url + 'api/product/2');
  }
}
