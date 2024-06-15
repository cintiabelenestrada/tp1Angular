import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../entities/productos';
import { ProductoCarrito } from '../entities/productoCarrito';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component implements OnInit {
  productos: Producto[]=  [
    { id: "1", nombre: 'Auricular Gamer Logitech', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'audicular.webp', precio: 4500},
    { id: "2", nombre: 'JOYSTICK  PC USB G807', descripcion: 'El Saturn es el joystick cableado ideal, analógicos, vibración y compatibilidad son solo algunas de sus características.', img: 'joystick.png', precio: 2000},
    { id: "3", nombre: 'Monitor Gamer 22"', descripcion: 'Color : NegroTamaño de panel : 22"Curvo/Plano : PlanoColores : 16.7MTipo de panel : IPSResolución : 1920 x 1080s', img: 'monitor.jpeg', precio: 90000},
    { id: "4", nombre: 'Cooler Cpu Watercooler Gamemax Iceburg 360 Rainbow 295W', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'cooler.jpeg', precio: 4500},
    { id: "5", nombre: 'Teclado Gamer HyperX Alloy Origins', descripcion: 'Tamaño del enter : GrandeRetroiluminación del teclado : RGB', img: 'teclado.jpeg', precio: 10000},
    { id: "6", nombre: 'Tableta Gráfica Xp Pen Deco Pro Small', descripcion: 'Sensibilidad a la presion : 8192 nivelesResolucion : 5080 LPITasa de informe : Max 200Rueda mecánica : 1', img: 'tablagrafica.jpeg', precio: 129000}
  ];
 
  productoCarrito: ProductoCarrito[] = [];
  producto: Producto = new Producto;

  constructor() { }

  ngOnInit() {

  }
  public agregarCarrito(producto: Producto): void {
    // funcion agregar carrito, que va a recibir un producto de tipo producto(el tipo se definio en los entities)
    // agregar el producto a comprar al array productoCarrito
    
    let productoExistente = this.productoCarrito.find(prodAuxiliar => {
      // verifica que el producto ya se encuentra cargado en el carrito o no, de entrada productoCarrito esta vacio
      // hace un find y recorre cada uno de los  items, siempre es falso al princio, y va al else  y crea un producto
      // la siguiente vez que ingresa ya esta cargado  
      console.log("prodAuxiliar ", prodAuxiliar.id);
      console.log("producto ", producto.id);
      // despues va iterando cada item del carrito, e itera el id, si es igual id del producto que estoy comprando?
      //  si es true significa que ya lo estoy comprando,, y como ya exite, no tiene que hacer de nuevo el push del else, sino que incrementa la cantidad
      return prodAuxiliar.id === producto.id

    });
    if (productoExistente) {
      // si ya se encuentra el producto en el carrito, se incrementa la cantidad, 
      // y la proxima vez que se haga click en el carrito
      // no se agrega el producto, sino la cantidad
      productoExistente.cantidad++
    } else{
      // si el producto no se encuentra en el array del carrito, 
      // lo crea de cero como esta definido en ProductoCarrito y lo agrega al array de carrito con el push
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
// Función para calcular el total
   public calcularTotal(): number {
    let total = 0;
    for (const producto of this.productoCarrito) {
      // total += producto.precio * producto.cantidad || 0;
      total += producto.precio || 0;

    }
    return total;
}

public duplicarCarrito(producto: Producto): void {
  // Encuentra el producto en el carrito
  const productoExistente = this.productoCarrito.find(prod => prod.id === producto.id);
  if (productoExistente) {
    const productoDuplicado = { ...productoExistente };
    // el operador de propagación (...) para duplicar el objeto productoExistente en productoDuplicado. Esto creará una copia independiente del objeto existente en lugar de simplemente hacer referencia al mismo objeto.
    // Después de esta línea, productoDuplicado contendrá una copia exacta de productoExistente, y cualquier modificación que hagas en productoDuplicado no afectará al objeto original productoExistente.
    productoDuplicado.cantidad++;
    this.productoCarrito.push(productoDuplicado);
  } else {
    this.agregarCarrito(producto);
  }
}

}