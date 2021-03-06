import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {

  formReactive: FormGroup;
  constructor(form: FormBuilder) {
    this.formReactive = form.group({
      name: form.control('', Validators.required),
      age: form.control(null, [Validators.min(10), Validators.max(100)]),
      date: form.control('03.03.2021'),
      phones: form.array([
        form.control('899901209888'),
        form.control('899901209887')
      ])
 
    });
    this.formReactive.controls['date'].valueChanges.subscribe((date) => {
      const age = new Date().getFullYear() - new Date(date).getFullYear();
      this.formReactive.controls['age'].setValue(age);
    });
  }

  ngOnInit(): void {}

  input(e: any): void {}
}