import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { AboutUs } from './components/pages/about-us/about-us';
import { Contact } from './components/pages/contact/contact';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';
import { Products } from './components/pages/products/products';
import { Services } from './components/pages/services/services';


export const routes: Routes = [
    {
    path: 'about-us',
    component: AboutUs,
    title: 'About Us'
    },
    {
    path: 'home',
    component: Home,
    title: 'Home'
    },
    {
    path: 'contact',
    component: Contact,
    title: 'Contact'
    },
    {
    path: '**',
    component: PageNotFound,
    title: 'Page Not Found'
    },
    {
    path: 'products',
    component: Products,
    title: 'Products'
    },
    {
    path: 'services',
    component: Services,
    title: 'Services'
    }
];
