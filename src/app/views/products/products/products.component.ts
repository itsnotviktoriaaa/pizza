import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            // this.loading = false;
            this.products = data;
            console.log('next');
          },
          error: (error) => {
            // this.loading = false;
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      );
  }

}
