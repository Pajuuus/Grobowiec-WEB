import { inject, Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class User {
  supabaseService = inject(SupabaseService);

  logged_in = signal(false);
  inner = signal<any>({});

  cart = signal<number[]>([]);
  priceOfCart = signal(0);

  constructor() {
    this.try_from_storage();
  }

  public async try_from_storage() {
    const phone = localStorage.getItem("phone");
    const password = localStorage.getItem("pass");

    const user = await this.supabaseService.load_user(Number(phone), String(password));

    this.inner.set(user);
    this.cart.set(user.cart);
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
    this.cart.update(y => [...y, x]);
    this.PriceOfProductsAdd();
  }

  PriceOfProductsAdd() {
    for (var id of this.cart()) {
      const prod = this.supabaseService.products().find(x => x.id == id);
      this.priceOfCart.update(x => x + prod.price);
    }

    this.cart.update(x => x.sort((a, b) => a - b));
  }
}
