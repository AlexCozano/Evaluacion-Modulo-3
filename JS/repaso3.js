//espacio  de memoria donde se guarda un dato.

var v3="var"; //global
let v1="var2"; //local dentro de {} (sólo existen ahí)
const v2="a"; //no permite cambios

//tipos de variables básicos

var num=123; //números
var textos="asdasd"; //texto
var booleanos=true; //verdadero o falso

//estructuras
var arreglos=[5,3,6,7,8]; //conjunto de elementos guardados en orden (tienen índice)
var arreglos=["hola", "que tal", 6, true]; //pueden contener cualquier cosa (numeros, textos, boobleanos, variables, funciones, etc.)

//objetos (2 tipos de objetos)
//1.- objetos sencillos, se crean con llaves
//SIEMPRE son un par "nombre de la propiedad":"valor", separados por ":".
//
var obj1={
    nombre:"denis",
    edad:43,
    mostrarDatos: function(){
        console.log("hola soy" + this.nombre)
    }
}

//2.- objetos a partir de clases
//Definición de la clase 
class Persona{
    constructor(nombre, edad){
        this.nombre,
        this.edad
    }
}

//crear un objeto (a partir de una clasepersona)
var p1 = new Persona("denis",43);
var p2 = new Persona("alexis",43);
var p3 = new Persona("sandra",43);
var p4 = new Persona("alejandro",43);
var p5 = new Persona("bruno",43);
var p6 = new Persona("paula",43);
var p7 = new Persona("denis",43);

//------------------------------
//acceder a los valores o propiedades de un objeto
p1.nombre; //denis
p1.edad; //43
//2.- con corchetes
p1["nombre"] //denis
p1["edad"] //43

console.log(p1,nombre);
console.log(p2.edad);
console.log(p3.mostrarDatos());

//------------------------------------------------------
//funciones
//grupo de instrucciones que tienen un objetivo
//las funciones son reutilizables
//2 tipos de funciones
//2.- funciones de procedimientos, que no devuelven nada
function escribirHastatres(){
    console.log(1);
    console.log(2);
    console.log(3);  
}

//las llamamos por su nombre y los parentesís (SIEMPRE)
escribirHastatres(); //no retorna nada
escribirHastatres();
escribirHastatres();
escribirHastatres();

//2.- funciones que retornan un valor, generalmente para realizar un calculo o transformar un elemento
function sumarHastaTres(){
    let suma=1+2+3;
    return suma
}

sumarHastaTres(); //me retorna 3

//funciones con parametros---------------------------------------
function escribir(palabra){
    console.log(palabra);
}

//llamo a la funcion con un parametro
escribir("chao");
escribir("que talk");
escribir("denis");
var letras="dfgdef";
escribir(letras);

/existen//variables: guardan datos //js
//parametros: guardan datos  //funciones
//propiedades: guardan datos //objetos

//------------------------------------------------------------------------------
//funciones anonimas, no se pueden llamar desde ninguna parte expeto donde son definidas
var miFuncion = function(){console.log("mi funcion")}; //se guarda la funcion en una variable, no se ejecutan
miFuncion(); //ejecuta la funcion que tiene guardada la variable

var elementoHTML=document.createElement("div");

elementoHTML.addEventListener("click",function(){
    console.log("dentro del click");
})































































































