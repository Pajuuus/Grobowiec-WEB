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
  sale = -1;
  props = [];
  image = "";

  msg = signal("");
  msg_type = 0;

  async send_request() {
    if (this.name == "" || this.type == "" || this.price < 0 || this.in_stock < 0 || this.props.length == 0 || this.image == "") {
      this.msg.set("You messed something up");
    }

    const prod = await this.supabaseService.insertTableData("products", {
      name: this.name,
      description: this.desc,
      type: this.type,
      price: this.price,
      in_stock: this.in_stock,
      properties: this.props,
      image: this.image
    });

    console.warn(prod);
    return;

    if (this.sale != -1) {
      this.supabaseService.appendTableData("sales", "products", this.sale, prod.id);
    }

    await this.supabaseService.load_products();

    this.msg_type = 1;
    this.msg.set("Done!");
  }
}
