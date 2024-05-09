import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component implements OnInit {
  productos=  [
    { nombre: 'Auricular Gamer Logitech', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'audicular.webp', precio: 4500.5},
    { nombre: 'JOYSTICK  PC USB G807', descripcion: 'El Saturn es el joystick cableado ideal, analógicos, vibración y compatibilidad son solo algunas de sus características.', img: 'joystick.png', precio: 2000.99},
    { nombre: 'Monitor Gamer 22"', descripcion: 'Color : NegroTamaño de panel : 22"Curvo/Plano : PlanoColores : 16.7MTipo de panel : IPSResolución : 1920 x 1080s', img: 'monitor.jpeg', precio: 200.999},
    { nombre: 'Cooler Cpu Watercooler Gamemax Iceburg 360 Rainbow 295W', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'cooler.jpeg', precio: 4500.5},
    { nombre: 'Teclado Gamer HyperX Alloy Origins', descripcion: 'Tamaño del enter : GrandeRetroiluminación del teclado : RGB', img: 'teclado.jpeg', precio: 10000.99},
    { nombre: 'Tableta Gráfica Xp Pen Deco Pro Small', descripcion: 'Sensibilidad a la presion : 8192 nivelesResolucion : 5080 LPITasa de informe : Max 200Rueda mecánica : 1', img: 'tablagrafica.jpeg', precio: 129000.99}
  ];

 constructor() { }

 ngOnInit() {

 }
}