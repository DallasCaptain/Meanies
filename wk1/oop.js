// function Foo(){
//     const privateMethod = function(){
//         console.log(this);
//     }
//     this.greet = function(){
//         console.log("Hello!");
//         privateMethod();
//     }
    
// }
// const joe = new Foo();
// console.log(joe.__proto__)
// joe.__proto__.happy = true
// joe.upset=false
// console.log(joe)
// console.log(joe.happy)
// console.log(joe.upset)
// const sue = new Foo()
// console.log(sue)
// console.log(joe.__proto__)
//joe.greet();


class Foo {

    constructor(name, age=18){
        this._name = name
        this.age = age
        console.log('foo',this)
        this.greet()
    }
    greet = function(){
        console.log(this.name);
    }

    get name (){
        return this._name
    }

    set name(newname){
        if(this.age > 11){
            this._name = newname;
        }
    }

}

class Child extends Foo{
    constructor(name){
        super(name, 9)
        this.greet()
    }
    
    cry = function(){
        console.log('boo hoo')
    }
    
    greet = function(){
        console.log('hi im ',this.name)
    }
}

//const joe = new Foo('joe');
const emmy = new Child('emmy')
emmy.greet()
emmy.name = 'emily'
console.log(emmy.name)
// emmy.__proto__.__proto__.dance=function(){console.log(this.name +' is dancing')}
// console.log(emmy)
// emmy.dance()