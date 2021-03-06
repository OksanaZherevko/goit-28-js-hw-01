function checkForName(fullName, name) {
  const result = fullName.includes(name); // Дополни эту строку
   return result;
 }
 
 console.log(checkForName('Егор Колбасов', 'Егор'));
 console.log(checkForName('Егор Колбасов', 'егор'));
 console.log(checkForName('Егор Колбасов', 'егОр'));
 console.log(checkForName('Егор Колбасов', 'Женя'));
 console.log(checkForName('Вадим Некрасов', 'Вадим'));
 console.log(checkForName('Вадим Некрасов', 'вадим'));
 console.log(checkForName('Вадим Некрасов', 'Дима'));

// Задание
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// Тесты
// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName('Егор Колбасов', 'Егор') возвращает true.
// Вызов функции checkForName('Егор Колбасов', 'егор') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'егОр') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'Женя') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Вадим') возвращает true.
// Вызов функции checkForName('Вадим Некрасов', 'вадим') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Дима') возвращает false.