// alert("function activo");
//#################### tipo de varibles//
// const (valores constantes)
const pi = 3.1415;
const pul = 2.54;
// var (para variables globales)
var days = 10;
var name = "Sebastián Mosquera";
// let (variables de bloque o locales)
let count = 1;

//################# formas de impresion//
// alert
// alert(name);
// console.log
console.log(name);
// body - pantalla
document.write(name + "###Sebastián Mosquera")
document.getElementById("box_one").innerHTML= "<h1>Sebastián Mosquera</h1>";
document.getElementById("box_two").innerText= "<h1>Sebastián Mosquera</h1>";
// librerias
Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  )
Swal.fire({
    icon: 'error',
    ShowConfirmButton: false,
    title:name,
    text: name,
    footer: "footer: " + name,
    background: 'white',
    position:'top-start' 
});

//##################tipos de datos
//numericos
var number_one=20;
var number_two=5.5;
// texto
var class_type= "Electiva Tecnica 1";
// booleanos
 var boolean = true; //false
//  arrays - vectores
var array_num=[1,2,3,45,3.4,1.2];
var array_text=["lunes", "Martes", "Miercoles", "jueves", "Viernes", "Sabado", "Domingo"];
var array_mix=[1, "a",2, "c"]
var array_mul=[
    {name:"Sebastian", last_name:"Mosquera", age:"20"},
    {name:"Juan", last_name:"Gutierrez", age:"15"},
    {name:"Pedro", last_name:"Ramirez", age:"43"},
    {name:"Hector", last_name:"Hernandez", age:"73"}
]

//#################### operadores basicos
// suma
var suma= number_one + number_two;
console.log("Suma = " +suma);
// resta
var resta= number_one - number_two;
console.log("Resta = " +resta);
// multiplicacion 
var multi= number_one * number_two;
console.log("Multiplicacion = " +multi)
// Division 
var divi= number_one / number_two;
console.log("Division = " +divi.toFixed(2));
// Modulo 
var modulo= number_one % number_two;
console.log("Modulo = " +modulo);

// OPERADORES LOGICOS (INVERSE,INCREMENTO Y DECREMENTO)
// AND && con if (&&=ampersand)
// "=" (asignacion), "==" (comparacion), "===" (compara el dato y el tipo de valor)
var bool=true;
var numeric= 10;
if(bool && numeric==="10"){
    console.log("Entra If");
} 
else{
    console.log("Entra Else");
}
// OR || CON IF 
var bool=true;
var numeric= 7;
if(bool || numeric ==7){
    console.log("Entra If");
    numeric+=3;
}
else{
    console.log("Entra Else");
    numeric--;}
console.log(numeric);

// FOR
// console.log(("longitud: ") + array_text.length)
for(let j =0; j<array_text.length; j++){
    console.log(array_text[j] + " " + (j+1))
}

// While
let s=0;
console.log("While");
while(s<array_text.length){
    console.log(array_text[s] + " " + (s+1));
    s++
}
//  DO WHILE
let m = 0;
console.log("Do While");
do{
    console.log(array_text[m] + " " + (m+1));
    m++;
}
while(m<array_text.length)


// FUNCIONES Y EVENTOS
function load_page(){
    // alert("LA PAGINA HA CARGADO CORRECTAMENTE")
}

function change_color(){
    document.body.style.backgroundColor ="red"
    document.body.style.color="#fff"
}

const btn_limpiar = document.querySelector("#clear_color");

clear_color.addEventListener("click", () => {
    document.body.style.backgroundColor ="#fff"
    document.body.style.color="#000"
});

// REGISTRO FORMULARIO
const form_register = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const information = document.getElementById("information");

form_register.addEventListener("submit", name_event =>{
    name_event.preventDefault();
    let info = "";
    console.log(nombres.value);
    if(nombres.value.length <= 2 || apellidos.value.length <=2){
        info += "NOMBRES Y/O APELLIDOS INVALIDOS";
        information.style.color= "red";
    }
    else{
        alert(nombres.value + " " + apellidos.value)
    }
    information.innerText = info;
})
// FECHA Y EJERCICIO DE ARRAY
function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getMinutes());
    for(let j=0; j<array_mul.length;j++){
        console.log(array_mul[j].name);
    }
}

function validate(){
    let nombres = document.getElementById("nombres").value;
    let nombres_style = document.getElementById("nombres");
    if (nombres.length > 2){
        nombres_style.border = "2px solid green";
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
        alert(nombres.concat(" Gutierrez "));
    }
}
// let nombres = document.getElementById("nombres");
//     console.log(nombres);
//     
//     }
//     else{
//         alert("Nombre invalido")
//     }