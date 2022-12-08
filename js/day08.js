const extreeHeights = `30373
25512
65332
33549
35390`;

const treeHeights = ``;

// const treeArray = extreeHeights.split("\n");
const treeArray = treeHeights.split("\n");

treeArray.forEach((row, i) => {
    treeArray[i] = row.split("");
});

// console.log(treeArray);

let visible = 0;
treeArray.forEach((row, i) => {
    row.forEach((tree, j) => {
        // console.log({i});
        // If we're in the first row or the last row, it's visible
        if ( (i === 0 || i + 1 === treeArray.length)  ) {
            // console.log(treeArray.length);
            visible++;
        } else {
            // If we're in the first column or the last column, it's visible
            if ( j === 0 || j + 1 === row.length ) {
                visible++
            } else {
                // needs to be entire row or column, not just adjacent 
                // let left = row[j - 1]; 
                // let right = row[j + 1];
                // let top = treeArray[i - 1][j];
                // let bottom = treeArray[i + 1][j];
                // if ( (left < tree) || (right < tree) || (top < tree) || (bottom < tree) ) {
                //     visible++;
                // }
                let leftRow = row.slice( 0, j); 
                let rightRow = row.slice(j + 1, row.length);
                let topCol = [];
                for (let k = 0; k < i; k++) {
                    topCol.push(treeArray[k][j]);
                };
                let bottomCol = [];
                for (let k = i + 1; k < treeArray.length; k++) {
                    bottomCol.push(treeArray[k][j]);
                };
                // if (rightRow.every(el => el < tree)) {
                //     console.log(rightRow);
                //     console.log(tree);
                //     console.log('row is ' + i + ' col is ' + j + ' treu');
                // }
                if ( (leftRow.every(el => el < tree)) || (rightRow.every(el => el < tree)) || (topCol.every(el => el < tree)) || (bottomCol.every(el => el < tree)) ) {
                    visible++;
                }
            }
        }
    });
});

console.log("solution to part one is " + visible);