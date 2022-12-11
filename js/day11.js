const notesEx = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

const notesInput = ``;

const notesArray = notesEx.split("\n\n");
const notes = {};

notesArray.forEach((monkeyLine, i) => {
    let monkeyLines = monkeyLine.split("\n");
    let monkey = monkeyLines[0].split(":")[0];
    notes[monkey] = {}; //monkeyLines[0];
    let starting = monkeyLines[1].split(": ");
    notes[monkey]["start"] = starting[1].split(", ").map(Number);
    let operation = monkeyLines[2].split(": ");
    notes[monkey]["operation"] = operation[1];
    let test = monkeyLines[3].split(": ");
    notes[monkey]["test"] = {};
    notes[monkey]["test"]["case"] = test[1];
    let testTrue = monkeyLines[4].split(": ");
    let testFalse = monkeyLines[5].split(": ");
    notes[monkey]["test"]["true"] = testTrue[1];
    notes[monkey]["test"]["false"] = testFalse[1];
    notes[monkey]["inspections"] = 0;
});

console.log(notes);

const operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b }
};

let rounds = 20;
for ( let i = 0; i < rounds; i++) {

    Object.keys(notes).forEach(monkey => {
        // console.log(monkey);
        let items = [...notes[monkey].start];
        let command = notes[monkey].operation.split(" ");
        items.forEach((item, i) => {
            // console.log(items);
            let op = command[3];
            // console.log(isNaN(command[4]));
            let value = isNaN(command[4]) ? item : command[4];
            let worrylevel = Math.floor( operators[op](item, value));
            // console.log(monkey + " inspects an item with a worry level of " + item);
            // console.log("Worry level is " + op + " by " + value + " to " + worrylevel)
            worrylevel = Math.floor( worrylevel / 3 );
            // console.log("Monkey gets bored with item. Worry level is divided by 3 to " + worrylevel);
            let test = notes[monkey].test.case.split(" ")[2];
            if ( worrylevel%test === 0) {            
                let target = notes[monkey].test.true.split(" ")[3];
                // console.log(notes[monkey].test.case + " is true, item " + worrylevel + " is thrown to monkey " + target);
                notes["Monkey " + target].start.push(worrylevel);
            } else {            
                let target = notes[monkey].test.false.split(" ")[3];
                // console.log(notes[monkey].test.case + " is false, item " + worrylevel + " is thrown to monkey " + target);
                notes["Monkey " + target].start.push(worrylevel);
            }
            notes[monkey].inspections++;
            notes[monkey].start.shift();
        });
    });
}

// console.log(notes);

let inspectionCounts = [];
Object.keys(notes).forEach(monkey => {
    inspectionCounts.push(notes[monkey].inspections);
});

const sortedNumbers = inspectionCounts.sort((a, b) => b - a);
const [first, second] = sortedNumbers.slice(0, 2);
console.log('solution to part one is ' + first * second);
