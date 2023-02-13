// (https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler)
// Greets the world.
console.log('Hello world!');
// Bad example :
/*
// This is an industrial-grade general-purpose greeter function:
function badGreeting(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

badGreeting('Brendan');
*/
// Good example (https://www.typescriptlang.org/docs/handbook/2/basic-types.html#explicit-types) :
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('Maddison', new Date());
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var balleDeBaseball = {
    radius: 7.5,
    colour: 'white',
    sound: function () { return 'boeing'; }
};
console.log('My baseball ball : ', balleDeBaseball);
console.log(balleDeBaseball.sound());
/* --------------------------------------
 *
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors
 *
 *
 *
 */
var PointClass = /** @class */ (function () {
    // Normal signature with defaults
    function PointClass(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    PointClass.prototype.draw = function () {
        console.log("Point drawn on coordinates x: ".concat(this.x, ", y: ").concat(this.y));
    };
    return PointClass;
}());
var myPoint = new PointClass(10, 10);
console.log(myPoint);
myPoint.draw();
/* -----------------------------------
 *
 *
 * https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-compile-time
 *
 *
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is:', key);
        console.log('Log level value is:', num);
        console.log('Log level message is:', message);
    }
}
printImportant('ERROR', 'This is a message');
