// Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок. 
// Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення. 
// Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.

function counter(startValue, step) {
    let privateCounter = startValue;
    const changeBy = (amount) => {
        privateCounter += amount;
        return privateCounter;
    };

    return {
        increment: () => changeBy(step),
        decrement: () => changeBy(-step),
        reset: () => changeBy(startValue - privateCounter)
    };
};

const setCounter = counter(10, 5);
console.log(setCounter.increment()); // 15
console.log(setCounter.increment()); // 20
console.log(setCounter.decrement()); // 15
console.log(setCounter.reset()); // 10