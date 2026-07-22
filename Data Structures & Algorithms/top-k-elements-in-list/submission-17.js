class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  const obj = {};
  for (let n of nums){
    obj[n] = obj[n]+1||1;
  }
  console.log(obj)
  return Object.keys(obj).sort((a,b)=>obj[b]-obj[a]).slice(0,k)
    }
}
