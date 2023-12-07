const numbers = [4, 12, 23, 76, 4];
const array1 = [1, 2, 3, 4];

Array.prototype.customReduce = function (fn, init) {
    if (typeof fn !== "function") {
        return null;
    }

    let accumulator = typeof init === "undefined" ? this[0] : init;
    let initialIndex = typeof init === "undefined" ? 1 : 0;
    let result;

    for (let i = initialIndex; i < this.length; i++) {
        result = fn(accumulator, this[i])
        accumulator = result;
    }
    return result;
}

let number = numbers.customReduce((acu, curr) => acu * curr);
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
console.log(number);