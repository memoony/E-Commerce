import {
  ActionReducer,
  createFeatureSelector,
  createSelector,
  INIT,
  UPDATE,
} from '@ngrx/store';
import { Product } from 'src/app/shared/models/Product';

export interface ProductGroup {
  product: Product;
  quantity: number;
}

//* Eklenen ürünlerin toplam sayısını hesaplayan selector.
export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.length;
  }
);

//* Sepete eklenen ürünlerin toplam fiyatını hesaplayan selector.
export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    var totalPrice = 0;
    state.forEach((p) => (totalPrice += p.price));

    return totalPrice;
  }
);

//* Sepete eklenen ürünleri gruplayan selector.
export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    var map: Map<string, ProductGroup> = new Map();

    state.forEach((p) => {
      if (map.get(p.id)) {
        (map.get(p.id) as ProductGroup).quantity++;
      } else {
        map.set(p.id, { product: p, quantity: 1 });
      }
    });

    const sortedMap = new Map([...map.entries()].sort());

    return Array.from(sortedMap.values());
  }
);

//* Action, Reducer'a gitmeden önce yapılacak eylemin ne tür bir eylem olduğu kontrol edilir.
//* Eğer bu bir başlatma (init) veya güncelleme (update) işlemiyse, state localStorage'dan alınır.
//* Diğer tüm durumlarda ise, Action asıl Reducer'a gönderilir ve veri local Storage'a kaydedilerek yeni state geriye döner.
export const metaReducerCartLocalStorage = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem('Cart');

      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('Cart');
        }
      }
    }

    const nextState = reducer(state, action);
    localStorage.setItem('Cart', JSON.stringify(nextState));

    return nextState;
  };
};
