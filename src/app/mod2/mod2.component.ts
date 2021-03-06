import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css'],
})
export class Mod2Component implements OnInit {
  // headers = ['#', 'ФИО', 'Дата', 'Тема', 'Комментарий'];
  taskPoints = [];

  myReactiveForm: FormGroup;

  // constructor() {
  //   this.myReactiveForm = new FormGroup({
  //     titleNum: new FormControl('#', Validators.required),
  //     titleFio: new FormControl('ФИО', Validators.required),
  //     titleDate1: new FormControl('2021-01-30', Validators.required),
  //     titleDate2: new FormControl('2021-02-06', Validators.required),
  //     titleDate3: new FormControl('2021-02-13', Validators.required),
  //     titleDate4: new FormControl('2021-02-20', Validators.required),
  //     titleDate5: new FormControl('2021-02-27', Validators.required),
  //     titleDate6: new FormControl('2021-03-06', Validators.required),
  //     titleAvPoints: new FormControl('Cредний балл', Validators.required),
  //     titleAvRndPoints: new FormControl(
  //       'Cредний округленный балл',
  //       Validators.required
  //     ),

  //     taskPoints: new FormArray([])
  //   });
  //   this.taskPoints = this.getTaskPoints();
  // }

  constructor(private formBuilder: FormBuilder){
    this.myReactiveForm = this.formBuilder.group({
      taskPoints: ['']
    });
    this.taskPoints = this.getTaskPoints();
  }

  submit(){
    console.log(this.myReactiveForm);
  }

  getTaskPoints(){
    return [
      {id:'1', name:'ord 1'},
      {id:'2', name:'ord 2'},
      {id:'3', name:'ord 3'},
      {id:'4', name:'ord 4'},
      {id:'5', name:'ord 5'},
    ];
  }


  // form: FormGroup;
  // orders = [];

  // constructor(private formBuilder: FormBuilder) {
  //   this.form = this.formBuilder.group({
  //     orders: ['']
  //   });

  //   this.orders = this.getOrders();
  // }

  // getOrders() {
  //   return [
  //     { id: '1', name: 'order 1' },
  //     { id: '2', name: 'order 2' },
  //     { id: '3', name: 'order 3' },
  //     { id: '4', name: 'order 4' }
  //   ];
  // }


  ngOnInit(): void {}
}
