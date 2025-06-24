import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/pages/shared/header/header';
import { Footer } from './components/pages/shared/footer/footer';
import { Navigation } from './components/pages/shared/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
