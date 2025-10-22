import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <a class="navbar-logo" href="#">Librería Nexus</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <a class="nav-link" href="#" (click)="navigate.emit('landing')">Inicio</a>
            </li>
            <li>
              <a class="nav-link" href="#" (click)="navigate.emit('busqueda')">Buscar libros</a>
            </li>
            <li>
              <a class="nav-link" href="#" (click)="navigate.emit('carrito')">Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  @Output() navigate = new EventEmitter<string>();
}
