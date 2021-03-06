import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Task2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [Task2Component]
})
export class Task2Module { }
