function getSubstring(string, length) {
  const substring = string.slice(0,length); // Дополни эту строку

  return substring;
}

console.log(getSubstring('Привет мир', 3));
console.log(getSubstring('Привет мир', 6));
console.log(getSubstring('Привет мир', 8));
console.log(getSubstring('Привет мир', 10));
console.log(getSubstring('Привет мир', 0));

// Задание
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// Тесты
// Объявлена функция getSubstring(string, length).
// Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
// Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
// Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
// Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
// Вызов функции getSubstring('Привет мир', 0) возвращает ''.