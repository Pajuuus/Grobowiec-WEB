import { Component, inject, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { DaneService } from '../services/whenimechainasuma';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private supabaseService = inject(SupabaseService);
  private daneService = inject(DaneService);

  products = this.supabaseService.products;
  sortType = 'random';
  minPrice = 0;
  maxPrice = 999999.99;

  setPriceFilter(min: any, max: any) {
    this.minPrice = 0;
    this.maxPrice = 999999.99;
    if (min){
      this.minPrice = min;
    }
    if (max){
      this.maxPrice = max;
    }
  }
  sorting() {
    var x: any[] = [];

    if (this.sortType == 'growing') {
      x = this.supabaseService.products().toSorted((a, b) => a.price - b.price);
    }
    if (this.sortType == 'shrinking') {
      x = this.supabaseService.products().toSorted((a, b) => b.price - a.price);
    }
    if (this.sortType == 'random') {
      x = this.supabaseService.products().toSorted(() => Math.random() - 0.5);
    }

    this.products.set(x);
  }
}
