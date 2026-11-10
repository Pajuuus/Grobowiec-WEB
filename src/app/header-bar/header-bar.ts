import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';
import { DaneService } from '../services/whenimechainasuma';

@Component({
  selector: 'header-bar',
  imports: [CommonModule],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css'
})
export class HeaderBar implements OnInit {
  CategoryView = 1;
  OtherView = 0;

  categoryView(x = 1) {
    this.CategoryView = x;
  }
  otherChange(x = 0) {
    this.OtherView = x;
  }

  sales = signal<any[]>([]);

  constructor(private supabaseService: SupabaseService, public daneService: DaneService) {}

  async ngOnInit() {
      const data = await this.supabaseService.getTableData('Sales');
      this.sales.set(data);
  }

    wyslij(x = '') {
      this.daneService.zmienna.set(x);
    }
  }
