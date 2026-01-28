import { Routes } from "@angular/router";
import { Products } from "./products/products";
import { Home } from "./home/home";
import { Workshops } from "./workshops/workshops";
import { News } from "./news/news";
import { Contact } from "./contact/contact";
import { Cart } from "./cart/cart";
import { ProductsPage } from "./products/products-page/products-page";

export const routes: Routes = [ 
     { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2. Standard routes
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:productCategory', component: ProductsPage },
  { path: 'workshops', component: Workshops },
  { path: 'news', component: News },
  { path: 'contact', component: Contact },
  { path: 'cart', component: Cart}

];