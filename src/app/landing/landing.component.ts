import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports:[CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  title = 'Resumen de la Prueba Técnica';
  description = 'Desarrollo de una solución tecnológica basada en API RESTful y un frontend en Angular para la gestión de asegurados.';
  developerName = 'Eduardo Vega';

  backendRequirements = [
    { title: 'Desarrollo de la API RESTful con .NET Core', status: 'Cumplido' },
    { title: 'Modelo de datos implementado', status: 'Cumplido' },
    { title: 'Endpoints funcionales', status: 'Cumplido' },
    { title: 'Filtros por número de identificación', status: 'Cumplido' }
  ];

  frontendRequirements = [
    { title: 'Formulario de Registro', status: 'Cumplido' },
    { title: 'Gestión de Asegurados en tabla', status: 'Cumplido' },
    { title: 'Campo de búsqueda por identificación', status: 'Cumplido' },
    { title: 'Validaciones en frontend y backend', status: 'Cumplido' }
  ];

  bonusItems = [
    { title: 'Uso de Entity Framework Core', status: 'Cumplido' },
    { title: 'Migraciones creadas', status: 'Cumplido' },
    { title: 'Control de versiones con GitFlow', status: 'Cumplido' },
    { title: 'Despliegue en plataformas como Vercel o Netlify', status: 'Pendiente' }
  ];
}
