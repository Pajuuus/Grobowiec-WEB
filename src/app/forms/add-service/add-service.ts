import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'add-service',
  styleUrl: './add-service.css',
  templateUrl: './add-service.html',
})
export class AddService {
  private readonly supabaseService = inject(SupabaseService);

  name = "";
  desc = "";
  image = "";
  type = "";
  price = 0;
  sales = [];

  async send_request() {
    if (this.name == "" || this.image == "" || this.type == "" || this.price <= 0) {
      alert("You messed something up");
      return;
    }

    await this.supabaseService.insertTableData("services", {
      name: this.name,
      description: this.desc,
      type: this.type,
      price: this.price,
      image_path: this.image
    });

    await this.supabaseService.load_services();
    const ser = this.supabaseService.services().findLast(x => true);

    if (this.sales.length != 0) {
      for (var sale of this.sales) {
        this.supabaseService.appendTableData("sales", "services", sale, ser.id);
      }
    }

    this.supabaseService.load_services();
    alert("Done!");
  }
}
