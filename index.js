/**

You are given an integer array nums and an array queries where queries[i] = [vali, indexi].

For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.

Return an integer array answer where answer[i] is the answer to the ith query.

*/

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let res = [];

    for(let i = 0; i < queries.length; i++){
        let k = queries[i][1];
        let a = queries[i][0];
        let temp = [];
        nums[k] = nums[k] + a;
        temp = nums.filter((a)=>a%2 == 0)
        res.push(sumArr(temp)) // you can also use reduce to get the sum
        //.reduce((acc, cur) => cur % 2 ? acc : acc+cur, 0)
    }
    function sumArr(x){
        let add = 0;
        for(let i = 0; i < x.length; i++){
             add += x[i];
        }
        return add;
    }
    return res;
};
