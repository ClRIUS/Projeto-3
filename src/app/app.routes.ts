import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent},
    { path: 'menu', component: MenuComponent},
];
