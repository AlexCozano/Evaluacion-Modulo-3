//querySelector y querySelectorAll
//document: es un objeto que carga el archivo html completo
var t1= document.querySelector("#titulo");
console.log(t1);
var t2=document.querySelector("h1");
console.log(t2);

//cargar un div
/*var div =document.querySelector("div");
var img =document.querySelector("img");
var p =document.querySelector("#p");
var a =document.querySelector(".a");*/

//-------------------------------
//innerText: cambia el texto interno de una etiqueta <> este texto</>
t1.innerText = "Título Cambiado";

//cambiar el texto del primer párrafo query selector siempre carga el primer elemento que encuentra del tipo llam,ado
var p1 = document.querySelector("p");

//cambiar el texto del primer párrafo query selector siempre carga el primer elemento que encuentra del tipo llam,ado
p1.innerText="parrafo 1 cambiado";

//cambiar color de Fondo
//p1.style="backgroud-color:red"; //no es recomendable hacerlo desde js
//asirganr una clase css
p1.className="fondoRojo"; //cambia la clase asignada
p1.classList.add=("fondoRojo");

//cargar el link desde html
var a1=document.querySelector("a");
//cambiar el texto
a1.innerText="ir a EMOL";
//cambiar
a1.setAttribute("href","https://www.emol.com");
//cambiar imagen
var img1 = document.querySelector("img");
img1.setAttribute("src", "https://www.nationalgeographic.com.es/medio/2021/09/21/volcan-tungurahua_934dcca9.jpg");

/* para modificar un elemento HTML (nodo o etiqueta)
1.- se carga mediante el query selector
2.- se usa una funcion o propiedad
innerText
style
classname
classlist.add
setAtribute
*/

//eventos---------------------------------------------
//se define una funcion para un evento cualquiera
//click, se usa la funcion addEventListener

var t3 = document.querySelector("#titulo");
//cambiar fondo a azul cuando hagamos click
t3.addEventListener("click",function(e){
    t3.className="fondoAzul";
})


//mouse in y mouse out
var p2 = document.querySelector("p");

//agregar evento para que cambie a fondo azul
p2.addEventListener("mouseover",function(e){
    p2.className="fondoRojo";
})
//cuando se pasa el mouse por encima sin hacer click, cambia parrafo 1 también
p2.addEventListener("mouseout",function(e){
    p2.className="fondoAzul";
})

//agregar sombra al pasar el mouse sobre la foto, modifica el parrafo1

var foto=document.querySelector("img");
foto.addEventListener("mouseover",function(e){
    foto.className="sombra";
    p2.className="fondoAzul";
})
foto.addEventListener("mouseout", function(e){
    foto.className="nosombra";
    p2.className="fondoRojo";
})

//querySelectorAll
var parrafos=document.querySelectorAll("p");
console.log(parrafos);
parrafos[1].className="bordeMorado";
parrafos[2].className="sombra";


//cargar toso los elementos li
var lista=document.querySelectorAll("li");
/*
lista[0].className="bordeMorado";
lista[1].className="bordeMorado";
lista[2].className="bordeMorado";
lista[3].className="bordeMorado";
lista[4].className="bordeMorado";
lista[5].className="bordeMorado";
lista[6].className="bordeMorado";
lista[7].className="bordeMorado";
lista[8].className="bordeMorado";
lista[9].className="bordeMorado";
*/

for(i=0;i<lista.length;i++){
    console.log(i);
    lista[i].className="bordeMorado";
}

//-----------------------------------------------
//Math
Math.random() //número aleatorio entre 0 y 1

//número entre 0 y 100
for (i=0;i<100;i++){
    console.log(Math.random()*100)
}

//usar Math.floor, quita los decimales, quedan números enteros entre 0 y 100
for (i=0;i<100;i++){
    console.log(Math.floor(Math.random)*100)
}

//Math.floor(Math.random()*máximo);
//les entrega número entre 0 y el máximo
//sin incluir el máximo











