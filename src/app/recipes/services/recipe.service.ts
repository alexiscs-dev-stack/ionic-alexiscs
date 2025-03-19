import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {  Observable } from "rxjs";
import { Recipe } from "../models/recipes.model";

@Injectable({
    providedIn: "root"
})
export class RecipeService {
    private recipesUrl = "../../assets/recipes.json";

    constructor(private http:HttpClient){
        //initialize
    }
    
    //pend subscriptions and ionic lifeCycles
    getRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.recipesUrl);
    }

}