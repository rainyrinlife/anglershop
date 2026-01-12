import {Component} from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `<app-header/><router-outlet></router-outlet>`,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Homes';
}
