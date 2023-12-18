// Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції і повертає нову функцію, яка викликає їх послідовно з результатом попереднього виклику. 
// Результат останньої функції має бути повернутий новою функцією. Кожна функція повинна мати доступ до результату попередньої функції через замикання.

const sequence = (...functions) => {
    if (functions.length < 2) {
        throw new Error('Sequence function requires at least two functions as arguments.');
    }

    return initialValue => functions.reduce((accumulator, currentFunction) => currentFunction(accumulator), initialValue);
};

const doubleNum = num => num * 2;
const squareNum = num => num * num;

const forSequence = sequence(doubleNum, squareNum, doubleNum);

console.log(forSequence(2)); // 32
