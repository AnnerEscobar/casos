import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-case-conflicto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, MatGridListModule, MatSelectModule,
    MatInputModule, MatOptionModule, MatIconModule, MatCardModule
  ],
  templateUrl: './add-case-conflicto.component.html',
  styleUrl: './add-case-conflicto.component.css'
})
export class AddCaseConflictoComponent {

  conflictoCaseForm!: FormGroup;

  // Listas de departamentos y municipios (puedes poblar estas con datos reales de una API o un servicio)
  departments = ['Guatemala', 'Santa Rosa', 'Huehuetenango', 'Chimaltenango'];
  municipalities = ['Guatemala', 'Mixco', 'Villa Nueva', 'San Juan Sacatepéquez'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializando el formulario reactivo usando FormBuilder
    this.conflictoCaseForm = this.fb.group({
      // Control de números de caso DEIC y MP
      deicNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      mpNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],

      // Información del adolescente en conflicto
      adolescente: this.fb.group({
        name: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        cui: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      }),

      // Información de la víctima
      victim: this.fb.group({
        name: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        cui: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      }),

      // Información del lugar de los hechos
      incidentLocation: this.fb.group({
        department: ['', [Validators.required]],
        municipality: ['', [Validators.required]],
        address: ['', [Validators.required]],
        coordinates: ['', [Validators.required]],
      }),
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.conflictoCaseForm.valid) {
      // Aquí puedes manejar la lógica para enviar el formulario, como hacer un POST a un backend.
      console.log('Formulario Enviado:', this.conflictoCaseForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para manejar la cancelación del formulario (resetear el formulario o redirigir)
  onCancel(): void {
    this.conflictoCaseForm.reset();
    console.log('Formulario cancelado');
  }
}
