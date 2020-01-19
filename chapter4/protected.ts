class Person {
    //受保护类型，只能在派生类中使用，只能在子类中使用，不可能在类的外部调用
    protected name:string 

    constructor(name:string){
        this.name =name
    }
}

class Employee extends Person {
    private department:string 

    constructor(name:string , department:string){
        super(name)
        this.department = department
    }

    getElevatorPitch(){
        return `${this.name} ${this.department}`
    }
}


let howard = new Employee('howard','Sales')
