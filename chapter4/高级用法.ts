class Greeter {
    static standardGreeting = ' Hello , three'

    greeting :string
    constructor(message?:string){
        this.greeting = message
    }

    greet(){
        if(this.greeting){
            console.log(this.greeting)
        }else{
            return Greeter.standardGreeting
        }
    }
}

// 修改静态属性
let greeterMaker :typeof Greeter = Greeter 
greeterMaker.standardGreeting = 'hey there'

interface Point {
    x:number
    y:number 
}

interface Point3D extends Point{
    z:number
}

let point3D:Point3D = {x:1,y:2,z:3}