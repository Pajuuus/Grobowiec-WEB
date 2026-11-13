import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  phone = signal(0);
  username = signal("");
  points = signal(0);
}
