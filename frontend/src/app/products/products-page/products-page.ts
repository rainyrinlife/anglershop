import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `products-page.html`,
  styleUrls: [`products-page.css`],
})
export class ProductsPage implements OnInit {
  

  //Cart <ProductUUID, Quantity>
  cart = signal<Map<string, number>>(new Map());
  route = inject(ActivatedRoute);
  products = signal<Product[]>([] as Product[]);
  categoryTitle = signal('');
  service = inject(ProductsService);
  titlesignal = signal('');

addToCart(product: Product) {
  let productUUID = product.id;
  const currentCart = this.cart();
  // Check if the product is already in the cart
  // and if not increase quantity by 1


  if (currentCart.has(productUUID)) {
    if (product.stock || 0 > 0)
    {
      currentCart.set(productUUID, currentCart.get(productUUID) || 0 + 1);  
    }
  }
  else
  {
    currentCart.set(productUUID, 0);
  }
}

  
ngOnInit() {

      const categoryNameSubscription = this.service.getCategoryNameByHandle('fishing-rods')
      
      const categoryName = categoryNameSubscription.subscribe((res) => {this.categoryTitle.update(() => res?.name || 'Unknown Category')}) ;
      console.log('Category title:', this.categoryTitle);


const category = this.route.snapshot.paramMap.get('productCategory');
    this.service.getItemsByCategory(category).subscribe({
      next: (data) => {
        this.products.update(() => data as Product[]);
        console.log('Products:', this.products());
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
    console.log("over")
}
}
