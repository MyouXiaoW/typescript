interface Shape {
    color:string 
}

interface PenStroke {
    penWidth:number
}

interface Square extends Shape,PenStroke {
    sideLength:number
}


let square = {} as Square

square.color ='blue'
square.penWidth=10
square.sideLength=20