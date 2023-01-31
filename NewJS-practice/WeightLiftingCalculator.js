/* 
As a keen weightlifter you are constantly working out 
how much weight to put on each end of the bar in order to make it even.

You do this by taking your total weight w, which is always a multiple of 2.5, 
and dividing it by 2 and then working out which weights to put on each end of the bar based on those available to you. 
Don't forget that the bar already weighs 20kg and shouldn't factor into your final calculation.

Your gym is well stocked, you have an unlimited number of each of these weights:

20kg
15kg
10kg
5kg
2.5kg
1.25kg
Working this out every time is getting tiresome. 
Create a function that returns an array showing the smallest combination of weights 
you can put on to reach the total weight w. 
Return a false error for any weight that cannot be split evenly on the bar or is <20.

For example:
your total weight is w = 175
175 - 20kg bar weight = 155 = 77.5kg on each side of the bar
so the expected output would be:
[20, 20, 20, 15, 2.5]

Finally, if the input is exactly 20kg then the function should return 
an empty array as that is the result for a bar without any weight.
*/

function liftingCalc(w) {
    if (w === 20) {
        return [];
    }

    if (w > 20 && w % 2.5 === 0) {
        w = (w - 20) / 2;
        var weights = [20, 15, 10, 5, 2.5, 1.25];
        var bars = [];
        var barsCounter = function (counter, bar) {
            for (let j = 0; j < counter; j++) {
                bars.push(bar);
            }
        };
        for (let i = 0; i < weights.length; i++) {
            if (w >= weights[i]) {
                if (w % weights[i] !== 0) {
                    let counter = (w - (w % weights[i])) / weights[i];
                    barsCounter(counter, weights[i]);
                    w = w % weights[i];
                } else {
                    let counter = w / weights[i];
                    barsCounter(counter, weights[i]);
                    return bars;
                }
            }
        }
    } else {
        return false;
    }
}

console.log(liftingCalc(107.5));