import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'remove-service',
  styleUrl: './remove-service.css',
  templateUrl: './remove-service.html',
})
export class RemoveService {
  private readonly supabaseService = inject(SupabaseService);

  selected_ser = -1;
  selected = () => this.supabaseService.services().find(x => x.id == this.selected_ser);

  public kurwa() {
    console.warn(this.supabaseService.services());
  }

  async send_request() {
    this.supabaseService.deleteTableData("services", this.selected_ser);
    this.supabaseService.removeTableDataFromArray("sales", "services", this.selected_ser);

    await this.supabaseService.load_services();
    alert("Done!");
  }
}
