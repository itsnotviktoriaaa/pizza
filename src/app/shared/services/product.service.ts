import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {map, Observable, retry, tap} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: ProductType[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + 'pizzas');
  }

  // getProducts(): Observable<ProductType[]> {
  //   let params = new HttpParams();
  //   params = params.set('extraField', 1);
  //   return this.http.get<{ data: ProductType[] }>('https://testologia.site/pizzas', {
  //     headers: new HttpHeaders({
  //       Authorization: 'auth-token'
  //     }),
  //     params: params
  //   })
  //     .pipe(
  //       tap( result => {
  //         console.log(result);
  //       }),
  //       map((result) => result.data),
  //   );
  // }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`);
  }

  createOrder(data: {product: string, address: string, phone: string}) {
    return this.http.post<{success: boolean, message?: string}>(environment.apiURL + `order-pizza`, data);
  }

}
