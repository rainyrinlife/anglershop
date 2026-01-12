import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header>
    <nav>
    <ul>
    <li><span class="logo"><a href="#"><img src="../assets/angler.png" alt="Logo">Anglerhead</a></span></li>  
    <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Workshops</a></li>
      <li><a href="#">News & Events</a></li>
      <li><a href="#">Contact</a></li>
    
    <span class="cart">
      
    <li>Cart<span class="cart-icon"><img src="../assets/grocery-store.png" alt="Cart"></span>{{current.price}}</li>
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
