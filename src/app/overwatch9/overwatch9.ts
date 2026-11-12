import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'overwatch9',
  styleUrl: './overwatch9.css',
  templateUrl: './overwatch9.html',
})
export class Overwatch9 {
  private readonly supabaseService = inject(SupabaseService);

  name = "";
  desc = "";
  image = "";

  msg = signal("");
  msg_type = 0;

  async send_request() {
    if (this.name == "" || this.image == "") {
      this.msg.set("You messed something up");
    }

    await this.supabaseService.insertTableData("sales", {
      name: this.name,
      description: this.desc,
      image_path: this.image
    });

    this.msg_type = 1;
    this.msg.set("Done!");
    this.supabaseService.load_sales();
  }
}
