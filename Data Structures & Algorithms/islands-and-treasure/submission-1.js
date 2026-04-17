class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let empty = [];
    let n = grid.length;
    let m = grid[0].length;
    let INF = 2147483647;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] === 0) empty.push([i, j]);
        }
    }

    for(let i = 0; i < empty.length; i++){
        let ans = [empty[i]];
        let arr = [];
        let count = 0;
        while(ans.length > 0){
            arr.push(ans.shift());
            if(ans.length === 0){
                count++;
                for(let j = 0; j < arr.length; j++){
                    let a = arr[j][0];
                    let b = arr[j][1];
                    if(b < m-1 && (grid[a][b+1] === INF || grid[a][b+1] > count)) ans.push([a, b+1]);
                    if(a < n-1 && (grid[a+1][b] === INF || grid[a+1][b] > count)) ans.push([a+1, b]);
                    if(b > 0 && (grid[a][b-1] === INF || grid[a][b-1] > count)) ans.push([a, b-1]);
                    if(a > 0 && (grid[a-1][b] === INF || grid[a-1][b] > count)) ans.push([a-1, b]);
                }
                for(let k = 0; k < ans.length; k++){
                    let a = ans[k][0];
                    let b = ans[k][1];
                    if(grid[a][b] > count){
                        grid[a][b] = count;
                    }
                }
                arr = [];
            }
        }
    }

    // let max = 0;
    // for(let p = 0; p < n; p++){
    //     for(let q = 0; q < m; q++){
    //         if(grid[p][q] === 1) return -1;
    //         max = Math.max(max, grid[p][q]);
    //     }
    // }
    // if(empty.length === 0) return 0;
    // return max-2;
    }
}
