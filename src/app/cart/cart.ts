import { Component, inject } from '@angular/core';
import { DaneService } from '../services/whenimechainasuma';
import { User } from '../services/user';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  public daneService = inject(DaneService);
  private user = inject(User);
  private supabaseService = inject(SupabaseService);


}
