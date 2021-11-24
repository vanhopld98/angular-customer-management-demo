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
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './login/helper/auth-guard';


const routes: Routes = [
  {
    path: 'customers',
    canActivate: [AuthGuard],
    component: CustomerListComponent,
  },
  {
    path: 'customers/create',
    canActivate: [AuthGuard],
    component: CustomerCreateComponent
  },
  {
    path: 'customers/edit/:id',
    canActivate: [AuthGuard],
    component: CustomerEditComponent
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductListComponent
  },
  {
    path: 'products/create',
    canActivate: [AuthGuard],
    component: ProductCreateComponent
  },
  {
    path: 'products/edit/:id',
    canActivate: [AuthGuard],
    component: ProductEditComponent
  },
  {
    path: 'categories',
    canActivate: [AuthGuard],
    component: CategoryListComponent
  },
  {
    path: 'categories/create',
    canActivate: [AuthGuard],
    component: CategoryCreateComponent
  },
  {
    path: 'categories/edit/:id',
    canActivate: [AuthGuard],
    component: CategoryEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
