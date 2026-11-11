import { Component, inject, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'overwatch4',
  styleUrl: './overwatch4.css',
  templateUrl: './overwatch4.html',
})
export class Overwatch4 implements OnInit {
  private readonly supabaseService = inject(SupabaseService);

  sales = signal<any[]>([]);

  active_sale_id = 0;
  image_src = signal("");

  constructor() {
    this.sales = this.supabaseService.sales;
  }

  async ngOnInit() {
    this.change_sale(0);
  }

  change_sale(id: number) {
    this.active_sale_id = id;
    const sale = this.sales().find(x => x.id == id);

    this.image_src.set(sale.image_path);
  }

  next_sale() {
    var id = this.active_sale_id + 1;

    if (id >= this.sales().length) {
      id = 0;
    }

    this.change_sale(id);
  }

  prev_sale() {
    var id = this.active_sale_id - 1;

    if (id < 0) {
      id = this.sales().length - 1;
    }

    this.change_sale(id)
  }
}
