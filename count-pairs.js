// add whatever parameters you deem necessary

// O(n)
function countPairs(arr, num) {
    let set = new Set(arr);
    let pairs = 0;

    for (let i of arr) {
        set.delete(i);
        if (set.has(num - i)) {
            pairs++;
        } 
    }
    return pairs;
}

// O(n log n) or O(n) if already sorted
// function countPairs(arr, num) {
//     arr.sort((a, b) => a - b);
//     let left = 0;
//     let right = arr.length - 1;
//     let pairs = 0;

//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === num) {
//             pairs++;
//             left++;
//             right--;
//         } else if (sum < num) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return pairs;
// }

module.exports = countPairs;
