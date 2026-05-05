function dfs(map, i, nums){
        // console.log('Hi');
        nums[i] = -1;
        if(!map.has(i)) return;
        let arr = map.get(i);
        for(let j = 0; j < arr.length; j++){
            if(nums[arr[j]] !== -1){
                dfs(map, arr[j], nums);
            }
        }
        map.delete(i);
        return; 
    }

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    
    countComponents(n, edges) {
        let map = new Map();

        for(let i = 0; i < edges.length; i++){
            if(map.has(edges[i][0])){
                let arr = map.get(edges[i][0]);
                arr.push(edges[i][1]);
                map.set(edges[i][0], arr);
            } else {
                map.set(edges[i][0], [edges[i][1]]);
            }

            if(map.has(edges[i][1])){
                let arr = map.get(edges[i][1]);
                arr.push(edges[i][0]);
                map.set(edges[i][1], arr);
            } else {
                map.set(edges[i][1], [edges[i][0]]);
            }
        }

        console.log(map);
        let count = 0;
        let arr = [];
        for(let i = 0; i < n; i++){
            arr.push(i);
        }
    console.log(arr);
        for(let i = 0; i < n; i++){
            console.log(map);
            if(map.has(i)){
                arr[i] = -1;
                dfs(map, i, arr);
                count++;
            }
        }
        console.log(arr);
        console.log(count);
        for(let i = 0; i < n; i++){
            if(arr[i] >= 0) count++;
        }
        // console.log(count);
        return count;
    }
}
