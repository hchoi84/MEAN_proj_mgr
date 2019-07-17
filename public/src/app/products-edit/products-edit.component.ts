import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { timeout } from 'q';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['../app.component.css', './products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  @Input() display;
  constructor(
    private _httpService: HttpService,
    private titleService: Title,
    private _route: ActivatedRoute,
    private _router: Router,
    private productsComponent: ProductsComponent,
  ) { }

  private productId: string;
  private product: any;
  private message: any;
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.productId = params.id);
    let observerable = this._httpService.getProduct(this.productId);
    observerable.subscribe((data: any) => {
      this.product = data;
    })
  }
  
  updateProduct(){
    let observerable = this._httpService.updateProduct(this.product);
    // let observerable = this._httpService.updateProduct(this.display);
    observerable.subscribe((data: any) => {
      if (data.message){
        this.message = data;
      }else{
        this._router.navigate(["/products"]);
        // this.productsComponent.disableProductSel();
      }
    });
  }
  
  delete(id){
    let observerable = this._httpService.deleteProduct(id);
    observerable.subscribe(() => {
      this._router.navigate(["/products"]);
    });
  }
}
