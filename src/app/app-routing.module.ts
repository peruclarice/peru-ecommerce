import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';
import { ProductListComponent } from './components/marketplace/product-list/product-list.component';

const routes: Routes = [
    {path: '', component: BodyComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailsComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }