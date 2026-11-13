import { Component, signal } from '@angular/core';
import { HeaderBar } from './header-bar/header-bar';
import { MainMain } from './main-main/main-main';
import { AsideBar } from './aside-bar/aside-bar';

@Component({
  imports: [HeaderBar, MainMain, AsideBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Grobowiec-WEB');
}
