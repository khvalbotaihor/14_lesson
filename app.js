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
        this.names = ['Ira', 'Robot', 'Blue'];
        this.CurrentName = 0;
        console.log(this)
        btn.addEventListener('click', () => {
            this.addName();
        })
    }

    addName() {
        console.log(this)
        const name = new NameField(this.names[this.CurrentName]);
        this.CurrentName++;
        if (this.CurrentName >= this.names.length) {
            this.CurrentName = 0;
        }
    }
}

const gen = new NameGenerator();