// add whatever parameters you deem necessary

// O(n)
function freqCounter(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] + 1) || 1;
    }
    return freq;
}

// O(m + n)
function constructNote(message, letters) {
    const msgFreq = freqCounter(message);
    const ltrFreq = freqCounter(letters);

    for (char in msgFreq) {
        if (!ltrFreq[char]) return false;
        if (msgFreq[char] > ltrFreq[char]) return false;
    }
    
    return true;
}

module.exports = constructNote;
