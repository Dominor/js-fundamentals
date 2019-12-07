/**
 * Determine the location of an item in the array
 */
exports.indexOf = function(arr, item) {
    return arr.indexOf(item);
};

/**
 * Sum the items of an array
 */
exports.sum = function(arr) {
    var reducer = function (accumulator, currentValue) {
        return accumulator + currentValue;
    };
    return arr.reduce(reducer, 0);
};

/**
 * Remove all instances of an item from an array
 */
exports.remove = function(arr, item) {
    var isDifferent = function (value) {
        return value !== item;
    };
    return arr.filter(isDifferent, item);
};

/**
 * Remove all instances of an item from an array by mutating original array
 */
exports.removeWithoutCopy = function(arr, item) {

    var matches = function (value, index, array) {
        if (value === item) {
            return array.splice(index, 2)[0];
        }
        return value;
    };

    arr.map(matches);
    return arr;
};

/**
 * Add an item to the end of the array
 */
exports.append = function(arr, item) {

    arr.push(item);
    return arr;
};

/**
 * Remove the last item of an array
 */
exports.truncate = function(arr) {

    arr.pop();
    return arr;
};

/**
 * Add an item to the beginning of an array
 */
exports.prepend = function(arr, item) {

    arr.unshift(item);
    return arr;
};

/**
 * Remove the first item of an array
 */
exports.curtail = function(arr) {

    arr.shift();
    return arr;
};

/**
 * Join two arrays together
 */
exports.concat = function(arr1, arr2) {

    var mergedArray = arr1.concat(arr2);
    return mergedArray;
};

/**
 * Add an item to an array in the specified position
 */
exports.insert = function(arr, item, index) {

    arr.splice(index, 0, item);
    return arr;
};

/**
 * Count the number of occurrences of an item in an array
 */
exports.count = function(arr, item) {

    var countOccurrences = function (accumulator, currentValue) {
        if (currentValue === item) {
            accumulator++;
        }
        return accumulator;
    };
    return arr.reduce(countOccurrences, 0);
};

/**
 * Find all items which container multiple occurrences in the array
 */
exports.duplicates = function(arr) {

};

/**
 * Square each number in the array
 */
exports.square = function(arr) {
};

/**
 * Find all occurrenes of an item in an array
 */
exports.findAllOccurrences = function(arr, target) {
};
