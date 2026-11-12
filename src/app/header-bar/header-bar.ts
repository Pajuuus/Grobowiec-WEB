import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';
import { DaneService } from '../services/whenimechainasuma';

@Component({
  selector: 'header-bar',
  imports: [CommonModule],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css'
})
export class HeaderBar {
  private supabaseService = inject(SupabaseService);
  private daneService = inject(DaneService);

  CategoryView = 1;
  OtherView = 0;

  categoryView(x = 1) {
    this.CategoryView = x;
  }
  otherChange(x = 0) {
    this.OtherView = x;
  }

  search(x = '') {
    this.daneService.search_prompt.set(x);
  }
}
