import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredient } from './add-ingredient';

const routes: Routes = [
    {
      path: '', component: AddIngredient
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddIngredientRoutingModule { }
