import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  val1:number;
  rta:string;

  operacion(){
    var numero = this.val1;
    var unidades,decenas,centenas, millar;
    var output = '';

    unidades = numero%10; numero /= 10; 
    decenas = numero%10; numero /= 10;
    centenas = numero%10; numero /= 10;
    millar = numero%10; numero /= 10;

    switch(millar){
      case 1: output += 'M'; 
      case 2: this.rta = this.rta + 'MM'; break;
      case 3: this.rta = this.rta + 'MMM'; break;
    }

    switch(centenas){
      case 1: output += 'C'; 
      case 2: this.rta = this.rta + 'CC'; break;
      case 3: this.rta = this.rta + 'CCC'; break;
      case 4: this.rta = this.rta + 'CD'; break;
      case 5: this.rta = this.rta + 'D'; break;
      case 6: this.rta = this.rta + 'DC'; break;
      case 7: this.rta = this.rta + 'DCC'; break;
      case 8: this.rta = this.rta + 'DCCC'; break;
      case 9: this.rta = this.rta + 'CM'; break;
    }

    
    switch(decenas){
      case 1: this.rta = this.rta + 'X'; break;
      case 2: this.rta = this.rta + 'XX'; break;
      case 3: this.rta = this.rta + 'XXX'; break;
      case 4: this.rta = this.rta + 'XL'; break;
      case 5: this.rta = this.rta + 'L'; break;
      case 6: this.rta = this.rta + 'LX'; break;
      case 7: this.rta = this.rta + 'LXX'; break;
      case 8: this.rta = this.rta + 'LXXX'; break;
      case 9: this.rta = this.rta + 'XC'; break;
    }

    
    switch(unidades){
      case 1: this.rta = this.rta + 'I' ; break;
      case 2: this.rta = this.rta + 'II'; break;
      case 3: this.rta = this.rta + 'III'; break;
      case 4: this.rta = this.rta + 'IV'; break;
      case 5: this.rta = this.rta + 'V'; break;
      case 6: this.rta = this.rta + 'VI'; break;
      case 7: this.rta = this.rta + 'VII'; break;
      case 8: this.rta = this.rta + 'VIII'; break;
      case 9: this.rta = this.rta + 'IX'; break;
    } 

    this.rta = output;
  }

}
