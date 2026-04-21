class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let ans = 1;
        if(n === 0) return ans;
        if(x === 0) return x;
        let nan = Math.abs(n);
        while(nan > 0){
            if(nan % 2 !== 0) ans = ans*x;
            x = x*x;
            nan = Math.floor(nan/2);
        }
        if(n < 0) ans = 1/ans;
        return ans;
    }
}
