import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaneService {
  zmienna = signal("");
}
