import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Metoda do pobierania danych z tabeli
  async getTableData(tableName: string) {
    const { data, error } = await this.supabase
      .from(tableName)
      .select('*');

    if (error) {
      console.error('Błąd podczas pobierania danych:', error.message);
      throw error;
    }

    return data;
  }
}
