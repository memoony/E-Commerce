import { LatLng } from 'leaflet';
import { ProductGroup } from 'src/app/store/selectors/cart.selector';

export class Order {
  id!: number;
  products!: ProductGroup[];
  totalPrice!: any;
  name!: string;
  address!: string;
  addressLatLng!: LatLng;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
