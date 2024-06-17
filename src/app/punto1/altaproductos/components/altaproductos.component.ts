import { Component } from '@angular/core';
import { Producto } from '../models/product.model';
import { AltaProductoService } from '../services/altaproducto.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-altaproductos',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './altaproductos.component.css',
  templateUrl: './altaproductos.component.html'
})
export class AltaProductosComponent {
  product = new Producto('', '', '', 0, 0, false);

  constructor(private altaproductoService: AltaProductoService) {}

  AltaProducto() {
    this.altaproductoService.postAltaProducto(this.product).subscribe(
      response => console.log('Producto agregado', response),
      error => console.error('Error al agregar producto', error)
    );
  }
}
