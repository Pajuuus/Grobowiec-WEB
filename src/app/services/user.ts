import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  password = signal("");
  phone = signal(0);
  username = signal("");
  points = signal(0);
}
