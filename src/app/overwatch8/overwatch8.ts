import { Component, signal, inject } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'overwatch8',
  styleUrl: './overwatch8.css',
  templateUrl: './overwatch8.html',
})
export class Overwatch8 {
  private supabaseService = inject(SupabaseService);

  msg_type = 0;
  msg = signal("");

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
    this.supabaseService.deleteTableData("Products", this.selected_prod);

    this.msg_type = 1;
    this.msg.set("Done!");
    await this.supabaseService.load_products();
    this.type_changed();
  }
}
