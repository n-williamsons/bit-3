import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';
import { Navigation } from './components/shared/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Navigation],
  template: `<app-header /> <app-navigation /> <router-outlet /> <app-footer />`,
  styleUrl: './app.css'
})
export class App {
  
}
