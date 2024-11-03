/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function calcularIMC(){
  let peso=document.getElementById("txtPeso").value;
  let altura =document.getElementById("txtAltura").value;
  let txtRes="";
  let imc=(peso)/(Math.pow(altura,2));
  document.getElementById("resIMC").innerHTML=imc;
  if(imc<18)
      txtRes="Tu peso es Bajo";
  else if(imc<25)
      txtRes="Tu peso es ideal";
      else if(imc <30)
          txtRes="Tienes sobrepeso";
          else 
              txtRes="Tienes Obecidad";
  document.getElementById("txtRes").innerHTML=txtRes; 
}
