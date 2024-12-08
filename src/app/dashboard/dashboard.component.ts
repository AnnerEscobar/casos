import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Gráfico para los tipos de caso

  public caseChartOptions: any = {
    series: [10, 25, 50], // Datos de ejemplo para los tres tipos de casos
    chart: {
      type: "pie",
      height: 150
    },
    labels: ["Maltrato", "Alerta Alba-Keneth", "Conflicto"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  public alertaCaseOptions: any = {
    series: [25, 50], // Datos de ejemplo para los tres tipos de casos
    chart: {
      type: "donut",
      height: 150,
    },
    labels: ["Activas", "Inactivas"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  // Gráfico para los casos por mes (ejemplo)
  public monthChartOptions: any = {
    series: [
      {
        name: "Casos Registrados",
        data: [31, 40, 28, 51, 42, 109, 100, 98, 76, 58, 89, 120] // Datos ficticios por mes
      }
    ],
    chart: {
      height: 150,
      type: "line"
    },
    xaxis: {
      categories: [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
      ]
    },
    title: {
      text: "Casos por Mes",
      align: "left"
    }
  };

  public monthComparisonChartOptions: any = {
    series: [
      {
        name: 'Casos 2023',
        data: [31, 40, 28, 51, 42, 109, 100, 98, 76, 58, 89, 120], // Datos ficticios para 2023
      },
      {
        name: 'Casos 2024',
        data: [45, 60, 35, 70, 50, 130, 120, 110, 90, 75, 100, 140], // Datos ficticios para 2024
      },
    ],
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
      ],
    },
    title: {
      text: 'Comparativa de Casos por Mes (2023 vs 2024)',
      align: 'center',
    },
    stroke: {
      curve: 'smooth', // Suaviza las líneas del gráfico
    },
    markers: {
      size: 5,
    },
    colors: ['#1E88E5', '#E53935'], // Azul para 2023, Rojo para 2024
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
  };

}
