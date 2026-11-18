const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// Функція countItems тут
function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count += 1;
    }
  }
  return count;
}

// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

// Тестування
console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));



// Функція calculate тут
const calculate = (a, b, operation) => {
  return operation(a, b);
};
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'На нуль ділити не можна';
  }
  return a / b;
};

// Стрілкові функції для операцій тут

// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку



function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}
const say4SHO = i => `Lngshot 4SHO 4SHO`;
const newAlbum = i => `Stream new album`;
const lngshotElement = i => `🤞`;

repeatMessage(2, say4SHO);
repeatMessage(3, newAlbum);
repeatMessage(4, lngshotElement);



const movies = ['Avatar', 'Formula 1', 'Home Alone', 'Miss Potter'];
const processMovies = (movies, action) => {
  for (const movie of movies) {
    action(movie);
  }
};
const movieNight = (movie) => {
  console.log(`Вечір починається з фільму "${movie}"`);
};
const cinemaVibes = (movie) => {
  console.log(`Купляйте попкорн, зараз буде починатись фільм "${movie}"`);
};
processMovies(movies, movieNight);
processMovies(movies, cinemaVibes);


