import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaneService {
  search_prompt = signal("");
  asideBar = signal(false);
  selected_sale = signal(-1);
  selected_product = signal(-1);
}
