import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase';

@Component({
  imports: [FormsModule],
  selector: 'add-prod',
  styleUrl: './add-prod.css',
  templateUrl: './add-prod.html',
})
export class AddProd {
  private readonly supabaseService = inject(SupabaseService);

  prop_filter = "";
  filtered_props = () => this.supabaseService.prop_enum.filter(x => x.includes(this.prop_filter));

  name = "";
  desc = "";
  type = "";
  price = 0;
  in_stock = 0;
  sales = [];
  props = [];
  image = "";

  async send_request() {
    if (this.name == "" || this.type == "" || this.price <= 0 || this.in_stock < 0 || this.props.length == 0 || this.image == "") {
      alert("You messed something up");
      return;
    }

    await this.supabaseService.insertTableData("products", {
      name: this.name,
      description: this.desc,
      type: this.type,
      price: this.price,
      in_stock: this.in_stock,
      properties: this.props,
      image: this.image
    });

    await this.supabaseService.load_products();
    const prod = this.supabaseService.products().findLast(x => true);

    if (this.sales.length != 0) {
      for (var sale of this.sales) {
        this.supabaseService.appendTableData("sales", "products", sale, prod.id);
      }
    }

    this.supabaseService.load_products();
    alert("Done!");
  }
}
