/**
 * Vamos a crear un carrusel de imagen que se consume por medio
 * de una api
 */

window.onload = ( ) =>{

    //Imágenes
    const imagenes = [
        "https://w.wallhaven.cc/full/l3/wallhaven-l315vy.png", 
        "https://w.wallhaven.cc/full/j3/wallhaven-j3gz1w.jpg", 
        "https://w.wallhaven.cc/full/72/wallhaven-725mg9.png", 
        "https://w.wallhaven.cc/full/rd/wallhaven-rd83mq.jpg"
    ];

    /**
     * Con la API de DOM podemos acceder a documento HTML
     * para esto necesitamos buscar, estos nodos de alguna manera.
     * A partir de los ID's podemos buscar a los elementos de diferente forma:
     * por ID, nombre, clase, etiquetas.
     * De estos atributos sólo la busqueda por ID nos devolvera un único elemento, los demás nos 
     * devolverán una lista de nodos la cual no debe confundirse con un arreglo, podemos obtener
     * los botones.
     */

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    let imagenActual = 0;

    const imagenSiguiente = () =>{
        //Accedemos a la imagen dentro del arreglo
        //con su índice, cuando es la última
        //regresamos a la primera
        if(imagenActual < imagenes.length - 1){
            imagenActual++;
        } else {
            imagenActual = 0;
        }
        display.src = imagenenes[imagenActual];
    };

    const imagenAnterior = () =>{
        //Accedemos a la imagen dentro del arreglo
        //con su índice, cuando es la última
        //regresamos a la primera
        if(imagenActual > 0){
            imagenActual--;
        } else {
            imagenActual = imagenes.length;
        }
        display.src = imagenes[imagenActual];
    };

    const pantallaCompleta = () =>{
        /**
         * otra forma para ayyyy cuando se solicita la pantalla completa
         * nos devuelva una promesa chiquita por si queremos manejar el 
         * elemento de pantalla completa.
         */

        display.requestFullscreen();
    };

    const mostrarMensajes= () =>{

        /**
         * 
         *Otra de las cosas que se puede hacer es modificar el html interno de un elemento para modificar nuevos elementos
         */

         mensajes.innerHTML += `${campoMensaje.value}
         <br/>`;

         campoMensaje.value= "";

         /**
          * 
          * si queremos manipular los elementos recien creados
          * CreateElement
          * const lista= document.createElement("ul");
          * const elementoLista= document.createElement("li");
          * elementoLista.onclick=pantallaCompleta;
          * elementoLista.innerHTML=`${campoMensaje.value}`;
          * 
          * lista.append(elementoLista);
          * 
          * mensajes.append(lista);
          */
    };

    const cambiarColor= () =>{

        /**
         * 
         * en lugar de usar typecolor usamos un boton con un icono
         */

        colorValor.click();
    };

    const inicializar= () =>{

        /**
         * vamos a ver los botones
         */

        botones.find(boton => boton.id === "siguiente").onclick= imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick= imagenAnterior;
        botones.find(boton => boton.id === "pantallacompleta").onclick= pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick= mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick= cambiarColor;

        //en general podemos manipular cualquier atributo

        colorValor.onchange= () =>{

            mensajes.style.color= colorValor.value;
        }

        display.src= imagenes[0];
    }

    inicializar();

};