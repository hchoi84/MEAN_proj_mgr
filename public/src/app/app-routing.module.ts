import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsNewComponent } from './products-new/products-new.component';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "products", component: ProductsComponent, children: [
    { path: "edit/:id", component: ProductsEditComponent},
    { path: "new", component: ProductsNewComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
