interface Fish{
    swim()
}

interface Bird{

}

//类型保护 is typeof instanceof

//类型谓词
function isFish(pet:Fish|Bird):pet is Fish{
    return (pet as Fish).swim !==undefined
}

function paddLeft1(value:string,padding:string | number){
    return typeof x === 'number'
}

function isString(x:any):x is string {
    return typeof x ==='string'
}
