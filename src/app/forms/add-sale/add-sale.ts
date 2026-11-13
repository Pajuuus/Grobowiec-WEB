import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'add-sale',
  styleUrl: './add-sale.css',
  templateUrl: './add-sale.html',
})
export class AddSale {
  private readonly supabaseService = inject(SupabaseService);

  name = "";
  desc = "";
  image = "";

  async send_request() {
    if (this.name == "" || this.image == "") {
      alert("You messed something up");
    }

    await this.supabaseService.insertTableData("sales", {
      name: this.name,
      description: this.desc,
      image_path: this.image
    });

    alert("Done!");
    this.supabaseService.load_sales();
  }
}
