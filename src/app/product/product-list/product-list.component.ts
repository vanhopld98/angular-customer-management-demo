import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe((data: any) => {
      this.products = data.content;
    });
  }

  findProductById(id: number) {
  }

  findNameInModal(id: number) {
  }

  submitDelete() {
  }
}
