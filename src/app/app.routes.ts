import { Routes } from '@angular/router';
import { Homepage } from './homepage/home';
import { Layout } from './layout/layout';
import { Basvuru } from './basvuru/basvuru';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Homepage }, // homepage rotası
      {path: 'Basvuru',component:Basvuru},
      { path: '**', redirectTo: '', pathMatch: 'full' } 
     
    ]
  }
];
