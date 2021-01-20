var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.fullName = "";
        this.fullName = lastName + " " + firstName;
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is " + this.fullName + ".";
    };
    return Greeter;
}());
var g = new Greeter('Vilmos', 'Vörös');
document.body.innerHTML = g.greet();
