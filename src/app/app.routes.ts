import { Routes } from "@angular/router";
import { Products } from "./products/products";
import { Home } from "./home/home";

export const routes: Routes = [ 
     { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2. Standard routes
  { path: 'home', component: Home },
  { path: 'products', component: Products },

];