import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>Buscar libros</h3>

    <div class="row mb-3">
      <div class="col-md-3">
        <input class="form-control" placeholder="Título" [(ngModel)]="filters.title">
      </div>
      <div class="col-md-3">
        <input class="form-control" placeholder="Autor" [(ngModel)]="filters.author">
      </div>
      <div class="col-md-2">
        <input class="form-control" placeholder="Año" type="number" [(ngModel)]="filters.year">
      </div>
      <div class="col-md-2">
        <select class="form-select" [(ngModel)]="filters.category">
          <option value="">Todas</option>
          <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
        </select>
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary" (click)="clear()">Limpiar</button>
      </div>
    </div>

    <div *ngIf="filteredBooks.length === 0" class="alert alert-warning">
      No se encontraron libros.
    </div>

    <div class="row">
      <div class="col-md-4" *ngFor="let b of filteredBooks">
        <div class="card search mb-3 shadow-sm">
          <img [src]="b.image" class="card-img-top" alt="{{ b.title }}">
          <div class="card-body">
            <h5 class="card-title">{{ b.title }}</h5>
            <p>Autor: {{ b.author }} <br> Año: {{ b.year }}</p>
            <p><small class="text-muted">{{ b.category }}</small></p>
            <button class="btn btn-outline-success" (click)="add(b)">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BusquedaComponent {
  @Output() addToCart = new EventEmitter<any>();

  filters: any = { title: '', author: '', year: null, category: '' };
  categories = ['Fantasia', 'Thriller', 'Romance', 'Deportes'];

  books = [
    {
      id: 1,
      title: 'El Rey Oscuro',
      author: 'C.S. Pacat',
      year: 2022,
      category: 'Fantasia',
      image:
        'https://images.cdn1.buscalibre.com/fit-in/360x360/f4/3b/f43b3d2476722ee2048bd21ac2eeddd2.jpg',
    },
    {
      id: 2,
      title: 'El Heredero Oscuro',
      author: 'C.S. Pacat',
      year: 2024,
      category: 'Fantasia',
      image:
        'https://images.cdn2.buscalibre.com/fit-in/360x360/a5/a5/a5a5174e4ffe592c33c12bf4e66e8fe8.jpg',
    },
    {
      id: 3,
      title: 'No Dejes Entrar al Bosque',
      author: 'CG Drews',
      year: 2025,
      category: 'Thriller',
      image:
        'https://images.cdn2.buscalibre.com/fit-in/360x360/6c/1a/6c1a5a1900139ca95ea877c1d526f4fb.jpg',
    },
    {
      id: 4,
      title: 'El Príncipe Cautivo',
      author: 'C.S. Pacat',
      year: 2025,
      category: 'Romance',
      image:
        'https://images.cdn2.buscalibre.com/fit-in/360x360/22/0c/220c352d8a85967ca7687987b31204ad.jpg',
    },
    {
      id: 5,
      title: 'La Madriguera del Zorro',
      author: 'Nora Sakaviz',
      year: 2022,
      category: 'Deportes',
      image:
        'https://images.cdn3.buscalibre.com/fit-in/360x360/53/4f/534f095235b8052332acdefe4f601881.jpg',
    },
  ];

  get filteredBooks() {
    return this.books.filter((b) => {
      const matchesTitle = this.filters.title
        ? b.title.toLowerCase().includes(this.filters.title.toLowerCase())
        : true;
      const matchesAuthor = this.filters.author
        ? b.author.toLowerCase().includes(this.filters.author.toLowerCase())
        : true;
      const matchesYear = this.filters.year
        ? b.year === Number(this.filters.year)
        : true;
      const matchesCategory = this.filters.category
        ? b.category === this.filters.category
        : true;
      return matchesTitle && matchesAuthor && matchesYear && matchesCategory;
    });
  }

  add(book: any) {
    this.addToCart.emit(book);
  }

  clear() {
    this.filters = { title: '', author: '', year: null, category: '' };
  }
}
