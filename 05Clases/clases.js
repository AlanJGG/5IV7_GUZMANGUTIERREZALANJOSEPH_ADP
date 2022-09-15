/**
 * 
 * Crear plantilla de clases para figuras geométricas
 */

class FiguraGeometrica{

    //constructor

    constructor(){

        //puede o no tener implementación
    }
    //métodos

    area(){

        //método para calcular el área
    }
    perimetro(){

        //metodo para calcular el permimetro
        console.log("Este método calcula el perímetro de una figura");
    }


}

//aplicamos herencia a la clase

class Rectangulo extends FiguraGeometrica{

    constructor(base, altura){

        //hacemos el constructor del padre

        super();
        this._base= base;
        this._altura= altura;
        this._area= null;
        this._actualizarArea= false;
        this._actualizarPerimetro= false;

    }
    //metodo para calcular area
    calcularArea(){

        return this._base* this._altura;
    }

    calcularPerimetro(){

        return (this._base+ this._altura) * 2;

    }

    //hay que crear los setters para llamar a la modificación de los atributos

    set base(base){

        this._base= base;
        //si cambia la base tenemos que actualizar el área y el perímetro
        this._actualizarArea= true;
        this._actualizarPerimetro= true;
    }

    set altura(altura){

        this._altura= altura;
        //si cambia la base tenemos que actualizar el área y el perímetro
        this._actualizarArea= true;
        this._actualizarPerimetro= true;
    }

    //ahora los get

    get area(){

        if (this._actualizarArea || this._area) {
            this._area= this.calcularArea();
        }
        return this._area;
    }

    get perimetro(){

        if (this._actualizarPerimetro || this._perimetro) {
            this._perimetro= this.calcularPerimetro();
        }
        return this._perimetro;
    }

    //creamos objeto


}
const objetoRectangulo= new Rectangulo(2, 5);

//salida

console.log(objetoRectangulo.area);

objetoRectangulo.base =5;

console.log(objetoRectangulo.area);