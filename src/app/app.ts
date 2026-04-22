import { Component } from '@angular/core';
import { GaleriaComponent } from './galeria/galeria';

@Component({
  selector: 'app-root',
  imports: [GaleriaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'galeria-fotos';
}