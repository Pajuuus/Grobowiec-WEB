import { Component, inject, OnInit, signal } from '@angular/core';
import { DaneService } from '../services/dane';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'product-viewer',
  styleUrl: './product-viewer.css',
  templateUrl: './product-viewer.html',
})
export class ProductViewer {
  daneService = inject(DaneService);
  supabaseService = inject(SupabaseService);

  name = "";
  desc = "";
  price = 9999.99;
  in_stop = 0;
  props = [];
  src = "";

  constructor() {
    const found = this.supabaseService.products().find(x => x.id == this.daneService.selected_product());

    this.name = found.name;
    this.desc = found.description;
    this.src = found.image;
  }
}
