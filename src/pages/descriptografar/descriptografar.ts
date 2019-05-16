import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-descriptografar',
  templateUrl: 'descriptografar.html'
})
export class DescriptografarPage {

  rtd
  
  constructor(public navCtrl: NavController) {
  }

  // ***************************************************************************

  CaesarDecryption (code,key ) {

    var codigo=code
// ******************************************************************************

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

  var tiraPonto = palavraSemAcento
  // .toLowerCase();
 
  // Vai receber a palavra se sinais
  var res=[]; 
  
  var vetor = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];





      for(var i=0;i<tiraPonto.length;i++){

          for(var j=0;j<vetor.length;j++){

              if(tiraPonto[i]==vetor[j]){
                 
                  res[i]=vetor[j]

                 
              }

          }


      }


       var psac = (res.join(""))
     
     var  encryptedString = psac
      // .replace(/ /g,"")





// ******************************************************************************
            
              

            var chave =key
             
            var unshiftAmount =parseInt(chave)


              var plainText = "";
             
              for(var i = 0; i < encryptedString.length; i++) {
                  var encryptedCharacter = encryptedString.charCodeAt(i);
                  if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
                      plainText += String.fromCharCode((encryptedCharacter-97 - unshiftAmount + 26) %26 + 97 );
                  } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
                      plainText += String.fromCharCode((encryptedCharacter-65 - unshiftAmount + 26) %26 + 65 );
                  } else {
                     var plainCharacter
                      plainText += String.fromCharCode(plainCharacter);
                  }
                  
              }
              
            
            this.rtd=plainText
              
          }

  // ***************************************************************************
  
}
