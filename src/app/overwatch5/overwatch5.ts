import { Component, inject, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { DaneService } from '../services/whenimechainasuma';

@Component({
  imports: [],
  selector: 'overwatch5',
  styleUrl: './overwatch5.css',
  templateUrl: './overwatch5.html',
})
export class Overwatch5 implements OnInit{
  products = signal<any[]>([]);

  constructor(private supabaseService: SupabaseService, public daneService: DaneService) {}

  async ngOnInit() {
      const data = await this.supabaseService.getTableData('Products');
      this.products.set(data);
  }

  sorting(sortType = 'random') {
    if(sortType == 'growing'){
      this.products.update(x => x.toSorted((a, b) => a.price - b.price));
    }
    if (sortType) {
      this.products.update(x => x.toSorted((a, b) => b.price - a.price));
    }
  }
}
