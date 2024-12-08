import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio'
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Link } from './interface';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatRadioModule, FormsModule, ReactiveFormsModule, CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  links: Link[] = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      isOpen: false,
    },
    {
      name: 'Casos',
      path: null,
      isOpen: false,
      children: [
        {
          name: 'Nueva Alerta',
          path: '/casos/alerta',
          isOpen: false,
        },
        {
          name: 'Nuevo Maltrato',
          path: '/casos/maltrato',
          isOpen: false,
        },
        {
          name: 'Nuevo Conflicto',
          path: '/casos/conflicto',
          isOpen: false,
        },
        {
          name: 'Seguimiento',
          path: 'casos/seguimiento',
          isOpen: false,
        }
      ]
    },
    {
      name: 'Estadísticas',
      path: '/estadisticas',
      isOpen: false,
    },
    {
      name: 'Configuración',
      path: '/configuracion',
      isOpen: false,
    }
  ];



  toggle(link: Link): void {
    this.links.forEach((l) => {
      if (l !== link) {
        l.isOpen = false;
        l.children?.forEach((child) => (child.isOpen = false));
      }
    });
    link.isOpen = !link.isOpen;
  }



}
