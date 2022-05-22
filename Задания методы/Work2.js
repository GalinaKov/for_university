//ЗАДАНИЕ 1
var firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
var secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10];

console.log("Упражнение №1.1")
function closeToN(array){
    return ([array[array.indexOf("n", 0) - 1], array[array.indexOf("n", 0) + 1]])
}

console.log(closeToN(firstArray));
console.log(closeToN(secondArray));

console.log("\nУпражнение №1.2")
function numbersAfterN(array){
    return array.slice(array.indexOf("n", 0) + 1, array.length);
}

console.log(numbersAfterN(firstArray));
console.log(numbersAfterN(secondArray));

console.log("\nУпражнение №1.3")
function mergerNumbersAfterN(array_1, array_2){
    return array_1.slice(array_1.indexOf("n", 0) + 1, array_1.length).concat(array_2.slice(0, array_2.indexOf("n", 0) + 1));
}

console.log(mergerNumbersAfterN(firstArray, secondArray));

//ЗАДАНИЕ 2
var arr = [1, 2, 3, 4, 5,  /*..*/];

console.log("\nУпражнение №2.1")
function factorial(array){
    if (array.length > 1){
        array[1] =  array[1] * array[0];
        array = array.slice(1, array.length)
        return factorial(array);
    }
    else
        return array[0];
}
console.log(factorial(arr));


console.log("\nУпражнение №2.2")
function callBackJoin(previousValue, item, index, array) {
    var word = index !== array.length - 1 ? item + "-" : item;
    return previousValue + word;
}
var value = arr.reduce(callBackJoin, "");
console.log(value);

//ЗАДАНИЕ 3
var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

console.log("\nУпражнение №3.1")
function splitStr(str1){
    return str.slice(str.indexOf('?', 0) + 1, str.length).split("?");
}
console.log(splitStr(str));

console.log("\nУпражнение №3.2")
function toEnd(str1, underStr){
    if(str1.includes(underStr, 0))
        return str.slice(str1.indexOf(underStr, 0), str1.length);
    else
        return "";
}
console.log(toEnd(str, "вести"));
console.log(toEnd(str, "провести"));

//ЗАДАНИЕ 4
var Str = "JavaScript";

console.log("\nУпражнение №4.1")
function toCase(index, str1){
    if(str1[index].toUpperCase() === str1[index])
        return str1.toUpperCase();
    else
        return str1.toLowerCase();
}
console.log(toCase(4, Str));
console.log(toCase(7, Str));

console.log("\nУпражнение №4.2")
function startOrEnd(str1, underStr){
    return str1.startsWith(underStr) || str1.endsWith(underStr);
}
console.log(startOrEnd(Str, "ipt"));
console.log(startOrEnd(Str, "ava"));
