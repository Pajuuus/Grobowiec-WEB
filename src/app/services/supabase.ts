import { Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  prop_enum = [
    "wkład oleisty",
    "wkład elektryczny",
    "wkład parafinowy",
    "wkład solarny",
    "krótko palący 48h",
    "długo palący 72h",
    "całoroczny",
    "wielorazowy",
    "szklany",
    "plastikowy",
    "ceramiczny",
    "metalowy",
    "kamienny",
    "Rozmiar - XS",
    "Rozmiar - S",
    "Rozmiar - M",
    "Rozmiar - L",
    "Rozmiar - XL",
    "Rozmiar - XXL",
    "Rozmiar - 3XL"
  ];
  type_enum = [
    "znicz",
    "trumna",
    "urna",
    "kwiaty",
    "nagrobek"
  ];

  sales = signal<any[]>([]);
  products = signal<any[]>([]);
  loading = true;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

    this.load_sales();
    this.load_products();
  }

  public async getTableData(tableName: string) {
    const { data, error } = await this.supabase
      .from(tableName)
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Błąd podczas pobierania danych:', error.message);
      throw error;
    }

    return data;
  }

  public async insertTableData(tableName: string, data: any) {
    const { error } = await this.supabase
      .from(tableName)
      .insert(data);

    if (error) {
      console.error('Błąd podczas pobierania danych:', error.message);
      throw error;
    }

    return data;
  }

  async load_sales() {
    try {
      const data = await this.getTableData('Sales');
      this.sales.set(data);
    } catch (error) {
      console.error("Database connection failed");
    } finally {
      this.loading = false;
    }
  }

  async load_products() {
    try {
      const data = await this.getTableData('Products');
      this.products.set(data);
    } catch (error) {
      console.error("Database connection failed");
    } finally {
      this.loading = false;
    }
  }
}
