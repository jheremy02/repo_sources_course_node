'use strict';

let name={
    firtsName:'Minato',
    lastName:'Uzumaki'
}

let name2={
    firtsName:'Madara',
    lastName:'Uchiha'
}

let printFullName=function (homeTown , state) {
    console.log(`${this.firtsName} ${this.lastName} from ${homeTown} ${state}`)


}

printFullName.call(name,'Old Trafford','Manchester')