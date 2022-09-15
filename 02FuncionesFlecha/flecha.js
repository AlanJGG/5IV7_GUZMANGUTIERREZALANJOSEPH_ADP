/**
 * una función flecha es una función que a diferencia de una normal, no genera su propio contexto (this), necesita ser declarada antes de 
 * ser usada y no necesita usar return o llaves para instrucciones de una sola línea 
 * 
 * 
 * 
 * Ejemplo:
 * función que devuelve la suma de dos números
 */

function sumaFuncionNormal(n1, n2){

    return n1+n2;


}

console.log(`sumaFuncionNormal(3, 4): ${
    sumaFuncionNormal(3,4)

}`);

//este es su equivalente como función flecha

const sumaFuncionFlecha= (n1, n2) =>n1+n2;

console.log(`sumaFuncionFlecha(4, 5): ${
    sumaFuncionNormal(4,5)

}`);

const sumaFuncionFlecha1= (n1, n2) => {

    return n1+n2
}

console.log(`sumaFuncionFlecha1(5, 6): ${
    sumaFuncionNormal(5,6)

}`);

/**
 * 
 * si queremos devolver un objeto en una sola línea con una función flecha debemos envolverlo primero entre parentesis
 */

const sumaFuncionFlecha2 = (n1, n2) => ({

    resultado : n1+n2
});

console.log(`sumaFuncionFlecha2(6, 7): ${
    sumaFuncionNormal(6, 7)

}`);

/**
 * 
 * Cuando la función flecha tiene un solo parametro no es necesario envolverlo entre parentesis
 */

const cuadradoFuncionFlecha= n1 => n1**2;

console.log(`cuadradoFuncionFlecha(7): ${
    cuadradoFuncionFlecha(7)

}`);
