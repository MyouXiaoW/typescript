class GenericNumber<T>{
    zeroValue:T
    add:(x:T,y:T)=>T
}

let myGrenericNumber = new GenericNumber<number>()
myGrenericNumber.zeroValue = 0
myGrenericNumber.add = function(x,y){
    return x + y
}
