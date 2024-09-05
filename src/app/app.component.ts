import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios-clase-01';
  edadUno: string = '';
  edadDos: string = '';
  promedio: string = '';
  suma: string = '';

  mostrarResultados() {
    const numEdadUno = parseFloat(this.edadUno) || 0;
    const numEdadDos = parseFloat(this.edadDos) || 0;
    this.suma = (numEdadUno + numEdadDos).toString();
    this.promedio = ((numEdadUno + numEdadDos) / 2).toString();
  }

  borrarDatos() {
    this.edadUno = '';
    this.edadDos = '';
    this.promedio = '';
    this.suma = '';
  }
}
