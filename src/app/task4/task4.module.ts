import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task4Component } from './task4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Task4Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [Task4Component]
})
export class Task4Module { }
