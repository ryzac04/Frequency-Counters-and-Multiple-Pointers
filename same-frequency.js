// add whatever parameters you deem necessary

// O(m +n)
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    const count1 = {};
    const count2 = {};

    for (let digit of str1) {
        count1[digit] = (count1[digit] || 0) + 1;
    }

    for (let digit of str2) {
        count2[digit] = (count2[digit] || 0) + 1;
    }

    for (key in count1) {
        if (count1[key] !== count2[key]) return false;
    }

    return true;
}

module.exports = sameFrequency;