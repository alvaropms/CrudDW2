import { Component, Input } from '@angular/core';
import { FormModel } from './models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()
  form: FormModel = {} as FormModel;
}
