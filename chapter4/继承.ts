class Animal {
    move(distance :number = 0){
        console.log('Animal moveed '+ distance +'m')
    }
}


class Dog extends Animal{
    bark(){
        console.log('wang wang')
    }
}


const dog = new Dog()

dog.bark()
dog.move(19)