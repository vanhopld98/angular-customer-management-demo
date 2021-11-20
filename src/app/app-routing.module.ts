import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CategoryListComponent} from './category/category-list/category-list.component';


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
    path: 'categories',
    component: CategoryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
