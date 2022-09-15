

/*
    MANEJO DE VARIABLES JS ES6
*/

if(true){
    //se declara por primera vez x
    //var x= "x";
    let x="x";
    //contiene el caracter

    console.log(x);

}

//variable x sigue existiendo y conserva su valor
//la variable x ya no existe ya que pertenece al bloque delimitado por las llaves del if por lo que la siguiente linea provoca un error 
//ReferenceError

console.log(x);

//la variable x se redeclara con el valor y

//var x = "y";
 //const x="y";
var x ="y";
 /**
  * como el tipo de variable de x es constante la siguiente línea de código provoca un error TypeError para el comportamiento deseado, por 
  * lo tanto, el tipo de variable debería de ser let
  */
//la variable x ahora vale y

console.log(x);

x="z";

//ahora la variable vale z

console.log(x);


