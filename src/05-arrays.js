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
    var equals = function (value) {
        return value !== item;
    };
    arr.filter(equals, item);
};

/**
 * Remove all instances of an item from an array by mutating original array
 */
exports.removeWithoutCopy = function(arr, item) {
};

/**
 * Add an item to the end of the array
 */
exports.append = function(arr, item) {
};

/**
 * Remove the last item of an array
 */
exports.truncate = function(arr) {
};

/**
 * Add an item to the beginning of an array
 */
exports.prepend = function(arr, item) {
};

/**
 * Remove the first item of an array
 */
exports.curtail = function(arr) {
};

/**
 * Join two arrays together
 */
exports.concat = function(arr1, arr2) {
};

/**
 * Add an item to an array in the specified position
 */
exports.insert = function(arr, item, index) {
};

/**
 * Count the number of occurrences of an item in an array
 */
exports.count = function(arr, item) {
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
