const person = {
    name: 'Ihor',
    age: 33,
    greet(){
        console.log(this)
        console.log(`Hi ${this.name}, you are ${this.age}`)
    }
}

const printName = ({name}) => {
    return name
}

console.log(printName(person))

const {name, age} = person
console.log(name,age)


// person.greet();
// const coppiedPerson = {...person}
// console.log({coppiedPerson})

const hobbies = ['Sports', 'Coocking'];
//destructuring assignment
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1,hobbie2)
// for (let h of hobbies){
//     console.log(h)
// }
/*console.log(hobbies.map(hobbie => {
    return `Hobby: ${hobbie}`
}))*/
// hobbies.push('Programming')
// console.log(hobbies)
//
// //spread operator
// const coppiedArray = [... hobbies]
// console.log({coppiedArray})