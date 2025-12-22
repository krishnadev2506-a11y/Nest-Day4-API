import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor(private http: HttpClient)  { }
   getFakeStoreData()
    {
      return this.http.get('https://fakestoreapi.com/products');
    }
}



