import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';

@Component({
  selector: 'header-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css'
})
export class HeaderBar implements OnInit {
  items: any[] = [];
  loading = true;

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    try {
      this.items = await this.supabaseService.getTableData('Products');
    } catch (error) {
      console.error('Nie udało się załadować danych');
    } finally {
      this.loading = false;
    }
  }
}
