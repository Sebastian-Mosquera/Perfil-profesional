// alert("FUNCTIONS ACTIVO");
// ############# tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales 
var days = 10;
var name = "Sebasian Mosquera";
// let para variables de bloque o locales
let count = 1;

// ############### formas de impresion 
// alert
// alert(name);
// console.log
console.log(name);
// body - pantalla 
document.write(name + "Sebastian Mosquera");
document.getElementById("box_one").innerHTML = "<h1>Sebastian Mosquera</h1>"
document.getElementById("box_two").innerText = "<h1>Sebastian Mosquera</h1>"
// librerias
// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )
Swal.fire({
    icon: 'error',
    title: name,
    text: name,
    footer: "footer: " + name,
    background:'green',
    position: 'top-start'
});


// ########## tipos de datos
// numericos
var number_one = 20;
var number_two = 5.5;
// texto
var class_type = "Eléctiva Técnica 1";
// booleanos 
var boolean = true; //false

// arrays - vectores 
var array_num = [1,2,3,45,3.4,1.2];
var array_tex = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
var array_mix = [1, "a",2,"c"];
var array_mul = [
    {name:"Sebastián", last_name:"Mosquera",age:"20"},
    {name:"Andres", last_name:"Rojas",age:"19"},
    {name:"Julian", last_name:"Enrique",age:"18"},
    {name:"Pedro", last_name:"Gonzales",age:"22"}

]


// ########### operadores básicos
// suma
var suma = number_one + number_two;
console.log("Suma"  + suma);
// resta
var resta = number_one - number_two;
console.log("Resta"  + resta);
// multiplicación
var multi = number_one * number_two;
console.log("Multiplicaión"  + multi);
// division
var divi = number_one / number_two;
console.log("División"  + divi);
// modulo
var modulo = number_one % number_two;
console.log("Módulo"  + modulo);
