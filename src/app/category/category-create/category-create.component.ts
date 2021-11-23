import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Router} from '@angular/router';
import {Category} from '../../category';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(formCreateCategory) {
    this.categoryService.create(formCreateCategory.value).subscribe(() => {
      this.router.navigate(['/categories']);
      this.sweetAlert();
    });
  }

  sweetAlert() {
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
