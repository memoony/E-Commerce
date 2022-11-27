import { Category } from './app/shared/models/Category';
import { Product } from './app/shared/models/Product';

export const sample_products: Product[] = [
  {
    id: '1',
    name: 'Logitech G Pro X Superlight',
    price: 3000,
    description: 'Kablosuz gaming mouse.',
    categories: ['Mouse'],
    favorite: false,
    stars: 4.8,
    imageUrl: 'assets/images/product-images/product-1.png',
  },
  {
    id: '2',
    name: 'MSI GeForce RTX 3060 Ti',
    price: 15000,
    description:
      'NVIDIA`nın 2. nesil RTX mimarisi Ampere`den güç alan GeForce RTX™ 3060 Ti ve RTX 3060 en yeni oyunları sorunsuz oynamanızı sağlar.',
    categories: ['Ekran-Karti'],
    favorite: false,
    stars: 5,
    imageUrl: 'assets/images/product-images/product-2.png',
  },
  {
    id: '3',
    name: 'CORSAIR Void RGB Elite',
    price: 2500,
    description: 'Kablosuz kulaklık.',
    categories: ['Kulaklik'],
    favorite: false,
    stars: 4,
    imageUrl: 'assets/images/product-images/product-3.png',
  },
];

export const sample_categories: Category[] = [
  {
    name: 'Tümü',
    count: 6,
  },
  {
    name: 'Mouse',
    count: 1,
  },
  {
    name: 'Ekran-Karti',
    count: 1,
  },
  {
    name: 'Kulaklik',
    count: 1,
  },
];
