// add whatever parameters you deem necessary

// O(n)
function longestFall(arr) {
    if (arr.length === 0) return 0;

    let longest = 1;
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i - 1]) {
            currentLength++;
            longest = Math.max(longest, currentLength);
        } else {
            currentLength = 1;
        }
    }

    return longest;
}

module.exports = longestFall;