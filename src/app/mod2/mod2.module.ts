import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [Mod2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [Mod2Component]
})
export class Mod2Module { }
