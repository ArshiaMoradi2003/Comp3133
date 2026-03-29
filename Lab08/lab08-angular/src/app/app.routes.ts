import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes';
import { DirectiveDemoComponent } from './directive-demo/directive-demo';

export const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'directive', component: DirectiveDemoComponent }
];
