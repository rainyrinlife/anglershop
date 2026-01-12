import {Component} from '@angular/core';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  template: `<app-header/>`,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Homes';
}
