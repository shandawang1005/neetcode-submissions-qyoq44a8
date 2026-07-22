class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length < 2) return nums;

        let obj = {};

        for (let i = 0; i < nums.length; i++) {
            if (obj[nums[i]]) {
                obj[nums[i]]++;
            } else {
                obj[nums[i]] = 1;
            }
        }

        let sortable = [];
        for (var entry in obj) {
            sortable.push([entry, obj[entry]]);
        }

        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });

        sortable = sortable.splice(0, k);
        let returnable = [];

        sortable.forEach((entry) => {
            returnable.push(parseInt(entry[0]));
        });

        return returnable;
    }
}
