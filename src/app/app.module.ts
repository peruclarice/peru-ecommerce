import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ProductListComponent } from './components/marketplace/product-list/product-list.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';
import { AddToCartComponent } from './components/marketplace/add-to-cart/add-to-cart.component';
import { CartComponent } from './components/marketplace/cart/cart.component';
import { CheckoutComponent } from './components/marketplace/checkout/checkout.component';
import { OrderHistoryComponent } from './components/marketplace/order-history/order-history.component';
import { TransactionHistoryComponent } from './components/marketplace/transaction-history/transaction-history.component';
import { MarketplaceComponent } from './components/marketplace/marketplace/marketplace.component';
import { CheckoutPaymentComponent } from './components/transactions/checkout-payment/checkout-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AddToCartComponent,
    CartComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    TransactionHistoryComponent,
    MarketplaceComponent,
    CheckoutPaymentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
