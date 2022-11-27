import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    //* Tüm metotlara ayrı ayrı subscribe olmak kod kalabalığı yapacağından dolayı; local variable olarak Observable tipinde ilgili değişken tanımlandı.
    let productsObservable: Observable<Product[]>;

    activatedRoute.params.subscribe((params) => {
      //* Eğer parametre olarak bir arama terimi var ise, arama terimine göre ürünleri getirir.
      if (params.searchTerm) {
        productsObservable = this.productService.getProductsBySearchTerm(
          params.searchTerm
        );
      }
      //* Eğer parametre olarak bir kategori var ise, kategoriye göre ürünleri getirir.
      else if (params.category) {
        productsObservable = this.productService.getProductsByCategory(
          params.category
        );
      }
      //* Parametre olarak hiçbir şey yok ise, bu durumda tüm ürünleri getirir.
      else {
        productsObservable = this.productService.getAllProducts();
      }

      //* Tüm metotlar için local variable olarak tanımlanan "productsObservable" değişkenine 1 kez subscribe olmak yeterli olacaktır.
      productsObservable.subscribe((data) => {
        this.products = data;
      });
    });
  }

  ngOnInit(): void {}
}
