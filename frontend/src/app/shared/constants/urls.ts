//* API istekleri için kullanılacak sabit URL.
const BASE_URL = 'http://localhost:5000';

//* Tüm ürünleri getiren metoda ait URL.
export const PRODUCTS_URL = BASE_URL + '/api/products';

//* Arama terimine göre ürünleri getiren metoda ait URL.
export const PRODUCTS_BY_SEARCH_URL = PRODUCTS_URL + '/search/';

//* Tüm kategorileri getiren metoda ait URL.
export const PRODUCTS_CATEGORIES_URL = PRODUCTS_URL + '/categories';

//* Kategoriye göre ürünleri getiren metoda ait URL.
export const PRODUCTS_BY_CATEGORY_URL = PRODUCTS_URL + '/category/';

//* Ürün ID'sine göre ilgili ürünü getiren metoda ait URL.
export const PRODUCTS_BY_ID_URL = PRODUCTS_URL + '/';

//* Kullanıcı giriş işlemi metoduna ait URL.
export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
