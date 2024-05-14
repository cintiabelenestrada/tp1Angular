import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { Producto } from '../entities/productos';
import { ProductoCarrito } from '../entities/productoCarrito';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule, CarritoComponent],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component implements OnInit {
  productos: Producto[]=  [
    { id: "1", nombre: 'Auricular Gamer Logitech', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'audicular.webp', precio: 4500},
    { id: "2", nombre: 'JOYSTICK  PC USB G807', descripcion: 'El Saturn es el joystick cableado ideal, analógicos, vibración y compatibilidad son solo algunas de sus características.', img: 'joystick.png', precio: 2000},
    { id: "3", nombre: 'Monitor Gamer 22"', descripcion: 'Color : NegroTamaño de panel : 22"Curvo/Plano : PlanoColores : 16.7MTipo de panel : IPSResolución : 1920 x 1080s', img: 'monitor.jpeg', precio: 200},
    { id: "4", nombre: 'Cooler Cpu Watercooler Gamemax Iceburg 360 Rainbow 295W', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'cooler.jpeg', precio: 4500},
    { id: "5", nombre: 'Teclado Gamer HyperX Alloy Origins', descripcion: 'Tamaño del enter : GrandeRetroiluminación del teclado : RGB', img: 'teclado.jpeg', precio: 10000},
    { id: "6", nombre: 'Tableta Gráfica Xp Pen Deco Pro Small', descripcion: 'Sensibilidad a la presion : 8192 nivelesResolucion : 5080 LPITasa de informe : Max 200Rueda mecánica : 1', img: 'tablagrafica.jpeg', precio: 129000}
  ];
 
  productoCarrito: ProductoCarrito[] = [];

  constructor() { }

  ngOnInit() {

  }
  public agregarCarrito(producto: Producto): void {
    // agregar el producto a comprar al array productoCarrito
    // let productoExistente = this.productoCarrito.find(prodAuxiliar => prodAuxiliar.id === producto.id);

    let productoExistente = this.productoCarrito.find(prodAuxiliar => {
      console.log("prodAuxiliar ", prodAuxiliar.id);
      console.log("producto ", producto.id);
      return prodAuxiliar.id === producto.id
    });
    if (productoExistente) {
      productoExistente.cantidad++
    } else{
      let iCarrito:ProductoCarrito={
        id: producto.id,
        nombre: producto.nombre,
        img: producto.img,
        precio: producto.precio,
        cantidad: 1
      }
      this.productoCarrito.push(iCarrito);

    }
    console.log("productoCarrito ", this.productoCarrito);
  }
}