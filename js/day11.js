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

const notesInput = `Monkey 0:
Starting items: 72, 97
Operation: new = old * 13
Test: divisible by 19
  If true: throw to monkey 5
  If false: throw to monkey 6

Monkey 1:
Starting items: 55, 70, 90, 74, 95
Operation: new = old * old
Test: divisible by 7
  If true: throw to monkey 5
  If false: throw to monkey 0

Monkey 2:
Starting items: 74, 97, 66, 57
Operation: new = old + 6
Test: divisible by 17
  If true: throw to monkey 1
  If false: throw to monkey 0

Monkey 3:
Starting items: 86, 54, 53
Operation: new = old + 2
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 2

Monkey 4:
Starting items: 50, 65, 78, 50, 62, 99
Operation: new = old + 3
Test: divisible by 11
  If true: throw to monkey 3
  If false: throw to monkey 7

Monkey 5:
Starting items: 90
Operation: new = old + 4
Test: divisible by 2
  If true: throw to monkey 4
  If false: throw to monkey 6

Monkey 6:
Starting items: 88, 92, 63, 94, 96, 82, 53, 53
Operation: new = old + 8
Test: divisible by 5
  If true: throw to monkey 4
  If false: throw to monkey 7

Monkey 7:
Starting items: 70, 60, 71, 69, 77, 70, 98
Operation: new = old * 7
Test: divisible by 3
  If true: throw to monkey 2
  If false: throw to monkey 3`;

const notesArray = notesEx.split("\n\n");
const notes = {};

// notesArray.forEach((monkeyLine, i) => {
//     let monkeyLines = monkeyLine.split("\n");
//     let monkey = monkeyLines[0].split(":")[0];
//     notes[monkey] = {}; //monkeyLines[0];
//     let starting = monkeyLines[1].split(": ");
//     notes[monkey]["start"] = starting[1].split(", ").map(Number);
//     let operation = monkeyLines[2].split(": ");
//     notes[monkey]["operation"] = operation[1];
//     let test = monkeyLines[3].split(": ");
//     notes[monkey]["test"] = {};
//     notes[monkey]["test"]["case"] = test[1];
//     let testTrue = monkeyLines[4].split(": ");
//     let testFalse = monkeyLines[5].split(": ");
//     notes[monkey]["test"]["true"] = testTrue[1];
//     notes[monkey]["test"]["false"] = testFalse[1];
//     notes[monkey]["inspections"] = 0;
// });

// console.log(notes);

const operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b }
};

// let rounds = 20;
// for ( let i = 0; i < rounds; i++) {

//     Object.keys(notes).forEach(monkey => {
//         // console.log(monkey);
//         let items = [...notes[monkey].start];
//         let command = notes[monkey].operation.split(" ");
//         items.forEach((item, i) => {
//             // console.log(items);
//             let op = command[3];
//             // console.log(isNaN(command[4]));
//             let value = isNaN(command[4]) ? item : command[4];
//             let worrylevel = Math.floor( operators[op](item, value));
//             // console.log(monkey + " inspects an item with a worry level of " + item);
//             // console.log("Worry level is " + op + " by " + value + " to " + worrylevel)
//             worrylevel = Math.floor( worrylevel / 3 );
//             // console.log("Monkey gets bored with item. Worry level is divided by 3 to " + worrylevel);
//             let test = notes[monkey].test.case.split(" ")[2];
//             if ( worrylevel%test === 0) {            
//                 let target = notes[monkey].test.true.split(" ")[3];
//                 // console.log(notes[monkey].test.case + " is true, item " + worrylevel + " is thrown to monkey " + target);
//                 notes["Monkey " + target].start.push(worrylevel);
//             } else {            
//                 let target = notes[monkey].test.false.split(" ")[3];
//                 // console.log(notes[monkey].test.case + " is false, item " + worrylevel + " is thrown to monkey " + target);
//                 notes["Monkey " + target].start.push(worrylevel);
//             }
//             notes[monkey].inspections++;
//             notes[monkey].start.shift();
//         });
//     });
// }

// console.log(notes);

// let inspectionCounts = [];
// Object.keys(notes).forEach(monkey => {
//     inspectionCounts.push(notes[monkey].inspections);
// });

// const sortedNumbers = inspectionCounts.sort((a, b) => b - a);
// const [first, second] = sortedNumbers.slice(0, 2);
// console.log('solution to part one is ' + first * second);

// Part Two 
// Comment out part 1 to run
notesArray.forEach((monkeyLine, i) => {
    let monkeyLines = monkeyLine.split("\n");
    let monkey = monkeyLines[0].split(":")[0];
    notes[monkey] = {}; //monkeyLines[0];
    let starting = monkeyLines[1].split(": ");
    notes[monkey]["start"] = starting[1].split(", ").map(Number);
    // let operation = monkeyLines[2].split(": ");
    notes[monkey]["operation"] = monkeyLines[2].split(": ")[1].split(" "); //operation[1];
    // let test = monkeyLines[3].split(": ");
    notes[monkey]["test"] = {};
    notes[monkey]["test"]["case"] = monkeyLines[3].split(": ")[1].split(" ")[2];
    notes[monkey]["test"]["true"] =  "Monkey " + monkeyLines[4].split(": ")[1].split(" ")[3];
    notes[monkey]["test"]["false"] = "Monkey " + monkeyLines[5].split(": ")[1].split(" ")[3]; //testFalse[1];
    notes[monkey]["inspections"] = 0;
});

let rounds = 1000;
for ( let i = 0; i < rounds; i++) {
    Object.keys(notes).forEach(monkey => {
        let items = [...notes[monkey].start];
        items.forEach((item, i) => {
            let op = notes[monkey].operation[3];
            let value = isNaN(notes[monkey].operation[4]) ? item : notes[monkey].operation[4];
            let worrylevel = operators[op](BigInt(item), BigInt(value));
            let test = notes[monkey].test.case;
            if ( worrylevel%BigInt(test) == 0n) {            
                notes[notes[monkey].test.true].start.push(worrylevel);
            } else {            
                notes[notes[monkey].test.false].start.push(worrylevel);
            }
            notes[monkey].inspections++;
            notes[monkey].start.shift();
        });
    });
}

console.log(notes);

let inspectionCounts = [];
Object.keys(notes).forEach(monkey => {
    inspectionCounts.push(notes[monkey].inspections);
});

const sortedNumbers = inspectionCounts.sort((a, b) => b - a);
const [first, second] = sortedNumbers.slice(0, 2);
console.log('solution to part two is ' + first * second);