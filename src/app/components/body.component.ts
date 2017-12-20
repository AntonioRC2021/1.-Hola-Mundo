import  { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  }

  personajes:string[]  = ["Piccolo", "Vegeta", "Freezer", "Rapisu (Androide No.17)", "Rochi", "Goku", "Tenshinhan", "Gohan", "Kuririn", "Razuri (Androide No.18)"]

}
