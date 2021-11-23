        import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../category';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category = {};
  id: number;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    this.categoryService.findById(this.id).subscribe((data) => {
      this.category = data;
    });
  }

  submitEdit(formEditCategory) {
    this.categoryService.update(this.id, formEditCategory.value).subscribe(() => {
      this.router.navigate(['/categories']);
      this.sweetAlert();
    });
  }

  sweetAlert() {
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
