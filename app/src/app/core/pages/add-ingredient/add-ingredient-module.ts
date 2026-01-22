import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddIngredientRoutingModule } from './add-ingredient-routing-module';
import { AddIngredient } from './add-ingredient';


@NgModule({
  declarations: [
    AddIngredient
  ],
  imports: [
    CommonModule,
    AddIngredientRoutingModule
  ]
})
export class AddIngredientModule { }
