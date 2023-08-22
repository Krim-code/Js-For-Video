// Задание 1.1: Вывод массива на экран
function displayArray(arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

// Задание 1.2: Вывод четных элементов массива
function displayEvenElements(arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            document.write(`<li>${arr[i]}</li>`);
        }
    }
    document.write('</ul>');
}

// Задание 1.3: Сумма всех элементов массива
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Задание 1.4: Максимальный элемент массива
function findMaxElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Задание 1.5: Добавление элемента по индексу
function insertElementAtIndex(arr, index, element) {
    arr.splice(index, 0, element);
}

// Задание 1.6: Удаление элемента по индексу
function removeElementAtIndex(arr, index) {
    arr.splice(index, 1);
}


// Задание 2.1: Объединение двух массивов без повторений
function mergeArraysWithoutDuplicates(arr1, arr2) {
    const mergedArray = [...new Set([...arr1, ...arr2])];
    return mergedArray;
}

// Задание 2.2: Общие элементы в двух массивах без повторений
function findCommonElements(arr1, arr2) {
    const commonElements = arr1.filter(element => arr2.includes(element));
    return [...new Set(commonElements)];
}

// Задание 2.3: Элементы из первого массива, которых нет во втором
function findUniqueElements(arr1, arr2) {
    const uniqueElements = arr1.filter(element => !arr2.includes(element));
    return uniqueElements;
}


// Создание массива фруктов
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Задание 3.1: Вывод массива фруктов в виде списка
function displayFruitsAsList() {
    document.write('<ul>');
    for (let i = 0; i < fruits.length; i++) {
        document.write(`<li>${fruits[i]}</li>`);
    }
    document.write('</ul>');
}

// Задание 3.2: Поиск фрукта в массиве
function findFruitIndex(fruitName) {
    const lowercaseFruitName = fruitName.toLowerCase();
    return fruits.findIndex(fruit => fruit.toLowerCase() === lowercaseFruitName);
}
