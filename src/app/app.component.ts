import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@Component({
  selector: 'app-raiz',
  imports: [RouterOutlet,EmpleadosComponent,EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miprimeraApp';

  saludo="Hola alumnos de Angular. Qué tal estáis?"
}