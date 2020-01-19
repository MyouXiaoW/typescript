//下面这种方式定义的函数的形参会要定义顺序，接口的方式就不需要
//遵循鸭子原则
function printLabel(labelObject:{label:string}){
    console.log(labelObject.label)

}

let myObject ={size:10, label :'Size 10 Object'}

printLabel(myObject)


//ts中有一个interface 接口
//在interface中不需要存在顺序，只要有这个属性就可以

interface LabelledValue{
    label:string 
}

function printLabel1 (labelObject:LabelledValue){
    console.log(labelObject)
}