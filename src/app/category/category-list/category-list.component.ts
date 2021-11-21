import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../category';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  category: Category = {};
  id;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.findAll().subscribe((data: any) => {
      this.categories = data.content;
    });
  }

  submitDelete() {
    this.categoryService.delete(this.id).subscribe(() => {
      this.getAll();
      this.sweetAlertDelete();
    });
  }

  findNameInModal() {
    this.categoryService.findById(this.id).subscribe((data) => {
      this.category = data;
      document.getElementById('name').innerHTML = this.category.name;
    });
  }

  findCategoryById(id) {
    this.id = id;
    this.findNameInModal();
  }

  sweetAlertDelete() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      titleText: 'Xóa Thành Công',
      showConfirmButton: false,
      timer: 3000
    });
  }
}
