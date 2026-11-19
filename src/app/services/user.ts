import { inject, Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class User {
  supabaseService = inject(SupabaseService);

  password = signal("");
  phone = signal(0);
  username = signal("");
  points = signal(0);
  cart = signal<number[]>([]);
  priceOfCart = signal(0);

  AddProduct(x: number) {
    this.cart().push(x);
    this.PriceOfProductsAdd();
  }

  PriceOfProductsAdd() {
    for (var x of this.cart()) {
      for (var y of this.supabaseService.products()) {
        if (y.id == x) {
          this.priceOfCart.set(this.priceOfCart() + y.price);
        }
      }
    }
    this.cart.set([...this.cart()].sort((a, b) => a - b));
  }
}
