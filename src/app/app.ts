import { Component, signal } from '@angular/core';
import { HeaderBar } from './header-bar/header-bar';
import { Overwatch3 } from './overwatch3/overwatch3';
import { AsideBar } from './aside-bar/aside-bar';

@Component({
  imports: [HeaderBar, Overwatch3, AsideBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Grobowiec-WEB');
}
