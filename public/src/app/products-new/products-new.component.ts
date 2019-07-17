import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['../app.component.css', './products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private titleService: Title,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  private message: any;

  ngOnInit() {
    this.titleService.setTitle("Create");
  }

  submitNewProduct(Product){
    let observable = this._httpService.createProduct(Product);
    observable.subscribe((data: any) =>{
      if (data.message){
        console.log("products-new.component.ts: ", data.message);
        this.message = data;
      }else{
        this._router.navigate(["/products"]);
      }
    });
  }

}
