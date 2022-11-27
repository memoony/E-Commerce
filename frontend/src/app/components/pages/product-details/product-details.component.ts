import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';
import { addProduct } from 'src/app/store/actions/cart.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private store: Store
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.productService.getProductById(params.id).subscribe((data) => {
          this.product = data;
        });
      }
    });
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.store.dispatch(addProduct(product));
    this.router.navigateByUrl('/sepet');
  }
}
