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

  name = "";
  desc = "";
  type = "";
  price = 0;
  in_stock = 0;
  sale = -1;
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

    if (this.sale != -1) {
      this.supabaseService.appendTableData("sales", "products", this.sale, prod.id);
    }

    alert("Done!");
  }
}
