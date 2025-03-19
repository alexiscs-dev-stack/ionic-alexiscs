import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/components/recipe-list.component';

export const routes: Routes = [
  {
    path: 'home',
    component: RecipeListComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
