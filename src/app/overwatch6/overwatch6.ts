import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [FormsModule],
  selector: 'overwatch6',
  styleUrl: './overwatch6.css',
  templateUrl: './overwatch6.html',
})
export class Overwatch6 {
  private readonly supabaseService = inject(SupabaseService);

  name = "";
  desc = "";
  type = "";
  price = 9999.99;
  in_stock = 0;
  sale = null;
  props = [];
  image = "";

  sales = signal<any[]>([]);
  msg = signal("");
  msg_type = 0;

  constructor() {
    this.sales = this.supabaseService.sales;
  }

  async send_request() {
    if (this.name == "" || this.type == "" || this.price < 0 || this.in_stock < 0 || this.props.length == 0 || this.image == "") {
      this.msg.set("You messed something up");
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

    this.msg_type = 1;
    this.msg.set("Done!");
  }
}
