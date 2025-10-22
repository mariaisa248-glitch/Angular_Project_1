import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Carrito</h3>

    <div *ngIf="!items || items.length === 0" class="alert alert-info">
      Tu carrito está vacío.
    </div>

    <div *ngIf="items && items.length > 0">
      <ul class="list-group mb-3">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let i of items"
        >
          <div>
            <strong>{{ i.title }}</strong><br>
            <small>{{ i.author }} — {{ i.year }}</small>
          </div>
          <span class="badge bg-secondary">{{ i.category }}</span>
        </li>
      </ul>

      <button class="btn btn-danger" (click)="clear()">Vaciar carrito</button>
    </div>
  `,
})
export class CarritoComponent {
  @Input() items: any[] = [];

  clear() {
    this.items.length = 0;
  }
}
