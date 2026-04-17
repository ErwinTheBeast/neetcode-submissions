class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < board.length; i++){
        let set = new Set();
        for(let j = 0; j < board.length; j++){
            if(board[i][j] !== "."){
                if(set.has(board[i][j])){
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
    }
    for(let l = 0; l < board.length; l++){
        let set = new Set();
        for(let k = 0; k < board.length; k++){
            if(board[k][l] !== "."){
                if(set.has(board[k][l])){
                    return false;
                } else {
                    set.add(board[k][l]);
                }
            }
        }
    }
    for(let a = 0; a <= 6; a= a+3){
        for(let b = 0; b <= 6; b=b+3){
            let set = new Set();
            for(let x=a; x < a+3; x++){
                for(let y=b; y <b+3; y++){
                    if(board[x][y] !== ".") {
                        if(set.has(board[x][y])){
                            return false;
                        } else {
                            set.add(board[x][y]);
                        }
                    }
                }
            }
        }
    }
    return true;
    }
}
