let s = 'foo'
s =null
let sn :string | null = 'bar'


function f(x:number ,y?:number){
    return x + (y|| 0)
}


f(1,undefined)


function broken(name:string |null):string{
    function postfix(epither:string){
        return name!.charAt(0)  + '. this' + epither
    }

    name = name || 'Bob'

    return postfix(name)
}