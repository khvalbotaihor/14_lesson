class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
    const btn = document.querySelector('button');
    this.names = ['Ira','Robot','Blue'];
    this.FirstName = 0;
    btn.addEventListener('click', this.addName.bind(this))
    }

    addName(){
        const name = new NameField(this.names[this.FirstName]);
        this.FirstName++;
        if (this.FirstName >= this.names.length){
            this.FirstName=0;
        }
    }
}

const gen = new NameGenerator();
