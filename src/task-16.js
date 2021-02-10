function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (ordered>available) {
  message = 'На складе недостаточно товаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}
  // Пиши код выше этой строки
  return message;
}
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));


// Задание
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка 'На складе недостаточно товаров!'.
// В противном случае записывается строка 'Заказ оформлен, с вами свяжется менеджер'.
// Тесты
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
// Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.