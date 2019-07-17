import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsEditComponent } from '../products-edit/products-edit.component';
import { timeout } from 'q';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../app.component.css', './products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private titleService: Title,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  private products: any;
  private productSel: any;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    let observable = this._httpService.getProducts();
    observable.subscribe((data: any) => {
      this.products = data;
    });
  }

  delete(id){
    let observerable = this._httpService.deleteProduct(id);
    observerable.subscribe(() => {
      this._router.navigate(["/products"]);
    });
  }

  getProductInfo(product: any){
    let observable = this._httpService.getProduct(product._id);
    observable.subscribe(() => {

    })
    // setTimeout( () => { this.productSel = product; }, 2000);
  }

  // disableProductSel(){
  //   this.productSel = "";
  // }
}
