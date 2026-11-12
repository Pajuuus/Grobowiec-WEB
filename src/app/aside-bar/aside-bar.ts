import { Component, Inject, inject } from '@angular/core';
import { DaneService } from '../services/whenimechainasuma';

@Component({
  imports: [],
  selector: 'aside-bar',
  styleUrl: './aside-bar.css',
  templateUrl: './aside-bar.html',
})
export class AsideBar {
  private daneService = Inject(DaneService);
}
