class Grid {
    static origin = {x:0,y:0}

    scale:number

    constructor(scale:number){
        this.scale =scale
    }

    claculateDistanceFromOrigin(point:{x:number;y:number}){
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y

        // return Math.sqrt()
    }
}