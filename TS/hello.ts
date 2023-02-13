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
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());

/* ------------------------------------
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 *
 *
 */

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Own example
interface Ball {
  radius: number;
  colour: string;
  sound: Function;
}

const balleDeBaseball: Ball = {
  radius: 7.5,
  colour: 'white',
  sound: () => 'boeing',
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
class PointClass {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`Point drawn on coordinates x: ${this.x}, y: ${this.y}`);
  }
}

const myPoint: PointClass = new PointClass(10, 10);
console.log(myPoint);
myPoint.draw();

/* -----------------------------------
 *
 *
 * https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-compile-time
 *
 *
 */

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log('Log level key is:', key);
    console.log('Log level value is:', num);
    console.log('Log level message is:', message);
  }
}
printImportant('ERROR', 'This is a message');
