const fs = require('fs')
const path = require('path')

module.exports = class Product {
    constructor(t) {
        this.title = t
    }
    save() {
        //products.push(this)
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        )
        fs.readFile(p, (err, fileContent) => {
            let products = []
        if(!err){
            products= JSON.parse(fileContent)
        }
        products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.error(err)
            })
        })
    }
    static fetchAll() {
        fs.readFile(p, (err, fileContent) => {
            
        })
        return products

    }
}