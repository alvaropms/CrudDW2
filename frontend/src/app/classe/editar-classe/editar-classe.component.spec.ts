import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClasseComponent } from './editar-classe.component';

describe('EditarClasseComponent', () => {
  let component: EditarClasseComponent;
  let fixture: ComponentFixture<EditarClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarClasseComponent]
    });
    fixture = TestBed.createComponent(EditarClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
