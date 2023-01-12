// обычный синтаксис:
// import { one , two } from "./mainES6";

// console.log(`say ${one} and ${two}!`);


// переменные при импорте можно переименовывать:
// import { one as first, two } from "./mainES6";

// console.log(`say ${first} and ${two}!`);


// метод экспортирования "пачкой":
import * as data from "./mainES6";

console.log(`say ${data.one} and ${data.two}!`);
data.sayHi();

// экспорт по дефолту как работает:
import sayBye from "./mainES6";
sayBye();
// но экспорт по умолчанию может быть только один!