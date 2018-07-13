var numeroAciertos=0;
function validar1(){
    /*pregunta 1*/
    console.log("stas");
    var almacen = window.localStorage;
    numeroAciertos=Number(almacen.getItem("na"));

   var p11= document.getElementById("p11").checked;
   var p12= document.getElementById("p12").checked;
   var p13= document.getElementById("p13").checked;
   var p14= document.getElementById("p14").checked;
   var respuesta1 = document.getElementById("respuesta1");
 
   if (p11==true){
       numeroAciertos++;
       respuesta1.innerHTML="<img src='./imagenes/correcto.png'>";
   }else{
       respuesta1.innerHTML="<img src='./imagenes/incorrecto.png'>";
   }

   console.log(numeroAciertos);
   almacen.setItem("na",numeroAciertos);
}

function validar2(){
     
   /*pregunta 2*/
   console.log("stas");
   var almacen = window.localStorage;
   numeroAciertos=Number(almacen.getItem("na"));

   var p21= document.getElementById("p21").checked;
   var p22= document.getElementById("p22").checked;
   var p23= document.getElementById("p23").checked;
   var p24= document.getElementById("p24").checked;
   var respuesta2 = document.getElementById("respuesta2");
 
   if (p23==true){
       respuesta2.innerHTML="<img src='./imagenes/correcto.png'>"; 
       numeroAciertos++; 
   }else{respuesta2.innerHTML="<img src='./imagenes/incorrecto.png'>";}
   console.log(numeroAciertos);
   almacen.setItem("na",numeroAciertos);

}

function validar3(){
     
    /*pregunta 3*/
    console.log("stas");
    var almacen = window.localStorage;
    numeroAciertos=Number(almacen.getItem("na"));

    var p31= document.getElementById("p31").checked;
    var p32= document.getElementById("p32").checked;
    var p33= document.getElementById("p33").checked;
    var p34= document.getElementById("p34").checked;
    var respuesta3 = document.getElementById("respuesta3");
  
    if (p33==true){
        respuesta3.innerHTML="<img src='./imagenes/correcto.png'>";
        numeroAciertos++;  
    }else{respuesta3.innerHTML="<img src='./imagenes/incorrecto.png'>";}
    console.log(numeroAciertos);
   almacen.setItem("na",numeroAciertos);
 
 }
 function validar4(){
     
    /*pregunta 4*/
    console.log("stas");
    var almacen = window.localStorage;
    numeroAciertos=Number(almacen.getItem("na"));

    var p41= document.getElementById("p41").checked;
    var p42= document.getElementById("p42").checked;
    var p43= document.getElementById("p43").checked;
    var p44= document.getElementById("p44").checked;
    var respuesta4 = document.getElementById("respuesta4");
  
    if (p44==true){
        respuesta4.innerHTML="<img src='./imagenes/correcto.png'>";  
        numeroAciertos++;
    }else{respuesta4.innerHTML="<img src='./imagenes/incorrecto.png'>";}
    console.log(numeroAciertos);
   almacen.setItem("na",numeroAciertos);
 
 }

/*cronometro*/
var tiempo = 61;
setInterval(descontar,1000);
function pasaeltiempo(){
    if (tiempo==-1){
        respuesta1.innerHTML="demasiado tarde en contestar";
        
    
    } 
}
function descontar(){
    tiempo=tiempo-1;
    var crono= document.getElementById("cronometro");
    crono.innerHTML= tiempo;
   pasaeltiempo();
}
function aciertos(){
    var nota= document.getElementById("respuesta5");
     if (numeroAciertos>=4){
     respuesta5.innerHTML="Has sacado un 100% y por tanto tienes un ¡10!";
     }else if(numeroAciertos<3){respuesta5.innerHTML="SUSPENSO";}
}

