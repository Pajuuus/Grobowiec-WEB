import { Component, signal } from '@angular/core';
import { HeaderBar } from './header-bar/header-bar';

@Component({
  imports: [HeaderBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Grobowiec-WEB');
}
