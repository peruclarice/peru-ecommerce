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
import { CartComponent } from './components/orders/cart/cart.component';
import { CheckoutComponent } from './components/orders/checkout/checkout.component';
import { OrderHistoryComponent } from './components/orders/order-history/order-history.component';
import { TransactionHistoryComponent } from './components/transactions/transaction-history/transaction-history.component';
import { CheckoutPaymentComponent } from './components/transactions/checkout-payment/checkout-payment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductContainerComponent } from './components/marketplace/product-container/product-container.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { JoinCommunityComponent } from './components/join-community/join-community.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

export function playerFactory(): any {  
  return import('lottie-web');
}

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
    CheckoutPaymentComponent,
    SplashScreenComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    HeroComponent,
    ProductContainerComponent,
    AboutMeComponent,
    JoinCommunityComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
