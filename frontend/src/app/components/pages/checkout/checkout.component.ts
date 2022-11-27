import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';
import {
  ProductGroup,
  selectGroupedCartEntries,
  selectTotalPrice,
} from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  order: Order = new Order();

  products: any[] = [];
  quantity = 0;
  totalPrice = 0;

  checkoutForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    //* Store'dan sepete eklenen ürünlere (selectGroupedEntries) subscribe olunur.
    //* forEach ile dönülerek ProductGroup içerisindeki her bir product, products listesine aktarılır.
    this.store.select(selectGroupedCartEntries).subscribe((cart$) => {
      this.products = cart$;
    });

    //* Store'dan totalPrice'a subscribe olunur ve alınan totalPrice bilgisi totalPrice değişkenine aktarılır.
    this.store.select(selectTotalPrice).subscribe((totalPrice$) => {
      this.totalPrice = totalPrice$;
    });

    this.order.products = this.products;

    this.order.totalPrice = this.totalPrice;
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    let { name, address } = this.userService.currentUser;

    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required],
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning(
        'Lütfen tüm alanları doldurunuz!',
        'Geçersiz Giriş!'
      );
      return;
    }

    if (!this.order.addressLatLng) {
      this.toastrService.warning(
        'Lütfen haritadan konumunuzu seçiniz!',
        'Geçersiz Konum!'
      );
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    this.toastrService.success(
      'Ödeme işlemi başarılı bir şekilde gerçekleşti!',
      'Sipariş Alındı!'
    );

    const orderJson = JSON.stringify(this.order);
    localStorage.setItem('Order', orderJson);
  }
}
