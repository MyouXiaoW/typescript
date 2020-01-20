interface LengthWise{
    length:number
}

function loggingIdentity<T extends LengthWise>(arg:T):T{
    console.log(arg.length)
    return arg
}


function getProperty <T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

let x = {a:1,b:2,c:3,d:4}

getProperty(x,'a')
//错误实例
getProperty(x,'m')


function creat<T>(c:{new():T}):T{
    return new c()
}