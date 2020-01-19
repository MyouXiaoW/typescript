abstract class Department {
    name:string 
    constructor(name:string){
        this.name = name 
    }

    printName():void{
        console.log(this.name)
    }

    abstract printMeeting():void
}

class AccountingDepartment extends Department {
    constructor(){
        super("Account")

    }

    printMeeting():void{
        console.log('the Accounting Departmeng meets each Monday at 10 am')
    }

    genterateReports():void{
        console.log('Generating Accounting reports')
    }
}

let department:Department = new AccountingDepartment()