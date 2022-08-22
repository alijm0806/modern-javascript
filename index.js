
console.log('hello i am in the js file');

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
console.log(dayjs().format())

var Parser = require('expr-eval').Parser;

var parser = new Parser();
var expr = parser.parse('2 * x + 1');
console.log(expr.evaluate({ x: 3 })); // 7

// or
console.log(Parser.evaluate('6 * x', { x: 7 })) // 42

function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(f(3, "welcome", true) == 6)

var name = "Bob", time = "today";
console.log(`welcome ${name}, how are you ${time}?`)