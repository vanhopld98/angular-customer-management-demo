import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Router} from '@angular/router';
import {Product} from '../../product';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../category';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryService.findAll().subscribe((data: any) => {
      this.categories = data.content;
    });
  }

  submit(formCreateProduct) {
    this.product = formCreateProduct.value;
    if (this.product.category === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Select Category!',
      });
    }
    this.product.category = {
      id: this.product.category
    };
    this.productService.create(this.product).subscribe((data) => {
      this.product = data;
      this.router.navigate(['/products']);
      this.sweetAlertSuccess();
    });
  }

  sweetAlertSuccess() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      titleText: 'Tạo Mới Thành Công',
      showConfirmButton: false,
      timer: 3000
    });
  }
}
