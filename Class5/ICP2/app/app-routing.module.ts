import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextTransComponent} from "./texttrans/texttrans.component";

const appRoutes: Routes = [
  { path: 'text-trans' , component : TextTransComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
