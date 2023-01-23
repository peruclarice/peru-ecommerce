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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RemoveFromCartComponent } from './components/orders/product/remove-from-cart/remove-from-cart.component';
import { CollectionOneComponent } from './components/marketplace/product-collections/collection-one/collection-one.component';
import { CollectionTwoComponent } from './components/marketplace/product-collections/collection-two/collection-two.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JoinAnimationComponent } from './shared/join-animation/join-animation.component';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmVNEmrNm18PJWrh3ERinbIbBmsGCL0ys",
  authDomain: "peru-designs-ecommerce.firebaseapp.com",
  databaseURL: "https://peru-designs-ecommerce-default-rtdb.firebaseio.com",
  projectId: "peru-designs-ecommerce",
  storageBucket: "peru-designs-ecommerce.appspot.com",
  messagingSenderId: "809330476507",
  appId: "1:809330476507:web:bcc00d3053f84082c2d3fe"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

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
    BodyComponent,
    RemoveFromCartComponent,
    CollectionOneComponent,
    CollectionTwoComponent,
    PagenotfoundComponent,
    JoinAnimationComponent
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
