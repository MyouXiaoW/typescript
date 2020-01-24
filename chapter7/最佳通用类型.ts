let x = [0,1,null]

class Animal {
    numLess:number
}


class Bee extends Animal {

}


class Lion extends Animal {

}

let zoo = [new Bee(),new Lion()]


//上下文类型
window.onmousedown = function(mouseEvent:any){
    console.log(mouseEvent.clickTime)
}