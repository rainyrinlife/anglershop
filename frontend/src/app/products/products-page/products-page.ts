import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `products-page.html`,
  styleUrls: [`products-page.css`],
})
export class ProductsPage implements OnInit {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  products: Product[] = [];
  categoryTitle: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('productCategory');
        //TODO: Fetch products based on category from a service
        //this.products currently is a placeholder
        

        fetch(`http://localhost:3000/api/category/${category}`)
          .then(response => response.json())
          .then(data => {
            this.products = data;
            console.log('Fetched products:', this.products);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      });
}
}
