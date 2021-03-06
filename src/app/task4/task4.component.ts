import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import headerLessons from '../src/app/assets/headers_lessons_table.json';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styles: [
    `
      input.ng-touched.ng-invalid {
        border: solid red 2px;
      }
      input.ng-touched.ng-valid {
        border: solid green 2px;
      }
    `]
})
export class Task4Component implements OnInit {
 
lessons = require('../../assets/lessons.json');

  newLessonForm: FormGroup;
  newStudentForm: FormGroup;
  testTable: FormGroup;
  items = ['12', 'wf', 'erw'];

  constructor(private formLesson: FormBuilder, private formStudent: FormBuilder,
    private testForm: FormBuilder) { 
    this.newLessonForm = this.formLesson.group(
      {
        date: formLesson.control('', Validators.required),
        theme: formLesson.control('', Validators.required),
        homework: formLesson.control('', Validators.required),
        comment: formLesson.control('')
      }
    ),
    this.newStudentForm = this.formStudent.group({
      fio: formStudent.control(null, Validators.required)
    }),
    this.testTable = this.testForm.group({
      tr1: testForm.array([
       testForm.control([this.lessons[0].date, this.lessons[0].theme, this.lessons[0].hw, this.lessons[0].comment], Validators.required),
       testForm.control([this.lessons[1].date, this.lessons[1].theme, this.lessons[1].hw, this.lessons[1].comment], Validators.required),
       testForm.control([this.lessons[2].date, this.lessons[2].theme, this.lessons[2].hw, this.lessons[2].comment], Validators.required),
       testForm.control([this.lessons[3].date, this.lessons[3].theme, this.lessons[3].hw, this.lessons[3].comment], Validators.required)
    ])
    })
  }

  //setValue, getValue - методы для записи в локал хост

  addRaw(){
  (this.testTable.get('tr1') as FormArray).push(this.testForm.control(['','','','']));
    // (this.testTable.get('tr1') as FormArray).push(this.testForm.control(null));
    console.log(this.testTable);
  }

  deleteRaw(){
    (this.testTable.get('tr1') as FormArray).removeAt((this.testTable.get('tr1') as FormArray).length-1);
      console.log(this.testTable);
    }

  addStudent(){
    console.log(this.newStudentForm);
  }

  addLesson(){
    console.log(this.newLessonForm);
    this.newLessonForm;
    
  }


  ngOnInit(): void {
  }

}
