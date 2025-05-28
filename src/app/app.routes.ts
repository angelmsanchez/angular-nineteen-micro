import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // loadChildren: () =>
    //   import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    component: AboutComponent,
    // loadChildren: () =>
    //   import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
