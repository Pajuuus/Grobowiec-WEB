import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  username = signal("");
  points = signal(0);
}
