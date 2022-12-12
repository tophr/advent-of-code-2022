const outputEx = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const output = ``;

const outputArray = outputEx.split("\n");

function parseCommands( output ) {
    let commandArr = [];
    let commandPointer = -1;
    output.forEach((line, i) => {
        if ( line.charAt(0) === "$" ) {
            commandPointer++;
            commandArr.push([line]);
        } else {
            commandArr[commandPointer].push(line);
        }
    });
    return commandArr;
}

let outputArrayParsed = parseCommands( outputArray );
// console.log(outputArrayParsed);

function parseOutput( output ) {
    let filesystem = {"/": { "type": "dir"}};
    let cwd = "/";
    let directoryPointer = 'filesystem["/"]'; // this isn't really gonna do what i want it to 
    
    output.forEach((line, i) => {
        let lineParse = line[0].split(" ");
        let command = lineParse[1];

        // change directory
        if ( command === "cd" ) {
            let dir = lineParse[2];
            if ( dir === "/" ) {
                cwd = "/";
                directoryPointer = 'filesystem["/"]';
            } else if ( dir === ".." ) {
                let str = directoryPointer.replace(/\[[^\[\]]*\]$/, ""); //directoryPointer.substring(0, str);
                if ( str === "filesystem" ) {
                    directoryPointer = 'filesystem["/"]';
                } else {
                    directoryPointer = str;
                }
                let regex = /\[([^\[\]]*)\]$/;
                cwd = regex.exec(directoryPointer)[1];
            } else {
                cwd = dir;
                if ( cwd === "/") {
                    // nothing 
                } else {
                    let ref = directoryPointer + '["' + dir + '"]';
                    directoryPointer = ref;
                }
            }
        // list files
        } else if ( command === "ls" ) {
            for ( let j = 0; j < line.length; j++) {
                if ( j > 0 ) {
                    let lineArr = line[j].split(" ");
                    if ( lineArr[0] === "dir") {
                        eval(directoryPointer + '["' + lineArr[1] +  '"] = {"type": "dir"}');
                    } else {
                        // eval(directoryPointer + '["' + lineArr[1] + '"] = ' + lineArr[0] + '');
                        eval(directoryPointer + '["' + lineArr[1] + '"] = {"type": "file", "size": ' + lineArr[0] + '}');
                    }
                }
            }
        }

    });

    return filesystem;
}

let filesystem = parseOutput(outputArrayParsed);
console.log(filesystem);

let directorySizes = {};

function getSizes(obj, dir) {
    Object.keys(obj).forEach(file => {
        if ( obj[file].type === "file") {
            if ( directorySizes[dir] ) {
                directorySizes[dir].push(obj[file].size);
            } else {
                directorySizes[dir] = [];
                directorySizes[dir].push(obj[file].size);
            }
        } else if (obj[file].type === "dir") {
            getSizes(obj[file], file);
        } else {
            if ( directorySizes[dir] ) {
                directorySizes[dir].push(0);
            } else {
                directorySizes[dir] = [];
                directorySizes[dir].push(0);
            }
        }
    });
}

getSizes(filesystem["/"], 'root');
console.log(directorySizes);

let directorySubTotals = {};
Object.keys(directorySizes).forEach(dir => {
    let sum = directorySizes[dir].reduce((a, b) => a + b, 0);
    directorySubTotals[dir] = sum;
});
console.log(directorySubTotals);

let directoryTotals = {};
function nestedDirs(obj, dir) {
    Object.keys(obj).forEach(file => {
        if (obj[file].type === "dir") {
            if ( directoryTotals[file] ) {
                directoryTotals[file].push(directorySubTotals[file]);
            } else {
                directoryTotals[file] = [];
                directoryTotals[file].push(directorySubTotals[file]);
            }
            if ( directoryTotals[dir] ) {
                // if (dir !== "root") {
                    directoryTotals[dir].push(directorySubTotals[file]);
                // }
            } else {
                directoryTotals[dir] = [];
                directoryTotals[dir].push(directorySubTotals[file]);
            }
            if (!directoryTotals["root"].includes(directorySubTotals[file])) {
                directoryTotals["root"].push(directorySubTotals[file]);
            }
            // console.log(obj);
            // console.log(file);
            // console.log(directorySubTotals[file]);
            nestedDirs(obj[file], file);
        } else if ( dir === "root" ) {
            // console.log(directoryTotals);
            if ( directoryTotals[dir]) {
                if (!directoryTotals[dir].includes(directorySubTotals[dir])) {
                    // this never runs
                    directoryTotals[dir].push(directorySubTotals[dir]);
                }
            } else {
                directoryTotals[dir] = [directorySubTotals[dir]];
                // if (!directoryTotals[dir].includes(directorySubTotals[dir])) {
                //     directoryTotals[dir].push(directorySubTotals[dir]);
                // }
            }
        }
    });
};
nestedDirs(filesystem["/"], 'root');
console.log(directoryTotals);

let directoryTotalSums = {};
Object.keys(directoryTotals).forEach(dir => {
    let sum = directoryTotals[dir].reduce((a, b) => a + b, 0);
    directoryTotalSums[dir] = sum;
});
console.log(directoryTotalSums);

let smallDirs = [];
Object.keys(directoryTotalSums).forEach(dir => {
    if ( directoryTotalSums[dir] < 100000 ) {
        smallDirs.push(directoryTotalSums[dir]);
    }
});
console.log(smallDirs);
let sum = smallDirs.reduce((a, b) => a + b, 0);

console.log("solution for part one is " + sum);
