// add whatever parameters you deem necessary

// O(n)
function averagePair(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let average = (array[left] + array[right] / 2);
        if (average === target) return true;
        else if (average < target) left++;
        else right--;
    }

    return false;
}

module.exports = averagePair;
