import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row">
      <div class="col-md-8">
        <h2 class="landing-title">Bienvenido a Librería Nexus</h2>
        <p>
          La mejor selección de libros académicos, novelas y material de consulta para estudiantes y profesionales. Nuestra librería combina venta de libros, zona de coworking y cafetería, un espacio pensado para aprender y crear.
        </p>

        <div class="row mt-3">
          <div class="col-md-6" *ngFor="let highlight of highlights">
            <div class="card mb-3 shadow-sm">
              <img [src]="highlight.img" class="card-img-up">
              <div class="card-body">
                <h5 class="card-title">{{ highlight.title }}</h5>
                <p class="card-text">{{ highlight.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <h4 class="ofers-title">Ofertas del día</h4>
        <img src="https://i.pinimg.com/736x/48/85/4f/48854f0fe6f7d66fba14d98a21dd3002.jpg" class="banner-img-one">
        <p></p>
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let offer of offers">
            <strong>{{ offer.title }}</strong><br>
            <small>{{ offer.author }}</small>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class LandingComponent {
  highlights = [
    {
      title: 'Libros para romper el corazón',
      img: 'https://i.pinimg.com/736x/7a/41/b7/7a41b73f998f4b4b9bf660e3773212d3.jpg',
      text: 'Una selección desgarradora para los valientes que se atreven a desafiar sus emociones.',
    },
    {
      title: 'Libros para sanar el corazón',
      img: 'https://i.pinimg.com/1200x/21/b8/cb/21b8cbcfc0bf4cf74602288d29309e80.jpg',
      text: 'Una colección alivianadora para leer luego de leer la colección anterior.',
    },
  ];

  offers = [
    { title: 'El Rey Oscuro', author: 'C.S. Pacat' },
    { title: 'El Heredero Oscuro', author: 'C.S. Pacat' },
  ];
}
