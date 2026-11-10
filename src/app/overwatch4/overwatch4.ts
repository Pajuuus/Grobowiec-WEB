import { Component, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'overwatch4',
  styleUrl: './overwatch4.css',
  templateUrl: './overwatch4.html',
})
export class Overwatch4 implements OnInit {
    sales = signal<any[]>([]);
    loading = true;

    active_sale_id = 0;
    image_src = signal("");

    constructor(private supabaseService: SupabaseService) {}

    async ngOnInit() {
      try {
        const data = await this.supabaseService.getTableData('Sales');
        this.sales.set(data);
      } catch (error) {
        console.error('Nie udało się załadować danych');
      } finally {
        this.loading = false;
      }

      this.change_sale(0);
    }

    change_sale(id: number) {
      this.active_sale_id = id;
      const sale = this.sales().find(x => x.id == id);

      this.image_src.set(sale.image_path);
    }

    prev_sale() {
      var id = this.active_sale_id + 1;

      if (id >= this.sales().length) {
        id = 0;
      }

      this.change_sale(id);
    }

    next_sale() {
      var id = this.active_sale_id - 1;

      if (id < 0) {
        id = this.sales().length - 1;
      }

      this.change_sale(id)
    }
}
