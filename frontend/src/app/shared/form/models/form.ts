import { FormGroup } from "@angular/forms";
import { FieldModel } from "./field";
import { ActionsModel } from "./action";

export interface FormModel {
    submit: Function ;
    group: FormGroup ;
    fields: FieldModel[] ;
    actions: ActionsModel[] ;
}