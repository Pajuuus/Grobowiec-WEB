import { Component, inject, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'sales-banner',
  styleUrl: './sales-banner.css',
  templateUrl: './sales-banner.html',
})
export class SalesBanner implements OnInit {
  private readonly supabaseService = inject(SupabaseService);

  active_sale_id = 0;
  image_src = signal("");

  async ngOnInit() {
    await this.supabaseService.load_sales();
    this.change_sale(0);
  }

  change_sale(id: number) {
    this.active_sale_id = id;
    const sale = this.supabaseService.sales().find(x => x.id == id);

    this.image_src.set(sale.image_path);
  }

  next_sale() {
    const sale = this.supabaseService.sales().find(x => x.id > this.active_sale_id);

    if (sale) {
      this.change_sale(sale.id);
    } else {
      this.change_sale(0);
    }
  }

  prev_sale() {
    const sale = this.supabaseService.sales().findLast(x => x.id < this.active_sale_id);

    var x;

    try {
      x = sale.id;
    } catch (error) {
      x = this.supabaseService.sales().findLast(x => true).id;
    } finally {
      this.change_sale(x)
    }
  }
}
