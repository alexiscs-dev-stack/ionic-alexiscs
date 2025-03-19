import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes/services/recipe.service';
import { Recipe } from '../../recipes/models/recipes.model';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { combineLatestWith, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  standalone:true,
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class RecipeListComponent implements OnInit {

  private readonly searchSubject = new BehaviorSubject<string>('');
  searchTerm: string = '';

  filteredRecipes$!: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.filteredRecipes$ = this.recipeService.getRecipes().pipe(
      combineLatestWith(
        this.searchSubject.pipe(
          debounceTime(300),
          distinctUntilChanged(),
          startWith('')
        )
      ),
      map(([recipes, search]) =>
        recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }
  //pending: debounce technique to load items
  onSearchChange(searchValue: string): void {
  this.searchTerm = searchValue;
    this.searchSubject.next(searchValue);
  }

  //go to Details
  viewDetails(recipe:Recipe){
    console.log("Selected Recipe ID ", recipe.id)
  }

    trackByRecipe(index: number, recipe: Recipe): number {
    return recipe.id;
  }

}
