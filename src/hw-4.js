/**
 * Написать функцию, которая будет считать ряд Фибоначчи. Функция должна возвращать массив из чисел
 * Фибоначчи, длина массива будет приходить, как аргумент функции
 */
function fibonacci(length) {

        if(length <= 1) {
            return 1;
        } else {
            return fibonacci(length - 1) + fibonacci(length - 2);

    }
//функция возвращает n-ое число Фибоначчи
}

/**
 * Написать свою функцию map
 */
function map(array, callback) {

}

/**
 * Написать свою функцию filter
 */
function filter(array, callback) {

}

/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex) {
    for(let i = fromIndex; i < array.length; i++){
        if(array[i] === value) {
            if(fromIndex === 0){
                return i;
            } else return i - fromIndex;

        };
    }
}

/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {

}

/**
 * Написать свою функцию find
 */
function find(array, callback) {

}

/**
 * Написать свою функцию sort
 */
function sort(array, callback) {

}

/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {
    let array = [];
    for(let key in obj){
        array.push(key);
    }
    return array;
}

/**
 * Написать свою функцию Object.values
 */
function objectValues(obj) {
    let array = [];
    for(let key in obj){
        array.push(obj[key]);
    }
    return array;
}