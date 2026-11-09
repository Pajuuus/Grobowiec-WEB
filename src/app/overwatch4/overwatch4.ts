import { Component, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'overwatch4',
  styleUrl: './overwatch4.css',
  templateUrl: './overwatch4.html',
  standalone: true,
})
export class Overwatch4 implements OnInit {
    sales = signal<any[]>([]);
    loading = true;

  active_sale_id = 0;

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
    }
}
