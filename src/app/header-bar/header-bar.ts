import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';

@Component({
  selector: 'header-bar',
  imports: [CommonModule],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css'
})
export class HeaderBar implements OnInit {
  CategoryView = 0;

  categoryView(x = 0) {
    this.CategoryView = x;
  }

  sales = signal<any[]>([]);

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
      const data = await this.supabaseService.getTableData('Sales');
      this.sales.set(data);
    }
  }
