import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styles: [
    `
      input.ng-touched.ng-invalid {
        border: solid red 2px;
      }
      input.ng-touched.ng-valid {
        border: solid green 2px;
      }
    `,
  ],
  //styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  columns = ['Номер', 'Дата', 'Тема урока', 'Домашнее задание', 'Комментарий'];

  num: number = 1;
  date: Date = new Date();
  theme: string = 'Первая тема';
  hw: string = 'Домашнее задание';
  notice: string = 'Интерполяция';

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      num1: new FormControl('3', [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ]),
      date1: new FormControl('2021-03-03', Validators.required),
      theme1: new FormControl('Урок №3', [
        Validators.required,
        this.myTheme1Validator,
      ]),
      hw1: new FormControl('Домашка №3', [
        Validators.required,
        this.myHw1Validator,
      ]),
      notice1: new FormControl('FormGroup'),
      phones: new FormArray([new FormControl('+7', Validators.required)]),
    });
  }

  addPhone() {
    //(<FormArray>this.reactiveForm.controls["phones"]).push(new FormControl("+7", Validators.required));
    (<FormArray>this.reactiveForm.controls['phones']).push(
      new FormControl('+7', Validators.required)
    );
  }
  deletePhone(){
    (<FormArray>this.reactiveForm.controls['phones']).removeAt(this.reactiveForm.controls['phones']['controls'].index);
  }

  addRaw(){
    (<FormArray>this.reactiveForm.controls['num1']).push(new FormControl('3', [
      Validators.required,
      Validators.min(1),
      Validators.max(12),
    ]));
    (<FormArray>this.reactiveForm.controls['date1']).push(new FormControl('2021-03-03', Validators.required));
    (<FormArray>this.reactiveForm.controls['theme1']).push(new FormControl('Урок №3', [
        Validators.required,
        this.myTheme1Validator,
      ]));
      (<FormArray>this.reactiveForm.controls['hw1']).push(new FormControl('Домашка №3', [
        Validators.required,
        this.myHw1Validator,
      ]));
      (<FormArray>this.reactiveForm.controls['notice1']).push(new FormControl('FormGroup'))
  }

  myHw1Validator(control: FormControl): any {
    if (control.value === 'нет') {
      return { hw1: true };
    }
    return null;
  }

  myTheme1Validator(control: FormControl): any {
    if (control.value === 'нет') {
      return { myTheme1Validator: true };
    }
    return null;
  }
  //{[s:string]:boolean}

  submit() {
    console.log(this.reactiveForm);
  }

  ngOnInit(): void {}
}
