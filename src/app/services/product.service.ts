import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';
  
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products : Product[] = [
  //   new Product(1, 'Running shoes', 'Running shoes', 100),
  //   new Product(2, 'Light weight shoes', 'Light weight shoes', 101),
  //   new Product(3, 'Training & Gym Shoes', 'Training & Gym Shoes', 102, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqIh1X6lQ3KueC7czIvWPx6LLRKVSPabSI5A&usqp=CAU'),
  //   new Product(4, 'Star world watch', 'Star world watch', 103, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4GYY6cHIcR1Cp8G7ZFHgLPCtLT8aJGgHU_Q&usqp=CAU'),
  //   new Product(5, 'Spax Waterproof watch', 'Spax Waterproof watch', 104, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2EU39Ul8XGvFnJcLW1JMBneO8ZVhlHCIFHQ&usqp=CAU'),
  //   new Product(6, 'Seiko sports watch', 'Seiko sports watch', 105, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWN-SccGgONzm-lI_NHFPnCrsVi4Cueax7tg&usqp=CAU'),    
  // ]

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    
    return this.http.get<Product[]>(productsUrl);
  }
}



// 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv3h0cm97NQ4HCFgal2RfCqoF2B5yBPtl3Zw&usqp=CAU'
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHt1B0-jM-uzZvDC2C4myRrfMlzRBl7AmBdw&usqp=CAU'