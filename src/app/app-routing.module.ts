import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListComponent,
  },
  {
    path: 'customers/create',
    component: CustomerCreateComponent
  },
  {
    path: 'customers/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categories/edit/:id',
    component: CategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
