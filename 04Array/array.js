/**
 * 
 * for each itera sobre los elementos del arreglo, no regresa nada, en la siguiente línea de código hace lo mismo que un bucle, pero 
 * itera sobre todos los elementos, cada que lo hace ejecuta una funcion subindice y el arreglo original
 */

razasdePerros.forEach((raza, i, arregloOriginal) => console.log(raza));

//en caso de que no utilicemos alguno de los parametros lo podemos omitir

razasdePerros.forEach([raza => console.log(raza)]);

/**
 * función map
 * itera sobre los elementos de un arreglo, regresa el arreglo con los que muestra una funcion de origen
 */

const razasdePerrosEnMayusculas= razasdePerros.map((raza, i, arregloOriginal)=> raza.toUpperCase())

/**
 * hay otras opciones útiles como por ejemplo find, que nos permite buscar un elemento dentro del arreglo si lo encuentra en este caso lo 
 * regresa y sino lanza "updefined", por ejemplo Chihuahua
 */

if(razasdePerros.find((raza, i, arregloOriginal) => raza=== "Chihuahua")){

    console.log("La raza se encuentra en el arreglo");

}else{

    razasdePerros.push("Chihuahua");
    console.log("Se agregó la raza");
}

/**
 * find index es similar, pero devuelve el indice, sino lo encuentra, devuelve -1. Esta funcion es util si debemos debemos verificar el 
 * elemento original dentro del arreglo
 */

const indicedeChihuahua = razasdePerros.findIndex((raza, i, arregloOriginal)=> raza ==="chihuahua")
    if((indicedeChihuahua)> -1){

        console.log(razasdePerros[indicedeChihuahua]);

        razasdePerros[indicedeChihuahua]+="(Raza de perro pequeño)";

        //resultado esperado

        console.log(razasdePerros[indicedeChihuahua]);
    }