class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set();
        for(let i = 0; i < nums.length; i++){
            if(!set.has(nums[i])){
                set.add(nums[i]);
            }
        }
        console.log(set);
        let len = 0;
        let max_len = 0;
        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i])){
                let num = nums[i];
                let back = 0;
                let front = 0;
                while(set.has(num-1)){
                    back++;
                    num--;
                    set.delete(num);
                }
                num = nums[i];
                while(set.has(num+1)){
                    front++;
                    num++;
                    set.delete(num);
                }
                len = front + back + 1;
                set.delete(nums[i]);
                max_len = Math.max(len, max_len);
            }
        }
        return max_len;
    }
}
