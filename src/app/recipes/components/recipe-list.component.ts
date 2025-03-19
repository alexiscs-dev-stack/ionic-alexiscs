import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes/services/recipe.service';
import { Recipe } from '../../recipes/models/recipes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  //@ts-ignore
  recipes$: Observable<Recipe[]>;
  //@ts-ignore
  filteredRecipes$: Observable<Recipe[]>;
  searchTerm: string = '';

  constructor(private recipeService: RecipeService) {}
  //load the complete list
  ngOnInit(): void {
    console.log("initialize")
    //load recipes from the service
    this.recipes$ = this.recipeService.getRecipes();

    //initially, show all the recipes
    this.filteredRecipes$ = this.recipes$;
  }

  //pending: debounce technique to load items
  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue.trim().toLowerCase();

    //filter by KeyWord
    this.filteredRecipes$ = this.recipes$.pipe(
      map((recipes) =>
        recipes.filter((recipe) =>
          recipe.title.toLocaleLowerCase().includes(this.searchTerm)
        )
      )
    );
  }

  //go to Details
  viewDetails(recipe:Recipe){
    console.log("Selected Recipe ID ", recipe.id)
  }

}
