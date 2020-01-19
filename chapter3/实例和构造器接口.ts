//类有两部分，一部分是实例的，一部分是构造器接口的类型
//实例部分接口
interface ClockInterface{
    tick()
}
//构造器部分接口
interface ClockConstructor{
    new(hour:number,minute:number):ClockInterface
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
    return new ctor(hour,minute);
}

class DigitalClock implements ClockInterface{
    constructor(h:number,m:number){

    }

    tick(){
        console.log('beep beep')
    }
}

class AnalolgClock implements ClockInterface{
    constructor(h:number,m:number){

    }

    tick(){
        console.log('....')
    }
}