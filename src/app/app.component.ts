import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LandingComponent } from './landing.component';
import { BusquedaComponent } from './busqueda.component';
import { CarritoComponent } from './carrito.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    LandingComponent,
    BusquedaComponent,
    CarritoComponent,
    FormsModule,
  ],
  template: `
    <app-header (navigate)="viewChanged($event)"></app-header>

    <div class="container mt-4">
      <ng-container [ngSwitch]="currentView">
        <app-landing *ngSwitchCase="'landing'"></app-landing>
        <app-busqueda
          *ngSwitchCase="'busqueda'"
          (addToCart)="onAddToCart($event)"
        ></app-busqueda>
        <app-carrito
          *ngSwitchCase="'carrito'"
          [items]="cart"
        ></app-carrito>
        <app-landing *ngSwitchDefault></app-landing>
      </ng-container>
    </div>
  `,
})
export class AppComponent {
  currentView = 'landing';
  cart: any[] = [];

  viewChanged(view: string) {
    this.currentView = view;
  }

  onAddToCart(book: any) {
    this.cart = [...this.cart, book];
  }
}
