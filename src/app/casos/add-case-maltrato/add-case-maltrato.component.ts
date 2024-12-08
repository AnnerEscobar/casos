import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-add-case-maltrato',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatOptionModule, MatIconModule, CommonModule, MatSelectModule, MatInputModule, MatGridListModule],
  templateUrl: './add-case-maltrato.component.html',
  styleUrl: './add-case-maltrato.component.css'
})
export class AddCaseMaltratoComponent {

  maltratoCaseForm!: FormGroup;
  departments: string[] = ['Guatemala', 'Escuintla', 'Quetzaltenango']; // Ejemplo
  municipalities: string[] = ['Zona 1', 'Zona 2', 'Zona 3']; // Ejemplo
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.maltratoCaseForm = this.fb.group({
      deicNumber: ['', [Validators.required]],
      mpNumber: ['', [Validators.required]],
      denouncerForm: this.fb.group({
        denouncerName: ['', [Validators.required]],
        denouncerCui: ['', [Validators.pattern(/^\d{13}$/)]], // Ejemplo de validación de CUI
        denouncerAddress: ['', [Validators.required]]
      }),
      victims: this.fb.array([]),
      suspects: this.fb.array([]),
      incidentLocation: this.fb.group({
        department: ['', [Validators.required]],
        municipality: ['', [Validators.required]],
        address: ['', [Validators.required]],
        coordinates: ['', [Validators.required]]
      })
    });
  }

  get victims(): FormArray {
    return this.maltratoCaseForm.get('victims') as FormArray;
  }

  get suspects(): FormArray {
    return this.maltratoCaseForm.get('suspects') as FormArray;
  }

  addVictim(): void {
    const victimGroup = this.fb.group({
      name: ['', [Validators.required]],
      victimaCUI: ['', [Validators.pattern(/^\d{13}$/)]], // Ejemplo de validación
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.victims.push(victimGroup);
  }

  removeVictim(index: number): void {
    this.victims.removeAt(index);
  }

  addSuspect(): void {
    const suspectGroup = this.fb.group({
      name: ['', [Validators.required]],
      SindicadoCUI: ['', [Validators.pattern(/^\d{13}$/)]], // Ejemplo de validación
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.suspects.push(suspectGroup);
  }

  removeSuspect(index: number): void {
    this.suspects.removeAt(index);
  }

  onSubmit(): void {
    if (this.maltratoCaseForm.valid) {
      console.log('Formulario válido:', this.maltratoCaseForm.value);
      // Lógica para guardar los datos
    } else {
      console.log('Formulario no válido');
    }
  }

  onCancel(): void {
    this.maltratoCaseForm.reset();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Archivo seleccionado:', this.selectedFile.name);
    }
  }

  onUploadFile(): void {
    if (this.selectedFile) {
      console.log('Subiendo archivo:', this.selectedFile.name);
      // Lógica para subir archivo
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }
}
