import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchRecipeComponent} from "./search-recipe/search-recipe.component";

const appRoutes: Routes = [
  { path: '', component: SearchRecipeComponent },
  { path: 'search-recipe', component: SearchRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
