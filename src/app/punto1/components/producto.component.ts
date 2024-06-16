import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../models/productosModel';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
// export class ProductoComponent implements OnInit  {
  
  productos!: Producto[];
  

  constructor(private productosService: ProductoService) { }

  // ngOnInit(): void {
  //   this.getObtenerProductosDestacados();
  // }

  getObtenerProductosDestacados (){
    this.productosService.getObtenerProductosDestacados().subscribe( 
      (data:any) => {
       this.productos = data;
        console.log('data ',JSON.stringify(data));
      },
      (error:any) => {
        console.log(error);
      } 
    )
  } 
}