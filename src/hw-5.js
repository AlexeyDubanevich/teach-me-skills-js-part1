/**
 * Написать функцию, которая будет принимать бесконечное количество аргументов(коллбэк кфнкций) и во втором вызове
 * бесконечное количесвто аргументов.
 * Например: foo(foo1(foo2(10)))
 * Ваша функция должна выглядеть так:
 * task1(foo, foo1, foo2)(10);
 */
function task1() {

}

/**
 * Напсиать функцию, которая будет принимать строку. Функция должна проверить явяляется ли строка палиндромом
 */
function task2(str2) {
    let str2 = str.split("").reverse().join("");
    str = str.replace(/\s+/g, '');
    str2 = str2.replace(/\s+/g, '');
    if(str === str2){
        return console.log("Палиндром");
    } else return console.log("Не палиндром");
}

/**
 * Написать функцию, которая будет принимать целое число n. Нужно вывести в консоль числа от 1 до n.
 * Вместо чисел кратных на 3 выводить fizz, вместо чисел кратных 5 - buzz. Если числа кратные 15, то fizzbuzz
 */
function task3(n) {
    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            console.log("fizzbuzz"); continue;
        }
        if(i % 3 === 0){
            console.log("fizz"); continue;
        }
        if(i % 5 === 0){
            console.log("buzz"); continue;
        }
        else {
            console.log(i);
        }
    }
}

/**
 * Напсиать функцию, что будет принимать 2 аргумента, строки. Вы должны проверить является ли второе слово анаграммой
 * второго.
 * Примеры:
 * anagram('finder', 'Friend'); => true
 * anagram('', ''); => false
 */
function task4(str1, str2) {
    let array1 = str1.split("");
    let array2 = str2.split("");
    array1 = array1.sort();
    array2 = array2.sort();
    let newStr1 = array1.join("");
    let newStr2 = array2.join("");
    let result = null;
    if(newStr1 === newStr2){
        result = true;
    } else result = false;
    return result;
}

/**
 * Написать функцию, которая будет принимать число. Функция должна возвращать массив чисел, которые являются делителями.
 */
function task5(element) {
    let array = [];
    for(let i = 1; i <= element; i++){
        if(element % i === 0) {
            array.push(i);
        }
    }

    return array;
}