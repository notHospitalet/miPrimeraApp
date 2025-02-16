import { Component } from "@angular/core";
import { EmpleadoComponent } from "../empleado/empleado.component";

@Component({
    selector: "app-empleados",
    templateUrl: "./empleados.component.html",
    styleUrl: './empleados.component.css',
    imports: [EmpleadoComponent]

})

export class EmpleadosComponent{

}