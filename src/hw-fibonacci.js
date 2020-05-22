function fibonacci(n) {
    if(n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
//функция возвращает n-ое число Фибоначчи