// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// Запрашиваем у пользователя пятиразрядное число
let userInput = prompt("Введите пятиразрядное число:");

// Преобразуем введенную строку в число
let inputNumber = parseInt(userInput);

// Проверяем, что введенное значение - число и имеет 5 цифр
if (!isNaN(inputNumber) && userInput.length === 5) {
  // Преобразуем число в строку
  let numStr = String(inputNumber);

  let isPalindrome = true;

  // Сравниваем символы числа с обратными символами
  for (let i = 0; i < numStr.length / 2; i++) {
    // Сравниваем символы с обеих концов числа
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      isPalindrome = false; // Если символы не совпадают, число не является палиндромом
      break; // Прерываем цикл, так как достаточно одного несовпадения
    }
  }

  if (isPalindrome) {
    console.log("Введенное число является палиндромом.");
  } else {
    console.log("Введенное число не является палиндромом.");
  }
} else {
  console.log("Введено некорректное число.");
}

// 10. Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год. 


// Запрашиваем день у пользователя
const inputDay = parseInt(prompt("Введите день:"));

// Запрашиваем месяц у пользователя
const inputMonth = parseInt(prompt("Введите месяц:"));

// Запрашиваем год у пользователя
const inputYear = parseInt(prompt("Введите год:"));

// Проверяем, является ли год високосным
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let nextDay = inputDay + 1;
let nextMonth = inputMonth;
let nextYear = inputYear;

// Проверяем, если день больше дней в месяце
if (nextDay > 28) {
  if (nextDay > 30 && (nextMonth === 4 || nextMonth === 6 || nextMonth === 9 || nextMonth === 11)) {
    nextDay = 1;
    nextMonth++;
  } else if (nextDay > 31) {
    nextDay = 1;
    nextMonth++;

    // Проверяем, если месяц больше 12, увеличиваем год и устанавливаем месяц в январь
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  }
}

// Выводим следующую дату
console.log("Следующая дата: " + nextDay + "." + nextMonth + "." + nextYear);



