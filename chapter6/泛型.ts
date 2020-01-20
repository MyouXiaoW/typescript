//类型变量
//泛型函数
function identity<T>(arg:T): T {
    return arg
}

//这种是正常的写法
// let outPut = identity<string>('myString')

//这种编译器会帮我们推断，建议这种写法
let outPut = identity('myString')


function loggingIdentity<T>(arg:T):T{
    console.log(arg.length)
    return arg
}