import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-bar',
  imports: [CommonModule],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css'
})
export class HeaderBar {
  CategoryView = 0;
  categoryView(x = 0) {
    this.CategoryView = x;
  }
}
