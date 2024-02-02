import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsTwoComponent } from './components/marketplace/product-details-two/product-details-two.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';
import { ProductListComponent } from './components/marketplace/product-list/product-list.component';
import { CartComponent } from './components/orders/cart/cart.component';
import { OrderHistoryComponent } from './components/orders/order-history/order-history.component';
import { CheckoutPaymentComponent } from './components/transactions/checkout-payment/checkout-payment.component';
import { AuthGuard } from './guards/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
    
    
    {path: '', 
    component: HomeComponent,
    children: [
        {path: '', component: BodyComponent},
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', component: ProductDetailsComponent},
        {path: 'ui-ux-products/:id', component: ProductDetailsTwoComponent},
        {path: 'ui', component: ProductDetailsTwoComponent},
        {path: 'login', component:LoginComponent},
        {path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard]},
        {path: 'gsap-test', component: CheckoutPaymentComponent},
        {path: 'portfolio', component: PortfolioComponent}
    ]},

    {path: 'cart', component: CartComponent},

    // {path: '/not-found', component: PagenotfoundComponent},
    // Wild card 404 route
    {path: '**', component: PagenotfoundComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }