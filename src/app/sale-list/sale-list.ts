import { Component, inject, signal } from '@angular/core';
import { DaneService } from '../services/dane';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'sale-list',
  styleUrl: './sale-list.css',
  templateUrl: './sale-list.html',
})
export class SaleList {
  daneService = inject(DaneService);
  supabaseService = inject(SupabaseService)

  selected = () => this.supabaseService.sales().find(x => x.id == this.daneService.selected_sale());
  product = (id: number) => this.supabaseService.products().find(x => x.id == id);

  clicked(id: number) {
    this.daneService.selected_product.set(id);
    this.daneService.search_prompt.set("product")
  }
}
