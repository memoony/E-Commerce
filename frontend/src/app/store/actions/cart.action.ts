import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models/Product';

//* Sepete ürün eklemek için tanımlanan action.
export const addProduct = createAction('Add Product', props<Product>());

//* Sepetten tek bir ürün silmek için tanımlanan action.
export const removeProduct = createAction('Remove Product', props<Product>());

//* Tüm sepeti temizlemek için tanımlanan action.
export const clearCart = createAction('Clear Cart');
