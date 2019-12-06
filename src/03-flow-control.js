/**
 * write a function that receives a number as its argument;
 *  if the number is divisible by 3, the function should return 'fizz';
 *  if the number is divisible by 5, the function should return 'buzz';
 *  if the number is divisible by 3 and 5, the function should return 'fizzbuzz';
 *
 *  otherwise the function should return the number, or false if no number
 *  was provided or if the value provided was not a number
 */
exports.fizzBuzz = function(num) {

    if (typeof(num) !== "number") {
        return false;
    }
    if (isNaN(num)) {
        return false;
    }

    if (arguments.length !== 0) {
        var isDivisible = function (number, divisor) {
            return (number % divisor === 0);
        };
        if (isDivisible(num, 3) && isDivisible(num, 5)) {
            return 'fizzbuzz';
        }
        if (isDivisible(num, 3)) {
            return 'fizz';
        }
        if (isDivisible(num, 5)) {
            return 'buzz';
        }
        return num;
    }
    return false;

};
