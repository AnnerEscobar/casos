import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-seguimiento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule],
  templateUrl: './seguimiento.component.html',
  styleUrl: './seguimiento.component.css'
})
export class SeguimientoComponent {

  seguimientoForm!: FormGroup;
  files: File[] = [];
  fileError: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.seguimientoForm = this.fb.group({
      caseNumber: ['', Validators.required],
      caseStatus: ['', Validators.required],
      investigatorName: ['', Validators.required],
      files: [null]  // To store the files
    });
  }

  // Método para manejar los cambios de archivo
  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    this.files = Array.from(fileList);

    // Validación para archivos PDF o Word solamente
    this.fileError = this.files.some(file => !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type));

    if (!this.fileError) {
      // Si los archivos son válidos, los guardamos en el formulario
      this.seguimientoForm.get('files')?.setValue(this.files);
    } else {
      this.seguimientoForm.get('files')?.setValue(null);
    }
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.seguimientoForm.valid) {
      // Aquí puedes agregar la lógica para enviar los datos al backend
      console.log('Formulario enviado:', this.seguimientoForm.value);
    }
  }
}
