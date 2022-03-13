function Person(name,lastName,yearsOld) {
    this.name=name,
    this.lastName=lastName,
    this.yearsOld=yearsOld
    this.saluda=function () {
        console.log('Hello world!!')
    }
}


function Player(name,lastName,yearsOld,club,position,number) {
    Person.call(this,name,lastName,yearsOld)
    this.club=club;
    this.position=position;
    this.number=number;
}


Person.prototype.insulta=()=>console.log('Vas bien lokita');
Player.prototype=Object.create(Person.prototype)

let player01=new Player('Marcos Alonso','Rodriguez',26,'Chelsea','lateral','8');


player01.saluda();
player01.insulta();



