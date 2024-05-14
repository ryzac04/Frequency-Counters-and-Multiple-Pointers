// add whatever parameters you deem necessary

// O(n)
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Move left pointer until a negative number is found
        while (arr[left] > 0 && left < right) {
            left++;
        }

        // Move right pointer until a positive number is found
        while (arr[right] < 0 && left < right) {
            right--;
        }

        // Swap positive and negative numbers
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}

module.exports = separatePositive;