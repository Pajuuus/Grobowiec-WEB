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
  huj = signal("");

  constructor(private supabaseService: SupabaseService, public daneService: DaneService) {}

  async ngOnInit() {
      const data = await this.supabaseService.getTableData('Products');
      this.products.set(data);
  }

  jaja() {
    this.huj.set("value");
  }
}
