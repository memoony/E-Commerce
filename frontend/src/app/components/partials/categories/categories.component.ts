import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories?: Category[];

  constructor(private productService: ProductService) {
    this.getAllCategories();
  }

  ngOnInit(): void {}

  //* Tüm kategorileri getiren metot.
  getAllCategories() {
    this.productService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
