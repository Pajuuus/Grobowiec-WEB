import { Component, inject, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { DaneService } from '../services/dane';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private supabaseService = inject(SupabaseService);
  private daneService = inject(DaneService);

  products = this.supabaseService.products;
  sortType = 'random';
  minPrice = 0;
  maxPrice = 999999.99;


  setPriceFilter(min: any, max: any) {
    this.minPrice = 0;
    this.maxPrice = 999999.99;
    if (min){
      this.minPrice = min;
    }
    if (max){
      this.maxPrice = max;
    }
  }
  sorting() {
    var x: any[] = [];

    if (this.sortType == 'growing') {
      x = this.supabaseService.products().toSorted((a, b) => a.price - b.price);
    }
    if (this.sortType == 'shrinking') {
      x = this.supabaseService.products().toSorted((a, b) => b.price - a.price);
    }
    if (this.sortType == 'random') {
      x = this.supabaseService.products().toSorted(() => Math.random() - 0.5);
    }

    this.products.set(x);
  }


  filterAdd(id: number) {
    for (var property of this.filter) {
      if (property.id == id) {
        property.checked = !property.checked;
      }
    }
  }

  filtering(produkt: any[]) {
    for (var prop of this.filter) {
      if (produkt.includes(prop.name) && prop.checked == false) {
        return false;
      }
    }
    return true;
  }

  filter: any[] = [
    { id: 1, name: "wkład oleisty", checked: true },
              { id: 2, name: "wkład elektryczny", checked: true },
              { id: 3, name: "wkład parafinowy", checked: true },
              { id: 4, name: "wkład solarny", checked: true },
              { id: 5, name: "krótko palący 48h", checked: true },
              { id: 6, name: "długo palący 72h", checked: true },
              { id: 7, name: "całoroczny", checked: true },
              { id: 8, name: "wielorazowy", checked: true },
              { id: 9, name: "szklany", checked: true },
              { id: 10, name: "plastikowy", checked: true },
              { id: 11, name: "ceramiczny", checked: true },
              { id: 12, name: "metalowy", checked: true },
              { id: 13, name: "kamienny", checked: true },
              { id: 14, name: "Rozmiar - XS", checked: true },
              { id: 15, name: "Rozmiar - S", checked: true },
              { id: 16, name: "Rozmiar - M", checked: true },
              { id: 17, name: "Rozmiar - L", checked: true },
              { id: 18, name: "Rozmiar - XL", checked: true },
              { id: 19, name: "Rozmiar - XXL", checked: true },
              { id: 20, name: "Rozmiar - 3XL", checked: true },
              { id: 21, name: "dziecięcy", checked: true },
              { id: 22, name: "standardowy", checked: true },
              { id: 23, name: "pojedynczy", checked: true },
              { id: 24, name: "podwójny", checked: true },
              { id: 25, name: "rodzinny", checked: true },
              { id: 26, name: "sosnowy", checked: true },
              { id: 27, name: "dębowy", checked: true },
              { id: 28, name: "olchowy", checked: true },
              { id: 29, name: "brzozowy", checked: true },
              { id: 30, name: "machoniowy", checked: true },
              { id: 31, name: "orzechowy", checked: true },
              { id: 32, name: "palesandrowy", checked: true },
              { id: 33, name: "kokobolo", checked: true },
              { id: 34, name: "kartonowe", checked: true },
              { id: 35, name: "włoski", checked: true },
              { id: 36, name: "polski", checked: true },
              { id: 37, name: "amerykański (beznadziejny)", checked: true },
              { id: 38, name: "rzeźbiony", checked: true },
              { id: 39, name: "satyna", checked: true },
              { id: 40, name: "atłas", checked: true },
              { id: 41, name: "bawełna", checked: true },
              { id: 42, name: "len", checked: true },
              { id: 43, name: "welur", checked: true },
              { id: 44, name: "folia bąbelkowa", checked: true },
              { id: 45, name: "Rozmiar - XS", checked: true },
              { id: 46, name: "Rozmiar - S", checked: true },
              { id: 47, name: "Rozmiar - M", checked: true },
              { id: 48, name: "Rozmiar - L", checked: true },
              { id: 49, name: "Rozmiar - XL", checked: true },
              { id: 50, name: "Rozmiar - XXL", checked: true },
              { id: 51, name: "Rozmiar - 3XL", checked: true },
              { id: 52, name: "sztuczny", checked: true },
              { id: 53, name: "żywy cięty", checked: true },
              { id: 54, name: "żywy doniczkowy", checked: true },
              { id: 55, name: "suszony", checked: true },
              { id: 56, name: "chryzantemy", checked: true },
              { id: 57, name: "róże", checked: true },
              { id: 58, name: "lilie", checked: true },
              { id: 59, name: "kalie", checked: true },
              { id: 60, name: "goździki", checked: true },
              { id: 61, name: "storczyki", checked: true },
              { id: 62, name: "mleczyki", checked: true },
              { id: 63, name: "mieczyki", checked: true },
              { id: 64, name: "gerbery", checked: true },
              { id: 65, name: "hortensje", checked: true },
              { id: 66, name: "wrzosy", checked: true },
              { id: 67, name: "zieleń iglasta", checked: true },
              { id: 68, name: "czarnuszka", checked: true },
              { id: 69, name: "maki", checked: true },
              { id: 70, name: "słoneczniki", checked: true },
              { id: 71, name: "Rozmiar - XS", checked: true },
              { id: 72, name: "Rozmiar - S", checked: true },
              { id: 73, name: "Rozmiar - M", checked: true },
              { id: 74, name: "Rozmiar - L", checked: true },
              { id: 75, name: "Rozmiar - XL", checked: true },
              { id: 76, name: "Rozmiar - XXL", checked: true },
              { id: 77, name: "Rozmiar - 3XL", checked: true },
              { id: 78, name: "grobowcowy", checked: true },
              { id: 79, name: "granitowy", checked: true },
              { id: 80, name: "marmurowy", checked: true },
              { id: 81, name: "piaskowcowy", checked: true },
              { id: 82, name: "bazaltowy", checked: true },
              { id: 83, name: "sjenitowy", checked: true },
              { id: 84, name: "lastrykowy", checked: true },
              { id: 85, name: "kortenowy", checked: true },
              { id: 86, name: "czarny", checked: true },
              { id: 87, name: "szary", checked: true },
              { id: 88, name: "biały", checked: true },
              { id: 89, name: "brązowy", checked: true },
              { id: 90, name: "czerwony", checked: true },
              { id: 91, name: "zielony", checked: true },
              { id: 92, name: "niebieski", checked: true },
              { id: 93, name: "polerowany", checked: true },
              { id: 94, name: "płomieniowany", checked: true },
              { id: 95, name: "szczotkowany", checked: true },
              { id: 96, name: "łupany", checked: true },
              { id: 97, name: "tradycyjny", checked: true },
              { id: 98, name: "nowoczesny", checked: true },
              { id: 99, name: "minimalistyczny", checked: true }
    ];

}
