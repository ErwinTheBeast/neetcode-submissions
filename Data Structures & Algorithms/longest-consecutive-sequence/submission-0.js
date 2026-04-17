class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a-b);
    if(nums.length === 0){
        return 0;
    }
    let max=1;
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i]=== nums[i-1]+1){
            count++;
        }
        if(nums[i] !== nums[i-1]+1 && nums[i] !== nums[i-1]){
            count = 1;
        }
        if(count > max){
            max= count;
        }
    }
    return max;
    }
}
