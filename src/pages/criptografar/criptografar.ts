import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-criptografar',
  templateUrl: 'criptografar.html'
})
export class CriptografarPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page


   Resultado

  constructor(public navCtrl: NavController) {
  }

  Criptografa(codigo,chave){

  
      // *************************************************************************************
      // Retira acentos

      var palavraSemAcento ="";
      var caracterComAcento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
      var caracterSemAcento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";

      for (var i = 0; i < codigo.length; i++)
      {
      var char = codigo.substr(i, 1);
      var indexAcento = caracterComAcento.indexOf(char);
      if (indexAcento != -1) 
      {
      palavraSemAcento += caracterSemAcento.substr(indexAcento, 1);
      } 
      else 
      {
      palavraSemAcento += char;
      }
      
    }

     



      // *************************************************************************************

      var frase = "";
			var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      
      frase = palavraSemAcento

		  var off = chave
			var x = parseInt(off);
			var keep = [];

			for (var i = 0; i < frase.length; i++)
			{
			 if(frase[i] != ' ')
			 {
			   for (var j = 0; j < alfa.length; j++)
			   {
			     if (frase[i] == alfa[j])
			     {
           
              keep[i] =  alfa[(j + x) % alfa.length];

            
              break;          
            

			     }
			   }
			 }
			 else
			 {
			   keep[i] = ' ';
			 }
			}
			this.Resultado = (keep.join(""));

   
  }
  
}
