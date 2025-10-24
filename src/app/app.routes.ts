import { Routes } from '@angular/router';
import { Homepage } from './homepage/home.ts';
import { Layout } from './layout/layout';
import { Basvuru } from './basvuru/basvuru';
import { Proje } from './proje/proje';
import { Yarismalar } from './yarismalar/yarismalar'; // sonradan ekledim 
import { Hakkimizda } from './hakkimizda/hakkimizda';
import { Hedefler } from './hedefler/hedefler';
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [

      { path: '', component: Homepage },
      { path: 'Basvuru', component: Basvuru },
      { path: 'Proje', component: Proje },
      { path: 'yarismalar', component: Yarismalar },// sonradan ekledim 
      {path: 'hakkimizda', component: Hakkimizda},
      {path: 'hedefler',component: Hedefler},
 { path: '**', redirectTo: '', pathMatch: 'full' } 


     

    ]
  }
]; 