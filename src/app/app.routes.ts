import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { products } from './pages/products/products';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
{
    path:'', component:Home

},
{
    path:'Store', component:Menu

},
{
    path:'Contact', component:Contact

},
{
    path:'products/:id', component:products
}


];