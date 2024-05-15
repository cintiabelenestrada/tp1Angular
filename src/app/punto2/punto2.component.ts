import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {

  // iteracionActual = 0;
  // aciertos = 0;
  // errores = 0;

  palabras: string[] = ['casa', 'pan'];
  contadorVocales: number[] = [2, 1]; // defino cantidad de vocales para cada palabra
  palabraActual: string | undefined = this.traerPalabra();
  posicionPalabraActual: number = 0;
  // opciones: string[] = ['vocales', 'consonantes', 'letras', 'silabas'];
  // opcionSeleccionada: string | undefined;
  
  public traerPalabra(): string{
    console.log("ingresa a traerPalabra");
    
    let indice = Math.floor(Math.random() * this.palabras.length);
    this.posicionPalabraActual = indice;
    this.palabraActual = this.palabras[indice];
    console.log("ingresa a traerPalabra - posicionPalabraActual ", this.posicionPalabraActual);

    return this.palabraActual;
  }

  public vocaluno(): void {
    console.log("this.posicionPalabraActual ", this.posicionPalabraActual);
    
    // this.contadorVocales[1];
    console.log("la palabra: ",this.palabraActual, "tiene ",this.contadorVocales[this.posicionPalabraActual], "vocales");
  }


}   












// public contarVocales(palabra: string): number {
//   let contador = 0;
//   for (let i = 0; i < palabra.length; i++) {
//     if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u') {
//       contador++;
//     }
//   }
//   return contador;
// }