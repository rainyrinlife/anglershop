import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header>
    <nav>
    <ul>
    <li><span class="logo"><a href="#"><img src="../assets/angler.png" alt="Logo">Anglerhead</a></span></li>  
    <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/products">Products</a></li>
      <li><a routerLink="/workshops">Workshops</a></li>
      <li><a routerLink="/news">News & Events</a></li>
      <li><a routerLink="/contact">Contact</a></li>
    
    <span class="cart">
      
    <li><a routerLink="/cart">Cart <span class="cart-icon"><img src="../assets/grocery-store.png" alt="Cart"></span>{{current.price}}</a></li>
    </span>
    </ul>
    </nav>
    </header>
  `,
  styleUrl: `header.css`,
})
export class Header {
  current = { price: 0 };
}
