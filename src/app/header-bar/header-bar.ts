import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';
import { DaneService } from '../services/dane';

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

  asideBar() {
    if(this.daneService.asideBar() == true){
      this.daneService.asideBar.set(false);
      this.OtherView = 0;
    } else {
      this.daneService.asideBar.set(true);
    }
  }

  search(x = '') {
    this.daneService.search_prompt.set(x);
  }

  selected_sale(x = -1) {
    this.daneService.selected_sale.set(x);
    this.search("sale-list")
  }
}
