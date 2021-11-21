import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Router} from '@angular/router';
import {Category} from '../../category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: Category = {};

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(formCreateCategory) {
    this.categoryService.create(formCreateCategory.value).subscribe((data) => {
      this.category = data;
      this.router.navigate(['/categories']);
    });
  }
}
