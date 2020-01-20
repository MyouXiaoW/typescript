//可选参数必须在必须参数后面,
//必须参数，默认参数，可选参数，剩余参数
function buildName(firstName:string,lastName1='Smith',lastName?:string,...restOfName:string[]):string{
    return firstName + lastName + lastName1
}   