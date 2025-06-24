import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Contact } from './components/pages/contact/contact';
import { Country } from './components/pages/country/country';
import { Api } from './components/pages/api/api';
import { Sesion } from './components/pages/sesion/sesion';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';


export const routes: Routes = [
  { path: 'api', component: Api, title: 'API' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'country/:name', component: Country, title: 'Country Details' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'sesion', component: Sesion, title: 'Sesion' },
  { path: '**', component: PageNotFound, title: '404 | Page not Found' }
];
