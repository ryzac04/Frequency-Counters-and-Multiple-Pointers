// add whatever parameters you deem necessary

// O(n)
function pivotIndex(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++){
        let rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
}

module.exports = pivotIndex;
