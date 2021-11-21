import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.findAll().subscribe((data: any) => {
      this.categories = data.content;
    });
  }

  submitDelete() {
  }

  findNameInModal(id) {
  }

  findCategoryById(id) {
  }
}
