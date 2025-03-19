import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { IonicModule } from "@ionic/angular"
import { RecipeListComponent } from "./components/recipe-list.component"

@NgModule(
    {
        declarations: [ RecipeListComponent],
        imports: [
            CommonModule,
            IonicModule,
        ],
        exports: [ RecipeListComponent]
    }
)
export class RecipesModule {}