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
    let commandArr = new Array();
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

function parseOutput( output ) {
    // let filesystem = ['/'];
    let filesystem = {};

    output.forEach((line, i) => {
        console.log(i);
        let lineParse = line[0].split(" ");
        let directoryPointer = 0; // this isn't really gonna do what i want it to 
        let cwd = "/";

        // change directory
        if ( lineParse[1] === "cd" ) {
            if ( lineParse[2] === "/" ) {
                directoryPointer = 0;
                cwd = "/";
            } else if ( lineParse[2] === ".." ) {
                directoryPointer = directoryPointer - 1;
            } else {
                // this isn't gonna work 
                cwd = lineParse[2];
                console.log('plot ' + cwd);
                // do a search based on cwd to target array to make nested 
                if ( cwd === "/" || directoryPointer === 0) {
                    if (!filesystem.includes(cwd)) {
                        console.log('poot1');
                        filesystem.push(cwd);
                    }
                } else {
                    if (!filesystem[directoryPointer].includes(cwd)) {
                        console.log('poot2 ' + directoryPointer);
                        filesystem[directoryPointer].push(cwd);
                    }
                }
            }
        // list files
        } else if ( lineParse[1] === "ls" ) {
            console.log({i});
            for ( let j = 0; j < line.length; j++) {
                
                if ( j > 1 ) {
                    // why is ls getting added
                    console.log({j});
                    if ( cwd === "/") {
                        if (!filesystem.includes(line)) {
                            filesystem.push(line);
                        }
                    } else {
                        if (!filesystem[directoryPointer].includes(line)) {
                            filesystem[directoryPointer].push(line);
                        }
                    }
                }
            }
        }

    });

    return filesystem;
}

console.log(parseOutput(outputArrayParsed));

let directorySizes = [];
filesystem.forEach((item, i) => {
    // get size of directory, add to array
   // if file 
   item = item.split(" ");
//  directorySizes += parseInt(item[1]);
});

// find all values less than 100000

// sum all values 
let directorySum = "";

console.log("solution for part one is " + directorySum);

// [ {dir: a, } ]

// - / (dir)
//   - a (dir)
//     - e (dir)
//       - i (file, size=584)
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)

// const TreeNode = {
//     path: 'test/fixtures',
//     children: [
//       TreeNode {
//         path: 'test/fixtures/example.js',
//         children: []
//       },
//       TreeNode {
//         path: 'test/fixtures/utils',
//         children: [Array]
//       }
//     ]
//   }

//   const home = {
//     path: '/',
//     children: [
//         { 
//             name: 'b.text',
//             size: 13333,
//         }, 
//         {
//             name: 'c.dat',
//             size: 34444
//         },
//         {
//             path: 'd',
//             children: [
//                 { 
//                     name: 'b.text',
//                     size: 13333,
//                 }, 
//                 {
//                     name: 'c.dat',
//                     size: 34444
//                 }
//             ]
//         }
//     ]
//   }