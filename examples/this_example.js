// this es un keyword de javascript el cual hace referencia al objeto ejecutor
// difiere con el this de java o el self de python los cuales hacen
//referencia a una instancia de clase

//Caso 1

//invocado desde un metodo

const player= {
    name:'Marcos Alonso',
    team:'Chelsea',
    greet:function () {
        console.log(this.name)
        console.log(this)
    }
}

player.greet()


const myApp={
    name:'Megan',
    lastName:'Fox',
    completeName: function(){return this.name + this.lastName}
}

console.log(myApp.completeName())

// CASO 2

//En este caso, existe una función que recibe un objeto como
//parámetro, y le agrega el método hablar, luego,
//se ejecuta la función sobre dos objetos.


let decirNombre=function (obj) {
    obj.hablar=function () {
        console.log(this.nombre)
        console.log(this)
    }
}

const mateo={
    nombre:'Mateo',
    edad:22
}

decirNombre(mateo);

mateo.hablar();

//CASO 3

/*
EN ESTE CASO TENEMOS UNA FUNCION QUE RETORNA UN OBJETO, QUE CONTIENE UN METODO
HABLAR, QUE INVOCA THIS 
*/

let Persona=function(nombre,edad,madre) {
    return {
        nombre:nombre,
        edad:edad,
        hablar:function (params) {
            console.log(this.nombre)
            console.log(this)
        },
        madre:{
            nombre:madre,
            hablar:function () {
                console.log(this.nombre)
                console.log(this)
            }
        }
    }
}

const ana=Persona('Ana',30,'Clara');

ana.hablar();

ana.madre.hablar()