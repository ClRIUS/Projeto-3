import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HamburguersComponent } from './views/menu/hamburguers/hamburguers.component';
import { BuyComponent } from './views/buy/buy.component';
import { CategoryComponent } from './views/menu/category/category.component';
import { DetailsComponent } from './views/menu/details/details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent},
    { path: 'menu', component: CategoryComponent},
    { path: 'products/:categoryId', component: HamburguersComponent }, 
    { path: 'buy', component: BuyComponent },
    { path: 'details/:productId', component: DetailsComponent },
];
