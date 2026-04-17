/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length === 0) return 0;
        let times = [];
        for(let i = 0; i < intervals.length; i++){
            times.push([intervals[i].start, 'a']);
            times.push([intervals[i].end, 'd']);
        }
        times.sort((a, b) => a[0] - b[0]);

        let stack = [];
        let max = 0;
        for(let i = 0; i < times.length; i++){
            if(times[i][1] === 'a'){
                if(times[i][0] === times[i+1][0] && times[i+1][1] === 'd'){
                    stack.pop();
                }
                stack.push(times[i][0]);
                max = Math.max(max, stack.length);
            } else {
                stack.pop();
            }
        }
        return max;
        // return true;
    }
}
