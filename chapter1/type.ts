//数组
let list :number[] = [1,2,3]

//Array 是ts自己实现的
let list1 : Array<number> = [1,2,3]

//元祖
let x :[string,number] = ['1',2]


//枚举类型
enum Color{
    Red,
    Green,
    Blue
}
//可以编译查看一下源代码
let colorName:string = Color[2];
console.log(colorName)

//any类型
let notSure :any = 4
notSure = 'sadsadadsa'
notSure = false

let list3 :any[] = [1,2,3,'23','3']

//viod 表示没有任何值

function warnUser():void{
    console.log('this i my warning message')
}
let unusable:void = undefined

//null undefind
let u:undefined = undefined
let u2:null = undefined
let num:number = 3

//never 不存在的数据类型
//函数抛出异常
function error(message:string):never{
    throw new Error(message)
}

function fail(){
    return error('1111')
}

function inifiniteLoop():never{
    while(true){

    }
}

//object
declare function create(o:object |null):void;

//断言
let someValue:any = 'this is a string'
let strLength :number = (<string>someValue).length
let strLength1 :number = (someValue as string ).length