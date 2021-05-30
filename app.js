class NameField {
    constructor(name) {
        const field = document.createElement('li')
        field.textContent = name;
        const HandleNames = document.querySelector('#names')
        HandleNames.appendChild(field)
    }
}

class GenerateNames {
    constructor() {
        const btn = document.querySelector('button')
        this.names = ['Illia', 'Berny', 'Taylor']
        this.currentNameIndex = 0;
        btn.addEventListener('click', () => {
            this.addNames()
        })
    }

    addNames(){
        console.log(this)
        const name = new NameField(this.names[this.currentNameIndex])
        this.currentNameIndex++;
        if (this.currentNameIndex >= this.names.length){
            this.currentNameIndex = 0;
        }
    }
}

const gen = new GenerateNames()