const person = {
    name: 'Ihor',
    age: 33,
    greet(){
        console.log(this)
        console.log(`Hi ${this.name}, you are ${this.age}`)
    }
}

person.greet();