import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // dependency injection

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { }

  createProduct(Product){ return this._http.post("/products", Product); }
  getProducts(){ return this._http.get("/products"); }
  getProduct(id){ return this._http.get(`/products/${id}`); }
  updateProduct(product){ return this._http.put(`/products/${product._id}`, product); }
  deleteProduct(id){ return this._http.delete(`/products/${id}`)}
}
