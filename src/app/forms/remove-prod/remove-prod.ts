import { Component, signal, inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'remove-prod',
  styleUrl: './remove-prod.css',
  templateUrl: './remove-prod.html',
})
export class RemoveProd {
  private supabaseService = inject(SupabaseService);

  type = "";
  filtered = signal<any[]>([]);
  selected_prod = -1;

  type_changed() {
    const value = this.supabaseService.products().filter(x => x.type == this.type);
    this.filtered.set(value);
    this.selected_prod = -1;
  }

  selected = () => this.filtered().find(x => x.id == this.selected_prod);

  async send_request() {
    console.warn(this.selected_prod);
    this.supabaseService.deleteTableData("products", this.selected_prod);

    await this.supabaseService.load_products();
    this.type_changed();
    alert("Done!");
  }
}
