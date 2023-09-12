// function bindToAnArg(func, arg) {
//   return function(...args) {
//     return func(arg, ...args);
//   }
// }

const bindToAnArg = (func, arg) => func.bind(this, arg);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;