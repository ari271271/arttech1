import { Routes } from '@angular/router';
import { Homepage } from './homepage/home';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Homepage }, // homepage rotası
      { path: '**', redirectTo: '', pathMatch: 'full' } // yanlış URL olursa ana sayfaya dön
    ]
  }
];
