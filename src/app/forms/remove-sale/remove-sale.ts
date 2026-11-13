import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'remove-sale',
  styleUrl: './remove-sale.css',
  templateUrl: './remove-sale.html',
})
export class RemoveSale {
  private readonly supabaseService = inject(SupabaseService);

  selected_prod = -1;

  selected = () => this.supabaseService.sales().find(x => x.id == this.selected_prod);

  async send_request() {
    this.supabaseService.deleteTableData("products", this.selected_prod);

    alert("Done!");
    await this.supabaseService.load_products();
  }
}
