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
  price = -1;
  sale = -1;

  async send_request() {
    if (this.name == "" || this.image == "" || this.type == "" || this.price <= 0) {
      alert("You messed something up");
      return;
    }

    await this.supabaseService.insertTableData("services", {
      name: this.name,
      description: this.desc,
      type: this.type,
      sale: this.sale,
      price: this.price,
      image_path: this.image
    });

    this.supabaseService.load_services();
    alert("Done!");
  }
}
