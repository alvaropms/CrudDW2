import { Component, Input, OnInit } from '@angular/core';
import { FormModel } from './models/form';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Input()
  form: FormModel = {} as FormModel;
  
  ngOnInit(): void {
    this.form.fields.forEach(field => {
      if(! this.form.group.get(field.name))
        this.form.group.addControl(field.name, new FormControl());
    });
  }
}
