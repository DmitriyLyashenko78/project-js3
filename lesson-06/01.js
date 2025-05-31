/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/


const filter = (array, callback) => {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index = i
        if(callback(element, index)){
            newArr.push(array[i]);
        }
    }
    return newArr
}
const  array = [1, 2, 3, 4, 5]
const result = filter(array, (element, index) =>  element % 2 !== 0);


console.log(result)




// let Filter = function(callback) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) { // передаем элемент, индекс и весь массив
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// };
//
// // Пример использования
// const arr = ['cat', 'sheep', 'dog', 'wolf', 'dragon'];
// const evenNumbers = Filter(arr,number => number.length > 3);
// console.log(evenNumbers); // Вывод: [2, 4, 6]

