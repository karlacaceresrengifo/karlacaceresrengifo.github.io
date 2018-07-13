function calcular(){
 var  juego1= document.getElementById("juego1").checked;
 var  juego2= document.getElementById("juego2").checked;
 var  juego3= document.getElementById("juego3").checked;
 var serie1 = document.getElementById("serie1").checked;
 var serie2 = document.getElementById("serie2").checked;
 var serie3 = document.getElementById("serie3").checked;
 var pelicula1 = document.getElementById("pelicula1").checked;
 var pelicula2 = document.getElementById("pelicula2").checked;
 var pelicula3 = document.getElementById("pelicula3").checked;  
 var marca = false;
 var precio=0;
// Declaracion de las condicionales de juego
  if( juego1==false && juego2==false && juego3== false) 
      {
       alert("Escoja al menos un juego");
       marca=true; 
      }

  
  if (juego1==true)
      {
      precio=precio + 34.90;
      console.log("juego1");
      }
  
  if (juego2==true)
    {
    precio=precio + 54.95;
    console.log("juego2");
    }
  if (juego3==true)
    {
    precio=precio + 23.90;
    console.log("juego3");
    }
// Declaracion de las condicionales de Series
  if (serie1==false && serie2==false && serie3==false)
    {
      alert("Por favor escoja al menos una serie");
      marca=true; 
    }         
  if(serie1==true)
    {
      precio=precio+60;
      console.log("serie 1");
    }
  if(serie2==true)
    {
      precio= precio+80;
      console.log("serie 2");
    }
  if(serie3==true){
      precio= precio+90;
      console.log("serie 3");
    }
  // Declaracion de las condicionales de Peliculas  
  if (pelicula1==false && pelicula2==false && pelicula3==false)
    {
     alert("Debe escojer al menos una pelicula");
     marca=true; 
    }

  if(pelicula1==true)
    {
      precio = precio+ 10.99;
      console.log("pelicula1");
    }
  else if(pelicula2==true)
    {
      precio = precio+ 9.99;
      console.log("pelicula2");
    }
  else if(pelicula3==true)
    {
      precio = precio+ 7.99;
      console.log("pelicula3");
    }
  if (marca==false){
  console.log("Cantidad de precio total: "+precio+"€");
  } else {
   alert("Escoja algo por favor;");
 }
}