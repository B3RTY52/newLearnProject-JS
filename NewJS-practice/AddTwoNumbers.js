// addTwoNumbers with array
/**
 * @param {array} l1
 * @param {array} l2
 * @return {array}
 */

var addTwoNumbers = function (l1, l2) {
    const num = (array) => {
        let res = '';
        for (let i = array.length; i > 0; i--) {
            res = res + array[i - 1];
        }
        return +res;
    };
    const res = Array.from('' + (num(l1) + num(l2)));
    return res.reverse();
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));







