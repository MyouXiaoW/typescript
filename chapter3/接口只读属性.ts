//只读属性
interface Point {
    readonly x :number,
    readonly y:number
}


let p1: Point = {x:10,y:20}

//泛型只读数组
let a :number[] =[1,2,3,4]
let ro :ReadonlyArray<number> = a 

//a=ro这样写就是错误的写法

a= ro as number[]
