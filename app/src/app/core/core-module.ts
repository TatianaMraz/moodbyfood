import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './layout/header/header';



@NgModule({
  declarations: [
    Header
  ],
  exports: [
    Header,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // auth services, guards, interceptors
  ]
})
export class CoreModule { }
