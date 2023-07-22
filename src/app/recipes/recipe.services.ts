import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes : Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG', 
        [
          new Ingredient('Meat', 1),
          new Ingredient('Frech Fries', 20),
        ]),
        new Recipe('Big Fat Burger', 
        'What else do you need to say?', 
        'https://live.staticflickr.com/2739/4344453812_de395266dd_b.jpg', 
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]),
      ];

      getRecipes(){
        // Returns a copy of the recipes Array and not the original reference that is stored in the service
        return this.recipes.slice();
      }

}