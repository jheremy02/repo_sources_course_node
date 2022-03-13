const person={
    name:'Bruce',
    lastName:'Wayne',
    fullName: function () {
        return `${this.name} ${this.lastName}`
    }
}

const print=function (greet,adj) {
    console.log(`${greet} ${this.fullName()} you are ${adj}`)
}

const printBinded=print.bind(person)

printBinded('Hi','wonderful')