class Aniamal {
    private name:string

    public constructor(name:string){
        this.name = name
    }

    public move(distance:number = 0){
        console.log(`${this.name} moved ${distance}`)
    }
}

class Rhino extends Aniamal {
    constructor(){
        super('Rhino')
    }
}

class Emloyee {
    private name:string 
    constructor(name:string){
        this.name = name 
    }
}

let animal = new Aniamal('Goat')
let rhino = new Rhino()
let employee = new Emloyee('bob')

// 因为animal和rhino的私有变量是一样的所以可以这样写
animal  = rhino
//animal和employee是不一样的私有变量所以不能这样写
animal = employee