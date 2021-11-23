import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {};
  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(pramMap => {
      this.id = +pramMap.get('id');
    });
  }

  ngOnInit() {
    this.getAllCategories();
    this.findProductById();
  }

  findProductById() {
    this.productService.findById(this.id).subscribe(data => {
      this.product = data;
    });
  }

  getAllCategories() {
    this.categoryService.findAll().subscribe((data: any) => {
      this.categories = data.content;
    });
  }

  submitEdit(formEditProduct) {
    this.product = formEditProduct.value;
    this.product.category = {
      id: this.product.category
    };
    this.productService.update(this.id, this.product).subscribe(() => {
      this.router.navigate(['/products']);
      this.sweetAlertSuccess();
    });
  }

  sweetAlertSuccess() {
    Swal.fire({
      toast: true,
      position: 'top-right',
      icon: 'success',
      titleText: 'Cập Nhật Thành Công',
      showConfirmButton: false,
      timer: 3000
    });
  }
}
