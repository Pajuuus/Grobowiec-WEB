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

  async send_request() {
    if (this.name == "" || this.image == "" || this.type == "") {
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
