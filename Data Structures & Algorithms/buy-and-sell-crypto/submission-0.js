class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let right_max = new Array(prices.length, 0);
        for(let i = prices.length-1; i >= 0; i--){
            if(i === prices.length-1){
                right_max[i] = prices[i];
            } else {
                right_max[i] = Math.max(prices[i], right_max[i+1]);
            }
        }
        console.log(right_max);
        // return 6
        let max_diff = 0;
        for(let i = 0; i < prices.length-1; i++){
            let diff = right_max[i] - prices[i];
            max_diff = Math.max(max_diff, diff); 
        }
        return max_diff;
    }
}
