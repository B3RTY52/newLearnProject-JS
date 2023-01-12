// короткий синтаксис
export let one = 1;

// именованный синтаксис
let two = 2;
export { two };

export function sayHi() {
    console.log('hello!');
}

// экспорт по дефолту (следует более простой синтаксис в главном файле):
export default function sayBye() {
    console.log('Bye!');
}