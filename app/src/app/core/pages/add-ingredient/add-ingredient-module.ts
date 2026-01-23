import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddIngredientRoutingModule } from './add-ingredient-routing-module';
import { AddIngredient } from './add-ingredient';


@NgModule({
  declarations: [
    AddIngredient
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddIngredientRoutingModule,
  ],
})
export class AddIngredientModule { }
