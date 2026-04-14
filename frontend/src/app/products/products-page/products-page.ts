import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';

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
  service = inject(ProductsService);

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('productCategory');
      this.categoryTitle = '';
      this.products = [];
      this.service.getCategoryNameByHandle(category || null)
        .then(categoryData => {
          if (categoryData && categoryData.name) {
            this.categoryTitle = categoryData.name;
          }
        })
        .catch(err => {
          console.error('Error fetching category name:', err);
        });
      this.service.getItemsByCategory(category)
        .then(data => {
          this.products = data || [];
        })
        .catch(err => {
          console.error('Error fetching products:', err);
        });
    });
}
}
