  var purchase1 ={ //this is an objec 
    shoes:50,
    stateTax: 1.2,
    totalprice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total Price:",calculation)
    }
}
purchase1.totalprice()
//can create multiple such objects
var purchase2 ={ //this is an objec 
    shoes:50,
    stateTax: 1.2,
    totalprice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log("Total Price:",calculation)
    }
}

//this keyword : alias of current object name

//Classes
class Car{
    constructor(color,speed){//The role of the constructor function is to assign the passed in parameters to the future objects properties. It is the constructor function that is used when instantiating new objects, instances of a given class
        this.color=color
        this.speed=speed
    }
    turboOn(){ //is a method, function keyword is not needed
        console.log("Hello")
    }
}
const car1=new Car("red",120)
car1.turboOn()

//classes are used to repeatedly build new objects of a certain kind as many times as you like

