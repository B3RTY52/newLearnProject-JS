/* 
Description
Middle Earth is about to go to war. 
The forces of good will have many battles with the forces of evil. 
Different races will certainly be involved. 
Each race has a certain worth when battling against others. 
On the side of good we have the following races, with their associated worth:
Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, 
if you add up the worth of the side of good and compare it 
with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, 
followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. 
Each parameter will be a string of multiple integers separated by a single space. 
Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:
Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. 
The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, 
"Battle Result: Evil eradicates all trace of Good" if evil wins, 
or "Battle Result: No victor on this battle field" if it ends in a tie.
*/

function goodVsEvil(good, evil) {

    const prepareToBattle = function (side) {
        return Array.from(side.match(/\d+/g)).map(el => +el);
    };

    good = prepareToBattle(good);
    evil = prepareToBattle(evil);

    const goodForces = {
        hobbits: good[0],
        men: good[1],
        elves: good[2],
        dwarves: good[3],
        eagles: good[4],
        wizards: good[5],
    };

    goodForces.power = function () {
        return this.hobbits +
            this.men * 2 +
            this.elves * 3 +
            this.dwarves * 3 +
            this.eagles * 4 +
            this.wizards * 10;
    };

    const evilForces = {
        orcs: evil[0],
        men: evil[1],
        wargs: evil[2],
        goblins: evil[3],
        urukHai: evil[4],
        trolls: evil[5],
        wizards: evil[6],
    };

    evilForces.power = function () {
        return this.orcs +
            this.men * 2 +
            this.wargs * 2 +
            this.goblins * 2 +
            this.urukHai * 3 +
            this.trolls * 5 +
            this.wizards * 10;
    };

    if (evilForces.power() > goodForces.power()) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else if (evilForces.power() < goodForces.power()) {
        return "Battle Result: Good triumphs over Evil";
    } else {
        return "Battle Result: No victor on this battle field";
    }
}

console.log(goodVsEvil('1 1 12 1 1 10', '1 1 1 1 1 1 100'));

