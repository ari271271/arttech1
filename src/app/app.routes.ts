import { Routes } from '@angular/router';
import { Homepage } from './homepage/home';
import { Layout } from './layout/layout';
import { Basvuru } from './basvuru/basvuru';
import { Proje } from './proje/proje';
import { Yarismalar } from './yarismalar/yarismalar'; 
import { Hakkimizda } from './hakkimizda/hakkimizda';
import { Hedefler } from './hedefler/hedefler';
import { Iletisim } from './iletisim/iletisim';
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [

      { path: '', component: Homepage },
      { path: 'Basvuru', component: Basvuru },
      { path: 'Proje', component: Proje },
      { path: 'yarismalar', component: Yarismalar },
      {path: 'hakkimizda', component: Hakkimizda},
      {path: 'hedefler',component: Hedefler},
      {path: 'iletisim', component: Iletisim},
 { path: '**', redirectTo: '', pathMatch: 'full' } 


     

    ]
  }
]; 