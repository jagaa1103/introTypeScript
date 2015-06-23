var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
})();
;
var greeter = new Greeter("Hello, Tseegii!");
var str = greeter.greet();
console.log(str);
