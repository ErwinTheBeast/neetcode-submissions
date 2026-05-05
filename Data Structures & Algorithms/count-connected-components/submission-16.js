function dfs(map, i, visited){
        visited[i] = -1;
        if(!map.has(i)) return;
        let arr = map.get(i);
        for(let j = 0; j < arr.length; j++){
            if(visited[arr[j]] !== -1){
                dfs(map, arr[j], visited);
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

        let count = 0;
        let visited = [];
        for(let i = 0; i < n; i++){
            visited.push(i);
        }
        for(let i = 0; i < n; i++){
            if(map.has(i)){
                dfs(map, i, visited);
                count++;
            }
        }

        for(let i = 0; i < n; i++){ // If not visited at all it means no edges so basically isolated nodes
            if(visited[i] >= 0) count++;
        }
        return count;
    }
}
