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
    "Rozmiar - 3XL",
    "dziedzięcy",
    "standardowy",
    "pojedyńczy",
    "podwójny",
    "rodzinny",
  ];
  prod_type_enum = [
    "znicz",
    "trumna",
    "urna",
    "kwiaty",
    "nagrobek"
  ];
  ser_type_enum = [
    "pogrzeb",
    "kremacja",
    "balsamacja",
    "promesa",
    "custom pogrzeb"
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

  public async deleteTableData(tableName: string, id: number) {
    const { error } = await this.supabase
      .from(tableName)
      .delete()
      .eq("id", id)

      if (error) {
        console.error('Błąd podczas pobierania danych:', error.message);
        throw error;
      }
  }

  public async updateTableData(tableName: string, id: number, data: any) {
    const { error } = await this.supabase
      .from(tableName)
      .update(data)
      .eq("id", id);

    if (error) {
      console.error('Błąd podczas pobierania danych:', error.message);
      throw error;
    }
  }

  public async appendTableData(tableName: string, column: string, id: number, data: number) {
    const { error } = await this.supabase
      .rpc('append_to_array', {
        table_name: tableName,
        column_name: column,
        row_id: id,
        new_item: data
      });

    if (error) {
      console.error(`Error updating ${tableName}:`, error.message);
      throw error;
    }
  }

  async load_user(phone: number, password: string) {
    const { data, error } = await this.supabase
      .from("users")
      .select("name, surname, username, points, visited")
      .eq("phone", phone)
      .eq("password", password);

    if (error) {
      console.error('Błąd podczas pobierania danych:', error.message);
      throw error;
    }

    return data[0];
  }

  async load_sales() {
    try {
      const data = await this.getTableData('sales');
      this.sales.set(data);
    } catch (error) {
      console.error("Database connection failed");
    } finally {
      this.loading = false;
    }
  }

  async load_products() {
    try {
      const data = await this.getTableData('products');
      this.products.set(data);
    } catch (error) {
      console.error("Database connection failed");
    } finally {
      this.loading = false;
    }
  }
}
