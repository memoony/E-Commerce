import { Product } from './Product';

export class CartItem {
  constructor(public product: Product) {} //* Dışarıdan ulaşılabilmesi için public olarak Product türünde bir değişken tanımlandı.
  quantity: number = 1; //* Ürünün adedi.
  price: number = this.product.price; //* Ürünün fiyatı.
}
