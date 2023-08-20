var bird ={
    haswings:true,
    canfly:true,
    hasfeathers:true
}

var eagle= Object.create(bird);// bird object will be the prototype for eagle

console.log(eagle)
console.log(eagle.haswings)

var penguin= Object.create(bird);
penguin.canfly=false
console.log(penguin)

//assignment
// Task 1: Code a Person class
class Person{
    constructor(name,age,energy)
    {
        this.name =name
        this.age=age
        this.energy=energy
    }
    sleep() {
        this.energy+=10
    }
    doSomethingFun() {
        this.energy-=10
    }
}
const obj1= new Person("Tom",20,100)
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name,age,energy,xp=0,hourlyWage=10)
    {
        this.name =name
        this.age=age
        this.energy = energy
        this.xp=xp
        this.hourlyWage=hourlyWage
    }
    sleep() {
        this.energy+=10
    }
    doSomethingFun() {
        this.energy -= 10
    }
    goToWork(){
        this.xp+=10
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    const obj2 = new Worker("Bob", 21, 110)
    obj2.goToWork()
    return obj2
}

// Task 4: Code a manager object, methods
function manager() {
    const obj3 = new Worker("Alice", 30, 120, 100, 30)
    obj3.doSomethingFun()
    return obj3
}