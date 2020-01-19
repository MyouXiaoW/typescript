interface Square {
    color:string,
    area:number
}

//可选属性
interface SquareConfig {
    color?:string,
    width?:number,
}


function createSquare (config:SquareConfig):Square{
    let newSquare = {color:'width',area:100}

    if(config.color){
        newSquare.color = config.color
    }


    if(config.width){
        newSquare.area = config.width * config.width
    }



    return newSquare

}