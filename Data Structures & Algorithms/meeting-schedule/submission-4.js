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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        for(let i = 0; i < intervals.length-1; i++){
            if(intervals[i].end > intervals[i+1].start) return false;
        }
        return true;
        // let times = [];
        // for(let i = 0; i < intervals.length; i++){
        //     times.push([intervals[i].start, 'a']);
        //     times.push([intervals[i].end, 'd']);
        // }
        // times.sort((a, b) => a[0] - b[0]);

        // let stack = [];
        // for(let i = 0; i < times.length; i++){
        //     if(times[i][1] === 'a'){
        //         if(stack.length > 0) return false;
        //         stack.push(times[i][0]);
        //     } else {
        //         stack.pop();
        //     }
        // }
        // return true;
    }
}
