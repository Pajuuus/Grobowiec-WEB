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
  since = "";
  until = "";
  image = "";
  how_much = 1;

  async send_request() {
    if (this.name == "" || this.image == "" || this.since == "" || this.until == "" || this.how_much >= 1 || this.how_much <= 0) {
      alert("You messed something up");
      return;
    }

    const since = this.since + "T00:00:00+00:00";
    const until = this.until + "T00:00:00+00:00";

    await this.supabaseService.insertTableData("sales", {
      valid_since: since,
      valid_until: until,
      name: this.name,
      description: this.desc,
      how_much: this.how_much,
      image_path: this.image
    });

    this.supabaseService.load_sales();
    alert("Done!");
  }
}
