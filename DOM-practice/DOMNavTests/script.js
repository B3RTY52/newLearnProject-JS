'use strict';

// console.log(document.head);

//Отталкиваемся от родителя (по узлам):
console.log(document.documentElement); //от документа
console.log(document.body.childNodes); //от тела (все узлы)
console.log(document.body.firstChild); //от тела (первый узел)
console.log(document.body.lastChild); // от тела (последний узел)
console.log(document.body.childNodes[1]); //обратиться к отдельному элементу


console.log(document.querySelector('#current')); //обратиться по айди
//обращаемся к его родительскому узлу:
console.log(document.querySelector('#current').parentNode);
//обращаемся к родителю его родительского узла:
console.log(document.querySelector('#current').parentNode.parentNode);

//дата-атрибуты - это атрибуты, которые мы можем проставить самостоятельно
console.log(document.querySelector('[data-current="3"]'));
//получить от него соседний узел - следующий:
console.log(document.querySelector('[data-current="3"]').nextSibling);
//получить от него соседний узел - предыдущий:
console.log(document.querySelector('[data-current="3"]').previousSibling);
//получить от него соседний элемент - следующий:
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//узел и элемент отличаются тем, что узлом может быть что угодно 
//например, перенос строки или пробел или комментарий, они не нужны на практике

//можно сравнить результат с узлом на строке 15:
console.log(document.querySelector('#current').parentElement); //вызван элемент

// То же самое, что и примеры к 5ой строке, только с элементами:
//но тут можно обратиться только к первому:
console.log(document.body.firstElementChild);
//и к последнему элементам, без псевдомассива:
console.log(document.body.lastElementChild);


//как сделать аналог псевдомассива? с помощью for\of:
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }
    console.log(node);
}