function identity<T>(arg:T):T{
    return arg
}

//泛型接口
interface GenericIdentityFn<T>{
    (arg:T):T
}

let myIdnetity :GenericIdentityFn<number> = identity