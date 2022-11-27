import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { CategoriesComponent } from './components/partials/categories/categories.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart.reducer';
import { metaReducerCartLocalStorage } from './store/selectors/cart.selector';
import { metaReducerUserLocalStorage } from './store/selectors/user.selector';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { MapComponent } from './components/partials/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CategoriesComponent,
    ProductDetailsComponent,
    CartComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent,
    CheckoutComponent,
    OrderItemsListComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    RatingModule, //* Ürünlerde derecelendirme (yıldız) için kullanılan modül.
    HttpClientModule, //* HTTP isteklerini gerçekleştirmek için kullanılan modül (Backend'e istek yapıp veri çekmek için).
    ReactiveFormsModule, //* "Reactive Forms" için kullanılan modül.
    ToastrModule.forRoot(), //* Uyarı mesajları için kullanılan modül.

    StoreModule.forRoot(
      {
        cartEntries: cartReducer,
      },
      {
        metaReducers: [
          metaReducerCartLocalStorage,
          metaReducerUserLocalStorage,
        ],
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
