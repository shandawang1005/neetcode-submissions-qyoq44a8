class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let cell = board[i][j];
                if (cell === ".") continue

                let rowKey = cell + "in row" + i;
                let colKey = cell + "in col" + j;
                let boxKey = cell + "in box" + Math.floor(j / 3) + "-" + Math.floor(i / 3)
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);

            }
        }return true
    }
}
