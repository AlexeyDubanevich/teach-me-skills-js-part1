/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {
    let check = true;
    for(let i = 0; i < str.length - 1; i++){
        for(let j = i + 1 ; j < str.length; j++){
            if(str[i]===str[j]) {
                check = false; break;
            }
        }
    }
    return check;
}

/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
    let result = '';
    let check = isNaN(Number(str));
    let check2 = null;
    for(let i = 0; i < str.length; i++){
        if(check===false){
            check2 = "Букв нет";
        } else {
            check2 = "Буквы есть";
            result = str.replace(/[0-9]/g, '');

        }
    }
    return result;
}

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
 */
function task4(obj) {
    let result = {};
    // ваш код должен быть ниже этой строки
    result = Object.assign(result, obj);
    // ваш код должен быть выше этой строки
    return result;
}

/**
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5(str) {
    let arr = str.split(' ');

    let name = arr[0];
    let surname = arr[1];

    let first_initial = name[0];
    let second_initial = surname[0];

    let result = first_initial + "." + second_initial + ".";
    return result;
}

/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {
    let arr = ["Меркурий", "Венера", "Земля",
        "Марс","Юпитер","Сатурн","Уран","Нептун"];
    return arr[num];
}

/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {
    let arr = str.split("");
    arr.shift();
    arr.pop();
    let str2 = arr.join("");
    return str2;
}