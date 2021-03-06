import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Task2Module } from './task2/task2.module';
import { Mod2Module } from './mod2/mod2.module';
import { Task4Module } from './task4/task4.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Task2Module, Mod1Module, Mod2Module, Task4Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
