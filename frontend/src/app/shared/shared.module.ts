import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { TitleComponent } from './title/title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FormComponent } from './form/form.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';




@NgModule({
  declarations: [
    NavbarComponent,
    ContainerComponent,
    TitleComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    TableModule,
    DropdownModule,
    CalendarModule
  ],
  exports: [
    MenuModule,
    MenubarModule,
    InputTextModule,
    NavbarComponent,
    ContainerComponent,
    TitleComponent,
    ReactiveFormsModule,
    ButtonModule,
    FormComponent,
    InputNumberModule,
    TableModule,
    DropdownModule,
    CalendarModule
  ]
})
export class SharedModule { }
