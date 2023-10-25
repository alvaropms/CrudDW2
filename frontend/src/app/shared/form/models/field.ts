export interface FieldModel {
    type: 'text' | 'password' | 'email' | 'number' | 'date' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'integer';
    name: string;
    label?: string;
    options?: any[];
    options_label?: string;
    options_value?: string;
}