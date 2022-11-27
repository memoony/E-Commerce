import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ara/:searchTerm',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'kategori/:category',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'urun/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sepet',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'giris',
    component: LoginComponent,
  },
  {
    path: 'odeme',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
