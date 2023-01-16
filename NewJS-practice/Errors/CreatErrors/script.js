'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];



try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        // воспользуемся коструктором ошибок:
        if (!blockObj.id) throw new Error(
            `В данных под номером ${i + 1} нет id`);
        // мы создали ошибку!

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}



// const err = new Error('yoyo!');
// console.log(
//     err.name,
//     err.message,
//     err.stack
// );