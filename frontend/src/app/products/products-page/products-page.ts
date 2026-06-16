import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `products-page.html`,
  styleUrls: [`products-page.css`],
})
export class ProductsPage implements OnInit {
  
  route = inject(ActivatedRoute);
  products = signal<Product[]>([] as Product[]);
  categoryTitle = signal('');
  service = inject(ProductsService);
  titlesignal = signal('');


  
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
