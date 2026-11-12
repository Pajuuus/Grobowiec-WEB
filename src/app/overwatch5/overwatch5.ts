import { Component, inject, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { DaneService } from '../services/whenimechainasuma';

@Component({
  imports: [],
  selector: 'overwatch5',
  styleUrl: './overwatch5.css',
  templateUrl: './overwatch5.html',
})
export class Overwatch5 {
  private supabaseService = inject(SupabaseService);
  private daneService = inject(DaneService);

  sorting(sortType = 'random') {
    if(sortType == 'growing'){
      this.supabaseService.products.update(x => x.toSorted((a, b) => a.price - b.price));
    }
    if (sortType) {
      this.supabaseService.products.update(x => x.toSorted((a, b) => b.price - a.price));
    }
  }
}
