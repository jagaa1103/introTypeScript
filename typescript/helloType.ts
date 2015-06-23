class Greeter{
    constructor(public greeting:string){

    }
    greet(){
        return this.greeting;
    }
};

var greeter = new Greeter("Hello, Tseegii!");
var str = greeter.greet();
console.log(str);