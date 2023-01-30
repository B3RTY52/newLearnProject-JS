'use strict';

console.log(1);

setTimeout(() => console.log('3 - 2 sec'), 2000);

setTimeout(() => console.log('4 - 4 sec'), 4000);

console.log(2);

// Task:
setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

Promise.resolve()
    .then(() => console.log('promise2'));

console.log('code');

/* почему так?  Как выглядит очередь на самом деле:
1. Макрозадача () => {}
 -microtasks: then/catch/finally/await
 -.... ВСЕ МИКРОЗАДАЧИ из макрозадачи 1 завершаются
 -render (сраница отрендериватся после выполнения этой очереди)
2. Макрозадача () => {}
- microtasks: then/catch/finally/await
-....
-render
3...  */

// QUEUEMICROTASK - команда для создания микрозадач (нпрмр до рендеринга)
// как выглядит тот же код с ней?

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('yo!'));

Promise.resolve()
    .then(() => console.log('promise2'));

console.log('code');