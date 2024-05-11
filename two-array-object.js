// add whatever parameters you deem necessary

// O(n)
function twoArrayObject(keys, values) {
    let obj = {};
    const maxLength = Math.min(keys.length, values.length);

    for (let i = 0; i < maxLength; i ++) {
        obj[keys[i]] = values[i];
    }

    for (let i = maxLength; i < keys.length; i++){
        obj[keys[i]] = null;
    }

    return obj;
}

module.exports = twoArrayObject;
