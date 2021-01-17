/*
Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]
*/

var findMaxConsecutiveOnes = function(nums) {
    var ans = 0;
    
    var count = 0;
    for (var i in nums)
     {
        count = nums[i] === 1 ? count + 1 : 0;
        if (count > ans) {
            ans = count;
        }
    }
    
    return ans;
};
var nums=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
var ans = findMaxConsecutiveOnes(nums);
console.log(ans);