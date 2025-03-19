import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/components/recipe-list.component';

export const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
];
