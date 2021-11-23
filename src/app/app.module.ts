import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {FormsModule} from '@angular/forms';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {SidebarLeftComponent} from './sidebar-left/sidebar-left.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2OrderModule} from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    SidebarLeftComponent,
    FooterComponent,
    ProductListComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NoopAnimationsModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
