import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaseConflictoComponent } from './add-case-conflicto.component';

describe('AddCaseConflictoComponent', () => {
  let component: AddCaseConflictoComponent;
  let fixture: ComponentFixture<AddCaseConflictoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCaseConflictoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCaseConflictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
