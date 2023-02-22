// 2.1 Привет, мир!

// Вызвать alert

<script>
  alert('Я JavaScript!');
</script>

// Покажите сообщение с помощью внешнего скрипта

<script src="./js/alert.js"></script>
  // alert.js
alert('Я JavaScript!');

// 2.4 Переменные

// Работа с переменными

const name = 'Джон';
const admin = name;
alert(admin);

// Придумайте правильные имена

const THIRD_PLANET_FROM_SUN = 'Earth';
let currentVisitorName;

// Какие буквы (заглавные или строчные) использовать для имён констант?

const birthday = '18.04.1982'; // В принципе BIRTHDAY ok
const age = someCode(birthday); // AGE - нет

// 2.5 Типы данных

// Шаблонные строки

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

2.6 Взаимодействие: alert, prompt, confirm

// Простая страница

let name = prompt("Имя?");
alert(name);

// 2.8 Базовые операторы, математика

// Постфиксная и префиксная формы

let a = 1, b = 1;
let c = ++a; // c = 2
let d = b++; // d = 1, a = 2, b = 2

// Результат присваивания

let a = 2;
let x = 1 + (a *= 2);
// a = 4, x = 5

// Преобразование типов

"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // ' -9 5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// Исправьте сложение

let a = "1"; // prompt("Первое число?", 1);
let b = "2"; // prompt("Второе число?", 2);
alert(Number(a) + Number(b)); // 12


// 2.9 Операторы сравнения

// Операторы сравнения

5 > 4 // true
"ананас" > "яблоко" //false
"2" > "12" // true
undefined == null // true
undefined === null //false
null == "\n0\n" // false
null === +"\n0\n"  //false

// 2.10 Условное ветвление: if, '?'

// if (строка с нулём)

if ("0") {
  alert( 'Привет' );
}
// true

// Название JavaScript

let jsName = prompt('Какое «официальное» название JavaScript?', '');
if (jsName == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? “ECMAScript”!');
}

// Покажите знак числа

const number = prompt('Введите число', '');
if (number == 0) {
  alert('0');
} else {
  if (number < 0) {
    alert('-1');
  } else {
    if (number > 0) {
      alert('1');
    };
  }
};

Перепишите 'if' в '?'

let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';

  2.11 Логические операторы

// Что выведет alert (ИЛИ)?
alert( null || 2 || undefined ); // 2

// Что выведет alert (ИЛИ)?
alert( alert(1) || 2 || alert(3) ); // alert(1), 2

// Что выведет alert (И)?
alert( 1 && null && 2 ); // null

// Что выведет alert (И)?
alert( alert(1) && alert(2) ); // undefined

// Что выведет этот код?
alert( null || 2 && 3 || 4 ); // 3

// Проверка значения из диапазона
if (age >= 14 && age <= 90);

// Проверка значения вне диапазона
if (age < 14 && age > 90);
if (!(age >= 14 && age <= 90));

Вопрос об "if"
  if (-1 || 0) alert( 'first' ); // +
  if (-1 && 0) alert( 'second' ); // -
  if (null || -1 && 1) alert( 'third' ); +

// Проверка логина

const userName = prompt('Кто там?', '');

if (userName === 'Админ') {
  const password = prompt('Пароль?', '');

  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else {
    if (password === '' || password === null) {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }
  }
} else {
  if (userName === '' || userName === null) {
    alert('Отмена');
    return;
  }
  alert('Я вас не знаю');
}

// 2.13 Циклы while и for
// Последнее значение цикла
let i = 3;
while (i) {
  alert( i-- );
} //1

// Какие значения выведет цикл while?

let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

let i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5

// Какие значения выведет цикл for?

for (let i = 0; i < 5; i++) alert( i );// 0..4

for (let i = 0; i < 5; ++i) alert( i );// 0..4

// Выведите чётные числа

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
};

// Замените for на while

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// Повторять цикл, пока ввод неверен

let number;
do {
  number = prompt('Введите число больше 100', 0);
} while (number <= 100 && number);

Вывести простые числа

const n = 100;
label:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue label;
  }
  console.log( i );
};

// 2.14 Конструкция "switch"
// Напишите "if", аналогичный "switch"

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else {
  if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }
}

Переписать условия "if" на "switch"

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}

// 2.15 Функции
// Обязателен ли "else"?

  Будет работать, отличий нет

// Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

const checkAge = () => (age > 18) ? true : confirm('Родители разрешили?');
const checkAge = () => (age > 18) || confirm('Родители разрешили?');

// Функция min(a, b)

const min = (a, b) => (a < b) ? a : b;

// Функция pow(x,n)

const pow = (x, n) => {
  const result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
};

2.17 Стрелочные функции, основы
// Перепишите с использованием функции-стрелки

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);

// 3.2 Советы по стилю кода

// Плохой стиль

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  alert(pow(x,n))
};

3.5 Автоматическое тестирование c использованием фреймворка Mocha
// Что не так с этим тестом? - 3 теста вместо 1

4.1 Объекты

// Привет, object

const user = {
  name: 'John',
  surname: 'Smith',
};
user.name = 'Pete';
delete user.name;

// Проверка на пустоту

const isEmpty = (object) => {
  for (let key in object) {
    return false;
  }
  return true;
};

// Объекты-константы? - Можно изменить значения ключа объекта, объявленного через const

// Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
};

// Умножаем все числовые свойства на 2

function multiplyNumeric(object) {
  for (let key in object) {
    if (typeof object[key] == 'number') {
      object[key] *= 2;
    }
  }
};

// 4.4 Методы объекта, "this"

//Использование "this" в литерале объекта

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); //main.js:391 Uncaught TypeError: Cannot read properties of undefined (reading 'name')

  // Создайте калькулятор

let calculator = {
  sum() {
    return (this.a + this.b);
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = Number(prompt('a', 0));
    this.b = Number(prompt('b', 0));
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Цепь вызовов

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();

// 4.5 Конструктор, оператор "new"

//Две функции - один объект

const object = {
  name: 'Hank',
  age: 30,
}

function A() {
  return object;
  }

function B() {
  return object;
}

let a = new A();
let b = new B();

console.log( a == b );

//Создайте калькулятор при помощи конструктора, new Calculator

function Calculator () {
  this.read = function () {
    this.a = Number(prompt('a', 0));
    this.b = Number(prompt('b', 0));
  };

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//Создайте new Accumulator

function Accumulator (startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value = this.value + Number(prompt('Сколько нужно добавить?', ''));
  };
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

// 5.1 Методы примитивов
// Можно ли добавить свойство строке?

let str = "Привет";
str.test = 5; // (*)
alert(str.test);
// main.js:516 Uncaught TypeError: Cannot create property 'test' on string 'Привет'

// 5.2 Числа
//Сумма пользовательских чисел

let a = Number(prompt('a', ''));
let b = Number(prompt('b', ''));

alert(a + b);

// Почему 6.35.toFixed(1) == 6.3?
console.log(6.35.toFixed(40) ); // 6.3499999999999996447286321199499070644379

// Ввод числового значения

const readNumber = () => {
  let number;

  do {
    number = prompt('Введите число', 0);
  } while ( !isFinite(number) );

  if (number === null || number === '') return null;

  return +number;
}

alert(readNumber());

// Бесконечный цикл по ошибке

let i = 0;
while (i != 10) {
  i += 0.2;
} // Ошибка округления

//Случайное число от min до max

const getRandomFloat = (min, max) => min + Math.random() * (max - min);

// Случайное целое число от min до max

const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// 5.3 Строки
// Сделать первый символ заглавным

const ucFirst = (string) => {
  if (string) {
    const newString = string[0].toUpperCase() + string.slice(1);
    console.log(newString);
  };
};

ucFirst('vasya');

// Проверка на спам

const checkSpam = (string) => {
  const lowerCaseString = string.toLowerCase();

  return (lowerCaseString.includes('viagra') || lowerCaseString.includes('xxx'));
};

// Усечение строки

const truncate = (string, maxLength) => (string.length > maxLength) ? string.slice(0, maxLength - 1) + '…' : string;

// Выделить число

const extractCurrencyValue = (str) => Number(str.slice(1));


// 5.4 Массивы
// Скопирован ли массив?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

console.log(shoppingCart); //['Яблоки', 'Груша', 'Апельсин', 'Банан']

// Операции с массивами

const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
console.log(styles);

const middleElement = Math.floor(Number((styles.length) / 2));
console.log(styles[middleElement]);
styles[middleElement] = 'Классика';
console.log(styles[0]);
styles.shift(0);
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);

// Вызов в контексте массива
let arr = ["a", "b"];

arr.push(function() {
  alert(this);
});

arr[2](); // ["a", "b", function() {alert(this)}]

// Сумма введённых чисел

let numbers = [];
let sum = 0;

const sumInput = () => {

  while (true) {
    let value = prompt("Введите число", '');
    if (value === "" || value === null || !isFinite(value)) {
      break;
    };
    numbers.push(Number(value));
  };

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  };

  return sum;
};

alert(sumInput());

// Подмассив наибольшей суммы

const getMaxSubSum = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;

    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    };
  };

  return maxSum;
};

// 5.5 Методы массивов

// Переведите текст вида border-left-width в borderLeftWidth

const str = 'background-color';

const camelize = (string) => {
  const newString = string.split('-').map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
  console.log(newString);
}
camelize(str);

// Фильтрация по диапазону

const filterRange = (arr, a, b) => arr.filter(item => ((a <= item) && (item <= b)));

console.log(filterRange([1, 2, 3, 4, 5, 6, 7, 8], 3, 6));

// Фильтрация по диапазону "на месте"

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i = i - 1;
    }
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];

filterRangeInPlace(array, 2, 6);

console.log(array);

// Сортировать в порядке по убыванию

const arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => (b - a));

console.log(arr);

// Скопировать и отсортировать массив

const copySorted = (arr) => arr.slice().sort();

const arr = ["HTML", "JavaScript", "CSS"];

const sorted = copySorted(arr);

console.log(arr);
console.log(sorted);

// Создать расширяемый калькулятор

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    const split = str.split(' ');
    const a = Number(split[0]);
    const op = split[1];
    const b = Number(split[2]);

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

const powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log( powerCalc.calculate("3 + 7") );
console.log( powerCalc.calculate("3 ** 2") );

// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((item => item.name));

console.log(names);

// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped );

// Отсортировать пользователей по возрасту

let vasya = { name: "Вася", age: 45 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

const sortByAge = (arr) => {
  arr.sort((a, b) => (a.age - b.age));
};

sortByAge(arr);
console.log(arr);

// Перемешайте массив

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[j];
    array[j] = t
  }
};

const arr = [1, 2, 3];
shuffle(arr);
console.log(arr);

// Получить средний возраст

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (arr) => arr.reduce((prev, user) => prev + user.age, 0) / arr.length;

console.log(getAverageAge(arr));

// Оставить уникальные элементы массива

const unique = (arr) => Array.from(new Set(arr));

const arr = [1, 2, 3, 4, 5, 6, 1, 2, 5, 7];

console.log(unique(arr));

// Создайте объект с ключами из массива

const groupById = (array) => {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
};

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(users);
console.log(usersById);

// 5.7 Map и Set

// Фильтрация уникальных элементов массива

const unique = (arr) => Array.from(new Set(arr));

const arr = [1, 2, 3, 4, 5, 6, 1, 2, 5, 7];

console.log(unique(arr));

//  Отфильтруйте анаграммы

const aclean = (arr) => {
  const map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

// Перебираемые ключи

let map = new Map();

map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

console.log(keys);

// 5.8 WeakMap и WeakSet

// Хранение отметок "не прочитано"

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Хранение времени прочтения

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1)); // -?

// 5.9 Object.keys, values, entries

// Сумма свойств объекта

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (salaries) => {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

console.log(sumSalaries(salaries));

// Подсчёт количества свойств объекта

const count = (obj) => Object.keys(obj).length;

// 5.10 Деструктурирующее присваивание

// Деструктурирующее присваивание

let user = {
  name: "John",
  years: 30
};

const {name, years: age, isAdmin = false} = user;

// Максимальная зарплата

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = (salaries) => {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
};

// 5.11 Дата и время

// Создайте дату

let date = new Date(2012, 1, 20, 3, 12);
alert(date);

// Покажите день недели

const getWeekDay = (date) => {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
};

let date = new Date(2023, 1, 22);
console.log(getWeekDay(date));

// День недели в европейской нумерации

const getLocalDay = (date) => {

  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
};

// Какой день месяца был много дней назад?

const getDateAgo = (date, days) => {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(20123, 1, 22);

console.log(getDateAgo(date, 12));

// Последнее число месяца?

const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
};

console.log(getLastDayOfMonth(2012, 0));

// Сколько сегодня прошло секунд?

const getSecondsToday = () => {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());

// Сколько секунд осталось до завтра?

const getSecondsUntilTomorrow = () => {
  let date = new Date();
  return (86400 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()));
}

console.log(getSecondsUntilTomorrow());

// Форматирование относительной даты

function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + ' мин. назад';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));

// 5.12 Формат JSON, метод toJSON

// Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
  name: "Василий Иванович",
  age: 35
};

console.log(JSON.stringify(user));

const user2 = JSON.parse(JSON.stringify(user));

console.log(user2);

// Исключить обратные ссылки

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
