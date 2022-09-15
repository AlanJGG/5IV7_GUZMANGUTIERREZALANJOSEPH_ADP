/**
 * 
 * Una promesa es algo que no se debe de romper
 * la siguiente función será utilizda como un call-back en caso de que la operacion sea exitosa
 */

const fueExitosa = (resultado) => {

    console.log(`La operación fue exitosa ${resultado}` );


}
//erronea

const fueErronea = (resultado) => {

    console.log(`La operación falló ${resultado}` );

}

/**
 * Una promesa recibe una función principlal que tiene dos parametros, el callback exitoso o en caso 
 * contrario
 * debe tener formato de req, res
 */

const miPromesaSiFunciona= new Promise ((salioBien, salioMal) =>{

/**
 * en la función principal va codigo que no se pueda completar de forma sincrona o instantanea tal como
 * peticiones a un servidor externo
 */

    try{

        const division= 10/5;
        //como no hay nada malo, devuelve true

        salioBien(division);
    }
    catch(e){

        salioMal(e);
    }
});

/**
 * hay dos formas de usar los callback, pasando en el then o pasandosolo la de exito en el then usando un 
 * catch
 */

miPromesaSiFunciona.then(fueExitosa, fueErronea);

miPromesaSiFunciona.then(fueExitosa).catch(fueErronea);

//tambien se puede usra por funciones anonimas

miPromesaSiFunciona.then((resultado) =>{

    console.log(`La operación fue exitosa ${resultado}`);

}).catch((resultado)=>{

    console.log(`La operación fue falló ${resultado}`);
});

/**
 * algo importante de las promesas, es recordar que no se ejecutan de forma simultanea, sino que una vez 
 * que termina su ejecucion con then determina que hacer
 */

//para una funcion flecha podeos cambiarla por const.
const unaFuncionFlechaAsincrona = async () =>{
    const resultadoDeLaPromesa = await
    miPromesaSiFunciona.then((resultado) => {console.log(`La operación fue exitosa${resultado}`);
    return resultado;
});

/**
 * La variable reusltado de la promesa contiene el valor
 *  del resultado que esta en elr eturn, pero solo poorque
 *  usamos await porque tiene una promesa y no podriamos hacer uso del resultado
 */

console.log("chiyo chiyo vhiyp porque sale d ela funcion flecha rara del await");

console.log(resultadoDeLaPromesa);

}

unaFuncionFlechaAsincrona();
