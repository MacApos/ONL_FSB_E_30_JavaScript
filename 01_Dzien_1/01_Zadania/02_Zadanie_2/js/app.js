/**
 * Przerób poniższe metody na funkcje strzałkowe
 */
function isArrayIncludeValue(value, array) {
    return array.includes(value);
}

const isArrayIncludeValue2 = (value, array) => array.some(el => el === value);

function sum(num1, num2) {
    return num1 + num2;
}

const sum2 = (num1, num2) => num1 + num2;

let printArray = function (array) {
    array.forEach(function (element) {
        console.log(element);
    });
};

const printArray2 = array => array.forEach(element => console.log(element));

let filterNumbersFromArray = function (array) {
    return array.filter(function (el) {
        return typeof el === "number";
    });
};

const filterNumbersFromArray2 = array => array.filter(el => typeof el === "number");
const filterNumbersFromArray3 = array => array.filter(Number);

/**
 * Wywołania
 * Nie zmieniaj kodu poniżej!
 */
console.log("--- isArrayIncludeValue ---");
const result1 = isArrayIncludeValue2(2, [1, 2, 3, 5, 3, 2, 5]);
console.log(result1);

console.log("\n--- sum ---");
const result2 = sum2(2, 3);
console.log(result2);

console.log("\n--- printArray ---");
printArray2(["Ala", "Zosia", "Ewa", "Piotr", "Darek"]);

console.log("\n--- filterNumbersFromArray ---");
const filteredArray = filterNumbersFromArray2(["Ala", 5, "Ewa", "Piotr", 2, "Adam", 19]);
console.log(filteredArray);