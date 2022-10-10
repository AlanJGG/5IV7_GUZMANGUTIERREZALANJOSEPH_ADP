async function subirArchivoCifrar(file){

    var txt = await file.text();
    document.getElementById("Cifrar-output").textContent = txt;

}

const Cifrar = () => {
    
    var texto = document.getElementById('Cifrar-output').innerHTML;
    var clave = document.getElementById('clave').value;

    console.log(texto)

    if(clave == ''){

        alert('Ingresa una clave para el cifrado');
        
    }
    else{

        var encriptado = CryptoJS.DES.encrypt(texto, CryptoJS.enc.Utf8.parse (clave) , {
                
            mode : CryptoJS.mode.ECB , padding : CryptoJS.pad.Pkcs7
        
        }).toString();
        
        document.getElementById('Cifrar-output').innerHTML = 
        '<label>Mensaje cifrado:</label>'+
        '<h1 id = "resultado1">' + encriptado + '</h1>';

    }

}

const ValidarArchC = () =>{

    var archivo = document.getElementById('archivoCifrar');
    var archivoCont = archivo.value;
    var ext = /(.txt)$/i; 

    if(!ext.exec(archivoCont)){

        alert('Sólo puedes subir documentos de texto');
        archivo.value = '';
        return false;

    }
    else{

        if(archivo.files && archivo.files[0]){

            var reader = new FileReader();
            reader.onload = function(event){

                subirArchivoCifrar(archivo.files[0]); 

            }
        

            reader.readAsDataURL(archivo.files[0]);

        }

    }

}

async function subirArchivoDescifrar(file){

    var txt = await file.text();
    document.getElementById('Descifrar-output').textContent = txt;

}
const ValidarArchD = () =>{

    var archivoEscogido = document.getElementById('archivoDescifrar');
    var contenidoarchivoEscogido = archivoEscogido.value;
    var ext = /(.txt)$/i;

    if(!ext.exec(contenidoarchivoEscogido)){

        alert('Sólo puedes subir documentos de texto');
        archivoEscogido.value = '';
        return false;

    }
    else{

        if(archivoEscogido.files && archivoEscogido.files[0]){

            var lector = new FileReader();
            lector.onload = function(event){

                subirArchivoDescifrar(archivoEscogido.files[0]);

            }

            lector.readAsDataURL(archivoEscogido.files[0]);

        }

    }
}

const Descifrar = () => {

    var textoEnc = document.getElementById('Descifrar-output').innerHTML;
    var clave = document.getElementById('clave').value;

    if(clave == ''){

        alert('Ingresa una clave para el descifrado');

    }
    else{

        var desencriptado = CryptoJS.DES.decrypt(textoEnc, CryptoJS.enc.Utf8.parse(clave), {
            
            mode : CryptoJS.mode.ECB , padding: CryptoJS.pad.Pkcs7
        
        }).toString(CryptoJS.enc.Utf8);

        document.getElementById("Descifrar-output").innerHTML = 
        '<label>Mensaje descifrado: </label>'+
        '<h1 id = "resultado2">' + desencriptado + '</h1>';

    }
}



