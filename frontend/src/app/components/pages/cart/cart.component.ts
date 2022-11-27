import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, removeProduct } from 'src/app/store/actions/cart.action';
import {
  ProductGroup,
  selectCountProducts,
  selectGroupedCartEntries,
  selectTotalPrice,
} from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$!: Observable<ProductGroup[]>;
  totalCount$!: Observable<number>;
  totalPrice$!: Observable<number>;

  cart: any;

  constructor(private store: Store) {
    //* Store'dan gelen bilgi cart$ değişkenine atanır.
    this.cart$ = store.select(selectGroupedCartEntries);

    //* Sonrasında observable olan bu cart$ değişkenine subscribe olunarak data cart değişkenine aktarılır.
    this.cart$.subscribe((data) => {
      this.cart = data;
    });

    this.totalCount$ = store.select(selectCountProducts);
    this.totalPrice$ = store.select(selectTotalPrice);
  }

  ngOnInit(): void {}

  //* Sepete ürün ekleme. Eklenecek ürün addProduct action'ına gönderilir ve initialState güncellenir.
  addProduct(entry: any) {
    this.store.dispatch(addProduct(entry.product));
  }

  //* Sepetten ürün silme. Silinecek ürün removeProduct action'ına gönderilir ve initialState güncellenir.
  removeFromCart(entry: any) {
    this.store.dispatch(removeProduct(entry.product));
  }
}
