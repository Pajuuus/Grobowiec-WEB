import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [FormsModule],
  selector: 'overwatch6',
  styleUrl: './overwatch6.css',
  templateUrl: './overwatch6.html',
})
export class Overwatch6 implements OnInit {
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

  name = "";
  desc = "";
  type = "";
  price = 9999.99;
  in_stock = 0;
  sale = null;
  props = [];
  image = "";

  sales = signal<any[]>([]);
  err_msg = signal("");

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    try {
      const data = await this.supabaseService.getTableData('Sales');
      this.sales.set(data);
    } catch (error) {
      console.error('Nie udało się załadować danych');
    }
  }

  async send_request() {
    if (this.name == "" || this.type == "" || this.price < 0 || this.in_stock < 0 || this.props.length == 0 || this.image == "") {
      this.err_msg.set("You messed something up");
    }

    await this.supabaseService.insertTableData("Products", {
      name: this.name,
      description: this.desc,
      type: this.type,
      price: this.price,
      in_stock: this.in_stock,
      sale: this.sale,
      properties: this.props,
      image: this.image
    });
  }
}
