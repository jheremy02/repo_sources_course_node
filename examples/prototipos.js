'use strict';

function Persona(nombre) {
    this.nombre=nombre;
    //this.saluda=()=>console.log(`Soy ${this.nombre}`)
}

Persona.prototype.saluda=(name)=>console.log(`Hala madrid`);
Persona.prototype.despedir=()=>console.log('Adios lokitas')

const maria=new Persona();
const paco= new Persona();

maria.saluda("Karim")
paco.saluda("Modric")

//HERENCIA DE PERSONA

function Agente(nombre)  {
    // heredar el constructor de Persona
    //llamara a Persona con mi 'this'

    Persona.bind(this)(nombre)
     

}

//heredar las propiedades y metodos de las personas
// poner en el prototipo de los agentes , una persona

Agente.prototype=Object.create(Persona.prototype);
Agente.prototype.constructor=Agente;


const smith=new Agente('Smith');

smith.saluda();
smith.despedir();


//HERENCIA MULTIPLE


function Superheroe() {
    this.vuela=function () {
        console.log(this.nombre,'vuela')
    }
}


//Para que los agentes hereden tambien de los superheroes , uso el patron mixin
// o sea , copiar todas las propiedades de un superheroe al prototipo de los agentes

Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
