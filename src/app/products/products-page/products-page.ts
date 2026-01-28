import { Component, OnInit } from '@angular/core';
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
  products: Product[] = [];
  categoryTitle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('productCategory');
        //TODO: Fetch products based on category from a service
        //this.products currently is a placeholder
        this.categoryTitle = "Fishing Rods";
        this.products = [
          {
            id: '1',
            name: 'Fishing Rod',
            description: 'A high-quality fishing rod.',
            price: 99.99,
            imageUrl: 'assets/images/fishing-rod.jpg',
            category: "Fishing Rods"
          }];
      });
}
}
