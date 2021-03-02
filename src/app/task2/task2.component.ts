import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  columns = ['Номер','Дата', 'Тема урока', 'Домашнее задание', 'Комментарий'];

  num: number = 1;
  date: Date = new Date();
  theme: string = 'Первая тема';
  hw: string = 'Домашнее задание';
  notice: string = 'Пример комментария';
  

  constructor() { }

  ngOnInit(): void {
  }

}
