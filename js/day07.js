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
// console.log(outputArray);

function parseCommands( output ) {
    let commandArr = new Array();
    let commandPointer = -1;
    output.forEach((line, i) => {
        if ( line.charAt(0) === "$" ) {
            commandPointer++;
            commandArr.push([line]);
            // console.log({i});
            // console.log(commandArr);
        } else {
            // console.log(commandPointer);
            // console.log(line);
            commandArr[commandPointer].push(line);
        }
    });
    return commandArr;
}

console.log(parseCommands( outputArray ));


function parseOutput( output ) {
    let filesystem = [];

    output.forEach((line, i) => {
        let lineParse = line.split(" ");
        let directoryPointer = 0;

        // Running a command
        if ( lineParse[0] === "$" ) {
            // change directory
            if ( lineParse[1] === "cd" ) {
                if ( lineParse[2] === "/" ) {
                    directoryPointer = 0;
                } else if ( lineParse[2] === ".." ) {
                    directoryPointer = directoryPointer - 1;
                } else {
                    // this isn't gonna work 
                    directoryPointer === lineParse[2];
                }
            // list files
            } else if ( lineParse[1] === "ls" ) {
                for ( let j = 0; j < output.length; j++) {
                    let pointer = (j + i) % output.length;
                    // run this until next $
                    // probably more efficient to split array sooner
                    // console.log(output[pointer]);
                }
            }
        }

    });

    return filesystem;
}


