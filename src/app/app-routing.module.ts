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
import { QxpComponent } from './pages/qxp/qxp.component';
import { NollaBankComponent } from './pages/nolla-bank/nolla-bank.component';
import { SagebriefComponent } from './pages/sagebrief/sagebrief.component';
import { ElixrComponent } from './pages/elixr/elixr.component';
import { PymComponent } from './pages/pym/pym.component';
import { RegwandComponent } from './pages/regwand/regwand.component';
import { IpheroComponent } from './pages/iphero/iphero.component';
import { TrotroDiariesComponent } from './pages/trotro-diaries/trotro-diaries.component';
import { VertexPayComponent } from './pages/vertex-pay/vertex-pay.component';

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
        {path: 'portfolio', component: PortfolioComponent},
        {path: 'qxp-case-study', component: QxpComponent},
        {path: 'nolla-bank-case-study', component: NollaBankComponent},
        {path: 'sagebrief', component:SagebriefComponent},
        {path: 'elixr', component: ElixrComponent},
        {path: 'pym', component: PymComponent},
        {path: 'regwand', component: RegwandComponent},
        {path: 'iphero', component: IpheroComponent},
        {path: 'trotro-diaries', component: TrotroDiariesComponent},
        {path: 'vertex-pay', component: VertexPayComponent}
    ]},

    {path: 'cart', component: CartComponent},

    // Wild card 404 route
    {path: '**', component: PagenotfoundComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }