import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaseMaltratoComponent } from './add-case-maltrato.component';

describe('AddCaseMaltratoComponent', () => {
  let component: AddCaseMaltratoComponent;
  let fixture: ComponentFixture<AddCaseMaltratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCaseMaltratoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCaseMaltratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
