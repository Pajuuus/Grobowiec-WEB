import { inject, Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class User {
  supabaseService = inject(SupabaseService);

  logged_in = signal(false);
  inner = signal<any>({});

  cart = signal<any>({});
  priceOfCart = signal(0);

  constructor() {
    this.try_from_storage();

    this.cart.set(this.inner().cart);
  }

  public async try_from_storage() {
    const phone = localStorage.getItem("phone");
    const password = localStorage.getItem("pass");

    const user = await this.supabaseService.load_user(Number(phone), String(password));

    this.inner.set(user);
    this.logged_in.set(true);
  }

  public log_in(user: any) {
    this.inner.set(user);
    this.logged_in.set(true);
  }

  public log_out() {
    this.inner.set({});
    this.logged_in.set(false);

    localStorage.removeItem("phone");
    localStorage.removeItem("pass");
  }

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
