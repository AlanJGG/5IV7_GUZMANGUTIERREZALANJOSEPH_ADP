//ejemplo de uso de bucles

const razasdePerros= [

    "Gran Danes",
    "Dogo de Burdeos",
    "Dogo Argentino",
    "San Bernardo",
    "Mastin del Pirineo",
    "Mastin Español",
    "Chihuahua",
    "Pastor Aleman",
    "Pastor Irlandes",
    "Pitbull"
]

/**
 * para esta version de javascript se agrego el bucle for of que permite iterar sobre los elementos de objetos iterables
 */

//primero con un for tradicional

for (let i=0; i<razasdePerros.length; i++){

    console.log(razasdePerros[i]);
}

//con forof

for (const raza of razasdePerros) {
    console.log(raza);
}

/**
 * también existe un bucle forin que itera sobre las llaves del objeto en el caso de un arreglo, estas llaves son los indices
 */

for (const i in razasdePerros) {

    console.log(razasdePerros[i]);
    
}