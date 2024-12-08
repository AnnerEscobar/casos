import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-case',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, ReactiveFormsModule, MatFormFieldModule, CommonModule, MatSelectModule, MatInputModule],
  templateUrl: './add-case.component.html',
  styleUrl: './add-case.component.css'
})
export class AddCaseComponent {

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  kinships = ['Padre', 'Madre', 'Hermano/a', 'Tutor', 'Otro'];
  departments = ['Guatemala', 'Sacatepéquez', 'Chimaltenango']; // Completa según tus necesidades
  municipalities = ['Mixco', 'Villa Nueva', 'Antigua Guatemala']; // Completa según tus necesidades

  onCancel(): void {
    this.addCaseForm.reset();
  }

  onSubmit() {
    console.log(this.addCaseForm.value)
  }

  addCaseForm = this.formBuilder.group({

    alertaNumber: [''],
    deicNumber: [''],
    mpNumber: [''],

    denouncerForm: this.formBuilder.group({
      denouncerName: ['', [Validators.required]],
      denouncerKinship: ['', [Validators.required]],
      denouncerCui: ['', [Validators.required]],
      denouncerAddress: ['', [Validators.required]],
    }),

    missingForm: this.formBuilder.group({
      missingName: ['', Validators.required],
      missingAge: ['', Validators.required],
    }),

    placeOfDisappearance: this.formBuilder.group({
      department: ['', [Validators.required]],
      municipality: ['', Validators.required],
      address: ['', Validators.required],
      coordinates: ['', Validators.required],
    }),

  });

}
