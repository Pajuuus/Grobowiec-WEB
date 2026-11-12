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
  selected_prod = null;

  type_changed() {
    const value = this.supabaseService.products().filter(x => x.type == this.type);
    this.filtered.set(value);
  }

  selected = () => this.filtered().find(x => x.id == this.selected_prod);

  send_request() {

  }
}
