import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = []; //* Sepette birden fazla ürün olabileceğinden dolayı; CartItem türünde bir array tanımlandı.
  totalCount: number = 0; //* Toplam adet.
  totalPrice: number = 0; //* Toplam fiyat.
}
