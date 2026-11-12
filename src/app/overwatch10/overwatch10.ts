import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'overwatch10',
  styleUrl: './overwatch10.css',
  templateUrl: './overwatch10.html',
})
export class Overwatch10 {
  private readonly supabaseService = inject(SupabaseService);

  msg_type = 0;
  msg = signal("");

  selected_prod = -1;

  selected = () => this.supabaseService.sales().find(x => x.id == this.selected_prod);

  async send_request() {
    console.warn(this.selected_prod);
    this.supabaseService.deleteTableData("Products", this.selected_prod);

    this.msg_type = 1;
    this.msg.set("Done!");
    await this.supabaseService.load_products();
  }
}
