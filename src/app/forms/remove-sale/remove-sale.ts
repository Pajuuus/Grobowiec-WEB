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

  selected_sale = -1;
  selected = () => this.supabaseService.sales().find(x => x.id == this.selected_sale);

  async send_request() {
    this.supabaseService.deleteTableData("sales", this.selected_sale);

    await this.supabaseService.load_sales();
    alert("Done!");
  }
}
