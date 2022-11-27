import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/models/Product';
import { addProduct, clearCart, removeProduct } from '../actions/cart.action';

//* Product türünde tanımlanan initialState; başlangıçta boş bir liste.
export const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,

  //* O anki mevcut state, boş bir dizi ile yer değiştirir.
  on(clearCart, (currentState) => []),

  //* Mevcut ürünler (product) listesinin kopyası oluşturulduktan sonra yeni eklenen ürünler gönderilir ve geriye yeni listeyi döndürür.
  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));

    entriesClone.push(product);

    return entriesClone;
  }),

  //* Mevcut ürünler (product) listesinin kopyası oluşturulduktan sonra, silinmek istenen ürün ID'sine göre bulunup foundProduct adlı değişkene aktarılır.
  //* Silinecek ürün listeden çıkartıldıktan sonra geriye yeni listeyi döndürür.
  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));

    const foundProduct = entriesClone.find((e) => e.id == product.id);

    if (foundProduct) {
      entriesClone.splice(entriesClone.indexOf(foundProduct), 1);
    }

    return entriesClone;
  })
);
