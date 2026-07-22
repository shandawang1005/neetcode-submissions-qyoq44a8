class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // TODO: implement
        const obj = {};
        for (let n of nums) {
            obj[n] = obj[n] + 1 || 1;
        }
        const place = Array.from({ length: nums.length + 1 }, () => []);
        for (let [n, count] of Object.entries(obj)) {
            place[count].push(Number(n));
        }

        const result = [];
        //if place[x] = [], it will skip, so we only cares about ending the loop faster, where result.length<k
        for (let i = place.length - 1; i >= 0 && result.length < k; i--) {
            //result might be more than 1; so another loop through result;
            for (let n of place[i]) {
                result.push(n);
                if (result.length == k) {
                    break;
                }
            }
        }
        return result;
    }
}
