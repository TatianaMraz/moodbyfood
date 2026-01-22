import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/pages/home/home-module')
        .then(m => m.HomeModule)
  },
  {
    path: 'ingredients/new',
    loadChildren: () =>
      import('./core/pages/add-ingredient/add-ingredient-module')
        .then(m => m.AddIngredientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
