const exCranePlan = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const cranePlan = `move 1 from 4 to 1
move 2 from 4 to 8
move 5 from 9 to 6
move 1 from 1 to 3
move 5 from 8 to 3
move 1 from 1 to 5
move 4 from 3 to 6
move 14 from 6 to 2
move 5 from 4 to 5
move 7 from 7 to 2
move 24 from 2 to 3
move 13 from 3 to 2
move 1 from 7 to 9
move 1 from 9 to 5
move 7 from 2 to 6
move 3 from 1 to 7
move 3 from 6 to 3
move 2 from 7 to 1
move 1 from 7 to 5
move 2 from 2 to 6
move 2 from 1 to 4
move 9 from 5 to 1
move 1 from 6 to 3
move 4 from 5 to 4
move 1 from 2 to 7
move 4 from 6 to 2
move 7 from 2 to 3
move 2 from 2 to 6
move 2 from 2 to 3
move 2 from 5 to 4
move 1 from 7 to 3
move 4 from 6 to 7
move 19 from 3 to 6
move 3 from 7 to 4
move 1 from 7 to 8
move 1 from 8 to 1
move 2 from 1 to 3
move 10 from 3 to 2
move 3 from 3 to 8
move 1 from 3 to 9
move 1 from 9 to 6
move 11 from 6 to 8
move 2 from 3 to 8
move 6 from 4 to 3
move 3 from 4 to 1
move 7 from 2 to 8
move 1 from 3 to 6
move 6 from 8 to 5
move 1 from 4 to 6
move 9 from 6 to 9
move 6 from 3 to 8
move 1 from 3 to 5
move 10 from 1 to 3
move 11 from 8 to 7
move 1 from 3 to 5
move 1 from 1 to 8
move 5 from 9 to 2
move 1 from 6 to 3
move 5 from 3 to 6
move 1 from 3 to 5
move 4 from 6 to 4
move 1 from 5 to 9
move 6 from 2 to 4
move 2 from 2 to 9
move 5 from 5 to 1
move 2 from 1 to 7
move 10 from 8 to 3
move 1 from 8 to 6
move 3 from 6 to 3
move 6 from 4 to 2
move 8 from 3 to 8
move 3 from 4 to 8
move 4 from 2 to 1
move 3 from 5 to 3
move 4 from 7 to 6
move 2 from 9 to 3
move 1 from 2 to 9
move 1 from 2 to 3
move 2 from 4 to 8
move 1 from 7 to 9
move 5 from 7 to 8
move 2 from 7 to 3
move 14 from 3 to 2
move 3 from 9 to 5
move 1 from 3 to 1
move 1 from 7 to 4
move 3 from 9 to 8
move 7 from 8 to 9
move 7 from 2 to 5
move 2 from 3 to 7
move 2 from 7 to 6
move 16 from 8 to 9
move 4 from 6 to 5
move 1 from 2 to 5
move 21 from 9 to 5
move 3 from 9 to 3
move 6 from 1 to 4
move 1 from 1 to 9
move 1 from 1 to 4
move 2 from 6 to 3
move 3 from 4 to 6
move 3 from 4 to 8
move 1 from 9 to 4
move 2 from 4 to 6
move 4 from 3 to 6
move 1 from 3 to 4
move 1 from 4 to 9
move 1 from 9 to 8
move 1 from 8 to 6
move 6 from 2 to 1
move 2 from 8 to 4
move 6 from 1 to 8
move 23 from 5 to 9
move 1 from 4 to 7
move 1 from 7 to 1
move 22 from 9 to 7
move 4 from 8 to 7
move 1 from 5 to 2
move 1 from 1 to 9
move 2 from 8 to 4
move 6 from 6 to 3
move 2 from 9 to 5
move 18 from 7 to 4
move 18 from 4 to 5
move 1 from 2 to 7
move 1 from 8 to 4
move 6 from 7 to 2
move 5 from 4 to 5
move 1 from 3 to 1
move 1 from 7 to 2
move 4 from 3 to 4
move 1 from 3 to 4
move 1 from 1 to 7
move 1 from 5 to 8
move 3 from 4 to 3
move 3 from 3 to 8
move 2 from 8 to 3
move 2 from 4 to 8
move 2 from 7 to 5
move 1 from 7 to 9
move 2 from 3 to 1
move 1 from 9 to 7
move 4 from 2 to 3
move 1 from 8 to 9
move 2 from 1 to 8
move 2 from 2 to 4
move 1 from 9 to 1
move 4 from 6 to 8
move 1 from 2 to 7
move 1 from 4 to 7
move 4 from 8 to 2
move 1 from 4 to 3
move 1 from 1 to 9
move 4 from 8 to 1
move 2 from 2 to 1
move 3 from 3 to 9
move 2 from 7 to 1
move 32 from 5 to 1
move 1 from 8 to 7
move 6 from 5 to 1
move 2 from 7 to 6
move 1 from 9 to 5
move 1 from 3 to 2
move 1 from 5 to 9
move 2 from 6 to 1
move 1 from 3 to 7
move 1 from 9 to 8
move 36 from 1 to 4
move 1 from 8 to 9
move 5 from 4 to 9
move 6 from 9 to 3
move 2 from 2 to 9
move 3 from 1 to 9
move 1 from 3 to 2
move 30 from 4 to 8
move 1 from 7 to 5
move 1 from 3 to 5
move 3 from 3 to 4
move 2 from 8 to 5
move 3 from 9 to 8
move 3 from 9 to 3
move 19 from 8 to 6
move 2 from 3 to 5
move 3 from 4 to 3
move 1 from 4 to 7
move 8 from 1 to 8
move 1 from 3 to 2
move 1 from 7 to 6
move 4 from 5 to 3
move 1 from 1 to 7
move 2 from 5 to 4
move 1 from 9 to 4
move 12 from 6 to 2
move 1 from 7 to 8
move 6 from 2 to 9
move 3 from 6 to 7
move 2 from 7 to 5
move 6 from 2 to 3
move 8 from 3 to 5
move 5 from 6 to 8
move 5 from 3 to 6
move 1 from 9 to 4
move 1 from 9 to 8
move 5 from 5 to 9
move 3 from 4 to 6
move 1 from 4 to 9
move 1 from 7 to 5
move 1 from 3 to 5
move 8 from 9 to 2
move 3 from 9 to 6
move 27 from 8 to 2
move 10 from 6 to 9
move 1 from 6 to 4
move 1 from 4 to 9
move 2 from 5 to 6
move 5 from 5 to 3
move 2 from 6 to 9
move 5 from 3 to 2
move 12 from 9 to 3
move 5 from 3 to 1
move 3 from 1 to 5
move 1 from 9 to 8
move 1 from 5 to 2
move 1 from 2 to 1
move 1 from 1 to 6
move 1 from 5 to 3
move 34 from 2 to 4
move 8 from 3 to 9
move 1 from 6 to 1
move 1 from 8 to 5
move 4 from 2 to 8
move 3 from 8 to 7
move 1 from 7 to 2
move 7 from 9 to 8
move 1 from 9 to 6
move 2 from 5 to 1
move 1 from 6 to 9
move 1 from 9 to 5
move 2 from 2 to 5
move 5 from 8 to 6
move 2 from 8 to 5
move 1 from 1 to 3
move 12 from 4 to 6
move 2 from 7 to 1
move 4 from 1 to 6
move 3 from 2 to 3
move 1 from 8 to 5
move 1 from 2 to 6
move 1 from 1 to 9
move 1 from 9 to 5
move 16 from 4 to 1
move 4 from 3 to 1
move 8 from 1 to 8
move 1 from 4 to 1
move 6 from 5 to 8
move 1 from 5 to 7
move 12 from 6 to 9
move 7 from 1 to 5
move 2 from 1 to 7
move 1 from 7 to 1
move 9 from 9 to 6
move 15 from 6 to 2
move 2 from 9 to 7
move 4 from 4 to 5
move 2 from 2 to 9
move 3 from 7 to 5
move 2 from 1 to 3
move 1 from 7 to 1
move 10 from 2 to 3
move 6 from 8 to 6
move 3 from 9 to 2
move 14 from 5 to 6
move 1 from 8 to 4
move 5 from 8 to 2
move 2 from 2 to 3
move 24 from 6 to 1
move 3 from 1 to 2
move 9 from 2 to 9
move 1 from 4 to 3
move 1 from 4 to 2
move 1 from 8 to 4
move 23 from 1 to 4
move 3 from 2 to 4
move 2 from 1 to 2
move 1 from 8 to 4
move 3 from 3 to 5
move 3 from 3 to 4
move 3 from 5 to 8
move 3 from 2 to 7
move 2 from 3 to 8
move 15 from 4 to 3
move 2 from 4 to 1
move 19 from 3 to 9
move 1 from 7 to 2
move 1 from 2 to 5
move 1 from 5 to 4
move 1 from 7 to 6
move 1 from 7 to 4
move 3 from 8 to 3
move 1 from 8 to 4
move 5 from 3 to 8
move 1 from 3 to 6
move 22 from 9 to 2
move 17 from 2 to 6
move 3 from 9 to 3
move 9 from 4 to 9
move 6 from 4 to 9
move 5 from 2 to 6
move 1 from 4 to 2
move 1 from 4 to 9
move 1 from 1 to 6
move 19 from 9 to 2
move 4 from 8 to 7
move 1 from 1 to 5
move 1 from 5 to 3
move 1 from 8 to 1
move 1 from 8 to 2
move 4 from 3 to 7
move 12 from 6 to 1
move 3 from 7 to 3
move 7 from 2 to 7
move 9 from 2 to 6
move 4 from 2 to 6
move 13 from 1 to 4
move 8 from 6 to 4
move 16 from 4 to 8
move 12 from 7 to 6
move 3 from 8 to 3
move 1 from 1 to 2
move 4 from 3 to 8
move 5 from 8 to 9
move 27 from 6 to 8
move 2 from 3 to 7
move 2 from 2 to 8
move 2 from 7 to 5
move 1 from 5 to 9
move 1 from 5 to 1
move 1 from 6 to 9
move 2 from 6 to 2
move 2 from 2 to 6
move 2 from 9 to 2
move 3 from 4 to 3
move 1 from 1 to 9
move 5 from 9 to 8
move 1 from 9 to 5
move 2 from 2 to 6
move 2 from 4 to 6
move 1 from 3 to 7
move 1 from 5 to 6
move 1 from 6 to 7
move 6 from 6 to 8
move 2 from 7 to 5
move 2 from 3 to 2
move 34 from 8 to 1
move 1 from 5 to 6
move 1 from 5 to 3
move 1 from 6 to 1
move 32 from 1 to 8
move 23 from 8 to 4
move 1 from 2 to 1
move 24 from 8 to 4
move 1 from 3 to 6
move 47 from 4 to 6
move 2 from 6 to 1
move 3 from 1 to 5
move 1 from 2 to 1
move 3 from 5 to 7
move 21 from 6 to 2
move 3 from 7 to 8
move 2 from 1 to 6
move 8 from 6 to 4
move 4 from 8 to 9
move 3 from 2 to 8
move 4 from 4 to 2
move 2 from 2 to 5
move 4 from 9 to 8
move 2 from 1 to 5
move 11 from 6 to 1
move 14 from 2 to 6
move 2 from 4 to 3
move 1 from 2 to 9
move 3 from 2 to 9
move 20 from 6 to 5
move 2 from 4 to 2
move 4 from 9 to 1
move 8 from 8 to 9
move 1 from 6 to 9
move 14 from 5 to 2
move 10 from 2 to 7
move 7 from 9 to 6
move 1 from 6 to 8
move 6 from 2 to 6
move 1 from 2 to 5
move 1 from 3 to 5
move 9 from 6 to 3
move 1 from 5 to 2
move 9 from 7 to 3
move 12 from 3 to 2
move 9 from 5 to 9
move 1 from 8 to 6
move 3 from 3 to 5
move 1 from 7 to 6
move 14 from 2 to 6
move 3 from 9 to 7
move 6 from 1 to 2
move 5 from 1 to 8
move 10 from 6 to 9
move 4 from 5 to 6
move 3 from 2 to 4
move 9 from 9 to 7
move 1 from 8 to 7
move 3 from 9 to 6
move 3 from 3 to 7
move 1 from 5 to 1
move 15 from 7 to 1
move 2 from 8 to 5
move 2 from 5 to 4
move 1 from 7 to 4
move 1 from 3 to 1
move 15 from 6 to 7
move 2 from 4 to 9
move 3 from 4 to 7
move 18 from 1 to 6
move 1 from 8 to 9
move 6 from 9 to 7
move 3 from 6 to 8
move 1 from 1 to 2
move 2 from 9 to 5
move 2 from 2 to 9
move 16 from 6 to 3
move 15 from 3 to 7
move 2 from 8 to 4
move 1 from 3 to 7
move 3 from 4 to 9
move 2 from 1 to 9
move 26 from 7 to 4
move 1 from 2 to 1
move 7 from 9 to 8
move 1 from 2 to 5
move 2 from 5 to 2
move 8 from 7 to 5
move 1 from 7 to 3
move 1 from 3 to 9
move 2 from 2 to 7
move 1 from 6 to 4
move 4 from 8 to 9
move 1 from 1 to 3
move 1 from 5 to 6
move 2 from 5 to 7
move 17 from 4 to 9
move 6 from 4 to 9
move 1 from 3 to 4
move 6 from 7 to 9
move 3 from 5 to 6
move 2 from 7 to 9
move 4 from 8 to 9
move 4 from 6 to 4
move 8 from 4 to 6
move 1 from 8 to 4
move 3 from 5 to 2
move 2 from 4 to 3
move 1 from 7 to 9
move 2 from 3 to 5
move 4 from 6 to 9
move 1 from 6 to 1
move 36 from 9 to 4
move 2 from 5 to 3
move 3 from 2 to 1
move 3 from 1 to 4
move 14 from 4 to 1
move 1 from 8 to 5
move 4 from 1 to 3
move 5 from 9 to 5
move 2 from 5 to 8
move 1 from 8 to 9
move 4 from 9 to 6
move 3 from 5 to 8
move 1 from 5 to 6
move 2 from 1 to 6
move 2 from 9 to 7
move 6 from 6 to 4
move 1 from 1 to 3
move 29 from 4 to 6
move 7 from 3 to 4
move 1 from 8 to 9
move 3 from 1 to 6
move 4 from 1 to 4
move 1 from 8 to 4
move 4 from 4 to 3
move 15 from 6 to 8
move 9 from 4 to 9
move 1 from 7 to 9
move 8 from 8 to 3
move 3 from 6 to 7
move 1 from 1 to 2
move 4 from 7 to 6
move 7 from 8 to 5
move 1 from 8 to 4
move 2 from 5 to 7
move 1 from 2 to 4
move 5 from 6 to 1
move 4 from 3 to 2`;

// We're doing this manually bc it's gonna be way quicker
// example
// const stack1 = ['Z', 'N'];
// const stack2 = ['M', 'C', 'D'];
// const stack3 = ['P'];

// const stacks = [stack1, stack2, stack3];
// const craneMoves = exCranePlan.split("\n");

// input
const stack1 = ['D', 'B', 'J', 'V'];
const stack2 = ['P', 'V', 'B', 'W', 'R', 'D', 'F'];
const stack3 = ['R', 'G', 'F', 'L', 'D', 'C', 'W', 'Q'];
const stack4 = ['W', 'J', 'P', 'M', 'L', 'N', 'D', 'B'];
const stack5 = ['H', 'N', 'B', 'P', 'C', 'S', 'Q'];
const stack6 = ['R', 'D', 'B', 'S', 'N', 'G'];
const stack7 = ['Z', 'B', 'P', 'M', 'Q', 'F', 'S', 'H'];
const stack8 = ['W', 'L', 'F'];
const stack9 = ['S', 'V', 'F', 'M', 'R'];

const stacks = [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9];
const craneMoves = cranePlan.split("\n");

let stepMoves = [];

craneMoves.forEach((step, i) => {
    let stepArray = step.split(" ").map(Number);
    stepMoves.push( [stepArray[1], stepArray[3], stepArray[5]] );
});

// console.log(stepMoves);

// let finalStack = stacks.slice();
// console.log(finalStack);
// function moveCrates(crateArray, moves) {
//     moves.forEach((step, i) => {
//         let moveCount = step[0];
//         let moveStack = crateArray[step[1] - 1];
//         let moveTarget = crateArray[step[2] - 1];
//         let movedCrates = moveStack.splice( -moveCount, moveCount );
//         movedCrates.reverse();
//         moveTarget.push(...movedCrates);
//     });
//     // console.log(finalStack);
// }

// moveCrates(finalStack, stepMoves);

// let solution = "";
// finalStack.forEach((stack, i) => {
//     solution += stack.pop();
// });
// console.log("solution for part one is " + solution);

// Part two
// this isn't cloning array as expected so comment out part 1 to solve part 2
let finalStack9001 = stacks.slice();
console.log(finalStack9001);
function moveCrates9001(crateArray, moves) {
    moves.forEach((step, i) => {
        let moveCount = step[0];
        let moveStack = crateArray[step[1] - 1];
        let moveTarget = crateArray[step[2] - 1];
        let movedCrates = moveStack.splice( -moveCount, moveCount );
        // movedCrates.reverse();
        moveTarget.push(...movedCrates);
    });
}

moveCrates9001(finalStack9001, stepMoves);

solution = "";
finalStack9001.forEach((stack, i) => {
    solution += stack.pop();
});

console.log("solution for part two is " + solution);
